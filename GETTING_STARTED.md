# 🌱 Getting Started with Fallow

Welcome to your new mental health garden app! This quick guide will get you up and running in minutes.

## ⚡ Quick Start (5 Minutes)

### Step 1: Install Node.js
If you don't have it already:
- Go to [nodejs.org](https://nodejs.org/)
- Download and install the LTS version
- Restart your computer

### Step 2: Install Dependencies
Open your terminal in this folder and run:
```bash
npm install
```
(This downloads Electron and takes 2-5 minutes)

### Step 3: Launch the App
```bash
npm start
```

**That's it! The app should open automatically.** 🎉

---

## 📚 Documentation Guide

We've created several guides to help you:

| Document | Purpose | Start Here If... |
|----------|---------|------------------|
| **README.md** | Complete technical documentation | You want detailed info about features |
| **SETUP_GUIDE.md** | Step-by-step beginner tutorial | You're new to Node.js/Electron |
| **ASSET_GUIDE.md** | Where to add custom images/sounds | You want to add your artwork |
| **GETTING_STARTED.md** | This file - quick overview | You just want to run it now |

---

## 🎨 What You Can Customize

The app is designed with **clear markers** for adding your custom assets:

### 1. Plant Images (Main Garden)
- **Location:** `src/pages/main-menu.html`
- **What:** The 3 clickable plants (sleep, journal, pomodoro)
- **Add your images to:** `src/assets/plants/`

### 2. Sprouting Animations (Welcome Page)
- **Location:** `src/pages/welcome.html`
- **What:** Animated plants on the definition screen
- **Add your GIFs to:** `src/assets/animations/`

### 3. Seed Shop Items
- **Location:** `src/pages/shop.html`
- **What:** 8 seed images in the shop
- **Add your images to:** `src/assets/seeds/`

### 4. Alarm Sound (Timer)
- **Location:** `src/pages/pomodoro.html`
- **What:** Sound when Pomodoro timer finishes
- **Add your sound to:** `src/assets/sounds/`

**See ASSET_GUIDE.md for detailed instructions and code examples!**

---

## 🎮 Using the App

### First Time
1. Click "Sign Up"
2. Enter email, display name, password
3. Read the welcome message
4. Enter your garden!

### Daily Routine
Visit each plant to keep your garden healthy:
- 🌙 **Sleep Tracking** - See your offline time stats
- 📝 **Journaling** - Write with daily motivational quotes
- ⏱️ **Pomodoro** - Set work/rest timers

### Settings
Click the gear icon (⚙️) to:
- View your weekly report
- Change language (English/Spanish)
- See account information
- Logout

### Shop
Click the shop icon (🏪) to:
- Browse available seeds
- See pricing (placeholder for now)
- Plan future garden additions

---

## 🌍 Language Support

The app supports **English** and **Spanish**!

To switch languages:
1. Click Settings (⚙️)
2. Select your language from dropdown
3. The entire app updates instantly

**Note:** "Fallow" stays the same in both languages (it's the app name!)

---

## 📱 App Layout

```
┌─────────────────────┐
│  ⚙️ Settings  🏪 Shop│  ← Top right buttons
│                     │
│    SKY BLUE         │  ← 2/3 of screen
│      AREA           │
├─────────────────────┤
│  🌱   🌱   🌱      │  ← Your 3 plants
│ FIELD GREEN AREA   │  ← 1/3 of screen
└─────────────────────┘
```

- **iPhone-like shape** with rounded corners
- **Sky blue background** on most pages
- **Field green** on bottom third of main menu
- **Compact size** - doesn't dominate your screen

---

## 🔍 Exploring the Code

All code has **clear comments** explaining what it does:

### HTML Files (`src/pages/`)
Each page is its own HTML file:
- `signin.html` / `signup.html` - Authentication
- `welcome.html` - Definition screen
- `main-menu.html` - Garden view
- `sleep.html` / `journal.html` / `pomodoro.html` - Features
- `shop.html` - Seed store
- `settings.html` - Settings

### JavaScript Files (`src/js/`)
- `auth.js` - User accounts and login
- `language.js` - English/Spanish translations
- `sleep.js` - Sleep tracking logic
- `journal.js` - Journaling with quotes
- `pomodoro.js` - Timer functionality
- `settings.js` - Settings page logic

### Styles (`src/css/main.css`)
- All colors, layouts, and animations
- Marked sections for custom styles
- Easy to modify theme

---

## 🎯 Key Features Explained

### 1. Sleep Tracking
- Monitors when your computer is inactive
- Shows daily and weekly statistics
- Helps you understand rest patterns
- Updates your garden health status

### 2. Daily Journaling
- One entry per day
- New motivational quote each day
- Saves automatically to your account
- Private and local (never uploaded)

### 3. Pomodoro Timer
- Customizable work duration (default: 25 min)
- Customizable rest duration (default: 5 min)
- Alarm plays when timer completes
- Tracks total sessions completed

### 4. Plant Health System
Plants change based on activity:
- **Healthy** if visited in last 3 days
- **Dying** if neglected 3-7 days
- **Dead** if neglected 7+ days

(Visual changes are placeholders - add your animations!)

---

## 💾 Where Your Data is Stored

All data is saved **locally on your computer**:

- **User accounts:** `~/.fallow-users.json`
- **Current session:** Browser localStorage
- **Sleep data:** Stored per user
- **Journal entries:** Stored per user
- **Settings:** Stored per user

**Nothing is uploaded to the internet!** Your data stays private.

---

## 🚀 Building a Standalone App

Want to run Fallow without the terminal?

### Quick Version:
```bash
npm install --save-dev electron-builder
npm run build:mac     # or build:win / build:linux
```

Your app will be in the `dist/` folder!

See **SETUP_GUIDE.md** for detailed build instructions.

---

## 🎨 Customization Ideas

Make Fallow your own:

- [ ] Add your plant illustrations
- [ ] Create sprouting animations
- [ ] Design custom seed images
- [ ] Record your own alarm sound
- [ ] Change the color scheme
- [ ] Add more motivational quotes
- [ ] Create new plant varieties
- [ ] Design achievement badges

---

## ❓ Quick Troubleshooting

### App won't start
```bash
# Reinstall dependencies
rm -rf node_modules
npm install
npm start
```

### Blank screen
- Make sure you're in the project folder
- Check that all files are in `src/` folder
- Try `npm run dev` to see console errors

### Can't sign up
- Check file permissions
- Try running as administrator (Windows)
- Look for errors in DevTools (F12)

---

## 📖 Next Steps

1. **Run the app** - `npm start`
2. **Create an account** - Sign up and explore
3. **Add your assets** - Follow ASSET_GUIDE.md
4. **Customize colors** - Edit `src/css/main.css`
5. **Build standalone** - Follow SETUP_GUIDE.md
6. **Share with friends!** 🌱

---

## 🎓 Learning Resources

Want to understand how it works?

- **Electron Docs:** [electronjs.org/docs](https://www.electronjs.org/docs/latest/)
- **HTML/CSS Basics:** [developer.mozilla.org](https://developer.mozilla.org/)
- **JavaScript Guide:** [javascript.info](https://javascript.info/)

The code is well-commented and beginner-friendly!

---

## 💡 Tips for Success

1. **Start simple** - Run the app first, customize later
2. **One change at a time** - Test after each modification
3. **Keep backups** - Copy the folder before major changes
4. **Use DevTools** - Press F12 to see console errors
5. **Read the comments** - Every file has helpful notes

---

## 🌟 Have Fun!

Fallow is designed to help you:
- **Rest** when you need to (like fallow land)
- **Track** your wellness habits
- **Grow** your mental health
- **Create** something beautiful

Enjoy building your garden! 🌱✨

---

**Questions?** Check the other documentation files or review the code comments.

**Ready to start?** Run `npm start` and let your garden grow!
