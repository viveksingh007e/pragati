const html = document.documentElement;

function toggleTheme() {
  const next = html.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
  html.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
}

document.addEventListener('keydown', (e) => {
  if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
  if (e.key === 't' || e.key === 'T') {
    toggleTheme();
  }
  if (e.key === 'f' || e.key === 'F') {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  }
  if (e.key === ' ') {
    closeRunner();
    closeBooks();
  }
});

const saved = localStorage.getItem('theme');
if (saved) html.setAttribute('data-theme', saved);

// Dashboard data binding
document.getElementById('streakDays').textContent = RUNNER_DATA.streakDays;
document.getElementById('lastRun').textContent = RUNNER_DATA.lastRun;

function openRunner() {
  const overlay = document.getElementById('runnerOverlay');
  document.getElementById('runnerFrame').src = 'runner.html';
  overlay.classList.remove('hidden');
}

function closeRunner() {
  const overlay = document.getElementById('runnerOverlay');
  overlay.classList.add('hidden');
  document.getElementById('runnerFrame').src = '';
}

function openBooks() {
  const overlay = document.getElementById('booksOverlay');
  document.getElementById('booksFrame').src = 'books.html';
  overlay.classList.remove('hidden');
}

function closeBooks() {
  const overlay = document.getElementById('booksOverlay');
  overlay.classList.add('hidden');
  document.getElementById('booksFrame').src = '';
}
