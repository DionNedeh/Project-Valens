(function () {
  "use strict";

  var SENSES = [
    {
      id: "see",
      label: "Seeing",
      prompts: [
        "Find something red. A book spine, a mug, a thread — any red will do.",
        "Find a texture you can see. Grain, weave, a smooth patch, a crack.",
        "Spot something round.",
        "Notice where the light falls softly.",
        "Find one thing you like the look of. You do not have to say why."
      ]
    },
    {
      id: "touch",
      label: "Touch",
      prompts: [
        "Rest your fingers on something smooth.",
        "Find a texture — paper, knit, a seam, a leaf.",
        "Notice temperature. Cool air, a warm cup, or the room on your skin.",
        "Feel whatever is holding you. A chair, the floor, or a bed."
      ]
    },
    {
      id: "hear",
      label: "Hearing",
      prompts: [
        "Name a sound you just heard. A click, a voice, a hum, your own breath.",
        "Listen for the smallest sound in the room.",
        "Notice a sound that comes from farther away."
      ]
    },
    {
      id: "smell",
      label: "Smell",
      prompts: [
        "Is there a scent nearby, even a faint one? If there isn’t, noticing that counts.",
        "Call up a smell you are fond of. It does not have to be in the room."
      ]
    },
    {
      id: "taste",
      label: "Taste",
      prompts: [
        "Notice what is on your tongue. Tea, water, or nothing in particular. A sip is welcome, not required."
      ]
    }
  ];

  var CLOSING = "Picture a favorite place. Let one small memory come forward — a color there, a sound, or how the air felt. You can keep it to yourself.";

  var intro = document.getElementById("intro");
  var play = document.getElementById("play");
  var done = document.getElementById("done");
  var kicker = document.getElementById("step-kicker");
  var prompt = document.getElementById("prompt");
  var playOrb = document.getElementById("play-orb");
  var memoryWrap = document.getElementById("memory-wrap");
  var memoryNote = document.getElementById("memory-note");
  var noticed = document.getElementById("noticed");
  var donePath = document.getElementById("done-path");
  var doneMemory = document.getElementById("done-memory");
  var introOrb = document.querySelector(".mark .orb");

  var steps = [];
  var index = 0;
  var startedWith = "";
  var keptWords = "";
  var finishedAll = false;

  function byId(id) {
    var i;
    for (i = 0; i < SENSES.length; i += 1) {
      if (SENSES[i].id === id) {
        return SENSES[i];
      }
    }
    return SENSES[0];
  }

  function buildSteps(startId) {
    var start = 0;
    var i;
    var sense;
    var n;
    var list = [];
    for (i = 0; i < SENSES.length; i += 1) {
      if (SENSES[i].id === startId) {
        start = i;
      }
    }
    for (i = 0; i < SENSES.length; i += 1) {
      sense = SENSES[(start + i) % SENSES.length];
      for (n = 0; n < sense.prompts.length; n += 1) {
        list.push({
          id: sense.id,
          label: sense.label,
          prompt: sense.prompts[n],
          n: n + 1,
          total: sense.prompts.length,
          personal: false
        });
      }
    }
    list.push({
      id: "close",
      label: "A favorite place",
      prompt: CLOSING,
      n: 1,
      total: 1,
      personal: true
    });
    return list;
  }

  function show(section) {
    intro.hidden = section !== intro;
    play.hidden = section !== play;
    done.hidden = section !== done;
  }

  function renderStep() {
    var step = steps[index];
    kicker.textContent = step.personal
      ? "Only if you want"
      : step.label + " · " + step.n + " of " + step.total;
    prompt.textContent = step.prompt;
    playOrb.setAttribute("data-sense", step.personal ? startedWith : step.id);
    memoryWrap.hidden = !step.personal;
    noticed.textContent = step.personal ? "That is enough" : "I noticed something";
    if (index === 0) {
      prompt.focus();
    }
  }

  function begin(startId) {
    startedWith = startId;
    steps = buildSteps(startId);
    index = 0;
    keptWords = "";
    finishedAll = false;
    memoryNote.value = "";
    show(play);
    renderStep();
  }

  function advance(keepText) {
    var step = steps[index];
    if (step && step.personal && keepText) {
      keptWords = memoryNote.value.replace(/\s+/g, " ").trim();
    }
    index += 1;
    if (index >= steps.length) {
      finishedAll = true;
      showDone();
      return;
    }
    renderStep();
  }

  function showDone() {
    var sense = byId(startedWith);
    if (finishedAll) {
      donePath.textContent = "You began with " + sense.label.toLowerCase() + " and moved through the other senses, one small notice at a time.";
    } else {
      donePath.textContent = "You stopped when you wanted to, after starting with " + sense.label.toLowerCase() + ". That is a fine place to leave it.";
    }
    if (keptWords) {
      doneMemory.hidden = false;
      doneMemory.textContent = keptWords;
    } else {
      doneMemory.hidden = true;
      doneMemory.textContent = "";
    }
    memoryNote.value = "";
    show(done);
    document.getElementById("done-title").focus();
  }

  function resetGame() {
    keptWords = "";
    memoryNote.value = "";
    doneMemory.textContent = "";
    doneMemory.hidden = true;
    show(intro);
    document.getElementById("game-title").focus();
  }

  document.querySelectorAll(".sense").forEach(function (button) {
    button.addEventListener("click", function () {
      begin(button.getAttribute("data-sense"));
    });
    button.addEventListener("focus", function () {
      introOrb.setAttribute("data-sense", button.getAttribute("data-sense"));
    });
    button.addEventListener("pointerenter", function () {
      introOrb.setAttribute("data-sense", button.getAttribute("data-sense"));
    });
  });

  noticed.addEventListener("click", function () {
    advance(true);
  });

  document.getElementById("skip").addEventListener("click", function () {
    advance(false);
  });

  document.getElementById("stop-here").addEventListener("click", function () {
    finishedAll = false;
    keptWords = "";
    showDone();
  });

  document.getElementById("again").addEventListener("click", resetGame);

  document.getElementById("game-title").setAttribute("tabindex", "-1");
  document.getElementById("done-title").setAttribute("tabindex", "-1");
})();
