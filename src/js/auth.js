// ============================================
// FALLOW APP - AUTHENTICATION SYSTEM
// Handles user sign-up, sign-in, and session management
// Uses localStorage for persistent user data
// ============================================

const fs = require('fs');
const path = require('path');

// Get user data file path
const userDataPath = path.join(require('os').homedir(), '.fallow-users.json');

// Initialize user database
function initUserDatabase() {
  if (!fs.existsSync(userDataPath)) {
    fs.writeFileSync(userDataPath, JSON.stringify({ users: [] }));
  }
}

// Read users from file
function readUsers() {
  initUserDatabase();
  try {
    const data = fs.readFileSync(userDataPath, 'utf8');
    return JSON.parse(data).users;
  } catch (error) {
    console.error('Error reading users:', error);
    return [];
  }
}

// Write users to file
function writeUsers(users) {
  try {
    fs.writeFileSync(userDataPath, JSON.stringify({ users }, null, 2));
  } catch (error) {
    console.error('Error writing users:', error);
  }
}

// Sign Up Handler
if (document.getElementById('signup-form')) {
  document.getElementById('signup-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.getElementById('email').value.trim();
    const displayName = document.getElementById('display-name').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Validation
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    if (password.length < 6) {
      alert('Password must be at least 6 characters long!');
      return;
    }

    const users = readUsers();

    // Check if user already exists
    if (users.find(u => u.email === email)) {
      alert('An account with this email already exists!');
      return;
    }

    // Create new user
    const newUser = {
      id: Date.now().toString(),
      email,
      displayName,
      username: email.split('@')[0], // Use email prefix as username
      password, // In production, hash this!
      createdAt: new Date().toISOString(),
      sleepData: {},
      journalEntries: {},
      pomodoroSettings: {
        workDuration: 25,
        restDuration: 5
      },
      pomodoroStats: {
        totalSessions: 0
      },
      lastVisit: {
        sleep: null,
        journal: null,
        pomodoro: null
      }
    };

    users.push(newUser);
    writeUsers(users);

    // Set current user
    localStorage.setItem('currentUser', JSON.stringify(newUser));
    localStorage.setItem('rememberMe', 'false');

    // Redirect to welcome page
    window.location.href = 'welcome.html';
  });
}

// Sign In Handler
if (document.getElementById('signin-form')) {
  // Check if user should be auto-logged in
  const rememberMe = localStorage.getItem('rememberMe');
  const currentUser = localStorage.getItem('currentUser');

  if (rememberMe === 'true' && currentUser) {
    // Auto-login
    window.location.href = 'main-menu.html';
  }

  document.getElementById('signin-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;
    const rememberMeChecked = document.getElementById('remember-me').checked;

    const users = readUsers();

    // Find user by username or email
    const user = users.find(u =>
      u.username === username || u.email === username
    );

    if (!user || user.password !== password) {
      alert('Invalid username/email or password!');
      return;
    }

    // Set current user
    localStorage.setItem('currentUser', JSON.stringify(user));
    localStorage.setItem('rememberMe', rememberMeChecked.toString());

    // Redirect to main menu
    window.location.href = 'main-menu.html';
  });
}

// Check if user is authenticated (for protected pages)
function checkAuth() {
  const currentUser = localStorage.getItem('currentUser');

  // Allow access to auth pages
  const authPages = ['signin.html', 'signup.html'];
  const currentPage = window.location.pathname.split('/').pop();

  if (authPages.includes(currentPage)) {
    return true;
  }

  // Require authentication for all other pages
  if (!currentUser) {
    window.location.href = 'signin.html';
    return false;
  }

  return true;
}

// Get current user
function getCurrentUser() {
  const userStr = localStorage.getItem('currentUser');
  return userStr ? JSON.parse(userStr) : null;
}

// Update current user data
function updateCurrentUser(updates) {
  const user = getCurrentUser();
  if (!user) return;

  const updatedUser = { ...user, ...updates };
  localStorage.setItem('currentUser', JSON.stringify(updatedUser));

  // Update in file
  const users = readUsers();
  const index = users.findIndex(u => u.id === user.id);
  if (index !== -1) {
    users[index] = updatedUser;
    writeUsers(users);
  }

  return updatedUser;
}

// Logout function
function logout() {
  localStorage.removeItem('currentUser');
  localStorage.removeItem('rememberMe');
  window.location.href = 'signin.html';
}

// Run auth check on page load
if (typeof window !== 'undefined') {
  checkAuth();
}
