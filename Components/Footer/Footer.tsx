import dynamic from 'next/dynamic';
import React, { useState, useEffect } from "react";

// const MapWithNoSSR = dynamic(() => import("./FooterComponents/Map"), {
//   ssr: false,
// });

interface FooterProps {
  bools?: boolean;
}

type QuickLinkProps = {
  href: string;
  text: string;
};

const QuickLink: React.FC<QuickLinkProps> = ({ href, text }) => (
  <a
    className="my-3 text-left lg:text-left text-white hover:text-teal-600 hover:underline transform transition duration-500 ease-in-out hover:scale-105"
    href={href}
  >
    {text} <span className="text-white-800 text-xs p-1 text-left"></span>
  </a>
);

type ContactLinkProps = {
  href: string;
  enquiryType: string;
  email: string;
};

const ContactLink: React.FC<ContactLinkProps> = ({ href, enquiryType, email }) => (
  <a className="my-3 block text-left lg:text-left text-white hover:text-teal-600 hover:underline transform transition duration-500 ease-in-out hover:scale-105" href={href}>
    <div>{enquiryType}</div>
    <div className={`text-white-500 text-md transition hover:opacity-75 text-left lg:text-left`}>
      {email}
    </div>
  </a>
);

function Footer({ bools }: FooterProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const themeStyles = bools
    ? {
        padding: "3px",
        color: "#fff",
        height: "auto",
      }
    : { color: "#333" };

  return (
    <div className="flex flex-col bg-black">
      {isMobile ? (
        <div className="flex lg:hidden flex-col items-center justify-center shadow-lg rounded space-y-4 px-4" style={themeStyles}>
          <div className="w-full pr-8 flex flex-col items-center relative h-auto justify-center">
            {/* <MapWithNoSSR /> */}
          </div>
          <div className="flex flex-row md:flex-col space-y-4 md:space-y-0 items-center md:space-x-4 justify-between w-full">
            <div className="flex flex-row w-full items-start justify-between px-2 md:px-8">
              <div className="w-full sm:w-1/2 flex flex-col items-start justify-left px-2 sm:px-0 md:pr-16">
                <div className="text-md text-left uppercase text-teal-500 font-bold">
                  Contact
                </div>
                <ContactLink href="mailto:info@bosonqpsi.com" enquiryType="General Enquiry" email="info@bosonqpsi.com" />
                <ContactLink href="mailto:careers@bosonqpsi.com" enquiryType="Career Enquiry" email="careers@bosonqpsi.com" />
                <ContactLink href="mailto:leadership@bosonqpsi.com" enquiryType="Investment Enquiry" email="leadership@bosonqpsi.com" />
              </div>
              <div className="flex flex-col justify-end">
                <div className="inline-block p-2 flex flex-col sm:w-auto md:whitespace-nowrap sm:whitespace-normal">
                  <div className="text-md uppercase text-teal-500 font-bold">
                    Quick Links
                  </div>
                  <QuickLink href="https://www.bosonqpsi.com/bqphy" text="BQPhy" />
                  <QuickLink href="https://www.bosonqpsi.com/design-optimization" text="Design Optimisation" />
                  <QuickLink href="https://www.bosonqpsi.com/structural-mechanics" text="Structural Mechanics" />
                  <QuickLink href="/#" text="Thermal Analysis" />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="pl-14">
          <div className="mt-8 hidden lg:flex flex-row items-start justify-start shadow-lg rounded space-x-4" style={themeStyles}>
            <div className="w-1/4 text-center pr-10">
              <div className="text-md text-left pl-8 uppercase text-teal-500 font-bold">
                Contact
              </div>
              <div className="pl-8 text-left">
                <ContactLink href="mailto:info@bosonqpsi.com" enquiryType="General Enquiry" email="info@bosonqpsi.com" />
                <ContactLink href="mailto:careers@bosonqpsi.com" enquiryType="Career Enquiry" email="careers@bosonqpsi.com" />
                <ContactLink href="mailto:leadership@bosonqpsi.com" enquiryType="Investment Enquiry" email="leadership@bosonqpsi.com" />
              </div>
            </div>
            <div className="w-1/2 pr-8 flex flex-col items-center relative h-60 justify-center mb-4 lg:mb-8">
              {/* <MapWithNoSSR /> */}
            </div>
            <div className="w-1/3 pl-5 pr-10 flex flex-col items-start justify-start">
              <div className="text-md uppercase text-teal-500 font-bold">
                Quick Links
              </div>
              <QuickLink href="https://www.bosonqpsi.com/bqphy" text="BQPhy" />
              <QuickLink href="https://www.bosonqpsi.com/design-optimization" text="Design Optimisation" />
              <QuickLink href="https://www.bosonqpsi.com/structural-mechanics" text="Structural Mechanics" />
              <QuickLink href="/#" text="Thermal Analysis" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Footer;