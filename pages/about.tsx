import Image from "next/image";
import AboutComponent from "@/Components/AboutUs";






const AboutUs = () => {
  return (
    <div style={{ transform: 'skewY(0deg)', background: 'linear-gradient(to bottom, black, #24A2B2)' }}>
      {/* Section 1 */}
      <div className="flex flex-col md:flex-row" >
        <AboutComponent />

      </div>

      {/* Section 2 */}
      <div className=" py-4">
        <div className="container mx-auto">
        <div className="container mx-auto py-6 flex flex-col md:flex-row items-center justify-center">
            
                <h2 className="text-6xl font-bold mb-8 text-center text-black justify-center">Leadership Team</h2>
        </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
            <div className="relative rounded-full overflow-hidden group">
            <div className="w-68 h-64 relative">
              <Image
                src="/CEO.webp"
                alt="Team Member 1"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
              <div className="absolute inset-0 bg-white bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-center text-black">
                  <h3 className="text-xl font-bold mb-2">ABHISHEK CHOPRA</h3>
                  <p className="mb-2">CEO</p>
                  <div className="flex justify-center space-x-4">
                    <a href="#" className="text-black hover:text-gray-300">
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="#" className="text-white hover:text-gray-300">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" className="text-white hover:text-gray-300">
                      <i className="fas fa-envelope"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="text-center text-black">
                <p className="mb-2 text-xl font-extrabold tracking-wide">ABHISHEK CHOPRA</p>
                <p className="mb-4 text-lg italic">Founder, Chief Executive and <br></br> Scientific Officer</p>
            </div>
            </div>
            <div className="relative rounded-full overflow-hidden group">
            <div className="w-68 h-64 relative">
              <Image
                src="/CTO.webp"
                alt="Team Member 1"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
              <div className="absolute inset-0 bg-white bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-center text-black">
                  <h3 className="text-xl font-bold mb-2">RUT LINESWALA</h3>
                  <p className="mb-2">CTO</p>
                  <div className="flex justify-center space-x-4">
                    <a href="#" className="text-white hover:text-gray-300">
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="#" className="text-white hover:text-gray-300">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" className="text-white hover:text-gray-300">
                      <i className="fas fa-envelope"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="text-center text-black">
                <p className="mb-2 text-xl font-extrabold tracking-wide">RUT LINESWALA</p>
                <p className="mb-4 text-lg italic">Founder, <br></br>Chief Technology <br></br>Officer</p>
            </div>
            </div>
            <div className="relative rounded-full overflow-hidden group">
            <div className="w-68 h-64 relative">
              <Image
                src="/COO.webp"
                alt="Team Member 1"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
              <div className="absolute inset-0 bg-white bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-center text-black">
                  <h3 className="text-xl font-bold mb-2">JASH MINOCHA</h3>
                  <p className="mb-2">Founder,<br></br> Chief Operating Officer</p>
                  <div className="flex justify-center space-x-4">
                    <a href="#" className="text-white hover:text-gray-300">
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="#" className="text-white hover:text-gray-300">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" className="text-white hover:text-gray-300">
                      <i className="fas fa-envelope"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="text-center text-black">
                <p className="mb-2 text-xl font-extrabold tracking-wide">JASH MINOCHA</p>
                <p className="mb-4 text-lg italic">Founder,<br></br> Chief Operating Officer</p>
            </div>
            </div>



            <div className="relative rounded-full overflow-hidden group">
            <div className="w-68 h-64 relative">
              <Image
                src="/Aditya.png"
                alt="Team Member 1"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
            <div className="absolute inset-0 bg-white bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-center text-black">
                <h3 className="text-xl font-bold mb-2">ADITYA SINGH</h3>
                <p className="mb-2">Head of Bussiness</p>
                <div className="flex justify-center space-x-4">
                    <a href="#" className="text-white hover:text-gray-300">
                    <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="#" className="text-white hover:text-gray-300">
                    <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" className="text-white hover:text-gray-300">
                    <i className="fas fa-envelope"></i>
                    </a>
                </div>
                </div>
            </div>
            <div className="text-center text-black">
                <p className="mb-2 text-xl font-extrabold tracking-wide">ADITYA SINGH</p>
                <p className="mb-2 text-lg italic">Founding Member and<br></br> VP of Business & Infra</p>
            </div>
            </div>
            {/* <div className="py-16 flex flex-row grid grid-cols-4 gap-4"> */}
            <div className="relative rounded-full overflow-hidden group">
            <div className="w-68 h-64 relative">
              <Image
                src="/Vijay.webp"
                alt="Team Member 1"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
            <div className="absolute inset-0 bg-white bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-center text-black">
                <h3 className="text-xl font-bold mb-2">VIJAY SETHI</h3>
                <p className="mb-2">Director</p>
                <div className="flex justify-center space-x-4">
                    <a href="#" className="text-white hover:text-gray-300">
                    <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="#" className="text-white hover:text-gray-300">
                    <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" className="text-white hover:text-gray-300">
                    <i className="fas fa-envelope"></i>
                    </a>
                </div>
                </div>
            </div>
            <div className="text-center text-black">
                <p className="mb-2 text-xl font-extrabold tracking-wide">VIJAY SETHI</p>
                <p className="mb-2 text-lg italic">Director</p>
            </div>
            </div> 


            {/* <div className="relative rounded-full overflow-hidden group">
              <Image
                src="/Kg.webp"
                alt="Team Member 1"
                width={300}
                height={150}
                className="rounded-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-center text-white">
                  <h3 className="text-xl font-bold mb-2">John Doe</h3>
                  <p className="mb-2">CEO</p>
                  <div className="flex justify-center space-x-4">
                    <a href="#" className="text-white hover:text-gray-300">
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="#" className="text-white hover:text-gray-300">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" className="text-white hover:text-gray-300">
                      <i className="fas fa-envelope"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="text-center text-white">
                <p className="mb-2">KG</p>
                <p className="mb-2">Director</p>
            </div>

            </div>


            <div className="relative rounded-full overflow-hidden group">
              <Image
                src="/sai.webp"
                alt="Team Member 1"
                width={300}
                height={150}
                className="rounded-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-center text-white">
                  <h3 className="text-xl font-bold mb-2">John Doe</h3>
                  <p className="mb-2">CEO</p>
                  <div className="flex justify-center space-x-4">
                    <a href="#" className="text-white hover:text-gray-300">
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="#" className="text-white hover:text-gray-300">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" className="text-white hover:text-gray-300">
                      <i className="fas fa-envelope"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative rounded-full overflow-hidden group">
              <Image
                src="/tejas.webp"
                alt="Team Member 1"
                width={300}
                height={150}
                className="rounded-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-center text-white">
                  <h3 className="text-xl font-bold mb-2">John Doe</h3>
                  <p className="mb-2">CEO</p>
                  <div className="flex justify-center space-x-4">
                    <a href="#" className="text-white hover:text-gray-300">
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="#" className="text-white hover:text-gray-300">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" className="text-white hover:text-gray-300">
                      <i className="fas fa-envelope"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>


            <div className="relative rounded-full overflow-hidden group">
              <Image
                src="/ferdin.webp"
                alt="Team Member 1"
                width={300}
                height={150}
                className="rounded-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-center text-white">
                  <h3 className="text-xl font-bold mb-2">John Doe</h3>
                  <p className="mb-2">CEO</p>
                  <div className="flex justify-center space-x-4">
                    <a href="#" className="text-white hover:text-gray-300">
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="#" className="text-white hover:text-gray-300">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" className="text-white hover:text-gray-300">
                      <i className="fas fa-envelope"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>




            <div className="relative rounded-full overflow-hidden group">
            <Image
                src="/vijay2.webp"
                alt="Team Member 1"
                width={300}
                height={150}
                className="rounded-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-center text-white">
                <h3 className="text-xl font-bold mb-2">John Doe</h3>
                <p className="mb-2">CEO</p>
                <div className="flex justify-center space-x-4">
                    <a href="#" className="text-white hover:text-gray-300">
                    <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="#" className="text-white hover:text-gray-300">
                    <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" className="text-white hover:text-gray-300">
                    <i className="fas fa-envelope"></i>
                    </a>
                </div>
                </div>
            </div>
            </div>


            <div className="relative rounded-full overflow-hidden group">
              <Image
                src="/jojo.webp"
                alt="Team Member 1"
                width={300}
                height={150}
                className="rounded-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-center text-white">
                  <h3 className="text-xl font-bold mb-2">John Doe</h3>
                  <p className="mb-2">CEO</p>
                  <div className="flex justify-center space-x-4">
                    <a href="#" className="text-white hover:text-gray-300">
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="#" className="text-white hover:text-gray-300">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" className="text-white hover:text-gray-300">
                      <i className="fas fa-envelope"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>









 */}


            </div>



            {/* Add more team members here */}
          </div>
        {/* </div> */}
      </div>

      {/* Section 3 */}
      {/* <div className="bg-white py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Core Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            <div className="bg-gray-100 rounded-lg p-4">
              <Image
                src="/Kg.webp"
                alt="Team Member 2"
                width={400}
                height={300}
                className="w-full h-auto rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2 text-black">KG</h3>
              <p className="text-gray-700 mb-2">Quantum Software Engineer</p>
              <p className="text-gray-600">
                Jane is a skilled software engineer with expertise in developing cutting-edge algorithms and software
                solutions.
              </p>
            </div>
            



          </div>
        </div>
      </div> */}
    </div>
  );
};

export default AboutUs;