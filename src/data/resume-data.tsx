import { MyPicture } from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Nikhil Saxena",
  initials: "NS",
  location: "Bengaluru, India, IST",
  locationLink: "https://www.google.com/maps/place/Bengaluru",
  about:
    "React Native Engineer focused on building products with extra attention to detail",
  summary:
    "As an Engineer, I have successfully taken multiple products from 0 to 1. I lead teams effectively, ensuring an environment where people can do their best work. Currently, I work mostly with React Native, Expo, TypeScript, Node.js. I have over 7 years of experience working with companies in the domain of FinTech, Gaming, Utility.",
  // avatarUrl: "https://avatars.githubusercontent.com/u/1017620?v=4",
  avatarUrl: MyPicture,
  personalWebsiteUrl: "https://saxenanickk.github.io/",
  contact: {
    email: "saxenanickk@gmail.com ",
    tel: "+918791152236",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/saxenanickk",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/saxenanickk/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/saxenanickk",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Invertis University, Bareilly, India",
      degree: "Bachelor's Degree in Computer Science and Engineering",
      start: "2012",
      end: "2016",
    },
  ],
  work: [
    {
      company: "ZET",
      link: "https://zetapp.in/",
      // badges: ["Leadership", "Optimization", "SDKs", "Mentorship"],
      badges: [],
      title: "Technical Lead",
      start: "2022",
      end: "2024",
      description: `
      Leadership & Mentorship:\n
      ● Led and mentored a team of 10+ engineers, achieving a 20% performance improvement through effective coaching and collaboration.
      ● Cultivated a positive and inclusive work environment, fostering individual growth and contributing to team success.
      
      Software Development & Delivery:
      
      ● Architected and delivered the Products Microservice and ZET Admin Dashboard, reducing Brand/Product onboarding time by 50%.
      ● Spearheaded strategic partnerships and integrations with 10+ industry leaders, unlocking new revenue streams through financial product sales.
      ● Implemented an efficient OTA updates service using expo, resulting in seamless mobile app updates and a 20% increase in user satisfaction.
      
      Engineering Process & Quality:
      
      ● Refactored the frontend architecture for improved maintainability and performance.
      ● Established clear Git branching guidelines, enforced code linting, and implemented pull request best practices, boosting developer experience by 15%.
      ● Automated the software development lifecycle with CI/CD pipelines using GitHub Actions, Docker, and AWS Amplify.
      
      `,
    },
    {
      company: "MPL",
      link: "https://www.mpl.live/",
      // badges: ["Code Coverage", "DevEx"],
      badges: [],
      title: "SDE 3",
      start: "2021",
      end: "2022",
      description: `
      ● Spearheaded a robust code efficiency strategy through linting and formatting tools, empowering engineers to detect and address issues proactively, streamlining the development workflow.
      ● Led and actively participated in code refactoring initiatives, achieving a 20% overall quality improvement. This optimization paved the way for a more scalable and resilient software architecture.
      ● Implemented strategic code coverage enhancements, boosting coverage by 20% and minimizing application vulnerabilities.
      `,
    },
    {
      company: "Jio Platforms",
      link: "https://jiopay.com/",
      badges: [],
      title: "Frontend Engineer",
      start: "2020",
      end: "2021",
      description: `
      ● Led the frontend team at Jio Financial Services, aligning efforts to achieve key business goals and contributing to the company's 15% increase in revenue.
      ● Engineered and delivered impactful products including JioBusiness Application, JioBusiness Merchant Portal, and Admin Portal, catering to the needs of over 1 million users.
      ● Developed and integrated Jio Financial Products SDKs into MyJio, increasing accessibility and reach of financial services.
      ● Established a robust design system UI library to ensure uniformity and efficiency across all mobile and web applications within Jio Financial Services.
      ● Implemented advanced security measures, including Code Obfuscation, Jail Monkey, SSL Certificate Pinning, to ensure the highest standards of application security.
      `,
    },
    {
      company: "Quantcommune (Previously Platify)",
      link: "https://www.rmzcorp.com/",
      // badges: ["Super App", "SDKs", "Experience"],
      badges: [],
      title: "Software Engineer",
      start: "2019",
      end: "2020",
      description: `
      Early-Stage Startup Growth:
      
      ● Joined as the first employee, playing a pivotal role in launching and growing the organization from inception.
      ● Conceptualized, designed, and developed a revolutionary super app, integrating top-tier APIs for services like Uber, Ola, Bookmyshow, and more. This drove increased user engagement and revenue generation.
      ● Streamlined user experience by consolidating diverse services into a single platform, enhancing user convenience and accessibility.
      ● Contributed to an over-the-air updates solution, ensuring seamless delivery of updates to over 10+ apps.
      
      Adaptability & Contribution Post-Acquisition:
      
      ● Successfully transitioned during the acquisition by RMZ Corp, a leading real estate giant, and achieved a 15% productivity improvement.
      ● Led the development and implementation of various products, fostering a connected environment within RMZ campuses.
      ● Implemented a mobile-powered entry/exit system, strengthening campus security and access control.
      ● Nurtured community engagement through the "Events Around You" feature, leading to a 25% customer base increase.
      
      Problem-Solving & Innovation:
      
      ● Tackled critical campus challenges with technology solutions, including live traffic tracking, shuttle booking, and tracking mechanisms. This resulted in enhanced customer satisfaction.
      ● Pioneered innovative food delivery integration straight to desks, offering improved efficiency and convenience for customers.
      
      `,
    },
    {
      company: "Innotical Solutions",
      link: "https://innotical.com/",
      // badges: ["First Job", "Initial Commit"],
      badges: [],
      title: "ReactJS & React Native Engineer",
      start: "2016",
      end: "2017",
      description: `
      ● Developed and maintained ReactJS web applications and transitioned to React Native for cross-platform mobile application development.
      ● Contributed to the successful delivery of 3 client projects, demonstrating adaptability and innovation in the application development process.      
      `,
    },
  ],
  skills: [
    "React Native",
    "React/Next.JS",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "Expo",
    "Zustand",
    "Android",
  ],
  projects: [
    {
      title: "Zet Mobile App",
      techStack: [
        "React Native",
        "TypeScript",
        "JavaScript",
        "React Query",
        "Zustand"
      ],
      // description: "A platform to build and grow your online business",
      link: {
        label: "ZET Android App",
        href: "https://play.google.com/store/apps/details?id=in.onecode.app",
      },
    },
    {
      title: "Zet Website",
      techStack: ["Side Project", "TypeScript", "Next.js", "Browser Extension"],
      description:
        "Browser extension that records everything happening in a web application",
      link: {
        label: "monito.dev",
        href: "https://zetapp.in/",
      },
    },
    {
      title: "Self Hosted Expo Updates",
      techStack: ["Expo", "TypeScript", "Node.js", "Express", "Bun"],
      description:
        "Creative collaboration platform that combines video conferencing and HD media streaming",
    },
    {
      title: "Zet Blogs CMS",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Generates beautiful wallpapers using random shapes and gradients",
      link: {
        label: "barepapers.com",
        href: "https://zetapp.in/blog",
      },
    },
    {
      title: "My Teams Android App",
      techStack: ["Side Project", "Next.js", "MDX"],
      description:
        "My personal website and blog. Built with Next.js and Notion API",
      link: {
        label: "github.com",
        href: "https://play.google.com/store/apps/details?id=in.myteams.app",
      },
    },
    {
      title: "My Teams Web App",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Minimalist calendars, habit trackers and planners generator",
      link: {
        label: "useminimal.com",
        href: "https://myteams.co.in",
      },
    },
    {
      title: "Magnet App",
      techStack: ["Side Project", "TypeScript", "Next.js"],
      description: "Tracks current year progress and displays a countdown",
      link: {
        label: "getyearprogress.com",
        href: "https://play.google.com/store/apps/details?id=in.magnetapp",
      },
    },
    {
      title: "Magnet Website",
      techStack: ["TypeScript", "React", "Node.js", "GraphQL"],
      description:
        "The Agile meeting co-pilot that delivers better meetings with less effort",
      link: {
        label: "github.com",
        href: "https://www.magnetapp.in/",
      },
    },
    {
      title: "Products Microservice",
      techStack: ["TypeScript", "React", "Node.js", "GraphQL"],
      description:
        "Creative collaboration platform that combines video conferencing and HD media streaming",
    },
    {
      title: "Zet Unified Dashboard",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application for leading virtual mobile operator in Poland",
    },
    {
      title: "MPL Android App",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Howdy is a place for you to join communities you care about",
      link: {
        label: "play.google.com",
        href: "https://play.google.com/store/apps/details?id=com.mpl.androidapp.cash",
      },
    },
    {
      title: "MPL iOS App",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application for managing and displaying restaurant menus in kiosk mode",
      link: {
        label: "tastycloud.fr",
        href: "https://apps.apple.com/in/app/mpl-rummy-poker-money-games/id1447849626",
      },
    },
    {
      title: "Jio Payments Bank Web",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application that helps with sharing your contact details",
      link: {
        label: "",
        href: "https://jiopaymentsbank.com/",
      },
    },
    {
      title: "JioBusiness iOS",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application that helps with sharing your contact details",
      link: {
        label: "",
        href: "https://apps.apple.com/us/app/jiobusiness/id6447675652",
      },
    },
    {
      title: "JioBusiness Android",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application that helps with sharing your contact details",
      link: {
        label: "",
        href: "https://play.google.com/store/apps/details?id=com.jio.jiobusiness",
      },
    },
    {
      title: "MEX Android App",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application that helps with booking a table in a restaurants",
    },
    {
      title: "MEX iOS App",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application that helps with booking a table in a restaurants",
    },
  ],
} as const;
