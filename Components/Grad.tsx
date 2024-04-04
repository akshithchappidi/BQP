import React, { useEffect, useRef } from 'react';

const GradientText: React.FC = () => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (textRef.current) {
        const scrollPosition = window.pageYOffset;
        const maxScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercentage = (scrollPosition / maxScroll) * 100;

        if (scrollPercentage < 50) {
          const gradientStart = `hsl(0, 0%, ${100 - scrollPercentage * 2}%)`;
          const gradientEnd = `hsl(300, 100%, ${scrollPercentage * 2}%)`;
          textRef.current.style.background = `linear-gradient(to right, ${gradientStart}, ${gradientEnd})`;
        } else {
          const gradientStart = `hsl(300, 100%, ${(scrollPercentage - 50) * 2}%)`;
          const gradientEnd = `hsl(0, 0%, ${100 - (scrollPercentage - 50) * 2}%)`;
          textRef.current.style.background = `linear-gradient(to right, ${gradientStart}, ${gradientEnd})`;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="container mx-auto py-12 flex flex-col md:flex-row items-center">
      <div className="mb-8 md:mb-0 md:mr-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-400">Our Innovative Solutions</h2>
        <div ref={textRef} className="text-lg bg-clip-text text-transparent text-emerald-400">
          BQPhy - The World's First Cloud-Based Simulation Platform That Empowers Engineers to Explore unexplored
          Simulations at Lightning Speed,<br></br> Resulting in Faster Innovation and Cost-Effective Solutions.
        </div>
      </div>
      <button className="bg-white text-black px-6 py-3 rounded-md hover:bg-gray-700 transition-colors duration-300">
        Learn More
      </button>
    </div>
  );
};

export default GradientText;