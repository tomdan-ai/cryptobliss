import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, MessageSquare, Globe, Link, Briefcase, MapPin } from 'lucide-react';

const TestimonialCard = ({ quote, name, role }: { quote: string, name: string, role: string }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6 }}
      className="bg-white/10 backdrop-blur-lg rounded-xl p-6"
    >
      <div className="mb-4 text-white">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
          <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z"/>
        </svg>
      </div>
      <p className="text-gray-300 mb-6">"{quote}"</p>
      <div>
        <p className="font-bold text-white">{name}</p>
        <p className="text-gray-400 text-sm">{role}</p>
      </div>
    </motion.div>
  );
};

const CommunityPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Community Hero */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl mx-auto mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 text-white bg-clip-text">
          Join Our Thriving Community
        </h1>
        <p className="text-xl text-gray-300">
          Connect, learn, and grow with fellow web3 enthusiasts and professionals
        </p>
      </motion.div>

      {/* Community Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white/5 backdrop-blur-lg rounded-xl p-6 text-center"
        >
          <div className="text-4xl font-bold text-white mb-2">500+</div>
          <div className="text-gray-300">Community Members</div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white/5 backdrop-blur-lg rounded-xl p-6 text-center"
        >
          <div className="text-4xl font-bold text-white mb-2">50+</div>
          <div className="text-gray-300">Testimonies</div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white/5 backdrop-blur-lg rounded-xl p-6 text-center"
        >
          <div className="text-4xl font-bold text-white mb-2">20+</div>
          <div className="text-gray-300">Expert Contributors</div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white/5 backdrop-blur-lg rounded-xl p-6 text-center"
        >
          <div className="text-4xl font-bold text-white mb-2">5+</div>
          <div className="text-gray-300">Monthly Events</div>
        </motion.div>
      </div>

      {/* Community Benefits */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-20"
      >
        <h2 className="text-3xl font-bold mb-10 text-center">Community Benefits</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8">
            <div className="bg-blue-500/20 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4">Connect with Peers</h3>
            <p className="text-gray-300">
              Network with like-minded individuals who share your passion for blockchain and web3 technologies.
            </p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8">
            <div className="bg-purple-500/20 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Link className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4">Access to Experts</h3>
            <p className="text-gray-300">
              Connect directly with ambassadors, content writers, and other web3 professionals who can guide your journey.
            </p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8">
            <div className="bg-blue-500/20 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Briefcase className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4">Career Opportunities</h3>
            <p className="text-gray-300">
              Gain exclusive access to web3 job opportunities and collaborations that can advance your career.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Community Testimonials */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold mb-10 text-center">What Our Community Says</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TestimonialCard 
            quote="Joining CRYPTOBLISS has been transformative for my web3 journey. The community support and educational resources are unmatched."
            name="Sarah K."
            role="Blockchain Developer"
          />
          
          <TestimonialCard 
            quote="As someone new to the crypto space, I found CRYPTOBLISS to be incredibly welcoming and helpful. I've learned so much in just a few months."
            name="Michael O."
            role="Web3 Enthusiast"
          />
          
          <TestimonialCard 
            quote="The ambassador program connected me with industry professionals who have helped me advance my career in ways I couldn't have imagined."
            name="Ade T."
            role="DeFi Specialist"
          />
        </div>
      </div>

      {/* Community Events */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 md:p-12 mb-20"
      >
        <h2 className="text-3xl font-bold mb-8 text-center">Upcoming Community Events</h2>
        
        <div className="space-y-6">
          {/* <div className="flex flex-col md:flex-row md:items-center justify-between p-4 bg-white/5 rounded-xl">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="bg-blue-900 text-white rounded-lg p-3 mr-4 text-center">
                <div className="text-sm">APR</div>
                <div className="text-2xl font-bold">15</div>
              </div>
              <div>
                <h3 className="text-xl font-bold">Web3 Basics Workshop</h3>
                <div className="flex items-center text-gray-400 text-sm mt-1">
                  <Globe className="w-4 h-4 mr-2" />
                  <span>Virtual Event</span>
                </div>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-full text-sm transition-colors duration-300"
            >
              Register
            </motion.button>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-center justify-between p-4 bg-white/5 rounded-xl">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="bg-purple-900 text-white rounded-lg p-3 mr-4 text-center">
                <div className="text-sm">APR</div>
                <div className="text-2xl font-bold">22</div>
              </div>
              <div>
                <h3 className="text-xl font-bold">DeFi Deep Dive</h3>
                <div className="flex items-center text-gray-400 text-sm mt-1">
                  <Globe className="w-4 h-4 mr-2" />
                  <span>Virtual Event</span>
                </div>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-full text-sm transition-colors duration-300"
            >
              Register
            </motion.button>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-center justify-between p-4 bg-white/5 rounded-xl">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="bg-blue-900 text-white rounded-lg p-3 mr-4 text-center">
                <div className="text-sm">MAY</div>
                <div className="text-2xl font-bold">05</div>
              </div>
              <div>
                <h3 className="text-xl font-bold">Web3 Career Fair</h3>
                <div className="flex items-center text-gray-400 text-sm mt-1">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>Lagos, Nigeria (Hybrid Event)</span>
                </div>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-full text-sm transition-colors duration-300"
            >
              Register
            </motion.button>
          </div> */}

          {/* Anniversary Event */}
          <div className="flex flex-col md:flex-row md:items-center justify-between p-4 bg-white/5 rounded-xl">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="bg-blue-900 text-white rounded-lg p-3 mr-4 text-center">
                <div className="text-sm">APR</div>
                <div className="text-2xl font-bold">25</div>
              </div>
              <div>
                <h3 className="text-xl font-bold">Solana All Stars Anniversary</h3>
                <div className="flex flex-col text-gray-400 text-sm mt-1">
                  <span className="flex items-center">
                    <Globe className="w-4 h-4 mr-2" />
                    <span>Uyo, Nigeria</span>
                  </span>
                  <span className="text-yellow-400 mt-1 font-medium">Less than a week to go and you haven't registered yet? Cake and food go dey!</span>
                </div>
              </div>
            </div>
            <motion.a
              href="https://lu.ma/q5s8k4jx?tk=ER5EM2"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-full text-sm transition-colors duration-300"
            >
              Register Now
            </motion.a>
          </div>
          
          {/* ACES WEEK 2025 */}
          <div className="flex flex-col md:flex-row md:items-center justify-between p-4 bg-white/5 rounded-xl">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="bg-purple-900 text-white rounded-lg p-3 mr-4 text-center">
                <div className="text-sm">MAY</div>
                <div className="text-2xl font-bold">05</div>
              </div>
              <div>
                <h3 className="text-xl font-bold">ACES WEEK 2025 Tech Day</h3>
                <div className="flex flex-col text-gray-400 text-sm mt-1">
                  <span className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>Uyo, Nigeria</span>
                  </span>
                  <span className="text-green-400 mt-1 font-medium">
                    In partnership with Interswitch Developer Community
                  </span>
                </div>
              </div>
            </div>
            <motion.a
              href="https://bit.ly/acestechday"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-full text-sm transition-colors duration-300"
            >
              RSVP Now
            </motion.a>
          </div>
          
          {/* Avalanche Developer Bootcamp */}
          <div className="flex flex-col md:flex-row md:items-center justify-between p-4 bg-white/5 rounded-xl">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="bg-red-900 text-white rounded-lg p-3 mr-4 text-center flex flex-col">
                <div className="text-sm">APR</div>
                <div className="text-xl font-bold">21-25</div>
              </div>
              <div>
                <h3 className="text-xl font-bold">Intro to Blockchain – Avalanche Developer Bootcamp</h3>
                <div className="flex flex-col text-gray-400 text-sm mt-1">
                  <span className="flex items-center">
                    <Globe className="w-4 h-4 mr-2" />
                    <span>Online | 18:00–20:00 CET</span>
                  </span>
                  <span className="text-blue-400 mt-1 font-medium">
                    Road to Summit Hackathon - Get Certified!
                  </span>
                </div>
              </div>
            </div>
            <motion.a
              href="https://lu.ma/ekk8uvs9"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-full text-sm transition-colors duration-300"
            >
              Register Free
            </motion.a>
          </div>
        </div>
      </motion.div>

      {/* Join Community CTA */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-blue-900/40 to-purple-900/40 backdrop-blur-lg rounded-2xl p-10 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Community Today</h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Connect with fellow enthusiasts, access exclusive resources, and accelerate your journey into the world of web3.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <motion.a
            href="https://chat.whatsapp.com/JD1OpDksrGT7iDtKuDeP6b"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 flex items-center justify-center"
          >
            <MessageSquare className="w-5 h-5 mr-2" />
            Join WhatsApp Community
          </motion.a>
          
          <motion.a
            href="https://x.com/CRYPTOBLISS_01"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 flex items-center justify-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="mr-2" viewBox="0 0 16 16">
              <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z"/>
            </svg>
            Follow on Twitter
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
};

export default CommunityPage;