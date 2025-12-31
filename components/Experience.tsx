
import React from 'react';
import { EXPERIENCE } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-slate-100/50">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Experience</h2>
          <p className="text-slate-500">Internships and professional exposure.</p>
        </div>
        <div className="space-y-8">
          {EXPERIENCE.map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">{item.role}</h3>
                  <p className="text-blue-600">{item.company}</p>
                </div>
                <span className="text-sm text-slate-500 bg-slate-100 px-3 py-1 rounded-full">{item.period}</span>
              </div>
              <p className="text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
