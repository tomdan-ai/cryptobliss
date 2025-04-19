import React from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl mx-auto mb-10"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 text-white bg-clip-text">
          Privacy Policy
        </h1>
        <p className="text-xl text-gray-300">
          Last Updated: April 19, 2025
        </p>
      </motion.div>

      <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 max-w-4xl mx-auto mb-12">
        <div className="prose prose-lg prose-invert max-w-none">
          <p className="text-gray-300">
            <strong className="text-white">IMPORTANT:</strong> This is a placeholder privacy policy. 
            CRYPTOBLISS is currently consulting with legal experts to finalize our official privacy policy. 
            This document will be updated with complete and legally binding information as soon as possible.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">1. Introduction</h2>
          <p className="text-gray-300">
            CRYPTOBLISS ("we," "our," or "us") is committed to protecting the privacy and security of your information. 
            This Privacy Policy describes how we collect, use, and disclose your information when you use our platform, 
            website, and services related to blockchain education and community engagement.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">2. Information We Collect</h2>
          <p className="text-gray-300">
            We may collect personal information that you provide directly to us, information we obtain automatically when 
            you use our Platform, and information from third-party sources. This includes but is not limited to:
          </p>
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>Contact information (such as email address and phone number)</li>
            <li>Wallet addresses and blockchain transaction information</li>
            <li>Information about your interactions with our platform</li>
            <li>Community participation and educational progress data</li>
          </ul>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">3. How We Use Your Information</h2>
          <p className="text-gray-300">
            We use the information we collect for various purposes, including:
          </p>
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>Providing and improving our educational content and services</li>
            <li>Facilitating community engagement and participation</li>
            <li>Communicating with you about updates, security alerts, and support</li>
            <li>Protecting our platform and users from fraudulent or illegal activities</li>
          </ul>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">4. Wallet Information</h2>
          <p className="text-gray-300">
            If you connect a Web3 wallet to our platform, we may collect your wallet address and transaction information 
            solely for the purpose of providing our services. We do not store private keys or seed phrases.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">5. Regional Considerations</h2>
          <p className="text-gray-300">
            As a platform with a focus on Africa, we comply with applicable data protection laws and regulations in the 
            regions where we operate.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">6. Contact Us</h2>
          <p className="text-gray-300">
            If you have any questions about this Privacy Policy, please contact us at:
            <a href="mailto:cryptobliss03@gmail.com" className="text-cryptobliss-primary ml-2">cryptobliss03@gmail.com</a>
          </p>
        </div>
      </div>
      
      <div className="text-center text-gray-400 text-sm">
        <p>This Privacy Policy is a placeholder and will be updated with comprehensive legal information.</p>
        <p>We recommend consulting with a legal professional specializing in blockchain technology and data privacy.</p>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;