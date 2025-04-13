import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BookOpen, Globe, Users, Briefcase, Shield, Bitcoin, Lightbulb, MessageCircle, Award } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description, delay }: { 
  icon: React.ElementType, 
  title: string, 
  description: string, 
  delay: number 
}) => {
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
      className="bg-white/10 backdrop-blur-lg rounded-xl p-8 hover:bg-white/15 transition-all duration-300"
    >
      <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full w-16 h-16 flex items-center justify-center mb-6">
        <Icon className="w-8 h-8 text-blue-400" />
      </div>
      <h3 className="text-xl font-bold mb-4 text-white">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  );
};

const FeaturesPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Features Hero */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl mx-auto mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
          Unique Features
        </h1>
        <p className="text-xl text-gray-300">
          Discover what makes CRYPTOBLISS the premier platform for web3 education and community
        </p>
      </motion.div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        <FeatureCard
          icon={Globe}
          title="Africa-Focused"
          description="CRYPTOBLISS aims to become the go-to web3 community in Africa and beyond, addressing specific regional needs and providing localized solutions."
          delay={0.2}
        />
        
        <FeatureCard
          icon={BookOpen}
          title="Holistic Education"
          description="Our platform offers a comprehensive educational experience, covering web3 skills, knowledge, and practical applications to ensure well-rounded learning."
          delay={0.3}
        />
        
        <FeatureCard
          icon={Users}
          title="Community Engagement"
          description="We prioritize community building, providing a seamless entry point for newcomers and fostering collaborations among members."
          delay={0.4}
        />
        
        <FeatureCard
          icon={Briefcase}
          title="Exclusive Job Opportunities"
          description="Access to web3 job opportunities and collaborations sets us apart from other educational platforms, helping you build a career in the space."
          delay={0.5}
        />
        
        <FeatureCard
          icon={Shield}
          title="Ambassador Program"
          description="Our ambassador program connects members with web3 professionals, content writers, shillers, and other experts in the field."
          delay={0.6}
        />
        
        <FeatureCard
          icon={Bitcoin}
          title="Practical Application"
          description="Beyond theory, we focus on practical application of web3 skills and knowledge, ensuring you can apply what you learn in real-world scenarios."
          delay={0.7}
        />
      </div>

      {/* Key Highlights */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-20"
      >
        <h2 className="text-3xl font-bold mb-10 text-center">Key Highlights</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8">
            <div className="flex items-center mb-6">
              <Lightbulb className="w-10 h-10 text-yellow-400 mr-4" />
              <h3 className="text-2xl font-bold">Empowering Web3 Adoption</h3>
            </div>
            <p className="text-gray-300">
              CRYPTOBLISS aims to make blockchain technology accessible and applicable to all, 
              breaking down the barriers to entry and democratizing access to web3.
            </p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8">
            <div className="flex items-center mb-6">
              <Users className="w-10 h-10 text-blue-400 mr-4" />
              <h3 className="text-2xl font-bold">Community-Driven</h3>
            </div>
            <p className="text-gray-300">
              The platform connects experts, enthusiasts, and newcomers, fostering a thriving 
              web3 community where everyone can learn, share, and grow together.
            </p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8">
            <div className="flex items-center mb-6">
              <MessageCircle className="w-10 h-10 text-purple-400 mr-4" />
              <h3 className="text-2xl font-bold">Education and Adoption</h3>
            </div>
            <p className="text-gray-300">
              CRYPTOBLISS provides education, adoption, and utilization of blockchain technology, 
              facilitating a seamless transition from web2 to web3.
            </p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8">
            <div className="flex items-center mb-6">
              <Award className="w-10 h-10 text-yellow-400 mr-4" />
              <h3 className="text-2xl font-bold">Exclusive Opportunities</h3>
            </div>
            <p className="text-gray-300">
              Members gain access to web3 professionals, job opportunities, collaborations, 
              and a vibrant community, opening doors to new career paths.
            </p>
          </div>
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-r from-blue-900/40 to-purple-900/40 backdrop-blur-lg rounded-2xl p-10 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience These Features?</h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Join the CRYPTOBLISS community today and unlock all the benefits of our platform.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-cryptobliss-primary to-cryptobliss-secondary hover:from-cryptobliss-primary/80 hover:to-cryptobliss-secondary/80 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300"
        >
          Join Our Community Now
        </motion.button>
      </motion.div>
    </div>
  );
};

export default FeaturesPage;