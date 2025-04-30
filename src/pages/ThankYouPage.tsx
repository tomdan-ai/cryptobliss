import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const ThankYouPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-20 flex flex-col items-center justify-center text-center min-h-[calc(100vh-10rem)]">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, type: 'spring', stiffness: 150 }}
        className="bg-white/10 backdrop-blur-lg rounded-2xl p-10 md:p-16 max-w-2xl w-full"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 0.4, type: 'spring' }}
          className="mb-6"
        >
          <CheckCircle className="w-16 h-16 text-green-400 mx-auto" />
        </motion.div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">
          Thank You!
        </h1>
        <p className="text-lg text-gray-300 mb-8">
          Your message has been successfully submitted. We appreciate you reaching out and will get back to you via email as soon as possible.
        </p>
        <Link to="/">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-cryptobliss-primary to-cryptobliss-secondary hover:from-cryptobliss-primary/80 hover:to-cryptobliss-secondary/80 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300"
          >
            Return to Home
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
};

export default ThankYouPage;