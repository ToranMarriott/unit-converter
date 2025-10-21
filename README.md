# Unit Converter Chrome Extension

Lightweight Chrome extension that converts between common metric and imperial units for length, volume, and mass. Enter a value, click **Convert** (or press Enter), and instantly see both forward and reverse conversions.

## Features
- Length: meters ⇄ feet
- Volume: liters ⇄ gallons
- Mass: kilograms ⇄ pounds
- Keyboard-friendly: triggers conversion on Enter
- Minimal, responsive UI styled with plain CSS

## Install & Use
1. Clone or download this repository.
2. Open Google Chrome and navigate to `chrome://extensions`.
3. Enable **Developer mode** (top-right toggle).
4. Click **Load unpacked** and select the project folder.
5. Open the extension popup:
   - Enter a numeric value in the input field.
   - Press **Convert** or hit Enter to display all conversions.

> Tip: The popup remembers the last value typed as long as the popup stays open.

## Project Structure
```
index.html     # Extension popup markup
index.js       # Conversion logic and DOM wiring
index.css      # Styling for the popup UI
manifest.json  # Chrome extension configuration
icons/         # Extension icons (16–128 px)
```

## Customization
- Update the conversion factors in `index.js` to support additional units.
- Adjust layout or colors in `index.css` to match your branding.
- Extend the popup UI in `index.html` with new sections for other measurements.

## Roadmap Ideas
- Add temperature conversions.
- Provide quick-copy buttons for results.
- Persist the most recent conversions using `chrome.storage`.

## License
MIT License – feel free to use and modify.
