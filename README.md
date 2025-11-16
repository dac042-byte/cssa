# Fallow - Mental Health Garden App 🌱

A desktop mental health application built with Electron that helps you track your wellness through a beautiful garden metaphor.

![Fallow App](https://img.shields.io/badge/version-1.0.0-green) ![Electron](https://img.shields.io/badge/electron-27.0.0-blue) ![License](https://img.shields.io/badge/license-MIT-blue)

## 📖 About

**Fallow** (*/ˈfalō/*) - (of farmland) usually cultivated land that is allowed to lie idle during the growing season to restore its fertility.

Just like fallow land, this app helps you rest, restore, and grow your mental health through:
- 🌙 **Sleep Tracking** - Monitor your offline time and rest patterns
- 📝 **Daily Journaling** - Write your thoughts with daily motivational quotes
- ⏱️ **Pomodoro Timer** - Balance work and rest for optimal productivity
- 🏪 **Garden Shop** - Collect seeds to grow your mental health garden

## ✨ Features

- **Beautiful UI** - Sky blue theme with rounded corners, iPhone-like design
- **Multi-language Support** - English and Spanish (Fallow stays the same!)
- **Persistent Accounts** - Your data is saved locally and securely
- **Plant Health System** - Your garden reflects your wellness habits
- **Weekly Reports** - Track your progress over time
- **Customizable** - Easy-to-edit asset placeholders for your own artwork

## 🚀 Quick Start

### Prerequisites

Before you begin, ensure you have installed:
- **Node.js** (version 16 or higher)
- **npm** (comes with Node.js)

Check your installations:
```bash
node --version
npm --version
```

### Installation Steps

1. **Navigate to the project directory**
   ```bash
   cd /path/to/fallow
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   This will install Electron and all required packages.

3. **Launch the app**
   ```bash
   npm start
   ```

   For development mode with DevTools:
   ```bash
   npm run dev
   ```

## 📁 Project Structure

```
fallow/
├── main.js                 # Electron main process
├── package.json            # Project dependencies
├── README.md              # This file
├── src/
│   ├── pages/             # HTML pages
│   │   ├── signin.html    # Sign in page
│   │   ├── signup.html    # Sign up page
│   │   ├── welcome.html   # Welcome/definition page
│   │   ├── main-menu.html # Main garden view
│   │   ├── settings.html  # Settings page
│   │   ├── shop.html      # Seed shop
│   │   ├── sleep.html     # Sleep tracking
│   │   ├── journal.html   # Daily journal
│   │   └── pomodoro.html  # Pomodoro timer
│   ├── css/
│   │   └── main.css       # Main stylesheet
│   ├── js/
│   │   ├── auth.js        # Authentication system
│   │   ├── language.js    # Multi-language support
│   │   ├── settings.js    # Settings page logic
│   │   ├── sleep.js       # Sleep tracking logic
│   │   ├── journal.js     # Journal functionality
│   │   └── pomodoro.js    # Timer functionality
│   └── assets/            # Your custom assets go here
│       ├── plants/        # Plant images (create this folder)
│       ├── seeds/         # Seed images (create this folder)
│       ├── sounds/        # Audio files (create this folder)
│       └── animations/    # Animation files (create this folder)
```

## 🎨 Adding Your Custom Assets

The app is designed with clear markers for you to add your custom artwork and animations!

### 1. Plant Assets (Main Menu)

**Location:** `src/pages/main-menu.html` lines 31-53

Replace the placeholder buttons with your plant images:
```html
<!-- Before -->
<button class="plant-button plant-healthy" id="sleep-btn">
  <div style="font-size: 32px;">🌙</div>
  <span>Sleep Tracking</span>
</button>

<!-- After -->
<button class="plant-button plant-healthy" id="sleep-btn">
  <img src="../assets/plants/sleep-plant.png" alt="Sleep Plant">
</button>
```

### 2. Sprouting Plant Animations (Welcome Page)

**Location:** `src/pages/welcome.html` lines 21-31
**CSS:** `src/css/main.css` lines 185-201

Add your custom plant sprouting animations:
```html
<!-- Replace the placeholder divs -->
<div class="animation-container">
  <img src="../assets/animations/sprout1.gif" alt="Sprouting Plant">
  <img src="../assets/animations/sprout2.gif" alt="Sprouting Plant">
  <img src="../assets/animations/sprout3.gif" alt="Sprouting Plant">
</div>
```

### 3. Plant Health Animations

**Location:** `src/css/main.css` lines 277-288
**JavaScript:** `src/pages/main-menu.html` lines 70-77

Add classes for different plant states:
- `.plant-healthy` - Active plant
- `.plant-dying` - Neglected for 3+ days
- `.plant-dead` - Neglected for 7+ days

### 4. Seed Shop Images

**Location:** `src/pages/shop.html` lines 29-78

Replace placeholder seed images:
```html
<!-- Before -->
<div class="seed-image-placeholder">Seed Image 1</div>

<!-- After -->
<img src="../assets/seeds/rose-seed.png" alt="Rose Seed">
```

### 5. Alarm Sound (Pomodoro Timer)

**Location:** `src/pages/pomodoro.html` lines 77-85

Add your custom alarm sound:
```html
<audio id="alarm-sound" preload="auto">
  <source src="../assets/sounds/alarm.mp3" type="audio/mpeg">
  <source src="../assets/sounds/alarm.wav" type="audio/wav">
  <source src="../assets/sounds/alarm.ogg" type="audio/ogg">
</audio>
```

## 🔧 How It Works

### User Authentication

- User accounts are stored locally in `~/.fallow-users.json`
- Passwords are stored in plain text (for demo - **use hashing in production!**)
- Session data is managed via localStorage

### Sleep Tracking

- Monitors system sleep/wake events using Electron's `powerMonitor`
- Calculates offline time as sleep duration
- Displays daily and weekly statistics

### Journal

- One entry per day
- Auto-generates daily motivational quotes
- Saves entries to user's data file

### Pomodoro Timer

- Customizable work and rest durations
- Plays alarm sound when timer completes
- Tracks total completed sessions

### Plant Health System

Plants show different states based on activity:
- **Healthy** - Visited within last 3 days
- **Dying** - Not visited for 3-7 days
- **Dead** - Not visited for 7+ days

## 🌍 Language Support

Switch between English and Spanish in Settings:
- All UI text is translated
- "Fallow" remains unchanged in both languages
- Add more languages in `src/js/language.js`

## 📦 Building for Distribution

To create a distributable app, you'll need `electron-builder`:

1. **Install electron-builder**
   ```bash
   npm install --save-dev electron-builder
   ```

2. **Add build scripts to package.json**
   ```json
   "scripts": {
     "start": "electron .",
     "dev": "electron . --dev",
     "build:mac": "electron-builder --mac",
     "build:win": "electron-builder --win",
     "build:linux": "electron-builder --linux"
   }
   ```

3. **Build the app**
   ```bash
   npm run build:mac    # For macOS
   npm run build:win    # For Windows
   npm run build:linux  # For Linux
   ```

The built app will be in the `dist/` folder.

## 🎯 Usage Guide

### First Time Setup

1. **Launch the app** - Run `npm start`
2. **Create an account** - Enter email, display name, and password
3. **View the welcome screen** - Read the definition of "Fallow"
4. **Enter your garden** - Click "Continue to Your Garden"

### Daily Routine

1. **Visit each plant** to keep your garden healthy:
   - 🌙 Check your sleep stats
   - 📝 Write in your journal
   - ⏱️ Use the Pomodoro timer

2. **Check your progress** in Settings > Weekly Report

3. **Shop for seeds** to expand your garden (coming soon!)

### Tips for Success

- Visit each category at least once every 3 days
- Use the Pomodoro timer to balance work and rest
- Journal regularly to track your mental health journey
- Check your weekly reports to see your progress

## 🛠️ Customization Guide

### Changing Colors

Edit `src/css/main.css`:
```css
/* Sky blue background */
background-color: #87CEEB;

/* Field green */
background-color: #8FBC8F;

/* Primary green buttons */
background-color: #5fa777;
```

### Adding More Languages

Edit `src/js/language.js`:
```javascript
const translations = {
  en: { /* English translations */ },
  es: { /* Spanish translations */ },
  fr: { /* Add French translations */ }
};
```

### Customizing Timer Defaults

Edit `src/js/pomodoro.js`:
```javascript
pomodoroSettings: {
  workDuration: 25,  // Change default work time
  restDuration: 5    // Change default rest time
}
```

## 🐛 Troubleshooting

### App won't start

**Problem:** "Cannot find module 'electron'"
**Solution:** Run `npm install` to install dependencies

### Blank white screen

**Problem:** File paths are incorrect
**Solution:** Make sure you're running from the project root directory

### Can't sign up/sign in

**Problem:** File permission errors
**Solution:** Check that the app can write to `~/.fallow-users.json`

### Timer doesn't play sound

**Problem:** Audio file not found
**Solution:** Check the audio source path in `src/pages/pomodoro.html`

## 📝 Future Enhancements

Want to expand Fallow? Here are some ideas:

- [ ] Implement shop purchase system with virtual currency
- [ ] Add data export/import functionality
- [ ] Create cloud sync for multiple devices
- [ ] Add more plant varieties and animations
- [ ] Implement achievements and rewards
- [ ] Add mood tracking feature
- [ ] Create data visualization charts
- [ ] Add desktop notifications
- [ ] Implement password encryption
- [ ] Add profile pictures

## 🤝 Contributing

This is a personal project, but feel free to:
1. Fork the repository
2. Create your feature branch
3. Add your improvements
4. Share your custom assets!

## 📄 License

MIT License - Feel free to use and modify for your own projects!

## 💡 Credits

- Concept & Design: Your vision
- Built with: Electron, HTML, CSS, JavaScript
- Motivational quotes: Various authors

## 📞 Support

If you encounter issues:
1. Check the Troubleshooting section above
2. Review the code comments for guidance
3. Ensure all dependencies are installed
4. Try running with `npm run dev` to see console errors

---

**Remember:** Just like fallow land needs time to restore, you deserve time to rest and grow. 🌱

Happy gardening! 🌻
