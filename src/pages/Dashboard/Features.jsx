import React from 'react';
import SEO from '../../components/SEO';

function Features() {
  return (
    <>
    <SEO 
        title="CLI guil Features"
        description="Explore the upcoming features of CLI guil, designed to enhance your development workflow."
        keywords="CLI guil, features, development tools, workflow enhancement"
      />
    <div className="w-full h-full flex items-center justify-center p-4 overflow-auto">
      <div className="max-w-4xl w-full text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 md:mb-8 font-kanit">Features</h1>
        <p className="text-xl md:text-2xl font-poppins mb-2 md:mb-4">
          Coming Soon
        </p>
        <p className="text-sm md:text-base font-poppins">
          We're working on exciting new features. Stay tuned!
        </p>
      </div>
    </div>
    </>
  );
}

export default Features;