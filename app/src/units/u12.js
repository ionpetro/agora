// Native Agora unit. Original scenarios migrated from reviewed JSON; added cases are fictional.
(function () {
  const unit = {
  "id": "u12",
  "title": "Put it into practice",
  "blurb": "Change roles. Face the tradeoff. Choose a next step.",
  "subject": "integration",
  "assume": "All scenarios and numbers are fictional. Apply the stated facts and goal; a sound decision may be agreement, investigation, pause, or no deal. Sources support principles, not predicted outcomes.",
  "lessons": [
    {
      "id": "u12l1",
      "title": "On both sides of the table",
      "objective": "Prepare a feasible agreement while understanding the other party’s constraints and freedom to decline.",
      "takeaway": "A strong proposal explains both why it may help and when it will not fit.",
      "fieldwork": "With a willing partner, roleplay a small fictional purchase, then switch roles. Name one assumption that changed after the switch. Discuss a reasonable alternative and what fact or value would change your recommendation; do not rate anyone’s character.",
      "items": [
        {
          "id": "u12-r-1",
          "kind": "rule",
          "say": "Clarify the essential outcome, test the feasible offer, and ask for the evidence and commitments each side needs.",
          "status": "practice",
          "src": "Markkula Center: Framework for Ethical Decision Making · Markkula Center: Introduction to the framework · NIST AI RMF: Risks and Trustworthiness",
          "sourceIds": [
            "E1",
            "E2",
            "E6"
          ],
          "hook": "A discount cannot turn skills practice into a guaranteed job placement.",
          "title": "Test the decision from both sides",
          "elements": [
            "Identify the result that matters to the buyer",
            "Separate supported benefits from unverified promises",
            "Check each party’s required work and authority",
            "Recognize when no available scope meets the essential need"
          ],
          "ordered": false,
          "distractorElements": [
            "Treat every concession as progress regardless of fit"
          ],
          "ex": [
            {
              "facts": "A training buyer wants guaranteed hires, but the provider can offer skills practice only.",
              "result": "Clarify whether that feasible outcome meets a useful need before pricing the pilot."
            }
          ],
          "terms": [
            "Decision-relevant information"
          ],
          "quiz": [
            {
              "t": "tf",
              "q": "The seller’s internal margin necessarily answers the buyer’s concern about manager workload.",
              "a": false,
              "why": "The relevant information is the buyer’s actual required tasks and time."
            },
            {
              "t": "mcq",
              "q": "Which question can change whether a training offer fits at all?",
              "options": [
                "Which discount would make guaranteed hires more attractive?",
                "Would the skills-practice outcome still serve a useful need for you?",
                "Could a different package name satisfy the hiring goal?"
              ],
              "a": "Would the skills-practice outcome still serve a useful need for you?",
              "why": "This checks the mismatch between the desired result and the service that can be delivered."
            }
          ]
        },
        {
          "id": "u12-term-1",
          "kind": "term",
          "say": "Clarify the essential outcome, test the feasible offer, and ask for the evidence and commitments each side needs.",
          "status": "practice",
          "src": "Markkula Center: Framework for Ethical Decision Making · Markkula Center: Introduction to the framework · NIST AI RMF: Risks and Trustworthiness",
          "sourceIds": [
            "E1",
            "E2",
            "E6"
          ],
          "hook": "A discount cannot turn skills practice into a guaranteed job placement.",
          "term": "Decision-relevant information",
          "lang": "english",
          "meaning": "Information that can change an assessment of fit, feasibility, risk, or choice.",
          "use": "Required manager hours can matter more than the seller’s private margin when testing workload."
        },
        {
          "id": "u12-l1-decision1",
          "kind": "argue",
          "say": "Find the uncertainty that could change the whole proposal.",
          "status": "fictional",
          "src": "Markkula Center: Framework for Ethical Decision Making · Markkula Center: Introduction to the framework",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "hook": "Are you selling a solution before understanding the required result?",
          "rule": "u12-r-1",
          "stem": "A small employer wants a training pilot to improve interviews. You can demonstrate skills practice but cannot promise job placement. The buyer says “success means hires.”",
          "call": "Before drafting a package, what matters most to clarify?",
          "issue": "essential outcome and feasible offer",
          "options": [
            {
              "text": "Whether a skills outcome would help.",
              "why": "This determines whether a feasible offer can serve the buyer’s actual objective."
            },
            {
              "text": "Which discount makes the pilot easiest to approve.",
              "why": "Price does not resolve a mismatch about what the service can deliver.",
              "trap": 6
            },
            {
              "text": "Whether their logo may appear in your case study.",
              "why": "A marketing benefit for the seller does not establish fit for the buyer.",
              "trap": 6
            },
            {
              "text": "Promise job placements in a separate verbal assurance.",
              "why": "That creates the same unsupported outcome claim outside the written proposal.",
              "trap": 5
            }
          ],
          "answer": 0,
          "transfer": false
        },
        {
          "id": "u12-l1-match2",
          "kind": "pairs",
          "say": "Turn the pitch into claims and commitments people can inspect.",
          "status": "fictional",
          "src": "Markkula Center: Framework for Ethical Decision Making · NIST AI RMF: Risks and Trustworthiness",
          "sourceIds": [
            "E1",
            "E6"
          ],
          "hook": "Which part is evidence, and which part is still a promise?",
          "set": "Build a checkable proposal",
          "mode": "concept",
          "pairs": [
            {
              "l": "Improve interview practice",
              "r": "Intended benefit"
            },
            {
              "l": "A sample exercise the buyer can inspect",
              "r": "Available evidence"
            },
            {
              "l": "Two manager feedback sessions",
              "r": "Buyer’s required contribution"
            },
            {
              "l": "A named review after the pilot",
              "r": "Checkpoint for the next decision"
            }
          ]
        },
        {
          "id": "u12-l1-decision3",
          "kind": "argue",
          "say": "Ask for what your decision needs, not everything they know.",
          "status": "fictional",
          "src": "Markkula Center: Framework for Ethical Decision Making · Markkula Center: Introduction to the framework",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "hook": "Is your information request relevant to evaluating the offer?",
          "rule": "u12-r-1",
          "stem": "You now buy the pilot. Your concern is whether managers can support it within available time. The seller’s internal profit margin would not answer that.",
          "call": "What request best tests feasibility?",
          "issue": "essential outcome and feasible offer",
          "options": [
            {
              "text": "Ask for the seller’s lowest possible price before discussing workload.",
              "why": "The pricing question does not address the stated capacity concern.",
              "trap": 6
            },
            {
              "text": "Ask for the required manager tasks and expected time.",
              "why": "Those commitments let you compare the pilot with actual manager capacity."
            },
            {
              "text": "Ask the seller to guarantee that managers will enjoy it.",
              "why": "A guarantee of people’s reactions cannot establish operational feasibility.",
              "trap": 10
            },
            {
              "text": "Ask only whether the seller enjoyed the last pilot.",
              "why": "The seller’s reaction does not establish required manager time.",
              "trap": 6
            }
          ],
          "answer": 1,
          "transfer": false
        },
        {
          "id": "u12-l1-decision4",
          "kind": "hypo",
          "say": "A smaller deal is useful only if it still solves the problem.",
          "status": "fictional",
          "src": "Markkula Center: Framework for Ethical Decision Making · Markkula Center: Introduction to the framework",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "hook": "Would this compromise leave the other party’s essential need unmet?",
          "rule": "u12-r-1",
          "stem": "A community kitchen needs certified cold storage by Friday. Your team cannot provide it until Monday, and a partial Friday delivery cannot keep food safe.",
          "call": "To support a workable outcome, what should you do?",
          "issue": "essential outcome and feasible offer",
          "options": [
            {
              "text": "Offer a lower price for Monday and describe the timing as flexible.",
              "why": "A discount does not satisfy the explicitly essential timing requirement.",
              "trap": 6
            },
            {
              "text": "Suggest signing now and discussing the essential deadline afterward.",
              "why": "Signing first would postpone a fact central to the decision.",
              "trap": 10
            },
            {
              "text": "Explain the mismatch and let them pursue another option.",
              "why": "No feasible offer meets the stated need; declining this deal preserves informed choice."
            },
            {
              "text": "Describe partial delivery as certified cold storage without verification.",
              "why": "That misstates the capability needed to meet the stated essential requirement.",
              "trap": 5
            }
          ],
          "answer": 2,
          "transfer": true,
          "facts": [
            "needs certified cold storage by Friday",
            "cannot provide it until Monday",
            "partial Friday delivery cannot keep food safe"
          ]
        },
        {
          "id": "u12-h-contrast-1",
          "kind": "hypo",
          "say": "Once a feasible purpose is confirmed, make the remaining decision concrete.",
          "status": "fictional",
          "src": "Markkula Center: Framework for Ethical Decision Making · Markkula Center: Introduction to the framework · NIST AI RMF: Risks and Trustworthiness",
          "sourceIds": [
            "E1",
            "E2",
            "E6"
          ],
          "hook": "Clarification can support a useful agreement as well as an informed no.",
          "rule": "u12-r-1",
          "stem": "In a fictional employer pilot, the buyer now confirms that structured interview practice is valuable even without guaranteed hires. The delivery lead can supply that practice, and managers have confirmed the required feedback time. Price and final approval remain to be agreed.",
          "call": "What should the provider do next?",
          "issue": "confirmed useful scope",
          "facts": [
            "valuable even without guaranteed hires",
            "confirmed the required feedback time",
            "final approval remain"
          ],
          "options": [
            {
              "text": "Reject the pilot because the initial request mentioned hires.",
              "why": "The buyer has clarified a meaningful feasible purpose.",
              "trap": 4
            },
            {
              "text": "Keep promising guaranteed hires to increase appeal.",
              "why": "The narrower useful outcome does not support that guarantee.",
              "trap": 5
            },
            {
              "text": "Treat clarification as automatic purchasing approval.",
              "why": "Price and approval explicitly remain unresolved.",
              "trap": 2
            },
            {
              "text": "Draft the actual scope and seek the remaining agreement.",
              "why": "The purpose and capacity now fit; the remaining terms still need agreement."
            }
          ],
          "answer": 3,
          "transfer": false,
          "grid": false,
          "boundary": true
        }
      ]
    },
    {
      "id": "u12l2",
      "title": "Repair the agreement",
      "objective": "Respond to a consequential mistake with correction, feasible choices, and accountable follow-through.",
      "takeaway": "Repair begins by restoring an accurate picture and a practical choice.",
      "fieldwork": "Write a fictional correction in three sentences: what was wrong, what is now known, and who will help choose the next step. Discuss a reasonable alternative and what fact or value would change your recommendation; do not rate anyone’s character.",
      "items": [
        {
          "id": "u12-r-2",
          "kind": "rule",
          "say": "Correct consequential errors promptly, offer authorized remedies, and agree who will follow through.",
          "status": "ethics",
          "src": "Markkula Center: Framework for Ethical Decision Making · OECD AI Principles · Stanford HAI: Walking the Walk of AI Ethics · Stanford Encyclopedia of Philosophy: Ethics of Manipulation",
          "sourceIds": [
            "E1",
            "E5",
            "E9",
            "E3"
          ],
          "hook": "A repair should not charge the customer another purchase for correcting your mistake.",
          "title": "Repair without another unsupported promise",
          "elements": [
            "Flag a known material error before further reliance",
            "Separate confirmed impact from remaining uncertainty",
            "Offer feasible authorized remedies without demanding praise or another purchase",
            "Agree a responsible owner and update time"
          ],
          "ordered": false,
          "distractorElements": [
            "Wait for perfect information while a known error drives another commitment"
          ],
          "ex": [
            {
              "facts": "A buyer may book a venue tomorrow using an incorrect integration date.",
              "result": "Flag the known error now and give a truthful time for the next update."
            }
          ],
          "terms": [
            "Remedy"
          ],
          "quiz": [
            {
              "t": "tf",
              "q": "A customer who accepts a refund must restore trust or buy again.",
              "a": false,
              "why": "The correction addresses the error; continued business remains a separate choice."
            },
            {
              "t": "mcq",
              "q": "You cannot authorize a refund but can pause billing and arrange a review today. What can you promise?",
              "options": [
                "An automatic full refund",
                "No response until the customer withdraws the complaint",
                "The authorized pause and review today"
              ],
              "a": "The authorized pause and review today",
              "why": "Use the actions actually within your authority without guaranteeing the review outcome."
            }
          ]
        },
        {
          "id": "u12-term-2",
          "kind": "term",
          "say": "Correct consequential errors promptly, offer authorized remedies, and agree who will follow through.",
          "status": "ethics",
          "src": "Markkula Center: Framework for Ethical Decision Making · OECD AI Principles · Stanford HAI: Walking the Walk of AI Ethics · Stanford Encyclopedia of Philosophy: Ethics of Manipulation",
          "sourceIds": [
            "E1",
            "E5",
            "E9",
            "E3"
          ],
          "hook": "A repair should not charge the customer another purchase for correcting your mistake.",
          "term": "Remedy",
          "lang": "english",
          "meaning": "A specific corrective action, such as a refund, offered to address an error or its consequences.",
          "use": "Correct an overcharge without making the refund conditional on praise or future business.",
          "alt": [
            "redress"
          ]
        },
        {
          "id": "u12-l2-decision1",
          "kind": "argue",
          "say": "Do not let a signature freeze a mistake in place.",
          "status": "fictional",
          "src": "Markkula Center: Framework for Ethical Decision Making · OECD AI Principles",
          "sourceIds": [
            "E1",
            "E5"
          ],
          "hook": "Is someone about to act on information you now know is wrong?",
          "rule": "u12-r-2",
          "stem": "A buyer signed based on an incorrect integration date. You discover it before they book a launch venue tomorrow; the exact revised date is still being checked.",
          "call": "Which first response best protects their next decision?",
          "issue": "timely accountable repair",
          "options": [
            {
              "text": "Wait for every delivery estimate to be confirmed before notifying the buyer.",
              "why": "They may make another costly commitment while relying on a known error.",
              "trap": 10
            },
            {
              "text": "Flag the error now and name an update time.",
              "why": "This corrects the immediate reliance risk without inventing a replacement promise."
            },
            {
              "text": "Quietly update the proposal and assume the buyer will notice the change.",
              "why": "A silent edit may leave them unaware that their plan needs review.",
              "trap": 10
            },
            {
              "text": "Blame the drafting tool without telling the buyer the date is wrong.",
              "why": "Attributing the error does not correct the consequential information.",
              "trap": 6
            }
          ],
          "answer": 1,
          "transfer": false
        },
        {
          "id": "u12-l2-order2",
          "kind": "steps",
          "say": "Name the error, explain the impact, offer real options, follow through.",
          "status": "fictional",
          "src": "Markkula Center: Framework for Ethical Decision Making · OECD AI Principles",
          "sourceIds": [
            "E1",
            "E5"
          ],
          "hook": "Can every offered remedy actually be delivered?",
          "title": "A repair conversation",
          "steps": [
            "Acknowledge the specific error",
            "Explain confirmed impact and uncertainty",
            "Offer authorized options",
            "Agree an owner and check-in"
          ],
          "distractors": [
            "Demand a positive review before offering the remedy",
            "Promise a revised date without checking delivery"
          ],
          "applyTo": {
            "facts": "For this nonurgent service error, the contact has acknowledged the mistake and explained the known impact and remaining uncertainty.",
            "stop": "Offer authorized options",
            "why": "In the taught routine, the next step is a feasible choice of remedies before agreeing the owner and check-in."
          }
        },
        {
          "id": "u12-l2-decision3",
          "kind": "argue",
          "say": "Do not repair one broken promise with another.",
          "status": "fictional",
          "src": "Markkula Center: Framework for Ethical Decision Making · Stanford HAI: Walking the Walk of AI Ethics",
          "sourceIds": [
            "E1",
            "E9"
          ],
          "hook": "Who can authorize the option the customer is being offered?",
          "rule": "u12-r-2",
          "stem": "A customer asks for a refund after a missed service milestone. You can pause future billing and arrange a manager review today, but cannot approve refunds.",
          "call": "What can you responsibly offer now?",
          "issue": "timely accountable repair",
          "options": [
            {
              "text": "Guarantee a full refund to reduce the customer’s frustration.",
              "why": "The promise exceeds your authority and may create another disappointment.",
              "trap": 2
            },
            {
              "text": "Decline to discuss the issue because refunds are outside your role.",
              "why": "You still have useful actions available and can connect them to an authorized decision.",
              "trap": 10
            },
            {
              "text": "Pause billing and arrange the authorized review today.",
              "why": "This uses your actual authority and gives the customer a concrete route for the remaining request."
            },
            {
              "text": "Promise a refund if the customer first posts a positive review.",
              "why": "That adds pressure unrelated to addressing the missed milestone.",
              "trap": 8
            }
          ],
          "answer": 2,
          "transfer": false
        },
        {
          "id": "u12-l2-decision4",
          "kind": "hypo",
          "say": "Offer a remedy without demanding renewed trust.",
          "status": "fictional",
          "src": "Markkula Center: Framework for Ethical Decision Making · Stanford Encyclopedia of Philosophy: Ethics of Manipulation",
          "sourceIds": [
            "E1",
            "E3"
          ],
          "hook": "Are you making a correction conditional on praise, silence, or another purchase?",
          "rule": "u12-r-2",
          "stem": "A fictional tutor corrects an overcharge and offers a clear refund. The learner accepts it but chooses a different tutor.",
          "call": "What best respects the completed repair and the learner’s choice?",
          "issue": "timely accountable repair",
          "options": [
            {
              "text": "Refund without requiring further business.",
              "why": "The remedy addresses the error without making continued business the price of correction."
            },
            {
              "text": "Make the refund conditional on giving the tutor another chance.",
              "why": "The learner’s freedom to leave should not depend on buying again.",
              "trap": 10
            },
            {
              "text": "Ask for a positive review before releasing the refund.",
              "why": "That adds a new pressure unrelated to correcting the overcharge.",
              "trap": 10
            },
            {
              "text": "Return the money only after the learner promises not to complain.",
              "why": "The remedy becomes conditional on silence rather than correcting the overcharge.",
              "trap": 8
            }
          ],
          "answer": 0,
          "transfer": true,
          "facts": [
            "corrects an overcharge",
            "learner accepts it but chooses a different tutor"
          ]
        },
        {
          "id": "u12-h-contrast-2",
          "kind": "hypo",
          "say": "Move the repair forward when better information becomes available.",
          "status": "fictional",
          "src": "Markkula Center: Framework for Ethical Decision Making · OECD AI Principles · Stanford HAI: Walking the Walk of AI Ethics · Stanford Encyclopedia of Philosophy: Ethics of Manipulation",
          "sourceIds": [
            "E1",
            "E5",
            "E9",
            "E3"
          ],
          "hook": "Timely notice is a first step, not the whole remedy.",
          "rule": "u12-r-2",
          "stem": "In a fictional service error, the buyer already knows the old delivery date is wrong and has paused the venue booking. The provider now has a verified revised date and authorized options. The buyer asks for those concrete choices rather than another generic apology.",
          "call": "What best advances the repair?",
          "issue": "from notification to remedy",
          "facts": [
            "already knows",
            "verified revised date and authorized options",
            "asks for those concrete choices"
          ],
          "options": [
            {
              "text": "Present the verified choices and agree an owner and next update.",
              "why": "The immediate misinformation risk has been addressed; meaningful options now support the next decision."
            },
            {
              "text": "Repeat the initial warning without sharing the confirmed information.",
              "why": "That withholds information now available for the buyer’s decision.",
              "trap": 9
            },
            {
              "text": "Guarantee the buyer will be satisfied with any option.",
              "why": "The provider cannot guarantee the buyer’s future reaction.",
              "trap": 3
            },
            {
              "text": "Require renewed business before explaining the choices.",
              "why": "A correction should not depend on another purchase.",
              "trap": 8
            }
          ],
          "answer": 0,
          "transfer": false,
          "grid": false,
          "boundary": true
        }
      ]
    },
    {
      "id": "u12l3",
      "title": "Judgment, not a verdict",
      "objective": "Distinguish facts, constraints, and values; revise a decision when relevant information changes.",
      "takeaway": "Explain your reasoning, name what could change it, and keep learning.",
      "fieldwork": "After a low-stakes decision, write one fact, one value you prioritized, and one new fact that would make you reconsider. Keep any personal details private. Discuss a reasonable alternative and what fact or value would change your recommendation; do not rate anyone’s character.",
      "items": [
        {
          "id": "u12-r-3",
          "kind": "rule",
          "say": "Distinguish facts, limits, and values; give a reasoned choice and state what could change it.",
          "status": "ethics",
          "src": "Markkula Center: Framework for Ethical Decision Making · Markkula Center: Introduction to the framework",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "hook": "Two people can share the numbers and disagree about what should matter most.",
          "title": "Explain judgment as revisable reasoning",
          "elements": [
            "Separate checkable facts from operational limits and priorities",
            "State the value tradeoff rather than disguising it as arithmetic",
            "Update when relevant information changes",
            "Name a condition under which you would reconsider"
          ],
          "ordered": false,
          "distractorElements": [
            "Use one decision as a verdict on a person’s moral worth"
          ],
          "ex": [
            {
              "facts": "Partners agree on costs but differ between equal access and greatest need.",
              "result": "Discuss the competing priorities; more decimal places will not resolve the value choice."
            },
            {
              "facts": "A workshop has twelve confirmed names and a room with twelve usable places; its team favors applicants with fewer alternatives.",
              "result": "The list is an observed fact, room capacity an operational limit, and prioritizing fewer alternatives a value priority."
            }
          ],
          "terms": [
            "Value priority"
          ],
          "quiz": [
            {
              "t": "tf",
              "q": "Changing a conclusion after a relevant fact changes is necessarily inconsistent reasoning.",
              "a": false,
              "why": "A stable reason can support a different conclusion under different facts."
            },
            {
              "t": "mcq",
              "q": "Which explanation makes a choice reviewable?",
              "options": [
                "Everyone approved it, so the reasoning needs no further explanation.",
                "We prioritized access, subject to event feasibility.",
                "We preferred this supplier, so new evidence should confirm that preference."
              ],
              "a": "We prioritized access, subject to event feasibility.",
              "why": "It identifies the priority and a consequential condition that could change the recommendation."
            }
          ]
        },
        {
          "id": "u12-term-3",
          "kind": "term",
          "say": "Distinguish facts, limits, and values; give a reasoned choice and state what could change it.",
          "status": "ethics",
          "src": "Markkula Center: Framework for Ethical Decision Making · Markkula Center: Introduction to the framework",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "hook": "Two people can share the numbers and disagree about what should matter most.",
          "term": "Value priority",
          "lang": "english",
          "meaning": "A reasoned preference about which concern should carry weight when relevant aims compete.",
          "use": "Equal access and greater need can be competing priorities even when the facts are agreed."
        },
        {
          "id": "u12-l3-decision1",
          "kind": "argue",
          "say": "Find out whether you disagree about facts or priorities.",
          "status": "fictional",
          "src": "Markkula Center: Framework for Ethical Decision Making · Markkula Center: Introduction to the framework",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "hook": "Are you disguising a priority as an objective fact?",
          "rule": "u12-r-3",
          "stem": "Two partners agree on costs and expected benefits but disagree whether a discount should favor equal access or greatest need.",
          "call": "What best describes what remains unsettled?",
          "issue": "facts priorities and revision",
          "options": [
            {
              "text": "The correct arithmetic must still be discovered.",
              "why": "The stated disagreement remains after the calculations are shared.",
              "trap": 10
            },
            {
              "text": "They must weigh competing fairness priorities.",
              "why": "The partners favor different defensible criteria for distributing a benefit."
            },
            {
              "text": "One partner must lack the facts already agreed.",
              "why": "The scenario explicitly establishes agreement about the facts.",
              "trap": 10
            },
            {
              "text": "The disagreement proves one partner is dishonest.",
              "why": "Different fairness priorities do not establish dishonesty.",
              "trap": 3
            }
          ],
          "answer": 1,
          "transfer": false
        },
        {
          "id": "u12-l3-sort2",
          "kind": "sort",
          "say": "Separate what is, what is possible, and what matters.",
          "status": "fictional",
          "src": "Markkula Center: Framework for Ethical Decision Making · Markkula Center: Introduction to the framework",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "hook": "Which claim needs evidence, authority, or a reasoned defense?",
          "mode": "category",
          "q": "Classify the statements from a fictional workshop planning discussion.",
          "buckets": [
            "Observed fact",
            "Stated operational constraint",
            "Value priority"
          ],
          "items": [
            {
              "text": "The confirmed attendance list contains twelve names.",
              "bucket": "Observed fact",
              "why": "This describes a count that can be checked."
            },
            {
              "text": "For this event, the available room cannot hold more than twelve people.",
              "bucket": "Stated operational constraint",
              "why": "This states a capacity limit on the plan."
            },
            {
              "text": "We should give greater weight to applicants with fewer alternatives.",
              "bucket": "Value priority",
              "why": "This recommends a priority for distributing access."
            },
            {
              "text": "Three applicants asked for an accessible text schedule.",
              "bucket": "Observed fact",
              "why": "This reports requests that can be verified."
            }
          ]
        },
        {
          "id": "u12-l3-decision3",
          "kind": "argue",
          "say": "Be steady about the reason, flexible about the conclusion.",
          "status": "fictional",
          "src": "Markkula Center: Introduction to the framework",
          "sourceIds": [
            "E2"
          ],
          "hook": "What new fact would make your original recommendation no longer fit?",
          "rule": "u12-r-3",
          "stem": "You recommended a basic plan because the buyer needed only simple reports. They now reveal a mandatory audit requirement that only the premium plan meets; budget approval is uncertain.",
          "call": "What is the strongest next step?",
          "issue": "facts priorities and revision",
          "options": [
            {
              "text": "Defend basic so your recommendation stays consistent.",
              "why": "The new requirement changes the basis of the original recommendation.",
              "trap": 10
            },
            {
              "text": "Move them to premium without discussing the new cost.",
              "why": "The added cost remains a consequential decision for the buyer.",
              "trap": 10
            },
            {
              "text": "Recheck fit and budget against the new requirement.",
              "why": "This updates the reasoning while preserving the buyer’s control over the tradeoff."
            },
            {
              "text": "Hide the audit requirement so the cheaper recommendation stays valid.",
              "why": "That would preserve a recommendation by suppressing a material fact.",
              "trap": 10
            }
          ],
          "answer": 2,
          "transfer": false
        },
        {
          "id": "u12-l3-decision4",
          "kind": "hypo",
          "say": "Give a reason and leave a door open to new evidence.",
          "status": "fictional",
          "src": "Markkula Center: Framework for Ethical Decision Making · Markkula Center: Introduction to the framework",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "hook": "Could someone understand your decision without accepting your values as universal?",
          "rule": "u12-r-3",
          "stem": "A fictional team has chosen the slower supplier to prioritize verified accessibility after discussing the deadline tradeoff.",
          "call": "Which explanation best makes that decision reviewable?",
          "issue": "facts priorities and revision",
          "options": [
            {
              "text": "“We prioritized verified access; we would revisit if the delay prevented the event.”",
              "why": "It names the priority, recognizes the tradeoff, and identifies a relevant reason to reconsider."
            },
            {
              "text": "“The slower supplier is always the ethical choice.”",
              "why": "Speed alone does not determine the ethical merits of every choice.",
              "trap": 7
            },
            {
              "text": "“Our choice proves that the other supplier is a bad organization.”",
              "why": "The specific decision does not establish a sweeping verdict about an organization.",
              "trap": 6
            },
            {
              "text": "Our preferred supplier must be right because we selected it unanimously.",
              "why": "Agreement within the team does not explain the substantive reason or when to revise it.",
              "trap": 6
            }
          ],
          "answer": 0,
          "transfer": true,
          "facts": [
            "prioritize verified accessibility",
            "discussing the deadline tradeoff"
          ]
        },
        {
          "id": "u12-h-contrast-3",
          "kind": "hypo",
          "say": "Keep the purpose in view when the facts behind a tradeoff change.",
          "status": "fictional",
          "src": "Markkula Center: Framework for Ethical Decision Making · Markkula Center: Introduction to the framework",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "hook": "A stated reconsideration condition should have consequences when it occurs.",
          "rule": "u12-r-3",
          "stem": "In a fictional team, the slower supplier was preferred for verified accessibility. New evidence shows that its delay would prevent the event entirely. Another supplier can meet the deadline with an independently checked accessible format. Both options now meet the stated access requirement.",
          "call": "Which next step follows the team’s stated reasoning?",
          "issue": "a reason to reconsider",
          "facts": [
            "delay would prevent the event entirely",
            "independently checked accessible format",
            "Both options now meet"
          ],
          "options": [
            {
              "text": "Defend the slower supplier because changing is always disloyal.",
              "why": "That substitutes loyalty to a past choice for the stated access and event purposes.",
              "trap": 7
            },
            {
              "text": "Remove accessibility from every future decision.",
              "why": "The new evidence offers access and timely delivery; it does not make access irrelevant.",
              "trap": 7
            },
            {
              "text": "Reassess the timely accessible offer against the remaining requirements.",
              "why": "The facts that justified the original tradeoff have changed."
            },
            {
              "text": "Declare the slower supplier a bad organization.",
              "why": "This specific feasibility problem does not support a general character verdict.",
              "trap": 3
            }
          ],
          "answer": 2,
          "transfer": false,
          "grid": false,
          "boundary": true
        }
      ]
    },
    {
      "id": "u12l4",
      "title": "The handover challenge",
      "objective": "Integrate claim evidence, stakeholder capacity, approval, and changing conditions into one reviewable pilot decision.",
      "takeaway": "A good handover tells the next person what is promised, what supports it, and what still needs a decision.",
      "fieldwork": "Roleplay a fictional pilot handover with a willing partner. One person proposes proceeding, the other asks for a pause. Compare the evidence, affected people, and tradeoffs; write a justified choice plus the fact that would reverse it. No sale or personal score is required.",
      "items": [
        {
          "id": "u12-r-4",
          "kind": "rule",
          "say": "Connect the supported benefit to the actual scope, resources, authority, and next review before relying on the agreement.",
          "status": "practice",
          "src": "MIT Sloan: Seven keys to effective negotiation · Harvard PON: Set Your Contingent Contract Up for Success · Harvard Ombuds: Seven Elements of Effective Negotiations · Markkula Center: Framework for Ethical Decision Making · Markkula Center: Introduction to the framework · NIST AI RMF: Risks and Trustworthiness",
          "sourceIds": [
            "N1",
            "N8",
            "N9",
            "E1",
            "E2",
            "E6"
          ],
          "hook": "The handover is where a good conversation becomes someone else’s work.",
          "title": "Make the whole decision inspectable",
          "elements": [
            "Separate supported benefit from hoped-for outcome",
            "Confirm scope, full cost, and relevant dependencies",
            "Check affected people’s capacity and approval",
            "Assign delivery, review, and a route for material changes"
          ],
          "ordered": false,
          "distractorElements": [
            "Treat a signed page as evidence that every promise is feasible"
          ],
          "ex": [
            {
              "facts": "A college pilot promises practice sessions, not hires; advisers approve time and a budget owner approves the total.",
              "result": "Document those commitments and the review conditions before delivery."
            }
          ],
          "terms": [
            "Handover"
          ],
          "quiz": [
            {
              "t": "tf",
              "q": "An authorized signature proves every future outcome claimed in the pitch.",
              "a": false,
              "why": "Authority to agree is distinct from evidence for an outcome and ability to deliver it."
            },
            {
              "t": "mcq",
              "q": "Which handover statement preserves uncertainty honestly?",
              "options": [
                "Interview sessions with guaranteed jobs once the pilot finishes.",
                "The pilot delivers practice sessions; later hiring outcomes remain uncertain",
                "Whatever outcomes the customer expects from the signed pilot."
              ],
              "a": "The pilot delivers practice sessions; later hiring outcomes remain uncertain",
              "why": "A clear delivery commitment should not be inflated into an unsupported outcome guarantee."
            }
          ],
          "boundary": true
        },
        {
          "id": "u12-term-4",
          "kind": "term",
          "say": "Connect the supported benefit to the actual scope, resources, authority, and next review before relying on the agreement.",
          "status": "practice",
          "src": "MIT Sloan: Seven keys to effective negotiation · Harvard PON: Set Your Contingent Contract Up for Success · Harvard Ombuds: Seven Elements of Effective Negotiations · Markkula Center: Framework for Ethical Decision Making · Markkula Center: Introduction to the framework · NIST AI RMF: Risks and Trustworthiness",
          "sourceIds": [
            "N1",
            "N8",
            "N9",
            "E1",
            "E2",
            "E6"
          ],
          "hook": "The handover is where a good conversation becomes someone else’s work.",
          "term": "Handover",
          "lang": "english",
          "meaning": "Passing the agreed work, its conditions, and responsibility to the people who will carry it out.",
          "use": "A delivery lead needs the actual promised scope and dependencies, not only the sales summary.",
          "boundary": true
        },
        {
          "id": "u12-h-boundary-1",
          "kind": "hypo",
          "say": "Proceed on the commitments and evidence you have, without claiming guaranteed outcomes.",
          "status": "fictional",
          "src": "MIT Sloan: Seven keys to effective negotiation · Harvard PON: Set Your Contingent Contract Up for Success · Harvard Ombuds: Seven Elements of Effective Negotiations · Markkula Center: Framework for Ethical Decision Making · Markkula Center: Introduction to the framework · NIST AI RMF: Risks and Trustworthiness",
          "sourceIds": [
            "N1",
            "N8",
            "N9",
            "E1",
            "E2",
            "E6"
          ],
          "hook": "Ethical scrutiny can support a well-specified yes.",
          "rule": "u12-r-4",
          "stem": "In a fictional college pilot, the written scope is two interview-practice sessions, not guaranteed hires. Advisers confirm paid capacity, participants can choose whether to join, and the budget owner approves the complete cost. A named lead accepts delivery and the agreed review date. No unresolved required approval is stated.",
          "call": "Is there a supported basis to proceed with this pilot under these facts?",
          "issue": "a feasible authorized pilot",
          "facts": [
            "two interview-practice sessions, not guaranteed hires",
            "Advisers confirm paid capacity, participants can choose whether to join, and the budget owner approves the complete cost",
            "A named lead accepts delivery and the agreed review date"
          ],
          "options": [
            {
              "text": "No, because uncertainty means no pilot can ever begin.",
              "why": "A pilot can proceed with explicit limits and authorized commitments without guaranteed outcomes.",
              "trap": 7
            },
            {
              "text": "Yes, because a signed buyer can waive every participant’s choice.",
              "why": "Buyer approval does not replace participant choice, which the scenario preserves.",
              "trap": 4
            },
            {
              "text": "No, because any paid pilot is necessarily manipulation.",
              "why": "Payment alone does not establish that claim.",
              "trap": 7
            },
            {
              "text": "Yes, because the stated scope, capacity, choice, and approvals are aligned.",
              "why": "The facts support proceeding with the defined pilot, while outcomes and future changes still require review."
            }
          ],
          "answer": 3,
          "transfer": false,
          "grid": true,
          "boundary": true
        },
        {
          "id": "u12-steps-boundary",
          "kind": "steps",
          "say": "A handover should connect the promise to the people and resources that make it real.",
          "status": "fictional",
          "src": "MIT Sloan: Seven keys to effective negotiation · Harvard PON: Set Your Contingent Contract Up for Success · Harvard Ombuds: Seven Elements of Effective Negotiations · Markkula Center: Framework for Ethical Decision Making · Markkula Center: Introduction to the framework · NIST AI RMF: Risks and Trustworthiness",
          "sourceIds": [
            "N1",
            "N8",
            "N9",
            "E1",
            "E2",
            "E6"
          ],
          "hook": "Use this routine before delivery; adapt when an urgent live error needs action.",
          "title": "Handover a pilot before delivery",
          "steps": [
            "Confirm the actual scope and unresolved assumptions",
            "Check resources, affected people, and decision authority",
            "Assign delivery and review responsibilities",
            "Share the agreed handover with the people who must act"
          ],
          "distractors": [
            "Convert an uncertain benefit into a guarantee",
            "Assign absent staff new unpaid work without checking"
          ],
          "applyTo": {
            "facts": "The scope and assumptions are clear, but the delivery team’s staffing and spending approval have not been checked.",
            "stop": "Check resources, affected people, and decision authority",
            "why": "The next check in this routine concerns whether the defined promise is resourced and authorized."
          },
          "boundary": true
        },
        {
          "id": "u12-h-boundary-transfer",
          "kind": "hypo",
          "say": "A late addition is a new commitment, not a free extension of an old yes.",
          "status": "fictional",
          "src": "MIT Sloan: Seven keys to effective negotiation · Harvard PON: Set Your Contingent Contract Up for Success · Harvard Ombuds: Seven Elements of Effective Negotiations · Markkula Center: Framework for Ethical Decision Making · Markkula Center: Introduction to the framework · NIST AI RMF: Risks and Trustworthiness",
          "sourceIds": [
            "N1",
            "N8",
            "N9",
            "E1",
            "E2",
            "E6"
          ],
          "hook": "Preserve the feasible plan while resolving the new request.",
          "rule": "u12-r-4",
          "stem": "In a fictional neighborhood workshop, the final handover adds an evening session that was absent from the approved scope. It requires extra staff time, but the staff have not agreed and the coordinator cannot authorize extra pay. The workshop can still run the originally approved daytime session.",
          "call": "What should happen before promising the extra evening session?",
          "issue": "a late unapproved burden",
          "facts": [
            "absent from the approved scope",
            "staff have not agreed and the coordinator cannot authorize extra pay",
            "originally approved daytime session"
          ],
          "options": [
            {
              "text": "Treat the original approval as covering every later addition.",
              "why": "The added time and pay were not part of the approved scope.",
              "trap": 2
            },
            {
              "text": "Check and authorize the addition or retain the approved scope.",
              "why": "The new burden needs a feasible authorized basis; the existing daytime option remains available."
            },
            {
              "text": "Cancel all daytime work because the extra session is unresolved.",
              "why": "The approved daytime option is still feasible under the stated facts.",
              "trap": 7
            },
            {
              "text": "Describe the extra shift as voluntary while requiring attendance.",
              "why": "The description would contradict the actual obligation.",
              "trap": 5
            }
          ],
          "answer": 1,
          "transfer": true,
          "grid": false,
          "boundary": true
        },
        {
          "id": "u12-trap-boundary",
          "kind": "trap",
          "say": "A successful payment is one result, not the whole evaluation.",
          "status": "fictional",
          "src": "MIT Sloan: Seven keys to effective negotiation · Harvard PON: Set Your Contingent Contract Up for Success · Harvard Ombuds: Seven Elements of Effective Negotiations · Markkula Center: Framework for Ethical Decision Making · Markkula Center: Introduction to the framework · NIST AI RMF: Risks and Trustworthiness",
          "sourceIds": [
            "N1",
            "N8",
            "N9",
            "E1",
            "E2",
            "E6"
          ],
          "hook": "Debrief the actions as well as the outcome.",
          "cat": "6",
          "stem": "A team celebrates high pilot revenue without checking the promised scope, participant access, or delivery complaints.",
          "wrong": "Revenue alone proves the pilot was well negotiated and ethically sound.",
          "right": "Review evidence, choice, burdens, and follow-through alongside the financial result.",
          "why": "The revenue answers a financial question but does not settle the quality of the process or commitments.",
          "boundary": true,
          "fixDistractors": [
            "Review only the revenue trend because complaints might reflect mere disappointment.",
            "Treat any complaint as proof that the entire pilot created no value."
          ]
        },
        {
          "id": "u12-sort-boundary",
          "kind": "sort",
          "say": "Match the next action to the kind of uncertainty you actually face.",
          "status": "fictional",
          "src": "MIT Sloan: Seven keys to effective negotiation · Harvard PON: Set Your Contingent Contract Up for Success · Harvard Ombuds: Seven Elements of Effective Negotiations · Markkula Center: Framework for Ethical Decision Making · Markkula Center: Introduction to the framework · NIST AI RMF: Risks and Trustworthiness",
          "sourceIds": [
            "N1",
            "N8",
            "N9",
            "E1",
            "E2",
            "E6"
          ],
          "hook": "More data, an approval, and a value discussion solve different problems.",
          "mode": "category",
          "q": "Classify the next review task in this fictional pilot handover.",
          "buckets": [
            "Check a factual basis",
            "Obtain an authorized commitment",
            "Discuss a value tradeoff"
          ],
          "items": [
            {
              "text": "Confirm whether the demo actually includes the promised reporting feature.",
              "bucket": "Check a factual basis",
              "why": "The capability claim needs evidence."
            },
            {
              "text": "Ask the budget owner to approve the proposed extra session.",
              "bucket": "Obtain an authorized commitment",
              "why": "The question concerns authority for new spending."
            },
            {
              "text": "Discuss whether scarce places should prioritize equal chances or greater need.",
              "bucket": "Discuss a value tradeoff",
              "why": "The parties are weighing different allocation priorities."
            },
            {
              "text": "Check whether advisers have the staff time the plan assumes.",
              "bucket": "Check a factual basis",
              "why": "Availability is a factual prerequisite; authorization for the work may also need a separate check."
            }
          ],
          "boundary": true
        }
      ]
    }
  ]
};
  if (typeof AGORA_UNITS !== "undefined") AGORA_UNITS.push(unit);
  if (typeof module !== "undefined") module.exports = unit;
})();
