const html = document.documentElement;
// Dashboard data binding

function updateDays() {

  let eX = document.getElementById("daysXer");
  let eR = document.getElementById("daysRun");
  

  let textEx = document.getElementById("daysXer").textContent;
  let textRun = document.getElementById("daysRun").textContent;
  
  let numbersEx = textEx.match(/\d+/g).map(Number); // extract all integers
  let numbersRun = textRun.match(/\d+/g).map(Number); // extract all integers

  let dayCountEx = numbers.length; 
  let dayCountRun = numbers.length; 

  document.getElementById("xerCount").textContent = dayCountEx;
  document.getElementById("xerCount").textContent = dayCountRun; 
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