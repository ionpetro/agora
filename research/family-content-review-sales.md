# Independent native-content review: u01–u06

Reviewer: negotiation/content agent, independent of the sales author. Reviewed 2026-11-02.

## Scope and result

Read all **191 semantic items across 24 lessons**, including all six new fourth lessons, the preceding teaching cards, inline checks, scenario keys and explanations, matches, sorts, numbers, routines, authored trap repairs, and transfer cases. The review used the actual native schema and question builders, not the earlier JSON schema. No application files were edited during this cross-review.

**No unresolved correctness or prerequisite blocker remains in this scope.** The author corrected the concrete findings below; each correction was re-read in the exported unit file. This is a content signoff, not a claim that every possible real-world negotiation has one answer or that a structural test proves educational effectiveness.

## Substantive findings, now resolved

| Item | Verified issue | Applied correction and rationale |
|---|---|---|
| `u04-r-l4` | Its inline true/false check asked whether a written summary automatically establishes legal sufficiency, but the preceding teaching card did not teach this limit. | An explicit exception now says that a summary supports shared understanding without establishing legal sufficiency in every setting. The native flow teaches the qualification before retrieval and avoids a universal legal claim. |
| `u05-r-l2`, supporting `u05-l2-2` | The inline check used BATNA before expanding or defining it. The later match also expected target/reservation distinctions that were not explicit in the rule example. | A preceding Rowan example now defines BATNA as the best alternative action, a target of $86,000, and an evaluated $80,000 reservation point with other terms fixed. The definition distinguishes an alternative action from a number and keeps the threshold conditional on the package. |
| `u06-r-l1` | The inline check tested value creation versus distribution before that distinction was stated; the later pair exercise introduced it. | The preceding worked example now explicitly says both parties can benefit while deciding how to share that benefit remains a separate discussion. This matches the N1/N4/N6 negotiation framing without promising a win-win outcome. |

## Minor refinements, now resolved

| Item | Finding | Verified result |
|---|---|---|
| `u03-p-l1` | Duplicated all five concern/response mappings already in `u03-l1-2`. | Removed. Lesson one now has seven substantive items; the unit has 31. No prerequisite or transfer was removed. |
| `u04-l3-3` | “A refund needs a manager's decision tomorrow” could imply a guaranteed decision deadline despite the keyed commitment being only a status update. | Stem now says the request is scheduled for manager review tomorrow. The response promises the update the speaker controls and shares a decision only if available. |
| `u06-l3-2`, option 2 (zero-based) | The criticism of the buyer was tagged as sympathy overriding a constraint, although no sympathy was involved. | Tag is now 6: it does not answer the immediate tradeoff question. The keyed question still investigates the useful deadline. |
| `u06-l3-4` | Its deciding-fact exercise selected the missing scheduling term but omitted why scheduling was essential. | Exact phrases now include both “need an agreed remote day” and “none mentions scheduling.” |
| Repair / Remedy term generation | Ordinary-language overlap could make reciprocal definitions appear as incorrect generated distractors. | Repair explicitly denotes the overall correction process; Remedy denotes a specific corrective action. Both accept `redress`, allowing the engine's accepted-name overlap filter to exclude them from reciprocal term distractors. This does not teach that the ordinary words have mutually exclusive meanings. |

## Accuracy and boundary checks

- **u01:** Discovery, listening, fit, and information limits distinguish relevant follow-up from a question quota. Confidential information may be withheld. Changed facts legitimately allow a demonstration, a supported offer, purchasing, or use of approved aggregate information.
- **u02:** Claim evidence stays within what was observed. Ten tasks at six minutes describes 60 minutes of workload, not proven savings. $600 plus $200 is $800 and exceeds $750. A pilot's measure addresses its stated uncertainty; a certificate does not imply a placement guarantee.
- **u03:** A clear refusal remains a refusal. Scope/price trades state what changes. A trial can investigate uncertainty but cannot remove a known essential incompatibility. Real availability limits are distinguished from false price urgency.
- **u04:** Permission to explore is different from purchase authority. A narrow records request does not reactivate sales contact. A supported workaround and promised status update do not imply an approved refund or release date. Material scope changes require a new capacity/authority check.
- **u05:** BATNA, target, reservation point, and ZOPA are distinct. The $4,500–$5,000 overlap explicitly includes acceptable endpoints; $6,000 minimum versus $5,000 maximum leaves no overlap for the fixed package. A reduced scope is a different package. The $84,000 salary-minus-$4,000-commute example expressly ignores taxes and other deductions; it is a limited comparison, not an after-tax income guarantee.
- **u06:** Flexible timing can support a trade and an essential launch date can remove it. Relevant comparisons support discussion without requiring the other party to agree. Neither “always make the first offer” nor its opposite is taught. $6,000−$4,000 and $6,600−$4,600 both equal $2,000 under the stated model; a later $5,100 cost lowers the second contribution to $1,500. Seller equivalence does not prove buyer suitability, fairness, or consent. A preferred package is distinguished from a specific authorized acceptance.

Each transfer is linked to a rule taught earlier in its lesson. The added contrasts change consequential facts instead of merely rephrasing the same answer. The fourth lessons add information boundaries, pilot evaluation, known incompatibility, change control, package reassessment, and feasibility. Ethical commitments are identified as practice or ethics; hypothetical events and numbers are identified as fictional. No universal sales-effectiveness percentage was introduced.

## Sources and generated exercises

All source IDs referenced by u01–u06 resolve in `sources.json`. S1 retains its conversational, non-sales setting. S2 explicitly notes the correction to the date-offers outcome variable; S10 identifies that correction and S11 the original authors' reply. The registry does not present the critique as settled evidence against questions, and does not infer a sales-conversion formula from the exchange. Professional guidance and ethical standards are not relabelled as causal experiments.

The current native engine now uses authored rule misconceptions rather than borrowing true neighboring principles as incorrect tiles. Trap fixes draw only from each item's correct response, original error, and two authored incorrect repairs. All six sales trap-repair sets were read: each incorrect repair conflicts with the scenario's facts or stated model. Cold guesses now use authored issue alternatives when supplied and otherwise use the reviewed scenario unscored, avoiding overlapping neighboring principle labels. Overlapping accepted term names are excluded from reciprocal term distractors.

Ran `node --test app/test/content.test.js` again after the bounded answer-cue edits: **16 tests passed, zero failures**. This includes native validation, every generated lesson sitting and roundup across 40 seeds, transfers after their prerequisites without answer-giving introductions, boundary cases in roundups, authored build/repair distractors, and the authored cold-guess check. These checks establish structural behavior; the separate manual review above establishes why the content keys are defensible.

## Answer-length observation

The initial character-length audit found a reverse cue concentrated in u01, u04, and u03. Root then authorized a bounded word-count pass covering u01, u04, u05, and u06. Three wrong options per affected unit were shortened naturally; no keys, explanations, or other course fields changed. Correct answers shortest/tied by whitespace-delimited word count fell from **8/14 to 5/14 in u01**, and **10/14 to 7/14 in each of u04, u05, and u06**. Correct answers longest/tied did not increase. These are descriptive counts rather than proof of cue elimination; the wording remains varied and no key was padded. Exact before/after text and independent verification are recorded in `answer-cue-refinement.md`.
