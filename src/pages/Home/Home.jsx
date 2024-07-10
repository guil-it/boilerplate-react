import React from 'react';
import { DocumentTextIcon, CodeBracketIcon, RocketLaunchIcon } from '@heroicons/react/24/outline';

function Home() {
  return (
    <div className="w-full h-full flex items-center justify-center p-4 overflow-auto">
      <div className="max-w-4xl w-full">
        <img 
          src="https://res.cloudinary.com/dfgjenml4/image/upload/v1720642021/jggk0zwejnbmsmlcd33g.png" 
          alt="Logo" 
          className="h-12 md:h-16 mx-auto mb-4 md:mb-8"
        />
        
        <p className="bg-gray-800/80 text-xs md:text-sm rounded-full px-4 py-2 mb-4 md:mb-8 font-poppins text-center mx-auto max-w-max">
          Get started by editing app/page.js
        </p>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-8 md:mb-12 text-center font-kanit">
          CLI <span className="text-blue-400">guil</span>
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 text-center">
          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-2 font-poppins flex items-center justify-center">
              <DocumentTextIcon className="h-5 w-5 md:h-6 md:w-6 mr-2 text-blue-400" />
              Docs →
            </h2>
            <p className="text-sm md:text-base text-gray-300 font-poppins">
              Find in-depth information about CLI guil features and API.
            </p>
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-2 font-poppins flex items-center justify-center">
              <CodeBracketIcon className="h-5 w-5 md:h-6 md:w-6 mr-2 text-blue-400" />
              Templates →
            </h2>
            <p className="text-sm md:text-base text-gray-300 font-poppins">
              Explore the CLI guil playground.
            </p>
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-2 font-poppins flex items-center justify-center">
              <RocketLaunchIcon className="h-5 w-5 md:h-6 md:w-6 mr-2 text-blue-400" />
              Deploy →
            </h2>
            <p className="text-sm md:text-base text-gray-300 font-poppins">
              Instantly deploy your CLI guil site to a shareable URL.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;