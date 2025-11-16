// ============================================
// FALLOW APP - SLEEP TRACKING
// Tracks computer offline time as a proxy for sleep
// Shows daily and weekly statistics
// ============================================

const { powerMonitor } = require('electron');

// Back button handler
document.getElementById('back-btn').addEventListener('click', function() {
  window.location.href = 'main-menu.html';
});

// Track last active time
let lastActiveTime = Date.now();
let sleepStartTime = null;

// Monitor system sleep/wake events
if (powerMonitor) {
  powerMonitor.on('suspend', () => {
    sleepStartTime = Date.now();
    console.log('System going to sleep');
  });

  powerMonitor.on('resume', () => {
    if (sleepStartTime) {
      const sleepDuration = Math.floor((Date.now() - sleepStartTime) / 60000); // in minutes
      saveSleepData(sleepDuration);
      sleepStartTime = null;
      console.log(`System woke up. Sleep duration: ${sleepDuration} minutes`);
    }
  });
}

// Save sleep data for the current date
function saveSleepData(minutes) {
  const user = getCurrentUser();
  if (!user) return;

  const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD

  if (!user.sleepData) {
    user.sleepData = {};
  }

  // Add to today's total
  user.sleepData[today] = (user.sleepData[today] || 0) + minutes;

  // Update last visit
  if (!user.lastVisit) {
    user.lastVisit = {};
  }
  user.lastVisit.sleep = new Date().toISOString();

  updateCurrentUser(user);
  displaySleepData();
}

// Display sleep data
function displaySleepData() {
  const user = getCurrentUser();
  if (!user || !user.sleepData) return;

  const today = new Date().toISOString().split('T')[0];
  const todayMinutes = user.sleepData[today] || 0;

  // Display today's sleep
  const hours = Math.floor(todayMinutes / 60);
  const minutes = todayMinutes % 60;
  document.getElementById('sleep-duration').textContent = `${hours}h ${minutes}m`;

  // Display weekly data
  displayWeeklyData(user.sleepData);
}

// Display weekly sleep data
function displayWeeklyData(sleepData) {
  const days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
  const today = new Date();

  // Get last 7 days
  for (let i = 0; i < 7; i++) {
    const date = new Date(today);
    date.setDate(date.getDate() - (6 - i)); // Start from 6 days ago

    const dateStr = date.toISOString().split('T')[0];
    const dayOfWeek = days[date.getDay()];

    const minutes = sleepData[dateStr] || 0;
    const hours = Math.floor(minutes / 60);

    const element = document.getElementById(`sleep-${dayOfWeek}`);
    if (element) {
      element.textContent = `${hours}h`;
    }
  }
}

// Simulate sleep tracking for demo purposes
// In production, this would use actual system events
function simulateSleepTracking() {
  // Check if we should add some demo data
  const user = getCurrentUser();
  if (!user) return;

  // Only add demo data if there's no existing data
  if (!user.sleepData || Object.keys(user.sleepData).length === 0) {
    const demoData = {};
    const today = new Date();

    // Add random sleep data for the past 7 days
    for (let i = 0; i < 7; i++) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      const dateStr = date.toISOString().split('T')[0];

      // Random sleep duration between 6-9 hours (360-540 minutes)
      const randomMinutes = Math.floor(Math.random() * 180) + 360;
      demoData[dateStr] = randomMinutes;
    }

    user.sleepData = demoData;
    user.lastVisit = user.lastVisit || {};
    user.lastVisit.sleep = new Date().toISOString();

    updateCurrentUser(user);
  }

  displaySleepData();
}

// Track manual sleep entry button (optional feature)
function addManualSleepEntry() {
  const hours = prompt('Enter hours of sleep:');
  if (hours && !isNaN(hours)) {
    const minutes = parseInt(hours) * 60;
    saveSleepData(minutes);
  }
}

// Initialize sleep tracking page
if (typeof window !== 'undefined') {
  window.addEventListener('DOMContentLoaded', function() {
    simulateSleepTracking();

    // Optional: Add manual entry button functionality
    // You can uncomment this and add a button to the HTML if desired
    /*
    const manualEntryBtn = document.getElementById('manual-entry-btn');
    if (manualEntryBtn) {
      manualEntryBtn.addEventListener('click', addManualSleepEntry);
    }
    */
  });
}
