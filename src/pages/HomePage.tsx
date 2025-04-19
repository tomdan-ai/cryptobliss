import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Feather as Ethereum, DollarSign, BookOpen, TrendingUp, Shield, Globe, Users, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

function FeatureCard({ icon: Icon, title, description, delay }: { icon: React.ElementType, title: string, description: string, delay: number }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay }}
      className="bg-white/5 backdrop-blur-lg rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
    >
      <Icon className="w-12 h-12 text-white mb-4" />
      <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  );
}

function HomePage() {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div>
      {/* Hero Section with Background Logo */}
      <div className="relative">
        {/* Background Logo */}
        <div className="absolute inset-0 flex justify-center items-center opacity-10 pointer-events-none overflow-hidden">
          <img 
            src="/bglogo.png" 
            alt="CRYPTOBLISS" 
            className="w-[70%] max-w-3xl animate-pulse"
            style={{ animationDuration: '8s' }}
          />
        </div>

        <motion.div
          ref={heroRef}
          initial={{ opacity: 0, y: 20 }}
          animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 pt-16 pb-20 text-center relative z-10"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cryptobliss-primary to-cryptobliss-secondary text-white bg-clip-text">
            Empowering the Web3 Revolution
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Your gateway to the decentralized economy. Join CRYPTOBLISS and unlock the power of Web3 with education, adoption, and utilization of blockchain technology.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.a
              href="https://chat.whatsapp.com/JD1OpDksrGT7iDtKuDeP6b"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-cryptobliss-primary hover:bg-cryptobliss-primary/90 text-cryptobliss-dark font-bold py-3 px-8 rounded-full text-lg transition-colors duration-300"
            >
              Join Our Community
            </motion.a>
            <Link to="/about">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-cryptobliss-primary hover:border-cryptobliss-primary/80 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors duration-300"
              >
                Learn More
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Mission Statement */}
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-cryptobliss-dark/30 backdrop-blur-lg rounded-2xl p-8 md:p-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-white">Unlock the Power of Web3</h2>
          <p className="text-gray-300 text-lg mb-6 text-center max-w-3xl mx-auto">
            At CRYPTOBLISS, we're dedicated to fostering a thriving web3 community that connects experts, 
            enthusiasts, and newcomers alike. Our mission is to facilitate a seamless transition from web2 to web3.
          </p>
        </motion.div>
      </div>

      {/* Features Grid */}
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">
          What Sets CRYPTOBLISS Apart
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={Globe}
            title="Africa-Focused"
            description="Becoming the go-to web3 community in Africa and beyond, addressing specific regional needs."
            delay={0.2}
          />
          <FeatureCard
            icon={BookOpen}
            title="Holistic Education"
            description="Comprehensive educational experience covering web3 skills, knowledge, and practical applications."
            delay={0.4}
          />
          <FeatureCard
            icon={Users}
            title="Community Engagement"
            description="Prioritizing community building, providing a seamless entry point for newcomers."
            delay={0.6}
          />
          <FeatureCard
            icon={Briefcase}
            title="Exclusive Opportunities"
            description="Access to web3 job opportunities and collaborations with professionals in the space."
            delay={0.8}
          />
          <FeatureCard
            icon={Shield}
            title="Ambassador Program"
            description="Connect with web3 professionals, content writers, shillers, and other experts."
            delay={1.0}
          />
          <FeatureCard
            icon={Ethereum}
            title="Practical Application"
            description="Learn and apply web3 skills in real-world scenarios to accelerate your growth."
            delay={1.2}
          />
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-cryptobliss-dark/30 backdrop-blur-lg rounded-2xl p-12 text-center"
        >
          <h2 className="text-4xl font-bold mb-6">Join the Movement</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Our purpose is to empower individuals and organizations to thrive in the decentralized economy. 
            Join us today and experience the bliss of web3!
          </p>
            <motion.a
            href="https://chat.whatsapp.com/JD1OpDksrGT7iDtKuDeP6b"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-gradient-to-r from-cryptobliss-primary to-cryptobliss-secondary hover:from-cryptobliss-primary/80 hover:to-cryptobliss-secondary/80 text-cryptobliss-dark font-bold py-3 px-8 rounded-full text-lg transition-all duration-300"
            >
            Get Started Now
            </motion.a>
        </motion.div>
      </div>
    </div>
  );
}

export default HomePage;