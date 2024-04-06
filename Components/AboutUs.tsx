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
            <h2 className="text-4xl font-bold mb-2 text-white font-mono text-bold p-4 text-left justify-center">
              About <GradientText gradient="from-yellow-400 to-white">BosonQ Psi</GradientText>
            </h2>
          </div>
          <p className="text-3xl text-bold text-white font-extra-large font-highlight font-serif mt-8">
            We are on a{" "}
            <GradientText gradient="from-yellow-400 to-white">
              mission
            </GradientText>{" "}
            to make engineering simulations smarter, faster, and efficient to drive
            sustainable innovations.
          </p>
          <br />
          <p className="text-2xl text-white font-serif mt-4">
            <GradientText gradient="from-yellow-400 to-white">At BQP,</GradientText> we're leading the charge in advanced simulation platforms with
            one mission: to revolutionize computational problem-solving.
            <br />{" "}
            <br />
            Our cutting-edge technology delivers faster and more affordable
            solutions, slashing months off development cycles and saving millions.
            Integrated with quantum algorithms,
            <br /> <br />
            our platform operates on today's HPC frameworks and future quantum
            computers, offering superior solutions. Our platform offers
            unprecedented possibilities with engineering simulations,
            particularly in the aerospace, manufacturing, and energy sectors.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;