import Image from "next/image";

export default function Career() {
  return (
    <div className="py-32" style={{ transform: 'skewY(0deg)', background: 'linear-gradient(to bottom, black, #24A2B2)' }}>
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 p-4">
          <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
          <p className="text-lg mb-8">
            At BosonQ Psi, we're on a mission to revolutionize the way computational problems are solved in the aerospace
            and advanced manufacturing sectors. Our team of passionate, talented individuals is at the heart of our
            success, and we're always on the lookout for exceptional people to join our ranks.
          </p>
          <p className="text-lg mb-8">
            We value innovation, collaboration, and a commitment to excellence. If you're driven by curiosity, thrive in
            a fast-paced environment, and are eager to push the boundaries of what's possible, we want you on our team.
          </p>
          <p className="text-lg mb-8">
            At BosonQ Psi, you'll have the opportunity to work on cutting-edge projects, collaborate with industry
            leaders, and shape the future of computational problem-solving. We offer competitive compensation, excellent
            benefits, and a supportive, inclusive culture that fosters personal and professional growth.
          </p>
          <a
            href="/careers/open-positions"
            className="bg-black text-white px-6 py-3 rounded-md hover:bg-white-700 transition-colors duration-300 inline-block"
          >
            Join Us!
          </a>
        </div>
        <div className="md:w-1/2 p-4">
          <Image
            src="/carrer.png"
            alt="Our Team"
            width={800}
            height={600}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}