const html = document.documentElement;

// Dashboard data binding
document.getElementById('streakDays').textContent = RUNNER_DATA.streakDays;
document.getElementById('lastRun').textContent = RUNNER_DATA.lastRun;

function updateXerDays() {

  let el = document.getElementById("daysXer");
  if (!el) return;
  let text = document.getElementById("daysXer").textContent;
  let numbers = text.match(/\d+/g).map(Number); // extract all integers
  let dayCount = numbers.length; // count them
  document.getElementById("xerCount").textContent = dayCount; // update span
}

document.addEventListener("DOMContentLoaded", updateXerDays);

function openRunner() {
  window.location.href = 'runner.html';
}
function openAcharya() {
  window.location.href = 'ContentFiles/acharya.html';
}
function openAshtaVakr() {
  window.location.href = 'ContentFiles/ashtavakr.html';
}
function openBooks() {
  window.location.href = 'books.html';
}
function openFulfilments() {
  window.location.href = 'fulfilments.html';
}
function openISTQB() {
  window.location.href = 'ContentFiles/istqb.html';
}
function openFlute() {
  window.location.href = 'ContentFiles/flute.html';
}
function openExercise() {
  window.location.href = 'ContentFiles/exercise.html';
}