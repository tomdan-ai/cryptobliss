import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Award, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

interface WorkshopPopupProps {
  onClose: () => void;
}

const WorkshopPopup: React.FC<WorkshopPopupProps> = ({ onClose }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}
      >
        <div 
          className="absolute inset-0 bg-transparent"
          onClick={onClose}
        />
        
        <motion.div
          initial={{ y: 50, opacity: 0, scale: 0.9 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 50, opacity: 0, scale: 0.9 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="bg-gradient-to-br from-cryptobliss-dark to-blue-900/90 border border-cryptobliss-primary/20 rounded-2xl max-w-md w-full p-6 relative z-10"
          onClick={(e) => e.stopPropagation()}
        >
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold mb-2 bg-gradient-to-r from-cryptobliss-primary to-cryptobliss-secondary text-transparent bg-clip-text">
              Web3 Masterclass Workshop
            </h2>
            <p className="text-gray-300">
              Join our exclusive 5-day workshop and accelerate your Web3 journey!
            </p>
          </div>
          
          <div className="bg-white/10 rounded-xl p-4 mb-6">
            <div className="flex items-center text-gray-300 mb-2">
              <Calendar className="w-5 h-5 mr-2 text-cryptobliss-primary" />
              <span>May 15-19, 2025</span>
            </div>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Award className="w-4 h-4 mr-2 text-cryptobliss-primary flex-shrink-0 mt-1" />
                <span className="text-gray-300">$500 in crypto prizes for top participants</span>
              </li>
              <li className="flex items-start">
                <Users className="w-4 h-4 mr-2 text-cryptobliss-primary flex-shrink-0 mt-1" />
                <span className="text-gray-300">Mentorship from leading African Web3 professionals</span>
              </li>
            </ul>
          </div>
          
          <div className="flex flex-col space-y-3">
            <Link 
              to="/workshop"
              onClick={onClose}
              className="bg-gradient-to-r from-cryptobliss-primary to-cryptobliss-secondary hover:from-cryptobliss-primary/80 hover:to-cryptobliss-secondary/80 text-white font-bold py-2 px-6 rounded-full text-center transition-all duration-300"
            >
              Register Now
            </Link>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white text-sm"
            >
              Remind me later
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default WorkshopPopup;