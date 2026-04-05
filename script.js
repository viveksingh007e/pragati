const html = document.documentElement;

function toggleTheme() {
  const next = html.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
  html.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
}

document.addEventListener('keydown', (e) => {
  if (e.key === 't' || e.key === 'T') {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
    toggleTheme();
  }
});

const saved = localStorage.getItem('theme');
if (saved) html.setAttribute('data-theme', saved);
