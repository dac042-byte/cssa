// ============================================
// FALLOW APP - SETTINGS PAGE
// Manages user settings and displays weekly reports
// ============================================

const fs = require('fs');
const path = require('path');

// Back button handler
document.getElementById('back-btn').addEventListener('click', function() {
  window.location.href = 'main-menu.html';
});

// Logout button handler
document.getElementById('logout-btn').addEventListener('click', function() {
  if (confirm('Are you sure you want to logout?')) {
    logout();
  }
});

// Load user information
function loadUserInfo() {
  const user = getCurrentUser();
  if (!user) return;

  // Display account info
  document.getElementById('user-display-name').textContent = user.displayName || 'User';
  document.getElementById('user-email').textContent = user.email || 'N/A';

  // Format member since date
  if (user.createdAt) {
    const date = new Date(user.createdAt);
    document.getElementById('member-since').textContent = date.toLocaleDateString();
  }

  // Calculate weekly report
  calculateWeeklyReport(user);
}

// Calculate weekly report statistics
function calculateWeeklyReport(user) {
  // Sleep average
  if (user.sleepData) {
    const sleepValues = Object.values(user.sleepData).slice(-7); // Last 7 days
    if (sleepValues.length > 0) {
      const totalMinutes = sleepValues.reduce((sum, val) => sum + val, 0);
      const avgMinutes = Math.floor(totalMinutes / sleepValues.length);
      const hours = Math.floor(avgMinutes / 60);
      const minutes = avgMinutes % 60;
      document.getElementById('sleep-avg').textContent = `${hours}h ${minutes}m`;
    }
  }

  // Journal entries count (last 7 days)
  if (user.journalEntries) {
    const now = new Date();
    const sevenDaysAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);

    const recentEntries = Object.keys(user.journalEntries).filter(dateKey => {
      const entryDate = new Date(dateKey);
      return entryDate >= sevenDaysAgo;
    });

    document.getElementById('journal-count').textContent = recentEntries.length;
  }

  // Pomodoro sessions
  if (user.pomodoroStats) {
    document.getElementById('pomodoro-count').textContent = user.pomodoroStats.totalSessions || 0;
  }

  // Garden health (based on activity)
  const gardenHealth = calculateGardenHealth(user);
  document.getElementById('garden-health').textContent = gardenHealth;
}

// Calculate garden health based on user activity
function calculateGardenHealth(user) {
  const now = new Date();
  const threeDaysAgo = new Date(now.getTime() - 3 * 24 * 60 * 60 * 1000);

  let healthyCount = 0;
  let totalCategories = 3;

  // Check sleep tracking activity
  if (user.lastVisit && user.lastVisit.sleep) {
    const lastSleep = new Date(user.lastVisit.sleep);
    if (lastSleep >= threeDaysAgo) healthyCount++;
  }

  // Check journal activity
  if (user.lastVisit && user.lastVisit.journal) {
    const lastJournal = new Date(user.lastVisit.journal);
    if (lastJournal >= threeDaysAgo) healthyCount++;
  }

  // Check pomodoro activity
  if (user.lastVisit && user.lastVisit.pomodoro) {
    const lastPomodoro = new Date(user.lastVisit.pomodoro);
    if (lastPomodoro >= threeDaysAgo) healthyCount++;
  }

  // Determine health status
  if (healthyCount === totalCategories) return 'Healthy';
  if (healthyCount >= 2) return 'Good';
  if (healthyCount === 1) return 'Needs Attention';
  return 'Neglected';
}

// Initialize settings page
if (typeof window !== 'undefined') {
  window.addEventListener('DOMContentLoaded', function() {
    loadUserInfo();
  });
}
