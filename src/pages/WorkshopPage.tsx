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
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    twitterHandle: '',
    experience: 'beginner'
  });
  
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
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmissionStatus('submitting');
    
    try {
      // Replace with your actual form submission endpoint
      const response = await fetch("https://formspree.io/f/your-form-id", {
        method: 'POST',
        headers: {
          'Accept': 'application/json'
        },
        body: JSON.stringify(formState)
      });
      
      if (response.ok) {
        setFormState({ name: '', email: '', twitterHandle: '', experience: 'beginner' });
        navigate('/thank-you');
      } else {
        setSubmissionStatus('error');
        console.error("Form submission failed:", await response.json());
      }
    } catch (error) {
      setSubmissionStatus('error');
      console.error("Error submitting form:", error);
    }
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
          onClick={scrollToRegister}
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
        
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-300">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                required
                disabled={submissionStatus === 'submitting'}
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-700 focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400 text-white disabled:opacity-50"
                placeholder="Enter your full name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-300">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                required
                disabled={submissionStatus === 'submitting'}
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-700 focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400 text-white disabled:opacity-50"
                placeholder="Enter your email address"
              />
            </div>
            
            <div>
              <label htmlFor="twitterHandle" className="block text-sm font-medium mb-2 text-gray-300">Twitter/X Handle</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">@</span>
                <input
                  type="text"
                  id="twitterHandle"
                  name="twitterHandle"
                  value={formState.twitterHandle}
                  onChange={handleChange}
                  required
                  disabled={submissionStatus === 'submitting'}
                  className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/5 border border-gray-700 focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400 text-white disabled:opacity-50"
                  placeholder="your_handle"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="experience" className="block text-sm font-medium mb-2 text-gray-300">Your Experience Level</label>
              <select
                id="experience"
                name="experience"
                value={formState.experience}
                onChange={handleChange}
                required
                disabled={submissionStatus === 'submitting'}
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-700 focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400 text-white disabled:opacity-50"
              >
                <option value="beginner" className="bg-gray-800">Beginner - New to Web3</option>
                <option value="intermediate" className="bg-gray-800">Intermediate - Some knowledge</option>
                <option value="advanced" className="bg-gray-800">Advanced - Actively using Web3</option>
              </select>
            </div>
            
            {submissionStatus === 'error' && (
              <p className="text-red-400 text-sm text-center">
                Sorry, there was an error processing your registration. Please try again later or contact us directly.
              </p>
            )}

            <motion.button
              whileHover={submissionStatus !== 'submitting' ? { scale: 1.05 } : {}}
              whileTap={submissionStatus !== 'submitting' ? { scale: 0.95 } : {}}
              type="submit"
              disabled={submissionStatus === 'submitting'}
              className="w-full bg-gradient-to-r from-cryptobliss-primary to-cryptobliss-secondary hover:from-cryptobliss-primary/80 hover:to-cryptobliss-secondary/80 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {submissionStatus === 'submitting' ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Registering...
                </>
              ) : (
                <>
                  Register Now
                  <Send className="w-5 h-5 ml-2" />
                </>
              )}
            </motion.button>
            
            <p className="text-gray-400 text-sm text-center">
              By registering, you agree to our {' '}
              <Link to="/terms-of-service" className="text-blue-400 hover:underline">
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link to="/privacy-policy" className="text-blue-400 hover:underline">
                Privacy Policy
              </Link>
            </p>
          </form>
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
          onClick={scrollToRegister}
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