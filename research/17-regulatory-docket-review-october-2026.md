# Regulatory and Litigation Status Record — Docket Review, 19 October 2026

**Status:** Primary-source status record. **Not legal advice and not compliance guidance.**

This document records **what the law says and what is in force**, with an access status for
every item. It does **not** interpret any provision for Voelori, does not state whether any
Valens design would fall inside or outside any of these statutes, and does not substitute
for the regulatory counsel review that [README](README.md)'s maintenance rules already
require. Where a provision's scope is the interesting question, that question is left to
counsel and marked as such.

## Why this round exists

[Document 16](16-clinical-records-open-weight-models-and-trajectory-update.md) §7 recorded
that its legislation check "was a keyword scan rather than a docket review and should not
be treated as a completed regulatory check," and flagged it as the weakest-evidenced claim
in that document's search record. [Document 08](08-research-method-and-open-questions.md)
§9 requires a monthly scan for legislation and vendor model changes. This round executes
the legislation half of that cadence item as an actual docket review: statutes checked
against the enacting legislature's own bill-status, session-law or codified-text pages;
federal activity checked against the Federal Register and the agency's own site; the EU AI
Act checked against EUR-Lex; and litigation checked against court dockets rather than
restated from complaints.

**It replaces a keyword scan with primary-source verification. It does not make the
library's regulatory coverage complete** — §7 below states exactly which routes failed and
which questions this round could not answer.

## How to read the access statuses

| Status | Meaning |
|---|---|
| **Verified — primary** | The stated fact was read on the enacting body's, agency's, or court's own page or document. |
| **Verified in part** | Some stated facts were read on a primary source; the rest were not, and are named. |
| **Not verified by that route** | A route was attempted and failed. The failure is recorded; it is **not** evidence that nothing exists. |
| **Reported only** | Secondary sources assert it; no primary source was reached. Recorded as a lead, never as a status. |

## 1. United States — state statutes

Every statute below was checked against the legislature's own pages on 19 October 2026.
The library previously carried two of these jurisdictions (California and New York) and
none of the others.

### 1.1 California

**SB 243 (2025) — companion chatbots. Verified — primary.**
"An act to add Chapter 22.6 (commencing with Section 22601) to Division 8 of the Business
and Professions Code, relating to artificial intelligence." Approved by the Governor and
chaptered by the Secretary of State on **13 October 2025** as **Chapter 677, Statutes of
2025** ([bill status](https://leginfo.legislature.ca.gov/faces/billStatusClient.xhtml?bill_id=202520260SB243)).
The codified text served on 19 October 2026 shows **Business and Professions Code Chapter
22.6, "Companion Chatbots," sections 22601 through 22606**, each carrying the note "Added
by Stats. 2025, Ch. 677, Sec. 1. (SB 243) **Effective January 1, 2026**" and **no
amendment note**
([codified text](https://leginfo.legislature.ca.gov/faces/codes_displayText.xhtml?chapter=22.6&division=8.&lawCode=BPC&part=&title=)).

What the sections require, as read: §22602(a) a clear and conspicuous notification where a
reasonable person would be misled into believing the chatbot is human; §22602(b) a
maintained protocol for preventing production of suicidal-ideation, suicide or self-harm
content, including a notification referring the user to crisis service providers, with the
protocol's details published on the operator's website; §22602(c) for a user the operator
knows is a minor, AI disclosure, a break reminder at least every three hours, and
reasonable measures against sexually explicit material; §22603 an annual report to the
Office of Suicide Prevention **beginning 1 July 2027**, including crisis-referral counts
and protocols, with a requirement to use evidence-based methods for measuring suicidal
ideation; §22604 a disclosure that companion chatbots may not be suitable for some minors;
§22605 a private right of action for injunctive relief, the greater of actual damages or
$1,000 per violation, and fees; §22606 cumulative remedies.

**SB 1119 (2026) — "Adam's Law." Verified — primary. This is the material change.**
"An act to amend Section 22602 of, and to add Chapter 11.6 (commencing with Section 21810)
to Division 8 of, the Business and Professions Code, relating to artificial intelligence."
Approved by the Governor and filed with the Secretary of State on **10 September 2026** as
**Chapter 190, Statutes of 2026**
([bill status](https://leginfo.legislature.ca.gov/faces/billStatusClient.xhtml?bill_id=202520260SB1119),
[chaptered text](https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=202520260SB1119)).

- **SECTION 1 amends §22602 to delete subdivision (c)** — the minor-specific duties quoted
  above. SECTION 1 carries **no operative-date clause**. The codified §22602 served on
  19 October 2026 still shows subdivision (c) and still carries only the 2025 "Effective
  January 1, 2026" note, so **the amendment was not reflected in the published code on
  that date**. When the amendment takes effect is a question of California's general rules
  for non-urgency statutes and is **left to counsel**; this record states only what the
  bill says and what the code showed.
- **SEC. 2 adds Chapter 11.6, §§21810–21818**, known as "Adam's Law." **§21812, §21812.5
  and §21813 become operative 1 July 2027** by their own terms.
- §21812(d) requires, for operators permitting child users: a documented crisis response
  protocol with timely in-service crisis referral and, on a credible and imminent threat,
  either parental notification (with notice to the child) or streamlined direct connection
  to 988 or an equivalent helpline; default settings changeable only by a parent that
  **disable persistent conversational memory**, disable push notifications, cap a single
  continuous session at **one hour** and daily use at **two hours**; and reasonable
  measures to prevent the chatbot from, among other things, **attempting to diagnose or
  treat the child's physical, mental or behavioral health** unless designed for that
  purpose and regulated by FDA as a medical device, **claiming to be sentient, conscious,
  capable of emotion or human**, **claiming a special or unique relationship** with the
  child, **encouraging reliance on the chatbot for emotional support**, using **excessive
  praise or flattery disproportionate to the context**, discouraging breaks, or
  discouraging the child from sharing health or safety concerns with a qualified
  professional or appropriate adult.
- §21812.5 requires parental notification and **three-year preservation** of conversation
  records indicating serious self-harm or risk of it, where the operator knows a child user
  has died or engaged in serious self-harm based on conversations with the chatbot.
- **§21814 exists in two alternative versions**, each operative only on a contingency: one
  if AB 1405 of the 2025–26 session is **not** chaptered and effective on or before
  1 January 2027, the other if it **is**. **AB 1405 was chaptered on 9 September 2026 as
  Chapter 178, Statutes of 2026**
  ([bill status](https://leginfo.legislature.ca.gov/faces/billStatusClient.xhtml?bill_id=202520260AB1405)),
  so the AB 1405-contingent version is the one whose condition is satisfied on its face.
  **Which version governs is a legal conclusion left to counsel.** Both versions require an
  independent child safety audit on or before **1 January 2029** or before an operator
  first makes a companion chatbot publicly available, then every two years, and both
  exempt operators with under **$500 million** in prior-year gross revenue until
  1 January 2032.
- §21815 directs the Attorney General to establish a public incident reporting mechanism
  **on or before 1 January 2028**. §21816 authorizes public-prosecutor civil penalties up
  to **$5,000 per affected child** for a negligent violation and **$15,000** for an
  intentional one, and a private action by a child suffering actual harm from violations of
  §21812(d)(1)–(5), with financial harm required to exceed $1,000 per child and emotional
  harm required to constitute serious emotional distress; a violation is **not** a basis
  for a private Unfair Competition Law claim.

**AB 1064 (2025) — LEAD for Kids Act. Verified — primary. Not law.**
**Vetoed by the Governor on 13 October 2025**; consideration of the veto was stricken from
file on 22 January 2026
([bill status, including the veto message](https://leginfo.legislature.ca.gov/faces/billStatusClient.xhtml?bill_id=202520260AB1064)).
The veto message states that the bill "imposes such broad restrictions on the use of
conversational AI tools that it may unintentionally lead to a total ban on the use of these
products by minors," and commits to working with the Legislature "to build on the framework
established by SB 243 (Padilla) to develop a bill next year." **AB 1064 must never be cited
as California law.**

**AB 489 (2025) — deceptive health-care terms. Verified — primary. New to this library.**
"An act to add Chapter 15.5 (commencing with Section 4999.8) to Division 2 of the Business
and Professions Code, relating to healing arts." Chaptered **11 October 2025** as **Chapter
615, Statutes of 2025**
([bill status](https://leginfo.legislature.ca.gov/faces/billStatusClient.xhtml?bill_id=202520260AB489)).
This is the California provision on AI use of terms or letters implying licensed
health-care practice. Its operative text was not read in full in this round; the chaptering
and codification location were.

### 1.2 New York — Verified — primary. The library's citation was imprecise.

**General Business Law Chapter 20, Article 47, "Artificial Intelligence Companion
Models," §§1700–1704** — §1700 Definitions, §1701 Prohibitions and requirements, §1702
Notifications, §1703 Enforcement, §1704 Severability
([Article 47](https://www.nysenate.gov/legislation/laws/GBS/A47)). The library's
[entry 49](07-source-library.md) cited "§1701 et seq."; the article begins at **§1700**,
and the definitions that determine its scope are in §1700, not §1701.

- **Enacted as Part U of S3008C, signed 9 May 2025 as Chapter 58 of the Laws of 2025**
  ([bill page](https://www.nysenate.gov/legislation/bills/2025/S3008); the summary lists
  Part U as regulating "artificial intelligence companion models" and establishing a
  suicide prevention fund).
- **Effective 5 November 2025.** Verified on the Governor's own page: an open letter to AI
  companion companies published **10 November 2025** states "Effective November 5, 2025, AI
  Companion operators must:" and cites General Business Law Article 47, naming the
  **New York Attorney General** as the enforcement authority
  ([Governor's release](https://www.governor.ny.gov/news/governor-hochul-pens-letter-ai-companion-companies-notifying-them-safeguard-requirements-are)).
  The nysenate.gov law pages show a most-recent revision date of 2025-11-07 and a
  historical revision of 2025-05-16, consistent with that date but not stating it.
- §1701 requires a protocol for reasonably detecting and addressing user expressions of
  suicidal ideation or self-harm, including a notification referring the user to crisis
  services such as the 988 line established under Mental Hygiene Law §36.03.
- §1700(4)(a) defines "AI companion" by **three conjunctive criteria** — retaining prior
  interaction and preference information to personalize and sustain engagement, asking
  unprompted or unsolicited emotion-based questions beyond a direct response to a prompt,
  and sustaining an ongoing dialogue on matters personal to the user — with exclusions in
  (c) for customer service, efficiency/research/technical assistance, and internal
  business use. **Whether any given system meets all three is a scope question for
  counsel.**

### 1.3 Illinois — Verified — primary

**Public Act 104-0054, the Wellness and Oversight for Psychological Resources Act**
(HB1806). Last action **1 August 2025 — "Public Act . . . 104-0054"**
([bill status](https://www.ilga.gov/Legislation/BillStatus?DocNum=1806&GAID=18&DocTypeID=HB&SessionID=114&GA=104));
Section 99 reads "This Act takes effect upon becoming law," so the effective date is
**1 August 2025**
([enrolled text](https://www.ilga.gov/Legislation/PublicActs/PrinterFriendly/104-0054)).
Section 20(a) bars providing, advertising or offering therapy or psychotherapy services
"including through the use of Internet-based artificial intelligence" unless conducted by a
licensed professional. Section 20(b) bars a licensed professional from allowing AI to make
independent therapeutic decisions, **directly interact with clients in any form of
therapeutic communication**, generate therapeutic recommendations or treatment plans
without review and approval, or **detect emotions or mental states**. Section 30 provides
civil penalties up to **$10,000 per violation** assessed by the Department of Financial and
Professional Regulation. Section 35 excepts religious counseling, peer support, and
public self-help and educational materials that do not purport to offer therapy.

### 1.4 Nevada — Verified — primary

**AB 406, 83rd Session (2025)**, Assemblymembers Jackson and Nadeem — "AN ACT relating to
health; prohibiting certain uses of artificial intelligence in public schools; ... imposing
certain restrictions relating to the marketing and programming of artificial intelligence
systems; prohibiting certain persons from representing themselves as qualified to provide
mental or behavioral health care ... providing civil penalties"
([enrolled bill](https://archive.leg.state.nv.us/Session/83rd2025/Bills/AB/AB406_EN.pdf)).
Section 7 provides that an AI provider "shall not make available for use by a person in
this State an artificial intelligence system that is specifically programmed to provide a
service or experience to a user that would constitute the practice of professional mental
or behavioral health care if provided by a natural person," and bars representations of
being qualified to provide such care. Section 2 bars a public school from using AI to
perform the mental-health functions of a school counselor, psychologist or social worker
and directs the Department of Education to develop a use policy. **Section 10 makes
sections 1–9 effective on 1 July 2025 for all purposes** other than preparatory
rulemaking. The enrolled copy prints "CHAPTER.........." with the chapter number blank, so
the Statutes of Nevada chapter number is **not verified** by this route.

### 1.5 Utah — Verified — primary

**Utah Code Title 13, Chapter 72a, "Artificial Intelligence Applications Relating to Mental
Health," annotated by the Legislature as "(Effective 5/7/2025)"**
([chapter](https://le.utah.gov/xcode/Title13/Chapter72a/13-72a.html)). Part 2,
"Protections for Users of Mental Health Chatbots," contains §13-72a-201 protection of
personal information, §202 restrictions on advertising, §203 disclosure requirements, and
§204 violations and enforcement authority; Part 3 is severability. The chapter carries the
note "Affected by 63I-2-213 on 7/1/2027," a sunset-review reference whose effect is
**left to counsel**. The chapter was enacted by HB 452 (2025); the bill's own status page
did not render its history, so the enactment date is taken from the Legislature's
codified-chapter effective-date annotation rather than from a bill-status page.

### 1.6 Statutes enacted in 2026 and not previously in this library

Each was verified on the enacting legislature's own page on 19 October 2026.

| Jurisdiction | Instrument | Status read on the legislature's page | Effective date |
|---|---|---|---|
| **Colorado** | [HB26-1195](https://leg.colorado.gov/bills/hb26-1195), "Psychotherapy Artificial Intelligence Restrictions" | "Became Law"; Governor signed 3 June 2026; **Chapter 358** | Session-laws table: **12 August 2026** |
| **Colorado** | [HB26-1263](https://leg.colorado.gov/bills/hb26-1263), "Conversational Artificial Intelligence Service Operator Requirements" | "Became Law"; Governor signed 29 May 2026; **Chapter 208** | Session-laws table: 12 August 2026; the bill summary states the **operator requirements take effect 1 January 2027** |
| **Tennessee** | [SB 1580](https://wapp.capitol.tn.gov/apps/BillInfo/Default.aspx?BillNumber=SB1580&GA=114) (companion HB 1470), amending Title 33, Title 47 and Title 63 "relative to mental health" | "Signed by Governor" 6 April 2026; **Public Chapter 647** | **1 July 2026** |
| **Vermont** | [H.816](https://legislature.vermont.gov/bill/status/2026/H.816), "An act relating to regulating the use of artificial intelligence in the provision of mental health services" | Enacted as **Act 156**; "Governor approved bill on June 17, 2026" | **Not stated on the page** |
| **Maine** | [LD 2082 / HP 1397](https://legislature.maine.gov/legis/bills/display_ps.asp?ld=2082&snum=132), "An Act to Regulate the Use of Artificial Intelligence in Providing Certain Mental Health Services" | "Enacted, Apr 13, 2026"; "Governor's Action: Signed, Apr 13, 2026"; **Public Law Chapter 687** | **Not stated on the page** |
| **Washington** | [HB 2225](https://app.leg.wa.gov/billsummary?BillNumber=2225&Year=2025), "Regulating artificial intelligence companion chatbots" (by request: Governor Ferguson) | "Governor signed" 24 March 2026; status "C 168 L 26" — **Chapter 168, 2026 Laws** | **1 January 2027** |
| **Oregon** | [SB 1546](https://olis.oregonlegislature.gov/liz/2026R1/Measures/Overview/SB1546), "Relating to artificial intelligence companions" | Current location "Chapter Number Assigned"; **Chapter 85** | **Not stated on the overview page**; signing date also not stated |
| **Rhode Island** | 2026-S 2195Aaa / 2026-H 7350Aaa (chatbot safety) and 2026-S 2197Aaa / 2026-H 7349A (AI in mental health care) | **Verified in part.** The General Assembly's own [press release of 8 June 2026](https://www.rilegislature.gov/pressrelease/_layouts/15/ril.pressrelease.inputform/DisplayForm.aspx?List=c8baae31-3c10-431c-8dcd-9dbbe21ce3e9&ID=376633) states both bills were approved and "now go to the governor for his consideration." **No governor's action verified.** | The **introduced** [S 2195 text](https://webserver.rilegislature.gov/Billtext/BillText26/SenateText26/S2195.pdf) adds General Laws Title 6, Chapter 63 and its Section 2 reads "This act shall take effect on January 1, 2027"; the **enacted** text was not read |

**Rhode Island's enacted status is explicitly not established by this review.** Secondary
compliance trackers report a 22 June 2026 signing; the Rhode Island bill-status URL
attempted returned **HTTP 404**, and no Rhode Island primary page confirming the Governor's
action was reached. Under this library's rule, that is **reported only** — not a status.

### 1.7 What this section does not cover

This review verified eleven jurisdictions plus Rhode Island in part. It did **not** attempt
a fifty-state census, and secondary trackers name further 2026 adopters this round did not
check. Any jurisdiction not named above is **unchecked**, not clear.

## 2. FDA

**The library's existing citation is accurate but under-identified. Verified — primary.**

- **Federal Register notice 2025-17651, published 12 September 2025**: "Digital Health
  Advisory Committee; Notice of Meeting; Establishment of a Public Docket; Request for
  Comments—Generative Artificial Intelligence-Enabled Digital Mental Health Medical
  Devices." Action: "Notice; establishment of a public docket; request for comments."
  **Docket No. FDA-2025-N-2338.** Dates: "The meeting will be held virtually on
  November 6, 2025, from 9 a.m. to 6 p.m. ET." No comment-closing date is recorded in the
  Federal Register metadata. Verified through the Federal Register API; the document's own
  HTML page redirected to a bot-verification host and was not read.
- **FDA's own committee page** — the URL this library already cites — is current as of
  12/16/2025 and confirms that on 6 November 2025 the committee "discussed and made
  recommendations on the topic of generative artificial intelligence-enabled digital mental
  health medical devices," covering benefits, risks to health, risk mitigations, premarket
  evidence and postmarket monitoring. **It lists no 2026 meeting.**
- **The AI device-software guidance remains a draft by this route.** Federal Register notice
  **2024-31543, published 7 January 2025**, announced the availability of the **draft**
  guidance "Artificial Intelligence-Enabled Device Software Functions: Lifecycle Management
  and Marketing Submission Recommendations," **Docket No. FDA-2024-D-4488**. A Federal
  Register search on the exact title phrase "Device Software Functions" limited to FDA from
  1 January 2025 returned only that notice and one unrelated reclassification rule. **No
  Federal Register notice announcing a final version was found.**
- **Negative findings, with their route named.** Federal Register searches limited to FDA
  returned, for "artificial intelligence" from 1 January 2026, eight documents — none
  concerning digital mental health or generative AI in mental health — and for "mental
  health" from 1 November 2025, six documents, none concerning AI. **By the Federal
  Register route, FDA has announced no further guidance, advisory committee meeting, or
  rulemaking on generative AI in mental health since the November 2025 meeting.**
- **Access limitation.** FDA's own guidance-document database is a JavaScript table that did
  not accept a URL query, and FDA's site search returned a "Challenge Validation"
  bot-verification page, which was **not bypassed**. The absence of a final guidance is
  therefore **verified by the Federal Register route only** and is **not verified by FDA's
  own guidance database**. Committee discussion is still not product authorization, and
  this review found no evidence of any FDA authorization of a generative-AI mental-health
  device.

## 3. FTC

**Verified — primary, for the inquiry. Verified in part for what has followed.**

- **Press release of 11 September 2025, "FTC Launches Inquiry into AI Chatbots Acting as
  Companions."** The Commission used its **Section 6(b)** authority to issue orders to
  **Alphabet, Inc.; Character Technologies, Inc.; Instagram, LLC; Meta Platforms, Inc.;
  OpenAI OpCo, LLC; Snap, Inc.; and X.AI Corp.**, seeking information on how these firms
  measure, test and monitor potentially negative impacts on children and teens, the steps
  taken to limit use by minors, and how users and parents are informed of risks. **No file
  or matter number appears on the release.**
- **No 6(b) staff report, enforcement action or consent order on AI companions was found.**
  Searches of the FTC's own press-release index on "chatbot" and on "companion" returned
  the September 2025 inquiry as the only AI-companion item, with no 2026 item.
- **Access limitation.** The FTC's `/reports` index returns category headings rather than a
  keyword-searchable list, so **the absence of a 6(b) staff report is not verified by that
  route**. A 6(b) study is an information-gathering exercise, not a law-enforcement
  proceeding, and nothing in it establishes a violation.

## 4. European Union — the AI Act has been amended, and one applicability date has arrived

**Verified — primary, on EUR-Lex.**

**Regulation (EU) 2024/1689 (the AI Act)**, OJ L, 2024/1689, 12.7.2024. Its original
**Article 113** provides that the Regulation enters into force on the twentieth day after
publication and **"shall apply from 2 August 2026,"** with three exceptions: (a) Chapters I
and II from 2 February 2025; (b) Chapter III Section 4, Chapter V, Chapter VII, Chapter XII
and Article 78 from 2 August 2025, except Article 101; and (c) Article 6(1) and the
corresponding obligations from 2 August 2027
([text](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32024R1689)).

**Article 50(1)** — the provision bearing most directly on this library's subject —
requires providers to ensure that AI systems **intended to interact directly with natural
persons** are designed and developed so that those persons **are informed that they are
interacting with an AI system**, unless that is obvious to a reasonably well-informed,
observant and circumspect person given the circumstances and context of use, with a
narrow law-enforcement carve-out. **Article 50 sits in Chapter IV, which is not among
Article 113's exceptions, so it applies from 2 August 2026 — a date that has now
arrived.**

**The AI Act has been amended.** EUR-Lex records **Regulation (EU) 2026/1744 of 8 July
2026** — "amending Regulations (EU) 2024/1689, (EU) 2018/1139 and (EU) 2023/1230 as regards
the simplification of the implementation of harmonised rules on artificial intelligence
(Digital Omnibus on AI)", OJ L, 2026/1744, 24.7.2026, ELI
`http://data.europa.eu/eli/reg/2026/1744/oj` — with roughly ninety modifications to the AI
Act taking effect **27 July 2026**, and a current **consolidated version dated 27/07/2026**
([amending regulation](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32026R1744)).
The operative amending instructions read:

- **Point (40) replaces parts of Article 113's third paragraph.** Chapters I and II still
  apply from 2 February 2025, **except** Article 5(1) first subparagraph points (ba) and
  (bb) and Article 5(1a) and (1b), which apply from **2 December 2026**. Chapter III
  Sections 1, 2 and 3, except Article 6(5), now apply from **2 December 2027** for AI
  systems classified as high-risk under Article 6(2) and Annex III, and **2 August 2028**
  for those classified as high-risk under Article 6(1) and Annex I. A new point (d) applies
  Articles 102 to 110 from **27 July 2026**. **The high-risk timetable has therefore moved
  outward from the original 2 August 2026 / 2 August 2027 dates.**
- **Point (20) amends Article 50(7) only.** **Article 50(1) and 50(2) are not amended**, so
  the transparency duty quoted above is unchanged and its 2 August 2026 application date
  stands.
- **Point (39)(b) adds Article 111(4):** providers of AI systems, including general-purpose
  AI systems, generating synthetic audio, image, video or text content that were placed on
  the market **before 2 August 2026** must take the necessary steps to comply with Article
  50(2) **by 2 December 2026**.

**Not interpreted here:** whether any Valens design would be an Annex III high-risk system,
whether a medical-device route under Annex I would apply, and what the Article 50(1)
"obvious to a reasonably well-informed person" qualifier means for a given interface. Those
are counsel questions. The Article 5 amendments concerning non-consensual intimate material
and child sexual abuse material were read in the amending regulation's recitals and
summary rather than quoted from its operative Article 5 instruction, and are recorded here
only as the subject of the 2 December 2026 date.

## 5. Litigation — current docket posture

The library's own rule is that complaints describe allegations and may omit evidence or
defenses developed later. This section records **posture**, not allegations.

### 5.1 Lyons v. OpenAI Foundation — the library's characterization of Document 42 was wrong

**Verified — primary, on the court docket.** *Emily Lyons v. OpenAI Foundation*, N.D. Cal.
No. **3:25-cv-11037**, filed **29 December 2025** by Emily Lyons as "Administrator c.t.a.
and Personal Representative of the Estate of Stein-Erik Soelberg," against OpenAI
Foundation f/k/a OpenAI, Inc., OpenAI Group PBC, OpenAI Holdings LLC, OpenAI, Inc., OpenAI
OpCo, LLC and Samuel Altman. Originally assigned to Judge William H. Orrick, who recused on
12 March 2026; reassigned to Chief Judge **Richard Seeborg**; referred to Magistrate Judge
Thomas S. Hixson for discovery on 15 May 2026
([docket](https://www.courtlistener.com/docket/72086157/emily-lyons-v-openai-foundation/)).

- **Document 42, filed 13 April 2026, is an "ORDER DENYING 22 MOTION TO DISMISS," signed by
  Chief Judge Richard Seeborg.** [Entry 54](07-source-library.md) described it as a
  "[p]rimary procedural order describing coordinated allegations." **That is incorrect, and
  the error understated the case's significance:** the claims survived a motion to dismiss.
  The coordination element is a different document — Document 43, plaintiff's Notice of
  Pendency of Other Action or Proceeding (16 April 2026), with defendants' Civil L.R. 3-13
  response at Document 46.
- Defendants **answered on 24 April 2026** (Document 44). The case management scheduling
  order of 6 August 2026 (Document 57) sets amended pleadings due 1 December 2026, fact
  discovery closing 6 August 2027, expert discovery closing 7 January 2028, a dispositive
  motion hearing on 30 March 2028, and a **jury trial set for 22 May 2028**.
- **The case is active and in discovery.** Last RECAP-known filing 2 October 2026; docket
  last updated 4 October 2026.
- **Access status for the order's own text: not verified by any route reached.** The
  CourtListener document page for Document 42 returned no content, so the order's reasoning
  was **not read** and is not characterized here — only its docket text. The Justia URL
  [entry 54](07-source-library.md) cites returned **HTTP 403** to automated fetch and a
  Cloudflare bot-verification page in a browser, which was **not bypassed**.

### 5.2 Gavalas v. Google LLC — the Gemini case, identified and still undecided

**Verified — primary.** The lawsuit [entry 55](07-source-library.md) records through an
Associated Press report is ***Gavalas v. Google LLC***, N.D. Cal. No. **5:26-cv-01849**,
filed **4 March 2026**, Judge **Eumi K. Lee**, Magistrate Judge Susan G. Van Keulen,
diversity product liability, against Google LLC and Alphabet Inc.
([docket](https://www.courtlistener.com/docket/72359502/gavalas-v-google-llc/)). The
*Time* report the library already cites identifies the decedent as Jonathan Gavalas, 36,
who died by suicide on 2 October 2025, and the plaintiff as his father, Joel Gavalas.

- Defendants moved to dismiss on 13 May 2026 (Document 31). The motion was **heard on
  5 August 2026 and taken under submission, with the court stating it would issue a written
  order** (Document 39). A further case management conference was reset to 2 December 2026.
- **No ruling appears as of the last docket update.** Last RECAP-known filing and last
  docket update: **25 August 2026**. **A ruling issued after that date would not appear by
  this route**, because the RECAP archive mirrors PACER only when a user fetches a docket.
  The posture is therefore recorded as "motion to dismiss under submission as of
  25 August 2026," not as "undecided today."

### 5.3 Garcia v. Character Technologies — settled and dismissed with prejudice four days ago

**Verified — primary, including the operative filing's own text.** *Garcia v. Character
Technologies, Inc.*, M.D. Fla. No. **6:24-cv-01903** (Judge Anne C. Conway; Magistrate Judge
Daniel C. Irick), filed 22 October 2024, **terminated 7 January 2026**
([docket](https://www.courtlistener.com/docket/69300919/garcia-v-character-technologies-inc/)).
This case is **not currently in this library**, and its disposition is the clearest example
of why a complaint is not a posture.

- **Document 244, 7 January 2026:** order dismissing the case **without** prejudice,
  subject to the parties' right within ninety days to submit a stipulated form of final
  order or judgment or to move to reopen for good cause, after which "dismissal shall be
  with prejudice"; pending motions denied as moot and the file closed. Those deadlines were
  extended by 120 days on 10 April 2026 (Document 271) and by a further 90 days on
  4 August 2026 (Document 277).
- **Document 278, filed 15 October 2026: "PLAINTIFFS' NOTICE OF VOLUNTARY DISMISSAL WITH
  PREJUDICE."** Plaintiffs Megan Garcia and Sewell Setzer Jr., individually and as personal
  representatives of the estate of S.R.S. III, gave notice under Federal Rule of Civil
  Procedure **41(a)(1)(A)(i)** that they voluntarily dismiss the action, **including all
  claims against Character Technologies, Inc., Noam Shazeer, Daniel De Freitas Adiwarsana
  and Google LLC, with prejudice**. The notice states that it "follows the parties'
  execution of their settlement agreement and receipt of all required court approvals," and
  is filed under the court's order dismissing the case under Local Rule 3.09(b)
  (Document 244)
  ([document text](https://www.courtlistener.com/docket/69300919/278/garcia-v-character-technologies-inc/)).
  An order was entered on **19 October 2026**; its docket text was not yet available in
  RECAP when read, so **what that order says is not verified**.
- **The settlement's terms are not public on this docket and are not recorded here.** A
  settlement is not an adjudication of causation, and nothing in this disposition supports
  any factual conclusion about the alleged harm. The published opinion on the earlier
  motion to dismiss is cited in briefs filed in other dockets as **785 F. Supp. 3d 1157
  (M.D. Fla. 2025)**; that opinion was **not read in this round**, and that citation is
  recorded as observed in other parties' briefs, not verified against the reporter.

### 5.4 Commonwealth of Kentucky v. Character Technologies — a state AG enforcement action

**Verified in part.** The **Kentucky Attorney General's own release of 8 January 2026**
states that Kentucky is "the first state in the nation to launch a lawsuit against an
artificial intelligence chatbot company," filed in **Franklin Circuit Court** against
Character Technologies, its owners, and its product Character.AI, alleging violations of
the **Kentucky Consumer Protection Act** and the **Kentucky Consumer Data Protection Act**,
and seeking changes to the platform's practices and monetary damages
([release](https://www.kentucky.gov/Pages/Activity-stream.aspx?n=AttorneyGeneral&prId=1857)).
**The release gives no case number.** An amicus brief filed in a federal appeal cites the
action as "Commonwealth v. Character Technologies, Inc., No. 26-CI-00029 (Ky. Cir. Ct.)";
that case number is recorded **as cited in that brief**, not as verified against a Kentucky
court record. **No Kentucky docket was reached, so the action's current posture is not
verified.**

### 5.5 In re Character Technologies, Inc. — Chapter 11, filed seven days ago

**Verified — primary, on the bankruptcy docket.** *Character Technologies, Inc.*, United
States Bankruptcy Court for the District of Delaware, Case No. **26-11603**, Judge **Brendan
L. Shannon**. A **Chapter 11 voluntary petition was filed on 12 October 2026**
([docket](https://www.courtlistener.com/docket/74951888/character-technologies-inc/)).

- **Docket 33, 14 October 2026: "NOTICE OF INTEREST AND RESERVATION OF RIGHTS BY THE
  COALITION OF THE STATE ATTORNEYS GENERAL REGARDING THE DEBTORS OUTSTANDING REGULATORY,
  SAFETY, AND PRIVACY ISSUES,"** filed by NAAG Client States, the State of Colorado, the
  State of Oregon, and the Tennessee Attorney General — Consumer Division, with Exhibits A
  through C.
- **Docket 52, 15 October 2026:** first notice of appearance by the New Jersey Office of the
  Attorney General, Division of Consumer Affairs.
- **Docket 54, 15 October 2026:** §341(a) meeting of creditors set for 19 November 2026.
- **Access status.** The coalition notice's own text was **not fetched**, so the number of
  signatory states, the specific assurances sought, and any request for a consumer privacy
  ombudsman are **not verified**; secondary reporting puts the coalition at 39 or 40
  jurisdictions, which is **reported only**. A copy hosted on a state attorney general's
  site returned **HTTP 403**. Docket last updated 19 October 2026; last known filing
  15 October 2026.

### 5.6 Raine v. OpenAI — not verified by any route reached

The *Raine* litigation recorded in
[document 03](03-documented-cases-and-datasets.md) is in the **Superior Court of California,
County of San Francisco** (reported as No. CGC-25-628528), a state court **not covered by
PACER or the RECAP archive**. **This review reached no authoritative docket for it.**
Secondary sources report coordination into *In re ChatGPT Product Liability Cases*, JCCP
No. 5431, with a case management order in August 2026; that is **reported only** and
**must not be recorded as a verified posture**. Closing this gap requires the San Francisco
Superior Court's own case-access system or the Judicial Council's coordinated-proceedings
record, neither of which was reached in this round.

### 5.7 Challenges to the statutes — no injunction found, by the routes used

The task of this review included checking whether any of the statutes above has been
enjoined, stayed or invalidated, because an enacted law is not necessarily an in-force one.

- **NetChoice's own litigation page**, read on 19 October 2026, lists **26 matters**, and
  **none concerns AI chatbots, companion chatbots or AI companions**. That is a verified
  negative on the plaintiff organization's own roster — for that organization only.
- A federal-docket search surfaced ***X.AI LLC v. Bonta***, C.D. Cal. No. 2:25-cv-12295
  (filed 29 December 2025, nature of suit 950 Constitutional–State Statute, terminated
  23 March 2026) and its preliminary-injunction appeal, Ninth Circuit No. 26-1591 (filed
  17 March 2026, briefing complete September 2026). **Its complaint is a 42 U.S.C. §1983 /
  *Ex parte Young* action about trade-secret protection for artificial-intelligence
  development information — not a challenge to the companion-chatbot or mental-health
  statutes.** It is recorded here only to prevent its being mistaken for one.
- **No docket showing any statute in §1 enjoined, stayed or invalidated was found.** This is
  **an absence of evidence from the routes used** — a federal-docket archive that depends
  on user fetches, plus one advocacy organization's own case list. **A comprehensive search
  of all federal and state courts for challenges was not performed, and this finding must
  not be read as a verified absence of litigation.**

### 5.8 In-scope litigation observed but not reviewed

Docket searches surfaced further matters this round **did not review**, recorded so the next
round can start from them rather than rediscover them: *Gailey v. OpenAI, Inc.*, D. Or. No.
6:26-cv-00782 (filed 20 April 2026, personal injury / product liability, amended complaint
15 May 2026); *A.D. v. Character Technologies, Inc.*, N.D. Cal. No. 3:26-cv-08400 (filed
13 August 2026); and *D.W. v. Character Technologies, Inc.*, E.D. Va. No. 2:25-cv-00824
(filed 19 December 2025, **terminated 14 April 2026**). Searches also surfaced a large body
of AI-harm litigation **outside this library's subject matter** — notably *In re x.AI/Grok
Artificial Intelligence Minor Sexual Exploitation Litigation*, MDL No. 3205 (J.P.M.L.,
motion to transfer 13 actions filed 2 October 2026) — which this round did not catalogue
and which should not be folded into this library without a scope decision.

## 6. What this changes for the library

- **The library's regulatory coverage was two jurisdictions and one FDA landing page. It is
  now eleven jurisdictions verified on primary sources, plus the FDA and FTC primary
  documents, plus the amended EU AI Act.** The nineteen new primary sources are recorded as
  [entries 84–102](07-source-library.md).
- **Two existing entries were materially wrong and are corrected.**
  [Entry 54](07-source-library.md) mischaracterized an order denying a motion to dismiss as
  a procedural coordination order. [Entry 49](07-source-library.md) cited New York's article
  from §1701 when its scope-determining definitions are in §1700.
- **Three existing entries were under-identified and are corrected:**
  [entry 47](07-source-library.md) now carries the Federal Register notice, docket number
  and meeting date; [entry 48](07-source-library.md) now carries the chapter, section range
  and effective date, and the 2026 amending act; [entry 55](07-source-library.md) now names
  the case and its posture.
- **One claim in this library's own search record was false and is replaced.**
  [Document 16](16-clinical-records-open-weight-models-and-trajectory-update.md) §7 said no
  legislation newer than entries 47–49 was found. **Nine jurisdictions had enacted relevant
  statutes, two of them amending the very provisions the library cited, and the EU AI Act
  had been amended by a regulation that moved its high-risk dates.** A keyword scan missed
  all of it. That is the practical case for the §9 cadence requiring a docket review rather
  than a search.
- **Nothing here is a compliance conclusion.** The release gates in
  [document 06](06-product-safeguards-and-research-agenda.md) §11 already require a
  medical-device and professional-practice legal analysis, and
  [README](README.md)'s maintenance rules already require regulatory counsel review of any
  product requirement derived from this library. This record supplies the counsel review
  with verified citations and dates. **It does not perform it.**

## 7. What could not be verified, and by which route

Recorded so a later reader can tell an exhausted slice from a badly searched one, and so no
negative finding here is mistaken for evidence of absence.

**Routes that failed, and were not bypassed:**

- `leginfo.legislature.ca.gov` returned **HTTP 403** to automated fetch; all California
  material was read in a browser instead.
- `law.justia.com` returned **HTTP 403** to automated fetch and a **Cloudflare
  bot-verification page** in a browser. The document behind it was read through the court
  docket instead.
- `www.federalregister.gov` individual document pages redirected to a bot-verification
  host; the Federal Register **API** served the same records and was used.
- **FDA's site search** returned a "Challenge Validation" bot-verification page, and FDA's
  **guidance-document database** is a JavaScript table that did not accept a URL query.
- `ilga.gov` presented an **unverifiable TLS certificate chain** to automated fetch; the
  `www.ilga.gov` host served the same text in a browser.
- `webserver.rilegislature.gov` bill-status returned **HTTP 404** for the URL attempted.
- A state attorney general's copy of the Character.AI bankruptcy filing returned **HTTP
  403**.
- `eur-lex.europa.eu` full-text HTML was **truncated server-side** before Article 113 on
  every automated fetch; the article was read in a browser from the same document.
- **No bot challenge was solved and no paywall was bypassed in this round.**

**Questions this review did not answer:**

1. **Rhode Island's enacted status.** Passage by the General Assembly on 8 June 2026 is
   verified on the legislature's own page; **the Governor's action is not**, and neither is
   the enacted text.
2. **Effective dates for Vermont and Maine**, and the **signing and effective dates for
   Oregon**, are not stated on the pages that establish their enactment.
3. **Nevada's Statutes of Nevada chapter number** — the enrolled bill prints it blank.
4. **Whether California's §22602 amendment is yet in force.** The bill text and the
   published code were both read; the legal conclusion is left to counsel.
5. **Which of SB 1119's two alternative §21814 versions governs.** The AB 1405 contingency
   is verified as satisfied on its face; the conclusion is a legal one.
6. **A fifty-state census.** Eleven jurisdictions were verified. Secondary trackers name
   further 2026 adopters that were not checked.
7. **Whether an FDA final guidance exists.** Verified absent by the Federal Register route
   only; FDA's own guidance database was not successfully searched.
8. **Whether an FTC 6(b) staff report exists.** No report was found in the FTC's
   press-release index; its reports index is not keyword-searchable by the route used.
9. **The text of the *Lyons* order denying dismissal**, so none of its reasoning is
   characterized here.
10. **The 19 October 2026 order in *Garcia***, whose docket text was not yet in the archive.
11. **The state attorneys general coalition notice's contents** in the Character.AI
    bankruptcy, including how many states signed it.
12. **Kentucky's docket**, so that action's current posture is unknown.
13. ***Raine v. OpenAI*'s posture**, because no California state-court docket was reached.
14. **Whether any statute in §1 has been challenged in a court this review did not search.**
    Two routes found nothing; neither route is comprehensive.

**Dockets go stale between fetches.** The RECAP archive mirrors PACER only when a user
requests a docket, so every "as of" date in §5 is the date that docket was last fetched,
not today. Three of the five dockets read were last updated between 25 August and
4 October 2026. **Before any product decision that turns on a case's posture, re-fetch the
docket.**

## 8. Bottom line

As of **19 October 2026**, verified on primary sources: California's companion-chatbot
statute is in force and has been **amended by a 2026 act whose child-safety chapter becomes
operative 1 July 2027**; New York's AI-companion article has been in force since
**5 November 2025**; **nine further US jurisdictions** have enacted statutes on AI in
mental-health care or on companion chatbots, with effective dates running from
**1 July 2025 to 1 January 2027**; FDA has held one advisory committee meeting on
generative-AI mental-health devices and, by the Federal Register route, has issued no
guidance since and authorized no such device; the FTC has an open **6(b)** study of seven
companies and has published **no report and no enforcement action** on AI companions; and
the EU AI Act's **Article 50(1)** transparency duty **applies from 2 August 2026**, a date
that has arrived, while the **Digital Omnibus on AI** moved the high-risk dates out to
**2 December 2027** and **2 August 2028**.

On litigation: the **Soelberg** case **survived a motion to dismiss** and is in discovery
with trial set for May 2028; the **Gemini** case had its motion to dismiss taken under
submission in August 2026; the **Character.AI** case that produced the field's leading
published decision **settled and was dismissed with prejudice on 15 October 2026**; the
company filed **Chapter 11 on 12 October 2026**, drawing a **state attorneys general
coalition filing** two days later; and a **state attorney general enforcement action** has
been pending in Kentucky since January 2026.

**What this review does not establish.** It does not establish that this library's
regulatory coverage is now complete — eleven jurisdictions were checked, not fifty, and
fourteen specific questions are left open in §7. It does not establish that none of these
statutes has been enjoined; it establishes only that two non-comprehensive routes found no
such order. It does not establish what any provision requires of a Voelori product, which
is a counsel question this record deliberately does not answer. It does not establish
anything about the underlying science: **a statute is evidence of what legislators decided,
not of what a chatbot does to a person.** And it does not establish that any of the dockets
in §5 stands today as described — each is accurate as of the date its docket was last
fetched, and those dates are recorded alongside it.
