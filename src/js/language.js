// ============================================
// FALLOW APP - MULTI-LANGUAGE SUPPORT
// Supports English and Spanish
// Note: "Fallow" remains the same in both languages
// ============================================

const translations = {
  en: {
    // Auth pages
    'signin-title': 'Fallow',
    'signin-subtitle': 'Welcome back to your garden',
    'signup-title': 'Fallow',
    'signup-subtitle': 'Begin your journey to wellness',
    'username': 'Username',
    'email': 'Email',
    'display-name': 'Display Name',
    'password': 'Password',
    'confirm-password': 'Confirm Password',
    'remember-me': 'Remember me',
    'signin-button': 'Sign In',
    'signup-button': 'Create Account',
    'no-account': "Don't have an account?",
    'have-account': 'Already have an account?',
    'signin-link': 'Sign In',
    'signup-link': 'Sign Up',

    // Welcome page
    'fallow-definition': '(of farmland) plowed and harrowed but left unsown for a period in order to restore its fertility; usually cultivated land that is allowed to lie idle during the growing season.',
    'continue': 'Continue to Your Garden',

    // Main menu
    'sleep-tracking': 'Sleep Tracking',
    'journaling': 'Journaling',
    'pomodoro': 'Pomodoro',

    // Settings
    'settings': 'Settings',
    'account-info': 'Account Information',
    'member-since': 'Member Since',
    'weekly-report': 'Weekly Report',
    'sleep-avg': 'Sleep Average',
    'journal-entries': 'Journal Entries',
    'pomodoro-sessions': 'Pomodoro Sessions',
    'garden-health': 'Garden Health',
    'language-settings': 'Language',
    'select-language': 'Select Language',
    'logout': 'Logout',

    // Shop
    'shop': 'Seed Shop',

    // Sleep Tracking
    'time-offline-today': 'Time Offline Today',
    'weekly-sleep': 'Weekly Sleep Overview',
    'mon': 'Mon',
    'tue': 'Tue',
    'wed': 'Wed',
    'thu': 'Thu',
    'fri': 'Fri',
    'sat': 'Sat',
    'sun': 'Sun',
    'how-it-works': 'How it works:',
    'sleep-explanation': 'Sleep tracking monitors the time when your computer is inactive or in sleep mode. This gives you insights into your digital wellness and rest patterns.',

    // Journal
    'todays-entry': "Today's Entry",
    'journal-placeholder': "What's on your mind today? Write freely...",
    'save-entry': 'Save Entry',
    'last-saved': 'Last saved:',

    // Pomodoro
    'work-time': 'Work Time',
    'rest-time': 'Rest Time',
    'start': 'Start',
    'pause': 'Pause',
    'reset': 'Reset',
    'timer-settings': 'Timer Settings',
    'work-duration': 'Work Duration (minutes)',
    'rest-duration': 'Rest Duration (minutes)',
    'apply-settings': 'Apply Settings',
    'pomodoro-info': 'About Pomodoro:',
    'pomodoro-explanation': 'The Pomodoro Technique helps you focus on tasks by breaking work into intervals. Work for the set duration, then take a short rest. This improves productivity and prevents burnout.'
  },

  es: {
    // Auth pages (Páginas de autenticación)
    'signin-title': 'Fallow',
    'signin-subtitle': 'Bienvenido de nuevo a tu jardín',
    'signup-title': 'Fallow',
    'signup-subtitle': 'Comienza tu viaje hacia el bienestar',
    'username': 'Nombre de usuario',
    'email': 'Correo electrónico',
    'display-name': 'Nombre para mostrar',
    'password': 'Contraseña',
    'confirm-password': 'Confirmar contraseña',
    'remember-me': 'Recuérdame',
    'signin-button': 'Iniciar sesión',
    'signup-button': 'Crear cuenta',
    'no-account': '¿No tienes una cuenta?',
    'have-account': '¿Ya tienes una cuenta?',
    'signin-link': 'Iniciar sesión',
    'signup-link': 'Registrarse',

    // Welcome page (Página de bienvenida)
    'fallow-definition': '(de tierras de cultivo) arado y rastrillado pero sin sembrar durante un período para restaurar su fertilidad; tierra generalmente cultivada que se deja en reposo durante la temporada de crecimiento.',
    'continue': 'Continuar a tu jardín',

    // Main menu (Menú principal)
    'sleep-tracking': 'Seguimiento del sueño',
    'journaling': 'Diario',
    'pomodoro': 'Pomodoro',

    // Settings (Configuración)
    'settings': 'Configuración',
    'account-info': 'Información de la cuenta',
    'member-since': 'Miembro desde',
    'weekly-report': 'Informe semanal',
    'sleep-avg': 'Promedio de sueño',
    'journal-entries': 'Entradas de diario',
    'pomodoro-sessions': 'Sesiones Pomodoro',
    'garden-health': 'Salud del jardín',
    'language-settings': 'Idioma',
    'select-language': 'Seleccionar idioma',
    'logout': 'Cerrar sesión',

    // Shop (Tienda)
    'shop': 'Tienda de semillas',

    // Sleep Tracking (Seguimiento del sueño)
    'time-offline-today': 'Tiempo desconectado hoy',
    'weekly-sleep': 'Resumen semanal del sueño',
    'mon': 'Lun',
    'tue': 'Mar',
    'wed': 'Mié',
    'thu': 'Jue',
    'fri': 'Vie',
    'sat': 'Sáb',
    'sun': 'Dom',
    'how-it-works': 'Cómo funciona:',
    'sleep-explanation': 'El seguimiento del sueño monitorea el tiempo cuando tu computadora está inactiva o en modo de suspensión. Esto te brinda información sobre tu bienestar digital y patrones de descanso.',

    // Journal (Diario)
    'todays-entry': 'Entrada de hoy',
    'journal-placeholder': '¿Qué tienes en mente hoy? Escribe libremente...',
    'save-entry': 'Guardar entrada',
    'last-saved': 'Guardado por última vez:',

    // Pomodoro
    'work-time': 'Tiempo de trabajo',
    'rest-time': 'Tiempo de descanso',
    'start': 'Iniciar',
    'pause': 'Pausar',
    'reset': 'Reiniciar',
    'timer-settings': 'Configuración del temporizador',
    'work-duration': 'Duración del trabajo (minutos)',
    'rest-duration': 'Duración del descanso (minutos)',
    'apply-settings': 'Aplicar configuración',
    'pomodoro-info': 'Acerca de Pomodoro:',
    'pomodoro-explanation': 'La Técnica Pomodoro te ayuda a concentrarte en tareas dividiéndolas en intervalos. Trabaja durante el tiempo establecido, luego toma un breve descanso. Esto mejora la productividad y previene el agotamiento.'
  }
};

// Get current language from localStorage or default to English
function getCurrentLanguage() {
  return localStorage.getItem('language') || 'en';
}

// Set language
function setLanguage(lang) {
  localStorage.setItem('language', lang);
  applyTranslations();
}

// Apply translations to the page
function applyTranslations() {
  const lang = getCurrentLanguage();
  const translation = translations[lang];

  // Translate elements with data-translate attribute
  document.querySelectorAll('[data-translate]').forEach(element => {
    const key = element.getAttribute('data-translate');
    if (translation[key]) {
      element.textContent = translation[key];
    }
  });

  // Translate placeholders
  document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
    const key = element.getAttribute('data-translate-placeholder');
    if (translation[key]) {
      element.placeholder = translation[key];
    }
  });
}

// Initialize language on page load
if (typeof window !== 'undefined') {
  window.addEventListener('DOMContentLoaded', function() {
    applyTranslations();

    // Set language selector value if it exists
    const langSelect = document.getElementById('language-select');
    if (langSelect) {
      langSelect.value = getCurrentLanguage();

      langSelect.addEventListener('change', function() {
        setLanguage(this.value);
      });
    }
  });
}

// Export functions for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { getCurrentLanguage, setLanguage, applyTranslations };
}
