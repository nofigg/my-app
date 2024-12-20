export interface Project {
  date: string
  title: string
  slug: string
  content: string
  type: string
  description: string
  technologies: string[]
  challenges: string[]
  outcomes: string[]
}

export const projects: Project[] = [
  {
    date: "2024-08-01",
    title: "Logo Design for a New CAD Services Team",
    slug: "cad-services-logo",
    type: "Branding",
    description: "Created a minimalist, geometric logo design for a Computer-Aided Design (CAD) services company that reflects precision and technical expertise.",
    content: `# Logo Design for a New CAD Services Team

The project began with a thorough discovery phase to understand the client's vision, industry context, and target audience. The goal was to create a mark that would convey technical precision while maintaining a modern, approachable aesthetic.

## Design Process

1. **Research & Discovery**
   - Analyzed competitor logos in the CAD and technical services space
   - Identified key visual elements that represent precision and technical expertise
   - Gathered inspiration from geometric forms and architectural drawings

2. **Concept Development**
   - Explored various combinations of triangles and curves to represent 'CAD'
   - Focused on creating a mark that works well at different scales
   - Maintained simplicity while ensuring the design remained memorable

3. **Refinement**
   - Fine-tuned the geometric proportions for perfect balance
   - Created a minimalist black and white version as the primary logo
   - Ensured the design worked across different applications

4. **Final Delivery**
   - Delivered the logo in various file formats for different use cases
   - Provided guidelines for proper logo usage and spacing
   - Created variations for different backgrounds and sizes

The final design combines a triangle and a semicircle to create an abstract "AD" monogram. The geometric shapes reference the technical nature of CAD work, while the minimal black and white palette ensures versatility across all applications.`,
    technologies: ["Adobe Illustrator", "Figma", "Vector Graphics", "Typography"],
    challenges: [
      "Creating a mark that's both simple and distinctive",
      "Balancing technical precision with approachable design",
      "Ensuring scalability across different mediums"
    ],
    outcomes: [
      "Delivered a versatile logo that works across digital and print media",
      "Created a strong visual identity that reflects technical expertise",
      "Received positive feedback from client and industry professionals"
    ]
  },
  {
    date: "2014-05-15",
    title: "Interactive Data Visualization Dashboard",
    slug: "interactive-data-viz-dashboard",
    type: "Web Application",
    description: "A responsive dashboard built for a financial services company to visualize complex market data and customer analytics.",
    content: "Developed a comprehensive data visualization dashboard that transformed raw financial data into actionable insights. The application featured real-time updates, interactive charts, and customizable widgets that allowed users to track market trends and customer behavior patterns.",
    technologies: ["D3.js", "JavaScript", "HTML5", "CSS3", "jQuery", "REST APIs", "Python"],
    challenges: [
      "Handling large datasets while maintaining smooth performance",
      "Creating intuitive interactions for complex data manipulations",
      "Ensuring cross-browser compatibility for SVG animations"
    ],
    outcomes: [
      "Reduced data analysis time by 60% for end users",
      "Implemented by 3 major financial institutions",
      "Featured in a web development conference showcase"
    ]
  },
  {
    date: "2016-03-20",
    title: "Mobile-First E-commerce Platform",
    slug: "mobile-first-ecommerce",
    type: "Mobile Application",
    description: "A complete e-commerce solution optimized for mobile devices with seamless payment integration and real-time inventory management.",
    content: "Built a mobile-first e-commerce platform that prioritized user experience on smaller screens while maintaining full functionality. The platform included features like one-tap checkout, real-time inventory updates, and personalized product recommendations.",
    technologies: ["React Native", "Node.js", "MongoDB", "Stripe API", "Redux", "AWS", "Firebase"],
    challenges: [
      "Optimizing image loading for slower mobile connections",
      "Implementing secure payment processing",
      "Managing complex state across multiple user sessions"
    ],
    outcomes: [
      "Achieved 45% increase in mobile conversion rates",
      "Processed over $2M in transactions in first year",
      "Reduced cart abandonment rate by 30%"
    ]
  },
  {
    date: "2018-09-10",
    title: "AI-Powered Content Management System",
    slug: "ai-powered-cms",
    type: "Enterprise Software",
    description: "An innovative CMS that leverages AI to automate content organization, tagging, and recommendation systems.",
    content: "Developed an enterprise-level content management system that uses machine learning algorithms to automatically categorize, tag, and organize content. The system includes features like automated SEO optimization, content recommendation engine, and natural language processing for improved search capabilities.",
    technologies: ["Python", "TensorFlow", "Django", "PostgreSQL", "Docker", "Kubernetes", "ElasticSearch"],
    challenges: [
      "Training ML models with limited initial data",
      "Scaling the system to handle millions of content pieces",
      "Maintaining high accuracy in automated categorization"
    ],
    outcomes: [
      "Reduced content processing time by 80%",
      "Improved content discovery by 150%",
      "Adopted by 5 major media companies"
    ]
  },
  {
    date: "2020-06-15",
    title: "Remote Team Collaboration Platform",
    slug: "remote-collaboration-platform",
    type: "SaaS Application",
    description: "A comprehensive platform for remote teams to collaborate, manage projects, and maintain productivity during the global pandemic.",
    content: "Created a real-time collaboration platform that combines project management, video conferencing, and document sharing in a single, intuitive interface. The platform includes features like virtual whiteboards, time tracking, and automated workflow management.",
    technologies: ["Vue.js", "WebRTC", "Socket.io", "Express.js", "MongoDB", "Redis", "WebAssembly"],
    challenges: [
      "Ensuring low-latency real-time communication",
      "Managing concurrent document editing",
      "Implementing end-to-end encryption"
    ],
    outcomes: [
      "Onboarded 10,000+ users in first month",
      "Featured in TechCrunch and Product Hunt",
      "Achieved 98% user satisfaction rating"
    ]
  },
  {
    date: "2021-11-30",
    title: "Blockchain-Based Supply Chain Solution",
    slug: "blockchain-supply-chain",
    type: "Enterprise Solution",
    description: "A transparent and secure supply chain management system built on blockchain technology for tracking product authenticity and movement.",
    content: "Engineered a blockchain-based solution that provides end-to-end visibility in supply chain operations. The system enables real-time tracking of products, verification of authenticity, and automated smart contract execution for business transactions.",
    technologies: ["Solidity", "Ethereum", "Web3.js", "React", "Node.js", "IPFS", "GraphQL"],
    challenges: [
      "Optimizing gas costs for blockchain transactions",
      "Integrating with legacy supply chain systems",
      "Ensuring data privacy while maintaining transparency"
    ],
    outcomes: [
      "Reduced supply chain disputes by 90%",
      "Decreased product verification time by 75%",
      "Successfully tracked $50M worth of goods"
    ]
  },
  {
    date: "2023-04-20",
    title: "AR Fitness Training Application",
    slug: "ar-fitness-trainer",
    type: "Mobile Application",
    description: "An augmented reality fitness application that provides personalized workout guidance and real-time form correction.",
    content: "Developed an innovative fitness application that uses augmented reality to guide users through workouts with real-time form correction and performance tracking. The app includes features like 3D movement analysis, personalized workout plans, and social fitness challenges.",
    technologies: ["Unity", "ARKit", "CoreML", "Swift", "Firebase", "TensorFlow Lite", "Cloud Functions"],
    challenges: [
      "Achieving accurate pose estimation in various lighting conditions",
      "Optimizing AR performance on diverse devices",
      "Creating intuitive AR interfaces for workout guidance"
    ],
    outcomes: [
      "100,000+ downloads in first quarter",
      "Featured in Apple's 'Apps We Love'",
      "Average user workout time increased by 40%"
    ]
  },
  {
    date: "2024-01-01",
    title: "AI-Powered Design System Generator",
    slug: "ai-design-system-generator",
    type: "Design Tool",
    description: "A revolutionary tool that uses AI to generate comprehensive design systems from existing brand assets and guidelines.",
    content: "Created an AI-powered tool that analyzes brand assets and automatically generates a complete design system, including component libraries, documentation, and implementation guidelines. The system adapts to brand evolution and maintains consistency across digital products.",
    technologies: ["Next.js", "OpenAI API", "TypeScript", "Tailwind CSS", "Figma API", "Prisma", "PostgreSQL"],
    challenges: [
      "Training AI to understand design principles and patterns",
      "Generating consistent and accessible components",
      "Creating accurate design-to-code translations"
    ],
    outcomes: [
      "Reduced design system creation time by 90%",
      "Adopted by 20+ design agencies",
      "Recognized at major design technology conferences"
    ]
  }
]