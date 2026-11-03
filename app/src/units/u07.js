// Native Agora unit. Original scenarios migrated from reviewed JSON; added cases are fictional.
(function () {
  const unit = {
  "id": "u07",
  "title": "Handle power responsibly",
  "blurb": "Be firm, stay curious, and notice who can choose.",
  "subject": "power",
  "assume": "All scenarios and numbers are fictional. Apply the stated facts and goal; a sound decision may be agreement, investigation, pause, or no deal. Sources support principles, not predicted outcomes.",
  "lessons": [
    {
      "id": "u07l1",
      "title": "Firm without a bluff",
      "objective": "State honest limits while protecting confidential bargaining information.",
      "takeaway": "You can decline to reveal private information without making a false claim.",
      "fieldwork": "Write one truthful sentence that protects a private detail and one sentence that clearly states a real constraint. Discuss a reasonable alternative and what fact or value would change your recommendation; do not rate anyone’s character.",
      "items": [
        {
          "id": "u07-r-1",
          "kind": "rule",
          "say": "Keep private information private; distinguish a real constraint from a preference or a fabricated fact.",
          "status": "ethics",
          "src": "HBS Online: Understanding ZOPA · Markkula Center: Framework for Ethical Decision Making · Stanford Encyclopedia of Philosophy: Ethics of Manipulation · Stanford: How to be a better negotiator · FTC: Bringing Dark Patterns to Light (2022 examples) · MIT Sloan: Seven keys to effective negotiation",
          "sourceIds": [
            "N2",
            "E1",
            "E3",
            "N4",
            "E4",
            "N1"
          ],
          "hook": "A closed door needs a truthful label, not an invented lock.",
          "title": "A truthful boundary",
          "elements": [
            "State genuine limits accurately",
            "Name preferences as preferences",
            "Decline private disclosures without false claims",
            "Explain real deadlines and available alternatives"
          ],
          "ordered": false,
          "distractorElements": [
            "Invent an outside offer to protect a private limit"
          ],
          "ex": [
            {
              "facts": "A buyer asks for confidential customer prices.",
              "result": "Decline disclosure and explain the public price and scope."
            }
          ],
          "terms": [
            "Confidentiality"
          ],
          "quiz": [
            {
              "t": "tf",
              "q": "Honesty requires revealing every internal bargaining limit.",
              "a": false,
              "why": "A truthful refusal protects confidentiality without inventing facts."
            },
            {
              "t": "mcq",
              "q": "A negotiable term is your preference, not company policy. How should you describe it?",
              "options": [
                "Because company policy requires it",
                "As a clearly stated negotiable preference",
                "As another customer’s requirement"
              ],
              "a": "As a clearly stated negotiable preference",
              "why": "A firm preference can be stated honestly without giving it false authority."
            }
          ]
        },
        {
          "id": "u07-term-1",
          "kind": "term",
          "say": "Keep private information private; distinguish a real constraint from a preference or a fabricated fact.",
          "status": "ethics",
          "src": "HBS Online: Understanding ZOPA · Markkula Center: Framework for Ethical Decision Making · Stanford Encyclopedia of Philosophy: Ethics of Manipulation · Stanford: How to be a better negotiator · FTC: Bringing Dark Patterns to Light (2022 examples) · MIT Sloan: Seven keys to effective negotiation",
          "sourceIds": [
            "N2",
            "E1",
            "E3",
            "N4",
            "E4",
            "N1"
          ],
          "hook": "A closed door needs a truthful label, not an invented lock.",
          "term": "Confidentiality",
          "lang": "english",
          "meaning": "Keeping entrusted or legitimately private information within an appropriate audience.",
          "use": "Explain public terms while protecting another customer’s private agreement."
        },
        {
          "id": "u07-l1-decision1",
          "kind": "argue",
          "say": "Protect the information without inventing a story.",
          "status": "fictional",
          "src": "HBS Online: Understanding ZOPA · Markkula Center: Framework for Ethical Decision Making · Stanford Encyclopedia of Philosophy: Ethics of Manipulation",
          "sourceIds": [
            "N2",
            "E1",
            "E3"
          ],
          "hook": "Is this a truthful boundary, or a false explanation for the boundary?",
          "rule": "u07-r-1",
          "stem": "In a fictional supplier negotiation, a buyer asks for your private lowest acceptable price. You want to keep it private and continue discussing scope.",
          "call": "Which response does that honestly?",
          "issue": "truthful bargaining boundaries",
          "options": [
            {
              "text": "This is my lowest price, even though it is not.",
              "why": "It converts a private preference into a false factual statement.",
              "trap": 10
            },
            {
              "text": "I'll keep that private; let's discuss scope.",
              "why": "It protects the internal limit without misrepresenting facts and leaves room to discuss terms."
            },
            {
              "text": "Another buyer has offered more, even though none has.",
              "why": "It invents outside demand to influence the buyer's decision.",
              "trap": 3
            },
            {
              "text": "Our contract requires disclosure of my minimum, although it does not.",
              "why": "This invents an obligation and defeats the stated goal of truthful privacy.",
              "trap": 3
            }
          ],
          "answer": 1,
          "transfer": false
        },
        {
          "id": "u07-l1-sort2",
          "kind": "sort",
          "say": "Be clear about what is fixed, what you prefer, and what is private.",
          "status": "fictional",
          "src": "Stanford: How to be a better negotiator · Stanford Encyclopedia of Philosophy: Ethics of Manipulation",
          "sourceIds": [
            "N4",
            "E3"
          ],
          "hook": "Do not invent policy or authority to make a negotiable preference sound unavoidable.",
          "mode": "category",
          "q": "Classify these fictional statements using the facts supplied in each one.",
          "buckets": [
            "Truthful constraint or boundary",
            "Clearly stated preference",
            "False claim"
          ],
          "items": [
            {
              "text": "'I cannot approve that discount.' The speaker truly lacks that authority.",
              "bucket": "Truthful constraint or boundary",
              "why": "The statement accurately describes the speaker's authority."
            },
            {
              "text": "'I would prefer a twelve-month term, but can discuss a shorter one.'",
              "bucket": "Clearly stated preference",
              "why": "It states a preference without pretending it is mandatory."
            },
            {
              "text": "'Policy forbids monthly billing.' No such policy exists.",
              "bucket": "False claim",
              "why": "The speaker invents a rule to close discussion."
            },
            {
              "text": "'I am keeping our internal budget private.' The speaker does not disclose or misstate it.",
              "bucket": "Truthful constraint or boundary",
              "why": "A truthful refusal to disclose does not make up a fact."
            }
          ]
        },
        {
          "id": "u07-l1-decision3",
          "kind": "argue",
          "say": "Explain the real clock and the real choices.",
          "status": "fictional",
          "src": "Stanford Encyclopedia of Philosophy: Ethics of Manipulation · FTC: Bringing Dark Patterns to Light (2022 examples)",
          "sourceIds": [
            "E3",
            "E4"
          ],
          "hook": "Do not exaggerate the consequence of missing a deadline to force a quick yes.",
          "rule": "u07-r-1",
          "stem": "A fictional venue must release an unpaid room hold on Friday because another booking is pending. You cannot extend it, but the buyer can book a later date.",
          "call": "What is the clearest accurate message?",
          "issue": "truthful bargaining boundaries",
          "options": [
            {
              "text": "Book Friday or you will never get another room.",
              "why": "It expands a real deadline into a false claim about all future availability.",
              "trap": 10
            },
            {
              "text": "I can hold this indefinitely if you are serious.",
              "why": "It promises flexibility the speaker does not have.",
              "trap": 3
            },
            {
              "text": "This hold ends Friday; later dates remain.",
              "why": "It states the actual consequence and preserves a real alternative without manufacturing pressure."
            },
            {
              "text": "This room is guaranteed next week if you decline today.",
              "why": "Later dates exist, but a particular room next week has not been guaranteed.",
              "trap": 3
            }
          ],
          "answer": 2,
          "transfer": false
        },
        {
          "id": "u07-l1-decision4",
          "kind": "hypo",
          "say": "Explain your proposal without exposing someone else's private deal.",
          "status": "fictional",
          "src": "Markkula Center: Framework for Ethical Decision Making · Stanford Encyclopedia of Philosophy: Ethics of Manipulation · MIT Sloan: Seven keys to effective negotiation",
          "sourceIds": [
            "E1",
            "E3",
            "N1"
          ],
          "hook": "Your counterpart's curiosity does not remove another customer's confidentiality.",
          "rule": "u07-r-1",
          "stem": "A fictional buyer asks what a named competitor pays you. Those terms are confidential. You can share public pricing and explain volume-based cost differences.",
          "call": "What response best supports a useful comparison?",
          "issue": "truthful bargaining boundaries",
          "options": [
            {
              "text": "Explain public pricing; keep client terms private.",
              "why": "It protects confidentiality and offers a relevant basis for evaluating this proposal."
            },
            {
              "text": "Say the competitor pays more, without checking or permission.",
              "why": "It asserts a potentially false and confidential comparison to influence the buyer.",
              "trap": 10
            },
            {
              "text": "Reveal the competitor's terms to prove transparency.",
              "why": "Transparency about this offer does not authorize disclosing another party's private agreement.",
              "trap": 6
            },
            {
              "text": "Give a made-up range for that competitor instead.",
              "why": "An invented range still misleads and does not become honest by being approximate.",
              "trap": 3
            }
          ],
          "answer": 0,
          "transfer": true,
          "facts": [
            "Those terms are confidential",
            "share public pricing"
          ]
        },
        {
          "id": "u07-h-contrast-1",
          "kind": "hypo",
          "say": "Check whose information it is and who is authorized to receive it.",
          "status": "fictional",
          "src": "HBS Online: Understanding ZOPA · Markkula Center: Framework for Ethical Decision Making · Stanford Encyclopedia of Philosophy: Ethics of Manipulation · Stanford: How to be a better negotiator · FTC: Bringing Dark Patterns to Light (2022 examples) · MIT Sloan: Seven keys to effective negotiation",
          "sourceIds": [
            "N2",
            "E1",
            "E3",
            "N4",
            "E4",
            "N1"
          ],
          "hook": "Change the audience, and the appropriate disclosure can change.",
          "rule": "u07-r-1",
          "stem": "In this fictional renewal, a customer asks what they themselves paid last year. Their authorized account contact is entitled to that invoice, and you have the verified record. No other customer’s information is included.",
          "call": "Which response best supports this comparison?",
          "issue": "authorized disclosure",
          "facts": [
            "entitled to that invoice",
            "verified record"
          ],
          "options": [
            {
              "text": "Refuse because all price information must remain secret.",
              "why": "Confidentiality does not bar sharing this customer’s record with its authorized contact.",
              "trap": 7
            },
            {
              "text": "Send the verified invoice through the approved channel.",
              "why": "The audience is authorized and the record is relevant to their own comparison."
            },
            {
              "text": "Send other customers’ invoices to make the comparison richer.",
              "why": "Authorization for this account does not extend to other customers.",
              "trap": 2
            },
            {
              "text": "Quote a higher prior price to protect this year’s increase.",
              "why": "That substitutes an invented number for the verified record.",
              "trap": 3
            }
          ],
          "answer": 1,
          "transfer": false,
          "grid": false,
          "boundary": true
        }
      ]
    },
    {
      "id": "u07l2",
      "title": "The difficult conversation",
      "objective": "Separate observations from interpretations and open a conversation without pretending away responsibility.",
      "takeaway": "Name what happened and its impact, then check what you do not yet understand.",
      "fieldwork": "For a minor disagreement, privately rewrite one accusation as an observation, an impact, and a question. Discuss a reasonable alternative and what fact or value would change your recommendation; do not rate anyone’s character.",
      "items": [
        {
          "id": "u07-r-2",
          "kind": "rule",
          "say": "Name the event and impact, check your interpretation, then discuss a feasible next step.",
          "status": "practice",
          "src": "Harvard PON: Telling the Third Story · Harvard Ombuds: Seven Elements of Effective Negotiations · Markkula Center: Framework for Ethical Decision Making",
          "sourceIds": [
            "N7",
            "N9",
            "E1"
          ],
          "hook": "A late handoff tells you when something arrived, not what someone believes.",
          "title": "An opening grounded in events",
          "elements": [
            "Describe a checkable event",
            "Name the relevant impact",
            "Treat inferred motives as uncertain",
            "Use new information to revise the next commitment"
          ],
          "ordered": false,
          "distractorElements": [
            "Assign equal blame regardless of the record"
          ],
          "ex": [
            {
              "facts": "The log shows added scope after the agreed date.",
              "result": "Acknowledge the change and revisit work or timing."
            }
          ],
          "terms": [
            "Interpretation"
          ],
          "quiz": [
            {
              "t": "tf",
              "q": "A calm opening requires assigning equal fault to both sides.",
              "a": false,
              "why": "Tone does not justify a responsibility claim unsupported by the evidence."
            },
            {
              "t": "mcq",
              "q": "The record confirms a late handoff and a moved review, but says nothing about intent. What remains unknown?",
              "options": [
                "Whether the recorded delivery was late",
                "Whether the review date was moved",
                "Why the contributor acted"
              ],
              "a": "Why the contributor acted",
              "why": "The impact can be documented while the motive remains unknown."
            }
          ],
          "exceptions": [
            "A calm account does not require equal blame when the evidence shows a different distribution of responsibility."
          ]
        },
        {
          "id": "u07-term-2",
          "kind": "term",
          "say": "Name the event and impact, check your interpretation, then discuss a feasible next step.",
          "status": "practice",
          "src": "Harvard PON: Telling the Third Story · Harvard Ombuds: Seven Elements of Effective Negotiations · Markkula Center: Framework for Ethical Decision Making",
          "sourceIds": [
            "N7",
            "N9",
            "E1"
          ],
          "hook": "A late handoff tells you when something arrived, not what someone believes.",
          "term": "Interpretation",
          "lang": "english",
          "meaning": "An explanation or meaning assigned to an event, which may need checking.",
          "use": "Separate “arrived Wednesday” from “they do not care.”"
        },
        {
          "id": "u07-l2-decision1",
          "kind": "argue",
          "say": "Describe the event before deciding what it says about the person.",
          "status": "fictional",
          "src": "Harvard PON: Telling the Third Story · Harvard Ombuds: Seven Elements of Effective Negotiations",
          "sourceIds": [
            "N7",
            "N9"
          ],
          "hook": "Curiosity about intent must not hide a documented impact.",
          "rule": "u07-r-2",
          "stem": "In a fictional team, two handoffs arrived a day after their agreed dates, forcing you to reschedule review. You want to understand the cause and improve the next handoff.",
          "call": "Which opening best serves that goal?",
          "issue": "events impact and interpretation",
          "options": [
            {
              "text": "You clearly do not care about our launch.",
              "why": "It treats an unverified judgment about intent as a fact.",
              "trap": 3
            },
            {
              "text": "Both handoffs were late. What changed?",
              "why": "It names the concrete issue and asks for information that can inform the next agreement."
            },
            {
              "text": "Let's forget the dates so nobody feels blamed.",
              "why": "It avoids a relevant problem instead of helping both people understand and address it.",
              "trap": 10
            },
            {
              "text": "I will replace the handoff dates with my own without discussion.",
              "why": "A unilateral replacement does not investigate the cause or establish a workable shared commitment.",
              "trap": 10
            }
          ],
          "answer": 1,
          "transfer": false
        },
        {
          "id": "u07-l2-sort2",
          "kind": "sort",
          "say": "Keep the event, your interpretation, and the effect distinct.",
          "status": "fictional",
          "src": "Harvard PON: Telling the Third Story · Harvard Ombuds: Seven Elements of Effective Negotiations",
          "sourceIds": [
            "N7",
            "N9"
          ],
          "hook": "An interpretation needs checking even when the resulting inconvenience is real.",
          "mode": "category",
          "q": "In this fictional project, the agreed handoff was Monday; a shared record confirms Wednesday delivery, and review moved to Thursday. Sort the statements.",
          "buckets": [
            "Observation",
            "Interpretation",
            "Impact"
          ],
          "items": [
            {
              "text": "Delivery happened Wednesday rather than the agreed Monday.",
              "bucket": "Observation",
              "why": "The supplied record establishes the timing."
            },
            {
              "text": "The contributor thought our project did not matter.",
              "bucket": "Interpretation",
              "why": "The contributor's belief is not established by the delivery dates."
            },
            {
              "text": "Our review had to move to Thursday.",
              "bucket": "Impact",
              "why": "This is the stated consequence for the review process."
            },
            {
              "text": "The late handoff proves this contributor is unreliable in every project.",
              "bucket": "Interpretation",
              "why": "This generalizes from an event to an unverified claim about the person across other projects."
            }
          ]
        },
        {
          "id": "u07-l2-decision3",
          "kind": "argue",
          "say": "A workable conversation needs room for evidence and boundaries.",
          "status": "fictional",
          "src": "Harvard PON: Telling the Third Story · Markkula Center: Framework for Ethical Decision Making",
          "sourceIds": [
            "N7",
            "E1"
          ],
          "hook": "Do not ask someone to accept equal responsibility merely to keep the tone calm.",
          "rule": "u07-r-2",
          "stem": "In a fictional project dispute, the shared log confirms that a manager added work after the deadline was agreed. Nobody is threatening anyone, and both can revise the plan.",
          "call": "What should the next discussion focus on?",
          "issue": "events impact and interpretation",
          "options": [
            {
              "text": "Say both sides caused the delay equally to sound neutral.",
              "why": "A calm tone does not justify inventing an equal distribution of responsibility.",
              "trap": 3
            },
            {
              "text": "Ignore the scope change and demand the original date.",
              "why": "The established change is relevant to feasibility and needs to be addressed.",
              "trap": 10
            },
            {
              "text": "Acknowledge the added work and renegotiate scope or timing.",
              "why": "It uses the evidence to repair the agreement without adding an unsupported judgment about intent."
            },
            {
              "text": "Keep the extra scope but describe the old date as aspirational.",
              "why": "Relabeling the date does not establish a feasible plan or obtain agreement to the change.",
              "trap": 2
            }
          ],
          "answer": 2,
          "transfer": false
        },
        {
          "id": "u07-l2-decision4",
          "kind": "hypo",
          "say": "Name the problem and leave room for information you do not have.",
          "status": "fictional",
          "src": "Harvard PON: Telling the Third Story · Harvard Ombuds: Seven Elements of Effective Negotiations",
          "sourceIds": [
            "N7",
            "N9"
          ],
          "hook": "A need for cooperation does not justify assigning an unverified motive.",
          "rule": "u07-r-2",
          "stem": "In a fictional volunteer group, the equipment box was missing at two sessions and setup started late. You do not know why. You want a dependable arrangement for next week.",
          "call": "Which opening best fits?",
          "issue": "events impact and interpretation",
          "options": [
            {
              "text": "The box was missing twice and setup ran late; what happened?",
              "why": "It describes the known issue and invites information before choosing a new arrangement."
            },
            {
              "text": "You are making us late because this is unpaid work.",
              "why": "It assumes a motive that the facts do not establish.",
              "trap": 3
            },
            {
              "text": "I will quietly bring everything forever so we avoid tension.",
              "why": "This may hide the problem and creates an indefinite commitment without checking its feasibility.",
              "trap": 10
            },
            {
              "text": "Tell the group the equipment lead has lost interest.",
              "why": "The missing box does not establish that motive.",
              "trap": 3
            }
          ],
          "answer": 0,
          "transfer": true,
          "facts": [
            "equipment box was missing at two sessions",
            "You do not know why"
          ]
        },
        {
          "id": "u07-h-contrast-2",
          "kind": "hypo",
          "say": "Update the description when the shared record changes.",
          "status": "fictional",
          "src": "Harvard PON: Telling the Third Story · Harvard Ombuds: Seven Elements of Effective Negotiations · Markkula Center: Framework for Ethical Decision Making",
          "sourceIds": [
            "N7",
            "N9",
            "E1"
          ],
          "hook": "Checking the record can change the problem you need to solve.",
          "rule": "u07-r-2",
          "stem": "In a fictional project, you thought a handoff was late. Before the meeting, both parties find a signed change moving the deadline to Wednesday. The work arrived Wednesday, although your review calendar still showed Monday.",
          "call": "How should you open the discussion now?",
          "issue": "correcting an interpretation",
          "facts": [
            "signed change moving the deadline to Wednesday",
            "work arrived Wednesday"
          ],
          "options": [
            {
              "text": "Keep the accusation because your calendar still said Monday.",
              "why": "Your outdated calendar does not override the agreed change.",
              "trap": 4
            },
            {
              "text": "Say both parties missed the deadline equally.",
              "why": "The work met the revised deadline; equal blame invents a failure.",
              "trap": 3
            },
            {
              "text": "Correct the late claim and reconcile the calendars.",
              "why": "The new record changes the factual basis; the coordination issue still needs repair."
            },
            {
              "text": "Avoid discussing the mismatch because no delivery was late.",
              "why": "The conflicting calendars can still cause future coordination problems.",
              "trap": 9
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
      "id": "u07l3",
      "title": "Who gets a voice?",
      "objective": "Recognize power differences and use relevant fairness criteria without assuming fairness means equal division.",
      "takeaway": "Check who can understand, refuse, and bear the cost of an agreement.",
      "fieldwork": "For a proposed agreement, name one affected person who is not at the table and one practical way to learn their needs. Discuss a reasonable alternative and what fact or value would change your recommendation; do not rate anyone’s character.",
      "items": [
        {
          "id": "u07-r-3",
          "kind": "rule",
          "say": "Check access, authority, workload, and the fairness criterion before treating two signatures as enough.",
          "status": "ethics",
          "src": "Stanford: How to be a better negotiator · Markkula Center: Framework for Ethical Decision Making · Stanford Encyclopedia of Philosophy: Ethics of Manipulation · Markkula Center: Introduction to the framework · MIT Sloan: Seven keys to effective negotiation",
          "sourceIds": [
            "N4",
            "E1",
            "E3",
            "E2",
            "N1"
          ],
          "hook": "The person signing the plan may not be the person carrying the boxes.",
          "title": "A process people can use",
          "elements": [
            "Identify affected people beyond the signatories",
            "Remove feasible barriers to understanding and participation",
            "Check delivery authority and resources",
            "Name the criterion behind a proposed allocation"
          ],
          "ordered": false,
          "distractorElements": [
            "Treat equal shares as the only defensible allocation"
          ],
          "ex": [
            {
              "facts": "Two teams choose cost shares by places booked: 30 and 10.",
              "result": "Their stated criterion produces 75% and 25%, not a universal fairness verdict."
            }
          ],
          "terms": [
            "Process fairness"
          ],
          "quiz": [
            {
              "t": "tf",
              "q": "Two willing signatories establish that no absent person bears a burden.",
              "a": false,
              "why": "The agreement can still depend on staff or participants who were not represented."
            },
            {
              "t": "mcq",
              "q": "Which question tests a fairness criterion rather than merely defending your preferred result?",
              "options": [
                "Can everyone accept the particular split we prefer?",
                "Would we use the same relevant criterion in reverse?",
                "Did both sides receive exactly the same amount?"
              ],
              "a": "Would we use the same relevant criterion in reverse?",
              "why": "A relevant criterion should be explainable and open to consistent application."
            }
          ]
        },
        {
          "id": "u07-term-3",
          "kind": "term",
          "say": "Check access, authority, workload, and the fairness criterion before treating two signatures as enough.",
          "status": "ethics",
          "src": "Stanford: How to be a better negotiator · Markkula Center: Framework for Ethical Decision Making · Stanford Encyclopedia of Philosophy: Ethics of Manipulation · Markkula Center: Introduction to the framework · MIT Sloan: Seven keys to effective negotiation",
          "sourceIds": [
            "N4",
            "E1",
            "E3",
            "E2",
            "N1"
          ],
          "hook": "The person signing the plan may not be the person carrying the boxes.",
          "term": "Process fairness",
          "lang": "english",
          "meaning": "The defensibility of how a decision is made, including access, voice, and review.",
          "use": "Written terms and time to read improve process without requiring agreement on price."
        },
        {
          "id": "u07-l3-decision1",
          "kind": "argue",
          "say": "A firm offer can still leave room for an informed decision.",
          "status": "fictional",
          "src": "Stanford: How to be a better negotiator · Markkula Center: Framework for Ethical Decision Making · Stanford Encyclopedia of Philosophy: Ethics of Manipulation",
          "sourceIds": [
            "N4",
            "E1",
            "E3"
          ],
          "hook": "Is a preventable process barrier keeping the other person from understanding the offer?",
          "rule": "u07-r-3",
          "stem": "A fictional agency has a genuine fixed budget and no deadline today. A first-time freelancer asks for the terms in writing and a day to review. The agency wants an informed decision without changing its budget.",
          "call": "What best fits?",
          "issue": "voice and fair process",
          "options": [
            {
              "text": "Require an immediate signature to test commitment.",
              "why": "It adds avoidable pressure when no immediate deadline exists.",
              "trap": 10
            },
            {
              "text": "Automatically double the budget to equalize power.",
              "why": "The stated objective does not require changing the budget, and that may not be feasible.",
              "trap": 6
            },
            {
              "text": "Provide the written terms and a day to review.",
              "why": "This removes a practical information and time barrier while preserving the real budget limit."
            },
            {
              "text": "Keep the terms verbal but promise that the price is fair.",
              "why": "A reassurance does not supply the written information or review time requested.",
              "trap": 9
            }
          ],
          "answer": 2,
          "transfer": false
        },
        {
          "id": "u07-l3-decision2",
          "kind": "argue",
          "say": "Explain the fairness criterion, not just the final split.",
          "status": "fictional",
          "src": "Markkula Center: Framework for Ethical Decision Making · Markkula Center: Introduction to the framework · MIT Sloan: Seven keys to effective negotiation",
          "sourceIds": [
            "E1",
            "E2",
            "N1"
          ],
          "hook": "Would you apply the same relevant criterion when it favored the other party?",
          "rule": "u07-r-3",
          "stem": "In a fictional shared event, two teams agree in advance to split delivery costs by booked places. One books 30 places and the other 10; no other costs differ.",
          "call": "Which statement accurately applies their chosen criterion?",
          "issue": "voice and fair process",
          "options": [
            {
              "text": "An equal split is the only possible fair outcome.",
              "why": "Equal division is a possible criterion, but it is not the one the parties chose here.",
              "trap": 10
            },
            {
              "text": "A 75%–25% split follows their agreed usage criterion.",
              "why": "Thirty of forty places is 75%; ten is 25%. This applies the criterion without claiming it is universally best."
            },
            {
              "text": "The team with 30 places must pay everything.",
              "why": "Using more places does not mean using all of them or assuming every cost.",
              "trap": 3
            },
            {
              "text": "Use a 30%–10% split and leave the rest unallocated.",
              "why": "Those are place counts treated as percentages; together they cover only 40% of the cost.",
              "trap": 5
            }
          ],
          "answer": 1,
          "transfer": false
        },
        {
          "id": "u07-l3-match3",
          "kind": "pairs",
          "say": "Ask whose work or choices this agreement changes.",
          "status": "fictional",
          "src": "MIT Sloan: Seven keys to effective negotiation · Markkula Center: Framework for Ethical Decision Making",
          "sourceIds": [
            "N1",
            "E1"
          ],
          "hook": "Do not let two signatures erase the needs of people who were absent.",
          "set": "Look outside the table",
          "mode": "concept",
          "pairs": [
            {
              "l": "Budget approver",
              "r": "Can this spending commitment be authorized?"
            },
            {
              "l": "Workshop facilitators",
              "r": "Can the promised sessions be delivered?"
            },
            {
              "l": "Student participants",
              "r": "Can they use the format and choose whether to join?"
            },
            {
              "l": "Advisers assigned extra follow-up",
              "r": "What workload will this agreement add?"
            }
          ]
        },
        {
          "id": "u07-l3-decision4",
          "kind": "hypo",
          "say": "Two satisfied negotiators can still miss an affected group.",
          "status": "fictional",
          "src": "MIT Sloan: Seven keys to effective negotiation · Markkula Center: Framework for Ethical Decision Making",
          "sourceIds": [
            "N1",
            "E1"
          ],
          "hook": "Who has to make this work without having agreed to the added obligation?",
          "rule": "u07-r-3",
          "stem": "In a fictional partnership, a provider and college director agree that evening workshops are convenient. They require advisers to attend unpaid, but no one has checked advisers' availability or approval.",
          "call": "What is the most useful step before commitment?",
          "issue": "voice and fair process",
          "options": [
            {
              "text": "Check adviser workload, availability, and authorized staffing.",
              "why": "This examines the people and resources needed to make the proposal work before relying on their labor."
            },
            {
              "text": "Sign now because the two decision-makers agree.",
              "why": "Agreement between the signatories does not establish the feasibility or fairness of the staffing arrangement.",
              "trap": 6
            },
            {
              "text": "Assume an equal fee split makes every burden fair.",
              "why": "How fees are split does not resolve an unexamined workload imposed on others.",
              "trap": 6
            },
            {
              "text": "Ask the provider to certify that advisers will be happy.",
              "why": "The provider cannot substitute its prediction for checking advisers’ workload and availability.",
              "trap": 3
            }
          ],
          "answer": 0,
          "transfer": true,
          "facts": [
            "require advisers to attend unpaid",
            "no one has checked advisers' availability or approval"
          ]
        },
        {
          "id": "u07-h-contrast-3",
          "kind": "hypo",
          "say": "Reassess a concern when the facts that supported it change.",
          "status": "fictional",
          "src": "Stanford: How to be a better negotiator · Markkula Center: Framework for Ethical Decision Making · Stanford Encyclopedia of Philosophy: Ethics of Manipulation · Markkula Center: Introduction to the framework · MIT Sloan: Seven keys to effective negotiation",
          "sourceIds": [
            "N4",
            "E1",
            "E3",
            "E2",
            "N1"
          ],
          "hook": "A stakeholder check can clear a workable plan as well as reveal a problem.",
          "rule": "u07-r-3",
          "stem": "In this fictional partnership, advisers now confirm that the proposed evening sessions fit their paid schedules. Their manager has authorized the staffing. Students can choose an accessible daytime alternative, and both formats meet the agreed learning purpose.",
          "call": "What does this new information justify?",
          "issue": "checking a repaired burden",
          "facts": [
            "fit their paid schedules",
            "authorized the staffing",
            "accessible daytime alternative"
          ],
          "options": [
            {
              "text": "Proceed to confirm the remaining scope and commitments.",
              "why": "The previously identified staffing and access gaps are addressed; other terms still need confirmation."
            },
            {
              "text": "Reject every evening session as inherently unfair.",
              "why": "The relevant burdens have changed; the time of day alone does not decide fairness.",
              "trap": 7
            },
            {
              "text": "Announce that the whole agreement is ethically perfect.",
              "why": "These facts resolve specific concerns, not every possible ethical question.",
              "trap": 7
            },
            {
              "text": "Remove the daytime option because advisers have approved staffing.",
              "why": "Staff approval does not remove the students’ separate access interest.",
              "trap": 4
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
      "id": "u07l4",
      "title": "Pause, support, return",
      "objective": "Distinguish hard bargaining from a stated threat, use a support route, and define conditions for resuming.",
      "takeaway": "A pause can protect judgment; returning needs a reason, not a test of courage.",
      "fieldwork": "With a willing partner, compare a firm price limit and a threat. Discuss which support or pause you would choose and what would make return acceptable; do not rank either person’s courage.",
      "items": [
        {
          "id": "u07-r-4",
          "kind": "rule",
          "say": "A firm term can be discussed; a threat may require a pause and an appropriate support route.",
          "status": "ethics",
          "src": "Harvard PON: Telling the Third Story · Harvard Ombuds: Seven Elements of Effective Negotiations · Markkula Center: Framework for Ethical Decision Making · Stanford Encyclopedia of Philosophy: Ethics of Manipulation",
          "sourceIds": [
            "N7",
            "N9",
            "E1",
            "E3"
          ],
          "hook": "You do not owe a live negotiation to prove that you can negotiate.",
          "title": "Boundaries when pressure changes",
          "elements": [
            "Distinguish a commercial limit from a threat",
            "Protect time and space for a considered decision",
            "Use an available authorized support route",
            "Agree conditions before resuming if you choose to return"
          ],
          "ordered": false,
          "distractorElements": [
            "Treat enduring threats as proof of negotiating skill"
          ],
          "ex": [
            {
              "facts": "A buyer threatens to publish private messages unless a discount is given.",
              "result": "Pause rather than exchange the discount for silence; use the available support route."
            }
          ],
          "terms": [
            "Boundary"
          ],
          "quiz": [
            {
              "t": "tf",
              "q": "Every disappointing price is a threat that requires escalation.",
              "a": false,
              "why": "A genuine price limit is a substantive disagreement; assess the actual conduct."
            },
            {
              "t": "mcq",
              "q": "What can make a later return more workable?",
              "options": [
                "A requirement to accept the earlier price",
                "An agreement to ignore the recorded conduct",
                "An agreed channel and boundaries"
              ],
              "a": "An agreed channel and boundaries",
              "why": "Conditions for the process matter independently of the eventual price."
            }
          ],
          "boundary": true
        },
        {
          "id": "u07-term-4",
          "kind": "term",
          "say": "A firm term can be discussed; a threat may require a pause and an appropriate support route.",
          "status": "ethics",
          "src": "Harvard PON: Telling the Third Story · Harvard Ombuds: Seven Elements of Effective Negotiations · Markkula Center: Framework for Ethical Decision Making · Stanford Encyclopedia of Philosophy: Ethics of Manipulation",
          "sourceIds": [
            "N7",
            "N9",
            "E1",
            "E3"
          ],
          "hook": "You do not owe a live negotiation to prove that you can negotiate.",
          "term": "Boundary",
          "lang": "english",
          "meaning": "A limit on what you will participate in or authorize.",
          "use": "You may pause an abusive call while leaving a written proposal open for later review.",
          "boundary": true
        },
        {
          "id": "u07-h-boundary-1",
          "kind": "hypo",
          "say": "An explicit threat changes the process, not just the price.",
          "status": "fictional",
          "src": "Harvard PON: Telling the Third Story · Harvard Ombuds: Seven Elements of Effective Negotiations · Markkula Center: Framework for Ethical Decision Making · Stanford Encyclopedia of Philosophy: Ethics of Manipulation",
          "sourceIds": [
            "N7",
            "N9",
            "E1",
            "E3"
          ],
          "hook": "Pause is an available action, not a verdict on your courage.",
          "rule": "u07-r-4",
          "stem": "In a fictional supplier call, the buyer threatens to publish the freelancer’s private messages unless the price is cut. The freelancer has an available association adviser and can pause the call without an immediate physical danger. No decision is required today.",
          "call": "Should the freelancer continue bargaining on the call now?",
          "issue": "responding to an explicit threat",
          "facts": [
            "threatens to publish",
            "can pause the call",
            "No decision is required today"
          ],
          "options": [
            {
              "text": "Yes, because any discount would resolve the underlying conduct.",
              "why": "A lower price does not establish that the threatening conduct is resolved.",
              "trap": 3
            },
            {
              "text": "No, because a pause and available support protect a considered response.",
              "why": "The stated threat changes the process; a pause and appropriate support are available."
            },
            {
              "text": "Yes, because experienced negotiators must tolerate personal threats.",
              "why": "Skill does not require accepting that conduct.",
              "trap": 5
            },
            {
              "text": "No, because every difficult buyer must be permanently excluded.",
              "why": "A permanent ban on every difficult buyer exceeds the facts and the immediate question.",
              "trap": 7
            }
          ],
          "answer": 1,
          "transfer": false,
          "grid": true,
          "boundary": true
        },
        {
          "id": "u07-sort-boundary",
          "kind": "sort",
          "say": "Classify the actual conduct before choosing a response.",
          "status": "fictional",
          "src": "Harvard PON: Telling the Third Story · Harvard Ombuds: Seven Elements of Effective Negotiations · Markkula Center: Framework for Ethical Decision Making · Stanford Encyclopedia of Philosophy: Ethics of Manipulation",
          "sourceIds": [
            "N7",
            "N9",
            "E1",
            "E3"
          ],
          "hook": "Unwelcome terms and retaliation call for different analysis.",
          "mode": "category",
          "q": "Classify the conduct explicitly described in these fictional negotiations.",
          "buckets": [
            "Substantive bargaining limit",
            "Process pressure requiring a response"
          ],
          "items": [
            {
              "text": "The buyer truthfully cannot approve a price above the stated budget.",
              "bucket": "Substantive bargaining limit",
              "why": "A real approval limit does not itself threaten retaliation."
            },
            {
              "text": "The buyer threatens to disclose private messages unless the seller agrees.",
              "bucket": "Process pressure requiring a response",
              "why": "Disclosure is used as a retaliatory lever."
            },
            {
              "text": "The venue truthfully offers only a later date after its booking closes.",
              "bucket": "Substantive bargaining limit",
              "why": "The stated availability constrains the offer without inventing consequences."
            },
            {
              "text": "The manager threatens unrelated punishment for requesting the written terms.",
              "bucket": "Process pressure requiring a response",
              "why": "The threat targets participation in an informed process."
            }
          ],
          "boundary": true
        },
        {
          "id": "u07-h-boundary-transfer",
          "kind": "hypo",
          "say": "A usable process leaves room for an informed no.",
          "status": "fictional",
          "src": "Harvard PON: Telling the Third Story · Harvard Ombuds: Seven Elements of Effective Negotiations · Markkula Center: Framework for Ethical Decision Making · Stanford Encyclopedia of Philosophy: Ethics of Manipulation",
          "sourceIds": [
            "N7",
            "N9",
            "E1",
            "E3"
          ],
          "hook": "Change the threat to a genuine limit, and the next action changes.",
          "rule": "u07-r-4",
          "stem": "In a fictional job negotiation, an employer says the posted salary is its approved maximum. It supplies written terms and gives the candidate the requested review time. The candidate dislikes the salary, but no threats, false claims, or hidden terms are stated.",
          "call": "Which next step best fits these facts?",
          "issue": "firm terms without a threat",
          "facts": [
            "approved maximum",
            "requested review time",
            "no threats"
          ],
          "options": [
            {
              "text": "Accuse the employer of retaliation because the salary is low.",
              "why": "Disliking a term does not establish retaliation.",
              "trap": 3
            },
            {
              "text": "Accept because a fair process guarantees good terms.",
              "why": "A usable process does not make the package fit the candidate.",
              "trap": 5
            },
            {
              "text": "Compare the package with the candidate’s needs and alternatives.",
              "why": "The remaining problem is whether the actual package is acceptable."
            },
            {
              "text": "Demand confidential staff salaries before evaluating the offer.",
              "why": "That disclosure is not established as needed or authorized for this decision.",
              "trap": 10
            }
          ],
          "answer": 2,
          "transfer": true,
          "grid": false,
          "boundary": true
        },
        {
          "id": "u07-trap-boundary",
          "kind": "trap",
          "say": "No is an answer to assess, not a diagnosis of character.",
          "status": "fictional",
          "src": "Harvard PON: Telling the Third Story · Harvard Ombuds: Seven Elements of Effective Negotiations · Markkula Center: Framework for Ethical Decision Making · Stanford Encyclopedia of Philosophy: Ethics of Manipulation",
          "sourceIds": [
            "N7",
            "N9",
            "E1",
            "E3"
          ],
          "hook": "Look at what happened, not just whether you liked it.",
          "cat": "7",
          "stem": "After a tense but nonthreatening price discussion, a colleague proposes never negotiating with anyone who says no.",
          "wrong": "A refusal proves the other party cannot negotiate ethically.",
          "right": "A refusal can express a legitimate limit; inspect the conduct and the stated reasons.",
          "why": "An outcome alone does not establish dishonesty or coercion.",
          "boundary": true,
          "fixDistractors": [
            "Treat the refusal as proof that your own offer is objectively fair.",
            "Ignore the stated limit until the other party agrees to meet halfway."
          ]
        },
        {
          "id": "u07-steps-boundary",
          "kind": "steps",
          "say": "Pause, record, seek support, then decide whether to return.",
          "status": "fictional",
          "src": "Harvard PON: Telling the Third Story · Harvard Ombuds: Seven Elements of Effective Negotiations · Markkula Center: Framework for Ethical Decision Making · Stanford Encyclopedia of Philosophy: Ethics of Manipulation",
          "sourceIds": [
            "N7",
            "N9",
            "E1",
            "E3"
          ],
          "hook": "This is a nonurgent routine; immediate danger calls for immediate protection.",
          "title": "A chosen pause: one workable routine",
          "steps": [
            "State that you are pausing the conversation",
            "Record the relevant facts without guessing motives",
            "Use the available appropriate support channel",
            "Decide whether conditions support a return"
          ],
          "distractors": [
            "Promise a concession in exchange for silence",
            "Announce that accepting help proves weakness"
          ],
          "applyTo": {
            "facts": "A colleague has already paused an upsetting call and written down the exact threat; an authorized adviser is available.",
            "stop": "Use the available appropriate support channel",
            "why": "The pause and factual record are complete; seeking available advice is the next step in this routine."
          },
          "boundary": true
        }
      ]
    }
  ]
};
  if (typeof AGORA_UNITS !== "undefined") AGORA_UNITS.push(unit);
  if (typeof module !== "undefined") module.exports = unit;
})();
