
import React from 'react';
import { EDUCATION } from '../constants';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-24">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Education</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto"></div>
        </div>
        <div className="space-y-12">
          {EDUCATION.map((item, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-6 relative">
              <div className="md:w-1/4">
                <span className="text-blue-600 font-bold">{item.period}</span>
              </div>
              <div className="md:w-3/4 pb-12 border-l-2 border-slate-200 pl-8 relative">
                <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-[9px] top-1"></div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">{item.degree}</h3>
                <p className="text-blue-700 font-medium mb-3">{item.institution}</p>
                <p className="text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
