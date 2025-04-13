import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Target, Users, Globe, Lightbulb, CheckCircle, ExternalLink, Twitter } from 'lucide-react';

const TeamMemberCard = ({ 
  name, 
  role, 
  description, 
  imageUrl, 
  twitterHandle, 
  delay 
}: { 
  name: string, 
  role: string, 
  description: string, 
  imageUrl: string, 
  twitterHandle: string, 
  delay: number 
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay }}
      className="bg-white/10 backdrop-blur-lg rounded-xl p-6 flex flex-col items-center"
    >
      <div className="w-40 h-40 rounded-full overflow-hidden mb-6 ring-4 ring-blue-500/30">
        <img 
          src={imageUrl} 
          alt={name} 
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-xl font-bold mb-1 text-white">{name}</h3>
      <p className="text-blue-400 mb-4">{role}</p>
      <p className="text-gray-300 text-center mb-5">{description}</p>
      <a 
        href={`https://twitter.com/${twitterHandle}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center text-gray-300 hover:text-blue-400 transition-colors"
      >
        <Twitter className="w-5 h-5 mr-2" />
        @{twitterHandle}
      </a>
    </motion.div>
  );
};

const AboutPage: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
            <Target className="w-10 h-10 text-blue-400 mr-4" />
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
            <Globe className="w-10 h-10 text-blue-400 mr-4" />
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
              <Users className="w-8 h-8 text-blue-400" />
            </div>
            <h3 className="text-xl font-bold mb-3">Community-Driven</h3>
            <p className="text-gray-300">
              We connect experts, enthusiasts, and newcomers, fostering a thriving web3 community where everyone can learn and grow.
            </p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 text-center">
            <div className="bg-purple-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <Lightbulb className="w-8 h-8 text-purple-400" />
            </div>
            <h3 className="text-xl font-bold mb-3">Educational Excellence</h3>
            <p className="text-gray-300">
              We provide comprehensive educational experiences that cover web3 skills, knowledge, and practical applications.
            </p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 text-center">
            <div className="bg-blue-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <Globe className="w-8 h-8 text-blue-400" />
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
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <TeamMemberCard 
            name="Mark Udeh" 
            role="Founder & CEO" 
            description="Visionary leader with a passion for blockchain adoption in Africa. Mark brings strategic direction and entrepreneurial spirit to CRYPTOBLISS." 
            imageUrl="https://images.unsplash.com/photo-1639628735078-ed2f038a193e?w=600&auto=format&fit=crop&q=60" 
            twitterHandle="markudeh_" 
            delay={0.1} 
          />
          
          <TeamMemberCard 
            name="Tom" 
            role="Blockchain & Fullstack Developer" 
            description="Technical genius behind our platform. Tom combines deep blockchain knowledge with full-stack development skills to build robust solutions." 
            imageUrl="https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?w=600&auto=format&fit=crop&q=60" 
            twitterHandle="devtombest" 
            delay={0.2} 
          />
          
          <TeamMemberCard 
            name="Peneil" 
            role="Backend & Blockchain Developer" 
            description="Architectural mastermind implementing secure and scalable blockchain solutions. Peneil's expertise ensures our platform runs flawlessly." 
            imageUrl="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=600&auto=format&fit=crop&q=60" 
            twitterHandle="peneildev" 
            delay={0.3} 
          />
          
          <TeamMemberCard 
            name="Nsikak Zion" 
            role="Sales Lead" 
            description="Strategic partnership builder with exceptional communication skills. Nsikak drives adoption and creates valuable connections across the ecosystem." 
            imageUrl="https://images.unsplash.com/photo-1640951613773-54706e06851d?w=600&auto=format&fit=crop&q=60" 
            twitterHandle="nsikakzion" 
            delay={0.4} 
          />
          <TeamMemberCard 
            name="Nsikak Zion" 
            role="Sales Lead" 
            description="Strategic partnership builder with exceptional communication skills. Nsikak drives adoption and creates valuable connections across the ecosystem." 
            imageUrl="https://images.unsplash.com/photo-1640951613773-54706e06851d?w=600&auto=format&fit=crop&q=60" 
            twitterHandle="nsikakzion" 
            delay={0.4} 
          />
          <TeamMemberCard 
            name="Nsikak Zion" 
            role="Sales Lead" 
            description="Strategic partnership builder with exceptional communication skills. Nsikak drives adoption and creates valuable connections across the ecosystem." 
            imageUrl="https://images.unsplash.com/photo-1640951613773-54706e06851d?w=600&auto=format&fit=crop&q=60" 
            twitterHandle="nsikakzion" 
            delay={0.4} 
          />
          <TeamMemberCard 
            name="Nsikak Zion" 
            role="Sales Lead" 
            description="Strategic partnership builder with exceptional communication skills. Nsikak drives adoption and creates valuable connections across the ecosystem." 
            imageUrl="https://images.unsplash.com/photo-1640951613773-54706e06851d?w=600&auto=format&fit=crop&q=60" 
            twitterHandle="nsikakzion" 
            delay={0.4} 
          />
        </div>
      </motion.div>
    </div>
  );
};

export default AboutPage;