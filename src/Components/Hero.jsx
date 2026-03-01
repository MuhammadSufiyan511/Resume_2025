import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);

    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%,
            rgba(99, 102, 241, 0.1) 0%,
            transparent 50%),
          linear-gradient(135deg,
            #0f0f23 0%,
            #1a1a2e 25%,
            #16213e 50%,
            #0f0f23 100%)
        `,
      }}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '0s', animationDuration: '4s' }}
        ></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '2s', animationDuration: '6s' }}
        ></div>

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
      </div>

      <div className={`relative z-10 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="inline-flex items-center px-6 py-2 mb-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-cyan-300 text-sm font-medium">
          <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
Currently learning Typescript and Next.js to enhance my skills!
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
          <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent drop-shadow-2xl">
            Muhammad
          </span>
          <br />
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-pulse">
            Sufiyan
          </span>
        </h1>

        <div className="mb-8 h-16 flex items-center justify-center">
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl px-4 font-light">
            <span className="text-cyan-400 font-semibold">Computer Science Graduate</span>
            <span className="mx-4 text-gray-500">|</span>
            <span className="text-purple-400 font-semibold">MERN Stack Developer</span>
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 items-center justify-center">
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-white font-semibold text-lg shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105 cursor-pointer"
          >
            <span className="relative z-10">Get In Touch</span>
          </Link>

          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="group inline-flex items-center px-8 py-4 bg-white/5 backdrop-blur-md border border-white/20 rounded-full text-white font-semibold text-lg hover:bg-white/10 transition-all duration-300 hover:scale-105 cursor-pointer"
          >
            View My Work
          </Link>
        </div>

        <div className="mt-16 flex flex-wrap justify-center items-center gap-6 opacity-60">
          {['React', 'Node.js', 'MongoDB', 'Express', 'TypeScript', 'Next.js'].map((tech) => (
            <div
              key={tech}
              className="px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-gray-300 text-sm hover:bg-white/10 transition-all duration-300 hover:scale-110"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
