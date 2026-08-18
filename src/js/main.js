// Theme Toggle Logic
const themeToggleBtn = document.getElementById('theme-toggle');
const darkIcon = document.getElementById('theme-toggle-dark-icon');
const lightIcon = document.getElementById('theme-toggle-light-icon');

if (themeToggleBtn && darkIcon && lightIcon) {
  // Change the icons inside the button based on previous settings
  if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    lightIcon.classList.remove('hidden');
    document.documentElement.classList.add('dark');
  } else {
    darkIcon.classList.remove('hidden');
    document.documentElement.classList.remove('dark');
  }

  themeToggleBtn.addEventListener('click', function() {
    // toggle icons
    darkIcon.classList.toggle('hidden');
    lightIcon.classList.toggle('hidden');

    // if set via local storage previously
    if (localStorage.getItem('color-theme')) {
      if (localStorage.getItem('color-theme') === 'light') {
        document.documentElement.classList.add('dark');
        localStorage.setItem('color-theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('color-theme', 'light');
      }
    } else {
      // if NOT set via local storage previously
      if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('color-theme', 'light');
      } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('color-theme', 'dark');
      }
    }
  });
}

// Global Toast Notification System
window.showToast = function(message, type = 'success') {
  // Create toast container if it doesn't exist
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'fixed bottom-4 right-4 z-[9999] flex flex-col gap-2';
    document.body.appendChild(container);
  }

  // Create toast element
  const toast = document.createElement('div');
  const bgColor = type === 'success' ? 'bg-green-500' : type === 'error' ? 'bg-red-500' : 'bg-primary-600';
  toast.className = `transform transition-all duration-300 translate-y-full opacity-0 ${bgColor} text-white px-4 py-3 rounded shadow-lg flex items-center gap-2`;
  
  const icon = type === 'success' ? '✓' : type === 'error' ? '✕' : 'ℹ';
  toast.innerHTML = `<span class="font-bold">${icon}</span> <span>${message}</span>`;
  
  container.appendChild(toast);

  // Animate in
  setTimeout(() => {
    toast.classList.remove('translate-y-full', 'opacity-0');
  }, 10);

  // Remove after 3 seconds
  setTimeout(() => {
    toast.classList.add('translate-y-full', 'opacity-0');
    setTimeout(() => toast.remove(), 300);
  }, 3000);
};
