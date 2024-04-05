import Image from "next/image";
import React from "react";

interface GradientTextProps {
  children: React.ReactNode;
  gradient: string;
}

const GradientText: React.FC<GradientTextProps> = ({ children, gradient }) => {
  return (
    <span className={`bg-clip-text text-transparent bg-gradient-to-r ${gradient}`}>
      {children}
    </span>
  );
};

const AboutComponent = () => {
  return (
    <div className="py-32" style={{ transform: "skewY(0deg)", background: "linear-gradient(to bottom, black, #24A2B2)" }}>
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 p-4 pt-8 md:order-2">
          <Image
            src="/team.png"
            alt="About Us"
            width={800}
            height={500}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2 p-16 rounded-lg z-4 text-blue md:order-1">
          <div className="relative">
            <div className="relative w-auto h-auto bg-gradient-to-r from-indigo-500 to-purple-700 rounded-lg shadow-lg mt-8 transform rotate-y-3">
              <h2 className="text-4xl font-bold mb-2 text-white font-mono text-bold p-4 text-center justify-center">
                About BosonQ Psi
              </h2>
            </div>
          </div>
          <p className="text-3xl text-bold text-white font-extra-large font-highlight font-serif mt-8">
            We are on a{" "}
            <GradientText gradient="from-blue-400 to-indigo-600">
              mission
            </GradientText>{" "}
            to make engineering simulations smarter, faster, and efficient to drive
            sustainable innovations.
          </p>
          <br />
          <p className="text-2xl text-white font-serif mt-4">
            <GradientText gradient="from-purple-600 to-blue-600">At BQP, we&apos;re leading the charge in advanced simulation platforms with
            one mission: to revolutionize computational problem-solving.</GradientText>
            <br />{" "}
            <br />
            <GradientText gradient="from-blue-600 to-green-600">Our cutting-edge technology delivers faster and more affordable
            solutions, </GradientText>
            <GradientText gradient="from-green-600 to-yellow-400">slashing months off development cycles and saving millions.
            Integrated with quantum algorithms,</GradientText>
            <br /> <br />
            <GradientText gradient="from-yellow-400 to-red-600">
              our platform operates on today&apos;s HPC frameworks and future quantum
              computers, offering superior solutions. Our platform offers
              unprecedented possibilities with engineering simulations,
              particularly in the aerospace, manufacturing, and energy sectors.
            </GradientText>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;