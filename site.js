(function () {
  "use strict";

  var PHASES = [
    { label: "Breathe in", cls: "phase-in", ms: 4000 },
    { label: "Brief rest", cls: "phase-hold-in", ms: 2000 },
    { label: "Breathe out", cls: "phase-out", ms: 6000 },
    { label: "Rest", cls: "phase-hold-out", ms: 2000 }
  ];
  var PHASE_CLASSES = ["phase-in", "phase-hold-in", "phase-out", "phase-hold-out"];
  var TOTAL = 4;

  var motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  var ring = document.getElementById("breath-ring");
  var phaseEl = document.getElementById("breath-phase");
  var countEl = document.getElementById("breath-count");
  var toggle = document.getElementById("breath-toggle");
  var stopButton = document.getElementById("breath-stop");
  var showReflection = document.getElementById("show-reflection");
  var clearCheck = document.getElementById("clear-check");
  var reflection = document.getElementById("reflection");
  var reflectionText = document.getElementById("reflection-text");
  var checkRoot = document.getElementById("self-check");

  var timer = null;
  var running = false;
  var phaseIndex = 0;
  var cycle = 0;

  function motionReduced() {
    return motionQuery.matches;
  }

  function clearTimer() {
    if (timer !== null) {
      window.clearTimeout(timer);
      timer = null;
    }
  }

  function setPressed(isRunning) {
    toggle.setAttribute("aria-pressed", isRunning ? "true" : "false");
  }

  function applyPhase(index) {
    var i;
    for (i = 0; i < PHASE_CLASSES.length; i += 1) {
      ring.classList.remove(PHASE_CLASSES[i]);
    }
    if (!motionReduced()) {
      ring.classList.add(PHASES[index].cls);
    }
  }

  function resetRing() {
    var i;
    for (i = 0; i < PHASE_CLASSES.length; i += 1) {
      ring.classList.remove(PHASE_CLASSES[i]);
    }
  }

  function showStop(visible) {
    stopButton.hidden = !visible;
  }

  function tick() {
    var phase = PHASES[phaseIndex];
    phaseEl.textContent = phase.label;
    countEl.textContent = "Breath " + (cycle + 1) + " of " + TOTAL;
    applyPhase(phaseIndex);
    timer = window.setTimeout(advance, phase.ms);
  }

  function advance() {
    if (!running) {
      return;
    }
    phaseIndex += 1;
    if (phaseIndex >= PHASES.length) {
      phaseIndex = 0;
      cycle += 1;
      if (cycle >= TOTAL) {
        complete();
        return;
      }
    }
    tick();
  }

  function start() {
    running = true;
    clearTimer();
    toggle.textContent = "Pause";
    setPressed(true);
    showStop(true);
    tick();
  }

  function pause() {
    running = false;
    clearTimer();
    toggle.textContent = "Resume";
    setPressed(false);
    countEl.textContent = "Paused. Resume whenever you like.";
  }

  function complete() {
    running = false;
    clearTimer();
    phaseIndex = 0;
    cycle = 0;
    resetRing();
    phaseEl.textContent = "That is enough for now.";
    countEl.textContent = "You can begin again, or read on.";
    toggle.textContent = "Begin again";
    setPressed(false);
    showStop(false);
  }

  function stop() {
    running = false;
    clearTimer();
    phaseIndex = 0;
    cycle = 0;
    resetRing();
    phaseEl.textContent = "Stopped.";
    countEl.textContent = "Four slow breaths, whenever you want them.";
    toggle.textContent = "Start a quiet breath";
    setPressed(false);
    showStop(false);
  }

  function answerCounts() {
    var yes = 0;
    var answered = 0;
    var i;
    var picked;
    for (i = 1; i <= 4; i += 1) {
      picked = checkRoot.querySelector('input[name="q' + i + '"]:checked');
      if (picked) {
        answered += 1;
        if (picked.value === "yes") {
          yes += 1;
        }
      }
    }
    for (i = 5; i <= 7; i += 1) {
      picked = checkRoot.querySelector('input[name="q' + i + '"]:checked');
      if (picked) {
        answered += 1;
        if (picked.value === "yes") {
          yes += 1;
        }
      }
    }
    return { yes: yes, answered: answered };
  }

  function reflectionCopy(counts) {
    if (counts.answered === 0) {
      return "You can answer any of these, or none of them. If you would rather not use the questions, that is all right. The support notes above are there whenever you want them.";
    }
    if (counts.yes === 0) {
      return "You did not mark yes. That is not a score, and it does not rule anything in or out. If the questions still left you uneasy, talking with someone you trust is a steady next step. A few ideas for that are in the support section.";
    }
    if (counts.yes <= 2) {
      return "You marked yes to some of these. That is not a diagnosis, and it does not mean something is wrong with you. It can be a reason to slow the conversations down and to talk with someone who knows you outside a chat window. The support section has a few plain ways to do that.";
    }
    return "You marked yes to several of these. This is still not a diagnosis. It is a sign that you deserve a real conversation with a person — someone you trust, or a doctor or mental-health professional — and that a break from AI may be worth trying. Those ideas are in the support section above.";
  }

  function showResult() {
    reflectionText.textContent = reflectionCopy(answerCounts());
    reflection.hidden = false;
    reflection.focus();
  }

  function clearAnswers() {
    var inputs = checkRoot.querySelectorAll("input");
    var i;
    for (i = 0; i < inputs.length; i += 1) {
      inputs[i].checked = false;
    }
    reflection.hidden = true;
    reflectionText.textContent = "";
  }

  toggle.addEventListener("click", function () {
    if (running) {
      pause();
    } else {
      start();
    }
  });

  stopButton.addEventListener("click", stop);

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && running) {
      pause();
    }
  });

  document.addEventListener("visibilitychange", function () {
    if (document.hidden && running) {
      pause();
    }
  });

  showReflection.addEventListener("click", showResult);
  clearCheck.addEventListener("click", clearAnswers);
})();

(function () {
  "use strict";

  var CARDS = [
    {
      text: "The chat answered within two seconds.",
      kind: "happened",
      note: "You could point to this on the screen. Fast replies are how these tools work, for everyone who uses them."
    },
    {
      text: "It answered so fast that it must have been waiting for me.",
      kind: "meaning",
      note: "A chatbot does not wait between messages. It starts when a message arrives, and the speed says nothing about who sent it."
    },
    {
      text: "It used the word “chosen” twice in one reply.",
      kind: "happened",
      note: "You could count both words. That part is plain to check."
    },
    {
      text: "The repeated word was a hidden message meant only for me.",
      kind: "meaning",
      note: "Repeated words often come from how these tools predict text. Wording alone cannot show that a message was meant for one person."
    },
    {
      text: "It said my idea was brilliant and important.",
      kind: "happened",
      note: "This is what the reply said. You could quote it word for word."
    },
    {
      text: "Because it agreed with me, the idea must be true.",
      kind: "meaning",
      note: "Chatbots are known to agree too readily, and the research behind this page records experiments that show it. Agreement is not the same as checking."
    },
    {
      text: "The conversation went on until four in the morning.",
      kind: "happened",
      note: "This is a plain fact about time, and a useful one to notice. A long night is worth taking seriously for its own sake."
    },
    {
      text: "Staying awake this long means I have a mission tonight.",
      kind: "meaning",
      note: "Lost sleep can make thoughts feel sharper and more urgent. The feeling is real. Whether it means anything is a question for a person you trust, after some rest."
    }
  ];
  var LABELS = { happened: "what happened", meaning: "a meaning added" };

  var root = document.getElementById("sort-game");
  if (!root) {
    return;
  }
  var progressEl = document.getElementById("sort-progress");
  var lineEl = document.getElementById("sort-line");
  var choices = document.getElementById("sort-choices");
  var pickButtons = choices.querySelectorAll("button[data-pick]");
  var feedback = document.getElementById("sort-feedback");
  var feedbackText = document.getElementById("sort-feedback-text");
  var done = document.getElementById("sort-done");
  var nextButton = document.getElementById("sort-next");
  var stopButton = document.getElementById("sort-stop");

  var index = -1;

  function setPressed(kind) {
    var i;
    for (i = 0; i < pickButtons.length; i += 1) {
      pickButtons[i].setAttribute("aria-pressed", pickButtons[i].getAttribute("data-pick") === kind ? "true" : "false");
    }
  }

  function showCard() {
    setPressed(null);
    feedback.hidden = true;
    done.hidden = true;
    choices.hidden = false;
    stopButton.hidden = false;
    progressEl.textContent = "Card " + (index + 1) + " of " + CARDS.length;
    lineEl.textContent = CARDS[index].text;
    nextButton.textContent = "Skip this card";
    lineEl.focus();
  }

  function pick(kind) {
    var card = CARDS[index];
    setPressed(kind);
    feedbackText.textContent = (kind === card.kind ? "That is one way to sort it, too. " : "Here is another way to sort it. ") +
      "This card is " + LABELS[card.kind] + ". " + card.note;
    feedback.hidden = false;
    nextButton.textContent = index + 1 < CARDS.length ? "Next card" : "Finish";
    feedback.focus();
  }

  function finish() {
    index = -1;
    setPressed(null);
    choices.hidden = true;
    feedback.hidden = true;
    stopButton.hidden = true;
    progressEl.textContent = "That was the last card.";
    lineEl.textContent = "That is enough for now.";
    done.hidden = false;
    nextButton.textContent = "Sort again";
    done.focus();
  }

  function stop() {
    index = -1;
    setPressed(null);
    choices.hidden = true;
    feedback.hidden = true;
    done.hidden = true;
    stopButton.hidden = true;
    progressEl.textContent = "Stopped. Eight cards, whenever you want them.";
    lineEl.textContent = "Ready when you are.";
    nextButton.textContent = "Start sorting";
    lineEl.focus();
  }

  var i;
  for (i = 0; i < pickButtons.length; i += 1) {
    pickButtons[i].addEventListener("click", function (event) {
      pick(event.currentTarget.getAttribute("data-pick"));
    });
  }

  nextButton.addEventListener("click", function () {
    if (index + 1 >= CARDS.length) {
      finish();
      return;
    }
    index += 1;
    showCard();
  });

  stopButton.addEventListener("click", stop);
})();
