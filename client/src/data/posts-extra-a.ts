import type { PostSection } from "./posts";

export const EXTRA_A: Record<string, PostSection[]> = {
  "agentic-ai-for-small-business-what-it-is-and-where-to-start": [
    { h: "A worked example: handling customer enquiries", p: [
      "Imagine a small online shop that receives around fifty messages a day through email and a contact form. Most are the same few questions: where is my order, can I change my address, do you ship to my city. A staff member spends two hours every day reading, looking up the order, and typing replies.",
      "An agent for this job would work in four steps. First it reads the message and classifies it, for example order status, address change, product question or complaint. Second it looks up the matching order in the store system using only a read-only connection. Third it drafts a reply using your approved wording and the real order details. Fourth, depending on the category, it either places the draft in a review queue or, for the safest category such as order status, sends it directly. Complaints and anything it is unsure about always go to a person.",
      "Notice what the agent is not allowed to do: it cannot issue refunds, edit orders or change prices. Those stay with staff. This narrow design is why the pilot is safe to run.",
    ] },
    { h: "Common mistakes to avoid", list: [
      "Starting too big: automating a whole department at once instead of one task with a clear before-and-after measurement.",
      "Skipping the review stage: letting an agent act alone before you have seen how often its drafts are wrong.",
      "Giving broad permissions: a single account with access to everything means one mistake can touch everything.",
      "Ignoring messy data: duplicate customers and inconsistent product names lead to confident but wrong answers.",
      "Not logging actions: without a record you cannot find out why something happened or fix it.",
      "Forgetting the customer: hiding that a customer is talking to an automated system, or making it hard to reach a human.",
    ] },
    { h: "Pilot checklist", list: [
      "Choose one repetitive task that takes your team at least a few hours each week.",
      "Write down the rules: what the agent may do, what it must never do, and when it must ask a person.",
      "Connect it to your systems with the smallest permissions that work.",
      "Run it in suggestion mode and record whether each draft was correct, edited or rejected.",
      "Review the mistakes weekly and adjust the rules and the source data.",
      "Decide in advance what accuracy level lets it act alone on low-risk cases.",
      "Keep a one-click way to turn it off.",
    ] },
    { h: "Frequently asked questions", p: [
      "Will an AI agent replace my staff? In most small businesses it removes the repetitive part of a role, such as copying details between systems, so people can spend time on conversations and decisions that need judgement. Plan for changed roles rather than empty ones.",
      "Is my customer data safe with an AI agent? It depends on how the system is built. Choose providers whose terms say your data is not used to train public models, send only the fields the agent needs, and keep sensitive items out of scope.",
      "How long does a pilot take? A single focused workflow can often be piloted in a few weeks, including data cleanup and testing, though this varies with how many systems are involved.",
      "What if the agent makes a mistake? Design for it. Use review queues, limits on what it can change, and logs, so a mistake is caught early and is easy to reverse.",
    ] },
  ],

  "vibe-coding-and-ai-coding-assistants-risks-for-business": [
    { h: "A worked example: a booking tool built from prompts", p: [
      "Picture a salon owner who uses an AI tool to build a booking page in an afternoon. It looks great: customers pick a service, a time and enter a phone number. The owner is delighted and shares the link on social media.",
      "A week later problems appear. Two customers booked the same slot because nothing checks availability at the moment of saving. The admin page can be opened by anyone who guesses the web address because there is no real login. Customer phone numbers are stored in a way that anyone with the database address could read. And when the owner asks for a small change, a new prompt rewrites a different part of the page and breaks the calendar.",
      "None of this means the AI tool was useless. The prototype proved the idea quickly and cheaply. What was missing was the second stage: an engineer reviewing the code, adding proper authentication, handling double bookings, protecting the data and writing tests so later changes do not break earlier ones.",
    ] },
    { h: "Common mistakes to avoid", list: [
      "Shipping the demo: treating a prototype as a finished product and putting real customer data into it.",
      "No review: accepting generated code because it runs, without anyone reading it.",
      "No tests: making changes by prompting again and again with no automated check that old features still work.",
      "Pasting secrets into prompts: sharing passwords, API keys or customer records with a tool you have not assessed.",
      "Unchecked dependencies: letting a tool install packages without checking they exist, are maintained and are safe.",
      "Having no owner: nobody on the team can explain how the system works, so every fix is guesswork.",
    ] },
    { h: "A safe workflow for AI-assisted development", list: [
      "Use AI to build a quick prototype and validate the idea with real users.",
      "Decide which parts need production quality: logins, payments, personal data and core workflows.",
      "Have an experienced developer review or rewrite those parts.",
      "Add automated tests for the behaviours that matter most.",
      "Run a security scan and check the dependency list before launch.",
      "Deploy to a staging copy first, then to production, with backups in place.",
      "Document how it works so someone other than the original author can maintain it.",
    ] },
    { h: "Frequently asked questions", p: [
      "Can I build my whole product with AI prompts alone? You can build a convincing prototype that way. For anything handling money, accounts or personal data, add human review, testing and security checks before real users rely on it.",
      "Will AI make developers unnecessary? It changes what developers spend time on, with less typing and more reviewing, designing and deciding. Judgement about trade-offs, security and maintainability still needs a person.",
      "Does AI-generated code have copyright or licence issues? It can raise questions, especially if it reproduces existing code. Ask your developer or agency how they handle this and what your contract says about ownership.",
      "How can I tell if code was written carefully? Look for tests, clear structure, documentation and a review history. Code that nobody can explain is a warning sign whoever or whatever wrote it.",
    ] },
  ],

  "small-business-cybersecurity-checklist": [
    { h: "A worked example: a fake invoice that almost worked", p: [
      "A ten-person distribution company receives an email that appears to come from a regular supplier. It says the supplier has changed banks and asks accounts to pay the next invoice to a new account. The logo is right, the tone is right, and the sender name matches. The accountant is busy and nearly processes it.",
      "What stops the loss is a simple rule the company adopted earlier: any change of bank details must be confirmed by calling the supplier on a number already on file, never one given in the email. The call reveals that the supplier sent nothing. The accountant forwards the message to the owner, staff are warned, and the company changes the password of the mailbox the message imitated just in case.",
      "The lesson is that the defence was a process, not a product. A written rule, applied consistently, beat a very convincing message.",
    ] },
    { h: "Common mistakes to avoid", list: [
      "Relying on one control: assuming antivirus alone is enough while accounts have no multi-factor authentication.",
      "Ignoring old accounts: leaving former employees and unused tools with active access.",
      "Sharing logins: a single shared admin password means nobody can tell who did what or revoke one person's access.",
      "Untested backups: discovering during an emergency that backups were incomplete or the restore does not work.",
      "Delaying updates: leaving known vulnerabilities open for months because the update is inconvenient.",
      "Blaming staff: people who fear punishment hide mistakes, which gives attackers more time.",
    ] },
    { h: "A one-day starter plan", list: [
      "Morning: turn on multi-factor authentication for email, banking and cloud storage.",
      "Set up a password manager for the team and begin moving shared passwords into it.",
      "Check that automatic updates are on for all computers and phones used for work.",
      "Confirm where backups are stored and restore one file as a test.",
      "List everyone with admin access and remove anyone who does not need it.",
      "Afternoon: hold a short staff briefing on phishing and the bank-detail confirmation rule.",
      "Write the names and phone numbers of who to call in an incident on one page.",
    ] },
    { h: "Frequently asked questions", p: [
      "Do small businesses really get attacked? Yes. Many attacks are automated and aim at anyone with weak logins or unpatched software, so size does not protect you.",
      "Is cyber insurance enough? Insurance can help with costs after an incident, but insurers often require basic controls such as multi-factor authentication and backups, and it does not repair lost customer trust.",
      "Should I hire a security specialist? You can often manage the basics in-house. Consider outside help for a periodic review, for securing custom software, or if you handle sensitive data at scale.",
      "What should I do first if I think I have been hacked? Disconnect affected devices from the network, change passwords from a clean device, contact your bank if money is involved, and follow your incident plan. Avoid deleting evidence.",
    ] },
  ],

  "cloud-costs-for-small-teams-how-to-stop-overspending": [
    { h: "A worked example: a startup bill that doubled", p: [
      "A small team launches a web app and, for the first few months, the cloud bill is modest. Then it roughly doubles without any matching growth in customers. Nobody is sure why.",
      "A one-hour review finds three causes. First, a staging environment built for a demo is still running at full size around the clock. Second, application logs are set to very detailed output and are kept indefinitely, so storage grows every day. Third, the production database was sized generously at launch, and monitoring shows it rarely uses more than a fraction of its capacity.",
      "The fixes are routine. The team schedules staging to shut down at night and on weekends, lowers the log level and sets a retention period of thirty days, and moves the database to a smaller size during a quiet period. Because the changes were measured before and after, the team knows which one saved what. They also add budget alerts so a similar jump is noticed within days rather than at month end.",
    ] },
    { h: "Common mistakes to avoid", list: [
      "Optimising too early: spending weeks shaving small amounts before the largest items are understood.",
      "No ownership: nobody is responsible for the bill, so everyone assumes someone else is watching it.",
      "Untagged resources: being unable to tell which project or client a cost belongs to.",
      "Long commitments too soon: signing multi-year discounts before usage has settled.",
      "Cutting capacity blindly: shrinking servers without checking peak load, then causing outages.",
      "Forgetting data transfer: focusing on servers and overlooking charges for moving data between regions or out to the internet.",
    ] },
    { h: "Monthly cost review checklist", list: [
      "Open the billing dashboard and compare to last month and to budget.",
      "Identify the five largest line items and note what changed.",
      "Check that development and test environments are off outside working hours.",
      "Look for unattached disks, old snapshots and unused IP addresses.",
      "Review database and server utilisation to see whether sizes still fit.",
      "Confirm log and backup retention settings are intentional.",
      "Record one improvement to complete before the next review.",
    ] },
    { h: "Frequently asked questions", p: [
      "What does FinOps mean? It is a practice that brings engineering, finance and business teams together to understand and manage cloud spending. For a small team it can be as simple as a monthly review and shared responsibility.",
      "Is the cloud always cheaper than my own servers? Not always. The cloud reduces upfront cost and gives flexibility, but steady, predictable workloads can sometimes be cheaper on other models. Compare the full cost, including staff time.",
      "How much should I budget for hosting? It depends on traffic, data and architecture, so there is no universal figure. Estimate with your provider's pricing calculator, add a margin, and review after the first few months of real use.",
      "Can I reduce costs without hurting performance? Often yes. Removing idle resources, caching, compressing images and right-sizing usually cut costs with no visible change for users.",
    ] },
  ],

  "low-code-vs-custom-software-which-is-right-for-you": [
    { h: "A worked example: from spreadsheet to app", p: [
      "A repair business tracks jobs in a shared spreadsheet. Technicians update status, the office calls customers, and parts are ordered from a separate list. It works until the volume grows and rows start being overwritten.",
      "The owner first tries a low-code platform. In a couple of weeks a simple job-tracking app is running, with a form for new jobs, a status board and automatic email updates to customers. It costs little and solves the immediate problem. This is low-code at its best.",
      "A year later the business wants parts inventory linked to supplier prices, invoices posted to its accounting system, and a customer portal under its own brand. The platform handles some of this awkwardly and charges more as users are added. At that point the owner has a clear, tested picture of what the business needs, which makes scoping a custom system far easier and less risky. The low-code app was not wasted; it served as a working specification.",
    ] },
    { h: "Common mistakes to avoid", list: [
      "Judging on the first month only: comparing the setup price and ignoring per-user fees over several years.",
      "Ignoring exit options: not checking whether you can export your data and logic if you leave.",
      "Forcing a platform to do too much: bending a simple tool to run a complex core process.",
      "Building without an owner: letting each team create its own apps with no one responsible for security or upkeep.",
      "Skipping a prototype: committing to custom development before testing the process in a cheaper way.",
      "Underestimating integration: assuming connections to your other tools will be easy.",
    ] },
    { h: "Decision checklist", list: [
      "Write down the process in plain steps and mark where it is unusual.",
      "Count how many people will use it now and in two years.",
      "List the systems it must connect to and confirm the platform supports them.",
      "Check data sensitivity and any compliance obligations.",
      "Estimate the three-year cost of each option, including licences and maintenance.",
      "Confirm you can export your data in a usable form.",
      "Choose a small pilot to test the leading option before committing.",
    ] },
    { h: "Frequently asked questions", p: [
      "Is low-code secure? Reputable platforms invest heavily in security, but you remain responsible for how you configure access, permissions and data. Review settings and limit who can build and share apps.",
      "Can I move from low-code to custom later? Yes, and many businesses do. Keep documentation and export your data so the move is smooth, and treat the low-code version as a prototype of requirements.",
      "Do I need a developer for low-code? Simple apps can be built by business users. Complex logic and integrations usually benefit from developer involvement.",
      "Which is cheaper? Low-code is usually cheaper at the start for simple needs. Custom software can be cheaper over time for complex, high-usage systems, because there are no per-user platform fees.",
    ] },
  ],

  "api-first-design-connecting-your-business-systems": [
    { h: "A worked example: an order that updates everything", p: [
      "Consider a small business that sells through its website and also takes orders by phone. Today, a website order arrives by email, someone types it into the accounting software, then updates a stock spreadsheet, then messages the delivery driver. Each step is a chance for a typo or a delay.",
      "With an integration in place the same order flows differently. The website sends the order to the central system through its API. The system creates an invoice in the accounting tool, reduces stock, and notifies the delivery team and the customer. If the accounting service is briefly unavailable, the request is placed in a queue and retried, so nothing is lost and nobody has to notice.",
      "The staff do not need to know any of this works. What they notice is that orders appear correctly everywhere, quickly, and that they can spend their time on exceptions instead of re-typing.",
    ] },
    { h: "Common mistakes to avoid", list: [
      "No error handling: assuming every request succeeds, then losing data when one fails.",
      "Hard-coded secrets: placing API keys inside code or public repositories.",
      "Unclear source of truth: letting two systems both edit the same record with no rule about which wins.",
      "Ignoring rate limits: sending too many requests too quickly and being blocked.",
      "Skipping documentation: leaving no record of how systems connect, so changes break things unexpectedly.",
      "Tight coupling: building integrations so specific to one tool that replacing it means starting over.",
    ] },
    { h: "Integration planning checklist", list: [
      "Draw the flow of data between systems on one page.",
      "Mark which system is the master record for each type of data.",
      "Check each tool for an API, webhooks or built-in connectors.",
      "Decide how failures will be retried and who is alerted.",
      "Store credentials securely and grant only the permissions needed.",
      "Test with sample data before connecting live records.",
      "Monitor the connection and review logs regularly after launch.",
    ] },
    { h: "Frequently asked questions", p: [
      "What is a webhook? It is a message one system sends automatically to another when something happens, such as a new order, so the second system does not have to keep asking for updates.",
      "Do I need an API for every tool? No. Many tools already offer connectors. You need custom API work where tools lack connectors or when your rules are specific.",
      "Is it safe to connect my systems? It can be, if you use secure authentication, limit permissions, protect keys and monitor activity.",
      "How much does an integration cost? It varies with the number of systems, data volume and complexity. Simple connections can be quick, while two-way syncs with many edge cases take longer.",
    ] },
  ],

  "data-privacy-for-web-and-mobile-apps-what-to-get-right": [
    { h: "A worked example: designing a sign-up form", p: [
      "A team is building a fitness-class booking app and drafts a sign-up form asking for name, email, phone number, home address, date of birth and emergency contact. It feels thorough, but each field creates an obligation.",
      "Applying data minimisation, the team asks what the service actually needs. Booking classes requires a name and an email. A phone number is useful only if they send reminders by text, so it becomes optional with a clear explanation. Home address and date of birth are not needed at all, so they are removed. The emergency contact is relevant only for certain classes, so it is requested at that point rather than at sign-up.",
      "The result is a shorter form that converts better, a smaller amount of data to protect, and a simpler privacy policy. The team also adds a delete-account button in settings and writes down which records, such as payment receipts, must be kept for accounting purposes and for how long.",
    ] },
    { h: "Common mistakes to avoid", list: [
      "Collecting just in case: gathering data without a defined purpose.",
      "Copy-pasting a policy: using a generic privacy policy that does not match what your app really does.",
      "Forgetting third parties: adding analytics, ads or chat tools without recording what data they receive.",
      "Keeping data forever: having no retention rules, so old data accumulates and increases risk.",
      "Logging sensitive data: writing passwords, tokens or personal details into logs.",
      "Making deletion hard: requiring emails and long waits when people ask to remove their account.",
    ] },
    { h: "Privacy-by-design checklist", list: [
      "List every piece of personal data the app collects and the reason for each.",
      "Remove or make optional anything without a clear purpose.",
      "Inventory all third-party tools that receive user data.",
      "Encrypt sensitive data in transit and at rest and limit staff access.",
      "Provide in-app ways to view, export and delete data.",
      "Set retention periods and automate deletion where possible.",
      "Publish an accurate privacy policy and update it when features change.",
    ] },
    { h: "Frequently asked questions", p: [
      "Do I need a privacy policy if I only collect an email address? Generally yes. Even minimal collection usually triggers expectations or legal requirements, and app stores and ad networks often require a policy.",
      "What about cookies? Many regions require clear information and, for non-essential cookies, consent. Check the rules that apply to your visitors.",
      "Do these rules apply to a small business? Many privacy laws apply regardless of size, depending on where your users are and what data you handle. Seek advice for your specific situation.",
      "What is the difference between privacy and security? Security protects data from unauthorised access. Privacy concerns whether you should collect and use the data at all, and how you treat people's choices about it.",
    ] },
  ],

  "devops-and-platform-engineering-for-small-teams": [
    { h: "A worked example: from manual uploads to a safe pipeline", p: [
      "A three-person team updates its web app by connecting to the server and copying files across. Releases happen late in the evening because everyone is nervous. Once a missing configuration file caused an outage, and it took an hour to find out which version was live.",
      "Over a month they change one thing at a time. First, all code and configuration go into Git with required review on the main branch. Second, a pipeline builds the app and runs a small set of tests on every change. Third, the pipeline deploys automatically to a staging site, where the team clicks through the key flows. Fourth, a single approved button promotes the same build to production, and the previous version is kept so they can roll back in minutes.",
      "Releases that once happened monthly now happen several times a week, and they are smaller and less stressful. The biggest gain is confidence: when something breaks, they know exactly what changed and can undo it quickly.",
    ] },
    { h: "Common mistakes to avoid", list: [
      "Adopting every tool at once: introducing containers, orchestration and complex tooling before the basics work.",
      "No tests: automating deployment of changes that nothing verifies.",
      "Alert overload: sending so many notifications that people ignore them all.",
      "Manual hotfixes: editing production directly and leaving staging and production out of step.",
      "One person knows everything: keeping deployment knowledge in a single head with no documentation.",
      "No rollback plan: assuming releases will always succeed.",
    ] },
    { h: "Getting started checklist", list: [
      "Move all code and configuration into version control.",
      "Protect the main branch and require review before merging.",
      "Add an automated build and a handful of meaningful tests.",
      "Create a staging environment that mirrors production.",
      "Automate deployment and keep the previous release available for rollback.",
      "Set up uptime checks and error tracking with sensible alerts.",
      "Document the release and rollback steps in one short page.",
    ] },
    { h: "Frequently asked questions", p: [
      "Do I need Kubernetes? Usually not for a small team. Simpler hosting options often serve well, and you can adopt heavier tools if your needs grow.",
      "What is the difference between DevOps and platform engineering? DevOps is a culture and set of practices for building and running software together. Platform engineering builds shared internal tools and templates so teams can follow those practices more easily.",
      "How many tests are enough to start? Begin with tests for your most important flows, such as login, checkout or data saving. Add more whenever a bug reaches production.",
      "Can a one-person team benefit? Yes. Automated builds, backups and monitoring protect a solo developer from avoidable mistakes and save time.",
    ] },
  ],

  "passkeys-and-passwordless-login-for-your-app": [
    { h: "A worked example: adding passkeys to an existing app", p: [
      "A subscription app has thousands of users who sign in with email and password. Support receives a steady flow of reset requests, and the team worries about reused passwords leaked from other sites.",
      "Rather than replace passwords, the team adds passkeys gradually. After a user signs in the normal way, a prompt offers to create a passkey on that device, with a short explanation that next time they can sign in with a fingerprint or face scan. The team uses a maintained library supporting the WebAuthn standard and stores only the public key and a credential identifier on its server.",
      "They keep email-based recovery and offer backup codes, so a user who loses a phone can still get back in. Sensitive actions such as changing payout details still ask for an extra check. Over time, as more users adopt passkeys, the team promotes them more prominently on the login screen and tracks the drop in password resets.",
    ] },
    { h: "Common mistakes to avoid", list: [
      "Removing passwords too early: locking out users on older devices or browsers.",
      "Weak recovery: making account recovery the easiest way for an attacker to take over an account.",
      "Rolling your own cryptography: building the protocol from scratch instead of using vetted libraries.",
      "Confusing wording: using technical terms that make users hesitate.",
      "Skipping testing: not trying sign-in across different devices, browsers and operating systems.",
      "Forgetting admin and staff accounts: leaving the most powerful accounts on the weakest login method.",
    ] },
    { h: "Rollout checklist", list: [
      "Confirm your login library or identity provider supports passkeys.",
      "Keep existing sign-in methods working at first.",
      "Offer passkey creation after a successful normal sign-in.",
      "Design recovery with verified email, backup codes or support checks.",
      "Test on the main browsers, phones and operating systems your users have.",
      "Write short, plain-language prompts that explain the benefit.",
      "Track adoption, failures and support requests, then adjust.",
    ] },
    { h: "Frequently asked questions", p: [
      "What happens if a user loses their phone? Many passkeys sync through the user's platform account, and you should also provide recovery options so users are not locked out.",
      "Are passkeys the same as biometrics? Not exactly. A fingerprint or face scan unlocks the passkey on the device, but the biometric data stays on the device and is not sent to your server.",
      "Are passkeys safer than passwords with multi-factor authentication? They are strongly resistant to phishing because they only work on the genuine site. Many security experts see them as a step forward, though a well-run multi-factor setup is also a solid choice.",
      "Do my customers need new hardware? Usually not. Many current phones and computers support passkeys, though very old devices or browsers may not.",
    ] },
  ],
};
