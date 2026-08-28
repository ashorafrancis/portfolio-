import os

directory = r"d:\Ashora Francis\NeST\day2\src"

replacements = {
    # Backgrounds
    "#0b0816": "#0a0f1c", # bg-dark
    "#07050e": "#020617", # bg-darker
    "#120e24": "#0f172a", # bg-card
    "#191430": "#1e293b", # bg-card-hover
    "#0e0b1c": "#0b1121", # bg-card-alt
    "#251c3d": "#1e293b", # scrollbar
    "#3d2b63": "#334155", # scrollbar hover

    # Text Colors
    "#e4e1f5": "#f1f5f9", # text-main
    "#9c97b8": "#94a3b8", # text-muted
    "#5c577a": "#64748b", # text-dim

    # Variable Renames
    "--accent-magenta": "--accent-blue",
    "--accent-purple": "--accent-darkblue",
    "--accent-pink": "--accent-grey",
    "--accent-orange": "--accent-slate",
    "--accent-amber": "--accent-lightgrey",
    "--accent-violet": "--accent-deepblue",
    "--accent-coral": "--accent-mutedblue",
    "--accent-cyan": "--accent-skyblue",
    "--accent-emerald": "--accent-darkgrey",

    # Class Names
    "text-magenta": "text-blue",
    "text-purple": "text-darkblue",
    "text-amber": "text-lightgrey",
    "text-indigo": "text-deepblue",
    "icon-amber": "icon-lightgrey",
    "icon-indigo": "icon-deepblue",
    "text-cyan": "text-skyblue",
    "text-emerald": "text-darkgrey",
    "icon-cyan": "icon-skyblue",
    "icon-emerald": "icon-darkgrey",

    # Hex Codes
    "#a855f7": "#2563eb", # purple -> blue
    "#d946ef": "#3b82f6", # magenta -> bright blue
    "#ec4899": "#94a3b8", # pink -> grey
    "#f97316": "#475569", # orange -> dark slate
    "#fbbf24": "#e2e8f0", # amber -> light grey
    "#8b5cf6": "#1d4ed8", # violet -> deep blue
    "#f43f5e": "#64748b", # coral -> slate
    "#c084fc": "#60a5fa", # light purple -> light blue
    "#e879f9": "#93c5fd", # light magenta -> lighter blue
    "#06b6d4": "#0ea5e9", # cyan -> sky blue
    "#10b981": "#334155", # emerald -> dark grey
    "#4ade80": "#94a3b8", # green -> grey
    "#f472b6": "#cbd5e1", # pinkish -> light grey

    # RGBA values
    "217, 70, 239": "59, 130, 246", # magenta -> blue
    "168, 85, 247": "37, 99, 235",  # purple -> darkblue
    "236, 72, 153": "148, 163, 184",# pink -> grey
    "249, 115, 22": "71, 85, 105",  # orange -> slate
    "251, 191, 36": "226, 232, 240",# amber -> light grey
    "139, 92, 246": "29, 78, 216",  # violet -> deep blue
    "244, 63, 94": "100, 116, 139", # coral -> slate
    "6, 182, 212": "14, 165, 233",  # cyan -> sky blue
    "16, 185, 129": "51, 65, 85",   # emerald -> dark grey
    "74, 222, 128": "148, 163, 184",# green -> grey
}

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original = content
    for old, new in replacements.items():
        content = content.replace(old, new)
        
    if content != original:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated {filepath}")

for root, _, files in os.walk(directory):
    for file in files:
        if file.endswith('.css') or file.endswith('.jsx'):
            process_file(os.path.join(root, file))

print("Theme update complete!")
