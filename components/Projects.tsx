import React from 'react';
import type { Project } from '../types';

const projectsData: Project[] = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce site with product listings, a shopping cart, and a checkout process. Built with React and Tailwind CSS.',
    imageUrl: 'https://picsum.photos/seed/project1/600/400',
    repoUrl: '#',
    liveUrl: '#',
    tags: ['React', 'TypeScript', 'Tailwind CSS']
  },
  {
    id: 2,
    title: 'Data Visualization Dashboard',
    description: 'An interactive dashboard for visualizing complex data sets, featuring various charts and filtering options. Powered by D3.js.',
    imageUrl: 'https://picsum.photos/seed/project2/600/400',
    repoUrl: '#',
    tags: ['React', 'D3.js', 'API Integration']
  },
  {
    id: 3,
    title: 'Personal Blog',
    description: 'A clean and minimal personal blog platform with a content management system for creating and publishing articles.',
    imageUrl: 'https://picsum.photos/seed/project3/600/400',
    repoUrl: '#',
    liveUrl: '#',
    tags: ['Next.js', 'Markdown', 'UI/UX Design']
  },
   {
    id: 4,
    title: 'Project Management Tool',
    description: 'A Kanban-style project management tool with drag-and-drop functionality for managing tasks and workflows.',
    imageUrl: 'https://picsum.photos/seed/project4/600/400',
    repoUrl: '#',
    tags: ['React', 'Firebase', 'Real-time']
  },
  {
    id: 5,
    title: 'Plarail Train Showcase',
    description: 'A video showcasing a custom-built Plarail train course, demonstrating the train running through an intricate layout.',
    videoUrl: 'https://storage.googleapis.com/generative-ai-pro-is-cool-for-ever/video-1721207601955.mp4',
    repoUrl: '#',
    tags: ['Hobby Project', 'Video', 'Layout Design']
  },
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
    <div className="bg-slate-800 rounded-lg overflow-hidden shadow-xl hover:shadow-cyan-500/20 transition-all duration-300 transform hover:-translate-y-2 group">
        <div className="relative h-48 overflow-hidden bg-slate-700">
            {project.videoUrl ? (
                <video src={project.videoUrl} controls className="w-full h-full object-cover" />
            ) : (
                <>
                    <img src={project.imageUrl!} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
                </>
            )}
        </div>
        <div className="p-6">
            <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
            <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-semibold bg-cyan-900/50 text-cyan-300 px-2 py-1 rounded-full">{tag}</span>
                ))}
            </div>
            <p className="text-slate-400 mb-6 flex-grow">{project.description}</p>
            <div className="flex justify-end space-x-4">
                {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300">Live Demo</a>}
                <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300">GitHub</a>
            </div>
        </div>
    </div>
);


const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 sm:py-32 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-16">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projectsData.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;