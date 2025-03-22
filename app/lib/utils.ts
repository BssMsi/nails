import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const NAILS_DATA = {
  organization: {
    purpose: [
      "The Network for AI, Legal, and Sustainable Solutions Society is dedicated to advancing responsible Artificial Intelligence (AI), legal research, and sustainability by leveraging insights from government agencies, NGOs, industry experts, and academic institutions. Our purpose is to:",
      "• Promote environmental sustainability and regulatory compliance by staying informed on evolving policies and best practices.",
      "• Support social and environmental initiatives by engaging with NGOs and community organizations working towards sustainable development.",
      "• Encourage ethical AI adoption and ESG (Environmental, Social, and Governance) compliance by learning from responsible private sector enterprises.",
      "• Stay at the forefront of AI research and legal studies through knowledge exchange with universities and research institutions.",
      "• Support corporate social responsibility initiatives.",
      "• Align with global and national best practices in sustainability, legal frameworks, and technology policies to create a meaningful impact.",
      "While we do not have formal collaborations, we actively engage with experts to ensure our initiatives are well-informed, effective, and aligned with emerging trends.",      
    ],
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
    aboutSociety: [
      "The Network for AI, Legal, and Sustainable Solutions Society is headquartered in Bangalore, Karnataka, and operates under the Karnataka Societies Registration Act, 1960. Our society is governed by an executive committee comprising experts and professionals from diverse fields.",
      "We believe in an interdisciplinary approach to problem-solving and aim to foster collaborations that drive ethical AI development, legal clarity, and sustainability best practices. Our initiatives focus on education, policy advocacy, and implementation of impactful projects.",
      "Join us in our mission to create a more informed, responsible, and sustainable future through AI, legal innovation, and environmental solutions.",
    ],
    scopeOfWork: [
      {
        title: "Sustainable Solutions & Environmental Initiatives",
        description: [
          "Promote sustainable practices and renewable energy adoption.",
          "Conduct environmental impact assessments and sustainability audits.",
          "Offer carbon, water, and waste footprint accounting. ",
          "Support circular economy principles and green technology adoption.",
        ],
        text: "Sustainable",
        revealText: "Environmental" // This text appears on hover
      },
      {
        title: "Corporate Social Responsibility (CSR) Advisory & Implementation",
        description: [
          "Develop and implement CSR programs aligned with sustainability goals.",
          "Provide ESG consulting, reporting, and compliance support.",
          "Conduct CSR training and capacity-building initiatives.",
          "Foster partnerships between corporations and community organizations.",
        ],
        text: "CSR",
        revealText: "Social" // This text appears on hover
      },
      {
        title: "Participation in UN & World Bank Projects",
        description: [
          "Align with UN Sustainable Development Goals (SDGs).",
          "Contribute to World Bank-funded sustainability programs.",
          "Offer expertise in climate adaptation and sustainable infrastructure.",
          "Support policy advisory, capacity building, and impact assessments.",
        ],
        text: "Net Zero",
        revealText: "Governance" // This text appears on hover
      },
    ]
  },
  foundingMembers: [
    {
      id: 1,
      name: "Shri. Salikeri Ramachandra Varambally",
      role: "President",
      bio: "Retired Additional Controller State Accounts Department, Government of Karnataka",
      image: "/images/srv.png"
    },
    {
      id: 2,
      name: "Shri. Bharath Srinivas Shroff",
      role: "Vice President",
      bio: "Data Scientst and Full Stack Software Engineer",
      image: "/images/bharath.png"
    },
    {
      id: 3,
      name: "Smt. Jayashree Maiya",
      role: "Secretary",
      bio: "Programme Associate",
      image: "/images/jayashree.png"
    },
    {
      id: 4,
      name: "Ms. Bhargavi Srinivas Shroff",
      role: "Joint-Secretary",
      bio: "Law Student",
      image: "/images/bhargavi.png"
    },
    {
      id: 5,
      name: "Smt. Annapoorna Shroff",
      role: "Treasurer",
      bio: "Consultant Former IT Professional with Tech Mahindra, Ampersand",
      image: "/images/anu.png"
    },
    {
      id: 6,
      name: "Shri. Srinivas Nagesha Rao Shroff, PhD",
      role: "Executive Member",
      bio: "Former CEO of REC-Delhi",
      image: "/images/sns.png"
    },
    {
      id: 7,
      name: "Smt. Lalitha Varambally",
      role: "Executive Member",
      bio: "House Maker",
      image: "/images/lalitha.png"
    },
    {
      id: 8,
      name: "Smt. Srimathi H N Varambally",
      role: "Executive Member",
      bio: "House Maker",
      image: "/images/smh.png"
    },
    {
      id: 9,
      name: "Ms. Neha Maiya",
      role: "Executive Member",
      bio: "AI Engineering Student",
      image: "/images/neha.png"
    }
  ],
  advisoryBoard: [
    {
      id: 1,
      name: "Shri. Salikeri Ramachandra Varambally",
      role: "Advisor",
      image: "/images/srv.png",
      bio: "Retired Additional Controller State Accounts Department, Government of Karnataka",
    },
  ],
  team: [
    {
      id: 6,
      name: "Shri. Srinivas Nagesha Rao Shroff, PhD",
      role: "Chief Executive Officer",
      image: "/images/sns.png"
    },
  ],
  whatWeDo: [
    {
      title: "Capacity Building & Training",
      description: "Organizing workshops, training, and awareness campaigns for individuals and organizations.",
    },
    {
      title: "CSR Initiatives",
      description: "Supporting projects related to green technology, environmental conservation, and social impact.",
    },
    {
      title: "Project Management & Consulting",
      description: "Assisting businesses and institutions in implementing AI-driven solutions and sustainability programs.",
    },
    {
      title: "Monitoring & Evaluation",
      description: "Offering services for carbon footprint assessment, ESG compliance, and sustainable development reporting.",
    },
    {
      title: "Publications & Conferences",
      description: "Disseminating knowledge through journals, reports, seminars, and networking events.",
    },
    {
      title: "Research & Development",
      description: "We conduct and support research in artificial intelligence, environmental sustainability, legal compliance, and emerging technologies.",
    },
    {
      title: "Policy & Legal Advisory",
      description: "Providing expert guidance on legal frameworks related to AI ethics, regulatory compliance, and sustainability.",
    },
  ],
  nationalProjects: [
    {
      title: "Decarbonization of India's Secondary Steel Sector",
      description: "In collaboration with UNDP and the Ministry of Steel, NAILS Society played a pivotal role in developing a strategic project to decarbonize India's secondary steel sector. The initiative emphasizes promoting low-carbon technologies, pilot testing Best Available Technologies (BAT), and enhancing capacity building for small and medium-scale steel producers. It also supports policy development, stakeholder engagement, and knowledge sharing.",
      year: "2025",
      impact: "This achievement advances India's commitment to achieving Net Zero Emissions by 2070 and meeting global environmental standards, such as the Carbon Border Adjustment Mechanism (CBAM). It represents a major step toward a more sustainable and competitive steel industry in India."
    }
  ],
  upcomingProjects: [
    {
      title: "Project with UNDP on Distributed Renewable Energy for Livelihoods",
      description: "The Network for AI, Legal, and Sustainable Solutions Society is collaborating with UNDP to develop a project proposal for the Deployment of Distributed Renewable Energy (DRE) for Livelihoods in Mizoram. The initiative aims to enhance energy access and promote sustainable livelihoods for both refugee and host communities. It focuses on identifying suitable DRE applications, supporting capacity building for operation and maintenance, and enabling business development for sustainable income generation.",
      year: "2025",
      impact: "Participation from 15 countries, resulting in draft international guidelinesThis project advances clean energy adoption, strengthens social resilience, and fosters inclusive economic growth. By addressing energy availability challenges, the initiative supports global sustainability goals and improves the quality of life for vulnerable communities."
    },
    {
      title: "Upcoming Project with UNIDO",
      description: "Deployment of AI solutions for climate monitoring in developing nationsNAILS Society, in collaboration with Deloitte, successfully submitted a proposal to UNIDO for the Development of a Roadmap towards Inclusive and Green Transformation of the Textile Manufacturing Sector in India. This initiative focuses on developing a comprehensive roadmap that integrates low-carbon technologies, resource efficiency, and ESG considerations. The collaboration leverages expertise in energy, chemicals, and textile technologies to provide strategic insights, stakeholder engagement, and policy recommendations.",
      year: "2025",
      impact: "This achievement strengthens NAILS Society's role in fostering sustainable industrial transformation. It supports the transition to a greener and more inclusive textile industry in India while aligning with global sustainability goals."
    },
    {
      title: "Upcoming Project with PCI: Feasibility Study for Solarization of Micro Enterprises",
      description: "The Network for AI, Legal, and Sustainable Solutions Society is collaborating with PCI India to conduct a feasibility study on solarizing micro-enterprises in Jagatsinghpur district, Odisha. The project will assess the solarization potential for rice mills, flour and spice mills, and paper plate-making enterprises. It will involve technical feasibility evaluations, energy requirement analysis, cost-benefit assessments, and financial modeling to create Detailed Project Reports (DPRs) for each enterprise.",
      year: "2025",
      impact: "This initiative aims to enhance energy efficiency, reduce greenhouse gas emissions, and promote clean energy adoption in rural enterprises. By supporting this project, the society is contributing to India's sustainability and climate action goals."
    }
  ],
  donors: [
    { name: "Placeholder", logo: "/images/partner.png" },
    { name: "Placeholder", logo: "/images/partner.png" },
    { name: "Placeholder", logo: "/images/partner.png" },
  ],
  partners: [
    { name: "Placeholder", logo: "/images/partner.png" },
    { name: "Placeholder", logo: "/images/partner.png" },
    { name: "Placeholder", logo: "/images/partner.png" },
  ],
  resources: {
    reports: [
      {
        title: "State of AI Ethics 2023",
        description: "Annual report on developments in AI ethics and governance",
        link: "#",
        image: "/images/reports/ai-ethics.jpg"
      },
      {
        title: "Sustainable Technology Implementation Guide",
        description: "Framework for environmentally responsible tech deployment",
        link: "#",
        image: "/images/reports/sustainable-tech.jpg"
      },
      {
        title: "Digital Rights in the Age of AI",
        description: "Analysis of privacy and rights challenges in the AI era",
        link: "#",
        image: "/images/reports/digital-rights.jpg"
      }
    ],
    publications: [
      {
        title: "Algorithmic Fairness: Challenges and Solutions",
        author: "Dr. Elena Rodriguez",
        journal: "Journal of AI Ethics",
        year: "2023",
        link: "#",
      },
      {
        title: "Algorithmic Fairness: Challenges and Solutions",
        author: "Dr. Elena Rodriguez",
        journal: "Journal of AI Ethics",
        year: "2023",
        link: "#",
      },
      {
        title: "Algorithmic Fairness: Challenges and Solutions",
        author: "Dr. Elena Rodriguez",
        journal: "Journal of AI Ethics",
        year: "2023",
        link: "#",
      },
      {
        title: "Algorithmic Fairness: Challenges and Solutions",
        author: "Dr. Elena Rodriguez",
        journal: "Journal of AI Ethics",
        year: "2023",
        link: "#",
      },
    ],
    photos: [
      { title: "Annual Conference 2023", image: "/images/photos/photo1.jpg" },
      { title: "Community Workshop Series", image: "/images/photos/photo2.jpg" },
      { title: "International Partnership Summit", image: "/images/photos/photo3.jpg" },
      { title: "AI Ethics Roundtable", image: "/images/photos/photo4.jpg" },
      { title: "Sustainability Hackathon", image: "/images/photos/photo5.jpg" }
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
      mapCoordinates: { lat: 13.0296807, lng: 77.5899125 },
      href: "https://maps.app.goo.gl/LBGHpeCr3roENf25A",
    },
    alternativeAddress: {
      line1: "34034, Prestige Falcon City",
      line2: "Kanakapura Main Rd, Anjanadri Layout, Konnakunte",
      city: "Bangalore",
      state: "Karnataka",
      zip: "560062",
      country: "India",
      mapCoordinates: { lat: 12.88609082360481, lng: 77.56269843173627 },
      href: "https://maps.app.goo.gl/vJDFUXDKehWcaSLn8",
    },
    phone: "+91 9700400325",
    email: "info@nails.org.in"
  }
};