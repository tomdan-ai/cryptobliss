import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Target, Users, Globe, Lightbulb, CheckCircle, ExternalLink, Twitter, X, Link, Calendar, Mail, Phone } from 'lucide-react';

// Team member detailed information
const teamMembersDetails = {
  "iammarkudeh": {
    name: "Mark Udeh",
    role: "Founder & CEO",
    tagline: "Web3 Reformist | Community Builder | Crypto Mentor | Digital Influencer",
    summary: "Experienced and passionate Web3 reformist with a proven track record in community building, affiliate marketing, crypto consulting, and content creation. My goal is to empower Web3 enthusiasts and preach wealth establishment through the crypto space.",
    experience: [
      {
        title: "CEO & Community Lead",
        company: "CryptoBliss",
        period: "Present",
        achievements: [
          "Founded and lead a community-driven Web3 brand focused on empowering individuals",
          "Developed engagement strategies that led to 80% increase in community size",
          "Host community AMA sessions, educational workshops, and marketing campaigns"
        ]
      },
      {
        title: "Crypto Consultant",
        company: "Freelance",
        period: "Present",
        achievements: [
          "Offer expert advice to investors and traders on market trends",
          "Provide technical analysis and portfolio management guidance"
        ]
      }
    ],
    skills: ["Community Management", "Affiliate Marketing", "Technical Analysis", "Blockchain Education", "Leadership"],
    education: "University of Uyo (Ongoing) - B.Sc. in Statistics",
    socials: {
      twitter: "iammarkudeh",
      linkedin: "Mark (thecryptoblist) Udeh",
      email: "markudeh03@gmail.com",
      phone: "+234 906 951 3498"
    },
    imageUrl: "/mark.mp4"
  },
  "devtombest": {
    name: "Tom Udoh",
    role: "Blockchain & Fullstack Developer",
    tagline: "Technical Architect | Smart Contract Developer | UI/UX Specialist",
    summary: "Technical expert with deep blockchain knowledge and full-stack development skills. Specializes in building secure, user-friendly applications for the web3 ecosystem with expertise in JavaScript, Ruby on Rails, and Python.",
    experience: [
      {
        title: "Full Stack Developer",
        company: "FASCHCOM",
        period: "August 2024 – February 2025",
        achievements: [
          "Design and develop robust APIs for integration with third-party trading platforms",
          "Collaborate with multiple teams to launch robust products",
          "Analyze and troubleshoot integration issues, ensuring seamless connectivity"
        ]
      },
      {
        title: "Backend Developer",
        company: "VOSYN",
        period: "May 2024 – August 2024",
        achievements: [
          "Design and develop robust APIs for integration with third-party streaming platforms",
          "Collaborate with ML/AI teams on core technologies",
          "Implement best practices for API security and scalability"
        ]
      },
      {
        title: "SUI ON CAMPUS Hackathon",
        company: "Winner",
        period: "2023",
        achievements: [
          "Design and Develop Smart Contracts on SUI blockchain",
          "Write Seamless Backend to Integrate with SUI devnet and mainnet",
          "Lead the development team to success"
        ]
      }
    ],
    skills: ["JavaScript", "React", "TypeScript", "Solidity", "Node.js", "Ruby on Rails", "MongoDB", "PostgreSQL", "Smart Contract Development"],
    education: "B.Eng in Computer Engineering (University of UYO, Ongoing)",
    socials: {
      twitter: "devtombest",
      github: "devtombest",
      email: "tomudoh258@email.com"
    },
    imageUrl: "/tom.jpg"
  },
  "Penivera001": {
    name: "Peniel Ben",
    role: "Backend & Blockchain Developer",
    tagline: "Backend Expert | Blockchain Developer | Automation Specialist",
    summary: "Computer Science student at the University of Uyo with expertise in backend development, REST API management, and web automation. Experienced in blockchain development for Ethereum and Solana platforms.",
    experience: [
      {
        title: "Backend Development & API Engineer",
        company: "Freelance",
        period: "Present",
        achievements: [
          "Designed and maintained scalable backend architectures for web applications",
          "Developed RESTful APIs using Django and FastAPI to enhance system interoperability",
          "Optimized database performance and implemented security best practices"
        ]
      },
      {
        title: "Blockchain Developer",
        company: "Projects",
        period: "Present",
        achievements: [
          "Developed secure Ethereum smart contracts using Vyper and Web3.py",
          "Built Solana dApps using Python SDK for decentralized applications",
          "Integrated blockchain solutions with web applications"
        ]
      }
    ],
    skills: ["Python", "Django", "FastAPI", "MySQL", "PostgreSQL", "Ethereum", "Solana", "Web Scraping", "Automation", "Smart Contracts"],
    education: "B.Sc. in Computer Science (University of Uyo, Ongoing)",
    socials: {
      github: "Penivera",
      linkedin: "peniel-ben",
      email: "penielben40@gmail.com",
      phone: "+2348078617821"
    },
    imageUrl: "/peniel.jpeg"
  },
  "nsikakzion": {
    name: "Nsikak Zion",
    role: "Sales Lead",
    tagline: "Growth Strategist | Partnership Builder | Marketing Professional",
    summary: "Highly driven engineering school graduate and ambitious maintenance professional, with a proven history of exceeding goals and achieving high client satisfaction ratings in both technical and sales environments.",
    experience: [
      {
        title: "Supervisor",
        company: "Nuel Relief Ventures",
        period: "Present",
        achievements: [
          "Lead marketing initiatives and logistics operations",
          "Manage Point Of Service operations",
          "Create strategic partnerships with key stakeholders"
        ]
      },
      {
        title: "Internship",
        company: "Azimarine",
        period: "Past",
        achievements: [
          "Operation of lathe machine and surface grinding",
          "Drilling operations and machine maintenance",
          "Technical support and troubleshooting"
        ]
      }
    ],
    skills: ["Maintenance & Safety", "Machine Operations", "Marketing", "Communication", "Leadership"],
    education: "National Diploma from National Metallurgical Training Institute (3.69 CGPA)",
    socials: {
      email: "Nsikakzion8@gmail.com",
      phone: "+2349122399178"
    },
    imageUrl: "/nsikak.jpeg"
  },
  "versatilekuma": {
    name: "Joyce Kuma",
    role: "Content Writer",
    tagline: "Content Creator | Digital Marketer | Brand Storyteller",
    summary: "Multifaceted content writer and digital marketer with a strong grip on Web3, tech, and brand storytelling. Specializes in turning ideas into powerful written content that converts, educates, and builds online presence across platforms.",
    skills: ["Web3 Content", "Technical Writing", "Brand Storytelling", "Digital Marketing", "SEO Optimization"],
    socials: {},
    imageUrl: "/kuma.jpeg"
  },
  "omega": {
    name: "Iniobong Ikoh",
    role: "Graphic Designer",
    tagline: "Visual Communicator | Brand Identity Expert | Creative Artist",
    summary: "Skilled graphic designer with four years of hands-on experience in visual communication. Specialized in creating captivating designs that are not only eye-catching but also convey a brand's existence and message effectively.",
    experience: [
      {
        title: "Graphic Designer",
        company: "308 Designs",
        period: "Present",
        achievements: [
          "Created unique and memorable brand identities",
          "Designed print materials, social media graphics, and marketing collateral",
          "Developed visual systems for cohesive brand presence"
        ]
      }
    ],
    skills: ["Adobe Photoshop", "Adobe Illustrator", "Corel Draw", "Brand Identity", "Social Media Graphics", "Print Design"],
    socials: {
      email: "lilzeese@gmail.com",
      phone: "+234 814 1812 209"
    },
    imageUrl: "/omega.jpeg"
  },
  "godswill": {
    name: "Godswill Ezeh",
    role: "Marketing Director",
    tagline: "Strategic Marketer | Team Leader | Sales Professional",
    summary: "Experienced marketing professional with expertise in digital marketing, field operations, and team leadership. Proven success in building relationships, negotiating deals, and closing sales in high-tech marketing organizations.",
    experience: [
      {
        title: "Head of Marketing and Recruitment",
        company: "CHARIS REALTY COURT",
        period: "2024 – Present",
        achievements: [
          "Train and mobilize marketers to achieve company sales goals",
          "Create strategic frontiers on sales boost and innovative ideas",
          "Assist CEO in business development activities"
        ]
      },
      {
        title: "Head of Affiliate Marketing and Partnerships",
        company: "BLUEPRINT AFRICA & PHENOM EDUTECH",
        period: "Nov 2022 – June 2024",
        achievements: [
          "Raised 300 affiliates from 5 major cities in Nigeria contributing to 90% of sales targets",
          "Raised $25,000 annually from direct sales partnerships",
          "Established 50 general partners annually for increased visibility"
        ]
      }
    ],
    skills: ["Digital Marketing", "Social Media Marketing", "Email Marketing", "Field Marketing", "Customer Service", "Brand Development"],
    education: "Akwa Ibom State University (B.Sc Economics, 2nd class Upper)",
    socials: {
      email: "ezehgodswill@gmail.com",
      phone: "+234 704 881 8130"
    },
    imageUrl: "/eze.jpeg"
  }
};

// Update the TeamMemberCard component to include clickable social links
const TeamMemberCard = ({ 
  name, 
  role, 
  description, 
  imageUrl, 
  twitterHandle, 
  delay,
  onClick
}: { 
  name: string, 
  role: string, 
  description: string, 
  imageUrl: string, 
  twitterHandle: string, 
  delay: number,
  onClick: () => void 
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const isVideo = imageUrl.endsWith('.mp4');

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay }}
      className="bg-white/10 backdrop-blur-lg rounded-xl p-6 flex flex-col items-center cursor-pointer hover:bg-white/15 transition-all duration-300"
      onClick={onClick}
      whileHover={{ y: -5 }}
    >
      <div className="w-40 h-40 rounded-full overflow-hidden mb-6 ring-4 ring-blue-500/30">
        {isVideo ? (
          <video 
            src={imageUrl} 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover"
          />
        ) : (
          <img 
            src={imageUrl} 
            alt={name} 
            className="w-full h-full object-cover"
          />
        )}
      </div>
      <h3 className="text-xl font-bold mb-1 text-white">{name}</h3>
      <p className="text-white mb-4">{role}</p>
      <p className="text-gray-300 text-center mb-5">{description}</p>
      <a 
        href={`https://twitter.com/${twitterHandle}`}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => e.stopPropagation()} // Prevent card click when clicking Twitter link
        className="flex items-center text-blue-400 hover:text-blue-300 transition-colors"
      >
        <Twitter className="w-5 h-5 mr-2" />
        @{twitterHandle}
      </a>
    </motion.div>
  );
};

// Update the TeamMemberPopup component to display all social links
const TeamMemberPopup = ({ member, onClose }: { member: any, onClose: () => void }) => {
  if (!member) return null;
  
  const isVideo = member.imageUrl.endsWith('.mp4');
  
  return (
    <AnimatePresence>
      <motion.div 
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div 
          className="bg-gradient-to-br from-cryptobliss-dark/95 to-black/95 border border-cryptobliss-primary/20 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-8 relative"
          initial={{ scale: 0.9, y: 20, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0.9, y: 20, opacity: 0 }}
          transition={{ type: "spring", damping: 20, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="flex flex-col md:flex-row md:items-start gap-8">
            <div className="flex-shrink-0">
              <div className="w-40 h-40 rounded-full overflow-hidden ring-4 ring-blue-500/30 mx-auto">
                {isVideo ? (
                  <video 
                    src={member.imageUrl} 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img 
                    src={member.imageUrl} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              
              {/* Social media links */}
              <div className="mt-4 flex justify-center space-x-3">
                {member.socials?.twitter && (
                  <a 
                    href={`https://twitter.com/${member.socials.twitter}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500/20 p-2 rounded-full hover:bg-blue-500/40 transition-colors"
                    title={`Twitter: @${member.socials.twitter}`}
                  >
                    <Twitter className="w-5 h-5 text-blue-400" />
                  </a>
                )}
                
                {member.socials?.github && (
                  <a 
                    href={`https://github.com/${member.socials.github}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-700/40 p-2 rounded-full hover:bg-gray-600/40 transition-colors"
                    title={`GitHub: ${member.socials.github}`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="text-white">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </a>
                )}
                
                {member.socials?.linkedin && (
                  <a 
                    href={`https://linkedin.com/in/${member.socials.linkedin.replace(/\s/g, '-').toLowerCase()}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-700/30 p-2 rounded-full hover:bg-blue-700/50 transition-colors"
                    title={`LinkedIn: ${member.socials.linkedin}`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="text-blue-300">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                )}
              </div>
            </div>
            
            <div className="flex-grow">
              <h2 className="text-3xl font-bold mb-1 text-white">{member.name}</h2>
              <p className="text-xl text-cryptobliss-primary mb-2">{member.role}</p>
              <p className="text-gray-300 mb-4">{member.tagline}</p>
              
              <div className="bg-white/5 p-4 rounded-lg mb-6">
                <h3 className="text-xl font-semibold mb-2">Professional Summary</h3>
                <p className="text-gray-300">{member.summary}</p>
              </div>
              
              {member.experience && (
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-3">Experience</h3>
                  <div className="space-y-4">
                    {member.experience.map((exp: any, index: number) => (
                      <div key={index} className="border-l-2 border-cryptobliss-primary/50 pl-4">
                        <h4 className="font-bold text-white">{exp.title} - {exp.company}</h4>
                        <p className="text-gray-400 text-sm mb-2">{exp.period}</p>
                        <ul className="list-disc list-inside text-gray-300 space-y-1">
                          {exp.achievements.map((achievement: string, i: number) => (
                            <li key={i}>{achievement}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {member.skills && (
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-2">Core Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill: string, index: number) => (
                      <span 
                        key={index}
                        className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              
              {member.education && (
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-2">Education</h3>
                  <p className="text-gray-300">{member.education}</p>
                </div>
              )}
              
              {member.socials && (
                <div className="bg-white/5 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Connect</h3>
                  <div className="space-y-2">
                    {member.socials.twitter && (
                      <a 
                        href={`https://twitter.com/${member.socials.twitter}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-300 hover:text-blue-400 transition-colors"
                      >
                        <Twitter className="w-5 h-5 mr-2" />
                        @{member.socials.twitter}
                      </a>
                    )}
                    {member.socials.linkedin && (
                      <a 
                        href={`https://linkedin.com/in/${member.socials.linkedin.replace(/\s/g, '-').toLowerCase()}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-300 hover:text-blue-400 transition-colors"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-5 h-5 mr-2">
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                          <rect x="2" y="9" width="4" height="12"></rect>
                          <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                        {member.socials.linkedin}
                      </a>
                    )}
                    {member.socials.github && (
                      <a 
                        href={`https://github.com/${member.socials.github}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-300 hover:text-white transition-colors"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-5 h-5 mr-2">
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                        {member.socials.github}
                      </a>
                    )}
                    {member.socials.email && (
                      <a 
                        href={`mailto:${member.socials.email}`}
                        className="flex items-center text-gray-300 hover:text-blue-400 transition-colors"
                      >
                        <Mail className="w-5 h-5 mr-2" />
                        {member.socials.email}
                      </a>
                    )}
                    {member.socials.phone && (
                      <a 
                        href={`tel:${member.socials.phone}`}
                        className="flex items-center text-gray-300 hover:text-blue-400 transition-colors"
                      >
                        <Phone className="w-5 h-5 mr-2" />
                        {member.socials.phone}
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const AboutPage: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  // State to track which team member's popup should be shown
  const [selectedMember, setSelectedMember] = useState<string | null>(null);
  
  // Function to get member details
  const getSelectedMemberDetails = () => {
    if (!selectedMember) return null;
    return teamMembersDetails[selectedMember as keyof typeof teamMembersDetails];
  };

  return (
    <div className="container mx-auto px-4 py-12">
      {/* About Hero */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl mx-auto mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 text-white bg-clip-text">
          About CRYPTOBLISS
        </h1>
        <p className="text-xl text-gray-300">
          Empowering the Web3 Revolution through education, community, and adoption
        </p>
      </motion.div>

      {/* Mission & Vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.6 }}
          className="bg-white/10 backdrop-blur-lg rounded-xl p-8"
        >
          <div className="flex items-center mb-6">
            <Target className="w-10 h-10 text-white mr-4" />
            <h2 className="text-2xl font-bold">Our Mission</h2>
          </div>
          <p className="text-gray-300">
            At CRYPTOBLISS, our mission is to facilitate a seamless transition from web2 to web3, 
            providing education, adoption, and utilization of blockchain technology. We aim to make 
            blockchain technology accessible, applicable, and rewarding for all.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/10 backdrop-blur-lg rounded-xl p-8"
        >
          <div className="flex items-center mb-6">
            <Globe className="w-10 h-10 text-white mr-4" />
            <h2 className="text-2xl font-bold">Our Vision</h2>
          </div>
          <p className="text-gray-300">
            Our purpose is to become the go-to web3 community in Africa and beyond, empowering 
            individuals and organizations to thrive in the decentralized economy. We envision a world 
            where blockchain technology is accessible to all.
          </p>
        </motion.div>
      </div>

      {/* Core Values */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-20"
      >
        <h2 className="text-3xl font-bold mb-10 text-center">Our Core Values</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 text-center">
            <div className="bg-blue-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3">Community-Driven</h3>
            <p className="text-gray-300">
              We connect experts, enthusiasts, and newcomers, fostering a thriving web3 community where everyone can learn and grow.
            </p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 text-center">
            <div className="bg-purple-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <Lightbulb className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3">Educational Excellence</h3>
            <p className="text-gray-300">
              We provide comprehensive educational experiences that cover web3 skills, knowledge, and practical applications.
            </p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 text-center">
            <div className="bg-blue-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <Globe className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3">Regional Focus</h3>
            <p className="text-gray-300">
              We address the specific needs of the African market, providing a unique perspective and targeted solutions.
            </p>
          </div>
        </div>
      </motion.div>

      {/* What Sets Us Apart */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 md:p-12 mb-20"
      >
        <h2 className="text-3xl font-bold mb-8 text-center">What Sets CRYPTOBLISS Apart</h2>
        
        <div className="space-y-6">
          <div className="flex items-start">
            <CheckCircle className="w-6 h-6 text-green-500 mr-4 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold mb-2">Regional Focus</h3>
              <p className="text-gray-300">
                By targeting the African market, CRYPTOBLISS addresses a specific need and provides a unique perspective.
              </p>
            </div>
          </div>
          
          <div className="flex items-start">
            <CheckCircle className="w-6 h-6 text-green-500 mr-4 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold mb-2">Comprehensive Education</h3>
              <p className="text-gray-300">
                The platform's holistic approach to education, covering web3 skills, knowledge, and practical applications, sets it apart from other educational platforms.
              </p>
            </div>
          </div>
          
          <div className="flex items-start">
            <CheckCircle className="w-6 h-6 text-green-500 mr-4 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold mb-2">Community-Centric</h3>
              <p className="text-gray-300">
                CRYPTOBLISS prioritizes community building and engagement, providing a supportive environment for members to learn and grow.
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Meet the Team Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-20"
      >
        <h2 className="text-3xl font-bold mb-4 text-center">Meet Our Core Team</h2>
        <p className="text-gray-300 text-center max-w-2xl mx-auto mb-12">
          The passionate individuals driving CRYPTOBLISS forward, dedicated to empowering the web3 revolution across Africa and beyond.
          <span className="block mt-2 text-sm text-blue-400">Click on any team member to learn more</span>
        </p>
        
        {/* CEO Card - Standalone and Prominent */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-lg mx-auto"
          >
            <TeamMemberCard 
              name="Mark Udeh" 
              role="Founder & CEO" 
              description="Visionary leader with a passion for blockchain adoption in Africa. Mark brings strategic direction and entrepreneurial spirit to CRYPTOBLISS." 
              imageUrl={teamMembersDetails.iammarkudeh.imageUrl} 
              twitterHandle="iammarkudeh" 
              delay={0.1}
              onClick={() => setSelectedMember("iammarkudeh")}
            />
          </motion.div>
        </div>
        
        {/* Other Team Members - 3x2 Grid */}
        <h3 className="text-2xl font-semibold mb-8 text-center">Core Team</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TeamMemberCard 
            name="Tom Udoh" 
            role="Blockchain & Fullstack Developer" 
            description="Technical genius behind our platform. Tom combines deep blockchain knowledge with full-stack development skills to build robust solutions." 
            imageUrl={teamMembersDetails.devtombest.imageUrl} 
            twitterHandle="devtombest" 
            delay={0.2}
            onClick={() => setSelectedMember("devtombest")}
          />
          
          <TeamMemberCard 
            name="Peniel Ben" 
            role="Backend & Blockchain Developer" 
            description="Architectural mastermind implementing secure and scalable blockchain solutions. Peniel's expertise ensures our platform runs flawlessly." 
            imageUrl={teamMembersDetails.Penivera001.imageUrl} 
            twitterHandle="Penivera001" 
            delay={0.3}
            onClick={() => setSelectedMember("Penivera001")}
          />
          
          <TeamMemberCard 
            name="Nsikak Zion" 
            role="Sales Lead" 
            description="Strategic partnership builder with exceptional communication skills. Nsikak drives adoption and creates valuable connections across the ecosystem." 
            imageUrl={teamMembersDetails.nsikakzion.imageUrl} 
            twitterHandle="nsikakzion" 
            delay={0.4}
            onClick={() => setSelectedMember("nsikakzion")}
          />
          
          <TeamMemberCard 
            name="Joyce Kuma" 
            role="Content Writer" 
            description="Talented wordsmith crafting compelling Web3 narratives and educational content that resonates with both newcomers and experienced blockchain enthusiasts." 
            imageUrl={teamMembersDetails.versatilekuma.imageUrl} 
            twitterHandle="versatilejkuma" 
            delay={0.5}
            onClick={() => setSelectedMember("versatilekuma")}
          />
          
          <TeamMemberCard 
            name="Iniobong Ikoh" 
            role="Graphic Designer" 
            description="Creative genius behind our visual identity. Iniobong creates stunning designs that capture the essence of our brand and engage our community." 
            imageUrl={teamMembersDetails.omega.imageUrl} 
            twitterHandle="308designs" 
            delay={0.6}
            onClick={() => setSelectedMember("omega")}
          />
          
          <TeamMemberCard 
            name="Godswill Ezeh" 
            role="Marketing Director" 
            description="Strategic marketing expert who drives growth and adoption through innovative campaigns and strong partnership development." 
            imageUrl={teamMembersDetails.godswill.imageUrl} 
            twitterHandle="godswillezeh" 
            delay={0.7}
            onClick={() => setSelectedMember("godswill")}
          />
        </div>
      </motion.div>

      {/* Team Member Popup */}
      {selectedMember && (
        <TeamMemberPopup 
          member={getSelectedMemberDetails()}
          onClose={() => setSelectedMember(null)}
        />
      )}
    </div>
  );
};

export default AboutPage;