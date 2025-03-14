import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const NAILS_DATA = {
  organization: {
    purpose: "The Network for AI, Legal, and Sustainable Solutions Society stands as a pioneering platform that brings together visionary professionals, insightful researchers, and influential thought leaders, all united in the mission to advance artificial intelligence, enhance legal frameworks, and promote sustainable solutions. Our society cultivates an environment of collaboration, innovation, and knowledge sharing, actively addressing the pressing challenges that confront us in these critical areas.As a registered society, we are dedicated to bridging the gaps between technology, policy, and sustainability by forging meaningful connections with institutions, industries, and communities. Our diverse membership comprises experts in AI, legal research, environmental governance, and corporate social responsibility, all passionately committed to driving positive change and making a lasting impact on society. Join us as we work together to create a better future for all.",
    objectives: [
      "Promoting Research & Development – Encouraging innovation and research in AI, legal studies, and sustainability to enhance the quality of life and drive positive societal impact. ",
      "Knowledge Dissemination – Collecting, publishing, and sharing information through books, journals, documentation centers, and digital platforms to create awareness and foster education.",
      "Capacity Building & Skill Development – Organizing training sessions, seminars, conferences, and workshops to enhance knowledge and expertise in AI, law, and sustainability.",
      "To bridge the gap between technology, law, and sustainability Legal & Regulatory Services – Conducting research and providing guidance on environmental and legal compliance to support ethical and responsible AI deployment.",
      "Supporting Corporate Social Responsibility (CSR) Initiatives – Assisting organizations in aligning their CSR efforts with sustainability goals and environmental responsibility.",
      "Monitoring & Evaluation Services – Offering expertise in environmental impact assessments, carbon footprint analysis, and waste management strategies.",
      "ESG (Environmental, Social, and Governance) Guidance – Providing advisory services, training, and awareness programs to support sustainable business practices.",
      " Project Management & Consulting – Acting as a Project Management Cell to oversee and coordinate initiatives in AI, legal, and sustainability domains.",
      " Encouraging Ethical AI & Emerging Technologies – Engaging in research and discussions on the ethical use of AI, IoT, and related technologies for sustainable development.",
      "Awarding Scholarships & Grants – Recognizing and supporting scientists, engineers, entrepreneurs, and professionals who contribute to AI, legal, and sustainability advancements.",
    ],
    scopeOfWork: [
      "AI Ethics and Governance",
      "Legal Tech Solutions",
      "Sustainable Development",
      "Digital Rights and Privacy",
      "Technology Policy Advocacy",
      "Community Empowerment through Technology"
    ]
  },
  foundingMembers: [
    {
      name: "Shri. Salikeri Ramachandra Vambally",
      role: "President",
      bio: "Retired Additional Controller State Accounts Department, Government of Karnataka",
      image: "/images/member1.jpg"
    },
    {
      name: "Shri. Bharath Srinivas Shroff",
      role: "Vice President",
      bio: "Software Engineer",
      image: "/images/member2.jpg"
    },
    {
      name: "Smt. Jayashree Maiya",
      role: "Secretary",
      bio: "Programme Associate",
      image: "/images/member3.jpg"
    },
    {
      name: "Ms. Bhargavi Srinivas Shroff",
      role: "Joint-Secretary",
      bio: "Law Student",
      image: "/images/member4.jpg"
    },
    {
      name: "Smt. Annapoorna Shroff",
      role: "Treasurer",
      bio: "Consultant Former IT Professional with Tech Mahindra, Ampersand",
      image: "/images/member5.jpg"
    },
    {
      name: "Shri. Srinivas Nagesha Rao Shroff, PhD",
      role: "Executive Member",
      bio: "Formal CEO of REC-Delhi",
      image: "/images/member6.jpg"
    },
    {
      name: "Smt. Lalitha Varambally",
      role: "Executive Member",
      bio: "House Maker",
      image: "/images/member7.jpg"
    },
    {
      name: "Smt. Srimathi H N Varambally",
      role: "Executive Member",
      bio: "House Maker",
      image: "/images/member8.jpg"
    },
    {
      name: "Ms. Neha Maiya",
      role: "Executive Member",
      bio: "AI Engineering Student",
      image: "/images/member9.jpg"
    }
  ],
  advisoryBoard: [
    {
      name: "Justice Maria Gonzalez",
      role: "Legal Advisor",
      bio: "Former Supreme Court Justice specializing in technology law",
      image: "/images/advisor1.jpg"
    },
    {
      name: "Dr. Hiroshi Tanaka",
      role: "AI Ethics Advisor",
      bio: "Pioneer in responsible AI development with multiple patents",
      image: "/images/advisor2.jpg"
    },
    {
      name: "Prof. Kwame Nkrumah",
      role: "Policy Advisor",
      bio: "International policy expert with focus on technology governance in developing nations",
      image: "/images/advisor3.jpg"
    },
    {
      name: "Dr. Emma Blackwell",
      role: "Sustainability Advisor",
      bio: "Environmental scientist specializing in technology-driven climate solutions",
      image: "/images/advisor4.jpg"
    }
  ],
  team: [
    {
      name: "Raj Mehta",
      role: "Project Manager",
      image: "/images/team1.jpg"
    },
    {
      name: "Sophia Lee",
      role: "AI Researcher",
      image: "/images/team2.jpg"
    },
    {
      name: "David Okonkwo",
      role: "Legal Specialist",
      image: "/images/team3.jpg"
    },
    {
      name: "Maria Santos",
      role: "Sustainability Coordinator",
      image: "/images/team4.jpg"
    },
    {
      name: "Ahmed Hassan",
      role: "Technology Officer",
      image: "/images/team5.jpg"
    },
    {
      name: "Leila Kim",
      role: "Community Outreach",
      image: "/images/team6.jpg"
    },
    {
      name: "Carlos Mendez",
      role: "Policy Analyst",
      image: "/images/team7.jpg"
    },
    {
      name: "Fatima Al-Farsi",
      role: "Education Specialist",
      image: "/images/team8.jpg"
    }
  ],
  nationalProjects: [
    {
      title: "AI Ethics Framework for Public Sector",
      description: "Developed comprehensive ethical guidelines for AI deployment in government services",
      year: "2022",
      impact: "Adopted by 3 state governments, improving algorithmic transparency in public services"
    },
    {
      title: "Digital Rights Education Initiative",
      description: "Nationwide program to educate citizens about their digital rights and privacy",
      year: "2021",
      impact: "Reached over 50,000 citizens through workshops and online resources"
    },
    {
      title: "Sustainable Smart Cities Blueprint",
      description: "Framework for integrating AI and sustainability in urban development",
      year: "2020",
      impact: "Implemented in 2 major metropolitan areas, reducing energy consumption by 15%"
    }
  ],
  internationalProjects: [
    {
      title: "Global AI Governance Coalition",
      description: "International partnership to develop cross-border AI governance standards",
      year: "2022",
      impact: "Participation from 15 countries, resulting in draft international guidelines"
    },
    {
      title: "Tech for Climate Action",
      description: "Deployment of AI solutions for climate monitoring in developing nations",
      year: "2021",
      impact: "Implemented in 5 countries, improving climate data collection by 40%"
    },
    {
      title: "Digital Inclusion for Rural Communities",
      description: "Program to bridge the digital divide in underserved rural areas globally",
      year: "2020",
      impact: "Connected 30 remote communities to digital resources and training"
    }
  ],
  donors: [
    { name: "Global Technology Foundation", logo: "/images/donor1.png" },
    { name: "Sustainable Future Initiative", logo: "/images/donor2.png" },
    { name: "Digital Rights Fund", logo: "/images/donor3.png" },
    { name: "AI for Good Foundation", logo: "/images/donor4.png" },
    { name: "Green Tech Alliance", logo: "/images/donor5.png" },
    { name: "International Development Bank", logo: "/images/donor6.png" }
  ],
  partners: [
    { name: "United Nations Development Programme", logo: "/images/partner1.png" },
    { name: "World Economic Forum", logo: "/images/partner2.png" },
    { name: "National University Research Center", logo: "/images/partner3.png" },
    { name: "International AI Ethics Institute", logo: "/images/partner4.png" },
    { name: "Global Sustainability Network", logo: "/images/partner5.png" },
    { name: "Digital Rights Watch", logo: "/images/partner6.png" }
  ],
  resources: {
    reports: [
      {
        title: "State of AI Ethics 2023",
        description: "Annual report on developments in AI ethics and governance",
        link: "#",
        image: "/images/report1.jpg"
      },
      {
        title: "Sustainable Technology Implementation Guide",
        description: "Framework for environmentally responsible tech deployment",
        link: "#",
        image: "/images/report2.jpg"
      },
      {
        title: "Digital Rights in the Age of AI",
        description: "Analysis of privacy and rights challenges in the AI era",
        link: "#",
        image: "/images/report3.jpg"
      }
    ],
    publications: [
      {
        title: "Algorithmic Fairness: Challenges and Solutions",
        author: "Dr. Elena Rodriguez",
        journal: "Journal of AI Ethics",
        year: "2023",
        link: "#",
        image: "/images/pub1.jpg"
      },
      {
        title: "Legal Frameworks for Emerging Technologies",
        author: "Prof. Michael Chen",
        journal: "Technology Law Review",
        year: "2022",
        link: "#",
        image: "/images/pub2.jpg"
      },
      {
        title: "AI and Climate Change Mitigation",
        author: "Dr. Sarah Patel",
        journal: "Sustainable Technology Journal",
        year: "2022",
        link: "#",
        image: "/images/pub3.jpg"
      },
      {
        title: "Privacy-Preserving AI Systems",
        author: "Dr. Priya Singh",
        journal: "Digital Privacy Quarterly",
        year: "2021",
        link: "#",
        image: "/images/pub4.jpg"
      },
      {
        title: "Ethical Considerations in Automated Decision Making",
        author: "Dr. Aisha Johnson",
        journal: "AI Governance Review",
        year: "2021",
        link: "#",
        image: "/images/pub5.jpg"
      },
      {
        title: "Technology Policy for Developing Nations",
        author: "Robert Kim",
        journal: "International Policy Journal",
        year: "2020",
        link: "#",
        image: "/images/pub6.jpg"
      },
      {
        title: "Explainable AI: Methods and Importance",
        author: "Dr. Lisa Okafor",
        journal: "Transparent Computing",
        year: "2020",
        link: "#",
        image: "/images/pub7.jpg"
      },
      {
        title: "Smart Cities and Sustainability",
        author: "Thomas Müller",
        journal: "Urban Technology Review",
        year: "2019",
        link: "#",
        image: "/images/pub8.jpg"
      }
    ],
    photos: [
      { title: "Annual Conference 2023", image: "/images/photo1.jpg" },
      { title: "Community Workshop Series", image: "/images/photo2.jpg" },
      { title: "International Partnership Summit", image: "/images/photo3.jpg" },
      { title: "AI Ethics Roundtable", image: "/images/photo4.jpg" },
      { title: "Sustainability Hackathon", image: "/images/photo5.jpg" }
    ],
    videos: [
      { title: "Introduction to NAILS", url: "https://www.youtube.com/embed/example1", thumbnail: "/images/video1.jpg" },
      { title: "AI Ethics Explained", url: "https://www.youtube.com/embed/example2", thumbnail: "/images/video2.jpg" },
      { title: "Our Sustainable Technology Approach", url: "https://www.youtube.com/embed/example3", thumbnail: "/images/video3.jpg" },
      { title: "Digital Rights Workshop Highlights", url: "https://www.youtube.com/embed/example4", thumbnail: "/images/video4.jpg" }
    ]
  },
  contact: {
    registeredAddress: {
      line1: "93, Anushree Enclave",
      line2: "2nd Floor,1st main, SBM Colony, ICICI ATM, Ananda Nagar ",
      city: "Bangalore",
      state: "Karnataka",
      zip: "560024",
      country: "India",
      mapCoordinates: { lat: 40.7128, lng: -74.0060 }
    },
    alternativeAddress: {
      line1: "34034, Prestige Falcon City",
      line2: "Kanakapura Main Rd, Anjanadri Layout, Konnakunte",
      city: "Bangalore",
      state: "Karnataka",
      zip: "560062",
      country: "India",
      mapCoordinates: { lat: 37.7749, lng: -122.4194 }
    },
    phone: "+91 9700400325",
    email: "info@nails.org.in"
  }
};