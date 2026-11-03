> Historical review of the initial implementation and JSON drafts. For the rebuilt native family edition, see the `family-content-review-*` reports and `decisions-and-validation.md`.

# Independent ethics and learning review

Reviewed 2 November 2026: every item in `u01`–`u08` (96 items), all six labs in `labs.json` including every node and choice, and the source registry. The reviewer did not author these units or labs. This report records the content as read before fixes; other agents may subsequently change it.

## Overall assessment

The units consistently integrate ethics into the practical skill. They distinguish confidentiality from falsehood, listening from agreement, a real deadline from invented urgency, and an attractive agreement from a feasible one. Transfer questions have a relevant prerequisite within their lesson. I found no universal promise that an ethical action wins a deal, no moral-person scoring in the reviewed content, and no question that requires accepting equal division as the only fair allocation.

The main required fixes are one unsupported causal phrase, two branch/commitment ambiguities, and a repeated answer-length cue. The remaining notes improve continuity and precision. I edited no unit or lab files during this review.

## Serious findings — fix before calling content checked

### R1 — The approved pilot opening implies causation the case does not establish

**Location:** lab `pilot`, node `start`, choice 0.

The approved line begins, “Our pilot helped participants feel more prepared.” The context establishes only self-reports from 12 volunteers, without a comparison group. “Helped” attributes the reported feeling to the program, even though the lesson correctly rejects a stronger placement claim. The approving feedback then treats the statement as a clean description of what was measured. This undercuts the distinction taught in `u02l2-1` and `u02l2-4`.

**Proposed fix:** “In one pilot, 12 volunteers reported feeling more prepared; we have not measured job outcomes. What evidence would support your decision?” Keep the distinction between the response recorded and a causal effect. If the intent was to establish a pre/post measure, specify that design while retaining its causal limits. Source S5 supports having a basis for the claim before presenting it.

### R2 — The discovery branch assumes an offer that was never presented

**Location:** lab `scope`, node `scope`, choice 2 → node `compare`.

Choice 2 asks which deliverable and deadline would make a smaller project useful. It bypasses choice 0, the only place that actually offers the four-week page at $4,500. The client can legitimately name a desired four-week page and one revision in response, but the next learner choice immediately confirms “scope, price…” and reaches an agreement ending. On this route no price was presented to the client. The initial context gives the freelancer's acceptable minimum, which is not automatically an agreed quote. The branch therefore skips a consequential part of the proposed exchange while teaching explicit agreement.

**Proposed fix:** Route the discovery choice to a short `priorities` node where the client names the useful scope and timing. Have the learner then present a feasible, fully priced proposal before reaching `compare`. Alternatively, change choice 2 to include an explicit proposal and question, but that loses some genuine discovery practice. Every route to acceptance should show the relevant scope and price before confirming them.

### R3 — Conditional acceptance becomes an uncommitted proposal without an explicit shared understanding

**Location:** lab `offer`, node `terms`, choice 1 → `approval` → choice 1.

The candidate says, “I accept if those changes are approved,” then asks whether it remains open. The recruiter next confirms the requested changes in writing but never answers the question about commitment. The following refusal receives feedback that concessions never obligate acceptance. The educational problem is the unclear scope of the candidate's earlier yes; no legal conclusion is needed to see the ambiguity. It conflicts with `u04l1-4` and `u08l2-1`, which carefully distinguish interest and commitment.

**Proposed fix:** Use a clearly noncommittal statement: “Those changes could make it workable. Please seek approval and send the full proposal; I will decide after reviewing it.” Or have the recruiter explicitly confirm that the candidate has not accepted before moving to the final choice. Avoid teaching that words of acceptance can simply be ignored once the requested conditions are met.

### R4 — Answer length reveals the key throughout several units

**Location:** all nine choice items in `u01`, all nine in `u02`, and all nine in `u08`; broader pattern across `u01`–`u08`.

A word-count check found the correct option was the longest or tied for longest in **56 of 72** choice items. In `u01`, `u02`, and `u08`, this happened in **9 of 9** choices each. Examples include `u01l1-4`, `u02l1-3`, `u02l2-1`, `u08l1-4`, and `u08l2-3`. This is not proof that learners will exploit the cue, but it directly conflicts with the content contract's instruction to avoid making correct answers always longest and weakens what a correct response demonstrates.

**Proposed fix:** Shorten correct choices where the prompt already supplies the caveat; retain nuance in `why`. Make wrong options plausible actions with comparable specificity, without adding irrelevant words merely to equalize length. For example, `u08l1-4` can use “Agree the weather trigger and decision owner,” while its feedback retains source, threshold, and timing. In `u02l1-3`, “About one hour of current work; savings remain untested” retains the decisive distinction. Recount after editing to remove the unit-wide pattern; do not impose an arbitrary equal-length rule.

## Minor findings — improve precision and branch continuity

### R5 — The transport-introduction branch skips the actual remote-attendance question

**Location:** lab `follow-up`, node `transport`, choice 1 → `permission`.

Jamie asks whether remote attendance is possible. Choice 0 answers and establishes next month's remote option; choice 1 instead offers a transport-provider introduction. Both branches lead to Jamie asking for “the remote requirements,” even though the introduction branch never established that option. The permission request itself is sound, but the branch misses the direct question the course teaches learners to follow.

**Proposed fix:** Put the attendance facts in `transport.context`: current cohort is in person; next month's cohort offers remote attendance. Rewrite choice 1 to answer first, then offer the optional transport introduction if the person still prefers the current cohort. At `permission`, make clear that Jamie chooses remote information and has not accepted the separate introduction. This also prevents a broad interpretation of permission to contact a partner.

### R6 — Room capacity should include everyone present

**Location:** lab `venue`, node `criteria`, text and choice 0 feedback.

The room holds 45 and the expected audience is “40 participants,” but the story also includes speakers and volunteers. The feedback says the room meets expected attendance before clarifying whether the 40 includes those people. A real capacity check should not quietly count only registered attendees.

**Proposed fix:** State “We expect 40 people total, including speakers and staff,” or require the organizer to confirm the total before treating the 45-person room as sufficient. Keep the published capacity and waitlist.

### R7 — A shared no-deal ending should preserve an unresolved false-claim consequence

**Location:** lab `offer`, node `bluff`, choice 1 → `no-deal`.

This route exits after the candidate's invented competing offer without correcting it. The immediate feedback rightly says the falsehood remains something to own, but the common ending is titled “A clear, respectful no” and focuses entirely on the candidate preserving a boundary. That can make the unresolved correction disappear from the final debrief.

**Proposed fix:** Add a neutral reminder to the common ending or a distinct ending for that route: declining is allowed, but any false claim made earlier still needs correction. Do not punish refusal itself or turn the ending into a verdict on the candidate's character.

## Source and assessment checks

- All cited source IDs in the 96 reviewed items exist in the registry. All lab destinations resolve to an existing node. Every reviewed lesson contains a transfer item and a concrete ethics prompt.
- Source use is generally bounded: S4 is presented as an ethical code, S5/S6 as evidence-and-communication principles rather than universal legal guarantees, and N-series sources as contextual negotiation guidance. The labels in the source registry preserve those limits.
- I independently reopened [the AMA ethics statement](https://www.ama.org/ama-statement-of-ethics/), [the Columbia MESO article record](https://business.columbia.edu/faculty/research/putting-more-table-how-making-multiple-offers-can-increase-final-value-deal), and [the PON contingency guidance](https://www.pon.harvard.edu/daily/dealmaking-daily/set-your-contingent-contract-up-for-success/). These checks support the broad principle mappings. A fresh attempt to reopen S8 timed out; its mapping was checked against the research brief and existing registry, not newly reverified page text.
- N8's current article makes a stronger claim about what refusal of a contingent term reveals about confidence than Agora does. `u08l1-3` correctly adds control and cash-flow reasons why refusal does not prove dishonesty. Retain that qualification; consider adding it to N8's registry note so later authors do not import the stronger claim uncritically.
- The single-answer questions generally provide enough decisive facts. Where fairness criteria conflict, the units ask the learner to identify or apply a stated criterion instead of pretending to settle the entire moral question.
- The `venue` lab preserves more than one defensible path, including postponement with costs. The AI lab allows a real lost sale and does not treat apology as a remedy. Preserve both features during fixes.

## Suggested verification after fixes

Read each corrected branch from its start, without reading sibling choices, and check that every later fact about the offer was established on that route. Recheck the three affected unit groups for answer-length cues. Have a second reviewer try to defend each rejected option using only the prompt's stated facts; revise if their defense depends on a genuine ambiguity rather than invented circumstances.
