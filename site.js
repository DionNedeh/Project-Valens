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
