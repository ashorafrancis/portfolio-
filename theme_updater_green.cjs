const fs = require('fs');
const path = require('path');

const directory = 'd:\\Ashora Francis\\NeST\\day2\\src';

const replacements = {
    // We already have deep blue/grey backgrounds from the previous script:
    // #0a0f1c, #020617, #0f172a, #1e293b. We will keep them exactly as they are.

    // Rename CSS Variables from blue to green
    "--accent-darkblue": "--accent-darkgreen",
    "--accent-deepblue": "--accent-deepgreen",
    "--accent-blue": "--accent-green",
    "--accent-skyblue": "--accent-lightgreen",

    // Rename Class Names
    "text-darkblue": "text-darkgreen",
    "text-deepblue": "text-deepgreen",
    "text-blue": "text-green",
    "text-skyblue": "text-lightgreen",
    "icon-deepblue": "icon-deepgreen",
    "icon-skyblue": "icon-lightgreen",

    // Hex replacements: Blue -> Green
    "#2563eb": "#059669", // darkblue -> emerald-600
    "#1d4ed8": "#047857", // deepblue -> emerald-700
    "#3b82f6": "#10b981", // blue -> emerald-500
    "#0ea5e9": "#34d399", // skyblue -> emerald-400
    "#60a5fa": "#6ee7b7", // light blue -> emerald-300
    "#93c5fd": "#a7f3d0", // lighter blue -> emerald-200

    // RGBA replacements: Blue -> Green
    "59, 130, 246": "16, 185, 129",  // blue -> emerald-500
    "37, 99, 235": "5, 150, 105",    // darkblue -> emerald-600
    "29, 78, 216": "4, 120, 87",     // deepblue -> emerald-700
    "14, 165, 233": "52, 211, 153"   // skyblue -> emerald-400
};

function processFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf-8');
    const originalContent = content;

    for (const [oldValue, newValue] of Object.entries(replacements)) {
        content = content.split(oldValue).join(newValue);
    }
    
    // Manual tweaks for index.css specific gradients
    if (filePath.endsWith('index.css')) {
        // Fix the gradient-primary to be a pure green gradient instead of green fading to grey
        content = content.replace(
            "linear-gradient(135deg, #059669 0%, #94a3b8 50%, #475569 100%)",
            "linear-gradient(135deg, #34d399 0%, #10b981 100%)"
        );
        // Fix the mesh background to use deep blue with a touch of green
        content = content.replace(
            "radial-gradient(ellipse 60% 40% at 20% 15%, rgba(4, 120, 87, 0.15) 0%, transparent 70%),",
            "radial-gradient(ellipse 60% 40% at 20% 15%, rgba(30, 58, 138, 0.15) 0%, transparent 70%)," // blue-900
        );
        content = content.replace(
            "radial-gradient(ellipse 70% 50% at 50% 80%, rgba(71, 85, 105, 0.08) 0%, transparent 70%),",
            "radial-gradient(ellipse 70% 50% at 50% 80%, rgba(16, 185, 129, 0.06) 0%, transparent 70%)," // emerald-500
        );
    }

    if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf-8');
        console.log(`Updated ${filePath}`);
    }
}

function processDirectorySafe(dirPath) {
    const files = fs.readdirSync(dirPath);

    files.forEach(file => {
        const fullPath = path.join(dirPath, file);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            processDirectorySafe(fullPath);
        } else if (file.endsWith('.css') || file.endsWith('.jsx')) {
            processFile(fullPath);
        }
    });
}

processDirectorySafe(directory);
console.log('Green theme update complete!');
