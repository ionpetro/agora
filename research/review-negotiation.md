> Historical review of the initial implementation and JSON drafts. For the rebuilt native family edition, see the `family-content-review-*` reports and `decisions-and-validation.md`.

# Independent content review: sales, ethics, and conversation labs

Reviewed 2026-11-02. This reviewer authored u05–u08 and therefore did **not** review those units as independent work. This pass read all content fields in u01–u04 and u09–u12: **24 lessons, 96 items**, including every keyed response and feedback explanation. It also read all six labs, **49 nodes, 80 choices, and 17 endings**, plus the 27-entry source registry and relevant sales, negotiation, and ethics-learning research.

The review tried to defend rejected answers, checked the facts available before each decision, traced every lab branch to an ending, and checked whether cold transfer items had a same-lesson prerequisite. Only this report was edited.

## Serious errors and material corrections

No high-severity harmful recommendation, arithmetic error, broken lab destination, or clearly wrong keyed answer was found. The following three moderate issues should be corrected before treating the content and provenance as reviewed.

### R1 — S2's correction and author reply are missing from the evidence record

**Location:** `sources.json` entries S1/S2; `research/sales.md` S2; source context for `u01l1-2`.

**Verified issue:** S2 is presented as “Corrective evidence” and a methodological challenge to the original question-asking paper, without disclosing that this reanalysis itself received a published correction. The correction identifies confusion between date offers given and received and says the error affected results and conclusions across the commentary. A reply by the original authors also contests the reanalysis. The present narrow lesson—responsive follow-up is different from counting questions, and none of this establishes a sales-conversion formula—remains reasonable. The problem is incomplete provenance, not a finding that the lesson's correct answer is false.

**Verification:** Opened the actual journal correction printed on page 1477 of a journal PDF, DOI [10.1037/pspi0000355](https://doi.org/10.1037/pspi0000355), and the six-page [original authors' reply hosted by Harvard Business School](https://www.hbs.edu/ris/Publication%20Files/yeomans_huang_brooks_minson___gino_2019_.___6cf7b840-7ad0-4459-8931-81768f821854.pdf), DOI 10.1037/pspi0000220. The correction text was accessible on PDF page 19 in this [copy of the journal pages](https://www.researchgate.net/journal/Journal-of-Personality-and-Social-Psychology-1939-1315/publication/336078619_The_Link_Between_Self-Esteem_and_Social_Relationships_A_Meta-Analysis_of_Longitudinal_Studies/links/6501c1f49763a22fa3df6b07/The-Link-Between-Self-Esteem-and-Social-Relationships-A-Meta-Analysis-of-Longitudinal-Studies.pdf). The DOI landing page itself was inaccessible through the browser tool; the printed journal notice was read directly. No claim is made here to have reproduced either statistical analysis.

**Proposed fix:** Rename S2 more neutrally, such as “Question asking and listening: methodological debate.” Add to its note and research paragraph: “This commentary was subsequently corrected for an outcome-variable error; the original authors also published a reply. Use the exchange with those qualifications, not as settled evidence that asking questions reduces liking.” Link the correction and reply in the research register. Keep `u01l1-2`'s conservative teaching and answer; do not replace it with an equally unsupported universal claim in the opposite direction.

### R2 — A manager's future decision is described as a promise the speaker controls

**Location:** `u04l3-3`, correct option 2 and its feedback (zero-based index).

**Verified issue:** The prompt says a refund needs a manager's decision tomorrow; it does not establish that the decision will definitely be ready. The keyed response commits to reporting “the refund decision tomorrow,” and the feedback describes this as an update the speaker can control. The speaker can control providing an update, but cannot necessarily control the manager completing the decision. The distinction is central to this lesson about avoiding a second unsupported promise.

**Proposed fix:** Change the correct option to “Explain today's workaround and promise a refund-request update tomorrow, even if approval is still pending.” Change feedback to identify the controlled commitment as reporting the status and next step. Alternatively, explicitly establish in the prompt that the authorized manager has committed to a decision by tomorrow. The first version better teaches realistic uncertainty.

**Rationale:** N9 separates commitments from implementation issues; the course's S4/S9 research asks writers to distinguish approved remedies from unresolved ones. `u12l2-1` already models the safer practice of naming an update time while facts remain under review.

### R3 — The pilot's positively framed opening slightly exceeds its evidence

**Location:** Lab `pilot`, node `start`, choice 0.

**Verified issue:** Context establishes only that 12 volunteers reported feeling more prepared, with no comparison group. The favored opening says “Our pilot helped participants feel more prepared.” That phrasing can attribute the change to the pilot instead of reporting the bounded observation. Its feedback then endorses the statement as distinguishing what was measured. This is a small wording change with a meaningful consequence in a lab explicitly teaching restraint about evidence.

**Proposed fix:** Replace the first clause with “In an earlier pilot, 12 volunteers reported feeling more prepared; we have not measured job outcomes.” Keep the question about what evidence would support the college's decision. If the reports did not establish that every volunteer endorsed the statement, also specify the actual count in context; as currently written, context treats the 12-person group as reporting it.

**Rationale:** S5/S6 and `u02l2-1` distinguish observations from causal or generalized conclusions. `u02l2-4` is a good existing model: describe the work and the reported response separately.

## Minor refinements

### R4 — One helpful referral branch does not answer the question asked

**Location:** Lab `follow-up`, node `transport`, choice 1 → `permission`; also `transport` node context.

**Verified issue:** Jamie asks whether remote attendance is possible. Choice 1 proposes a transport introduction without answering that question, then flows to Jamie requesting remote requirements even though this branch never established a remote option. The feedback correctly praises a specific permission request, but the branch unintentionally rewards substituting an alternative service for a direct capability answer. The next-month remote option currently first appears inside a different choice rather than as a fact available to the learner.

**Proposed fix:** Put the known offering in `transport.context`: this cohort is in person and next month's cohort has a remote option. Revise choice 1 to answer that first, then conditionally offer an introduction: “Next month has a remote option. If you prefer this in-person cohort, may I introduce you to a transport provider using only your name and preferred contact method?” Jamie's next request for remote requirements then follows coherently from either positive branch.

**Rationale:** S3/S8 and `u01l1-2` teach using the person's actual question; E5 supports purpose-limited information sharing. The existing privacy boundary itself is sound.

### R5 — Capacity should count people rather than an ambiguous participant category

**Location:** Lab `venue`, node `criteria`, its choice 0 feedback, and ending `agreement`.

**Verified issue:** The room holds 45 people, while the new fact is “40 participants.” Speakers, volunteers, and organizers are separately present in the story. It is not clear whether they are included in the 40. The feedback says the room meets expected attendance, but that cannot be established from a count that might exclude staff and speakers. The proposal still requires confirmation, so this is an ambiguity rather than a demonstrated overbooking error.

**Proposed fix:** State “We expect 40 people in total, including speakers, organizers, and volunteers.” Alternatively, make counting every person against capacity part of the next required check before asserting fit. The $1,450 price fits the $1,500 budget; no financial arithmetic fix is needed.

**Rationale:** N1/N9 require identifying affected people and making implementation feasible. The existing no-overbooking instruction is good; the count should support it explicitly.

### R6 — The cold repair transfer introduces a new condition on the remedy

**Location:** `u12l2-4`, prerequisite in `u12l2-1` through `u12l2-3`.

**Verified issue:** The cold transfer asks the learner to recognize that a refund must not be conditional on renewed business or a positive review. Earlier items in this lesson teach notification, authorized remedies, and an owner/check-in. They do not explicitly teach the freedom to leave after a repair. The answer is sound and earlier units teach choice, but the content contract calls for a transfer of a concept already taught in the **same** lesson.

**Proposed fix:** Add one brief sentence to a preceding teaching card, for example in `u12l2-2`: “A remedy for the error should not require another purchase or a positive review.” Keep the transfer as a fresh tutor setting. This makes the cold item test application rather than first exposure.

**Rationale:** The agreed content schema requires same-lesson prerequisites. E1/E3 support preserving choice; the precise sentence is an editorial teaching commitment rather than an experimental finding.

### R7 — Tighten a few distractors in the later lessons

**Location:** Especially `u10l1-1`; secondarily `u11l2-3`.

**Verified issue:** In `u10l1-1`, the access gap is contrasted with a vendor logo and sales staffing. Both alternatives are so unrelated that learners can answer without applying the stakeholder concept. In `u11l2-3`, refusing every possible future introduction “even if the buyer asks” is an implausible alternative to seeking permission now. These are not ambiguous or wrong keys; they reduce how much the answers reveal about learning.

**Proposed fix:** For `u10l1-1`, use commercially plausible incomplete responses such as negotiating a lower per-student price or running a trial restricted to current device owners, while retaining the best answer about participation for people without devices. Explain why neither addresses exclusion. For `u11l2-3`, replace the absolute refusal with an apparently helpful but still unauthorized step, such as adding the buyer to a partner's contact list while asking the partner not to call yet. Keep the permission-based option best under the stated facts.

**Rationale:** The project's assessment design asks for tempting mistakes and practical transfer. These are learning-quality refinements, not factual corrections.

## Checks with no findings

- **Answer logic:** Other than the uncertainty in R2, the keyed answers in the assigned 96 items follow from the stated objective and facts. I did not find a rejected option that clearly meets the same objective equally well under the supplied conditions.
- **Arithmetic:** `u02l1-3`: 10 × 6 minutes = 60 minutes, correctly distinguished from measured savings. `u02l2-2`: the illustrative 6 × 5 minutes = 30 minutes is explicitly conditional. `u02l3-4`: $600 + $200 = $800, compared correctly with $750. `u09l3-1`: 12 × 120 + 300 = 1,740. Lab `scope`: $5,500 lies above the $5,000 buyer limit and below the $6,000 original seller limit; a $4,500 reduced scope is a different agreement, not a repaired price-only overlap.
- **Ethical scope:** The assigned units allow legitimate confidentiality and seller boundaries, distinguish equal division from fairness, and include meaningful no-deal or pause outcomes. No cultural or demographic bargaining stereotype was found. The course does not promise that ethical behavior guarantees profit or agreement.
- **Transfer:** The other 23 transfer items have an identifiable same-lesson prerequisite. They change role, setting, or application while retaining a taught distinction.
- **Source use:** Registry IDs referenced by these units and labs exist. Source notes generally distinguish philosophical commitments, guidance, and experiments. The learner-facing content avoids jurisdiction-independent legal claims and unsupported effect-size claims. R1 is the concrete provenance correction found by additional browsing; this pass was not a replication of every cited study.
- **Lab consequences:** Apart from R3–R5, the authored outcomes are plausible fictional continuations. Repair can cost credibility; a real deadline can cost an offer; agreement is not required; a refund or concession does not demand forgiveness. Most merged endings properly describe the branch's remaining issue instead of inventing a guaranteed psychological reaction.

## Lab coverage record

Every listed node, outgoing choice, and ending was read. A read-only graph check found no missing destination or unreachable node. There are no cycles requiring a choice to loop forever.

| Lab | Nodes checked | Choices | Endings | Result |
| --- | --- | ---: | ---: | --- |
| `pilot` | `start`, `repair`, `fit`, `evidence`, `capacity`, `pilot-end`, `pause`, `strained` | 12 | 3 | R3; otherwise no finding |
| `offer` | `start`, `bluff`, `deadline`, `terms`, `approval`, `yes`, `no-deal` | 12 | 2 | No correction required |
| `scope` | `start`, `essential`, `overpromise`, `scope`, `compare`, `yes`, `no-deal`, `broken` | 13 | 3 | No arithmetic or material branch error found |
| `follow-up` | `start`, `boundary`, `monday`, `false-urgency`, `transport`, `permission`, `yes`, `stop` | 15 | 2 | R4; otherwise no finding |
| `ai-promise` | `start`, `need`, `verify`, `after`, `authority`, `repair`, `no-deal`, `repair-end`, `strained` | 15 | 3 | No material correction required; final remedy remains subject to agreement |
| `venue` | `start`, `absent`, `options`, `funding`, `criteria`, `agreement`, `postpone`, `exclude`, `overcommit` | 13 | 4 | R5; otherwise no finding |

## Remaining limits of this review

This is a content and branch-logic review of the current files, not learner testing or a claim of instructional effectiveness. In particular, correct clicks can show recognition while leaving real conversational transfer untested. UI behavior, persistence, accessibility implementation, and runtime scoring were outside this assignment. u05–u08 require another reviewer's independent pass.
