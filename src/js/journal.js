// ============================================
// FALLOW APP - JOURNALING
// Daily journal with motivational quotes
// Saves entries per date
// ============================================

// Motivational quotes database
const motivationalQuotes = [
  {
    text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela"
  },
  {
    text: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney"
  },
  {
    text: "Your time is limited, don't waste it living someone else's life.",
    author: "Steve Jobs"
  },
  {
    text: "If life were predictable it would cease to be life, and be without flavor.",
    author: "Eleanor Roosevelt"
  },
  {
    text: "Life is what happens when you're busy making other plans.",
    author: "John Lennon"
  },
  {
    text: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt"
  },
  {
    text: "It is during our darkest moments that we must focus to see the light.",
    author: "Aristotle"
  },
  {
    text: "Whoever is happy will make others happy too.",
    author: "Anne Frank"
  },
  {
    text: "You will face many defeats in life, but never let yourself be defeated.",
    author: "Maya Angelou"
  },
  {
    text: "In the end, it's not the years in your life that count. It's the life in your years.",
    author: "Abraham Lincoln"
  },
  {
    text: "Life is either a daring adventure or nothing at all.",
    author: "Helen Keller"
  },
  {
    text: "The only impossible journey is the one you never begin.",
    author: "Tony Robbins"
  },
  {
    text: "Act as if what you do makes a difference. It does.",
    author: "William James"
  },
  {
    text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill"
  },
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt"
  }
];

// Back button handler
document.getElementById('back-btn').addEventListener('click', function() {
  window.location.href = 'main-menu.html';
});

// Get daily quote (consistent for the day)
function getDailyQuote() {
  const today = new Date().toISOString().split('T')[0];
  // Use date as seed for consistent daily quote
  const dateHash = today.split('-').reduce((sum, num) => sum + parseInt(num), 0);
  const index = dateHash % motivationalQuotes.length;
  return motivationalQuotes[index];
}

// Display daily quote
function displayDailyQuote() {
  const quote = getDailyQuote();
  const quoteElement = document.getElementById('daily-quote');

  if (quoteElement) {
    quoteElement.innerHTML = `
      "${quote.text}"
      <div style="text-align: right; margin-top: 10px; font-size: 12px; font-weight: bold;">
        — ${quote.author}
      </div>
    `;
  }
}

// Load today's journal entry
function loadTodaysEntry() {
  const user = getCurrentUser();
  if (!user) return;

  const today = new Date().toISOString().split('T')[0];

  if (user.journalEntries && user.journalEntries[today]) {
    const entry = user.journalEntries[today];
    document.getElementById('journal-text').value = entry.text || '';

    // Display last saved time
    if (entry.savedAt) {
      const savedDate = new Date(entry.savedAt);
      document.getElementById('last-saved-time').textContent = savedDate.toLocaleTimeString();
    }
  } else {
    document.getElementById('journal-text').value = '';
    document.getElementById('last-saved-time').textContent = 'Never';
  }
}

// Save journal entry
function saveJournalEntry() {
  const user = getCurrentUser();
  if (!user) return;

  const text = document.getElementById('journal-text').value.trim();
  const today = new Date().toISOString().split('T')[0];

  if (!user.journalEntries) {
    user.journalEntries = {};
  }

  // Save entry
  user.journalEntries[today] = {
    text: text,
    savedAt: new Date().toISOString()
  };

  // Update last visit
  if (!user.lastVisit) {
    user.lastVisit = {};
  }
  user.lastVisit.journal = new Date().toISOString();

  updateCurrentUser(user);

  // Update last saved time display
  const now = new Date();
  document.getElementById('last-saved-time').textContent = now.toLocaleTimeString();

  // Show confirmation
  showSaveConfirmation();
}

// Show save confirmation message
function showSaveConfirmation() {
  const saveBtn = document.getElementById('save-journal');
  const originalText = saveBtn.textContent;

  saveBtn.textContent = '✓ Saved!';
  saveBtn.style.backgroundColor = '#4CAF50';

  setTimeout(() => {
    saveBtn.textContent = originalText;
    saveBtn.style.backgroundColor = '';
  }, 2000);
}

// Auto-save functionality (optional)
let autoSaveTimer = null;

function enableAutoSave() {
  const journalText = document.getElementById('journal-text');

  journalText.addEventListener('input', function() {
    // Clear existing timer
    if (autoSaveTimer) {
      clearTimeout(autoSaveTimer);
    }

    // Set new timer for 3 seconds
    autoSaveTimer = setTimeout(() => {
      saveJournalEntry();
    }, 3000);
  });
}

// Save button handler
document.getElementById('save-journal').addEventListener('click', function() {
  saveJournalEntry();
});

// Initialize journal page
if (typeof window !== 'undefined') {
  window.addEventListener('DOMContentLoaded', function() {
    displayDailyQuote();
    loadTodaysEntry();
    // enableAutoSave(); // Uncomment if you want auto-save feature
  });
}
