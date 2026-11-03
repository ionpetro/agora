> Historical review of the initial implementation and JSON drafts. For the rebuilt native family edition, see the `family-content-review-*` reports and `decisions-and-validation.md`.

# Agora independent content review: units 05–12 and conversation labs

Reviewed 2 November 2026. Reviewer did not author units 05–12 and did not edit any course content during this pass. Only this report was written.

## Scope and verdict

Read all 96 items in units `u05`–`u12`, their 24 lesson objectives/takeaways/fieldwork prompts, all 49 nodes in the six conversation labs, and the full source registry. Read the negotiation and ethics/learning research. Checked every choice answer against its explanations, every match and sort against its definitions, and each transfer item against concepts taught earlier in its lesson.

The units have sound answer keys and appropriately conditional guidance. I found no arithmetic error, broken source ID, fabricated business-effect statistic, universal claim that ethical conduct increases revenue, or case that grades a legitimate disagreement about values as a person's moral worth. Three targeted lab clarifications would improve consistency with the course's own standards. Two additional teaching refinements are optional.

## Substantive corrections

### R1 — The preferred pilot response slightly upgrades a report into a causal result

- **Location:** `labs.json`, lab `pilot`, node `start`, choice index `0`.
- **Current response:** “Our pilot helped participants feel more prepared; we have not measured job outcomes.”
- **Issue:** The case establishes volunteer self-reports and explicitly says there was no comparison group. “Our pilot helped” attributes the change to the program, whereas the available observation is that participants reported feeling more prepared. The feedback praises evidential restraint, so the preferred wording should demonstrate that restraint precisely.
- **Source rationale:** S5/S6 distinguish claims from the evidence that supports them. A self-report can be reported accurately without becoming proof that the program caused the result. This is a claim-calibration issue, not a finding that the fictional sentence violates a particular law.
- **Proposed replacement:** “Participants in our small pilot reported feeling more prepared; we have not measured job outcomes. What evidence would support your decision?”
- **Priority:** Correct before final content sign-off. The branch remains valid; only the claim wording needs repair.

### R2 — A factual remote-attendance option is introduced only inside the learner's response

- **Location:** `labs.json`, lab `follow-up`, node `transport`, choice index `0`; also the transition from choice index `1` to node `permission`.
- **Current response:** “This cohort is in person; next month has a remote option. I can send its actual requirements if you want.”
- **Issue:** Before this choice, neither the case context nor node context establishes that next month's cohort supports remote attendance. The learner is asked to choose a factual sales statement without being given its basis. This is especially noticeable because the same course teaches verifying a capability before promising it. The alternative introduction route also jumps to a request for remote requirements without explicitly marking the prospective learner's change of preference.
- **Source rationale:** S4 and S5 support accurate, grounded representations. This is primarily an authoring completeness issue: a practice scenario should supply the decisive fact before rewarding its use.
- **Proposed fix:** Add to `transport.context`: “You have checked the program details: this cohort is in person, and next month's cohort has a remote option with published requirements. A transport provider is available for an optional introduction, but no details have been shared.” Optionally change `permission.text` to “Actually, I would prefer to consider the remote cohort. Please email its requirements once next Monday. Do not enroll me yet.”
- **Priority:** Correct before final content sign-off. No new branch or product behavior is needed.

## Minor refinements

### R3 — Keep a private minimum distinct from a physical delivery constraint

- **Location:** `labs.json`, lab `scope`, case context; node `start`, choice index `1` feedback; node `overpromise`, choice index `0`.
- **Issue:** The case initially defines $6,000 as the minimum acceptable commercial deal. The later feedback and correction describe a delivery problem and say “I cannot deliver the full package within those terms.” A reservation point may reflect an attractive alternative or the seller's chosen margin; it does not by itself prove that the work is physically undeliverable. The unit instruction correctly distinguishes these concepts, so the lab should preserve that precision.
- **Source rationale:** N2 defines overlap in terms the parties are willing to accept; `research/negotiation.md` explicitly warns against equating a reservation point with production cost. The minimum remains a legitimate boundary even when performance would be technically possible.
- **Proposed fix:** Either establish the relevant staffing or cost limitation explicitly in the opening facts, or use the commercial boundary consistently: “That offer crosses your stated minimum for the full package.” The corrective response can say, “I offered terms below the minimum I can responsibly accept. Before you rely on that, I need to revise or withdraw the offer.”
- **Priority:** Refinement, not a broken branch. A learner can already reach a reasonable revised scope or no-deal outcome.

### R4 — Make one advanced stakeholder distractor commercially plausible

- **Location:** `u10l1-1`.
- **Issue:** The correct answer identifies students who cannot use the required personal phones. Both rejected answers concern the vendor's logo or number of sales staff. They are so remote from the stated access problem that the item can be solved without applying stakeholder reasoning.
- **Source rationale:** The research review rubric calls for at least one tempting alternative with a real commercial rationale. E7/E8 are reasons to test unfamiliar application rather than only surface recognition; they do not prove that a particular replacement will improve learning.
- **Proposed refinement:** Keep the supported answer, but replace one distractor with an immediate procurement consideration such as “Whether another college adopted the same system without complaints.” Feedback can explain that prior adoption does not establish access for this college's students. The answer stays conditional on the explicitly identified device barrier.
- **Priority:** Optional difficulty improvement. The current answer is correct.

### R5 — Use “at least” consistently in the contingency threshold

- **Location:** `u08l1-1`, choice index `2`, compared with `u08l1-2`.
- **Issue:** The first example says “If 35 people register by May 1,” while the next item clearly says “at least 35.” Ordinary readers will probably infer a threshold, but the lesson is specifically about eliminating ambiguity in conditions.
- **Source rationale:** N8 supports clear triggers and measures. The item already qualifies the term as a proposal for further review, so this is precision work rather than an incorrect answer.
- **Proposed replacement:** “If at least 35 people register by May 1, add one session for $1,000.”
- **Priority:** Optional wording refinement.

## Checks that passed

- **Answer validity:** No second defensible answer was found among the rejected choices in the 72 reviewed choice items, given their stated objectives and facts. In particular, asking about unknown limits is distinguished from assuming a ZOPA, and a signed deal is not treated as evidence of a good process.
- **Transfer prerequisites:** Each of the 24 lessons has a fresh-context transfer item that applies a distinction introduced in that same lesson. No essential unexplained technical term was required to answer one.
- **Arithmetic:** The $4,500–$5,000 ZOPA, the incompatible $6,000/$5,000 limits and $5,500 midpoint, the equal $2,000 package contributions, the 30/40 versus 10/40 allocation, and the 120 × 12 + 300 = 1,740 annual cost are correct. Lab budget and scope arithmetic is internally consistent.
- **Ethics throughout:** Requirements, evidence, privacy, power, affected staff, truthful urgency, authority, and repair appear inside the decisions. No-deal and delay are legitimate outcomes. Seller boundaries and confidentiality are respected.
- **Source fit:** All referenced source IDs exist. Philosophical principles are not presented as experimental sales results. E4 was checked directly: its discussion of disguised paid comparisons and undisclosed relationships supports `u09l2-3`; there is no need to flag that endorsement item as unsupported.
- **Lab choices:** Multiple defensible routes are preserved in the pilot, offer, scope, follow-up, AI-promise, and venue cases. Consequences are fictional narrative developments rather than precise predictions of trust or revenue. Repair branches do not promise automatic forgiveness.
- **Lab graph:** Every referenced node exists, every node is reachable from its lab's start, and every branch reaches an ending. Each decision node has at least two choices. No accidental cycle or dead destination was found.
- **No unintended legal claims:** The reviewed text gives ethical and practical guidance without asserting uniform laws about privacy, contracting, disclosure, accessibility, or remedies. The source notes preserve important jurisdictional and evidential limits.

## Source checks performed for this review

Reopened the following authoritative pages to resolve the specific evidence and source-fit questions above:

- [HBS Online: Understanding ZOPA](https://online.hbs.edu/blog/post/understanding-zopa) — acceptable terms and alternatives; supports keeping willingness distinct from physical capacity.
- [FTC: Advertising FAQs](https://www.ftc.gov/business-guidance/resources/advertising-faqs-guide-small-business) — express/implied claims, evidential basis, testimonials, and material connections.
- [FTC: Bringing Dark Patterns to Light](https://www.ftc.gov/system/files/ftc_gov/pdf/P214800%20Dark%20Patterns%20Report%209.14.2022%20-%20FINAL.pdf) — checked the discussion of purportedly independent paid comparisons and relevant relationships; E4 fits the endorsement lesson.

This review assesses content and branch logic. It does not establish that a learner's simulated choices predict real-world sales performance or ethical conduct.
