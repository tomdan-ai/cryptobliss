import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Send, MapPin, ExternalLink, Loader2 } from 'lucide-react'; // Added Loader2
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const ContactPage: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'submitting' | 'error'>('idle'); // State for submission status
  const navigate = useNavigate(); // Hook for navigation

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  // Handle form submission with AJAX
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default HTML form submission
    setSubmissionStatus('submitting');

    try {
      const response = await fetch("https://formspree.io/f/mzzrdjab", {
        method: 'POST',
        headers: {
          'Accept': 'application/json'
        },
        body: JSON.stringify(formState)
      });

      if (response.ok) {
        // Submission successful, navigate to thank you page
        setFormState({ name: '', email: '', message: '' }); // Clear form
        navigate('/thank-you'); // Redirect
      } else {
        // Handle server errors from Formspree
        setSubmissionStatus('error');
        console.error("Form submission failed:", await response.json());
      }
    } catch (error) {
      // Handle network errors
      setSubmissionStatus('error');
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      {/* ... existing hero section ... */}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/10 backdrop-blur-lg rounded-xl p-8"
        >
          <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
          {/* Remove action and method, add onSubmit */}
          <form 
            onSubmit={handleSubmit} 
            className="space-y-6"
          >
            {/* ... existing name input ... */}
             <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-300">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                required
                disabled={submissionStatus === 'submitting'} // Disable during submission
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-700 focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400 text-white disabled:opacity-50"
                placeholder="Enter your name"
              />
            </div>
            
            {/* ... existing email input ... */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-300">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                required
                disabled={submissionStatus === 'submitting'} // Disable during submission
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-700 focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400 text-white disabled:opacity-50"
                placeholder="Enter your email"
              />
            </div>
            
            {/* ... existing message textarea ... */}
             <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-300">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                required
                rows={5}
                disabled={submissionStatus === 'submitting'} // Disable during submission
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-700 focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400 text-white disabled:opacity-50"
                placeholder="How can we help you?"
              />
            </div>
            
            {/* Display error message if submission fails */}
            {submissionStatus === 'error' && (
              <p className="text-red-400 text-sm text-center">
                Sorry, there was an error sending your message. Please try again later or contact us directly.
              </p>
            )}

            <motion.button
              whileHover={submissionStatus !== 'submitting' ? { scale: 1.05 } : {}}
              whileTap={submissionStatus !== 'submitting' ? { scale: 0.95 } : {}}
              type="submit"
              disabled={submissionStatus === 'submitting'} // Disable button during submission
              className={`w-full bg-gradient-to-r from-cryptobliss-primary to-cryptobliss-secondary hover:from-cryptobliss-primary/80 hover:to-cryptobliss-secondary/80 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed`}
            >
              {submissionStatus === 'submitting' ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Send Message 
                  <Send className="w-5 h-5 ml-2" />
                </>
              )}
            </motion.button>
          </form>
        </motion.div>

        {/* ... existing contact info section ... */}
         <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col justify-between"
        >
          {/* ... existing contact details ... */}
           <div>
            <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
            <div className="space-y-8">
              {/* ... Email ... */}
              <div className="flex items-start">
                <div className="bg-blue-500/20 rounded-full w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Email Us</h3>
                  <a href="mailto:cryptobliss03@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                    cryptobliss03@gmail.com
                  </a>
                  <p className="text-gray-400 mt-1 text-sm">
                    Get a response within 24-48 hours
                  </p>
                </div>
              </div>

              {/* ... WhatsApp ... */}
              <div className="flex items-start">
                <div className="bg-green-500/20 rounded-full w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                  <MessageSquare className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">WhatsApp Community</h3>
                  <a 
                    href="https://chat.whatsapp.com/JD1OpDksrGT7iDtKuDeP6b" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-green-400 transition-colors flex items-center"
                  >
                    Join our community
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                  <p className="text-gray-400 mt-1 text-sm">
                    Connect with like-minded enthusiasts
                  </p>
                </div>
              </div>

              {/* ... Twitter ... */}
              <div className="flex items-start">
                <div className="bg-blue-500/20 rounded-full w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-white">
                    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Follow on Twitter</h3>
                  <a 
                    href="https://x.com/CRYPTOBLISS_01"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors flex items-center"
                  >
                    @thecryptoblist
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                  <p className="text-gray-400 mt-1 text-sm">
                    Stay updated with our latest news
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ... Focus Region ... */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 bg-white/5 backdrop-blur-lg rounded-xl p-6"
          >
            <div className="flex items-center mb-4">
              <MapPin className="w-6 h-6 text-white mr-2" />
              <h3 className="text-lg font-semibold">Our Focus Region</h3>
            </div>
            <p className="text-gray-300">
              While we have a global community, CRYPTOBLISS is primarily focused on empowering the web3 ecosystem 
              across Africa - driving innovation and adoption throughout the continent.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* ... existing FAQ section ... */}
       <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 md:p-12 mb-20"
      >
        {/* ... FAQ content ... */}
         <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* ... FAQ items ... */}
           <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3">How can I join CRYPTOBLISS?</h3>
            <p className="text-gray-300">
              You can join our community by clicking on the WhatsApp link above or following us on Twitter. 
              All our resources are open to community members.
            </p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3">Is CRYPTOBLISS only for experts?</h3>
            <p className="text-gray-300">
              Not at all! We welcome everyone from beginners to experts. Our community is designed to 
              help individuals at all stages of their web3 journey.
            </p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3">How can I contribute to CRYPTOBLISS?</h3>
            <p className="text-gray-300">
              We welcome contributions from content creators, educators, developers, and enthusiasts. 
              Reach out via email or through our community channels.
            </p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3">Are there job opportunities through CRYPTOBLISS?</h3>
            <p className="text-gray-300">
              Yes! We regularly share web3 job opportunities with our community members and help connect 
              talent with companies in the ecosystem.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactPage;