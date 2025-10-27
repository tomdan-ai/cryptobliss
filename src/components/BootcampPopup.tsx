import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Award, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BootcampPopupProps {
  onClose: () => void;
}

const BootcampPopup: React.FC<BootcampPopupProps> = ({ onClose }) => {
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
              Bliss Creative Bootcamp 1.0
            </h2>
            <p className="text-gray-300">
              Master Graphics Design, Motion Design, or Video Editing with our intensive creative bootcamp!
            </p>
          </div>
          
          <div className="bg-white/10 rounded-xl p-4 mb-6">
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Calendar className="w-5 h-5 mr-2 text-cryptobliss-primary" />
                <span>Intensive Creative Training</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Award className="w-5 h-5 mr-2 text-cryptobliss-primary" />
                <span>Professional Certification</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Users className="w-5 h-5 mr-2 text-cryptobliss-primary" />
                <span>Exclusive Creative Community</span>
              </div>
            </div>
            
            <div className="mt-4 pt-4 border-t border-gray-600">
              <h4 className="text-white font-semibold mb-2">Available Tracks:</h4>
              <ul className="space-y-1 text-sm text-gray-300">
                <li>• Graphics Design — $8 @N1,500</li>
                <li>• Motion Design — $12 @N1,500</li>
                <li>• Video Editing — $15 @N1,500</li>
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col space-y-3">
            <Link 
              to="/bootcamp"
              onClick={onClose}
              className="bg-gradient-to-r from-cryptobliss-primary to-cryptobliss-secondary hover:from-cryptobliss-primary/80 hover:to-cryptobliss-secondary/80 text-white font-bold py-3 px-6 rounded-full text-center transition-all duration-300 flex items-center justify-center"
            >
              Register Now
              <ArrowRight className="w-4 h-4 ml-2" />
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

export default BootcampPopup;