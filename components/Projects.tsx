
import React from 'react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Featured Projects</h2>
          <p className="text-slate-500">A selection of my recent academic and personal work.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {PROJECTS.map((project) => (
            <div key={project.title} className="group overflow-hidden rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all">
              <div className="aspect-video bg-slate-200 relative overflow-hidden">
                <img 
                   src={`https://picsum.photos/seed/${project.title}/600/400`} 
                   alt={project.title}
                   className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{project.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full uppercase tracking-wider"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
