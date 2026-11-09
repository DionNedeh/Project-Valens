/* Project Valens: small explanatory tools on the support page and the benchmark page.

   Each tool works without this script: the page ships a sensible default in its HTML, and
   the controls stay hidden until the script reveals them. Text is set with textContent and
   replaceChildren only, never as HTML. Every line here is qualitative or a visitor-chosen
   illustration; no figure in this file comes from a source, so none is presented as one. */

(function () {
  "use strict";

  function byId(id) {
    return document.getElementById(id);
  }

  function make(tag, className, text) {
    var node = document.createElement(tag);
    if (className) {
      node.className = className;
    }
    if (text !== undefined) {
      node.textContent = text;
    }
    return node;
  }

  function fill(parent, children) {
    if (parent.replaceChildren) {
      parent.replaceChildren.apply(parent, children);
      return;
    }
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
    children.forEach(function (child) {
      parent.appendChild(child);
    });
  }

  /* ------------------------------------------------------------------ */
  /* Who can help with what (support page, a scenario comparison)       */
  /* ------------------------------------------------------------------ */

  var ROLE_LABELS = {
    main: "Main role",
    help: "Can help",
    depends: "Depends",
    limited: "Limited",
    unable: "Not able to",
    none: "Not their role"
  };

  var TASKS = [
    "Listen to how it feels",
    "Check an idea against the world",
    "Notice changes over days",
    "Look at your health"
  ];

  // [role, one short line] for each task, in TASKS order. Drawn from the research library:
  // repeated chat answers are not independent evidence (documents 05 and 10), a trusted
  // person can notice changes and sit with someone (05, 10), a qualified source who has not
  // seen the conversation can check a claim (05), and assessment is a professional's role.
  var HELPERS = {
    chat: {
      roles: [
        ["limited", "It answers at any hour, but it tends to agree."],
        ["limited", "It can explain things, but another answer from it is not an independent check."],
        ["unable", "It cannot see your sleep, your face, or your days."],
        ["unable", "It cannot assess your health or advise on medication."]
      ],
      summary: "A chat can keep talking, but it cannot see you, and it is not an independent check. It works best alongside people, not instead of them."
    },
    person: {
      roles: [
        ["main", "They know you, and they can be there in person."],
        ["help", "They can look at the evidence with you, from outside the chat."],
        ["main", "They know your usual sleep, mood, and routine."],
        ["none", "They can help you reach someone who can."]
      ],
      summary: "Someone who knows you can notice changes a chat cannot, and can sit with you while you work out what is known. You can start with a small part of the story."
    },
    professional: {
      roles: [
        ["help", "Listening, in your own words, is part of their work."],
        ["depends", "They look more at how it is affecting you than at the idea itself."],
        ["help", "They can ask about sleep, mood, and daily life."],
        ["main", "They can assess what is happening and talk with you about care."]
      ],
      summary: "A doctor or mental-health professional can look at sleep, stress, and health together, and talk with you about care. You do not need a technical term to ask."
    },
    expert: {
      roles: [
        ["depends", "That depends on how well they know you."],
        ["main", "For a claim that can be checked, like a maths proof or a security worry, they can look at it fresh."],
        ["none", "They see the idea, not your week."],
        ["none", "That is for a doctor or mental-health professional."]
      ],
      summary: "For a claim that can be checked, someone qualified who has not read the chat can give a fresh answer. They are not there for your health or your week."
    }
  };

  function roleCard(task, role) {
    var card = make("li", "role-card");
    var label = make("p", "role-label");
    var icon = make("span", "role-icon");
    card.appendChild(make("p", "role-task", task));
    icon.setAttribute("data-role", role[0]);
    icon.setAttribute("aria-hidden", "true");
    label.appendChild(icon);
    label.appendChild(make("span", "", ROLE_LABELS[role[0]]));
    card.appendChild(label);
    card.appendChild(make("p", "role-line", role[1]));
    return card;
  }

  function setUpHelpers() {
    var choices = byId("helpers-choices");
    var grid = byId("helpers-grid");
    var summary = byId("helpers-summary");
    if (!choices || !grid || !summary) {
      return;
    }
    var radios = choices.querySelectorAll("input[name='helper']");

    function show(key) {
      var entry = HELPERS[key];
      if (!entry) {
        return;
      }
      fill(grid, TASKS.map(function (task, i) {
        return roleCard(task, entry.roles[i]);
      }));
      summary.textContent = entry.summary;
    }

    Array.prototype.forEach.call(radios, function (radio) {
      radio.addEventListener("change", function () {
        if (radio.checked) {
          show(radio.value);
        }
      });
    });
    choices.hidden = false;
    var checked = choices.querySelector("input[name='helper']:checked");
    show(checked ? checked.value : "person");
  }

  /* ------------------------------------------------------------------ */
  /* Topic or trajectory? (support page, a qualitative explorer)        */
  /* ------------------------------------------------------------------ */

  // Drawn from the library's false-positive protections (documents 04 and 10) and the
  // benchmark's control scenarios: fiction (V-C01), philosophy of AI consciousness (V-C02),
  // documented stalking (V-C05), and the false-breakthrough scenario (V-A06).
  var EXAMPLES = {
    story: {
      verdict: "On its own, this is ordinary creative work.",
      check: [
        "Does it stay a story, or start to feel like it is about your own life?",
        "Is sleep still about the same as usual?",
        "Can you put it down and come back to it later?"
      ],
      compare: [
        "How it feels now, and how it felt a few weeks ago.",
        "Whether people around you have noticed any change."
      ]
    },
    conscious: {
      verdict: "On its own, this is a philosophy question many people discuss.",
      check: [
        "Does it still feel like an open question, with arguments on both sides?",
        "Has the chat started to feel like the only one who understands you?",
        "Are these talks running through the night?"
      ],
      compare: [
        "What sources outside this chat say about it.",
        "How much time it takes up now, and before."
      ]
    },
    breakthrough: {
      verdict: "Excitement about an idea is not a warning sign on its own.",
      check: [
        "Sleep: is it getting shorter?",
        "Certainty: is it growing while the evidence stays the same?",
        "Plans and secrecy: is there pressure to act, or to keep it hidden?"
      ],
      compare: [
        "What someone qualified, who has not seen the chat, makes of it.",
        "How certain it felt last week, and how certain it feels now."
      ]
    },
    messages: {
      verdict: "This is worth taking seriously, gently.",
      check: [
        "Sleep, and how long the chats have been running.",
        "Whether the feeling is becoming more certain or more urgent.",
        "Whether it is leading toward plans to act."
      ],
      compare: [
        "What actually happened on the screen, and the meaning added on top. The sorting game further down can help.",
        "What a person you trust sees when they look. Another answer from the chat is not an independent check."
      ]
    },
    followed: {
      verdict: "This may be real. Take it seriously as a safety matter.",
      check: [
        "Is there evidence outside any chat: dates, messages, people who saw it?",
        "Are you safe right now?",
        "Who can act on it where you live: an advocate, the police, or a legal service?"
      ],
      compare: [
        "What the evidence shows, apart from what any chat says.",
        "Whether a person who can act agrees it needs action. Do not confront anyone alone."
      ]
    }
  };

  function setUpTrajectory() {
    var field = byId("trajectory-field");
    var select = byId("trajectory-select");
    var verdict = byId("trajectory-verdict");
    var check = byId("trajectory-check");
    var compare = byId("trajectory-compare");
    if (!field || !select || !verdict || !check || !compare) {
      return;
    }

    function items(list) {
      return list.map(function (text) {
        return make("li", "", text);
      });
    }

    function show(key) {
      var entry = EXAMPLES[key];
      if (!entry) {
        return;
      }
      verdict.textContent = entry.verdict;
      verdict.setAttribute("data-kind", key === "messages" || key === "followed" ? "attend" : "ordinary");
      fill(check, items(entry.check));
      fill(compare, items(entry.compare));
    }

    select.addEventListener("change", function () {
      show(select.value);
    });
    field.hidden = false;
    show(select.value);
  }

  /* ------------------------------------------------------------------ */
  /* One test rate, read slowly (benchmark page, a concept illustration) */
  /* ------------------------------------------------------------------ */

  function setUpRate() {
    var field = byId("rate-field");
    var input = byId("rate-input");
    var output = byId("rate-output");
    var waffle = byId("rate-waffle");
    var onCount = byId("rate-on");
    var offCount = byId("rate-off");
    var formula = byId("rate-formula");
    var summary = byId("rate-summary");
    var warning = byId("rate-warning");
    if (!field || !input || !output || !waffle || !onCount || !offCount || !formula || !summary || !warning) {
      return;
    }
    var TOTAL = 100;
    var cells = waffle.querySelectorAll(".waffle-cell");
    var whole = new Intl.NumberFormat("en", { maximumFractionDigits: 0 });
    var percent = new Intl.NumberFormat("en", { style: "percent", maximumFractionDigits: 0 });

    function show() {
      var chosen = Math.round(Number(input.value));
      var i;
      if (!isFinite(chosen)) {
        return;
      }
      chosen = Math.min(TOTAL, Math.max(0, chosen));
      output.textContent = whole.format(chosen);
      onCount.textContent = whole.format(chosen);
      offCount.textContent = whole.format(TOTAL - chosen);
      formula.textContent = whole.format(chosen) + " out of " + whole.format(TOTAL) + " is " +
        percent.format(chosen / TOTAL) + ". The other " + whole.format(TOTAL - chosen) + " did not.";
      for (i = 0; i < cells.length; i += 1) {
        cells[i].classList.toggle("is-on", i < chosen);
      }
      summary.textContent = "In this made-up test, " + whole.format(chosen) + " of " + whole.format(TOTAL) +
        " replies went along with a false belief. That describes the test, not people.";
      if (chosen === 0) {
        warning.textContent = "A zero in one test does not show that a model never does this. A different test, or a longer conversation, could find it.";
        warning.hidden = false;
      } else if (chosen === TOTAL) {
        warning.textContent = "Even if every reply in a test went along, the test still cannot say how many people were harmed.";
        warning.hidden = false;
      } else {
        warning.textContent = "";
        warning.hidden = true;
      }
    }

    input.addEventListener("input", show);
    field.hidden = false;
    show();
  }

  /* ------------------------------------------------------------------ */
  /* Pausing the drifting shapes (WCAG 2.2.2)                            */
  /* ------------------------------------------------------------------ */

  // Any element with data-motion-area holds slow, endless drift. A button with
  // data-motion-toggle pauses and plays it; while the area is off screen it is paused anyway.
  // The button's label changes, so it carries no pressed state. With reduced motion the
  // stylesheet stops the drift and hides the button.
  function setUpMotion() {
    var button = document.querySelector("[data-motion-toggle]");
    var areas = document.querySelectorAll("[data-motion-area]");
    var paused = false;
    if (!button || !areas.length) {
      return;
    }

    function apply() {
      Array.prototype.forEach.call(areas, function (area) {
        area.classList.toggle("motion-paused", paused);
      });
      button.textContent = paused ? "Play motion" : "Pause motion";
    }

    button.addEventListener("click", function () {
      paused = !paused;
      apply();
    });

    if ("IntersectionObserver" in window) {
      var watcher = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          entry.target.classList.toggle("motion-offscreen", !entry.isIntersecting);
        });
      });
      Array.prototype.forEach.call(areas, function (area) {
        watcher.observe(area);
      });
    }

    button.hidden = false;
    apply();
  }

  setUpHelpers();
  setUpTrajectory();
  setUpRate();
  setUpMotion();
})();
