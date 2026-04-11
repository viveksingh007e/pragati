const runForm = document.getElementById('runForm');
const runHistory = document.getElementById('runHistory');

function loadRuns() {
  return JSON.parse(localStorage.getItem('runs') || '[]');
}

function saveRuns(runs) {
  localStorage.setItem('runs', JSON.stringify(runs));
}

function renderRuns() {
  const runs = loadRuns();
  if (runs.length === 0) {
    runHistory.innerHTML = '<p class="empty-state">No runs logged yet. Start adding!</p>';
    return;
  }
  runHistory.innerHTML = runs
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .map(run => `
      <div class="run-entry">
        <div class="run-date">${new Date(run.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</div>
        <div class="run-stats">${run.duration} min${run.distance ? ' &middot; ' + run.distance + ' km' : ''}</div>
        ${run.notes ? '<div class="run-notes">' + escapeHtml(run.notes) + '</div>' : ''}
      </div>
    `).join('');
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

runForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const runs = loadRuns();
  runs.push({
    date: document.getElementById('runDate').value,
    duration: document.getElementById('runDuration').value,
    distance: document.getElementById('runDistance').value || null,
    notes: document.getElementById('runNotes').value || null
  });
  saveRuns(runs);
  runForm.reset();
  renderRuns();
});

renderRuns();