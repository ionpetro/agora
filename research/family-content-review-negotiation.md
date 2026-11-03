# Independent native-content review: u07–u12

Reviewed 2026-11-02 by the sales-content author, who did not author these units. Read all 168 semantic items in u07.js through u12.js, including rules, worked examples, inline quiz variants, every scenario option and explanation, deciding-fact spans, sequences, matching/sorting rows, transfers, numerical assumptions, and source/status fields. Also inspected generated first-guess and trap-repair behavior.

## Result

No unresolved authored-content correctness or prerequisite blocker. The concrete findings below have been corrected and re-read. This is a semantic review, not evidence that completing the course changes workplace behavior.

## Findings and verified corrections

| Item | Finding | Verified final state |
|---|---|---|
| u07-l1-decision3, option 1 (zero-based) | An unsupported promise to hold capacity indefinitely answers the question, so “does not answer” was the wrong feedback category. | Tag 3: assumed fact. Key and explanation remain sound. |
| u08-l1-decision3, option 0 | Inferring the trainer knows the workshop has no value is an invented belief, not merely an absolute claim. | Tag 3: assumed fact. |
| u09-l2-decision4, option 2 | “Different teams can never share a method” makes an absolute assertion. | Tag 7: absolute. |
| u11-l3-decision3, option 1 | General criticism of sales culture does not answer the immediate unavailable-feature issue. | Tag 6: does not answer. |
| u09-r-2 and u09-l2-decision3 | The paid-endorsement relationship should cite the directly applicable source as well as broader guidance. | S6 added. The FTC advertising FAQ discusses disclosure when an endorsement relationship affects credibility. |
| u12-term-2 | Remedy could be generated as a wrong synonym for Repair. | Remedy now means a specific corrective action; Repair in u04 is the overall correction/follow-through process. Both accept “redress,” allowing the engine to exclude reciprocal alias distractors. |
| Generated qIssue for u12-l3-decision3, seed 2 | “Facts priorities and revision” and same-rule sibling “a reason to reconsider” were simultaneously plausible. | The final bounded fix eliminates generated neighboring issue labels entirely. qIssue uses authored issueDistractors when available; otherwise it asks the already reviewed four-option scenario as an ungraded, untimed first guess. Reproducing u12-l3-decision3 at seed 2 now yields that scenario with guess:true and ms:null. The new cold-guess regression passes. |

The S6 source was opened and checked: https://www.ftc.gov/business-guidance/resources/advertising-faqs-guide-small-business . Its endorsement guidance supports the relationship/disclosure principle, not the invented facts of an exercise or a universal legal rule across jurisdictions.

Root/author fixes already present when checked: u07 deciding-fact spans are meaningful, exact portions of their own stems; u10-r-1 teaches the rights, justice, consequences, and care lenses in its worked examples before asking the care-lens quiz.

## Semantic checks

- All authored scenario keys fit the stated constraints. No key requires private knowledge from another branch or an invented intention.
- Transfers use an earlier rule from the same lesson; fourth lessons add genuine boundary or integration cases.
- Counts and calculations checked include 30/40 = 75%, 10/40 = 25%, “at least 35” including 35, $2,000 + $1,000 exceeding a $2,600 authorization, $120 × 12 + $300 = $1,740, and 12 − 8 = 4.
- Explanations distinguish uncertainty, authority, feasibility, permission, and repair. Ethical action is not promised to produce a deal, greater profit, or a legal guarantee.
- Research, practice guidance, ethical commitments, and fictional cases are distinguished; sources support underlying principles rather than fictional outcomes.
- Per-unit correct-answer-longest/tied rates for the 14 main scenarios: u07 5/14; u08 6/14; u09 4/14; u10 5/14; u11 5/14; u12 3/14. No systematic longest-answer cue remains across these units.
- Reviewed the engine correction that qBuild draws wrong tiles only from authored distractorElements; neighboring true principles are no longer offered as false rule components. Trap repair choices now come from the item’s own repair, own wrong answer, and authored fixDistractors.

## Validation limits

The native validator completes with zero errors. Its short matching/sorting set warnings in these units are known and nonblocking: the sets fit the intended distinction and the inherited renderer accepts them. The separate engine reviewer and parent’s browser checks cover mechanisms and live interaction. This report does not replace those checks.

Final verification: node --test app/test/content.test.js passes all 16 tests, including cold guesses, transfer prerequisites, boundary cases, authored construction/repair distractors, and the production learning modes.
