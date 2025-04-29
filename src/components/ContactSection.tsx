import React from 'react';
import ContactForm from './ContactForm';
import { Mail, Phone, MapPin, Instagram, Youtube, Twitter } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Get In Touch</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Contact Information */}
          <div>
            <div className="mb-10">
              <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-pink-100 dark:bg-pink-900/20 p-2 rounded-full text-pink-600 dark:text-pink-400">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">Email</h4>
                    <a href="mailto:lambangsasangka0gmail.com" className="text-gray-600 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors">
                    lambangsasangka0gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-pink-100 dark:bg-pink-900/20 p-2 rounded-full text-pink-600 dark:text-pink-400">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">Phone</h4>
                    <a href="tel:+1234567890" className="text-gray-600 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors">
                      +6285642268279
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-pink-100 dark:bg-pink-900/20 p-2 rounded-full text-pink-600 dark:text-pink-400">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">Location</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Bekasi, Indonesia
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Social Media */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">Follow Me</h3>
              <div className="flex gap-4">
                <a 
                  href="https://instagram.com/sasangkaart10" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-pink-100 dark:bg-pink-900/20 p-3 rounded-full text-pink-600 dark:text-pink-400 hover:bg-pink-200 dark:hover:bg-pink-900/40 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={24} />
                </a>
                <a 
                  href="https://youtube.com/@pawangcara" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-pink-100 dark:bg-pink-900/20 p-3 rounded-full text-pink-600 dark:text-pink-400 hover:bg-pink-200 dark:hover:bg-pink-900/40 transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube size={24} />
                </a>
              
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;