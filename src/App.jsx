import React from 'react';
import { DocumentTextIcon, CodeBracketIcon, RocketLaunchIcon } from '@heroicons/react/24/outline';

function App() {
  return (
    <div className="min-h-screen bg-gradient-radial from-[#02046c] via-[#01012e] to-[#020024] text-white flex flex-col items-center justify-center p-4 relative overflow-hidden">
      <div className="z-10 flex flex-col items-center w-full max-w-4xl">
        <img 
          src="https://res.cloudinary.com/dfgjenml4/image/upload/v1719332141/qjksfaro2bwdpjsm8fjx.png" 
          alt="Logo" 
          className="h-16 mb-8"
        />
        
        <p className="bg-gray-800/80 text-sm rounded-full px-4 py-2 mb-8 font-poppins">
          Get started by editing app/page.js
        </p>
        
        <h1 className="text-6xl font-bold mb-12 text-center font-kanit">
          CLI <span className="text-blue-400">guil</span>
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <h2 className="text-2xl font-semibold mb-2 font-poppins flex items-center justify-center">
              <DocumentTextIcon className="h-6 w-6 mr-2 text-blue-400" />
              Docs →
            </h2>
            <p className="text-gray-300 font-poppins">
              Find in-depth information about CLI guil features and API.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2 font-poppins flex items-center justify-center">
              <CodeBracketIcon className="h-6 w-6 mr-2 text-blue-400" />
              Templates →
            </h2>
            <p className="text-gray-300 font-poppins">
              Explore the CLI guil playground.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2 font-poppins flex items-center justify-center">
              <RocketLaunchIcon className="h-6 w-6 mr-2 text-blue-400" />
              Deploy →
            </h2>
            <p className="text-gray-300 font-poppins">
              Instantly deploy your CLI guil site to a shareable URL.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;