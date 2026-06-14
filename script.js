const html = document.documentElement;
// Dashboard data binding

function updateDays() {

  let eX = document.getElementById("daysXer");
  let eR = document.getElementById("daysRun");

  if (!eX || !eR) return;

  let numbersEx = eX.textContent.match(/\d+/g) || [];
  let numbersRun = eR.textContent.match(/\d+/g) || [];

  document.getElementById("xerCount").textContent = numbersEx.length;
  document.getElementById("runCount").textContent = numbersRun.length + 55;
}

document.addEventListener("DOMContentLoaded", updateDays);

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