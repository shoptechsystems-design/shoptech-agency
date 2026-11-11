import type { Post } from "./posts";

export const TRENDING_POSTS: Post[] = [
  {
    slug: "agentic-ai-for-small-business-what-it-is-and-where-to-start",
    title: "Agentic AI for Small Business: What It Is and Where to Start",
    description: "AI agents do more than answer questions: they carry out multi-step tasks. Here is what that means for a small business, which tasks suit agents, and how to pilot one safely.",
    date: "2026-11-11",
    category: "AI & Automation",
    readMins: 7,
    sections: [
      { p: [
        "For the last few years most business use of AI looked like a chat box: you ask a question, you get an answer, and you copy it somewhere else. Agentic AI changes that pattern. An AI agent is given a goal, a set of tools and some rules, and it works through the steps on its own: looking up a record, drafting a reply, updating a system, and asking a person when it is unsure.",
        "Analysts have named agentic AI as one of the major technology themes for 2026, but the useful question for an owner or manager is practical: which of my daily tasks could an agent actually handle, and what could go wrong? This guide answers both.",
      ] },
      { h: "Chatbot, automation and agent: what is the difference?", p: [
        "A traditional automation follows a fixed script: when a form is submitted, add a row to a spreadsheet and send an email. It is predictable but cannot cope with anything unexpected. A chatbot answers questions but usually stops there. An agent sits in between and goes further. It can read an incoming email, decide what the customer wants, check your order system, draft a response, and either send it or flag it for review.",
        "The important word is decide. Because the agent chooses its own path, it can handle messy, varied input, which is exactly where fixed automations break. That flexibility is also the source of the risks we cover below.",
      ] },
      { h: "Tasks that suit an agent", list: [
        "Triage of incoming messages: sorting support emails, WhatsApp messages or contact-form enquiries by topic and urgency, and drafting first replies.",
        "Data entry and cleanup: turning invoices, receipts or purchase orders into structured records and flagging anything that looks wrong.",
        "Appointment and order follow-ups: checking status, nudging customers, and rescheduling within rules you define.",
        "Internal lookup: answering staff questions from your own documents, such as policies, price lists and product manuals.",
        "Reporting: pulling numbers from several tools and writing the weekly summary you currently assemble by hand.",
      ] },
      { h: "Tasks that do not suit an agent (yet)", p: [
        "Avoid giving an agent unsupervised control over anything that is expensive or hard to undo: issuing refunds, changing prices, deleting records, sending legal or contractual messages, or handling sensitive personal data without clear limits. For these tasks the agent should prepare the work and a person should approve it. This pattern is often called human in the loop, and it is the single most important design decision in any agent project.",
      ] },
      { h: "The three ingredients of a reliable agent", list: [
        "Good data: an agent is only as accurate as the information it can reach. If your customer list is duplicated and your product names are inconsistent, fix that first.",
        "Narrow tools: give the agent only the actions it needs, such as read an order, draft an email, create a ticket. Do not give it the keys to everything.",
        "Clear rules and logging: write down what it may and may not do, and record every action it takes so you can audit and correct it.",
      ] },
      { h: "A safe way to pilot your first agent", p: [
        "Pick one narrow, repetitive task that costs your team real hours each week. Run the agent in suggestion mode first, where it drafts and a person approves every action. Measure three things for two to four weeks: how often the draft was correct, how much time it saved, and what kinds of mistakes it made. Only when the error rate is low and the mistakes are harmless should you let it act alone, and even then only on the lowest-risk cases.",
        "Keep a way to switch it off instantly, and make sure customers can always reach a human.",
      ] },
      { h: "What it costs", p: [
        "The model usage itself is usually a small part of the bill. Most of the cost is in connecting the agent to your systems, cleaning data, writing the rules and testing. A focused pilot on one workflow is far cheaper and safer than a company-wide rollout, and it gives you real numbers to decide whether to expand.",
      ] },
      { h: "Key takeaways", list: [
        "Agents carry out multi-step tasks; chatbots only answer and automations only follow fixed scripts.",
        "Start with one repetitive, low-risk workflow and keep a human approving actions at first.",
        "Data quality, narrow permissions and audit logs matter more than which AI model you pick.",
      ] },
      { p: ["If you would like help identifying a good first workflow, our team builds custom AI automation and can scope a small pilot with you."] },
    ],
  },
  {
    slug: "vibe-coding-and-ai-coding-assistants-risks-for-business",
    title: "Vibe Coding and AI Coding Assistants: Benefits and Risks for Business",
    description: "AI tools can now generate working code from plain-English prompts. Learn where this speeds projects up, where it creates hidden risk, and how to use it responsibly.",
    date: "2026-11-10",
    category: "Software Development",
    readMins: 7,
    sections: [
      { p: [
        "Vibe coding is the practice of describing what you want in plain language and letting an AI tool write the code, often without reading it closely. AI coding assistants, which suggest or write code inside a developer's editor, are the more disciplined cousin. Both have become common in 2026, and both are changing how software gets built.",
        "For a business owner commissioning software, the question is not whether these tools are good or bad. It is understanding what they are good at, and what still needs experienced human judgement.",
      ] },
      { h: "Where AI-assisted coding genuinely helps", list: [
        "Prototypes: a clickable proof of concept can now be built in hours, which makes it cheaper to test an idea before committing a budget.",
        "Boilerplate: forms, tables, standard API endpoints and test scaffolding are repetitive, and assistants handle them quickly.",
        "Documentation and explanation: summarising an unfamiliar codebase or generating first-draft documentation saves time.",
        "Small internal tools: one-off scripts and dashboards used by a handful of staff are lower risk and a good fit.",
      ] },
      { h: "Where it creates hidden risk", p: [
        "Code that works in a demo is not the same as code that is safe to run a business on. Generated code can look correct while hiding problems, and the person who prompted it may not be able to spot them. The most common issues we see are:",
      ], list: [
        "Security gaps: missing input validation, weak authentication, secrets pasted into code, or database queries open to injection.",
        "Missing edge cases: the happy path works, but empty fields, duplicate records, time zones and failed payments are not handled.",
        "Inconsistent structure: each prompt produces slightly different patterns, so the codebase becomes hard to maintain and extend.",
        "Fake dependencies: assistants occasionally reference libraries or functions that do not exist, or pull in outdated packages with known vulnerabilities.",
        "No ownership: when nobody understands the code, every future change becomes slow and risky.",
      ] },
      { h: "A sensible rule: speed up the work, not the review", p: [
        "The teams that benefit most use AI to draft and then apply the same engineering discipline they always did. That means code review by a person who understands it, automated tests, security scanning, and a staging environment before anything reaches customers. AI shortens the writing; it does not remove the need to check.",
      ] },
      { h: "Questions to ask your development partner", list: [
        "Do you use AI coding tools, and how do you review what they produce?",
        "Will there be automated tests and a security review before launch?",
        "Who owns the code, and will I receive full source access and documentation?",
        "How do you make sure my business data is not sent to tools in a way I have not agreed to?",
      ] },
      { h: "When to avoid pure vibe coding", p: [
        "Be cautious about using unreviewed generated code for anything that handles payments, personal data, health or financial records, user logins, or core operations that would hurt if they failed. Those areas deserve proper engineering, even if AI helps along the way.",
      ] },
      { h: "Key takeaways", list: [
        "AI makes prototypes and routine code much faster and cheaper.",
        "Generated code still needs human review, tests and security checks before it runs your business.",
        "Ask any developer or agency how they use AI and how they verify the result.",
      ] },
    ],
  },
  {
    slug: "small-business-cybersecurity-checklist",
    title: "A Practical Cybersecurity Checklist for Small Businesses",
    description: "You do not need a large budget to be much harder to attack. This checklist covers the basics: passwords, updates, backups, access control and staff awareness.",
    date: "2026-11-09",
    category: "Security",
    readMins: 8,
    sections: [
      { p: [
        "Small businesses are attractive targets precisely because they are often less protected than large ones. Attackers do not need to single you out; automated tools scan the internet for weak logins, outdated software and exposed systems all day. The encouraging news is that a handful of basic habits blocks the majority of everyday attacks.",
        "Use this checklist as a starting point. You can work through it over a few weeks without a dedicated security team.",
      ] },
      { h: "1. Turn on multi-factor authentication everywhere", p: [
        "A stolen password alone should never be enough. Enable multi-factor authentication (MFA) on email, banking, cloud storage, your website admin, your code repository and your accounting software. Prefer authenticator apps or hardware keys over text messages where possible. Start with email, because whoever controls your email can reset almost every other account.",
      ] },
      { h: "2. Use a password manager", p: [
        "Reusing passwords is how one leaked account turns into ten. A password manager creates and stores a long, unique password for every service so nobody has to remember them. Require it for the whole team, and share access to common accounts through the manager rather than in chat messages or spreadsheets.",
      ] },
      { h: "3. Keep everything updated", list: [
        "Operating systems and browsers on every work device.",
        "Your website platform, plugins, themes and any libraries your custom software depends on.",
        "Routers, firewalls and other network equipment, which are often forgotten.",
        "Phones and tablets that access company email or data.",
      ], },
      { h: "4. Back up and test the restore", p: [
        "Ransomware and accidental deletion are both solved by good backups. Follow the simple 3-2-1 idea: three copies of important data, on two different types of storage, with one copy kept offline or in a separate account the attacker cannot reach. Most importantly, test a restore every few months. A backup you have never restored is only a hope.",
      ] },
      { h: "5. Give people the least access they need", p: [
        "Not everyone needs admin rights or access to every folder. Give each person only what their job requires, review it when roles change, and remove access on the day someone leaves. Avoid shared logins so you can always tell who did what.",
      ] },
      { h: "6. Prepare your team for phishing", p: [
        "Most breaches start with a convincing message: a fake invoice, a courier notice, or a note that appears to come from the boss asking for an urgent payment. Teach staff to slow down, check the sender address, avoid unexpected attachments, and verify payment or bank-detail changes by calling a known number. Make it safe to report mistakes quickly, because a fast report limits the damage.",
      ] },
      { h: "7. Secure your website and apps", list: [
        "Serve everything over HTTPS and keep certificates renewed.",
        "Validate and sanitise all user input to prevent injection attacks.",
        "Store passwords only as salted hashes, never in plain text.",
        "Limit the admin area by IP address or require MFA.",
        "Keep API keys and database credentials in environment variables, not in code.",
      ] },
      { h: "8. Write a one-page incident plan", p: [
        "Decide in advance who to call, what to disconnect, where backups are, and who will speak to customers if something goes wrong. When an incident happens, people rarely think clearly, and a short written plan saves hours.",
      ] },
      { h: "Key takeaways", list: [
        "MFA, a password manager, updates and tested backups stop most common attacks.",
        "Limit access, train staff on phishing, and secure any website or app you run.",
        "Write down a simple response plan before you need it.",
      ] },
    ],
  },
  {
    slug: "cloud-costs-for-small-teams-how-to-stop-overspending",
    title: "Cloud Costs for Small Teams: How to Stop Overspending",
    description: "Cloud bills have a way of growing quietly. Learn the common causes of waste and a simple FinOps routine that keeps hosting costs predictable.",
    date: "2026-11-08",
    category: "Cloud & DevOps",
    readMins: 7,
    sections: [
      { p: [
        "The cloud makes it easy to start small and scale up, which is its great strength and also why bills creep upward. A test server is left running, storage fills with old files, and a feature that worked fine for ten users becomes expensive at ten thousand. The discipline of managing this is often called FinOps: bringing engineering and finance together to understand and control cloud spending.",
        "You do not need a dedicated team to do the basics. A short monthly routine catches most waste.",
      ] },
      { h: "Where cloud money usually leaks", list: [
        "Idle resources: development and test servers running all night and weekends, and forgotten experiments.",
        "Oversized servers: choosing a large instance just in case and never revisiting it after launch.",
        "Unattached storage: disk volumes and old snapshots that remain after the servers they served were deleted.",
        "Data transfer: moving data between regions or out to the internet is often billed separately and surprises people.",
        "Logging and monitoring: verbose logs kept forever can cost more than the application itself.",
        "Always-on capacity: paying for peak load around the clock instead of scaling with demand.",
      ] },
      { h: "Step 1: Make costs visible", p: [
        "You cannot manage what you cannot see. Turn on your provider's billing dashboard and cost alerts. Add tags or labels to every resource showing which project, client or environment it belongs to, so the bill can be broken down in a way that makes sense to the business. Set a budget alert at, say, 80 percent of your expected monthly spend so there are no end-of-month shocks.",
      ] },
      { h: "Step 2: Right-size what you run", p: [
        "Check actual CPU and memory use over a few weeks. If a server rarely goes above 20 percent, a smaller size will do the same job for less. Review database sizes and storage tiers too, moving rarely used files to cheaper archival storage.",
      ] },
      { h: "Step 3: Switch things off", p: [
        "Schedule non-production environments to shut down outside working hours. Delete unused volumes, snapshots, load balancers and IP addresses. A recurring clean-up is often the quickest saving available.",
      ] },
      { h: "Step 4: Match the pricing model to the workload", p: [
        "Steady, predictable workloads are usually cheaper with committed-use or reserved pricing, where you agree to a term in return for a discount. Spiky or experimental workloads suit pay-as-you-go. Some interruption-tolerant jobs can run on discounted spare capacity. Compare options before committing, and avoid long commitments until your usage has stabilised.",
      ] },
      { h: "Step 5: Design for cost from the start", list: [
        "Cache frequently requested data so you do not recompute or refetch it.",
        "Compress and resize images and serve static files through a content delivery network.",
        "Use managed or serverless services for light, occasional workloads instead of running a server full time.",
        "Set retention limits on logs and backups.",
      ] },
      { h: "Is multi-cloud worth it?", p: [
        "Spreading work across several providers can reduce lock-in and improve resilience, but it adds complexity, skills and data-transfer costs. For most small teams, doing one provider well is cheaper and safer than managing several.",
      ] },
      { h: "A 30-minute monthly routine", list: [
        "Open the bill and compare it with last month and with your budget.",
        "Review the top five cost items and ask why each changed.",
        "Delete anything unused and check that dev environments are off at night.",
        "Note one optimisation to do next month.",
      ] },
      { h: "Key takeaways", list: [
        "Visibility first: dashboards, tags and budget alerts.",
        "Right-size, switch off idle resources and choose pricing to match the workload.",
        "A short monthly review prevents most surprise bills.",
      ] },
    ],
  },
  {
    slug: "low-code-vs-custom-software-which-is-right-for-you",
    title: "Low-Code vs Custom Software: Which Is Right for Your Business?",
    description: "Low-code and no-code platforms promise fast, cheap apps. Custom software promises fit and control. Here is how to decide, with a clear comparison and examples.",
    date: "2026-11-07",
    category: "Software Development",
    readMins: 7,
    sections: [
      { p: [
        "Low-code and no-code platforms let people build apps by assembling pre-made blocks on a visual canvas, with little or no programming. They have improved a lot and, combined with AI features, are increasingly capable. Custom software, by contrast, is written specifically for your needs. Neither is universally better. The right choice depends on what you are building and how long you expect to use it.",
      ] },
      { h: "Where low-code shines", list: [
        "Internal tools: approval forms, simple trackers, dashboards and small workflow apps for your own team.",
        "Speed to test: you can validate an idea in days rather than months.",
        "Lower upfront cost: you avoid paying for a full development team for a simple need.",
        "Business-user ownership: staff who know the process can adjust it without waiting for a developer.",
      ] },
      { h: "Where low-code struggles", list: [
        "Complex logic: unusual rules, heavy calculations or intricate permissions can be awkward or impossible.",
        "Integrations: connecting deeply with an ERP, CRM or third-party API often runs into platform limits.",
        "Performance and scale: platforms can slow down or become expensive as users and data grow.",
        "Lock-in: your app lives on the vendor's platform, and moving away may mean rebuilding it.",
        "Recurring fees: per-user or per-app pricing can overtake the cost of custom development over several years.",
        "Customer-facing polish: unique branding and experiences are harder to achieve.",
      ] },
      { h: "Where custom software wins", p: [
        "Custom development makes sense when the software is core to how you compete, when you need unusual workflows, when you must integrate with several systems, when security or compliance requirements are strict, or when you expect a large number of users. You own the code, can host it where you choose, and can change anything. The trade-off is a higher initial investment and the need for ongoing maintenance.",
      ] },
      { h: "A simple decision guide", list: [
        "Internal, low-risk, few users, simple process: try low-code.",
        "Customer-facing product or your main revenue system: lean custom.",
        "Needs heavy integration or unusual rules: lean custom.",
        "Unsure of requirements: prototype in low-code, learn, then decide what to build properly.",
      ] },
      { h: "The hybrid approach", p: [
        "Many businesses use both. A low-code tool handles quick internal workflows, while custom software powers the core product, and APIs connect the two. This keeps simple things cheap and reserves engineering effort for where it matters.",
      ] },
      { h: "Questions to ask before choosing", list: [
        "What happens to my data and app if the vendor raises prices or shuts down?",
        "Can I export everything in a usable format?",
        "What will this cost per year at three times my current users?",
        "Does it connect to the tools I already use?",
      ] },
      { h: "Key takeaways", list: [
        "Low-code is excellent for simple internal tools and fast prototypes.",
        "Custom software is better for core, complex or high-scale systems.",
        "Compare the multi-year cost and the lock-in risk, not just the first month.",
      ] },
    ],
  },
  {
    slug: "api-first-design-connecting-your-business-systems",
    title: "API-First Design: How to Connect Your Business Systems",
    description: "Most businesses run on several disconnected tools. APIs let them share data automatically. Learn what an API is, why API-first matters, and how to plan integrations.",
    date: "2026-11-06",
    category: "Software Development",
    readMins: 6,
    sections: [
      { p: [
        "Your accounting software, online store, CRM, inventory system and email platform probably each hold part of the picture. If they do not talk to each other, people fill the gaps by copying and pasting, and mistakes creep in. APIs are the standard way systems exchange information so that work flows automatically.",
      ] },
      { h: "What is an API?", p: [
        "An API (application programming interface) is a defined set of requests a program can make to another program. Think of a restaurant: the menu lists what you can order, the waiter carries your request to the kitchen and returns with the result, and you never need to know how the kitchen works. An API is the menu and the waiter between two pieces of software.",
      ] },
      { h: "What does API-first mean?", p: [
        "API-first means designing the interface before building the screens. The system is treated as a set of capabilities, such as create an order, fetch a customer or update stock, that any client can use: your website, a mobile app, an internal dashboard or a partner. It takes slightly more planning up front, but it makes it much easier to add a new app, connect a new tool or change the design later without rebuilding the core.",
      ] },
      { h: "Benefits for your business", list: [
        "One source of truth: data is entered once and shared, reducing duplication and errors.",
        "Faster growth: new channels such as a mobile app or marketplace reuse the same backend.",
        "Automation: orders can flow to accounting, stock updates can reach your website, and customers can be notified automatically.",
        "Flexibility: you can replace one tool without rebuilding everything around it.",
      ] },
      { h: "Common integration examples", list: [
        "Online store to accounting: orders and payments post as invoices automatically.",
        "CRM to email: new leads trigger follow-up sequences.",
        "Dispatch system to SMS or WhatsApp: customers receive delivery updates.",
        "Payment gateway to your app: payments confirm orders in real time.",
      ] },
      { h: "Planning an integration", list: [
        "Map the process: where does the data start, where must it end, and who needs to see it?",
        "Check what each tool offers: does it have a documented API, webhooks or built-in connectors?",
        "Decide the direction: one-way or two-way sync, and which system wins if data conflicts.",
        "Plan for failure: what happens if an API is down or a request fails? Use retries and logging.",
        "Protect access: use secure authentication, keep keys secret and limit permissions.",
        "Watch the limits: many APIs restrict how many requests you can make, and some charge for usage.",
      ] },
      { h: "Connectors, middleware or custom code?", p: [
        "Ready-made connector tools are quick for common pairings. Middleware platforms help when many systems must be coordinated. Custom integration makes sense when logic is specific to your business or when volume and reliability requirements are high. Often a mix is best.",
      ] },
      { h: "Key takeaways", list: [
        "APIs let your systems share data so staff stop re-typing it.",
        "API-first design makes it easier to add apps and channels later.",
        "Plan for errors, security and rate limits from the start.",
      ] },
    ],
  },
  {
    slug: "data-privacy-for-web-and-mobile-apps-what-to-get-right",
    title: "Data Privacy for Web and Mobile Apps: What to Get Right",
    description: "Collecting user data brings legal and ethical duties. This guide covers data minimisation, consent, security, privacy policies and account deletion for apps.",
    date: "2026-11-05",
    category: "Security",
    readMins: 7,
    sections: [
      { p: [
        "Almost every app collects some personal information, from an email address to location or payment details. Users, app stores and regulators increasingly expect that data to be handled carefully. Getting privacy right is part of building trust, and it is much cheaper to design for it from the beginning than to fix it later.",
        "This article is general guidance, not legal advice. Rules differ by country and industry, so confirm your obligations with a qualified professional.",
      ] },
      { h: "Principle 1: Collect only what you need", p: [
        "Data minimisation means asking for the least information required to deliver the service. Every extra field is something you must secure, explain and eventually delete. If you do not need a user's phone number or birth date, do not ask for it.",
      ] },
      { h: "Principle 2: Be clear and get consent where required", p: [
        "Tell people in plain language what you collect, why, who you share it with and how long you keep it. Where consent is needed, for example for marketing emails or non-essential cookies, make it a genuine choice rather than a pre-ticked box. Keep a record of when and how consent was given.",
      ] },
      { h: "Principle 3: Protect data in transit and at rest", list: [
        "Use HTTPS for all traffic.",
        "Encrypt sensitive fields in the database and in backups.",
        "Hash passwords with a modern algorithm; never store them in plain text.",
        "Restrict who in your team can see production data, and log that access.",
        "Keep secrets and keys out of source code and out of mobile app bundles.",
      ] },
      { h: "Principle 4: Give users control", p: [
        "People should be able to see what you hold about them, correct it, export it and delete it. Mobile app stores now expect apps that let people create an account to also let them delete that account and its data from inside the app or through a clearly documented process. Build this early, with a documented process for what is deleted immediately and what must be retained, such as invoices required by tax law.",
      ] },
      { h: "Principle 5: Be careful with third parties", p: [
        "Analytics, advertising, payment, support-chat and crash-reporting tools often receive user data. List every one, understand what each collects, and disclose them in your privacy policy. If you show ads, your policy should explain that third-party vendors use cookies to serve ads and how users can opt out. Review these tools periodically, because it is easy to add one and forget it.",
      ] },
      { h: "What a good privacy policy includes", list: [
        "Who you are and how to contact you.",
        "What data you collect and the reasons for collecting it.",
        "Which third parties receive data, including advertising and analytics providers.",
        "How long you keep data and how it is secured.",
        "User rights and how to exercise them, including deletion.",
        "How you will notify people of changes.",
      ] },
      { h: "Plan for a breach", p: [
        "Even careful organisations can be breached. Know in advance how you would detect it, who decides what to do, whom you must notify, and how you would tell affected users. Quick, honest communication matters.",
      ] },
      { h: "Key takeaways", list: [
        "Collect less, explain clearly and secure what you keep.",
        "Give users access and deletion options, and document third-party tools.",
        "Have a simple breach response plan and revisit your privacy policy regularly.",
      ] },
    ],
  },
  {
    slug: "devops-and-platform-engineering-for-small-teams",
    title: "DevOps and Platform Engineering for Small Teams",
    description: "You do not need a large team to ship reliably. Learn the practical DevOps habits (version control, CI/CD, monitoring, infrastructure as code) that keep software stable.",
    date: "2026-11-04",
    category: "Cloud & DevOps",
    readMins: 7,
    sections: [
      { p: [
        "DevOps is a set of habits that helps teams release software quickly and reliably. Platform engineering is the newer practice of building an internal toolkit that makes those habits easy for everyone. Both sound like large-company topics, but small teams often benefit even more, because they have little time to waste on manual, error-prone releases.",
      ] },
      { h: "The problem they solve", p: [
        "Without good practices, releases happen by uploading files by hand, fixes break something else, nobody is sure which version is live, and one person holds all the knowledge. Every release is stressful, so releases become rare and big, which makes them riskier still. The goal is the opposite: small, frequent, boring releases.",
      ] },
      { h: "Habit 1: Version control for everything", p: [
        "Keep code in a system such as Git with a clear history of who changed what and why. Use branches and review requests so changes are checked before they go live. Store configuration and deployment scripts there too.",
      ] },
      { h: "Habit 2: Continuous integration (CI)", p: [
        "Every time someone pushes a change, an automated job builds the project and runs tests and checks. This catches mistakes within minutes, while the change is still fresh in the author's mind. Even a few basic tests and a type check or linter are valuable.",
      ] },
      { h: "Habit 3: Continuous delivery (CD)", p: [
        "Once checks pass, the system deploys automatically to a staging environment, and with a single approval to production. Automated deployment removes manual steps, makes releases repeatable and lets you roll back quickly when something goes wrong.",
      ] },
      { h: "Habit 4: Infrastructure as code", p: [
        "Describe your servers, databases and networking in files rather than clicking through a console. You can then recreate an environment from scratch, review infrastructure changes like code, and avoid mysterious differences between staging and production.",
      ] },
      { h: "Habit 5: Monitoring and alerts", list: [
        "Uptime checks that tell you the site is down before customers do.",
        "Error tracking that shows exceptions with context.",
        "Basic performance metrics: response times, CPU, memory and database load.",
        "Alerts that go to the right person and are tuned so they are not ignored.",
      ] },
      { h: "Where platform engineering fits", p: [
        "As a team grows, each project can end up reinventing its own pipelines and setups. Platform engineering creates a shared, well-documented path: templates for new services, standard pipelines, built-in logging and security checks. Developers can then ship without becoming infrastructure experts. For a small team this can start very simply, with one template repository and a documented checklist.",
      ] },
      { h: "A realistic starting plan", list: [
        "Week 1: everything in Git, with a protected main branch and code review.",
        "Week 2: automated build and tests on every push.",
        "Week 3: automatic deploy to staging, with a one-click production release.",
        "Week 4: uptime monitoring, error tracking and a written rollback procedure.",
      ] },
      { h: "Key takeaways", list: [
        "Small, frequent, automated releases are safer than big manual ones.",
        "Version control, CI/CD, infrastructure as code and monitoring form the core.",
        "Start small and add practices one at a time.",
      ] },
    ],
  },
  {
    slug: "passkeys-and-passwordless-login-for-your-app",
    title: "Passkeys and Passwordless Login: Should Your App Adopt Them?",
    description: "Passwords are the weakest part of most apps. Passkeys offer phishing-resistant, easier sign-in. Here is how they work and how to roll them out.",
    date: "2026-11-03",
    category: "Security",
    readMins: 6,
    sections: [
      { p: [
        "Passwords are hard to remember, easy to reuse and easy to steal through phishing. Passkeys are a newer sign-in method designed to fix those problems. Major platforms and browsers now support them, and more users are encountering the prompt to create one. If you run a website or app with logins, it is worth understanding whether and how to offer them.",
      ] },
      { h: "How passkeys work", p: [
        "A passkey is based on a pair of cryptographic keys. When a user registers, their device creates a private key that never leaves the device and a public key that is stored on your server. To sign in, the device proves it holds the private key, usually after the user unlocks it with a fingerprint, face scan or device PIN. There is no shared secret to type, so there is nothing for a phishing site or a leaked database to capture.",
      ] },
      { h: "Benefits", list: [
        "Phishing resistance: a passkey only works on the genuine site it was created for.",
        "Nothing valuable to steal from your server: only public keys are stored.",
        "Faster sign-in: users tap or scan instead of typing and resetting passwords.",
        "Fewer support requests: there are no forgotten-password emails to handle.",
      ] },
      { h: "Challenges to plan for", list: [
        "Device changes and recovery: users need a safe way back in if they lose a device. Many passkeys sync through the platform's account, but you still need a fallback.",
        "Mixed audiences: older devices and some browsers lag, so you will support passwords alongside passkeys for a while.",
        "User understanding: the idea is new, so clear wording and prompts matter.",
        "Shared devices and business accounts: decide how to handle them.",
      ] },
      { h: "A practical rollout", list: [
        "Keep existing login working and add passkeys as an option after sign-in, for example by offering to create one.",
        "Use a well-maintained library or an identity provider that supports the WebAuthn standard instead of building the cryptography yourself.",
        "Pair it with recovery options such as email verification or backup codes.",
        "Measure adoption and sign-in success, then promote passkeys more prominently as confidence grows.",
        "Keep multi-factor authentication for sensitive actions such as changing payout details.",
      ] },
      { h: "Should you adopt them?", p: [
        "For apps with many returning customers, financial or personal data, or heavy password-reset support, passkeys are a strong improvement. For a small internal tool, a good identity provider with MFA may be enough. Either way, the direction is clear: reducing reliance on passwords makes accounts safer.",
      ] },
      { h: "Key takeaways", list: [
        "Passkeys replace typed passwords with device-based cryptographic sign-in.",
        "They resist phishing and reduce support load.",
        "Roll them out as an addition first, with solid recovery options.",
      ] },
    ],
  },
];
