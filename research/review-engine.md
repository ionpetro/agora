> Historical review of the initial implementation and JSON drafts. For the rebuilt native family edition, see the `family-content-review-*` reports and `decisions-and-validation.md`.

# Independent engine and accessibility review

Reviewed 2 November 2026. Scope: `app/src/app.js`, `engine.js`, `foundation.js`, `style.css`, `shell.html`, and the existing engine tests. No application code was edited by this reviewer. Browser control remained with the root agent.

Verification used source inspection, read-only Node tests, direct calls into engine functions, a Node VM evaluation of the actual `guideResults` function, and an instrumented in-memory copy of the application with a minimal DOM stub to exercise the welcome-timer state transition. That stub establishes control flow and state; it is not a substitute for browser layout or assistive-technology testing.

The root agent fixed several findings while this review was running. Their status is separated below. Current engine tests: **16 passed, 0 failed**.

## Remaining findings at this review snapshot

### E1 — P2: replacing the session element resets the user's scroll position

**Locations:** `app.js`, `renderRun` and `renderLab` (approximately lines 81 and 89 after the focus patch); `style.css`, `.lesson-overlay`.

Both render functions assign a fresh session subtree to `#overlay.innerHTML`. The removed `.lesson-overlay` is also the element with `overflow:auto`. Selecting an option, sorting a lower entry, choosing a match, or moving an order tile therefore replaces the scrolling element rather than retaining its scroll position. The newly added `restoreSessionFocus` correctly retains logical focus, but uses `preventScroll:true`; a lower-page selected control can consequently remain focused outside the newly reset viewport.

**Reproduction to check in the owned browser:** open a long sorting or matching item in a short/mobile viewport, scroll down to a lower control, and activate it. Observe whether the session jumps to the top despite still being on the same question.

**Targeted fix:** capture and restore the current session's `scrollTop` for same-step rerenders, or update the question controls without replacing the scroll container. Continue to move to the new question's heading on actual step changes. After checking an answer, keep the deliberate move to its feedback.

**Verification level:** the container replacement and missing scroll restoration are established in code. Browser confirmation is still appropriate because this review did not control the UI.

### E2 — P2: several small-text colors fall below normal-text contrast

**Locations:** `style.css`, `:root --muted`, `.lab-card .lab-meta`, `.daily-card .eyebrow`, and `.daily-card p` (the stylesheet's long rules are on lines 2–3).

Computed from the declared opaque CSS foreground/background colors using relative luminance:

| Text | Foreground | Background | Contrast |
| --- | --- | --- | ---: |
| Muted text on a card | `#6c7d71` | `#fffef9` | 4.32:1 |
| Muted text on the page | `#6c7d71` | `#f7f8f2` | 4.09:1 |
| Lab metadata | `#c27850` | `#fffef9` | 3.41:1 |
| Daily-card eyebrow | `#9a7a38` | `#f7efda` | 3.51:1 |
| Daily-card paragraph | `#85734e` | `#f7efda` | 4.02:1 |

These selectors render useful text at roughly 10–15 CSS pixels, so the large-text exception does not apply. The normal-text target in [WCAG 2.2's contrast criterion](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html) is at least 4.5:1. This is a concrete contrast calculation, not a claim that the whole application has been audited for WCAG conformance.

**Targeted fix:** darken the light-theme text colors to pass on their actual backgrounds. Preserve the lighter decorative palette where it is not conveying text. Recheck the dark theme and disabled states separately rather than changing every occurrence of a decorative accent blindly.

### E3 — P2: two open tabs can silently overwrite each other's progress

**Locations:** `app.js:7` initial state load; `app.js:10` `save`; no `storage` listener or revision comparison in the reviewed source.

Each tab reads storage once and later writes its complete in-memory state. If two tabs start with the same state, tab A completes `u01l1`, then tab B completes `u02l1`, tab B's save replaces the stored object with one that does not contain `u01l1`. The same issue can discard a saved note or setting. A read-only two-state reproduction using `E.finish` and the actual whole-object persistence pattern leaves only `u02l1` in the final stored `done` map.

**Targeted fix:** detect an external revision before writing and reconcile it safely, or enforce one active writer and show a clear reload/continue notice in the stale tab. A guard is sufficient; a cross-tab collaboration feature is not required. Avoid silently choosing last-write-wins for a user's completed work.

### E4 — P3: non-session rerenders still discard keyboard focus

**Locations:** `app.js` click handler branches for `theme`, `sound`, `filter`, `guide-page`, and guide-mode `save-item`; `finishLab`; goal selection/confirmation.

The session focus repair does not cover the main application. For example, activating the Dark theme switch calls `render()`, which removes the focused switch, with no attempt to focus its replacement. The next Tab starts from a different location instead of the setting the person just changed. `finishLab` also focuses `#main` inside `closeSession`, then immediately calls `render()` again and removes that focused main. Goal selection reopens the modal and overwrites `focusBefore` with a modal button that will be removed, so closing may fail to return to the original trigger.

**Targeted fix:** restore the equivalent active control after a same-page rerender, or focus the page heading after a completed navigation. Preserve the original opener when rebuilding an already-open goal modal. Keep existing explicit focus moves for page navigation and unit expansion.

**Verification level:** these focused-node removals and missing restoration calls are visible in the source; the root agent should confirm the final keyboard path in its browser pass.

## Findings fixed during the review

### F1 — Welcome timer could overwrite an active lesson: fixed and state-rechecked

**Original locations:** `app.js:123` startup timer; `overlaySession`; `openModal`.

The original 550 ms timer checked onboarding only when scheduled. Starting a lesson before it fired let the welcome dialog replace the lesson while `run` stayed active. Closing the modal then left an empty overlay, `body.style.overflow === 'hidden'`, and the application marked non-inert. The Node VM probe reproduced those exact states.

The current code marks onboarding when a session starts and rechecks onboarding, active sessions, and modal state inside the timer callback. Repeating the probe now leaves `running: true`, `onboarded: true`, `modalKind: ''`, and the lesson overlay intact. The verified race is fixed.

### F2 — Initial session and per-choice focus was lost: fixed in source, browser check retained

**Current locations:** `restoreSessionFocus`, `renderRun`, `renderLab`, and feedback handling.

Previously startup marked the page inert without moving focus into the new dialog, and every choice rerender removed the active control. The current helper focuses the session content initially, restores a matching enabled control when available, and selects a useful next control when the original was removed. Answer and lab feedback now receive programmatic focus. This addresses the missing focus ownership. E1 concerns the separate remaining scroll-container issue; E4 concerns main-page controls outside this helper.

### F3 — Removing the last saved item on a later guide page produced a false empty state: fixed and rechecked

**Location:** `guideResults`, approximately `app.js:52`.

With 13 saved ideas, moving to page 2 and unsaving its only card previously left `guidePage === 1` with 12 remaining items. The view displayed “Your pocket is empty” and “Page 2 of 1.” Direct VM execution of the old function reproduced it.

The current function clamps the page index after filtering. The same reproduction now yields `guidePage: 0`, no empty-pocket message, and “Page 1 of 1.”

### F4 — Displayed streak disagreed with the weekly-freeze behavior: fixed and rechecked

**Location:** `foundation.js:114`, `liveStreak`; engine regression test.

With last practice Thursday 29 October 2026, a streak of 5, no stored freeze, and the prior `freezeWeek`, Monday's original `liveStreak` returned 0. `touchStreak` then supplied the new week's freeze and extended the same streak to 6. The code now evaluates the same available weekly freeze in the display calculation. The direct probe returns 5 before activity and 6 afterward; the new regression test passes.

### F5 — Nonfinite imported item counters did not survive a round trip: fixed and rechecked

**Location:** `engine.js:23`, item normalization; new import regression test.

The original item normalizer used `Number(value) || 0`, which admitted string values such as `"Infinity"` and `"1e999"`. They became `Infinity`, then serialized to `null`, silently changing the counters on the next load. The current code accepts finite numeric counters, bounds them, and defaults invalid values to zero. It also rejects unknown lab and badge IDs. The targeted regression passes.

## Checks that passed and limits

- All 16 engine tests pass after the fixes, including dates, weekend handling, review intervals, lesson unlocks, question mappings, retry-related grading primitives, daily determinism, completion, and import sanitization.
- The content validator passes the three targeted edits authorized for this agent: `u10l1-1`'s procurement distractor, `u11l2-3`'s unauthorized-list-sharing distractor, and `u12l2-2`'s prerequisite about remedies not requiring a purchase or positive review.
- Imported names and reflection notes are escaped before insertion into HTML. Known lesson/item references are filtered, and dangerous theme values are not accepted. I found no executable imported content path in the reviewed rendering code.
- Import replacement and reset require a visible confirmation; storage failures produce a warning rather than a false claim that persistence succeeded.
- Choice, ordering, matching, and sorting answer mappings are coherent. Initial predictions are not recorded as scored answers. A mismatch in matching makes the graded attempt incorrect and enables a later retry; it is not silently converted into perfect first-try recall.
- Dialog Tab wrapping and reduced-motion styles are present. Their existence does not establish complete keyboard, screen-reader, zoom, or mobile accessibility; the root-owned browser pass remains necessary.
- This report does not add requirements for accounts, a backend, telemetry, live AI, or synchronization across devices. The cross-tab finding concerns avoiding silent loss in the existing browser-local persistence model.
