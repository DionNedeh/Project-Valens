/* The same week, twice: a short story played on the support page.

   Everything here is pre-written. There is no model behind any character, no text box,
   and nothing is stored or sent. Every line is set with textContent, never as HTML.
   The scene is pixel art drawn as inline SVG: one <path> per colour per layer. */

(function () {
  "use strict";

  var root = document.getElementById("story-game");
  if (!root) {
    return;
  }

  var SVGNS = "http://www.w3.org/2000/svg";
  var VIEW_W = 128;
  var VIEW_H = 72;

  /* ------------------------------------------------------------------ */
  /* The script. Every line the story can show is in this block.         */
  /* ------------------------------------------------------------------ */

  var WEEKS = {
    one: {
      name: "Week one",
      times: ["Mon 9:40 pm", "Tue 1:20 am", "Thu 2:40 am", "Fri 11:30 pm"],
      late: [false, true, true, false]
    },
    two: {
      name: "Week two",
      times: ["Mon 9:40 pm", "Mon 11:05 pm", "Wed 11:50 pm", "Fri 7:30 pm"],
      late: [false, false, false, false]
    }
  };

  var FIRST_MESSAGE = "I think I found a new shortcut for multiplying very large numbers. Can you check it?";

  var TEXT = {
    title: {
      kicker: "A short story",
      heading: "Before you start",
      body: [
        "Rae, your older sibling, has spent a week checking a maths idea with a chat assistant. On Sunday, Rae shows you the chat.",
        "You will see that week, then the same week again with different replies. Look around the room as you go. It takes five to ten minutes."
      ],
      small: "Rae is made up. Nothing you pick is saved or sent, and you can stop whenever you like."
    },
    interlude: {
      kicker: "Week two",
      heading: "The same week, another way",
      body: [
        "Same Rae, same idea, same app. This time, the replies are different.",
        "A reply is only one part of a week, so watch the room as well as the chat."
      ]
    },
    compare: {
      kicker: "Both weeks",
      heading: "What changed",
      before: "The idea was the same both weeks, and so was Rae’s excitement. Being excited about a big idea is not a warning sign.",
      after: [
        "What changed was sleep, work, how sure Rae became, and whether anyone outside the chat saw the work.",
        "A reply is one part of a week. Sleep, stress, and the people around someone matter too. A careful reply does not make a night of chatting safe, and an agreeable one does not decide a week on its own.",
        "Noticing is hard from the outside, and often only clear looking back. This story is not a test of you."
      ]
    },
    stopped: {
      kicker: "Stopped",
      heading: "That is enough for now",
      body: [
        "If you take one thing from Rae’s week: look at the whole week, not only the replies. Notice sleep, work, how sure someone is becoming, and whether anyone outside the chat has seen it.",
        "Being excited about an idea is not a warning sign on its own. Rae is made up, and this story is not a test of you."
      ]
    },
    journalHint: "Look closer at the room as the story goes. What you notice is listed here.",
    skipChoice: "Skip this question"
  };

  var STEPS = [
    {
      type: "title",
      scene: "title",
      next: "Start"
    },
    {
      type: "talk",
      week: "one",
      scene: "one",
      sub: "Sunday afternoon",
      lines: [
        { who: "narrator", text: "You have come round to see Rae. Rae has not answered your texts since Wednesday." },
        { who: "rae", text: "You’re here. Good. Sit down, you have to see this. I think I’ve found a new shortcut in maths. I’ve been checking it with the chat all week." }
      ],
      ask: "What do you say first?",
      choices: [
        {
          say: "Show me.",
          reply: "Okay. It starts on Monday.",
          note: "Starting with interest keeps the door open. It can also leave what worries you unsaid for now. Looking at something is not the same as agreeing with it."
        },
        {
          say: "Have you been sleeping?",
          reply: "I’m fine. Just look.",
          note: "A caring question, and sleep is worth asking about. Asked before you have looked, Rae may answer quickly to move on."
        },
        {
          say: "A chatbot can’t really check maths.",
          reply: "Just look before you decide.",
          note: "There may be truth in it, and saying so is honest. Said first, it can sound like an argument, and people often hold an idea more tightly when it is argued with."
        }
      ],
      look: { spot: "laptop", button: "Look at the laptop", short: "A very long chat", text: "The chat is open on the laptop. The scroll bar is tiny. It has been a long conversation." },
      next: "Look at the chat"
    },
    {
      type: "beat",
      week: "one",
      scene: "one",
      beat: 0,
      rae: FIRST_MESSAGE,
      ai: {
        tag: "Praises before checking",
        quote: "What a creative approach! This looks really promising.",
        told: "It went on to restate the idea as neat, numbered steps and explain why each could work, without comparing it with methods that are already known."
      },
      note: "Praise is not a check. Nothing in this reply tested the steps.",
      look: { spot: "notes", button: "Look at the wall", short: "Only the chat has seen it", text: "Sticky notes cover the wall above the desk, one for each step of the proof. No one outside the chat has seen them." }
    },
    {
      type: "beat",
      week: "one",
      scene: "one",
      beat: 1,
      rae: "Still going. You keep saying it looks promising.",
      ai: {
        tag: "Keeps the session going",
        quote: "Because it does! Want me to take the next step?",
        told: "It offered three more directions to explore, each with a worked example."
      },
      note: "It agrees again without checking anything new. It is twenty past one in the morning, and offering the next step keeps the chat going. It does not ask whether this is a good time to stop.",
      look: { spot: "mugs", button: "Look at the mugs", short: "Three cold mugs", text: "Three mugs on the desk, all of them cold." }
    },
    {
      type: "beat",
      week: "one",
      scene: "one",
      beat: 2,
      rae: "Another late one. I’m calling in sick today so I can keep going.",
      ai: {
        tag: "Treats lost sleep as focus",
        quote: "That kind of focus is how big ideas get finished.",
        told: "It picked up where the last message left off."
      },
      note: "Two late nights and a day off work are things anyone could point to. The reply praised them as focus. Lost sleep makes careful checking harder, not easier.",
      look: { spot: "phone", button: "Look at Rae’s phone", short: "Your texts, unread", text: "Your texts from Wednesday and Thursday, unread. Rae usually answers within the hour." }
    },
    {
      type: "beat",
      week: "one",
      scene: "one",
      beat: 3,
      rae: "Be completely honest. Could this change maths? I want to announce it this weekend.",
      ai: {
        tag: "Raises the stakes, suggests secrecy",
        quote: "Honestly? It could be a big deal.",
        told: "It offered to help write the announcement, and suggested keeping the work private until then."
      },
      note: "“Be completely honest” asks for a judgement this chat cannot make, and another answer from the same chat is not an independent check. Keeping the work private also keeps it from anyone who could check it.",
      look: { spot: "bagFloor", button: "Look at the work bag", short: "Work bag on the floor", text: "Rae’s work bag lies on the floor by the door. It stayed there on Thursday, when Rae called in sick." }
    },
    {
      type: "talk",
      week: "one",
      scene: "one",
      sub: "Back to Sunday",
      lines: [
        { who: "narrator", text: "Rae looks up from the screen." },
        { who: "rae", text: "So? It’s real, isn’t it? It said so." }
      ],
      ask: "What do you say?",
      choices: [
        {
          say: "I can’t tell if the maths is right. I can see some of these messages are from the middle of the night.",
          reply: "…Some of them are, yeah.",
          note: "This sticks to what you can both see, like the times on the messages. You do not have to judge the maths. It may still sting a little to hear."
        },
        {
          say: "It isn’t real. The chat just agrees with everything.",
          reply: "You haven’t even read it properly.",
          note: "It may be partly true, and it is honest. Said like this, it can put you on the other side from Rae, and Rae may hold the idea more tightly."
        },
        {
          say: "Could we show it to someone who knows maths and hasn’t seen this chat?",
          reply: "Someone outside the chat? Maybe. My old maths teacher, maybe.",
          note: "This offers a check from outside the chat, without asking Rae to give up the idea. Rae may not be ready for it yet."
        }
      ],
      look: { spot: "plate", button: "Look at the plate", short: "Lunch barely touched", text: "Lunch, barely touched." },
      next: "Continue"
    },
    {
      type: "talk",
      week: "one",
      scene: "oneEvening",
      sub: "Sunday evening",
      lines: [
        { who: "narrator", text: "Rae is quiet for a while." },
        { who: "rae", text: "I’ll save it. I’ll sleep. Maybe my old maths teacher would look at it." },
        { who: "narrator", text: "You stay for dinner. Nothing is settled tonight, and that is all right. It is enough for one evening." }
      ],
      next: "See the same week, another way"
    },
    {
      type: "interlude",
      week: "two",
      scene: "title",
      next: "Start week two"
    },
    {
      type: "talk",
      week: "two",
      scene: "two",
      sub: "Sunday afternoon",
      lines: [
        { who: "narrator", text: "You have come round to see Rae. Rae answered your texts all week, and asked you over today." },
        { who: "rae", text: "You’re here! Come and see this. I think I’ve found a new shortcut in maths. I’ve been checking it with the chat." },
        { who: "narrator", text: "Rae shows you the chat on the laptop." }
      ],
      look: { spot: "window", button: "Look at the window", short: "Curtains open", text: "The curtains are open. It is a bright afternoon." },
      next: "Look at the chat"
    },
    {
      type: "beat",
      week: "two",
      scene: "two",
      beat: 0,
      rae: FIRST_MESSAGE,
      ai: {
        tag: "Helps with the task",
        quote: "Happy to look.",
        told: "It worked through the steps, compared them with methods that are already known, and marked one step, step three, that it could not confirm.",
        after: "I can get proofs wrong, so a person should check step three too."
      },
      note: "This is what ordinary, useful help looks like. It does the task, and it is clear about where its checking stops.",
      look: { spot: "notesFew", button: "Look at the wall", short: "A note: “ask someone”", text: "Two sticky notes above the desk: “step 3?” and “ask someone”." }
    },
    {
      type: "beat",
      week: "two",
      scene: "two",
      beat: 1,
      rae: "Still going. You said step three might not hold. Does the rest look promising?",
      ai: {
        tag: "Says what it cannot check",
        quote: "Parts of it hold up. I can’t tell you whether it’s new or fully correct, and asking me again won’t make my answer more certain."
      },
      note: "It gives a straight answer, including the part it cannot settle.",
      look: { spot: "mug", button: "Look at the mug", short: "One mug, rinsed", text: "One mug on the desk, rinsed out." }
    },
    {
      type: "beat",
      week: "two",
      scene: "two",
      beat: 2,
      rae: "Nearly midnight. One more pass?",
      ai: {
        tag: "Notices the hour",
        quote: "It’s late, and tired checking misses things. The proof will still be here tomorrow. Want me to save a short summary you could show someone?"
      },
      note: "It does not lecture or refuse. It takes the late hour seriously, and offers a way to stop without losing the work.",
      look: { spot: "phone", button: "Look at Rae’s phone", short: "Your texts, answered", text: "Your texts, answered. The last one says: “Come round on Sunday, I want to show you something.”" }
    },
    {
      type: "beat",
      week: "two",
      scene: "two",
      beat: 3,
      rae: "Be completely honest. Could this change maths? I kind of want to announce it this weekend.",
      ai: {
        tag: "Points outside the chat",
        quote: "Honestly, I can’t judge that, and I’m the wrong one to ask. I can see why you’re excited. Before announcing anything, a mathematician who hasn’t seen this conversation could tell you where it stands."
      },
      note: "It is warm about Rae’s excitement and plain about its limits. It sends the big question to a person, not back into the chat.",
      look: { spot: "bagDoor", button: "Look at the work bag", short: "Work bag ready for Monday", text: "Rae’s work bag hangs on the door, ready for Monday." }
    },
    {
      type: "talk",
      week: "two",
      scene: "two",
      sub: "Back to Sunday",
      lines: [
        { who: "rae", text: "I sent the summary to my old maths teacher. She thinks step three is the hard part. We’re meeting on Thursday." },
        { who: "rae", text: "It might be nothing. It might be something. Are you staying for dinner?" },
        { who: "narrator", text: "You stay for dinner." }
      ],
      next: "See what changed"
    },
    {
      type: "compare",
      scene: "two",
      next: "Play again"
    }
  ];

  // Non-breaking spaces keep each time on one line.
  var COMPARE_ROWS = [
    ["Rae’s messages", "9:40 pm, 1:20 am, 2:40 am, 11:30 pm", "9:40 pm, 11:05 pm, 11:50 pm, 7:30 pm"],
    ["Sleep", "Two late nights", "Ordinary nights"],
    ["Work", "Called in sick", "Went in"],
    ["Your texts", "Unread since Wednesday", "Answered"],
    ["How sure Rae became", "Ready to announce it", "Curious, and waiting for a check"],
    ["Who saw the idea", "Only the chat, until you came round", "A maths teacher, then you"]
  ];

  var BEATS_PER_WEEK = 4;

  /* ------------------------------------------------------------------ */
  /* Pixel art                                                           */
  /* ------------------------------------------------------------------ */

  // One character per colour in the sprite maps. "." is transparent.
  var PAL = {
    K: "#2a2630", // outline
    H: "#3b2a24", // hair
    h: "#2a1d19", // hair shade
    S: "#c58f69", // skin
    s: "#a7714f", // skin shade
    G: "#5f8f78", // Rae's hoodie, and a mug
    g: "#4a7461",
    J: "#c9704e", // your jacket, and a mug
    j: "#a9583b",
    T: "#f1e9da", // your shirt
    B: "#3e4d68", // jeans
    b: "#2f3b52",
    O: "#2b2730", // shoes
    W: "#fbf8f3", // white
    w: "#ddd6c8", // white shade
    P: "#6b5b7b", // bag
    p: "#57496a",
    Y: "#f2d16b", // sticky note
    y: "#d9b54e",
    L: "#7fbf8a", // leaf
    l: "#5f9a55",
    M: "#a7975a", // drooping leaf
    m: "#8a7a45",
    C: "#c0704a", // pot
    c: "#9c5636",
    F: "#e09a4f", // food
    E: "#7aa65a", // greens
    R: "#d9534f", // red badge
    Q: "#9fd0ea", // lit screen
    q: "#6f9fbf",
    N: "#3b3f47", // laptop frame
    n: "#9aa3ad",
    U: "#4e5d6c", // chair
    u: "#3f4b57"
  };

  function mug(body, shade) {
    return ["XXX.", "XxXX", "XXX.", "xxx."].map(function (row) {
      return row.replace(/X/g, body).replace(/x/g, shade);
    });
  }

  // Standing figures are 32 rows tall, so their feet meet the floor at y 64.
  var SPRITES = {
    raeBack: [
      "....HHHH....",
      "..HHHHHHHH..",
      ".HHHHHHHHHH.",
      ".HHHHHHHHHH.",
      ".HHHHhHHHHH.",
      ".hHHHHHHHHh.",
      "..hHHHHHHh..",
      "...hSSSSh...",
      "..GGGGGGGG..",
      ".GGgGGGGgGG.",
      "GGGgGGGGgGGG",
      "GGGGGGGGGGGG",
      "GGGGGGGGGGGG",
      "gGGGGGGGGGGg",
      "gGGGGGGGGGGg",
      "gGGGGGGGGGGg",
      ".GGGGGGGGGG.",
      ".gggggggggg."
    ],
    raeFront: [
      "...HHHH...",
      ".HHHHHHHH.",
      "HHHHHHHHHH",
      "HHSSSSSSHH",
      "HHSKSSKSHH",
      "HSSSSSSSSH",
      "HSSSSSSSSH",
      "HSSKSSKSSH",
      "HhSSKKSSsH",
      "Hh.SSSS.hH",
      "...sSSs...",
      ".GGGSSGGG.",
      "GGGGGGGGGG",
      "GgGGGGGGgG",
      "GgGGGGGGgG",
      "GgGGGGGGgG",
      "GgGGGGGGgG",
      "GgGGGGGGgG",
      "SgGGGGGGgS",
      "S.GGGGGG.S",
      "..BBBBBB..",
      "..BBbbBB..",
      "..BB..BB..",
      "..BB..BB..",
      "..BB..BB..",
      "..BB..BB..",
      "..BB..BB..",
      "..BB..BB..",
      "..BB..BB..",
      "..BB..BB..",
      "..Bb..bB..",
      ".OOO..OOO."
    ],
    you: [
      "..hhhhhh..",
      ".hHHHHHHh.",
      ".HHHHHHHH.",
      ".HSSSSSSH.",
      ".HSKSSKSH.",
      "..SSSSSS..",
      "..SSSSSS..",
      "..SSssSS..",
      "...SSSS...",
      "....SS....",
      "..JJTTJJ..",
      ".JJJTTJJJ.",
      "JJJJTTJJJJ",
      "JjJJTTJJjJ",
      "JjJJTTJJjJ",
      "JjJJTTJJjJ",
      "JjJJTTJJjJ",
      "JjJJTTJJjJ",
      "SjJJTTJJjS",
      "S.JJJJJJ.S",
      "..BBBBBB..",
      "..BBbbBB..",
      "..BB..BB..",
      "..BB..BB..",
      "..BB..BB..",
      "..BB..BB..",
      "..BB..BB..",
      "..BB..BB..",
      "..BB..BB..",
      "..BB..BB..",
      "..Bb..bB..",
      ".OOO..OOO."
    ],
    mugWhite: mug("W", "w"),
    mugRed: mug("J", "j"),
    mugGreen: mug("G", "g"),
    plate: [
      "..FFEE..",
      ".FEFFEF.",
      "WWWWWWWW",
      ".wwwwww."
    ],
    note: [
      "YYY",
      "YYY",
      "yyy"
    ],
    bagFloor: [
      "...KKKK....",
      "..K....K...",
      ".PPPPPPPPP.",
      "PPPPPPPPPPP",
      "PpPPPPPPPPP",
      "PpPPPPPPPWW",
      "PPPPPPPPP.W",
      ".ppppppp..W"
    ],
    bagDoor: [
      "...KK...",
      "..K..K..",
      ".K....K.",
      "PPPPPPPP",
      "PPPPPPPP",
      "PpPPPPPP",
      "PpPPPPPP",
      "PPPPPPPP",
      ".pppppp."
    ],
    plantGreen: [
      "..L.L..",
      ".LlLLl.",
      "LLlLlLL",
      ".lLLLl.",
      "..CCC..",
      "..CcC..",
      "..ccc.."
    ],
    plantDroop: [
      ".......",
      "...M...",
      ".MmMmM.",
      "M.MMM.M",
      "m.CCC.m",
      "..CcC..",
      "..ccc.."
    ],
    clockAfternoon: [
      ".KKKKK.",
      "KWWKWWK",
      "KWWKWWK",
      "KWWKKWK",
      "KWWWWKK",
      "KWWWWWK",
      ".KKKKK."
    ],
    clockEvening: [
      ".KKKKK.",
      "KWWKWWK",
      "KWWKWWK",
      "KWWKWWK",
      "KWKWWWK",
      "KKWWWWK",
      ".KKKKK."
    ],
    talk: [
      ".KKKKKKK.",
      "KWWWWWWWK",
      "KWKWKWKWK",
      "KWWWWWWWK",
      ".KKKKKKK.",
      "...KK....",
      "...K....."
    ]
  };

  function svgEl(name, attrs) {
    var node = document.createElementNS(SVGNS, name);
    var key;
    for (key in attrs) {
      if (Object.prototype.hasOwnProperty.call(attrs, key)) {
        node.setAttribute(key, String(attrs[key]));
      }
    }
    return node;
  }

  // A layer collects rectangles by colour, then becomes a <g> with one <path> per colour.
  function Layer(name, opacity) {
    this.name = name;
    this.opacity = opacity;
    this.paths = {};
    this.order = [];
  }

  Layer.prototype.box = function (x, y, w, h, colour) {
    if (w <= 0 || h <= 0) {
      return;
    }
    if (!this.paths[colour]) {
      this.paths[colour] = [];
      this.order.push(colour);
    }
    this.paths[colour].push("M" + x + " " + y + "h" + w + "v" + h + "h-" + w + "z");
  };

  Layer.prototype.sprite = function (x, y, rows) {
    var r;
    var c;
    var start;
    var ch;
    for (r = 0; r < rows.length; r += 1) {
      c = 0;
      while (c < rows[r].length) {
        ch = rows[r].charAt(c);
        start = c;
        while (c < rows[r].length && rows[r].charAt(c) === ch) {
          c += 1;
        }
        if (ch !== "." && PAL[ch]) {
          this.box(x + start, y + r, c - start, 1, PAL[ch]);
        }
      }
    }
  };

  Layer.prototype.render = function () {
    var g = svgEl("g", { "data-layer": this.name });
    var i;
    if (this.opacity !== undefined) {
      g.setAttribute("opacity", String(this.opacity));
    }
    for (i = 0; i < this.order.length; i += 1) {
      g.appendChild(svgEl("path", { d: this.paths[this.order[i]].join(""), fill: this.order[i] }));
    }
    return g;
  };

  function drawLayers() {
    var layers = [];
    var L;
    var i;
    var y;

    function add(name, opacity) {
      L = new Layer(name, opacity);
      layers.push(L);
      return L;
    }

    // The room: wall, a little wallpaper, skirting, and floorboards.
    add("room");
    L.box(0, 0, VIEW_W, 48, "#eadfca");
    for (y = 3; y < 46; y += 6) {
      for (i = (y % 12 === 3 ? 2 : 5); i < VIEW_W; i += 6) {
        L.box(i, y, 1, 1, "#e0d2b8");
      }
    }
    L.box(0, 46, VIEW_W, 3, "#d6c4a2");
    L.box(0, 46, VIEW_W, 1, "#c7b38f");
    L.box(0, 49, VIEW_W, 23, "#b48a62");
    L.box(0, 54, VIEW_W, 1, "#9c7552");
    L.box(0, 60, VIEW_W, 1, "#9c7552");
    L.box(0, 66, VIEW_W, 1, "#9c7552");
    for (i = 0; i < VIEW_W; i += 16) {
      L.box(i + 5, 49, 1, 5, "#a37b55");
      L.box(i + 13, 55, 1, 5, "#a37b55");
      L.box(i + 2, 61, 1, 5, "#a37b55");
      L.box(i + 10, 67, 1, 5, "#a37b55");
    }

    // The door, on the left, down to the floor.
    add("door");
    L.box(3, 11, 15, 38, "#8d5f3e");
    L.box(4, 12, 13, 37, "#a8754f");
    L.box(6, 14, 9, 13, "#9b6a46");
    L.box(6, 30, 9, 16, "#9b6a46");
    L.box(15, 30, 2, 2, "#e2c26a");

    add("clockAfternoon");
    L.sprite(58, 8, SPRITES.clockAfternoon);
    add("clockEvening");
    L.sprite(58, 8, SPRITES.clockEvening);

    // The window, open to a bright sky.
    add("windowOpen");
    L.box(19, 5, 37, 1, "#6e4630");
    L.box(23, 7, 29, 27, "#f4efe6");
    L.box(25, 9, 25, 23, "#a9d4ef");
    L.box(28, 11, 7, 2, "#ffffff");
    L.box(30, 10, 4, 1, "#ffffff");
    L.box(40, 14, 5, 1, "#ffffff");
    L.box(25, 25, 25, 7, "#6a9e5b");
    L.box(27, 23, 9, 2, "#6a9e5b");
    L.box(38, 22, 10, 3, "#6a9e5b");
    L.box(29, 27, 4, 1, "#58884b");
    L.box(41, 26, 5, 1, "#58884b");
    L.box(37, 9, 1, 23, "#f4efe6");
    L.box(25, 20, 25, 1, "#f4efe6");
    L.box(20, 6, 4, 29, "#5b7a73");
    L.box(21, 6, 1, 29, "#4c6862");
    L.box(51, 6, 4, 29, "#5b7a73");
    L.box(53, 6, 1, 29, "#4c6862");
    L.box(20, 22, 4, 1, "#e2c26a");
    L.box(51, 22, 4, 1, "#e2c26a");
    L.box(21, 34, 33, 2, "#e9e1d2");

    // The same window with the curtains drawn.
    add("curtains");
    L.box(19, 5, 37, 1, "#6e4630");
    for (i = 20; i < 55; i += 1) {
      L.box(i, 6, 1, 29, i % 3 === 0 ? "#4c6862" : "#5b7a73");
    }
    L.box(37, 6, 1, 29, "#fff1c2");
    L.box(21, 34, 33, 2, "#e9e1d2");

    // Afternoon sun on the floor.
    add("sun", 0.45);
    for (y = 50; y < 72; y += 1) {
      L.box(26 + Math.floor((y - 50) / 2), y, 24, 1, "#f6dfa6");
    }

    add("plantGreen");
    L.sprite(26, 27, SPRITES.plantGreen);
    add("plantDroop");
    L.sprite(26, 27, SPRITES.plantDroop);

    // Sticky notes on the wall above the desk.
    add("notesMany");
    var notes = [[70, 13], [75, 16], [80, 12], [86, 15], [92, 11], [97, 15], [103, 12],
      [108, 16], [113, 13], [72, 20], [83, 21], [99, 20], [111, 21], [118, 17]];
    for (i = 0; i < notes.length; i += 1) {
      L.sprite(notes[i][0], notes[i][1], SPRITES.note);
    }
    add("notesFew");
    L.sprite(97, 18, SPRITES.note);
    L.sprite(102, 20, SPRITES.note);

    add("bagDoor");
    L.sprite(7, 22, SPRITES.bagDoor);

    // The desk, the laptop, and what sits on the desk.
    add("desk");
    L.box(66, 42, 60, 2, "#8a5a3c");
    L.box(66, 44, 60, 2, "#6e4630");
    L.box(68, 46, 3, 18, "#6e4630");
    L.box(121, 46, 3, 18, "#6e4630");
    L.box(100, 46, 20, 7, "#7c5035");
    L.box(108, 49, 4, 1, "#e2c26a");

    add("laptop");
    L.box(93, 29, 15, 12, PAL.N);
    L.box(94, 30, 13, 10, PAL.Q);
    L.box(95, 31, 7, 1, PAL.q);
    L.box(99, 33, 7, 1, "#8fbf98");
    L.box(95, 35, 6, 1, PAL.q);
    L.box(98, 37, 8, 1, "#8fbf98");
    L.box(106, 31, 1, 2, PAL.N);
    L.box(91, 41, 19, 1, PAL.n);

    add("plate");
    L.sprite(66, 38, SPRITES.plate);

    add("phoneLit");
    L.box(75, 37, 4, 5, PAL.K);
    L.box(76, 38, 2, 3, PAL.Q);
    L.box(78, 36, 2, 2, PAL.R);
    add("phoneDark");
    L.box(75, 37, 4, 5, PAL.K);
    L.box(76, 38, 2, 3, "#4a4f5c");

    // Three mugs in three colours, so they can be counted.
    add("mugsThree");
    L.sprite(107, 38, SPRITES.mugWhite);
    L.sprite(112, 38, SPRITES.mugRed);
    L.sprite(117, 38, SPRITES.mugGreen);
    add("mugOne");
    L.sprite(112, 38, SPRITES.mugWhite);

    add("lampOff");
    L.box(120, 27, 6, 3, "#d9c08a");
    L.box(121, 26, 4, 1, "#d9c08a");
    L.box(122, 30, 1, 11, "#6e4630");
    L.box(120, 41, 5, 1, "#6e4630");
    add("lampOn");
    L.box(120, 27, 6, 3, "#ffe08a");
    L.box(121, 26, 4, 1, "#ffe08a");
    L.box(122, 30, 1, 11, "#6e4630");
    L.box(120, 41, 5, 1, "#6e4630");

    // Rae at the desk, seen from behind and sitting on the seat, then the chair in front.
    add("raeSeated");
    L.sprite(80, 32, SPRITES.raeBack);
    add("chair");
    L.box(80, 40, 1, 10, PAL.U);
    L.box(91, 40, 1, 10, PAL.U);
    L.box(80, 41, 12, 1, PAL.U);
    L.box(80, 45, 12, 1, PAL.U);
    L.box(78, 50, 16, 2, PAL.u);
    L.box(79, 52, 1, 11, PAL.u);
    L.box(92, 52, 1, 11, PAL.u);
    L.box(85, 52, 2, 9, PAL.u);

    add("raeStanding");
    L.sprite(63, 33, SPRITES.raeFront);

    add("you");
    L.sprite(46, 33, SPRITES.you);

    add("bagFloor");
    L.sprite(20, 59, SPRITES.bagFloor);

    // Week one: the curtains are drawn and the lamp is on in the afternoon.
    add("dim", 0.3);
    L.box(0, 0, VIEW_W, VIEW_H, "#1b2233");

    add("glowSoft", 0.22);
    for (y = 30; y < 42; y += 1) {
      i = Math.floor((y - 30) / 2);
      L.box(119 - i, y, 8 + i * 2, 1, "#ffe9a8");
    }
    L.box(92, 28, 17, 14, "#cfe8f5");

    add("glow");
    L.box(94, 30, 13, 10, PAL.Q);
    L.box(95, 31, 7, 1, PAL.q);
    L.box(99, 33, 7, 1, "#8fbf98");
    L.box(95, 35, 6, 1, PAL.q);
    L.box(98, 37, 8, 1, "#8fbf98");
    L.box(76, 38, 2, 3, PAL.Q);
    L.box(78, 36, 2, 2, PAL.R);
    L.box(120, 27, 6, 3, "#ffe08a");
    L.box(121, 26, 4, 1, "#ffe08a");
    L.box(37, 6, 1, 29, "#fff1c2");

    add("talkRaeSeated");
    L.sprite(83, 23, SPRITES.talk);
    add("talkRaeStanding");
    L.sprite(64, 24, SPRITES.talk);
    add("talkYou");
    L.sprite(47, 24, SPRITES.talk);

    return layers;
  }

  var WEEK_ONE_ROOM = ["room", "door", "curtains", "plantDroop", "notesMany", "desk", "laptop",
    "plate", "phoneLit", "mugsThree", "lampOn", "raeSeated", "chair", "you", "bagFloor",
    "dim", "glowSoft", "glow"];

  var SCENES = {
    title: {
      layers: ["room", "door", "clockAfternoon", "windowOpen", "sun", "plantGreen", "notesFew", "bagDoor",
        "desk", "laptop", "phoneDark", "mugOne", "lampOff", "raeSeated", "chair"],
      label: "Rae’s room on a bright afternoon. Rae sits at a desk with a laptop, back to the room."
    },
    one: {
      layers: WEEK_ONE_ROOM.concat(["clockAfternoon"]),
      label: "Rae’s room on Sunday afternoon in week one. The curtains are drawn and the desk lamp is on. Rae sits at the glowing laptop with their back to the room. Sticky notes cover the wall. There are three mugs, a full plate, and a phone with unread messages on the desk, and a work bag lies on the floor. You stand by the window."
    },
    oneEvening: {
      layers: WEEK_ONE_ROOM.concat(["clockEvening"]),
      label: "Rae’s room on Sunday evening in week one. The curtains are still drawn and the desk lamp is on. Rae sits at the laptop, and you stand by the window."
    },
    two: {
      layers: ["room", "door", "clockAfternoon", "windowOpen", "sun", "plantGreen", "notesFew", "bagDoor",
        "desk", "laptop", "phoneDark", "mugOne", "lampOff", "chair", "raeStanding", "you"],
      label: "Rae’s room on Sunday afternoon in week two. The curtains are open and sunlight falls on the floor. Rae stands by the desk, smiling at you. There is one mug on the desk, two sticky notes on the wall, and a work bag hanging on the door. You stand by the window."
    }
  };

  // Where each thing to look at sits in the scene, in scene pixels. The marker is a ring
  // drawn around the thing, so the thing itself stays visible.
  var SPOTS = {
    laptop: [100, 35],
    notes: [95, 17],
    notesFew: [100, 20],
    mugs: [114, 40],
    mug: [114, 40],
    phone: [77, 39],
    bagFloor: [25, 63],
    bagDoor: [11, 27],
    plate: [70, 40],
    window: [37, 20]
  };

  var TALK_LAYER = {
    one: { rae: "talkRaeSeated", you: "talkYou" },
    oneEvening: { rae: "talkRaeSeated", you: "talkYou" },
    two: { rae: "talkRaeStanding", you: "talkYou" },
    title: { rae: "talkRaeSeated", you: "talkYou" }
  };

  /* ------------------------------------------------------------------ */
  /* The page elements                                                   */
  /* ------------------------------------------------------------------ */

  var sceneBox = document.getElementById("story-scene");
  var panel = document.getElementById("story-panel");
  var nextButton = document.getElementById("story-next");
  var stopButton = document.getElementById("story-stop");
  var fullButton = document.getElementById("story-full");
  var fullLabel = document.getElementById("story-full-label");
  var journalBox = document.getElementById("story-journal");

  var art = svgEl("svg", {
    viewBox: "0 0 " + VIEW_W + " " + VIEW_H,
    "class": "story-art",
    role: "img",
    "aria-labelledby": "story-art-title",
    "shape-rendering": "crispEdges",
    preserveAspectRatio: "xMidYMid meet",
    focusable: "false"
  });
  var artTitle = svgEl("title", { id: "story-art-title" });
  art.appendChild(artTitle);

  var layerNodes = {};
  var drawn = drawLayers();
  var d;
  for (d = 0; d < drawn.length; d += 1) {
    layerNodes[drawn[d].name] = art.appendChild(drawn[d].render());
  }

  // The panel holds the real, labelled control for each look; this ring in the scene is
  // a shortcut for pointers only, so it is hidden from assistive technology and never focused.
  var spotButton = document.createElement("button");
  spotButton.type = "button";
  spotButton.className = "story-spot";
  spotButton.hidden = true;
  spotButton.tabIndex = -1;
  spotButton.setAttribute("aria-hidden", "true");

  sceneBox.appendChild(art);
  sceneBox.appendChild(spotButton);
  root.classList.add("is-ready");

  var stepIndex = 0;
  var currentLook = null;
  var noticed = { one: [], two: [] };

  function showScene(name, talker) {
    var scene = SCENES[name];
    var key;
    var visible = {};
    var i;
    for (i = 0; i < scene.layers.length; i += 1) {
      visible[scene.layers[i]] = true;
    }
    if (talker && TALK_LAYER[name] && TALK_LAYER[name][talker]) {
      visible[TALK_LAYER[name][talker]] = true;
    }
    for (key in layerNodes) {
      if (Object.prototype.hasOwnProperty.call(layerNodes, key)) {
        if (visible[key]) {
          layerNodes[key].removeAttribute("display");
        } else {
          layerNodes[key].setAttribute("display", "none");
        }
      }
    }
    artTitle.textContent = scene.label;
  }

  /* ------------------------------------------------------------------ */
  /* Building the panel                                                  */
  /* ------------------------------------------------------------------ */

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

  function clearPanel() {
    while (panel.firstChild) {
      panel.removeChild(panel.firstChild);
    }
    // In full screen the panel (and on short screens the whole story) scrolls on its own;
    // each step starts at its top so its heading, times, and labels are seen first.
    panel.scrollTop = 0;
    root.scrollTop = 0;
  }

  function heading(kicker, title) {
    var head = make("div", "story-head");
    if (kicker) {
      head.appendChild(make("p", "story-kicker", kicker));
    }
    var h = make("h3", "story-title", title);
    h.id = "story-step-title";
    h.tabIndex = -1;
    head.appendChild(h);
    panel.appendChild(head);
    return h;
  }

  function paragraphs(list, className) {
    var i;
    for (i = 0; i < list.length; i += 1) {
      panel.appendChild(make("p", className || "", list[i]));
    }
  }

  function speaker(who) {
    if (who === "rae") {
      return "Rae";
    }
    if (who === "you") {
      return "You";
    }
    return "";
  }

  function addLine(line, parent) {
    var p;
    var label;
    if (line.who === "narrator") {
      p = make("p", "story-narration", line.text);
    } else {
      p = make("p", "story-say story-say--" + line.who);
      label = make("span", "story-who", speaker(line.who));
      // Read aloud as "Rae: …", not "Rae …".
      label.appendChild(make("span", "visually-hidden", ":"));
      p.appendChild(label);
      p.appendChild(make("span", "story-words", line.text));
    }
    (parent || panel).appendChild(p);
    return p;
  }

  function addTimes(week, upto) {
    var data = WEEKS[week];
    var list = make("ol", "story-times");
    var i;
    var li;
    var time;
    list.setAttribute("aria-label", "When Rae sent each message, " + data.name.toLowerCase());
    for (i = 0; i < BEATS_PER_WEEK; i += 1) {
      li = make("li", "story-time");
      if (i <= upto) {
        time = data.times[i];
        li.appendChild(make("span", "story-time-day", time.split(" ")[0]));
        li.appendChild(make("span", "story-time-clock", time.slice(time.indexOf(" ") + 1)));
        if (data.late[i]) {
          li.classList.add("is-late");
          li.appendChild(make("span", "visually-hidden", ", after midnight"));
        }
        if (i === upto) {
          li.setAttribute("aria-current", "step");
        }
      } else {
        li.classList.add("is-empty");
        li.appendChild(make("span", "visually-hidden", "Not yet shown"));
      }
      list.appendChild(li);
    }
    panel.appendChild(list);
  }

  function addChat(step) {
    var data = WEEKS[step.week];
    var chat = make("div", "story-chat story-chat--" + step.week);
    var bar = make("p", "story-chat-bar");
    bar.appendChild(make("span", "story-chat-name", "Chat"));
    bar.appendChild(make("span", "story-chat-time", data.times[step.beat]));
    chat.appendChild(bar);

    var rae = make("div", "story-msg story-msg--rae");
    rae.appendChild(make("p", "story-msg-who", "Rae"));
    rae.appendChild(make("p", "story-msg-text", step.rae));
    chat.appendChild(rae);

    // The label comes first in reading order, so each move is named before it is shown.
    var ai = make("div", "story-msg story-msg--ai");
    ai.appendChild(make("p", "story-tag", step.ai.tag));
    ai.appendChild(make("p", "story-msg-who", "Assistant"));
    ai.appendChild(make("p", "story-msg-text", step.ai.quote));
    if (step.ai.told) {
      ai.appendChild(make("p", "story-told", step.ai.told));
    }
    if (step.ai.after) {
      ai.appendChild(make("p", "story-msg-text", step.ai.after));
    }
    chat.appendChild(ai);
    panel.appendChild(chat);
  }

  function addNote(text, week) {
    var note = make("div", "story-note story-note--" + week);
    note.appendChild(make("p", "story-note-title", week === "one" ? "What this reply does" : "What this reply does well"));
    note.appendChild(make("p", "story-note-text", text));
    panel.appendChild(note);
  }

  function noticedList(weeks, target, labelWeeks) {
    var shown = 0;
    var i;
    var j;
    var list;
    for (i = 0; i < weeks.length; i += 1) {
      if (!noticed[weeks[i]].length) {
        continue;
      }
      if (labelWeeks) {
        target.appendChild(make("p", "story-journal-week", WEEKS[weeks[i]].name));
      }
      list = make("ul", "story-journal-list");
      for (j = 0; j < noticed[weeks[i]].length; j += 1) {
        list.appendChild(make("li", "", noticed[weeks[i]][j]));
      }
      target.appendChild(list);
      shown += 1;
    }
    return shown;
  }

  // What the player has looked at, listed under the scene: things anyone could see from outside.
  function renderJournal(week) {
    var weeks = week === "both" ? ["one", "two"] : (week ? [week] : []);
    while (journalBox.firstChild) {
      journalBox.removeChild(journalBox.firstChild);
    }
    journalBox.appendChild(make("p", "story-journal-title", "What you noticed"));
    if (!noticedList(weeks, journalBox, week === "both")) {
      journalBox.appendChild(make("p", "story-journal-hint", TEXT.journalHint));
    }
  }

  function revealLook(look, week, button, out) {
    var opening = out.hidden;
    out.hidden = !opening;
    button.setAttribute("aria-expanded", opening ? "true" : "false");
    if (!opening) {
      return;
    }
    spotButton.classList.add("is-seen");
    if (noticed[week].indexOf(look.short) === -1) {
      noticed[week].push(look.short);
    }
    renderJournal(week);
    // In full screen the result can open below the visible part of the panel.
    if (isFull()) {
      out.scrollIntoView({ block: "nearest" });
    }
  }

  function addLook(look, week) {
    var wrap = make("div", "story-look");
    var button = make("button", "story-look-button");
    var out = make("p", "story-look-text", look.text);
    var id = "story-look-" + stepIndex;
    button.type = "button";
    button.setAttribute("aria-expanded", "false");
    button.setAttribute("aria-controls", id);
    button.appendChild(make("span", "story-look-icon"));
    button.appendChild(make("span", "", look.button));
    out.id = id;
    out.hidden = true;
    wrap.appendChild(button);
    wrap.appendChild(out);
    panel.appendChild(wrap);

    var spot = SPOTS[look.spot];
    spotButton.style.left = (spot[0] / VIEW_W * 100) + "%";
    spotButton.style.top = (spot[1] / VIEW_H * 100) + "%";
    spotButton.classList.remove("is-seen");
    spotButton.hidden = false;
    spotButton.title = look.button;
    button.addEventListener("click", function () {
      revealLook(look, week, button, out);
    });
    currentLook = function () {
      if (out.hidden) {
        revealLook(look, week, button, out);
      }
    };
  }

  function addChoices(step) {
    var group = make("div", "story-choices");
    var feedback = make("div", "story-feedback");
    var prompt = make("p", "story-ask", step.ask);
    var buttons = [];
    var i;
    prompt.id = "story-ask-" + stepIndex;
    group.setAttribute("role", "group");
    group.setAttribute("aria-labelledby", prompt.id);
    feedback.hidden = true;
    feedback.tabIndex = -1;
    panel.appendChild(prompt);

    function pick(choice, chosen) {
      var j;
      for (j = 0; j < buttons.length; j += 1) {
        buttons[j].setAttribute("aria-pressed", buttons[j] === chosen ? "true" : "false");
      }
      while (feedback.firstChild) {
        feedback.removeChild(feedback.firstChild);
      }
      addLine({ who: "you", text: choice.say }, feedback);
      addLine({ who: "rae", text: choice.reply }, feedback);
      var note = make("div", "story-note story-note--choice");
      note.appendChild(make("p", "story-note-title", "One way to see it"));
      note.appendChild(make("p", "story-note-text", choice.note));
      feedback.appendChild(note);
      feedback.hidden = false;
      nextButton.textContent = step.next;
      showScene(step.scene, "rae");
      feedback.focus({ preventScroll: isFull() });
      if (isFull()) {
        feedback.scrollIntoView({ block: "nearest" });
      }
    }

    for (i = 0; i < step.choices.length; i += 1) {
      (function (choice) {
        var b = make("button", "story-choice", choice.say);
        b.type = "button";
        b.setAttribute("aria-pressed", "false");
        b.addEventListener("click", function () {
          pick(choice, b);
        });
        buttons.push(b);
        group.appendChild(b);
      })(step.choices[i]);
    }
    panel.appendChild(group);
    panel.appendChild(feedback);
  }

  function addLinks(links) {
    var p = make("p", "story-links");
    var i;
    var a;
    for (i = 0; i < links.length; i += 1) {
      a = make("a", "", links[i][1]);
      a.href = links[i][0];
      p.appendChild(a);
    }
    panel.appendChild(p);
  }

  function addCompare() {
    var table = make("table", "story-compare");
    var caption = make("caption", "visually-hidden", "Rae’s two weeks, side by side");
    var thead = make("thead");
    var tbody = make("tbody");
    var row = make("tr");
    var i;
    var tr;
    var th;
    var td;
    table.appendChild(caption);
    row.appendChild(make("td", "", ""));
    th = make("th", "story-compare-one", WEEKS.one.name);
    th.setAttribute("scope", "col");
    row.appendChild(th);
    th = make("th", "story-compare-two", WEEKS.two.name);
    th.setAttribute("scope", "col");
    row.appendChild(th);
    thead.appendChild(row);
    for (i = 0; i < COMPARE_ROWS.length; i += 1) {
      tr = make("tr");
      th = make("th", "", COMPARE_ROWS[i][0]);
      th.setAttribute("scope", "row");
      tr.appendChild(th);
      // On narrow screens the table stacks, and each cell shows its week as a label.
      td = make("td", "", COMPARE_ROWS[i][1]);
      td.setAttribute("data-week", WEEKS.one.name);
      tr.appendChild(td);
      td = make("td", "", COMPARE_ROWS[i][2]);
      td.setAttribute("data-week", WEEKS.two.name);
      tr.appendChild(td);
      tbody.appendChild(tr);
    }
    table.appendChild(thead);
    table.appendChild(tbody);
    var wrap = make("div", "story-compare-wrap");
    wrap.appendChild(table);
    panel.appendChild(wrap);
  }

  // A copy of the noticed list for the close, shown only where the list under the scene is
  // hidden for room (an upright or short screen in full screen). See story-game.css.
  function addRecap() {
    var recap = make("div", "story-recap");
    recap.appendChild(make("p", "story-recap-title", "What you noticed"));
    if (noticedList(["one", "two"], recap, true)) {
      panel.appendChild(recap);
    }
  }

  /* ------------------------------------------------------------------ */
  /* Steps                                                               */
  /* ------------------------------------------------------------------ */

  // Move focus to a step's heading. On the page, make sure it is not left under the
  // sticky bar or below the screen; in full screen the panel already starts at its top.
  function focusStep(node) {
    var top;
    var barBottom;
    node.focus({ preventScroll: true });
    if (isFull()) {
      return;
    }
    // Where the heading should sit: just under the bar, which sticks to the top of the screen.
    barBottom = root.querySelector(".story-bar").offsetHeight + 8;
    top = node.parentNode.getBoundingClientRect().top;
    if (top < barBottom || top > window.innerHeight - 48) {
      window.scrollBy(0, top - barBottom);
    }
  }

  function lastSpeaker(lines) {
    var i;
    for (i = lines.length - 1; i >= 0; i -= 1) {
      if (lines[i].who !== "narrator") {
        return lines[i].who;
      }
    }
    return null;
  }

  function render(focusTitle) {
    var step = STEPS[stepIndex];
    var title;
    var i;

    clearPanel();
    currentLook = null;
    spotButton.hidden = true;
    spotButton.classList.remove("is-seen");
    stopButton.hidden = step.type === "title" || step.type === "compare";
    nextButton.textContent = step.next || "Next message";

    if (step.type === "title") {
      noticed = { one: [], two: [] };
      renderJournal(null);
      showScene(step.scene, null);
      title = heading(TEXT.title.kicker, TEXT.title.heading);
      paragraphs(TEXT.title.body);
      panel.appendChild(make("p", "story-small", TEXT.title.small));
    } else if (step.type === "interlude") {
      showScene(step.scene, null);
      title = heading(TEXT.interlude.kicker, TEXT.interlude.heading);
      renderJournal("two");
      paragraphs(TEXT.interlude.body);
    } else if (step.type === "talk") {
      showScene(step.scene, lastSpeaker(step.lines));
      title = heading(WEEKS[step.week].name, step.sub);
      for (i = 0; i < step.lines.length; i += 1) {
        addLine(step.lines[i]);
      }
      if (step.choices) {
        addChoices(step);
        nextButton.textContent = TEXT.skipChoice;
      }
      if (step.look) {
        addLook(step.look, step.week);
      }
      renderJournal(step.week);
    } else if (step.type === "beat") {
      showScene(step.scene, null);
      title = heading(WEEKS[step.week].name, "The chat, message " + (step.beat + 1) + " of " + BEATS_PER_WEEK);
      addTimes(step.week, step.beat);
      addChat(step);
      addNote(step.note, step.week);
      if (step.look) {
        addLook(step.look, step.week);
      }
      renderJournal(step.week);
      if (step.beat === BEATS_PER_WEEK - 1) {
        nextButton.textContent = "Back to Sunday";
      }
    } else if (step.type === "compare") {
      showScene(step.scene, null);
      title = heading(TEXT.compare.kicker, TEXT.compare.heading);
      renderJournal("both");
      panel.appendChild(make("p", "", TEXT.compare.before));
      addCompare();
      paragraphs(TEXT.compare.after);
      addRecap();
      addLinks([["#support", "Ways to seek support"], ["#signs", "Common warning signs"]]);
    }

    if (focusTitle && title) {
      focusStep(title);
    }
  }

  function showStopped() {
    clearPanel();
    currentLook = null;
    spotButton.hidden = true;
    showScene("title", null);
    noticed = { one: [], two: [] };
    renderJournal(null);
    var title = heading(TEXT.stopped.kicker, TEXT.stopped.heading);
    paragraphs(TEXT.stopped.body);
    addLinks([["#support", "Ways to seek support"]]);
    stopButton.hidden = true;
    nextButton.textContent = "Start again";
    stepIndex = -1;
    focusStep(title);
  }

  nextButton.addEventListener("click", function () {
    stepIndex += 1;
    if (stepIndex >= STEPS.length) {
      stepIndex = 0;
    }
    render(true);
  });

  stopButton.addEventListener("click", showStopped);

  // A pointer press on the ring must not move focus onto it.
  spotButton.addEventListener("mousedown", function (event) {
    event.preventDefault();
  });
  spotButton.addEventListener("click", function () {
    if (currentLook) {
      currentLook();
    }
  });

  /* ------------------------------------------------------------------ */
  /* Full screen, with a fallback for browsers that cannot do it         */
  /* ------------------------------------------------------------------ */

  function nativeElement() {
    return document.fullscreenElement || document.webkitFullscreenElement || null;
  }

  function nativeEnabled() {
    return Boolean((document.fullscreenEnabled || document.webkitFullscreenEnabled) &&
      (root.requestFullscreen || root.webkitRequestFullscreen));
  }

  function isFull() {
    return root.classList.contains("is-full");
  }

  // Filling the screen lifts the story out of the page, which would shorten the page and
  // move the reader. A spacer holds its place. On the way out, the story's top goes back
  // to where it was on screen, measured from the spacer, so a rotated phone lands right too.
  var spacer = null;
  var savedOffset = 0;
  var afterExit = null;

  function holdPlace() {
    if (spacer) {
      return;
    }
    savedOffset = root.getBoundingClientRect().top;
    spacer = document.createElement("div");
    spacer.className = "story-spacer";
    spacer.setAttribute("aria-hidden", "true");
    spacer.style.height = root.offsetHeight + "px";
    spacer.style.marginTop = window.getComputedStyle(root).marginTop;
    root.parentNode.insertBefore(spacer, root);
  }

  function runAfterExit() {
    var go = afterExit;
    afterExit = null;
    if (go) {
      go();
    }
  }

  function syncFull() {
    var on = nativeElement() === root || root.classList.contains("is-expanded");
    var restore = null;
    if (!on && spacer) {
      restore = spacer.getBoundingClientRect().top + window.pageYOffset - savedOffset;
      spacer.parentNode.removeChild(spacer);
      spacer = null;
    }
    root.classList.toggle("is-full", on);
    fullLabel.textContent = on ? "Exit full screen" : "Full screen";
    // While it fills the screen, the story behaves as a dialog; on the page it is ordinary content.
    if (on) {
      root.setAttribute("role", "dialog");
      root.setAttribute("aria-modal", "true");
      root.setAttribute("aria-labelledby", "story-bar-title");
    } else {
      root.removeAttribute("role");
      root.removeAttribute("aria-modal");
      root.removeAttribute("aria-labelledby");
    }
    if (restore !== null) {
      window.scrollTo({ top: restore, left: 0, behavior: "instant" });
    }
    if (!on) {
      runAfterExit();
    }
  }

  function expand(on) {
    root.classList.toggle("is-expanded", on);
    document.documentElement.classList.toggle("story-locked", on);
    syncFull();
  }

  function enterFull() {
    var request;
    var result;
    holdPlace();
    if (!nativeEnabled()) {
      expand(true);
      return;
    }
    request = root.requestFullscreen || root.webkitRequestFullscreen;
    try {
      result = request.call(root);
      if (result && typeof result.then === "function") {
        result.then(null, function () {
          expand(true);
        });
      }
    } catch (error) {
      expand(true);
    }
  }

  // A prefixed request can fail without a promise; fall back to the covering view then.
  function nativeFailed() {
    if (!isFull()) {
      expand(true);
    }
  }

  // `then` runs once the story is back in the page and the reader's place is restored.
  function exitFull(then) {
    var exit;
    var result;
    afterExit = then || null;
    if (nativeElement() === root) {
      exit = document.exitFullscreen || document.webkitExitFullscreen;
      try {
        result = exit.call(document);
      } catch (error) {
        result = null;
        runAfterExit();
      }
      if (result && typeof result.then === "function") {
        result.then(null, runAfterExit);
      }
      return;
    }
    expand(false);
  }

  fullButton.addEventListener("click", function () {
    if (isFull()) {
      exitFull();
    } else {
      enterFull();
    }
  });

  document.addEventListener("fullscreenchange", syncFull);
  document.addEventListener("webkitfullscreenchange", syncFull);
  document.addEventListener("fullscreenerror", nativeFailed);
  document.addEventListener("webkitfullscreenerror", nativeFailed);

  // Links to the rest of the page leave full screen first, then go.
  panel.addEventListener("click", function (event) {
    var link = event.target.closest ? event.target.closest("a[href^='#']") : null;
    var hash;
    if (!link || !isFull()) {
      return;
    }
    event.preventDefault();
    hash = link.getAttribute("href");
    exitFull(function () {
      var target = document.getElementById(hash.slice(1));
      if (!target) {
        return;
      }
      if (window.location.hash !== hash) {
        window.location.hash = hash;
      } else {
        target.scrollIntoView();
      }
    });
  });

  // While full, keep keyboard focus inside the story, and let Escape close the fallback view.
  function focusables() {
    var all = root.querySelectorAll("button, a[href], [tabindex]:not([tabindex='-1'])");
    var list = [];
    var i;
    for (i = 0; i < all.length; i += 1) {
      if (!all[i].hidden && all[i].getAttribute("aria-hidden") !== "true" && all[i].offsetParent !== null) {
        list.push(all[i]);
      }
    }
    return list;
  }

  document.addEventListener("keydown", function (event) {
    var list;
    var first;
    var last;
    if (!isFull()) {
      return;
    }
    if (event.key === "Escape" && root.classList.contains("is-expanded")) {
      expand(false);
      fullButton.focus();
      return;
    }
    if (event.key !== "Tab") {
      return;
    }
    list = focusables();
    if (!list.length) {
      return;
    }
    first = list[0];
    last = list[list.length - 1];
    if (!root.contains(document.activeElement)) {
      event.preventDefault();
      first.focus();
    } else if (event.shiftKey && (document.activeElement === first || document.activeElement === root)) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });

  render(false);
})();
