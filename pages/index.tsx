import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen relative w-full">
      {/* Reduced the padding-top to reduce the gap between the image and the heading */}
      <div className="relative h-screen pt-8 z-10">
        <Image
          src="/bg2.png"
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 fixed z-10"
        />
      </div>
      {/* Added flex-col to make the heading and button responsive */}
      <div className="relative flex flex-col items-center justify-center h-full fixed z-10">
        {/* Reduced the font size and added text-center for responsiveness */}
        <div className="flex flex-col justify-center items-center w-full z-10">
        <p className="text-8xl md:text-6xl font-bold mt-2 px-8 py-1 h-64 bg-gradient-to-r from-custom-blue to-white text-transparent bg-clip-text wixui-rich-text__text font-bold font-strong text-center">
          Powering <span className="italic">Tomorrow&apos;s</span> Engineering, <span className="italic">Today!</span>
        </p>
        </div>
      </div>
      {/* Added max-w-full for responsiveness */}
      <div className="container mx-auto max-w-full">
        <div className="shadow-xl rounded-lg p-8" style={{ transform: 'skewY(0deg)', background: 'linear-gradient(to bottom, black, #24A2B2)' }}>
          <h2 className="text-3xl font-bold mb-2 text-center text-emerald-400">Trusted By</h2>
          {/* Added flex-wrap for responsiveness */}
          <div className="flex justify-center flex-wrap container z-15 shadow-xl ">
            <Image src="/1.png" alt="Partner Logo 1" width={200} height={150} className="m-4" />
            <Image src="/2.png" alt="Partner Logo 2" width={200} height={150} className="m-4" />
            <Image src="/3.png" alt="Partner Logo 3" width={200} height={150} className="m-4" />
            <Image src="/4.png" alt="Partner Logo 4" width={200} height={150} className="m-4" />
            <Image src="/5.png" alt="Partner Logo 5" width={200} height={150} className="m-4" />
          </div>
        </div>
      </div>
      {/* Added max-w-full for responsiveness */}
      <div className="container mx-auto py-12 flex flex-col md:flex-row items-center max-w-full" style={{ transform: 'skewY(0deg)', background: 'linear-gradient(to bottom, #24A2B2, #D0EDE7)' }}>
        {/* Added text-center for responsiveness */}
        <div className="flex flex-col items-center px-8 md:px-0 text-center">
          {/* Reduced the font size and added text-center for responsiveness */}
          <p className="text-3xl mb-8 font-serif text-white leading-relaxed px-80">
            BQPhy - The World&apos;s First Cloud-Based Simulation Platform That Empowers Engineers to Explore unexplored Simulations at Lightning Speed,<br />
            Resulting in Faster Innovation and Cost-Effective Solutions.
          </p>
          {/* Adjusted padding for similar size as the last button and added mx-auto for center alignment */}
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 mt-8 text-white p-4 text-2xl rounded-full hover:bg-gradient-to-l hover:from-pink-500 hover:to-purple-500 transition-colors duration-300 mx-auto">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}