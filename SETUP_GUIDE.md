# 🚀 Fallow Setup Guide - Complete Beginner's Tutorial

This guide will walk you through setting up and running the Fallow app from scratch, even if you've never used Node.js or Electron before!

## 📋 Table of Contents

1. [Install Prerequisites](#1-install-prerequisites)
2. [Download the Project](#2-download-the-project)
3. [Install Dependencies](#3-install-dependencies)
4. [Run the Application](#4-run-the-application)
5. [Add Your Custom Assets](#5-add-your-custom-assets)
6. [Build for Distribution](#6-build-for-distribution)
7. [Common Issues](#7-common-issues)

---

## 1. Install Prerequisites

### Install Node.js and npm

**What is Node.js?** A JavaScript runtime that allows you to run JavaScript applications outside of a browser.

**What is npm?** Node Package Manager - it installs the code libraries (packages) your app needs.

#### For Windows:

1. Go to [nodejs.org](https://nodejs.org/)
2. Download the **LTS** (Long Term Support) version
3. Run the installer
4. Click "Next" through all steps (default options are fine)
5. Restart your computer

#### For macOS:

1. Go to [nodejs.org](https://nodejs.org/)
2. Download the **LTS** version
3. Open the downloaded file and follow installation steps
4. OR use Homebrew (if you have it):
   ```bash
   brew install node
   ```

#### For Linux (Ubuntu/Debian):

```bash
sudo apt update
sudo apt install nodejs npm
```

### Verify Installation

Open your terminal (Command Prompt on Windows, Terminal on Mac/Linux) and type:

```bash
node --version
npm --version
```

You should see version numbers like:
```
v18.17.0
9.8.1
```

If you see version numbers, you're ready to proceed! ✅

---

## 2. Download the Project

### Option A: If you have the project folder

Simply navigate to it in your terminal:

**Windows:**
```bash
cd C:\Users\YourName\Downloads\fallow
```

**Mac/Linux:**
```bash
cd /Users/YourName/Downloads/fallow
```

### Option B: If you have it on GitHub

```bash
git clone https://github.com/yourusername/fallow.git
cd fallow
```

---

## 3. Install Dependencies

Dependencies are the libraries and tools your app needs to run. We need to install Electron and other packages.

### In your terminal, run:

```bash
npm install
```

**What's happening?**
- npm reads the `package.json` file
- Downloads Electron (about 100-200 MB)
- Installs all required packages
- Creates a `node_modules` folder

**This might take 2-5 minutes depending on your internet speed.**

You'll see lots of text scrolling by - that's normal! ✅

When it's done, you should see something like:
```
added 123 packages in 2m
```

---

## 4. Run the Application

### Start the app:

```bash
npm start
```

**What's happening?**
- Electron launches your app
- A window opens with the Fallow sign-in page
- The app is now running!

### Development Mode (with Developer Tools):

If you want to see console logs and debug:

```bash
npm run dev
```

This opens the app with Chrome DevTools on the side.

### Your first time using the app:

1. **Click "Sign Up"** (you don't have an account yet)
2. **Fill in the form:**
   - Email: your@email.com
   - Display Name: Your Name
   - Password: anything (minimum 6 characters)
   - Confirm Password: same password
3. **Click "Create Account"**
4. **You'll see the welcome page** with the definition of "Fallow"
5. **Click "Continue to Your Garden"**
6. **Explore your garden!** 🌱

### To close the app:

Just close the window like any other application, or press `Ctrl+C` in the terminal.

---

## 5. Add Your Custom Assets

Now let's make this app truly yours by adding your custom artwork!

### Step 1: Create Asset Folders

In your project folder, create these directories:

```bash
cd src/assets
mkdir plants seeds sounds animations
```

Or create them manually:
```
src/
  assets/
    plants/
    seeds/
    sounds/
    animations/
```

### Step 2: Add Your Plant Images

**For the main menu plants:**

1. Create 3 plant images (PNG or JPG recommended):
   - `sleep-plant.png` - Your sleep tracking plant
   - `journal-plant.png` - Your journaling plant
   - `pomodoro-plant.png` - Your pomodoro plant

2. Place them in `src/assets/plants/`

3. Edit `src/pages/main-menu.html` (around line 40):

**Find:**
```html
<button class="plant-button plant-healthy" id="sleep-btn">
  <div style="font-size: 32px; margin-bottom: 10px;">🌙</div>
  <span data-translate="sleep-tracking">Sleep Tracking</span>
</button>
```

**Replace with:**
```html
<button class="plant-button plant-healthy" id="sleep-btn">
  <img src="../assets/plants/sleep-plant.png" alt="Sleep Plant" style="width: 80px; height: 100px;">
  <span data-translate="sleep-tracking">Sleep Tracking</span>
</button>
```

Repeat for the other two plants!

### Step 3: Add Sprouting Animations

**For the welcome page:**

1. Create or find animated GIFs of sprouting plants
2. Place them in `src/assets/animations/`
3. Edit `src/pages/welcome.html` (around line 26):

**Replace:**
```html
<div class="plant-sprout"></div>
```

**With:**
```html
<img src="../assets/animations/sprout1.gif" alt="Sprouting Plant" style="width: 60px; height: 80px;">
```

### Step 4: Add Seed Images

**For the shop:**

1. Create 8 seed images (one for each shelf spot)
2. Name them: `seed1.png` through `seed8.png`
3. Place them in `src/assets/seeds/`
4. Edit `src/pages/shop.html` (around line 34):

**Replace:**
```html
<div class="seed-image-placeholder">Seed Image 1</div>
```

**With:**
```html
<img src="../assets/seeds/seed1.png" alt="Seed" style="width: 80px; height: 80px;">
```

### Step 5: Add Alarm Sound

**For the pomodoro timer:**

1. Find or create an alarm sound (MP3, WAV, or OGG)
2. Name it `alarm.mp3` (or .wav/.ogg)
3. Place it in `src/assets/sounds/`
4. Edit `src/pages/pomodoro.html` (around line 80):

**Replace the audio source with:**
```html
<audio id="alarm-sound" preload="auto">
  <source src="../assets/sounds/alarm.mp3" type="audio/mpeg">
  <source src="../assets/sounds/alarm.wav" type="audio/wav">
</audio>
```

### Step 6: Test Your Changes

After adding assets:
1. Close the app if it's running (Ctrl+C in terminal)
2. Run it again: `npm start`
3. Check that your images and sounds appear!

---

## 6. Build for Distribution

Want to share your app or run it without the terminal? Build a standalone application!

### Step 1: Install electron-builder

```bash
npm install --save-dev electron-builder
```

### Step 2: Update package.json

Open `package.json` and add these lines to the `"scripts"` section:

```json
"scripts": {
  "start": "electron .",
  "dev": "electron . --dev",
  "build:mac": "electron-builder --mac",
  "build:win": "electron-builder --win",
  "build:linux": "electron-builder --linux"
}
```

Also add this build configuration:

```json
"build": {
  "appId": "com.fallow.app",
  "productName": "Fallow",
  "directories": {
    "output": "dist"
  },
  "mac": {
    "category": "public.app-category.healthcare-fitness",
    "icon": "build/icon.icns"
  },
  "win": {
    "target": "nsis",
    "icon": "build/icon.ico"
  },
  "linux": {
    "target": "AppImage",
    "icon": "build/icon.png",
    "category": "Utility"
  }
}
```

### Step 3: Create an Icon (Optional)

Create a `build/` folder and add:
- `icon.icns` for Mac (512x512 PNG converted to ICNS)
- `icon.ico` for Windows (256x256 PNG converted to ICO)
- `icon.png` for Linux (512x512 PNG)

You can use online converters to create these from a single PNG image.

### Step 4: Build the App

**For your current platform:**
```bash
npm run build:mac    # On macOS
npm run build:win    # On Windows
npm run build:linux  # On Linux
```

**To build for all platforms** (only works on certain OS):
```bash
npm run build
```

### Step 5: Find Your App

Your built application will be in the `dist/` folder:
- **Mac:** `dist/Fallow.app` (can be moved to Applications)
- **Windows:** `dist/Fallow Setup.exe` (installer)
- **Linux:** `dist/Fallow.AppImage` (portable executable)

Now you can:
- Double-click to run without terminal
- Share with friends
- Move to your Applications folder
- Create desktop shortcuts

---

## 7. Common Issues

### "npm: command not found"

**Problem:** Node.js isn't installed or not in PATH

**Solution:**
1. Reinstall Node.js from nodejs.org
2. Restart your terminal
3. On Windows, restart your computer

---

### "Cannot find module 'electron'"

**Problem:** Dependencies not installed

**Solution:**
```bash
npm install
```

---

### App shows blank white screen

**Problem:** File path errors

**Solution:**
1. Make sure you're in the project directory
2. Check that all HTML files are in `src/pages/`
3. Run `npm start` from the root folder (where package.json is)

---

### "Permission denied" errors

**Problem:** File permission issues

**Solution:**

**Mac/Linux:**
```bash
sudo npm install
```

**Windows:**
- Run Command Prompt as Administrator
- Then run `npm install`

---

### Images don't show up

**Problem:** Wrong file paths

**Solution:**
1. Check that images are in the correct folders
2. Verify file extensions match (`.png` not `.PNG`)
3. Use relative paths: `../assets/plants/image.png`

---

### Sound doesn't play

**Problem:** Audio file format or path

**Solution:**
1. Use MP3, WAV, or OGG formats
2. Check the file path in pomodoro.html
3. Test with a different audio file

---

## 🎉 You're Done!

You now have a fully functional mental health app!

### Next Steps:

1. **Customize the colors** in `src/css/main.css`
2. **Add your artwork** using the guide above
3. **Share with friends** by building a distributable app
4. **Track your wellness** daily!

### Need Help?

- Check the main README.md for detailed documentation
- Review the code comments for guidance
- Test with `npm run dev` to see console errors

---

**Happy coding and happy gardening! 🌱**
