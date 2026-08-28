const fs = require('fs');
const path = require('path');

const directory = 'd:\\Ashora Francis\\NeST\\day2\\src';

const replacements = {
    // Reverse Variable Renames
    "--accent-darkgreen": "--accent-darkblue",
    "--accent-deepgreen": "--accent-deepblue",
    "--accent-green": "--accent-blue",
    "--accent-lightgreen": "--accent-skyblue",

    // Reverse Class Names
    "text-darkgreen": "text-darkblue",
    "text-deepgreen": "text-deepblue",
    "text-green": "text-blue",
    "text-lightgreen": "text-skyblue",
    "icon-deepgreen": "icon-deepblue",
    "icon-lightgreen": "icon-skyblue",

    // Reverse Hex replacements: Green -> Blue
    "#059669": "#2563eb", // emerald-600 -> darkblue
    "#047857": "#1d4ed8", // emerald-700 -> deepblue
    "#10b981": "#3b82f6", // emerald-500 -> bright blue
    "#34d399": "#0ea5e9", // emerald-400 -> sky blue
    "#6ee7b7": "#60a5fa", // emerald-300 -> light blue
    "#a7f3d0": "#93c5fd", // emerald-200 -> lighter blue

    // Reverse RGBA replacements: Green -> Blue
    "16, 185, 129": "59, 130, 246",  // emerald-500 -> blue-500
    "5, 150, 105": "37, 99, 235",    // emerald-600 -> blue-600
    "4, 120, 87": "29, 78, 216",     // emerald-700 -> blue-700
    "52, 211, 153": "14, 165, 233",  // emerald-400 -> sky-500
    "30, 58, 138": "29, 78, 216"     // mesh background tweak
};

function processFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf-8');
    const originalContent = content;

    for (const [oldValue, newValue] of Object.entries(replacements)) {
        content = content.split(oldValue).join(newValue);
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
console.log('Bright Blue theme update complete!');
