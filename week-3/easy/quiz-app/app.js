import { quizData } from "./data.js";

(() => {
  // Normalize quiz data: support both modern shape (options array) and older a/b/c/d + correct letter
  const questionsRaw = Array.isArray(quizData) ? quizData : [];

  const questions = questionsRaw.map((q) => {
    // if already has options array, keep as-is
    if (Array.isArray(q.options) && q.options.length) return q;

    // collect option keys a,b,c,d if present
    const letters = ['a', 'b', 'c', 'd', 'e'];
    const opts = letters.map((k) => q[k]).filter((v) => v !== undefined);

    // compute canonical correct index when correct is a letter like 'a'/'b'
    let correctIndex = -1;
    if (typeof q.correct === 'string') {
      const letter = q.correct.trim().toLowerCase();
      const idx = letters.indexOf(letter);
      if (idx >= 0 && idx < opts.length) correctIndex = idx;
    }

    // if original used answerIndex/correct index numeric, keep that
    if (typeof q.answerIndex === 'number') correctIndex = q.answerIndex;
    if (typeof q.answer === 'number') correctIndex = q.answer;

    return {
      ...q,
      options: opts,
      __correctIndex: correctIndex,
    };
  });

  const quizEl = document.getElementById("quiz");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const submitBtn = document.getElementById("submitBtn");
  const resultEl = document.getElementById("result");
  const scoreTitle = document.getElementById("scoreTitle");
  const scoreText = document.getElementById("scoreText");
  const restartBtn = document.getElementById("restartBtn");

  let current = 0;
  const answers = new Array(questions.length).fill(null);

  const safeText = (v) => (v === undefined || v === null ? "" : String(v));

  function renderQuestion(index) {
    quizEl.innerHTML = "";

    if (!questions.length) {
      quizEl.innerHTML = "<p>No questions found</p>";
      prevBtn.disabled = nextBtn.disabled = submitBtn.disabled = true;
      return;
    }

    const q = questions[index];
    const qBox = document.createElement("div");
    qBox.className = "question";
    qBox.innerHTML = `<h2>${index + 1}. ${safeText(q.question || q.title || q.prompt)}</h2>`;

    const list = document.createElement("ul");
    list.className = "options";

    const options = q.options || q.choices || q.answers || [];
    for (let i = 0; i < options.length; i++) {
      const optText = safeText(options[i]);
      const li = document.createElement("li");
      li.className = "option";
      li.innerHTML = `<label style="width:100%;display:flex;align-items:center;gap:8px;cursor:pointer">
            <input name="q-${index}" type="radio" value="${i}" ${answers[index] === i ? "checked" : ""}/>
            <span>${optText}</span>
        </label>`;

      li.addEventListener("click", () => {
        answers[index] = i;
        renderQuestion(index);
      });

      list.appendChild(li);
    }

    qBox.appendChild(list);
    quizEl.appendChild(qBox);

    prevBtn.disabled = index === 0;
    nextBtn.disabled = index === questions.length - 1;
  }

  function correctIndex(q) {
    // first prefer canonical mapped index
    if (typeof q.__correctIndex === 'number' && q.__correctIndex >= 0) return q.__correctIndex;
    if (typeof q.answerIndex === "number") return q.answerIndex;
    if (typeof q.answer === "number") return q.answer;
    if (typeof q.answer === "string" && q.options) {
      return q.options.indexOf(q.answer);
    }
    if (typeof q.correct === "number") return q.correct;
    if (typeof q.correct === "string" && q.options) {
      // correct might be a letter 'a'/'b' or the string of the option itself
      const letter = q.correct.trim().toLowerCase();
      if (letter.length === 1) {
        const letters = ['a','b','c','d','e'];
        const li = letters.indexOf(letter);
        if (li >= 0 && li < q.options.length) return li;
      }
      return q.options.indexOf(q.correct);
    }
    return -1;
  }

  prevBtn.addEventListener("click", () => {
    if (current === 0) return;
    current -= 1;
    renderQuestion(current);
  });

  nextBtn.addEventListener("click", () => {
    if (current === questions.length - 1) return;
    current += 1;
    renderQuestion(current);
  });

  submitBtn.addEventListener("click", () => {
    if (!questions.length) return;

    if (answers.includes(null)) {
      if (!confirm("You have unanswered questions. Submit anyway?")) return;
    }

    let score = 0;
    for (let i = 0; i < questions.length; i++) {
      const idx = correctIndex(questions[i]);
      if (idx >= 0 && answers[i] === idx) score++;
    }

    const pct = Math.round((questions.length ? (score / questions.length) * 100 : 0));
    scoreTitle.textContent = `You scored ${score} / ${questions.length}`;
    scoreText.textContent = `Percentage: ${pct}%`;
    resultEl.classList.remove("hidden");
  });

  restartBtn.addEventListener("click", () => {
    for (let i = 0; i < answers.length; i++) answers[i] = null;
    current = 0;
    resultEl.classList.add("hidden");
    renderQuestion(current);
  });

  renderQuestion(current);
})();
