
import React from 'react';
import { CERTIFICATIONS } from '../constants';

const Certifications: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Certifications</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {CERTIFICATIONS.map((cert, index) => (
            <div key={index} className="flex items-center p-6 bg-slate-50 rounded-xl border border-slate-100">
              <svg className="w-8 h-8 text-blue-500 mr-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-slate-700 font-medium">{cert}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
