var currentMode = "workout"; 
var selectedMuscle = null; 

window.onload = function () { console.log("MuscleIQ loaded!"); };

// when the user hits a different tab, this swaps everything out , ,, it's like changing the channel fr
function switchMode(mode) {
  currentMode = mode;
var allTabs = document.querySelectorAll(".tab-btn");
  for (var i = 0; i < allTabs.length; i++) {
    allTabs[i].classList.remove("active");
     }

var clickedTab = document.querySelector('[data-mode="' + mode + '"]');
clickedTab.classList.add("active");

var bodyMapSection = document.getElementById("bodyMapSection");
var resultPanel = document.getElementById("resultPanel");
var calculatorSection = document.getElementById("calculatorSection");

  // weight mode = >>hide the body map, show the calculator instead ,, workout/diet mode => the opposite, body map comes back
if (mode === "weight") {
bodyMapSection.style.display = "none";
    resultPanel.style.display = "none";
    calculatorSection.style.display = "block";
}
else { bodyMapSection.style.display = "block";
  resultPanel.style.display = "block";
    calculatorSection.style.display = "none";

if (selectedMuscle != null) { showResult(selectedMuscle); } 
else {
  document.getElementById("resultPlaceholder").style.display = "flex";
  document.getElementById("resultContent").style.display = "none";
}
} }


// it is called just to remember which muscle, highlight the dot and show the info
function selectMuscle(muscleName) {   selectedMuscle = muscleName; 

var allHotspots = document.querySelectorAll(".hotspot");
for (var i = 0; i < allHotspots.length; i++) { var hotspot = allHotspots[i];
    hotspot.classList.remove("active");

if (hotspot.dataset.muscle === muscleName) {
      hotspot.classList.add("active"); // this one glows now
    } }

  // loading and displaying the content for that muscle
  showResult(muscleName);
}
function showResult(muscleName) {
  var data = muscleData[muscleName]; 
  
if (!data) { return; }

var placeholder = document.getElementById("resultPlaceholder");
var content = document.getElementById("resultContent");


placeholder.style.display = "none";
content.style.display = "block";

if (currentMode === "workout") { content.innerHTML = buildWorkoutHTML(data); } 
else if (currentMode === "diet") { content.innerHTML = buildDietHTML(data); }
content.scrollIntoView({ behavior: "smooth", block: "nearest" }); }

function buildWorkoutHTML(data) {
var html = "";

html += '<div class="result-header">';
html += '<span class="result-emoji">' + data.emoji + "</span>";
html += "<div>";
html += "<h2>" + data.name + " Exercises</h2>";
html += '<p class="result-sub">' +
data.exercises.length +
  " exercises to build your " +
      data.name.toLowerCase() +
      "</p>";
  html += "</div>";
  html += "</div>";

// loop through each exercise and render a card for it
html += '<div class="exercise-list">';

for (var i = 0; i < data.exercises.length; i++) { var ex = data.exercises[i];
    var exerciseNumber = i + 1; 

  html += '<div class="exercise-card">';
html += '<div class="ex-number">' + exerciseNumber + "</div>";
html += '<div class="ex-details">';
html += '<h4 class="ex-name">' + ex.name + "</h4>";
html += '<p class="ex-sets">' + ex.sets + "</p>";
html += '<p class="ex-tip">💡 ' + ex.tip + "</p>"; // lil tip at the bottom
html += "</div>";
html += "</div>"; }
html += "</div>";
return html; }

function buildDietHTML(data) {
  var html = "";

html += '<div class="result-header">';
  html += '<span class="result-emoji">🥗</span>';
html += "<div>";
html += "<h2>Foods for " + data.name + "</h2>";
html += '<p class="result-sub">Eat these to support your ' +
data.name.toLowerCase() +
  " growth</p>";
html += "</div>";
html += "</div>";
  html += '<div class="food-list">';

  for (var i = 0; i < data.foods.length; i++) {
    var food = data.foods[i];

var imgMarkup = "";if (food.img) {
imgMarkup =
        '<img src="' +
        food.img +
        '" alt="' +
        food.name +
        '" onerror="this.parentElement.innerHTML=\'<span class=\\\'food-icon\\\'>🍽️</span>\';" />';}
 else { imgMarkup = '<span class="food-icon">🍽️</span>';}

  html += '<div class="food-card">';
    html += '<div class="food-img-wrap">' + imgMarkup + "</div>";
html += '<div class="food-details">';
html += '<h4 class="food-name">' + food.name + "</h4>";
html += '<p class="food-benefit">' + food.benefit + "</p>";
html += '<span class="food-serving">Serving: ' + food.serving + "</span>";
  html += "</div>";
html += "</div>"; }
html += "</div>";

return html; }
















