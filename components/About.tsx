
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 underline decoration-blue-500 underline-offset-8">About Me</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto"></div>
        </div>
        <div className="text-lg text-slate-600 space-y-6 leading-relaxed">
          <p>
            Hi there! I'm Akil Louisa S, a Master of Computer Applications student with a deep interest in software development and design. I love the challenge of turning complex problems into simple, beautiful, and intuitive web solutions.
          </p>
          <p>
            My journey into web development started during my undergraduate years where I discovered my passion for creating digital experiences. Currently, I am focused on mastering modern frontend and backend technologies to build scalable and efficient applications.
          </p>
          <p>
            I am always eager to learn new things, collaborate with others, and contribute to meaningful projects. When I'm not coding, you'll likely find me exploring new tech trends or improving my design skills.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
