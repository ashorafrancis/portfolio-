import { Resend } from 'resend';

/**
 * Simple in‑memory rate limiter (IP → timestamps). Limits to 5 requests per hour per IP.
 */
const rateLimitMap = new Map();
const LIMIT = 5;
const WINDOW_MS = 60 * 60 * 1000; // 1 hour

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  // Rate limiting
  const ip = req.headers['x-forwarded-for'] || req.socket?.remoteAddress || 'unknown';
  const now = Date.now();
  const timestamps = rateLimitMap.get(ip) || [];
  const recent = timestamps.filter(ts => now - ts < WINDOW_MS);
  if (recent.length >= LIMIT) {
    return res.status(429).json({ error: 'Too many requests, please try again later.' });
  }
  recent.push(now);
  rateLimitMap.set(ip, recent);

  // Validate input
  const { name, email, subject, message } = req.body || {};
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields (name, email, message).' });
  }
  const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email address.' });
  }

  const targetEmail = process.env.CONTACT_EMAIL;
  const resendApiKey = process.env.RESEND_API_KEY;
  if (!targetEmail || !resendApiKey) {
    console.error('Missing CONTACT_EMAIL or RESEND_API_KEY environment variables');
    return res.status(500).json({ error: 'Server configuration error.' });
  }

  const resend = new Resend(resendApiKey);
  const emailSubject = subject || `Portfolio Chatbot Message from ${name}`;
  const emailContent = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;

  try {
    const { data, error } = await resend.emails.send({
      from: `Portfolio <${process.env.RESEND_FROM || targetEmail}>`,
      to: targetEmail,
      subject: emailSubject,
      text: emailContent,
    });
    if (error) {
      console.error('Resend error:', error);
      return res.status(500).json({ error: 'Failed to send email.' });
    }
    return res.status(200).json({ success: true, data });
  } catch (err) {
    console.error('Unexpected error:', err);
    return res.status(500).json({ error: 'Unexpected server error.' });
  }
}

