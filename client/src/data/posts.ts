export type PostSection = { h?: string; p?: string[]; list?: string[] };

export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO
  category: string;
  readMins: number;
  sections: PostSection[];
};

export const POSTS: Post[] = [
  {
    slug: "how-much-does-custom-business-software-cost",
    title: "How Much Does Custom Business Software Cost?",
    description: "What drives the price of custom software, how to scope a project, and how to avoid overspending on features you do not need.",
    date: "2026-10-28",
    category: "Software Development",
    readMins: 5,
    sections: [
      { p: ["There is no single price for custom software, because every project is different. What you can do is understand the factors that move the cost up or down so you can plan a realistic budget and compare quotes fairly."] },
      {
        h: "The main cost drivers",
        list: [
          "Scope: the number of screens, user roles and features. A tool with three screens costs far less than a full ERP.",
          "Integrations: payments, accounting software, SMS, email, maps or third-party APIs each add design and testing time.",
          "Platforms: a web app, an Android app and an iOS app are separate deliverables, even if they share a backend.",
          "Design: a clean, standard interface is cheaper than a heavily branded, animated one.",
          "Data migration: moving records out of spreadsheets or an old system takes careful work.",
        ],
      },
      {
        h: "Start with a minimum viable version",
        p: ["The most reliable way to control cost is to launch the smallest version that solves your biggest problem, then grow it. Real users will tell you which features matter, and you avoid paying for ideas that never get used."],
      },
      {
        h: "Fixed price or hourly?",
        p: ["Fixed-price works well when the scope is clear and unlikely to change. Hourly or monthly retainers suit projects where requirements will evolve. Many agencies combine both: a fixed price for the first release, then a retainer for improvements."],
      },
      {
        h: "Do not forget running costs",
        p: ["Budget for hosting, domain names, third-party service fees, security updates and support after launch. A common rule of thumb is to expect ongoing maintenance each year equal to a meaningful fraction of the build cost."],
      },
      {
        h: "How to get an accurate quote",
        p: ["Write down who will use the system, what they need to do, and what tools it must connect to. The clearer your brief, the tighter the quote. A good agency will ask questions before giving you a number, not after."],
      },
    ],
  },
  {
    slug: "erp-vs-spreadsheets-when-to-switch",
    title: "ERP vs Spreadsheets: When Is It Time to Switch?",
    description: "Spreadsheets are great until they are not. Here are the signs your business has outgrown them and what an ERP system actually changes.",
    date: "2026-10-26",
    category: "ERP & Management",
    readMins: 5,
    sections: [
      { p: ["Almost every business starts on spreadsheets, and that is fine. They are flexible, familiar and free. But there comes a point where they cost you more in errors and lost time than a proper system would."] },
      {
        h: "Signs you have outgrown spreadsheets",
        list: [
          "Different people keep different versions of the same file.",
          "Stock or sales numbers do not match between departments.",
          "Month-end reporting takes days of manual copying and checking.",
          "One person owns a complex file and nobody else understands it.",
          "You cannot easily see who changed what, or when.",
          "Growth means hiring someone just to maintain data entry.",
        ],
      },
      {
        h: "What an ERP changes",
        p: ["An ERP (enterprise resource planning) system keeps sales, inventory, purchasing, accounting and HR in one shared database. When a sale is recorded, stock updates automatically and the invoice is created without anyone retyping it."],
      },
      {
        h: "Off-the-shelf or custom?",
        p: ["Off-the-shelf ERPs are quicker to start but can force you to change how you work. Custom systems fit your process exactly, which matters if your workflow is unusual, for example in logistics, pharmacy or school administration. The right choice depends on how unique your operations are."],
      },
      {
        h: "How to make the move smoothly",
        list: [
          "Map your current process before choosing a system.",
          "Clean your data first: remove duplicates and fix inconsistent names.",
          "Migrate in stages, starting with the area that hurts most.",
          "Train staff early and keep spreadsheets read-only during the transition.",
        ],
      },
    ],
  },
  {
    slug: "how-to-choose-a-software-development-agency",
    title: "How to Choose a Software Development Agency",
    description: "A practical checklist for evaluating agencies: portfolio, communication, process, ownership of code and post-launch support.",
    date: "2026-10-24",
    category: "Software Development",
    readMins: 5,
    sections: [
      { p: ["Choosing who builds your software is one of the most important decisions you will make for the project. A few simple checks can save you months of frustration."] },
      {
        h: "1. Look at real, relevant work",
        p: ["Ask to see live products, not just screenshots. Try them. If an agency has built something similar to what you need, they will already understand many of the problems you will face."],
      },
      {
        h: "2. Judge how they communicate",
        p: ["The way an agency handles your first conversation is a preview of the project. Do they ask good questions? Do they reply promptly and clearly? Do you speak with the people who will actually build it?"],
      },
      {
        h: "3. Ask about their process",
        list: [
          "How do they define scope and handle changes?",
          "Will you see working progress at regular intervals?",
          "How do they test before release?",
          "What happens if a deadline slips?",
        ],
      },
      {
        h: "4. Confirm you own your code",
        p: ["Your contract should state that you own the source code and the data. You should never be locked in to one agency just to keep your own product running."],
      },
      {
        h: "5. Plan for after launch",
        p: ["Software needs updates, security patches and small improvements. Ask what support is included and how much it costs."],
      },
      {
        h: "Red flags",
        list: [
          "A fixed price with no questions asked.",
          "No live examples of previous work.",
          "Pressure to sign quickly.",
          "Vague answers about who does the work.",
        ],
      },
    ],
  },
  {
    slug: "why-small-businesses-need-a-crm",
    title: "Why Small Businesses Need a CRM",
    description: "A CRM is not just for big sales teams. Learn how even a small business uses one to win more customers and never lose a lead.",
    date: "2026-10-22",
    category: "Business Growth",
    readMins: 4,
    sections: [
      { p: ["A CRM (customer relationship management) system is a shared place to store every customer, lead, conversation and follow-up. It sounds like something only large companies need, but small teams often benefit the most."] },
      {
        h: "The problem it solves",
        p: ["Without a CRM, customer details live in phones, inboxes, notebooks and WhatsApp chats. Leads are forgotten, follow-ups are missed, and when a team member leaves, their contacts leave with them."],
      },
      {
        h: "What a good CRM does",
        list: [
          "Keeps one record per customer with the full history of contact.",
          "Tracks each deal through stages from enquiry to payment.",
          "Reminds you when to follow up.",
          "Shows which sources bring in the best customers.",
          "Lets the whole team see the same up-to-date information.",
        ],
      },
      {
        h: "Start simple",
        p: ["The most common reason CRMs fail is that they are too complicated. Begin with contacts, deal stages and reminders. Add automation and reporting once the team uses it every day."],
      },
      {
        h: "Measure the result",
        p: ["Track how many leads you receive, how many get a reply within a day, and how many become customers. Even small improvements in follow-up speed usually raise sales noticeably."],
      },
    ],
  },
  {
    slug: "shopify-vs-custom-ecommerce",
    title: "Shopify vs a Custom E-commerce Store",
    description: "Should you launch on Shopify or build a custom store? A balanced look at cost, flexibility, speed and scalability.",
    date: "2026-10-20",
    category: "E-commerce",
    readMins: 5,
    sections: [
      { p: ["For most new online stores, a hosted platform like Shopify is the right place to begin. A custom build makes sense only in specific situations. Here is how to decide."] },
      {
        h: "Why Shopify works for most stores",
        list: [
          "Fast to launch: days or weeks instead of months.",
          "Payments, security, hosting and checkout are handled for you.",
          "A large library of themes and apps.",
          "Lower upfront cost.",
        ],
      },
      {
        h: "When a custom store makes sense",
        list: [
          "You sell something unusual, such as configurable products, rentals or subscriptions with complex rules.",
          "You need deep integration with your own inventory, ERP or delivery system.",
          "Monthly platform and app fees have grown larger than the cost of owning your own system.",
          "You need full control over performance and the customer experience.",
        ],
      },
      {
        h: "A middle path",
        p: ["Many businesses start on Shopify and add custom apps or integrations as they grow. This keeps the store simple while solving the specific problems that off-the-shelf tools cannot."],
      },
      {
        h: "What matters more than the platform",
        p: ["Product photos, clear descriptions, fast loading, trust signals and good customer support influence sales more than the technology underneath. Choose the option that lets you launch quickly and improve continuously."],
      },
    ],
  },
  {
    slug: "web-app-vs-mobile-app",
    title: "Web App or Mobile App: Which Should You Build First?",
    description: "A simple framework for deciding between a web app and a mobile app for your product, based on users, features and budget.",
    date: "2026-10-18",
    category: "Mobile Apps",
    readMins: 4,
    sections: [
      { p: ["Founders often assume they need a mobile app straight away. Sometimes they do, but often a web app reaches more people faster and for less money."] },
      {
        h: "Choose a web app when",
        list: [
          "Your users work at a desk or on shared computers.",
          "You want to launch quickly and update instantly.",
          "You are still testing whether the idea works.",
          "One codebase should serve every device.",
        ],
      },
      {
        h: "Choose a mobile app when",
        list: [
          "You need the camera, GPS, push notifications or offline use.",
          "Users will open it many times a day.",
          "The product works best as a quick tool, like a scanner, tracker or wallet.",
          "App store presence matters for discovery.",
        ],
      },
      {
        h: "Consider Android first",
        p: ["In many markets Android has the largest share of users. Launching on Google Play first, then adding iOS once the product is proven, is a sensible way to control cost."],
      },
      {
        h: "Do not forget the backend",
        p: ["Both web and mobile apps rely on the same server, database and API. Designing that foundation well from the start lets you add the second platform later without rebuilding everything."],
      },
    ],
  },
  {
    slug: "how-ai-automation-saves-small-business-time",
    title: "How AI Automation Saves Small Businesses Time",
    description: "Practical, low-risk ways to use AI and automation for support, data entry, reporting and follow-ups without replacing your team.",
    date: "2026-10-16",
    category: "AI & Automation",
    readMins: 5,
    sections: [
      { p: ["AI does not have to mean a big, risky project. The best early wins are small, repetitive tasks that eat hours every week."] },
      {
        h: "Good places to start",
        list: [
          "Answering common customer questions on your website or WhatsApp.",
          "Turning emails, forms or PDFs into structured data automatically.",
          "Drafting first versions of replies, quotes and product descriptions for a person to review.",
          "Sending reminders, invoices and follow-ups on a schedule.",
          "Summarising weekly sales or support activity into a short report.",
        ],
      },
      {
        h: "Keep a human in the loop",
        p: ["Let automation prepare the work and let a person approve anything important, such as payments, contracts or sensitive customer replies. Trust grows as you see how reliable it is."],
      },
      {
        h: "How to pick the first task",
        p: ["Choose something that is frequent, rule-based and low risk. Measure how long it takes now, automate it, then compare. If the saving is clear, move on to the next task."],
      },
      {
        h: "Protect your data",
        p: ["Be careful about what customer information you send to external AI services. Use providers with clear privacy terms, and avoid sharing sensitive data unless it is necessary."],
      },
    ],
  },
  {
    slug: "fleet-dispatch-software-guide",
    title: "A Guide to Fleet and Dispatch Software",
    description: "What dispatch software does, the features that matter, and how it helps logistics companies cut delays and manage drivers.",
    date: "2026-10-14",
    category: "Logistics & Fleet",
    readMins: 5,
    sections: [
      { p: ["Dispatch software connects the people who take orders with the drivers who deliver them. For trucking and delivery businesses, it replaces phone calls and whiteboards with a live, shared view of every job."] },
      {
        h: "Core features",
        list: [
          "Load and order management from request to delivery.",
          "Driver assignment with availability and location in view.",
          "Real-time status updates and proof of delivery.",
          "Automated customer notifications.",
          "Invoicing and driver settlement.",
          "Reports on delays, mileage and profitability per route.",
        ],
      },
      {
        h: "Benefits you can measure",
        p: ["Dispatchers spend less time on calls, drivers get clear instructions, and customers receive accurate arrival times. Over time, route and cost data shows which jobs make money and which do not."],
      },
      {
        h: "What to look for",
        list: [
          "A simple mobile experience for drivers, since they use it all day.",
          "Reliable behaviour with weak signal.",
          "Role-based access for dispatchers, drivers, accountants and customers.",
          "The ability to export data and integrate with accounting tools.",
        ],
      },
      {
        h: "Custom or ready-made?",
        p: ["Ready-made tools suit standard operations. If your workflow involves special rules, such as unique pricing, multiple depots or regulatory paperwork, a custom system can remove workarounds."],
      },
    ],
  },
  {
    slug: "school-management-system-features",
    title: "Essential Features of a School Management System",
    description: "From admissions and attendance to fees and report cards: the features every school ERP should include.",
    date: "2026-10-12",
    category: "Education Software",
    readMins: 4,
    sections: [
      { p: ["A good school management system replaces piles of registers and spreadsheets with a single, reliable record of students, staff and finances."] },
      {
        h: "Must-have modules",
        list: [
          "Admissions and student records.",
          "Daily attendance for students and staff.",
          "Timetables and class scheduling.",
          "Exams, grading and printable report cards.",
          "Fee generation, collection and receipts, with reminders for overdue payments.",
          "Parent and teacher communication by SMS, WhatsApp or app notifications.",
        ],
      },
      {
        h: "Nice to have",
        list: [
          "Library and inventory tracking.",
          "Transport routes and bus assignments.",
          "Payroll for staff.",
          "Parent and student portals.",
        ],
      },
      {
        h: "Questions to ask before choosing",
        list: [
          "Can it handle our grading and fee structure?",
          "Can we import our existing student data?",
          "Who can see which information?",
          "Is data backed up regularly?",
          "Can it work well on the devices our staff already use?",
        ],
      },
      {
        h: "Roll out gradually",
        p: ["Start with student records and attendance, then add fees and exams. Introducing modules one at a time gives teachers and office staff time to adjust."],
      },
    ],
  },
  {
    slug: "website-speed-and-seo-basics",
    title: "Website Speed and SEO Basics for Business Owners",
    description: "Simple, non-technical steps to make your website faster and easier for customers and search engines to find.",
    date: "2026-10-10",
    category: "Web Performance",
    readMins: 5,
    sections: [
      { p: ["A slow, confusing website loses customers before they read a word. The good news is that most of the improvements are straightforward."] },
      {
        h: "Make it load faster",
        list: [
          "Compress images and use modern formats such as WebP.",
          "Load only the fonts and scripts you really need.",
          "Use a good hosting provider and a content delivery network (CDN).",
          "Remove plugins and widgets that nobody uses.",
        ],
      },
      {
        h: "Help search engines understand you",
        list: [
          "Give every page a unique, descriptive title and meta description.",
          "Use clear headings: one main heading, then logical subheadings.",
          "Write for people first, using the words your customers actually search for.",
          "Add descriptive alt text to images.",
          "Submit a sitemap in Google Search Console.",
        ],
      },
      {
        h: "Make it work on phones",
        p: ["Most visitors arrive on a phone. Check that text is readable, buttons are easy to tap and nothing slides off the screen."],
      },
      {
        h: "Publish useful content",
        p: ["Articles that answer real customer questions bring in visitors who are already interested. Update them occasionally so they stay accurate, and link related pages together."],
      },
      {
        h: "Measure and improve",
        p: ["Use free tools such as Google Search Console and PageSpeed Insights to see how you are doing. Fix the biggest problems first, then repeat."],
      },
    ],
  },
];

export const getPost = (slug: string) => POSTS.find((p) => p.slug === slug);

export const formatDate = (iso: string) =>
  new Date(iso + "T00:00:00").toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
