import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Bitcoin, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Layout: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 text-white">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-[500px] h-[500px] bg-blue-500/30 rounded-full blur-3xl -top-48 -left-24 animate-pulse" />
        <div className="absolute w-[400px] h-[400px] bg-purple-500/30 rounded-full blur-3xl top-1/2 right-0 animate-pulse delay-1000" />
      </div>

      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-5">
            <Link to="/" className="flex items-center space-x-2">
              <Bitcoin className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                CRYPTOBLISS
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-white hover:text-blue-400 transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-white hover:text-blue-400 transition-colors">
                About
              </Link>
              <Link to="/features" className="text-white hover:text-blue-400 transition-colors">
                Features
              </Link>
              <Link to="/community" className="text-white hover:text-blue-400 transition-colors">
                Community
              </Link>
              <Link to="/contact" className="text-white hover:text-blue-400 transition-colors">
                Contact
              </Link>
            </nav>

            {/* Mobile menu button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-gray-900/90 backdrop-blur-lg"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-white hover:text-blue-400 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="text-white hover:text-blue-400 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/features" 
                className="text-white hover:text-blue-400 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </Link>
              <Link 
                to="/community" 
                className="text-white hover:text-blue-400 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Community
              </Link>
              <Link 
                to="/contact" 
                className="text-white hover:text-blue-400 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </motion.div>
        )}
      </header>

      {/* Main content */}
      <main className="pt-24">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-black/30 backdrop-blur-md py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Bitcoin className="h-6 w-6 text-blue-400" />
                <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                  CRYPTOBLISS
                </span>
              </div>
              <p className="text-gray-300 text-sm">
                Your gateway to the decentralized economy.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>
                  <a href="https://chat.whatsapp.com/JD1OpDksrGT7iDtKuDeP6b" className="hover:text-blue-400 transition-colors">
                    WhatsApp Community
                  </a>
                </li>
                <li>
                  <a href="https://x.com/thecryptoblist" className="hover:text-blue-400 transition-colors">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="mailto:cryptobliss03@gmail.com" className="hover:text-blue-400 transition-colors">
                    Email Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>
                  <Link to="/features" className="hover:text-blue-400 transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link to="/community" className="hover:text-blue-400 transition-colors">
                    Community
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-blue-400 transition-colors">
                    About Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Terms of Service
                  </a>
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