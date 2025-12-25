// ===== Question Bank =====
let questions = [
  { q: "5 + 3 = ?", options: ["6", "8", "9"], correct: 1 },
  { q: "Capital of Pakistan?", options: ["Karachi","Islamabad","Lahore"], correct: 1 },
  { q: "2 * 4 = ?", options: ["6", "8", "9"], correct: 1 },
  { q: "Sun rises from?", options: ["West","East","North"], correct: 1 }
];

// ===== Variables =====
let usedIndexes = [];
let score = 0;
let currentIndex = getRandomQuestion();

// ===== Random Question Function =====
function getRandomQuestion() {
  if(usedIndexes.length === questions.length){
    alert("Game Over! Your Score: " + score);
    localStorage.setItem("score", score);
    window.location.href = "result.html";
    return;
  }

  let index;
  do {
    index = Math.floor(Math.random() * questions.length);
  } while(usedIndexes.includes(index));

  usedIndexes.push(index);
  return index;
}

// ===== Load Question =====
function loadQuestion() {
  if(currentIndex === undefined) return;

  document.getElementById("question").innerText = questions[currentIndex].q;
  document.getElementById("o0").innerText = questions[currentIndex].options[0];
  document.getElementById("o1").innerText = questions[currentIndex].options[1];
  document.getElementById("o2").innerText = questions[currentIndex].options[2];

  // Reset selection
  let radios = document.querySelectorAll('input[name="ans"]');
  radios.forEach(r => r.checked = false);
}

// ===== Next Button =====
function next() {
  let selected = document.querySelector('input[name="ans"]:checked');

  if(!selected){
    alert("Please select an answer!");
    return;
  }

  if(parseInt(selected.value) === questions[currentIndex].correct){
    score++;
  }

  currentIndex = getRandomQuestion();
  loadQuestion();
}

// ===== Initial Load =====
loadQuestion();
