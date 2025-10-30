
import React from 'react';

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 sm:py-32 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Get In Touch
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-slate-400 mb-12">
          I'm currently open to new opportunities and collaborations. Feel free to reach out if you have a project in mind or just want to connect.
        </p>
        <div className="flex justify-center items-center space-x-8 mb-8">
          <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300">
            <GithubIcon />
          </a>
          <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300">
            <LinkedinIcon />
          </a>
          <a href="mailto:email@example.com" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300">
            <MailIcon />
          </a>
        </div>
        <a 
          href="mailto:email@example.com"
          className="font-mono text-lg text-slate-300 hover:text-cyan-400 transition-colors duration-300"
        >
          developer@email.com
        </a>
      </div>
    </section>
  );
};

export default Contact;
