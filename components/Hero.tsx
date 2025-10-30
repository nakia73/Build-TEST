
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center text-center bg-slate-900 overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{backgroundImage: `url('https://picsum.photos/1920/1080?grayscale&blur=2')`}}></div>
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/80 to-slate-900"></div>
      
      <div className="relative z-10 p-8 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-4">
          <span className="block">Hello, I'm a Developer</span>
          <span className="block text-cyan-400">Building Digital Experiences</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
          I specialize in creating modern, responsive, and user-friendly web applications. Let's build something amazing together.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <a
            href="#projects"
            className="inline-block bg-cyan-500 text-white font-bold py-3 px-8 rounded-full hover:bg-cyan-600 transition-transform transform hover:scale-105 duration-300"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="inline-block bg-slate-700 text-white font-bold py-3 px-8 rounded-full hover:bg-slate-600 transition-transform transform hover:scale-105 duration-300"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
