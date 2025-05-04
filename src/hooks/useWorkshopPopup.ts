import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useWorkshopPopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    // Don't show on workshop or thank-you pages
    if (location.pathname === '/workshop' || location.pathname === '/thank-you') {
      return;
    }
    
    // Check if user has dismissed the popup recently
    const lastDismissed = localStorage.getItem('workshop_popup_dismissed');
    const lastDismissedTime = lastDismissed ? parseInt(lastDismissed) : 0;
    
    // Show popup if it hasn't been dismissed in the last 30 minutes
    // Changed from 3 hours (3 * 60 * 60 * 1000) to 30 minutes (30 * 60 * 1000)
    const shouldShowPopup = !lastDismissed || (Date.now() - lastDismissedTime > 30 * 60 * 1000);
    
    if (shouldShowPopup) {
      // Show immediately on page load/reload instead of with delay and random chance
      setShowPopup(true);
    }
  }, [location.pathname]);
  
  const closePopup = () => {
    setShowPopup(false);
    // Remember that user closed the popup
    localStorage.setItem('workshop_popup_dismissed', Date.now().toString());
  };
  
  return { showPopup, closePopup };
};