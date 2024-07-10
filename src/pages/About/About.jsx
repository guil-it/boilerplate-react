import React from 'react';
import SEO from '../../components/SEO';

function About() {
  return (
    <>
    <SEO 
        title="About CLI guil"
        description="Learn about güil, a Latin American company builder and corporate venture capital focusing on mobility solutions."
        keywords="güil, mobility solutions, company builder, venture capital, Latin America"
      />
    <div className="w-full h-full flex items-center justify-center p-4 overflow-auto">
      <div className="max-w-4xl w-full">
        <img 
          src="https://res.cloudinary.com/dfgjenml4/image/upload/v1720642021/jggk0zwejnbmsmlcd33g.png" 
          alt="Logo" 
          className="h-8 md:h-10 mx-auto mb-4"
        />
        
        <div className="text-center space-y-3 md:space-y-4">
          <p className="text-xs md:text-sm font-poppins leading-relaxed">
            güil (www.guil.cl) is a Latin American company builder and corporate venture capital that creates and invests in extraordinary mobility solutions with social, environmental, and economic impact. Founded in Santiago, Chile in 2019, güil aims to solve humanity's greatest challenges through mobility innovation.
          </p>
          <p className="text-xs md:text-sm font-poppins leading-relaxed">
            We accelerate the transition towards efficient, accessible, inclusive, autonomous, and clean mobility across Latin America and other emerging regions. Join our ecosystem of entrepreneurs, investors, and innovators.
          </p>
          <p className="text-xs md:text-sm font-poppins leading-relaxed">
            Our name combines "will" and "wheel", embodying transformation, movement, and creativity in mobility.
          </p>
          <p className="text-sm md:text-base font-bold font-kanit mt-2 md:mt-4">
            "There is nothing impossible for those who güil try"
          </p>
        </div>
      </div>
    </div>
    </>
  );
}

export default About;