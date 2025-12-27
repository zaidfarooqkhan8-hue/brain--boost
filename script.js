// ================= TOPIC QUESTION BANK =================

// ---- Math Questions (example 40, aap aur add kar sakte ho)
let mathQuestions = [
  { q: "5 + 3 = ?", options: ["6", "8", "9"], correct: 1 },
  { q: "12 - 7 = ?", options: ["3", "5", "6"], correct: 1 },
  { q: "6 × 4 = ?", options: ["24", "20", "18"], correct: 0 },
  { q: "20 ÷ 5 = ?", options: ["2", "4", "5"], correct: 1 },
  { q: "15 + 10 = ?", options: ["20", "25", "30"], correct: 1 },
  { q: "9 × 3 = ?", options: ["27", "21", "24"], correct: 0 },
  { q: "100 − 40 = ?", options: ["50", "60", "70"], correct: 1 },
  { q: "8 × 8 = ?", options: ["64", "56", "72"], correct: 0 }
  // 👉 isi pattern par 40–50 math questions add karo
];

// ---- IQ Questions
let iqQuestions = [
  { q: "Which number comes next: 2, 4, 6, ?", options: ["7","8","10"], correct: 1 },
  { q: "Find odd one out", options: ["Apple","Banana","Carrot"], correct: 2 },
  { q: "Day comes after Monday?", options: ["Sunday","Tuesday","Friday"], correct: 1 },
  { q: "Which shape has 3 sides?", options: ["Square","Triangle","Circle"], correct: 1 },
  { q: "What comes next: A, C, E ?", options: ["F","G","H"], correct: 1 }
  // 👉 30–40 IQ questions
];

// ---- General Knowledge
let gkQuestions = [
  { q: "Capital of Pakistan?", options: ["Karachi","Islamabad","Lahore"], correct: 1 },
  { q: "Largest planet?", options: ["Earth","Jupiter","Mars"], correct: 1 },
  { q: "National animal of Pakistan?", options: ["Tiger","Markhor","Lion"], correct: 1 },
  { q: "Sun rises from?", options: ["West","East","North"], correct: 1 },
  { q: "Who invented computer?", options: ["Newton","Charles Babbage","Einstein"], correct: 1 }
  // 👉 30–40 GK questions
];

// ================= GAME VARIABLES =================
let questions = [];
let usedIndexes = [];
let score = 0;
let currentIndex;

// ================= START GAME =================
function startGame(){
  let topic = document.getElementById("topicSelect").value;

  if(topic === "math") questions = mathQuestions;
  if(topic === "iq") questions = iqQuestions;
  if(topic === "gk") questions = gkQuestions;

  usedIndexes = [];
  score = 0;
  currentIndex = getRandomQuestion();
  loadQuestion();
}

// ================= RANDOM QUESTION =================
function getRandomQuestion(){
  if(usedIndexes.length === questions.length){
    alert("Game Over! Score: " + score);
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

// ================= LOAD QUESTION =================
function loadQuestion(){
  if(currentIndex === undefined) return;

  document.getElementById("question").innerText = questions[currentIndex].q;
  document.getElementById("o0").innerText = questions[currentIndex].options[0];
  document.getElementById("o1").innerText = questions[currentIndex].options[1];
  document.getElementById("o2").innerText = questions[currentIndex].options[2];

  document.querySelectorAll('input[name="ans"]').forEach(r => r.checked = false);
}

// ================= NEXT =================
function next(){
  let selected = document.querySelector('input[name="ans"]:checked');
  if(!selected){
    alert("Select an answer!");
    return;
  }

  if(parseInt(selected.value) === questions[currentIndex].correct){
    score++;
  }

  currentIndex = getRandomQuestion();
  loadQuestion();
}
