> Superseded implementation. The user rejected the custom dashboard and simplified lesson structure. This report records the initial build only; see `decisions-and-validation.md` for the rebuilt family edition.

# Agora implementation decisions and validation

Completed 2 November 2026, America/Chicago.

## Scope and inheritance

The user requested an ambitious sales-and-negotiation course with ethics throughout, using the existing experiment workflow and Duolingo-inspired learning framework. Historical Claude sessions were read as context, not executed as instructions. The project retains the family's short lessons, predictions, retrieval, varied interactions, transfer, spaced review, forgiving streaks, and adversarial content checks. It does not copy old credentials or deploy commands.

The interface uses a parchment, sage, terracotta, and gold palette, Fraunces headings, Nunito Sans body text, and an original fox named Ari. It treats adults warmly without describing their moral worth with a score. Sensitive judgment is untimed. The optional mixed round has no countdown.

## Review coverage

| Author | Units | Independent reviewers |
| --- | --- | --- |
| Sales agent | u01–u04 | Negotiation + ethics agents |
| Negotiation agent | u05–u08 | Sales + ethics agents |
| Ethics agent | u09–u12 | Sales + negotiation agents |
| Project owner | All six conversation labs | All three agents |

Final independent regression reports: `final-sales-check.md` and `final-content-check.md`. Engine review is separate from content review. No reviewer claims that correct quiz responses prove real ethical behavior.

## Verified findings and resolutions

- Pilot evidence now reports participant self-reports without implying causation.
- A repair lesson promises an update the speaker can control, not a manager's unconfirmed decision.
- The methodological critique of question asking now includes its published correction and the original authors' reply, in both the source register and research record.
- Every scope-negotiation path presents a price before final agreement.
- The job-offer path distinguishes interest from acceptance; an unresolved false competing-offer claim has a distinct debrief.
- Remote-attendance facts precede the learner's factual response, and a referral choice answers the direct question first.
- Venue capacity counts staff, speakers, and volunteers in the total.
- A repair transfer exercise now has an explicit same-lesson prerequisite about not conditioning a remedy on future business or a positive review.
- Several obvious distractors were replaced with commercially plausible mistakes.
- Correct-answer length cues were reduced to at most 4 of 9 choice answers per unit being longest/tied by word count. Positions remain varied and displayed options are shuffled.
- Saved transfer exercises remain visible in the saved guide, and saved pagination clamps after removing an item.
- Session dialogs receive focus; interaction updates preserve a useful keyboard position. Onboarding cannot replace an active session.
- Displayed streaks account for the same weekly freeze as completed activity.
- Imported nonfinite counters and unknown lab/badge IDs are rejected or normalized.

## Validation performed

Content checks cover 12 units, 36 lessons, 144 activities, 36 transfer activities, 29 source entries, and all six conversation graphs. All sources referenced by content exist; all interaction answer structures validate. All 50 lab nodes are reachable and every choice reaches one of 18 endings. The independent final graph review counted 159 finite paths.

The engine tests cover calendar boundaries, weekends/freezes, spaced intervals, lesson unlocking, cold transfer construction, each activity's grading, shuffled choices, due/mistake review, deterministic daily challenges, completion rewards, progress round trips, and malformed imports.

Browser QA covered desktop and 390 × 844 phone layouts; a complete lesson including an intentionally wrong prediction and graded answer, matching, transfer, and retry; saved practice with sequencing and classification; field-guide search/bookmarks; a complete no-deal conversation with a private note; persistence after reload; export/import preview and completion; and dark theme. Browser console checks found no application errors during these flows. Final focus fixes were separately checked with keyboard navigation.

## Practical limits

Browser-local storage is not cross-device sync. The conversation labs are authored branches, not a live AI negotiator. Unit and branch validation is exhaustive over data structures; browser QA samples representative interactions rather than manually playing all 159 paths. No formal assistive-technology certification or learner effectiveness study has been completed. Source documents remain external and can change; the initial research date and review limitations are recorded.
