import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import WorkshopPopup from './WorkshopPopup'; 
import { useWorkshopPopup } from '../hooks/useWorkshopPopup';

const Layout: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { showPopup, closePopup } = useWorkshopPopup();

  return (
    <div className="min-h-screen text-white relative">
      {/* Animated background elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute w-[500px] h-[500px] bg-cryptobliss-primary/30 rounded-full blur-3xl -top-48 -left-24 animate-pulse" />
        <div className="absolute w-[400px] h-[400px] bg-cryptobliss-secondary/30 rounded-full blur-3xl top-1/2 right-0 animate-pulse delay-1000" />
      </div>

      {/* Workshop Popup */}
      {showPopup && <WorkshopPopup onClose={closePopup} />}

      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-cryptobliss-dark/80 backdrop-blur-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-5">
            <Link to="/" className="flex items-center space-x-2">
              <img src="/wlogo.png" alt="CRYPTOBLISS" className="h-14 w-auto" />
              <span className="text-2xl font-bold bg-gradient-to-r from-cryptobliss-primary to-cryptobliss-secondary text-white bg-clip-text">
                CRYPTOBLISS
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-white hover:text-cryptobliss-primary transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-white hover:text-cryptobliss-primary transition-colors">
                About
              </Link>
              <Link to="/features" className="text-white hover:text-cryptobliss-primary transition-colors">
                Features
              </Link>
              <Link to="/community" className="text-white hover:text-cryptobliss-primary transition-colors">
                Community
              </Link>
              <Link to="/contact" className="text-white hover:text-cryptobliss-primary transition-colors">
                Contact
              </Link>
            </nav>

            {/* Mobile menu button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6 text-cryptobliss-primary" /> : <Menu className="h-6 w-6 text-cryptobliss-primary" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-cryptobliss-dark/90 backdrop-blur-lg"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-white hover:text-cryptobliss-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="text-white hover:text-cryptobliss-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/features" 
                className="text-white hover:text-cryptobliss-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </Link>
              <Link 
                to="/community" 
                className="text-white hover:text-cryptobliss-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Community
              </Link>
              <Link 
                to="/contact" 
                className="text-white hover:text-cryptobliss-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </motion.div>
        )}
      </header>

      {/* Main content */}
      <main className="pt-24 relative z-10">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-cryptobliss-dark/80 backdrop-blur-md py-10 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img src="/wlogo.png" alt="CRYPTOBLISS" className="h-12 w-auto" />
                <span className="text-xl font-bold bg-gradient-to-r from-cryptobliss-primary to-cryptobliss-secondary text-white bg-clip-text">
                  CRYPTOBLISS
                </span>
              </div>
              <p className="text-gray-300 text-sm">
                Your gateway to the decentralized economy.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4 text-white">Connect</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>
                  <a href="https://chat.whatsapp.com/JD1OpDksrGT7iDtKuDeP6b" className="hover:text-cryptobliss-primary transition-colors">
                    WhatsApp Community
                  </a>
                </li>
                <li>
                  <a href="https://x.com/CRYPTOBLISS_01" className="hover:text-cryptobliss-primary transition-colors">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="mailto:cryptobliss03@gmail.com" className="hover:text-cryptobliss-primary transition-colors">
                    Email Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4 text-white">Resources</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>
                  <Link to="/features" className="hover:text-cryptobliss-primary transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link to="/community" className="hover:text-cryptobliss-primary transition-colors">
                    Community
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-cryptobliss-primary transition-colors">
                    About Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4 text-white">Legal</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>
                  <Link to="/privacy-policy" className="hover:text-cryptobliss-primary transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms-of-service" className="hover:text-cryptobliss-primary transition-colors">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} CRYPTOBLISS. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;