import type { PostSection } from "./posts";

/** Additional sections appended to the original articles, keyed by slug. */
export const EXTRA_B: Record<string, PostSection[]> = {
  "how-much-does-custom-business-software-cost": [
    {
      h: "A worked example: scoping a delivery-tracking tool",
      p: [
        "Imagine a small distribution company that wants to replace phone calls and paper delivery slips with a tracking tool. The first idea on the wishlist is long: customer portal, driver app for Android and iOS, route optimisation, automated invoicing, WhatsApp notifications, analytics dashboards and an admin panel. Quoted as one project, it looks expensive and risky.",
        "Now split it by value. The biggest daily pain is that dispatchers cannot see which orders are out for delivery. So release one is a web admin panel where staff create orders and assign drivers, plus a simple driver web page that works on any phone browser to mark deliveries as done. Release two adds notifications to customers. Release three adds invoicing. Route optimisation and the native apps wait until the company has proof that the basics are used every day.",
        "Each release can be priced, built and judged on its own. If release one does not change how the team works, you have learned that cheaply, before paying for the rest.",
      ],
    },
    {
      h: "Common budgeting mistakes",
      list: [
        "Choosing the cheapest quote without checking what it excludes, such as testing, deployment, documentation or revisions.",
        "Treating every feature as equally important instead of ranking them as must-have, should-have and later.",
        "Forgetting that your own staff need time to give feedback, test and answer questions. Slow decisions on your side raise the cost.",
        "Changing requirements mid-build without agreeing how changes are priced.",
        "Not budgeting for data clean-up before importing old records.",
        "Skipping a small discovery phase, then paying far more to fix wrong assumptions later.",
      ],
    },
    {
      h: "Step-by-step: preparing a brief that gets accurate quotes",
      list: [
        "Write one paragraph describing the problem in plain language, not the solution you imagine.",
        "List every type of user and the three to five things each must be able to do.",
        "Note the tools it must connect to, such as your accounting software, payment gateway or SMS provider.",
        "Mark each feature as must-have for launch, nice to have, or later.",
        "Describe where your data lives today and roughly how many records need to move.",
        "State your deadline and the reason for it, since a firm date changes how the work is planned.",
        "Ask each agency to list assumptions and exclusions in writing so quotes can be compared fairly.",
      ],
    },
    {
      h: "Frequently asked questions",
      p: [
        "Why do two quotes for the same idea differ so much? Usually because they assume different scope, quality and support. One may include testing, security review and training while the other does not. Compare the written assumptions, not just the totals.",
        "Can I reduce the price by supplying my own designs? Sometimes, if the designs are complete and consistent. Rough sketches still need design work, and designs that ignore how the screens will really be built can create extra cost.",
        "Is a cheaper offshore or freelance developer a safe option? It can be, if the person has relevant, verifiable work and you agree on communication, code ownership and testing. The risk is rarely the location; it is unclear scope and lack of follow-up support.",
        "How much should I keep aside for changes? It is wise to hold a reserve for unexpected requests and small improvements once real users start testing, because the best ideas often appear after the first release.",
        "Do I need to pay for maintenance if nothing is broken? Software depends on operating systems, libraries and services that keep changing, so regular updates and security fixes are part of keeping it healthy, even when it appears to work.",
      ],
    },
  ],

  "erp-vs-spreadsheets-when-to-switch": [
    {
      h: "A worked example: a small trading business",
      p: [
        "Picture a wholesaler with two warehouses and six staff. Sales are recorded in one spreadsheet, stock in another, and supplier payments in a third. Each evening someone copies the day's sales into the stock file. One afternoon a customer is promised forty units of an item that the stock sheet says are available, but the second warehouse sold them that morning and nobody updated the file yet.",
        "The cost is not only an apology. Someone has to check the physical shelves, call the supplier for an emergency order, and later reconcile the difference by hand. Multiply that by a few incidents a month and the hidden labour becomes clear.",
        "With a shared system, the sale reduces stock the moment it is confirmed, both warehouses see the same number, and a low-stock alert tells purchasing to reorder before the shelf is empty. The point is not fancy features; it is that one fact is stored in one place.",
      ],
    },
    {
      h: "Common mistakes when leaving spreadsheets",
      list: [
        "Buying a large system and switching everything on at once, which overwhelms staff and hides problems.",
        "Copying messy data in as it is, so duplicates and inconsistent product names follow you into the new system.",
        "Designing the new process around the old spreadsheet instead of asking what the work should look like.",
        "Not naming an owner on the business side who decides how data is entered.",
        "Shutting the spreadsheets off before the team trusts the new system, which pushes people to keep private copies.",
        "Ignoring reports: if the old monthly report cannot be produced, people will not switch.",
      ],
    },
    {
      h: "Step-by-step: a staged migration plan",
      list: [
        "List every spreadsheet in use and who updates it. You will usually find more than you expected.",
        "Pick the one area causing the most errors, often inventory or invoicing, and move only that first.",
        "Clean the data: merge duplicates, standardise names and units, and delete dead records.",
        "Import a copy into the new system and compare totals with the spreadsheet to prove they match.",
        "Run both in parallel for a short, fixed period, with the new system as the main record.",
        "Make the old spreadsheet read-only on a stated date and announce it to everyone.",
        "Collect feedback after two weeks, fix friction, then start the next module.",
      ],
    },
    {
      h: "Frequently asked questions",
      p: [
        "Do I need an ERP if I only have a few employees? Not always. If a spreadsheet is accurate and only one or two people touch it, it may be enough. The signal to move is repeated errors, duplicated entry and difficulty seeing the same numbers across the team.",
        "How long does a switch usually take? It depends on scope and data quality. A single module can go live in weeks, while a full multi-department rollout takes much longer. Starting with one painful area keeps it manageable.",
        "Can an ERP still export to Excel? A good one can. Many teams keep Excel for ad-hoc analysis, and the difference is that the numbers come from one reliable source rather than being typed by hand.",
        "What if my staff resist the change? Involve them early, ask what slows them down today, and show that the new system removes retyping. Training and a patient transition period matter as much as the software.",
        "Is cloud or on-premise better? Cloud is simpler to maintain and access remotely, while on-premise gives more direct control. Consider your internet reliability, security needs and who will handle updates and backups.",
      ],
    },
  ],

  "how-to-choose-a-software-development-agency": [
    {
      h: "A worked example: comparing three agencies",
      p: [
        "Suppose you need a booking platform for a chain of salons and you collect three proposals. Agency A sends a one-page quote with a very low price and no questions. Agency B asks to speak with the salon managers, proposes a two-week discovery phase, and prices the build in two releases. Agency C gives a mid-range price, shows a live booking product it built, and offers a short paid pilot.",
        "On price alone, A wins. But A never asked how double bookings should be handled, how staff schedules differ between branches, or how deposits work. Those gaps become change requests later. B and C show the signs of agencies that understand the work: they ask, they stage the project, and they let you test before committing fully.",
        "A simple way to compare is to score each one on relevant experience, clarity of scope, communication, code ownership and post-launch support, then weigh price last.",
      ],
    },
    {
      h: "Common mistakes when hiring an agency",
      list: [
        "Judging only by a polished sales presentation instead of speaking with a past client.",
        "Not asking who will actually write the code, and discovering the work is subcontracted without your knowledge.",
        "Signing a contract that does not mention source code ownership, hosting accounts or handover.",
        "Agreeing to pay most of the fee up front with no milestones tied to working software.",
        "Treating the first estimate as final without understanding what happens when requirements change.",
        "Leaving out testing and security from the agreement.",
      ],
    },
    {
      h: "Step-by-step: running a fair selection",
      list: [
        "Prepare a short written brief so every agency answers the same questions.",
        "Shortlist three agencies with work relevant to your sector or platform.",
        "Try their live products and ask for one or two client contacts you can speak to.",
        "Hold a call with the actual project lead and ask how they would approach your first month.",
        "Compare written proposals for scope, assumptions, exclusions, timeline and support terms.",
        "Consider a small paid pilot or discovery phase before committing to the full build.",
        "Review the contract for code ownership, payment milestones, confidentiality and exit terms before signing.",
      ],
    },
    {
      h: "Frequently asked questions",
      p: [
        "Should I choose a big agency or a small one? Neither is automatically better. Larger agencies offer more specialists, while smaller teams often give you direct access to the people building your product. Choose based on fit, relevant experience and attention you will receive.",
        "What should a good contract include? Scope description, milestones and payment schedule, ownership of code and data, confidentiality, how changes are handled, testing and acceptance criteria, and what support follows launch.",
        "How do I verify an agency is honest about past work? Open the live products, check they actually work, ask for references, and look for consistent detail when they explain what they personally built.",
        "Is it a bad sign if an agency says no to a feature? Not at all. A good partner will push back on ideas that add cost without value and suggest simpler alternatives.",
        "Can I switch agencies mid-project? It is possible if you own the code and have documentation, which is why those points matter at the start. Without them, switching can be slow and costly.",
      ],
    },
  ],

  "why-small-businesses-need-a-crm": [
    {
      h: "A worked example: a service business with scattered leads",
      p: [
        "Consider a home-renovation company with three salespeople. Enquiries arrive through a website form, Instagram messages, phone calls and referrals. Each salesperson keeps notes in their own way. A customer asks for a quote on Monday, the salesperson is busy on site, and the message is buried under newer ones. By Friday the customer has hired someone else.",
        "With a simple CRM, every enquiry becomes a record the moment it arrives, automatically assigned to someone and given a follow-up date. A manager opens one board in the morning and sees which leads are new, which are waiting for a quote and which have gone quiet for three days. Nothing depends on one person's memory.",
        "The business has not hired anyone or advertised more. It has simply stopped losing the leads it already paid to attract.",
      ],
    },
    {
      h: "Common CRM mistakes",
      list: [
        "Choosing a tool with dozens of features nobody needs, so the team avoids it.",
        "Not agreeing on what each deal stage means, which makes the pipeline unreliable.",
        "Allowing some leads to stay in WhatsApp or personal phones instead of the system.",
        "Entering data inconsistently, for example several spellings of the same company name.",
        "Importing every old contact without cleaning, which fills the system with dead records.",
        "Leadership asking for reports but never using the system themselves, so staff see it as extra work.",
      ],
    },
    {
      h: "Step-by-step: setting up a small-team CRM",
      list: [
        "Write down the stages a customer goes through, for example new enquiry, contacted, quote sent, negotiating, won, lost.",
        "Decide the few fields you truly need: name, phone, email, source, value and next follow-up date.",
        "Import existing contacts after removing duplicates and outdated entries.",
        "Set a rule that every new lead must be recorded the same day, whatever channel it came from.",
        "Create automatic reminders for follow-ups so nothing relies on memory.",
        "Hold a short weekly review of the pipeline, using the CRM on screen rather than separate notes.",
        "After a month, review which fields are unused and which reports you actually need, then adjust.",
      ],
    },
    {
      h: "Frequently asked questions",
      p: [
        "Is a spreadsheet good enough instead of a CRM? For a very small number of customers it can work, but it lacks reminders, history per contact and shared access control. As soon as several people handle leads, the gaps start to cost sales.",
        "How much does a CRM cost? Prices range from free plans to premium subscriptions, and a custom CRM has a build cost but no per-user licence. Compare the total cost over a few years, not just the first month.",
        "Can a CRM work with WhatsApp and email? Many can, either through built-in integrations or through connectors, so conversations are logged against the right customer. Check what your chosen tool supports.",
        "Will a CRM replace my salespeople? No. It handles reminders and record keeping so people can spend their time talking to customers.",
        "Who should own the CRM in a small company? One person should be responsible for how it is configured and for data quality, even if everyone uses it daily.",
      ],
    },
  ],

  "shopify-vs-custom-ecommerce": [
    {
      h: "A worked example: a growing apparel brand",
      p: [
        "Imagine a clothing brand that launches on Shopify with a handful of products. The first year goes smoothly: the theme looks good, payments work, and the owner spends time on photography and marketing instead of servers. As the catalogue grows, they add apps for reviews, subscriptions, loyalty points and size recommendations. Each has a monthly fee, and the checkout begins to feel slower.",
        "Then a new need appears. The brand wants customers to design a custom print, see a live preview, and have the order flow straight to the factory's production system with the correct dimensions. No ready-made app does exactly this.",
        "A sensible path is not to rebuild everything. The team keeps the storefront and checkout on the platform, and builds one custom app for the design preview and the factory integration. If later the monthly costs and constraints outweigh the benefits, a full custom store can be planned with real sales data to guide it.",
      ],
    },
    {
      h: "Common e-commerce platform mistakes",
      list: [
        "Building a custom store before proving that people want the product.",
        "Installing too many apps, which slows pages and creates a messy, expensive stack.",
        "Choosing a platform only for its low entry price without checking transaction fees and app costs.",
        "Ignoring how easily products, customers and orders can be exported if you ever move.",
        "Neglecting mobile checkout, even though many customers will buy on a phone.",
        "Skipping basic trust elements such as clear shipping, returns and contact information.",
      ],
    },
    {
      h: "Step-by-step: deciding which route to take",
      list: [
        "List your must-have features: payment methods, delivery options, product types and integrations.",
        "Check which of them a hosted platform handles out of the box or with a well-reviewed app.",
        "Estimate monthly costs over two years, including apps, fees and a developer for adjustments.",
        "Identify anything unusual about your business that a template cannot support.",
        "If only one or two needs are special, plan a custom app or integration rather than a full build.",
        "Launch on the faster option, collect real sales and customer feedback, and revisit the decision every six to twelve months.",
      ],
    },
    {
      h: "Frequently asked questions",
      p: [
        "Is Shopify good for large catalogues? It can handle large catalogues, but complex rules around pricing, variants and inventory may need custom work or higher plans. Evaluate with your real data.",
        "Can I move from Shopify to a custom store later? Yes. Plan the move so you can export products, customer records and order history, and keep your URLs stable to protect search visibility.",
        "Who is responsible for security on a hosted platform? The platform manages much of the infrastructure and payment security, but you are still responsible for strong staff passwords, app choices and the content you publish.",
        "Will a custom store rank better in search? Not automatically. Page speed, structure, unique content and links matter more than the platform, and both approaches can be optimised well.",
        "What are the hidden costs of a custom store? Hosting, security updates, bug fixes, payment-gateway integration, and the time to build features that a hosted platform provides by default.",
      ],
    },
  ],

  "web-app-vs-mobile-app": [
    {
      h: "A worked example: a field-inspection product",
      p: [
        "Suppose a company wants a tool for inspectors who visit buildings, take photos, record findings and produce a report. The first instinct is to build both an Android app and an iOS app. But think about how it is used: inspectors work in basements and rural areas with weak signal, need the camera, and want to capture notes quickly with one hand.",
        "These needs point to a mobile app with offline storage and later synchronisation. The office staff who review and approve the reports, by contrast, sit at desks and need tables, filters and PDF exports, which a web app serves well.",
        "So the split is natural: a web dashboard for the office, and a focused mobile app for the field. Both talk to the same backend. The team can start with the dashboard and a lightweight mobile web page to test the workflow, then invest in a full native app once the process is proven.",
      ],
    },
    {
      h: "Common mistakes when choosing a platform",
      list: [
        "Building for iOS and Android at the same time before testing the idea with a small group.",
        "Assuming a mobile app is needed just because competitors have one.",
        "Underestimating the ongoing cost of two app stores, each with review rules, updates and device quirks.",
        "Ignoring offline needs until late, when retrofitting them is difficult.",
        "Designing a desktop layout and simply shrinking it for phones.",
        "Not planning push notifications, analytics and crash reporting from the start.",
      ],
    },
    {
      h: "Step-by-step: choosing where to start",
      list: [
        "Describe where and how your users will use the product: desk, vehicle, shop floor or on the move.",
        "List device features you truly need, such as camera, location, notifications and offline use.",
        "Check whether a responsive web app or a progressive web app can meet those needs.",
        "Look at your audience: which devices and operating systems do they actually own?",
        "Build the smallest version on one platform and put it in front of real users.",
        "Measure usage and feedback, then decide whether to add the second platform.",
      ],
    },
    {
      h: "Frequently asked questions",
      p: [
        "What is a progressive web app? It is a website that can be installed on a phone, work partly offline and send some notifications. It sits between a normal website and a native app and can be a cost-effective first step.",
        "Is cross-platform development a good idea? Frameworks that share code between Android and iOS can reduce cost and keep behaviour consistent. They are a strong option for many business apps, though very demanding graphics or deep device features may still call for native code.",
        "Do I need to publish on the app stores? Only if you want store discovery or need native features. Internal tools can often be distributed privately or used as a web app.",
        "How long does app store approval take? It varies and can involve revisions. Plan time for review, privacy disclosures and clear descriptions, and prepare your privacy policy and account-deletion process in advance.",
        "Can the same backend serve both web and mobile? Yes, and it should. A well-designed API lets every client use the same data and business rules.",
      ],
    },
  ],

  "how-ai-automation-saves-small-business-time": [
    {
      h: "A worked example: handling supplier invoices",
      p: [
        "Imagine a small restaurant group that receives invoices from many suppliers as PDFs and photos sent by email and WhatsApp. An office assistant spends several hours each week reading them, typing totals into accounting software and chasing missing details.",
        "A careful automation might work like this. Incoming files are collected in one folder. A tool extracts the supplier, date, items and total, and places them in a review screen. Anything it is unsure about, such as a blurry photo or an unusual total, is highlighted. The assistant checks the highlighted ones, approves the rest in bulk, and the data posts to the accounting system.",
        "The assistant is still in control, and the work shifts from typing to checking. Over a few weeks the group measures time spent and number of corrections, and uses that to decide whether to extend the approach to purchase orders.",
      ],
    },
    {
      h: "Common automation mistakes",
      list: [
        "Automating a broken process, which only makes mistakes happen faster.",
        "Starting with a high-risk task, such as sending payments, before the tool has earned trust.",
        "Not measuring the time taken before automating, so success cannot be shown.",
        "Sending sensitive customer data to a service without reading its privacy terms.",
        "Ignoring edge cases such as missing fields, duplicates or unexpected formats.",
        "Leaving no way for staff to override or correct the automated result.",
      ],
    },
    {
      h: "Step-by-step: automating your first task",
      list: [
        "Write down the task as steps, and time how long it takes for a week.",
        "Fix obvious problems in the process before adding technology.",
        "Choose the repetitive, rule-based parts that are low risk if they go wrong.",
        "Build or configure the automation so a person reviews the output at first.",
        "Test with real examples, including messy ones, and note every error.",
        "Track time saved and errors for a few weeks, then reduce manual review only where results are consistently good.",
        "Document how it works and who maintains it so it does not depend on one person.",
      ],
    },
    {
      h: "Frequently asked questions",
      p: [
        "Will automation replace my employees? In most small businesses it shifts people away from repetitive typing and toward customer contact, checking and decision-making. The goal is to use staff time better.",
        "Do I need to be technical to start? No. Many useful automations use existing tools and simple connections. For anything touching important data, it helps to involve someone who can set it up safely.",
        "How do I know if an AI answer is wrong? You cannot always tell by looking, which is why review steps, test cases and limits on what the system is allowed to do are important.",
        "Is it safe to use AI with customer data? It depends on the provider and what you send. Read their data handling terms, send only what is necessary, and avoid sharing sensitive details when you can.",
        "What is a good first project? A frequent, rule-based and low-risk task, such as sorting enquiries, drafting standard replies or producing a weekly summary.",
      ],
    },
  ],

  "fleet-dispatch-software-guide": [
    {
      h: "A worked example: a regional trucking operation",
      p: [
        "Consider a carrier with twenty trucks and three dispatchers. Loads arrive by phone and email. Dispatchers write them on a whiteboard, call drivers to ask who is free, and later update a spreadsheet for billing. When a driver reports a delay, the dispatcher has to call the customer and then edit several places.",
        "With dispatch software, each load is a record with pickup, drop-off, rate and documents. The dispatcher sees which drivers are available, assigns a load, and the driver receives it on their phone. At delivery, the driver uploads a signed proof, the status changes automatically, the customer is notified, and the system prepares the invoice and the driver settlement.",
        "No single step is dramatic, but removing the repeated calls and retyping gives dispatchers time to plan better routes and handle exceptions rather than update records.",
      ],
    },
    {
      h: "Common mistakes when adopting dispatch software",
      list: [
        "Choosing a system that dispatchers like but drivers find slow or confusing on the road.",
        "Forgetting how often connectivity drops, and not testing offline behaviour.",
        "Entering loads in the system late, so the live view is not trustworthy.",
        "Leaving accounting disconnected, which means invoices and settlements are still done by hand.",
        "Using a single admin login for everyone, losing accountability and access control.",
        "Failing to define what counts as on time, so reports are not comparable.",
      ],
    },
    {
      h: "Step-by-step: rolling out dispatch software",
      list: [
        "Map your current load lifecycle from first enquiry to payment, including paperwork.",
        "List the special rules in your business, such as detention charges, fuel surcharges or multiple depots.",
        "Pilot with a small group of dispatchers and a few trusted drivers for a couple of weeks.",
        "Train drivers with short practical sessions on the phone app, not long manuals.",
        "Move invoicing and settlement into the system once load data is reliable.",
        "Review delay and profitability reports monthly and adjust routes and pricing based on them.",
      ],
    },
    {
      h: "Frequently asked questions",
      p: [
        "Do drivers need special devices? Usually not. Most systems run on a standard smartphone, though you should check battery use and how well the app handles weak signal.",
        "Can dispatch software handle several depots or branches? Many can, with branch-level permissions and reports. If your rules are unusual, a custom approach may fit better.",
        "How do customers track their delivery? Through automatic status messages by SMS, WhatsApp or email, or through a tracking link or portal, depending on the system.",
        "What about regulations and paperwork? Requirements vary by region and cargo. Check what documents you must retain and whether the system stores and exports them properly.",
        "Can it integrate with accounting software? Often yes, through exports or integrations. Confirm this before you choose, since manual double entry cancels many of the benefits.",
      ],
    },
  ],

  "school-management-system-features": [
    {
      h: "A worked example: fee collection at a mid-sized school",
      p: [
        "Imagine a school with several hundred students where fees are tracked in registers and receipts are written by hand. Each month the accounts clerk reconciles the receipt book with the register, writes a list of defaulters and gives it to teachers to remind parents. Mistakes are common: a payment recorded under the wrong child, a discount applied twice, or a receipt that cannot be found when a parent disputes it.",
        "With a school management system, fee structures are defined once per class, including sibling discounts and transport charges. The system generates each month's fee vouchers, records payments against the right student and prints a numbered receipt. A report lists overdue amounts, and an automatic reminder goes to parents by SMS or WhatsApp.",
        "The principal can now see collection status by class in a few clicks, and the accounts clerk spends time resolving exceptions rather than copying numbers between books.",
      ],
    },
    {
      h: "Common mistakes when introducing a school system",
      list: [
        "Trying to launch every module before the school year starts and overwhelming teachers.",
        "Importing student records with spelling variations and missing guardian contact details.",
        "Giving all staff the same access, so sensitive data such as fees and grades is widely visible.",
        "Not agreeing on grading rules and report card formats before configuring the system.",
        "Skipping training for part-time teachers and office assistants.",
        "Failing to arrange regular backups and a plan for restoring data.",
      ],
    },
    {
      h: "Step-by-step: a term-by-term rollout",
      list: [
        "Collect student, guardian and class data and clean it in one spreadsheet before importing.",
        "Set up classes, sections, subjects and teacher assignments.",
        "Start with attendance, since it is used daily and gives quick confidence.",
        "Add fee structures and voucher generation once records are accurate.",
        "Introduce exams and report cards before the first assessment period, testing with sample data.",
        "Enable parent notifications and portals only after staff are comfortable.",
        "Review feedback at the end of the term and adjust before adding more modules.",
      ],
    },
    {
      h: "Frequently asked questions",
      p: [
        "How do we protect student data? Use role-based access, strong passwords, regular backups and secure hosting, and collect only what the school needs. Make sure staff understand why privacy matters.",
        "Can the system print our existing report card format? A flexible system can be configured or customised to match your layout, grading scale and comments. Provide samples early.",
        "Do parents need smartphones? Not necessarily. SMS and printed documents can still reach families, and portals or apps can be offered as an optional extra.",
        "What happens if the internet goes down? Ask about offline options or how quickly you can recover. Many schools keep a simple fallback process for attendance and fee receipts.",
        "Can we move from our old software? Often yes, if the old system can export data. Test an import with a small sample and check totals before the full migration.",
      ],
    },
  ],

  "website-speed-and-seo-basics": [
    {
      h: "A worked example: a local clinic website",
      p: [
        "Imagine a clinic whose homepage takes several seconds to appear on a mobile connection. The cause is ordinary: a huge banner photo straight from a camera, three decorative fonts, a slider that loads six more large images, and an old plugin that adds a chat widget nobody uses.",
        "The fixes are not glamorous. The banner is resized and saved in a modern format, the number of fonts is cut to one family, the slider is replaced by a single clear image, and the unused widget is removed. Each page gets its own title such as Dental Implants in the city name, with a short description that tells people what they will find.",
        "The clinic then adds a useful page for each service with real answers to questions patients ask, and links them together. Nothing here needs a developer's heroics, yet the site becomes faster, clearer and easier for search engines to understand.",
      ],
    },
    {
      h: "Common speed and SEO mistakes",
      list: [
        "Uploading images at full camera size and relying on the browser to shrink them.",
        "Using the same title and description on every page.",
        "Writing for search engines with repeated keywords instead of helpful, natural text.",
        "Hiding important text inside images, where it cannot be read or indexed.",
        "Blocking search engines by mistake with a leftover setting from development.",
        "Never checking the site on a real phone with a slower connection.",
        "Copying text from other websites, which adds no value and can harm trust.",
      ],
    },
    {
      h: "Step-by-step: a one-afternoon website tune-up",
      list: [
        "Run your key pages through PageSpeed Insights and note the biggest issues it reports.",
        "Resize and compress the largest images, and convert them to a modern format where possible.",
        "Remove plugins, scripts and fonts you do not truly need.",
        "Check that every page has a unique title, one main heading and a short, accurate description.",
        "Add descriptive alt text to meaningful images.",
        "Confirm your sitemap is submitted in Search Console and that no important page is blocked.",
        "Test the site on a phone: readable text, tappable buttons and no sideways scrolling.",
        "Plan one new helpful article or service page each week and link it from related pages.",
      ],
    },
    {
      h: "Frequently asked questions",
      p: [
        "How long does SEO take to show results? Search engines need time to discover, evaluate and trust new or changed content, so improvements usually build gradually over weeks and months rather than overnight.",
        "Do I need to pay for SEO tools? Not to begin with. Search Console and PageSpeed Insights are free and cover the basics. Paid tools become useful once you have a regular content process.",
        "Does page speed really affect rankings? Speed is one factor among many, but it clearly affects how visitors behave. Slow pages frustrate people, and frustrated visitors leave.",
        "How often should I publish new content? Consistency matters more than volume. A steady rhythm of useful, accurate articles is better than a burst followed by silence.",
        "Should I use AI to write my website content? It can help with drafts and outlines, but text should be reviewed, corrected and enriched with your own knowledge and examples so it is accurate and genuinely helpful.",
      ],
    },
  ],
};
