
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <p className="text-blue-600 font-semibold tracking-wide uppercase">Hello, I'm</p>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-tight">
            Akil Louisa S
          </h1>
          <p className="text-xl text-slate-600 max-w-lg">
            An aspiring <span className="text-blue-600 font-bold">Web Developer</span> currently pursuing MCA. 
            Passionate about building clean, modern, and user-centric web applications.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <a 
              href="#projects" 
              className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all hover:-translate-y-1"
            >
              View Projects
            </a>
            <a 
              href="#" 
              className="px-8 py-3 border-2 border-slate-200 text-slate-700 rounded-lg font-medium hover:bg-slate-50 transition-all hover:-translate-y-1"
            >
              Download Resume
            </a>
          </div>
        </div>
        <div className="hidden md:flex justify-end">
          <div className="w-80 h-80 bg-blue-100 rounded-full relative overflow-hidden ring-8 ring-blue-50">
             <img 
               src="https://sjctni.edu/images/SPhotos/25/25pca120.jpg" 
               alt="Akil Louisa S"
               className="object-cover w-full h-full opacity-80"
             />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
