
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-32 bg-slate-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-12">
          About Me
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto">
          <div className="w-48 h-48 md:w-64 md:h-64 flex-shrink-0">
            <img 
              src="https://picsum.photos/300/300?random=1" 
              alt="Profile"
              className="rounded-full object-cover w-full h-full shadow-lg border-4 border-cyan-500/50"
            />
          </div>
          <div className="text-center md:text-left">
            <p className="text-lg text-slate-300 mb-4">
              I am a passionate frontend developer with a knack for creating beautiful and performant web applications. My journey in web development started with a simple "Hello, World!" and has since grown into a full-fledged passion for building intuitive and dynamic user interfaces.
            </p>
            <p className="text-lg text-slate-300">
              With a strong foundation in React and TypeScript, I am dedicated to writing clean, maintainable, and scalable code. I thrive in collaborative environments and am always eager to learn new technologies and improve my skills.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
