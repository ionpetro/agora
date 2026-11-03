// Native Agora unit. Original scenarios migrated from reviewed JSON; added cases are fictional.
(function () {
  const unit = {
  "id": "u09",
  "title": "Persuade with care",
  "blurb": "Make the case. Leave room to choose.",
  "subject": "persuasion",
  "assume": "All scenarios and numbers are fictional. Apply the stated facts and goal; a sound decision may be agreement, investigation, pause, or no deal. Sources support principles, not predicted outcomes.",
  "lessons": [
    {
      "id": "u09l1",
      "title": "Stories with room to think",
      "objective": "Distinguish a relevant emotional appeal from pressure that bypasses a considered choice.",
      "takeaway": "A story can make a reason vivid; it cannot replace the evidence.",
      "fieldwork": "With a willing partner, tell a short product story and ask what claim they inferred. Correct any inference your evidence cannot support. Discuss a reasonable alternative and what fact or value would change your recommendation; do not rate anyone’s character.",
      "items": [
        {
          "id": "u09-r-1",
          "kind": "rule",
          "say": "Use relevant emotion with accurate context; leave room for questions, disagreement, and refusal.",
          "status": "ethics",
          "src": "Stanford Encyclopedia of Philosophy: Ethics of Manipulation · FTC: Bringing Dark Patterns to Light (2022 examples)",
          "sourceIds": [
            "E3",
            "E4"
          ],
          "hook": "A story can open a question without closing the listener’s choice.",
          "title": "Make a reason vivid",
          "elements": [
            "Connect the story to a stated concern",
            "Describe the evidence and its limits",
            "Correct a known mistaken inference",
            "Avoid making agreement a test of loyalty or worth"
          ],
          "ordered": false,
          "distractorElements": [
            "Treat every emotional appeal as manipulation"
          ],
          "ex": [
            {
              "facts": "An unusual success story is mistaken for a typical result.",
              "result": "Clarify that it is exceptional before the buyer relies on that inference."
            }
          ],
          "terms": [
            "Emotional appeal"
          ],
          "quiz": [
            {
              "t": "tf",
              "q": "An accurate story can still leave a buyer with an unsupported generalization.",
              "a": true,
              "why": "The overall understanding matters, including what the speaker knows the buyer inferred."
            },
            {
              "t": "mcq",
              "q": "Which question checks the role of emotion?",
              "options": [
                "Did the message avoid every trace of feeling?",
                "Does the appeal help evaluation while allowing a considered refusal?",
                "Did the listener sound enthusiastic enough to sign?"
              ],
              "a": "Does the appeal help evaluation while allowing a considered refusal?",
              "why": "Emotion and enthusiasm alone do not establish whether the appeal supports deliberation."
            }
          ]
        },
        {
          "id": "u09-term-1",
          "kind": "term",
          "say": "Use relevant emotion with accurate context; leave room for questions, disagreement, and refusal.",
          "status": "ethics",
          "src": "Stanford Encyclopedia of Philosophy: Ethics of Manipulation · FTC: Bringing Dark Patterns to Light (2022 examples)",
          "sourceIds": [
            "E3",
            "E4"
          ],
          "hook": "A story can open a question without closing the listener’s choice.",
          "term": "Emotional appeal",
          "lang": "english",
          "meaning": "A message that draws attention to feelings or valued consequences.",
          "use": "An accurate account of staff frustration can explain a need without shaming a buyer."
        },
        {
          "id": "u09-l1-decision1",
          "kind": "argue",
          "say": "Make a reason vivid without making refusal shameful.",
          "status": "fictional",
          "src": "Stanford Encyclopedia of Philosophy: Ethics of Manipulation",
          "sourceIds": [
            "E3"
          ],
          "hook": "Does this appeal illuminate their priorities or punish disagreement?",
          "rule": "u09-r-1",
          "stem": "A buyer says wasted staff time is their main concern. Your accurate story describes one team recovering useful time, but you have no typical-results data.",
          "call": "Which opening best supports their evaluation?",
          "issue": "emotion and meaningful choice",
          "options": [
            {
              "text": "Lead with the story as the usual outcome.",
              "why": "One experience does not establish what usually happens.",
              "trap": 6
            },
            {
              "text": "Share the story, then ask whether that problem fits.",
              "why": "This connects a relevant example to their needs without assuming it represents everyone."
            },
            {
              "text": "Avoid the story because feelings always distort judgment.",
              "why": "Emotion is not automatically manipulation; relevance and context matter.",
              "trap": 7
            },
            {
              "text": "Ask them to commit before you reveal how unusual the story is.",
              "why": "That delays context needed for a considered evaluation.",
              "trap": 2
            }
          ],
          "answer": 1,
          "transfer": false
        },
        {
          "id": "u09-l1-sort2",
          "kind": "sort",
          "say": "Examine the pressure, not just the warmth of the words.",
          "status": "fictional",
          "src": "Stanford Encyclopedia of Philosophy: Ethics of Manipulation",
          "sourceIds": [
            "E3"
          ],
          "hook": "Can someone decline without being made to feel disloyal?",
          "mode": "category",
          "q": "Classify these fictional messages by the mechanism explicitly shown.",
          "buckets": [
            "Invites consideration",
            "Applies relationship or shame pressure"
          ],
          "items": [
            {
              "text": "Here is an accurate story about the problem you named; does it fit your team?",
              "bucket": "Invites consideration",
              "why": "The story invites evaluation against the buyer’s needs."
            },
            {
              "text": "After everything I have done for you, you owe me this purchase.",
              "bucket": "Applies relationship or shame pressure",
              "why": "Agreement is demanded as repayment for a relationship."
            },
            {
              "text": "Only people who do not care about their staff would decline.",
              "bucket": "Applies relationship or shame pressure",
              "why": "The message attacks identity rather than establishing fit."
            },
            {
              "text": "This option may reduce the frustration you described; shall we examine the evidence?",
              "bucket": "Invites consideration",
              "why": "The emotion leads into checking a relevant claim."
            }
          ]
        },
        {
          "id": "u09-l1-decision3",
          "kind": "argue",
          "say": "Check what your example made them believe.",
          "status": "fictional",
          "src": "Stanford Encyclopedia of Philosophy: Ethics of Manipulation · FTC: Bringing Dark Patterns to Light (2022 examples)",
          "sourceIds": [
            "E3",
            "E4"
          ],
          "hook": "Would you rely on a misunderstanding you helped create?",
          "rule": "u09-r-1",
          "stem": "After your unusual success story, a buyer says, “So almost every customer gets that result.” You know the example is exceptional.",
          "call": "To preserve informed evaluation, what comes next?",
          "issue": "emotion and meaningful choice",
          "options": [
            {
              "text": "Ask whether they want to sign while enthusiasm is high.",
              "why": "Their enthusiasm rests on an inference you know is unsupported.",
              "trap": 3
            },
            {
              "text": "Repeat that the story itself is accurate.",
              "why": "A technically true story does not correct the mistaken generalization.",
              "trap": 6
            },
            {
              "text": "Clarify its exceptional nature and the available evidence.",
              "why": "This repairs the specific misunderstanding before the buyer relies on it."
            },
            {
              "text": "Add more exceptional stories without correcting the generalization.",
              "why": "More vivid cases do not correct the specific mistaken claim about almost every customer.",
              "trap": 6
            }
          ],
          "answer": 2,
          "transfer": false
        },
        {
          "id": "u09-l1-decision4",
          "kind": "hypo",
          "say": "Let the cause matter without making no a character test.",
          "status": "fictional",
          "src": "Stanford Encyclopedia of Philosophy: Ethics of Manipulation",
          "sourceIds": [
            "E3"
          ],
          "hook": "Does the invitation preserve a dignified way to decline?",
          "rule": "u09-r-1",
          "stem": "A community organizer wants voluntary donations for a verified local need.",
          "call": "Which message uses emotion while preserving a meaningful choice?",
          "issue": "emotion and meaningful choice",
          "options": [
            {
              "text": "Describe the need accurately and invite questions or a decline.",
              "why": "An accurate account plus a real choice supports deliberation."
            },
            {
              "text": "Say good neighbors will donate before leaving.",
              "why": "Belonging is made conditional on donating.",
              "trap": 2
            },
            {
              "text": "Hide the emotional stakes and offer only a payment link.",
              "why": "Removing context is not required; the audience still needs reasons to evaluate the request.",
              "trap": 10
            },
            {
              "text": "Tell potential donors their friends will be told who declined.",
              "why": "That adds social pressure unrelated to evaluating the need.",
              "trap": 8
            }
          ],
          "answer": 0,
          "transfer": true,
          "facts": [
            "voluntary donations",
            "verified local need"
          ]
        },
        {
          "id": "u09-h-contrast-1",
          "kind": "hypo",
          "say": "Once context is understood, move to the evidence the person needs.",
          "status": "fictional",
          "src": "Stanford Encyclopedia of Philosophy: Ethics of Manipulation · FTC: Bringing Dark Patterns to Light (2022 examples)",
          "sourceIds": [
            "E3",
            "E4"
          ],
          "hook": "A caution should support the decision, not block the next useful question.",
          "rule": "u09-r-1",
          "stem": "In a fictional pitch, you describe one customer’s experience and clearly label it as an individual example. The buyer accurately repeats that limitation and asks to see the current product workflow. The story fits the problem they named, and no broader result is claimed.",
          "call": "What is the most useful next step?",
          "issue": "relevant story without overclaim",
          "facts": [
            "accurately repeats that limitation",
            "asks to see the current product workflow"
          ],
          "options": [
            {
              "text": "Withdraw the story because emotion can never inform a decision.",
              "why": "The stated context and understanding do not support that universal ban.",
              "trap": 7
            },
            {
              "text": "Repeat the limitation indefinitely instead of showing the workflow.",
              "why": "The buyer already understands it and has asked for relevant evidence.",
              "trap": 6
            },
            {
              "text": "Show the requested workflow and discuss fit.",
              "why": "The limitation is understood; the next evidence request directly supports evaluation."
            },
            {
              "text": "Treat interest in the demonstration as permission to invoice.",
              "why": "A request to inspect the product is not a purchase commitment.",
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
      "id": "u09l2",
      "title": "Proof with context",
      "objective": "Evaluate what testimonials, popularity, and endorsements can actually establish.",
      "takeaway": "Social proof tells you about other people; check whether it answers this person’s question.",
      "fieldwork": "Inspect a fictional or public testimonial and name one claim it supports and one claim it cannot establish. Discuss a reasonable alternative and what fact or value would change your recommendation; do not rate anyone’s character.",
      "items": [
        {
          "id": "u09-r-2",
          "kind": "rule",
          "say": "A testimonial, a demonstration, and an adoption count answer different questions; disclose relevant connections.",
          "status": "ethics",
          "src": "FTC: Bringing Dark Patterns to Light (2022 examples) · Markkula Center: Framework for Ethical Decision Making · FTC: Advertising FAQs, Endorsements",
          "sourceIds": [
            "E4",
            "E1",
            "S6"
          ],
          "hook": "A crowd of solo tutors cannot demonstrate a hospital workflow.",
          "title": "Match proof to the claim",
          "elements": [
            "Name the specific claim being evaluated",
            "Use evidence relevant to that use and setting",
            "Distinguish experience from typical outcomes",
            "Disclose relationships that affect how praise is weighed"
          ],
          "ordered": false,
          "distractorElements": [
            "Treat sincere praise as proof of independence"
          ],
          "ex": [
            {
              "facts": "A consultant earns referral fees and sincerely likes a tool.",
              "result": "Present the relationship with the quote; sincerity and independence differ."
            }
          ],
          "terms": [
            "Social proof"
          ],
          "quiz": [
            {
              "t": "tf",
              "q": "A paid endorser must be insincere.",
              "a": false,
              "why": "Payment affects context but does not establish the person’s private belief."
            },
            {
              "t": "mcq",
              "q": "What can a verified individual account establish by itself?",
              "options": [
                "The result every future buyer will obtain",
                "That customer’s reported experience",
                "The absence of all product limitations"
              ],
              "a": "That customer’s reported experience",
              "why": "An individual account is evidence of that account, not universal performance."
            }
          ]
        },
        {
          "id": "u09-term-2",
          "kind": "term",
          "say": "A testimonial, a demonstration, and an adoption count answer different questions; disclose relevant connections.",
          "status": "ethics",
          "src": "FTC: Bringing Dark Patterns to Light (2022 examples) · Markkula Center: Framework for Ethical Decision Making",
          "sourceIds": [
            "E4",
            "E1"
          ],
          "hook": "A crowd of solo tutors cannot demonstrate a hospital workflow.",
          "term": "Social proof",
          "lang": "english",
          "meaning": "Information about other people’s choices or experiences used when evaluating an option.",
          "use": "Check whose adoption is relevant before applying it to a different workflow."
        },
        {
          "id": "u09-l2-decision1",
          "kind": "argue",
          "say": "Many people choosing it does not mean it fits this person.",
          "status": "fictional",
          "src": "FTC: Bringing Dark Patterns to Light (2022 examples) · Markkula Center: Framework for Ethical Decision Making",
          "sourceIds": [
            "E4",
            "E1"
          ],
          "hook": "Are you turning popularity into a claim it cannot support?",
          "rule": "u09-r-2",
          "stem": "A fictional scheduling tool is popular among solo tutors. A hospital buyer asks whether it supports their complex staffing needs.",
          "call": "What evidence should you prioritize?",
          "issue": "evidence fit and endorsement context",
          "options": [
            {
              "text": "A larger collection of tutor testimonials.",
              "why": "The users may have very different requirements.",
              "trap": 10
            },
            {
              "text": "A demonstration against the hospital’s required workflows.",
              "why": "This directly tests the claimed fit for the buyer’s intended use."
            },
            {
              "text": "The total number of account registrations.",
              "why": "Registrations show uptake, not support for those workflows.",
              "trap": 10
            },
            {
              "text": "Ask the hospital to accept the tool before testing its required workflow.",
              "why": "That reverses the needed fit check and relies on irrelevant uptake.",
              "trap": 2
            }
          ],
          "answer": 1,
          "transfer": false
        },
        {
          "id": "u09-l2-match2",
          "kind": "pairs",
          "say": "Name the question before choosing the proof.",
          "status": "fictional",
          "src": "Markkula Center: Framework for Ethical Decision Making · FTC: Bringing Dark Patterns to Light (2022 examples)",
          "sourceIds": [
            "E1",
            "E4"
          ],
          "hook": "Is the evidence being asked to carry too much?",
          "set": "What each piece can show",
          "mode": "concept",
          "pairs": [
            {
              "l": "A verified customer account",
              "r": "What that customer reports experiencing"
            },
            {
              "l": "A witnessed feature demonstration",
              "r": "What the feature did in that demonstrated setup"
            },
            {
              "l": "An audited adoption count",
              "r": "How many accounts adopted within the stated definition"
            }
          ]
        },
        {
          "id": "u09-l2-decision3",
          "kind": "argue",
          "say": "Sincere and independent are different claims.",
          "status": "fictional",
          "src": "FTC: Bringing Dark Patterns to Light (2022 examples) · FTC: Advertising FAQs, Endorsements",
          "sourceIds": [
            "E4",
            "S6"
          ],
          "hook": "What relationship would change how the audience weighs this praise?",
          "rule": "u09-r-2",
          "stem": "A consultant genuinely likes your product and receives a fee for each referral. You want to use their quote in a comparison guide.",
          "call": "Which presentation gives readers useful context?",
          "issue": "evidence fit and endorsement context",
          "options": [
            {
              "text": "Label the quote as an independent expert verdict.",
              "why": "The referral incentive makes the independence claim misleading.",
              "trap": 10
            },
            {
              "text": "Remove the quote because paid people cannot have sincere views.",
              "why": "Payment does not prove insincerity; readers need relevant context.",
              "trap": 6
            },
            {
              "text": "Disclose the referral relationship alongside the endorsement.",
              "why": "Readers can consider the praise while accounting for the relationship."
            },
            {
              "text": "Put the referral relationship in an inaccessible internal memo.",
              "why": "Readers cannot use context they are not given.",
              "trap": 9
            }
          ],
          "answer": 2,
          "transfer": false
        },
        {
          "id": "u09-l2-decision4",
          "kind": "hypo",
          "say": "Borrow the question, not somebody else’s conclusion.",
          "status": "fictional",
          "src": "Markkula Center: Framework for Ethical Decision Making · FTC: Bringing Dark Patterns to Light (2022 examples)",
          "sourceIds": [
            "E1",
            "E4"
          ],
          "hook": "Does another team’s success establish fit for this team?",
          "rule": "u09-r-2",
          "stem": "A manager says, “The design team loves this meeting format, so support should adopt it.” Support handles unpredictable urgent calls.",
          "call": "To evaluate fit, what should happen first?",
          "issue": "evidence fit and endorsement context",
          "options": [
            {
              "text": "Adopt it because internal praise is especially reliable.",
              "why": "Enthusiasm from another setting does not settle this setting’s constraints.",
              "trap": 6
            },
            {
              "text": "Compare support’s needs with the format’s requirements.",
              "why": "This checks the relevant difference before drawing a conclusion."
            },
            {
              "text": "Reject it because different teams can never share a method.",
              "why": "A difference calls for investigation, not automatic rejection.",
              "trap": 7
            },
            {
              "text": "Copy only the meeting’s branding and assume workload will follow.",
              "why": "Changing the label does not examine the format’s requirements for urgent calls.",
              "trap": 10
            }
          ],
          "answer": 1,
          "transfer": true,
          "facts": [
            "design team loves this meeting format",
            "Support handles unpredictable urgent calls"
          ]
        },
        {
          "id": "u09-h-contrast-2",
          "kind": "hypo",
          "say": "Evidence can be useful for one claim and insufficient for another.",
          "status": "fictional",
          "src": "FTC: Bringing Dark Patterns to Light (2022 examples) · Markkula Center: Framework for Ethical Decision Making",
          "sourceIds": [
            "E4",
            "E1"
          ],
          "hook": "Change the question, and the most relevant proof can change.",
          "rule": "u09-r-2",
          "stem": "In this fictional procurement, the hospital asks a narrow question: how many hospital accounts currently use the tool? An audited count defines an account and separates hospitals from solo tutors. The buyer explicitly says the count will not replace the required workflow demonstration.",
          "call": "Which evidence directly answers the question now asked?",
          "issue": "a claim matched to evidence",
          "facts": [
            "how many hospital accounts",
            "audited count defines an account",
            "will not replace"
          ],
          "options": [
            {
              "text": "The defined audited hospital-account count.",
              "why": "This directly supports the narrow adoption claim, with the stated definition."
            },
            {
              "text": "Only a tutor testimonial about satisfaction.",
              "why": "That does not answer the hospital-account count question.",
              "trap": 6
            },
            {
              "text": "A promise that every hospital will succeed.",
              "why": "That is a different unsupported future-outcome claim.",
              "trap": 3
            },
            {
              "text": "No count, because popularity evidence is never relevant.",
              "why": "A count can answer a count question without establishing fit.",
              "trap": 7
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
      "id": "u09l3",
      "title": "Frame without hiding",
      "objective": "Present useful comparisons while preserving information needed for a considered decision.",
      "takeaway": "A helpful frame makes tradeoffs easier to see, including the unattractive ones.",
      "fieldwork": "Show two fictional offers in a common format with total cost, scope, and one limitation each. Ask a partner which detail was easiest to miss. Discuss a reasonable alternative and what fact or value would change your recommendation; do not rate anyone’s character.",
      "items": [
        {
          "id": "u09-r-3",
          "kind": "rule",
          "say": "Use a common basis, include mandatory costs and key limits, and tie recommendations to stated needs.",
          "status": "ethics",
          "src": "Stanford Encyclopedia of Philosophy: Ethics of Manipulation · FTC: Bringing Dark Patterns to Light (2022 examples) · Markkula Center: Framework for Ethical Decision Making",
          "sourceIds": [
            "E3",
            "E4",
            "E1"
          ],
          "hook": "A monthly price is only part of an annual commitment.",
          "title": "A comparison people can inspect",
          "elements": [
            "Choose a comparison basis relevant to the decision",
            "Include mandatory costs and important exclusions",
            "Explain the buyer-focused reason for a recommendation",
            "Keep refusal and other real options understandable"
          ],
          "ordered": false,
          "distractorElements": [
            "Hide an unsuitable cheaper option to protect commission"
          ],
          "ex": [
            {
              "facts": "A plan costs 120 each month plus a mandatory 300 setup fee.",
              "result": "Its first-year total is 1,740; show the components too."
            }
          ],
          "terms": [
            "Framing"
          ],
          "quiz": [
            {
              "t": "tf",
              "q": "An option that pays the seller more is therefore a better fit for the buyer.",
              "a": false,
              "why": "Seller compensation does not establish buyer value or feasibility."
            },
            {
              "t": "mcq",
              "q": "A buyer is budgeting a full first year. Which figure addresses that task?",
              "options": [
                "Daily equivalent chosen to appear most affordable",
                "First-year total, including the mandatory setup and recurring charges",
                "Monthly charge without the initial setup payment"
              ],
              "a": "First-year total, including the mandatory setup and recurring charges",
              "why": "Use the same period and include the actual required payments."
            }
          ]
        },
        {
          "id": "u09-term-3",
          "kind": "term",
          "say": "Use a common basis, include mandatory costs and key limits, and tie recommendations to stated needs.",
          "status": "ethics",
          "src": "Stanford Encyclopedia of Philosophy: Ethics of Manipulation · FTC: Bringing Dark Patterns to Light (2022 examples) · Markkula Center: Framework for Ethical Decision Making",
          "sourceIds": [
            "E3",
            "E4",
            "E1"
          ],
          "hook": "A monthly price is only part of an annual commitment.",
          "term": "Framing",
          "lang": "english",
          "meaning": "Selecting how information is presented and what a comparison emphasizes.",
          "use": "A shared annual-cost basis can clarify a choice; omitted fees can obscure it."
        },
        {
          "id": "u09-l3-decision1",
          "kind": "argue",
          "say": "Focus attention without hiding the tradeoff.",
          "status": "fictional",
          "src": "Stanford Encyclopedia of Philosophy: Ethics of Manipulation · FTC: Bringing Dark Patterns to Light (2022 examples)",
          "sourceIds": [
            "E3",
            "E4"
          ],
          "hook": "What important downside could disappear inside this frame?",
          "rule": "u09-r-3",
          "stem": "A fictional buyer wants predictable annual spending. Plan A costs 120 per month plus a mandatory 300 setup charge.",
          "call": "Which presentation best serves that goal?",
          "issue": "transparent comparisons",
          "options": [
            {
              "text": "Show the first-year total of 1,740 alongside its components.",
              "why": "The total and components match the buyer’s budgeting question."
            },
            {
              "text": "Emphasize only the 120 monthly charge.",
              "why": "The mandatory setup cost would be easy to overlook.",
              "trap": 10
            },
            {
              "text": "Compare the setup fee with a daily coffee habit.",
              "why": "The analogy distracts from the requested annual commitment.",
              "trap": 10
            },
            {
              "text": "Show only the setup fee because it is paid first.",
              "why": "The buyer asked about annual spending, so later mandatory payments also matter.",
              "trap": 6
            }
          ],
          "answer": 0,
          "transfer": false
        },
        {
          "id": "u09-l3-sort2",
          "kind": "sort",
          "say": "Simplify the view, not the person’s choice.",
          "status": "fictional",
          "src": "FTC: Bringing Dark Patterns to Light (2022 examples)",
          "sourceIds": [
            "E4"
          ],
          "hook": "Can the buyer see what they must give up?",
          "mode": "category",
          "q": "Classify these fictional design choices using the facts stated.",
          "buckets": [
            "Clarifies the comparison",
            "Obscures the comparison"
          ],
          "items": [
            {
              "text": "Show both offers on the same twelve-month basis, with mandatory fees included.",
              "bucket": "Clarifies the comparison",
              "why": "The shared basis makes the commitment comparable."
            },
            {
              "text": "Show one offer per week and the other per year without conversion.",
              "bucket": "Obscures the comparison",
              "why": "Different units make the prices unnecessarily difficult to compare."
            },
            {
              "text": "Put the known storage limit beside the capacity claim.",
              "bucket": "Clarifies the comparison",
              "why": "The limitation is visible where it affects interpretation."
            },
            {
              "text": "Make the decline option read “I do not care about my team.”",
              "bucket": "Obscures the comparison",
              "why": "The wording adds shame to a legitimate refusal."
            }
          ]
        },
        {
          "id": "u09-l3-decision3",
          "kind": "argue",
          "say": "Recommend against a need, not against your commission.",
          "status": "fictional",
          "src": "Markkula Center: Framework for Ethical Decision Making · FTC: Bringing Dark Patterns to Light (2022 examples)",
          "sourceIds": [
            "E1",
            "E4"
          ],
          "hook": "Could you explain the recommendation using the buyer’s stated priorities?",
          "rule": "u09-r-3",
          "stem": "A fictional buyer needs a basic reporting feature and has a strict budget. Both plans provide it; the premium plan adds unwanted features and pays you more.",
          "call": "Which next move best follows their priorities?",
          "issue": "transparent comparisons",
          "options": [
            {
              "text": "Recommend premium because future needs may grow.",
              "why": "Unstated future needs do not override the present budget and requirement.",
              "trap": 10
            },
            {
              "text": "Recommend basic, explaining when an upgrade would become useful.",
              "why": "The recommendation fits the given facts while leaving room to revisit them."
            },
            {
              "text": "Present premium as the standard and mention basic only if challenged.",
              "why": "That frame privileges your incentive and makes a suitable option harder to see.",
              "trap": 10
            },
            {
              "text": "Recommend basic but conceal the feature premium alone provides.",
              "why": "Explain relevant differences even when the current facts support basic.",
              "trap": 9
            }
          ],
          "answer": 1,
          "transfer": false
        },
        {
          "id": "u09-l3-decision4",
          "kind": "hypo",
          "say": "Make the hidden commitment visible.",
          "status": "fictional",
          "src": "Markkula Center: Framework for Ethical Decision Making · FTC: Bringing Dark Patterns to Light (2022 examples)",
          "sourceIds": [
            "E1",
            "E4"
          ],
          "hook": "What will a person actually have to do after agreeing?",
          "rule": "u09-r-3",
          "stem": "A volunteer compares two roles: one is advertised as “one evening” but also requires preparation; the other lists all hours.",
          "call": "To support an informed choice, how should the organizer compare them?",
          "issue": "transparent comparisons",
          "options": [
            {
              "text": "Describe only the public-facing shift for each.",
              "why": "The preparation time affects the actual commitment.",
              "trap": 10
            },
            {
              "text": "Recommend whichever title sounds more prestigious.",
              "why": "Prestige does not answer the stated comparison problem.",
              "trap": 6
            },
            {
              "text": "Compare each role’s total time commitment.",
              "why": "A common time basis reveals the tradeoff the volunteer must evaluate."
            },
            {
              "text": "List preparation as optional while still requiring it.",
              "why": "That misstates the actual time commitment.",
              "trap": 5
            }
          ],
          "answer": 2,
          "transfer": true,
          "facts": [
            "also requires preparation",
            "other lists all hours"
          ]
        },
        {
          "id": "u09-h-contrast-3",
          "kind": "hypo",
          "say": "A recommendation should change when a relevant requirement changes.",
          "status": "fictional",
          "src": "Stanford Encyclopedia of Philosophy: Ethics of Manipulation · FTC: Bringing Dark Patterns to Light (2022 examples) · Markkula Center: Framework for Ethical Decision Making",
          "sourceIds": [
            "E3",
            "E4",
            "E1"
          ],
          "hook": "Consistency belongs in the reason, not in defending yesterday’s answer.",
          "rule": "u09-r-3",
          "stem": "In a fictional purchase, basic and premium both provide simple reports. The buyer now confirms a mandatory audit feature that only premium provides. The new price may exceed approved budget, and neither plan has been accepted.",
          "call": "What is the most useful response to the changed requirement?",
          "issue": "updated recommendation",
          "facts": [
            "mandatory audit feature",
            "only premium provides",
            "may exceed approved budget"
          ],
          "options": [
            {
              "text": "Keep recommending basic because it was initially suitable.",
              "why": "The new essential requirement changes the earlier fit assessment.",
              "trap": 2
            },
            {
              "text": "Move the buyer to premium without discussing the cost.",
              "why": "The budget and decision still belong in the comparison.",
              "trap": 2
            },
            {
              "text": "Say the audit feature is included in basic to preserve the sale.",
              "why": "That contradicts the stated capability difference.",
              "trap": 5
            },
            {
              "text": "Explain the fit change and check premium’s budget feasibility.",
              "why": "The new requirement supports reconsidering premium, not assuming approval."
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
      "id": "u09l4",
      "title": "One offer across every channel",
      "objective": "Check the combined impression of a headline, comparison, and sales conversation; repair contradictions before reliance.",
      "takeaway": "The buyer evaluates the whole offer, not each technically true sentence in isolation.",
      "fieldwork": "Create a fictional offer in a headline, a short message, and a comparison row. Ask a partner what commitment they understand. Discuss both a concise version and a fuller version that preserve the material limits.",
      "items": [
        {
          "id": "u09-r-4",
          "kind": "rule",
          "say": "Make the important claim and its material limits understandable wherever the buyer is deciding.",
          "status": "ethics",
          "src": "Stanford Encyclopedia of Philosophy: Ethics of Manipulation · FTC: Bringing Dark Patterns to Light (2022 examples) · FTC: Advertising substantiation · FTC: Advertising FAQs",
          "sourceIds": [
            "E3",
            "E4",
            "S5",
            "S6"
          ],
          "hook": "The small print cannot hold a different deal from the headline.",
          "title": "Keep the impression consistent",
          "elements": [
            "Identify what a reasonable reader may infer",
            "Put material limits where they affect the decision",
            "Align the live offer across channels",
            "Correct a known misleading impression before relying on it"
          ],
          "ordered": false,
          "distractorElements": [
            "Treat literal truth in one sentence as enough for the whole offer"
          ],
          "ex": [
            {
              "facts": "A banner says unlimited support, but the package excludes live help.",
              "result": "Clarify the support actually included where the offer is compared."
            }
          ],
          "terms": [
            "Overall impression"
          ],
          "quiz": [
            {
              "t": "tf",
              "q": "A true sentence always makes the surrounding offer clear.",
              "a": false,
              "why": "Layout, omissions, and contradictory statements can create a different overall impression."
            },
            {
              "t": "mcq",
              "q": "Which change addresses a known missing limit at the decision point?",
              "options": [
                "Add endorsements praising the overall customer experience",
                "Show the limit beside the claim",
                "Emphasize an unrelated benefit that remains accurate"
              ],
              "a": "Show the limit beside the claim",
              "why": "The material limit needs to be understandable when the person assesses the offer."
            }
          ],
          "boundary": true
        },
        {
          "id": "u09-term-4",
          "kind": "term",
          "say": "Make the important claim and its material limits understandable wherever the buyer is deciding.",
          "status": "ethics",
          "src": "Stanford Encyclopedia of Philosophy: Ethics of Manipulation · FTC: Bringing Dark Patterns to Light (2022 examples) · FTC: Advertising substantiation · FTC: Advertising FAQs",
          "sourceIds": [
            "E3",
            "E4",
            "S5",
            "S6"
          ],
          "hook": "The small print cannot hold a different deal from the headline.",
          "term": "Overall impression",
          "lang": "english",
          "meaning": "The understanding a communication creates through its words, context, and presentation together.",
          "use": "A low headline price can obscure a mandatory fee even if a separate page lists it.",
          "boundary": true
        },
        {
          "id": "u09-h-boundary-1",
          "kind": "hypo",
          "say": "Correct the actual scope before someone relies on an unsupported version.",
          "status": "fictional",
          "src": "Stanford Encyclopedia of Philosophy: Ethics of Manipulation · FTC: Bringing Dark Patterns to Light (2022 examples) · FTC: Advertising substantiation · FTC: Advertising FAQs",
          "sourceIds": [
            "E3",
            "E4",
            "S5",
            "S6"
          ],
          "hook": "The deciding detail is live calls, not whether support exists at all.",
          "rule": "u09-r-4",
          "stem": "In a fictional plan comparison, the headline reads “Unlimited live support.” The actual plan includes unlimited written tickets but no live calls. A buyer repeats that live calls are included. The seller knows the distinction before the buyer commits.",
          "call": "Is the offer ready to rely on for this buyer’s decision?",
          "issue": "a known misleading impression",
          "facts": [
            "no live calls",
            "repeats that live calls are included",
            "before the buyer commits"
          ],
          "options": [
            {
              "text": "Yes, because unlimited tickets make the headline close enough.",
              "why": "Tickets and live calls are different services in this offer.",
              "trap": 5
            },
            {
              "text": "No, because every short headline is inherently deceptive.",
              "why": "Concise communication can be accurate; this specific headline misstates scope.",
              "trap": 7
            },
            {
              "text": "No, because the headline and the buyer’s understanding need correction.",
              "why": "The seller knows the buyer is relying on a capability the plan does not include."
            },
            {
              "text": "Yes, because a later onboarding email can change the commitment.",
              "why": "Later clarification does not support an informed decision now.",
              "trap": 2
            }
          ],
          "answer": 2,
          "transfer": false,
          "grid": true,
          "boundary": true
        },
        {
          "id": "u09-sort-boundary",
          "kind": "sort",
          "say": "Judge whether the change improves the buyer’s actual understanding.",
          "status": "fictional",
          "src": "Stanford Encyclopedia of Philosophy: Ethics of Manipulation · FTC: Bringing Dark Patterns to Light (2022 examples) · FTC: Advertising substantiation · FTC: Advertising FAQs",
          "sourceIds": [
            "E3",
            "E4",
            "S5",
            "S6"
          ],
          "hook": "More words are not automatically more clarity.",
          "mode": "category",
          "q": "Classify what each fictional communication change does to the offer.",
          "buckets": [
            "Clarifies material information",
            "Leaves a material misunderstanding"
          ],
          "items": [
            {
              "text": "Replace “live support” with “written ticket support” beside the purchase choice.",
              "bucket": "Clarifies material information",
              "why": "The label now describes the service actually supplied."
            },
            {
              "text": "Keep the live-support headline and hide the correction in a staff-only document.",
              "bucket": "Leaves a material misunderstanding",
              "why": "The buyer cannot use an internal correction."
            },
            {
              "text": "Show the mandatory setup fee with the first-year total.",
              "bucket": "Clarifies material information",
              "why": "The comparison includes the required cost."
            },
            {
              "text": "Tell a buyer who misunderstood the trial length that the terms are somewhere online.",
              "bucket": "Leaves a material misunderstanding",
              "why": "That does not correct the specific known misunderstanding."
            }
          ],
          "boundary": true
        },
        {
          "id": "u09-h-boundary-transfer",
          "kind": "hypo",
          "say": "Give clear information without inventing either consent or a violation.",
          "status": "fictional",
          "src": "Stanford Encyclopedia of Philosophy: Ethics of Manipulation · FTC: Bringing Dark Patterns to Light (2022 examples) · FTC: Advertising substantiation · FTC: Advertising FAQs",
          "sourceIds": [
            "E3",
            "E4",
            "S5",
            "S6"
          ],
          "hook": "A request for a reminder is not itself evidence of deception.",
          "rule": "u09-r-4",
          "stem": "In a fictional membership offer, the renewal date and full renewal price are clearly shown before sign-up. A member asks for that date again, correctly recalls the price, and has not reported a conflicting statement. The support agent has the verified terms.",
          "call": "What response best serves this request?",
          "issue": "a clear reminder",
          "facts": [
            "clearly shown before sign-up",
            "asks for that date again",
            "verified terms"
          ],
          "options": [
            {
              "text": "Refuse to answer because the member already saw the date.",
              "why": "A simple relevant reminder supports understanding.",
              "trap": 10
            },
            {
              "text": "Give the verified date and offer clarification if needed.",
              "why": "The request calls for accurate accessible information, not an invented dispute."
            },
            {
              "text": "Treat the request as consent to an earlier renewal.",
              "why": "Asking about a date does not authorize changing it.",
              "trap": 3
            },
            {
              "text": "Announce that all prior terms were misleading.",
              "why": "The stated facts do not establish that conclusion.",
              "trap": 3
            }
          ],
          "answer": 1,
          "transfer": true,
          "grid": false,
          "boundary": true
        },
        {
          "id": "u09-trap-boundary",
          "kind": "trap",
          "say": "A disclosure needs to reach the decision it is meant to inform.",
          "status": "fictional",
          "src": "Stanford Encyclopedia of Philosophy: Ethics of Manipulation · FTC: Bringing Dark Patterns to Light (2022 examples) · FTC: Advertising substantiation · FTC: Advertising FAQs",
          "sourceIds": [
            "E3",
            "E4",
            "S5",
            "S6"
          ],
          "hook": "Information supplied too late cannot guide the earlier choice.",
          "cat": "5",
          "stem": "A fictional sales page discloses a mandatory fee only after the buyer presses its final purchase button.",
          "wrong": "Disclosure anywhere in the journey necessarily gives a buyer an informed choice.",
          "right": "Put the material fee where the buyer can evaluate it before committing.",
          "why": "The location and timing affect whether the information can inform the decision.",
          "boundary": true,
          "fixDistractors": [
            "Keep the fee after commitment but add a reassuring explanation beside it.",
            "Move the fee to a separate page that the purchase screen does not identify."
          ]
        },
        {
          "id": "u09-steps-boundary",
          "kind": "steps",
          "say": "Trace the claim, check the basis, align the message, then review.",
          "status": "fictional",
          "src": "Stanford Encyclopedia of Philosophy: Ethics of Manipulation · FTC: Bringing Dark Patterns to Light (2022 examples) · FTC: Advertising substantiation · FTC: Advertising FAQs",
          "sourceIds": [
            "E3",
            "E4",
            "S5",
            "S6"
          ],
          "hook": "A live error may need immediate notice before a full communications audit.",
          "title": "Audit an unsent offer across channels",
          "steps": [
            "List the claims a buyer could reasonably infer",
            "Check each claim and its material limits",
            "Align the headline, comparison, and conversation",
            "Review the corrected offer before release"
          ],
          "distractors": [
            "Approve the headline before checking the underlying scope",
            "Hide an important exception to keep the message short"
          ],
          "applyTo": {
            "facts": "The team has listed the inferred promises but has not compared them with delivery scope.",
            "stop": "Check each claim and its material limits",
            "why": "In this unsent-offer routine, evidence and scope checks come before final wording approval."
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
