import React from 'react';
import { motion } from 'framer-motion';

const TermsOfServicePage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl mx-auto mb-10"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 text-white bg-clip-text">
          Terms of Service
        </h1>
        <p className="text-xl text-gray-300">
          Last Updated: April 19, 2025
        </p>
      </motion.div>

      <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 max-w-4xl mx-auto mb-12">
        <div className="prose prose-lg prose-invert max-w-none">
          <p className="text-gray-300">
            <strong className="text-white">IMPORTANT:</strong> This is a placeholder terms of service. 
            CRYPTOBLISS is currently consulting with legal experts to finalize our official terms. 
            This document will be updated with complete and legally binding information as soon as possible.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">1. Acceptance of Terms</h2>
          <p className="text-gray-300">
            By accessing or using CRYPTOBLISS's platform, website, and services (collectively, the "Platform"), 
            you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not 
            agree with any of these terms, you are prohibited from using or accessing the Platform.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">2. Educational Content and Services</h2>
          <p className="text-gray-300">
            CRYPTOBLISS provides educational content related to blockchain technology, cryptocurrency, and Web3. 
            Our educational materials are for informational purposes only and should not be considered financial advice.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">3. User Accounts and Community Participation</h2>
          <p className="text-gray-300">
            Users may need to create accounts to access certain features. You are responsible for maintaining 
            the confidentiality of your account information and for all activities under your account.
          </p>
          <p className="text-gray-300 mt-4">
            When participating in our community, you agree to:
          </p>
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>Be respectful to other community members</li>
            <li>Not engage in harassment or discriminatory behavior</li>
            <li>Not post spam, scams, or fraudulent content</li>
            <li>Comply with any community guidelines we publish</li>
          </ul>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">4. Blockchain Interactions</h2>
          <p className="text-gray-300">
            If our Platform enables interactions with blockchain networks:
          </p>
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>You are responsible for the security of your wallet and private keys</li>
            <li>You understand the risks associated with blockchain transactions</li>
            <li>We are not responsible for losses resulting from user error or blockchain vulnerabilities</li>
          </ul>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">5. Intellectual Property</h2>
          <p className="text-gray-300">
            All content on the Platform, including text, graphics, logos, and educational materials, 
            is the property of CRYPTOBLISS and is protected by copyright and other intellectual property laws.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">6. Limitation of Liability</h2>
          <p className="text-gray-300">
            CRYPTOBLISS shall not be liable for any indirect, incidental, special, consequential, or punitive damages 
            resulting from your access to or use of, or inability to access or use, the Platform.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">7. Contact</h2>
          <p className="text-gray-300">
            If you have any questions about these Terms, please contact us at:
            <a href="mailto:cryptobliss03@gmail.com" className="text-cryptobliss-primary ml-2">cryptobliss03@gmail.com</a>
          </p>
        </div>
      </div>
      
      <div className="text-center text-gray-400 text-sm">
        <p>This Terms of Service is a placeholder and will be updated with comprehensive legal information.</p>
        <p>We recommend consulting with a legal professional specializing in blockchain technology and digital services.</p>
      </div>
    </div>
  );
};

export default TermsOfServicePage;