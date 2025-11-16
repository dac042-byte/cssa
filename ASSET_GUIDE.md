# 🎨 Asset & Animation Guide for Fallow

This document lists **ALL** the places in the code where you can add your custom assets and animations.

## 📍 Quick Reference Map

| Asset Type | Location | File | Lines |
|------------|----------|------|-------|
| Plant Buttons (Main Menu) | HTML | `src/pages/main-menu.html` | 40-62 |
| Plant Health Animations | CSS | `src/css/main.css` | 277-288 |
| Sprouting Plants (Welcome) | HTML | `src/pages/welcome.html` | 26-30 |
| Sprouting Animation CSS | CSS | `src/css/main.css` | 185-201 |
| Seed Shop Images | HTML | `src/pages/shop.html` | 34-78 |
| Alarm Sound | HTML | `src/pages/pomodoro.html` | 79-84 |

---

## 🌱 1. Main Menu Plant Buttons

**What it is:** The three main plants in your garden that users click to access features.

**Location:** `src/pages/main-menu.html`

### Current Code (Lines 40-62):

```html
<button class="plant-button plant-healthy" id="sleep-btn">
  <div style="font-size: 32px; margin-bottom: 10px;">🌙</div>
  <span data-translate="sleep-tracking">Sleep Tracking</span>
</button>

<button class="plant-button plant-healthy" id="journal-btn">
  <div style="font-size: 32px; margin-bottom: 10px;">📝</div>
  <span data-translate="journaling">Journaling</span>
</button>

<button class="plant-button plant-healthy" id="pomodoro-btn">
  <div style="font-size: 32px; margin-bottom: 10px;">⏱️</div>
  <span data-translate="pomodoro">Pomodoro</span>
</button>
```

### How to Add Your Assets:

1. Create three plant images (PNG, SVG, or GIF recommended):
   - Sleep plant (e.g., moon flower, lavender)
   - Journal plant (e.g., notebook flower, writing plant)
   - Pomodoro plant (e.g., clock flower, time plant)

2. Place them in: `src/assets/plants/`

3. Replace the emoji divs with your images:

```html
<button class="plant-button plant-healthy" id="sleep-btn">
  <img src="../assets/plants/sleep-plant.png" alt="Sleep Plant"
       style="width: 80px; height: 100px; object-fit: contain;">
  <span data-translate="sleep-tracking">Sleep Tracking</span>
</button>
```

### Recommended Image Specs:
- **Format:** PNG with transparency, or SVG
- **Size:** 100px × 120px
- **File size:** Under 100KB each
- **Style:** Match your garden theme!

---

## 💀 2. Plant Health Animations

**What it is:** Visual changes when plants are dying or dead from neglect.

**Location:** `src/css/main.css`

### Current Code (Lines 277-288):

```css
/* ========================================
   ANIMATION PLACEHOLDER - DYING PLANTS
   Add animations for plant health states here
   Use classes: .plant-healthy, .plant-dying, .plant-dead
   ======================================== */
.plant-button.plant-dying {
  filter: grayscale(50%);
  opacity: 0.7;
}

.plant-button.plant-dead {
  filter: grayscale(100%);
  opacity: 0.4;
}
```

### How to Customize:

Option 1: **Simple CSS Effects**
```css
.plant-button.plant-dying {
  filter: grayscale(50%) brightness(0.8);
  opacity: 0.7;
  animation: wiltAnimation 2s ease-in-out infinite;
}

@keyframes wiltAnimation {
  0%, 100% { transform: rotate(-2deg); }
  50% { transform: rotate(2deg); }
}

.plant-button.plant-dead {
  filter: grayscale(100%) sepia(30%);
  opacity: 0.5;
  transform: scale(0.9);
}
```

Option 2: **Different Images**
```css
.plant-button.plant-healthy {
  background-image: url('../assets/plants/healthy.png');
}

.plant-button.plant-dying {
  background-image: url('../assets/plants/dying.png');
}

.plant-button.plant-dead {
  background-image: url('../assets/plants/dead.png');
}
```

Option 3: **GIF Animations**
Replace the IMG src dynamically in JavaScript when health changes.

### Logic Location:

The plant health checking logic is in: `src/pages/main-menu.html` (lines 70-77)

```javascript
// TODO: Add plant health check system
// Check user activity and update plant classes
```

---

## 🌿 3. Sprouting Plants Animation (Welcome Page)

**What it is:** Animated plants that sprout while showing the definition of "Fallow"

**Location:** `src/pages/welcome.html`

### Current HTML (Lines 26-30):

```html
<div class="animation-container">
  <div class="plant-sprout"></div>
  <div class="plant-sprout"></div>
  <div class="plant-sprout"></div>
</div>
```

### Current CSS (Lines 185-201 in `main.css`):

```css
/* ========================================
   ANIMATION PLACEHOLDER - SPROUTING PLANTS
   Add your custom sprouting plant animations here
   Target: .animation-container
   ======================================== */
.animation-container {
  margin-top: 30px;
  width: 300px;
  height: 150px;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
}

.plant-sprout {
  width: 60px;
  height: 60px;
  background-color: #5fa777;
  border-radius: 50%;
  animation: sproutGrow 2s ease-in-out infinite;
}

@keyframes sproutGrow {
  0%, 100% { transform: scale(0.8); opacity: 0.7; }
  50% { transform: scale(1.2); opacity: 1; }
}
```

### How to Add Your Animations:

**Option 1: Animated GIFs**
```html
<div class="animation-container">
  <img src="../assets/animations/sprout1.gif" alt="Sprouting Plant">
  <img src="../assets/animations/sprout2.gif" alt="Sprouting Plant">
  <img src="../assets/animations/sprout3.gif" alt="Sprouting Plant">
</div>
```

**Option 2: Sprite Sheet Animation**
```css
.plant-sprout {
  width: 60px;
  height: 80px;
  background-image: url('../assets/animations/sprout-sprite.png');
  animation: sproutFrames 1.5s steps(8) infinite;
}

@keyframes sproutFrames {
  from { background-position: 0 0; }
  to { background-position: -480px 0; } /* 8 frames × 60px */
}
```

**Option 3: SVG with CSS Animation**
```html
<div class="animation-container">
  <svg class="plant-sprout" viewBox="0 0 100 100">
    <!-- Your SVG plant paths here -->
  </svg>
</div>
```

**Option 4: Lottie Animation** (requires library)
```html
<div class="animation-container" id="lottie-container"></div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/lottie-web/5.12.2/lottie.min.js"></script>
<script>
  lottie.loadAnimation({
    container: document.getElementById('lottie-container'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: '../assets/animations/sprout.json'
  });
</script>
```

---

## 🌰 4. Seed Shop Images

**What it is:** The 8 seed images in the shop (4 rows × 2 columns)

**Location:** `src/pages/shop.html`

### Current Code (Lines 34-78):

```html
<!-- Row 1 - $10 seeds -->
<div class="seed-item" data-row="1" data-col="1">
  <div class="seed-image-placeholder">Seed Image 1</div>
  <div class="seed-price">$10</div>
</div>
```

### How to Add Your Seeds:

1. Create 8 seed images (different varieties!)
2. Name them: `seed1.png` through `seed8.png` (or use descriptive names)
3. Place in: `src/assets/seeds/`
4. Replace each placeholder:

```html
<!-- Row 1 - $10 seeds -->
<div class="seed-item" data-row="1" data-col="1" onclick="purchaseSeed('Rose Seed', 10)">
  <img src="../assets/seeds/rose-seed.png" alt="Rose Seed"
       style="width: 80px; height: 80px; object-fit: contain;">
  <div style="font-size: 14px; color: #2c5f2d; margin: 5px 0;">Rose</div>
  <div class="seed-price">$10</div>
</div>

<div class="seed-item" data-row="1" data-col="2" onclick="purchaseSeed('Daisy Seed', 10)">
  <img src="../assets/seeds/daisy-seed.png" alt="Daisy Seed"
       style="width: 80px; height: 80px; object-fit: contain;">
  <div style="font-size: 14px; color: #2c5f2d; margin: 5px 0;">Daisy</div>
  <div class="seed-price">$10</div>
</div>
```

### Recommended Seed Progression:

| Row | Price | Rarity | Suggested Seeds |
|-----|-------|--------|-----------------|
| 1 | $10 | Common | Rose, Daisy |
| 2 | $20 | Uncommon | Tulip, Sunflower |
| 3 | $30 | Rare | Orchid, Lily |
| 4 | $40 | Legendary | Lotus, Cherry Blossom |

### Image Specs:
- **Format:** PNG with transparency
- **Size:** 100px × 100px
- **Background:** Transparent or matching shop color
- **Style:** Consistent across all seeds

---

## 🔔 5. Alarm Sound (Pomodoro Timer)

**What it is:** Sound that plays when the Pomodoro timer finishes

**Location:** `src/pages/pomodoro.html`

### Current Code (Lines 79-84):

```html
<!-- ========================================
     AUDIO PLACEHOLDER - ALARM SOUND
     Replace the alarm sound file below with your custom audio
     ======================================== -->
<audio id="alarm-sound" preload="auto">
  <source src="data:audio/wav;base64,UklGR..." type="audio/wav">
</audio>
```

### How to Add Your Sound:

1. Find or create an alarm sound (MP3, WAV, or OGG)
2. Keep it short (1-5 seconds recommended)
3. Place in: `src/assets/sounds/`
4. Replace the audio element:

```html
<audio id="alarm-sound" preload="auto">
  <source src="../assets/sounds/alarm.mp3" type="audio/mpeg">
  <source src="../assets/sounds/alarm.wav" type="audio/wav">
  <source src="../assets/sounds/alarm.ogg" type="audio/ogg">
</audio>
```

### Recommended Sound Options:

- **Gentle:** Soft chime, bell, or nature sound
- **Energetic:** Upbeat beep, digital chime
- **Custom:** Record your own voice saying "Time's up!"
- **Themed:** Bird chirp, flower bloom sound

### Audio Specs:
- **Format:** MP3 (best compatibility)
- **Length:** 1-5 seconds
- **File Size:** Under 100KB
- **Volume:** Normalized to prevent distortion

### Testing Your Sound:

The alarm plays in: `src/js/pomodoro.js` (lines 145-154)

```javascript
function playAlarmSound() {
  if (alarmSound) {
    alarmSound.currentTime = 0;
    alarmSound.play().catch(err => {
      console.log('Could not play alarm sound:', err);
    });
  }
}
```

---

## 📁 Recommended Asset Folder Structure

Create this structure in your project:

```
src/
  assets/
    plants/
      sleep-plant.png
      journal-plant.png
      pomodoro-plant.png
      sleep-plant-dying.png (optional)
      sleep-plant-dead.png (optional)
    seeds/
      seed1-rose.png
      seed2-daisy.png
      seed3-tulip.png
      seed4-sunflower.png
      seed5-orchid.png
      seed6-lily.png
      seed7-lotus.png
      seed8-cherry.png
    animations/
      sprout1.gif
      sprout2.gif
      sprout3.gif
      sprout-sprite.png (if using sprites)
    sounds/
      alarm.mp3
      alarm.wav
      alarm.ogg
    icons/
      settings.png (optional)
      shop.png (optional)
```

---

## 🎨 Design Tips

### Color Palette

The app uses these main colors (from `main.css`):
- **Sky Blue:** #87CEEB
- **Field Green:** #8FBC8F
- **Primary Green:** #5fa777
- **Dark Green:** #2c5f2d

**Tip:** Match your assets to this color scheme for consistency!

### Style Consistency

1. **Keep a consistent art style** (realistic, cartoon, pixel art, etc.)
2. **Use similar line weights** across all assets
3. **Match lighting direction** (all from top-left, for example)
4. **Maintain color harmony** with the app's palette

### File Optimization

Before adding assets:
1. **Resize images** to exact dimensions needed
2. **Compress PNG files** using TinyPNG or similar
3. **Optimize GIFs** to reduce file size
4. **Test on slow connections** to ensure fast loading

---

## ✅ Testing Checklist

After adding assets, verify:

- [ ] All plant images display correctly on main menu
- [ ] Clicking plants still navigates properly
- [ ] Sprouting animations play on welcome page
- [ ] All 8 seed images show in shop
- [ ] Alarm sound plays when timer completes
- [ ] No broken image icons (🖼️❌)
- [ ] App loads quickly (under 3 seconds)
- [ ] Images look good at different window sizes

---

## 🔄 Quick Asset Swap Template

Save this as a reference for quick asset changes:

```html
<!-- PLANTS -->
<img src="../assets/plants/PLANT_NAME.png" alt="Plant" style="width: 80px; height: 100px;">

<!-- SEEDS -->
<img src="../assets/seeds/SEED_NAME.png" alt="Seed" style="width: 80px; height: 80px;">

<!-- ANIMATIONS -->
<img src="../assets/animations/ANIMATION_NAME.gif" alt="Animation">

<!-- SOUNDS -->
<source src="../assets/sounds/SOUND_NAME.mp3" type="audio/mpeg">
```

---

## 📞 Need Help?

If your assets aren't showing:
1. Check file paths (use `../` to go up one folder)
2. Verify file extensions match exactly (`.png` not `.PNG`)
3. Ensure files are in the correct folders
4. Clear cache and restart the app
5. Check browser console for errors (F12)

---

**Happy designing! 🎨 Your custom assets will make Fallow truly unique!**
