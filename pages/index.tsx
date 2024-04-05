import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <div className="relative h-screen py-16">
        <Image
          src="/bg2.png"
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 fixed"
        />
        <div className="relative flex flex-col items-start justify-center h-full fixed">
          <div className="flex justify-center w-full mt-64 flex-direction: column">
            <h1 className="text-6xl/[64px] font-bold mt-32 px-16 py-28 h-64 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text wixui-rich-text__text font-serif italic">
              Powering Tomorrow&apos;s Engineering, Today!<br />
            </h1>
          </div>
          <div className="flex justify-center h-screen pl-72">
            <div className="pl-96">
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 mt-2 text-white p-4 text-3xl rounded-full hover:bg-gradient-to-l hover:from-pink-500 hover:to-purple-500 transition-colors duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="shadow-xl rounded-lg p-8" style={{ transform: 'skewY(0deg)', background: 'linear-gradient(to bottom, black, #24A2B2)' }}>
          <h2 className="text-5xl font-bold mb-2 text-center text-emerald-400">Trusted By</h2>
          <div className="flex justify-center flex-wrap container z-15 shadow-xl ">
            <Image src="/1.png" alt="Partner Logo 1" width={200} height={150} className="m-4" />
            <Image src="/2.png" alt="Partner Logo 2" width={200} height={150} className="m-4" />
            <Image src="/3.png" alt="Partner Logo 3" width={200} height={150} className="m-4" />
            <Image src="/4.png" alt="Partner Logo 4" width={200} height={150} className="m-4" />
            <Image src="/5.png" alt="Partner Logo 5" width={200} height={150} className="m-4" />
          </div>
        </div>
      </div>
      <div className="container mx-auto py-12 flex flex-col md:flex-row items-center" style={{ transform: 'skewY(0deg)', background: 'linear-gradient(to bottom, #24A2B2, white)' }}>
        <div className="flex flex-col items-center px-8 md:px-0">
          <p className="text-5xl mb-8 text-center font-serif text-white leading-relaxed px-80">
            BQPhy - The World&apos;s First Cloud-Based Simulation Platform That Empowers Engineers to Explore unexplored Simulations at Lightning Speed,<br />
            Resulting in Faster Innovation and Cost-Effective Solutions.
          </p>
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 mt-8 text-white p-4 text-3xl rounded-full hover:bg-gradient-to-l hover:from-pink-500 hover:to-purple-500 transition-colors duration-300">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}