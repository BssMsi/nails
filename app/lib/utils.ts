import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const NAILS_DATA = {
  organization: {
    purpose: "NAILS (Network for AI, Legal and sustainable solutions society) is dedicated to promoting responsible AI development, legal frameworks, and sustainable solutions for societal challenges.",
    objectives: [
      "To promote research and development in AI technologies that benefit society",
      "To advocate for legal frameworks that ensure ethical AI deployment",
      "To develop sustainable solutions for environmental and social challenges",
      "To bridge the gap between technology, law, and sustainability",
      "To educate and raise awareness about responsible AI use"
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
      name: "Dr. Aisha Johnson",
      role: "Chairperson",
      bio: "AI Ethics Researcher with 15 years of experience in developing ethical frameworks for AI deployment",
      image: "/images/member1.jpg"
    },
    {
      name: "Prof. Michael Chen",
      role: "Vice Chairperson",
      bio: "Legal scholar specializing in technology law and digital rights",
      image: "/images/member2.jpg"
    },
    {
      name: "Dr. Sarah Patel",
      role: "Secretary",
      bio: "Sustainability expert with focus on technology-driven environmental solutions",
      image: "/images/member3.jpg"
    },
    {
      name: "James Wilson",
      role: "Treasurer",
      bio: "Financial technology specialist with expertise in ethical investment",
      image: "/images/member4.jpg"
    },
    {
      name: "Dr. Elena Rodriguez",
      role: "Executive Member",
      bio: "Computer scientist specializing in explainable AI and algorithmic transparency",
      image: "/images/member5.jpg"
    },
    {
      name: "Robert Kim",
      role: "Executive Member",
      bio: "Policy expert with background in international technology governance",
      image: "/images/member6.jpg"
    },
    {
      name: "Dr. Lisa Okafor",
      role: "Executive Member",
      bio: "Data ethics specialist focusing on bias mitigation in AI systems",
      image: "/images/member7.jpg"
    },
    {
      name: "Thomas Müller",
      role: "Executive Member",
      bio: "Environmental engineer working on AI applications for climate change solutions",
      image: "/images/member8.jpg"
    },
    {
      name: "Dr. Priya Singh",
      role: "Executive Member",
      bio: "Digital rights advocate with expertise in privacy-preserving technologies",
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
      line1: "NAILS Headquarters",
      line2: "123 Innovation Avenue",
      city: "Tech City",
      state: "Digital State",
      zip: "10101",
      country: "Republic of Innovation",
      mapCoordinates: { lat: 13.0296807, lng: 77.5899125 },
      href: "https://maps.app.goo.gl/LBGHpeCr3roENf25A",
    },
    alternativeAddress: {
      line1: "NAILS Research Center",
      line2: "456 Sustainability Boulevard",
      city: "Green Valley",
      state: "Eco State",
      zip: "20202",
      country: "Republic of Innovation",
      mapCoordinates: { lat: 12.88609082360481, lng: 77.56269843173627 },
      href: "https://maps.app.goo.gl/vJDFUXDKehWcaSLn8",
    },
    phone: "+1 (555) 123-4567",
    email: "info@nails-ngo.org"
  }
};