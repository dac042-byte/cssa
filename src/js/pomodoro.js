// ============================================
// FALLOW APP - POMODORO TIMER
// Work/rest timer with customizable durations
// Plays alarm sound when timer completes
// ============================================

// Timer state
let timerInterval = null;
let remainingSeconds = 0;
let isWorkTime = true;
let isPaused = false;

// Back button handler
document.getElementById('back-btn').addEventListener('click', function() {
  window.location.href = 'main-menu.html';
});

// Get alarm sound element
const alarmSound = document.getElementById('alarm-sound');

// Load timer settings from user data
function loadTimerSettings() {
  const user = getCurrentUser();
  if (!user) return { workDuration: 25, restDuration: 5 };

  if (!user.pomodoroSettings) {
    user.pomodoroSettings = {
      workDuration: 25,
      restDuration: 5
    };
    updateCurrentUser(user);
  }

  return user.pomodoroSettings;
}

// Save timer settings
function saveTimerSettings(workDuration, restDuration) {
  const user = getCurrentUser();
  if (!user) return;

  user.pomodoroSettings = {
    workDuration: parseInt(workDuration),
    restDuration: parseInt(restDuration)
  };

  updateCurrentUser(user);
}

// Initialize timer display
function initializeTimer() {
  const settings = loadTimerSettings();

  // Set input values
  document.getElementById('work-duration').value = settings.workDuration;
  document.getElementById('rest-duration').value = settings.restDuration;

  // Set initial timer display
  remainingSeconds = settings.workDuration * 60;
  isWorkTime = true;
  updateDisplay();
}

// Update timer display
function updateDisplay() {
  const minutes = Math.floor(remainingSeconds / 60);
  const seconds = remainingSeconds % 60;

  const timeString = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  document.getElementById('timer-display').textContent = timeString;

  // Update mode label
  const modeLabel = document.getElementById('timer-mode');
  if (isWorkTime) {
    modeLabel.setAttribute('data-translate', 'work-time');
    modeLabel.textContent = getCurrentLanguage() === 'es' ? 'Tiempo de trabajo' : 'Work Time';
  } else {
    modeLabel.setAttribute('data-translate', 'rest-time');
    modeLabel.textContent = getCurrentLanguage() === 'es' ? 'Tiempo de descanso' : 'Rest Time';
  }
}

// Start timer
function startTimer() {
  if (timerInterval) return; // Already running

  isPaused = false;

  timerInterval = setInterval(() => {
    if (remainingSeconds > 0) {
      remainingSeconds--;
      updateDisplay();
    } else {
      // Timer completed
      timerCompleted();
    }
  }, 1000);

  // Update button states
  document.getElementById('start-btn').disabled = true;
  document.getElementById('pause-btn').disabled = false;
}

// Pause timer
function pauseTimer() {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
    isPaused = true;

    // Update button states
    document.getElementById('start-btn').disabled = false;
    document.getElementById('pause-btn').disabled = true;
  }
}

// Reset timer
function resetTimer() {
  pauseTimer();

  const settings = loadTimerSettings();
  remainingSeconds = isWorkTime ? settings.workDuration * 60 : settings.restDuration * 60;
  updateDisplay();

  // Reset button states
  document.getElementById('start-btn').disabled = false;
  document.getElementById('pause-btn').disabled = true;
}

// Timer completed - play alarm and switch mode
function timerCompleted() {
  pauseTimer();

  // Play alarm sound
  playAlarmSound();

  // Update statistics if it was a work session
  if (isWorkTime) {
    incrementPomodoroCount();
  }

  // Switch mode
  isWorkTime = !isWorkTime;
  const settings = loadTimerSettings();
  remainingSeconds = isWorkTime ? settings.workDuration * 60 : settings.restDuration * 60;

  updateDisplay();

  // Show notification
  const message = isWorkTime
    ? 'Rest time completed! Ready for work?'
    : 'Work session completed! Time for a rest!';

  if (confirm(message + '\n\nStart next timer?')) {
    startTimer();
  }
}

// Play alarm sound
function playAlarmSound() {
  /* ========================================
     AUDIO PLACEHOLDER - ALARM SOUND
     The alarm sound will play here

     To customize:
     1. Replace the audio source in pomodoro.html
     2. Place your custom sound file in src/assets/sounds/
     3. Update the <source src="..."> tag

     Supported formats: MP3, WAV, OGG
     ======================================== */
  if (alarmSound) {
    alarmSound.currentTime = 0;
    alarmSound.play().catch(err => {
      console.log('Could not play alarm sound:', err);
    });
  }
}

// Increment pomodoro session count
function incrementPomodoroCount() {
  const user = getCurrentUser();
  if (!user) return;

  if (!user.pomodoroStats) {
    user.pomodoroStats = { totalSessions: 0 };
  }

  user.pomodoroStats.totalSessions++;

  // Update last visit
  if (!user.lastVisit) {
    user.lastVisit = {};
  }
  user.lastVisit.pomodoro = new Date().toISOString();

  updateCurrentUser(user);
}

// Apply settings button handler
document.getElementById('save-settings').addEventListener('click', function() {
  const workDuration = document.getElementById('work-duration').value;
  const restDuration = document.getElementById('rest-duration').value;

  // Validate inputs
  if (workDuration < 1 || workDuration > 120 || restDuration < 1 || restDuration > 60) {
    alert('Please enter valid durations!\nWork: 1-120 minutes\nRest: 1-60 minutes');
    return;
  }

  saveTimerSettings(workDuration, restDuration);

  // Reset timer with new settings
  resetTimer();

  // Show confirmation
  const btn = this;
  const originalText = btn.textContent;
  btn.textContent = '✓ Settings Applied!';
  btn.style.backgroundColor = '#4CAF50';

  setTimeout(() => {
    btn.textContent = originalText;
    btn.style.backgroundColor = '';
  }, 2000);
});

// Start button handler
document.getElementById('start-btn').addEventListener('click', function() {
  startTimer();
});

// Pause button handler
document.getElementById('pause-btn').addEventListener('click', function() {
  pauseTimer();
});

// Reset button handler
document.getElementById('reset-btn').addEventListener('click', function() {
  if (confirm('Are you sure you want to reset the timer?')) {
    resetTimer();
  }
});

// Initialize pomodoro page
if (typeof window !== 'undefined') {
  window.addEventListener('DOMContentLoaded', function() {
    initializeTimer();

    // Set initial button states
    document.getElementById('start-btn').disabled = false;
    document.getElementById('pause-btn').disabled = true;
  });

  // Clean up interval when leaving page
  window.addEventListener('beforeunload', function() {
    if (timerInterval) {
      clearInterval(timerInterval);
    }
  });
}
