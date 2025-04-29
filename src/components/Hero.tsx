import React from 'react';
import { Play } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 to-black text-white py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/30 z-10"></div>
      <div className="container mx-auto z-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
            Sasangka Lambang Kurniawan
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl mb-8 text-pink-400 font-medium">
            Video Editor
          </h2>
          <p className="text-lg md:text-xl mb-10 text-gray-200 max-w-2xl mx-auto">
            Transforming raw footage into compelling visual stories that captivate and inspire audiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#projects" 
              className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-4 rounded-full font-medium flex items-center justify-center gap-2 transform transition-all hover:scale-105"
            >
              <Play size={20} />
              View My Work
            </a>
            <a 
              href="#contact" 
              className="bg-transparent border-2 border-white hover:border-pink-400 hover:text-pink-400 text-white px-8 py-4 rounded-full font-medium transform transition-all hover:scale-105"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
      
      {/* Background Animation */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-pink-600 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-32 -right-16 w-96 h-96 bg-purple-600 rounded-full filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: "1s" }}></div>
      </div>
    </section>
  );
};

export default Hero;