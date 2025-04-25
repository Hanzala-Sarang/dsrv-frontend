import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppChat = () => {
  const phoneNumber = '919836729903'; // Replace with your business number (in international format)
  const initialMessage = 'Hello! I would like to know more about your products.'; 

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(initialMessage)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-all duration-300"
    >
      <FaWhatsapp className="text-4xl sm:text-4xl md:text-4xl" />
    </a>
  );
};

export default WhatsAppChat;
