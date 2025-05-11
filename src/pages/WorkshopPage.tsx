import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Calendar, 
  Award, 
  BookOpen, 
  Clock, 
  CheckCircle, 
  ExternalLink, 
  Send, 
  ChevronDown, 
  ChevronUp, 
  Loader2 
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

// FAQ Item Component with toggle functionality
const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6">
      <button 
        className="flex items-center justify-between w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-xl font-bold">{question}</h3>
        {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
      </button>
      
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="mt-3"
        >
          <p className="text-gray-300">{answer}</p>
        </motion.div>
      )}
    </div>
  );
};

const WorkshopPage: React.FC = () => {
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'submitting' | 'error'>('idle');
  const navigate = useNavigate();
  
  // Ref for the registration form section to scroll to
  const registerRef = React.useRef<HTMLDivElement>(null);
  
  const scrollToRegister = () => {
    registerRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const [benefitsRef, benefitsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  // Replace scrollToRegister function with redirectToLuma
  const redirectToLuma = () => {
    window.open("https://lu.ma/dhuqqfwh", "_blank");
  };

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl mx-auto mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 text-white bg-clip-text">
          Web3 Masterclass Workshop
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          Your 5-day journey to mastering essential Web3 skills and joining Africa's blockchain revolution
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={redirectToLuma}
          className="bg-gradient-to-r from-cryptobliss-primary to-cryptobliss-secondary hover:from-cryptobliss-primary/80 hover:to-cryptobliss-secondary/80 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300"
        >
          Join the Workshop
        </motion.button>
      </motion.div>

      {/* About the Workshop */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/10 backdrop-blur-lg rounded-xl p-8"
        >
          <h2 className="text-2xl font-bold mb-6">About the Workshop</h2>
          <p className="text-gray-300 mb-6">
            Join us for an intensive 5-day Web3 Masterclass designed specifically for African enthusiasts looking to break into the blockchain ecosystem. Whether you're a complete beginner or have some experience, this workshop will equip you with essential knowledge and practical skills to thrive in the decentralized economy.
          </p>
          <div className="flex items-center text-gray-300 mb-4">
            <Calendar className="w-5 h-5 mr-2 text-cryptobliss-primary" />
            <span>May 15-19, 2025</span>
          </div>
          <div className="flex items-center text-gray-300">
            <Clock className="w-5 h-5 mr-2 text-cryptobliss-primary" />
            <span>Evening sessions (8:00 PM - 9:30 PM WAT)</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-br from-white/5 to-blue-500/10 backdrop-blur-lg rounded-xl p-8"
        >
          <h2 className="text-2xl font-bold mb-6">What You'll Learn</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 mr-3 text-green-400 flex-shrink-0 mt-1" />
              <span className="text-gray-300">How to build your Web3 identity from scratch</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 mr-3 text-green-400 flex-shrink-0 mt-1" />
              <span className="text-gray-300">Growth hacking strategies tailored for X (Twitter)</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 mr-3 text-green-400 flex-shrink-0 mt-1" />
              <span className="text-gray-300">Personal branding for credibility & visibility</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 mr-3 text-green-400 flex-shrink-0 mt-1" />
              <span className="text-gray-300">Smart engagement tactics that get noticed</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 mr-3 text-green-400 flex-shrink-0 mt-1" />
              <span className="text-gray-300">Positioning yourself for Web3 jobs and bounties</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 mr-3 text-green-400 flex-shrink-0 mt-1" />
              <span className="text-gray-300">Community dynamics & how to lead with value</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 mr-3 text-green-400 flex-shrink-0 mt-1" />
              <span className="text-gray-300">The power of content — even if you're not a creator</span>
            </li>
          </ul>
        </motion.div>
      </div>

      {/* How It Works */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 md:p-12 mb-20"
      >
        <h2 className="text-3xl font-bold mb-8 text-center">How It Works</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center">
            <div className="bg-blue-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3">Daily Sessions</h3>
            <p className="text-gray-300">
              Participate in live interactive sessions with our expert instructors via X Spaces for hands-on learning.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center">
            <div className="bg-purple-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16" className="text-white">
                <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Community Engagement</h3>
            <p className="text-gray-300">
              Collaborate with fellow participants through daily challenges and discussions using our hashtag #CryptoBlissWorkshop.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center">
            <div className="bg-green-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3">Certification</h3>
            <p className="text-gray-300">
              Complete all sessions and assignments to receive your CRYPTOBLISS Web3 certification and access to exclusive opportunities.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Giveaways/Rewards */}
      <motion.div
        ref={benefitsRef}
        initial={{ opacity: 0, y: 30 }}
        animate={benefitsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
        className="mb-20"
      >
        <h2 className="text-3xl font-bold mb-10 text-center">Workshop Benefits</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-cryptobliss-primary/20 to-cryptobliss-secondary/20 backdrop-blur-lg rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-white">Exclusive Giveaways</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Award className="w-5 h-5 mr-3 text-cryptobliss-primary flex-shrink-0 mt-1" />
                <span className="text-gray-300">Top 3 Participants: Custom profile banners + spotlight features</span>
              </li>
              <li className="flex items-start">
                <Award className="w-5 h-5 mr-3 text-cryptobliss-primary flex-shrink-0 mt-1" />
                <span className="text-gray-300">All Active Participants: "Web3 Social Certified" digital certificate</span>
              </li>
              <li className="flex items-start">
                <Award className="w-5 h-5 mr-3 text-cryptobliss-primary flex-shrink-0 mt-1" />
                <span className="text-gray-300">Random Winners: Token airdrops and CRYPTOBLISS customized swag</span>
              </li>
              <li className="flex items-start">
                <Award className="w-5 h-5 mr-3 text-cryptobliss-primary flex-shrink-0 mt-1" />
                <span className="text-gray-300">Partner token drops for selected participants</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-lg rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-white">Bonus Perks</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 mr-3 text-green-400 flex-shrink-0 mt-1" />
                <span className="text-gray-300">Special access to post-workshop opportunities</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 mr-3 text-green-400 flex-shrink-0 mt-1" />
                <span className="text-gray-300">Priority whitelisting for future events</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 mr-3 text-green-400 flex-shrink-0 mt-1" />
                <span className="text-gray-300">Access to a private growth circle</span>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Registration Form */}
      <motion.div
        ref={registerRef}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-r from-blue-900/40 to-purple-900/40 backdrop-blur-lg rounded-2xl p-10 mb-20"
      >
        <h2 className="text-3xl font-bold mb-6 text-center">Register for the Workshop</h2>
        <p className="text-xl text-gray-300 mb-8 text-center max-w-2xl mx-auto">
          Spots are limited! Secure your place in our upcoming Web3 Masterclass Workshop
        </p>
        
        <div className="max-w-2xl mx-auto text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={redirectToLuma}
            className="w-full md:w-auto bg-gradient-to-r from-cryptobliss-primary to-cryptobliss-secondary hover:from-cryptobliss-primary/80 hover:to-cryptobliss-secondary/80 text-white font-bold py-4 px-10 rounded-full text-lg transition-all duration-300 flex items-center justify-center mx-auto"
          >
            Register on Luma
            <ExternalLink className="w-5 h-5 ml-2" />
          </motion.button>
          
          <p className="text-gray-400 text-sm mt-4">
            You'll be redirected to Luma to complete your registration
          </p>
        </div>
      </motion.div>

      {/* FAQs Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-20"
      >
        <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4 max-w-3xl mx-auto">
          <FAQItem 
            question="Do I need any prior experience with Web3?"
            answer="No prior experience is required. Our workshop is designed to accommodate beginners while still providing value to those with some experience in the space."
          />
          <FAQItem 
            question="What equipment do I need to participate?"
            answer="You'll need a computer with internet access, a smartphone for wallet setup, and accounts on X (Twitter) and Discord to participate in the discussions and live sessions."
          />
          <FAQItem 
            question="Is there a fee to join the workshop?"
            answer="The workshop is completely free for all participants. We're committed to making Web3 education accessible to enthusiasts across Africa."
          />
          <FAQItem 
            question="Will the sessions be recorded?"
            answer="Yes, all sessions will be recorded and made available to registered participants who may miss the live events."
          />
          <FAQItem 
            question="How do I claim the rewards and certificates?"
            answer="Participants who complete all daily tasks and the final project will receive instructions on how to claim their rewards and certificates after the workshop concludes."
          />
        </div>
      </motion.div>

      {/* Final CTA */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-cryptobliss-primary/30 to-cryptobliss-secondary/30 backdrop-blur-lg rounded-2xl p-10 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Web3 Journey?</h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Join us for this exclusive workshop and be at the forefront of Africa's blockchain revolution.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={redirectToLuma}
          className="bg-white text-cryptobliss-dark font-bold py-3 px-8 rounded-full text-lg transition-all duration-300"
        >
          Secure Your Spot Now
        </motion.button>
        <p className="text-gray-400 mt-4">
          Follow <a href="https://x.com/CRYPTOBLISS_01" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">#CryptoblissGrowth #SocialUpliftWorkshop</a> for updates
        </p>
      </motion.div>
    </div>
  );
};

export default WorkshopPage;