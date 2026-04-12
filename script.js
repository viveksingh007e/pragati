function showDotsTooltip(event) {
  event.stopPropagation();
  const btn = event.currentTarget;
  const tooltip = btn.nextElementSibling;
  if (!tooltip) return;
  tooltip.classList.remove('tooltip-hidden');
  // Hide on next click anywhere
  function hideTooltip() {
    tooltip.classList.add('tooltip-hidden');
    document.removeEventListener('click', hideTooltip);
  }
  setTimeout(() => {
    document.addEventListener('click', hideTooltip);
  }, 0);
}
const html = document.documentElement;

function toggleTheme() {
  const next = html.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
  html.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
}


const saved = localStorage.getItem('theme');
if (saved) html.setAttribute('data-theme', saved);

// Dashboard data binding
document.getElementById('streakDays').textContent = RUNNER_DATA.streakDays;
document.getElementById('lastRun').textContent = RUNNER_DATA.lastRun;

function openRunner() {
  window.location.href = 'runner.html';

}
function openBooks() {
  window.location.href = 'books.html';
}
function openFulfilments(){
  window.location.href = 'fulfilments.html';
}

// Removed overlay logic for Runner and Books. Now handled by direct navigation in index.html
