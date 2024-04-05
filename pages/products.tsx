import Image from "next/image";

const Products = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md mx-auto text-center">
        <Image
          src="/product-preview.jpg"
          alt="Product Preview"
          width={500}
          height={300}
          className="rounded-lg shadow-lg mb-8"
        />
        <h1 className="text-4xl font-bold mb-4 text-black">Coming Soon!</h1>
        <p className="text-lg mb-8 text-black">
          We&apos;re excited to share our latest product with you. Stay tuned for updates as we put the finishing touches on
          something truly remarkable.
        </p>
        <form className="flex flex-col sm:flex-row">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 mb-4 sm:mb-0 sm:mr-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-700 transition-colors duration-300"
          >
            Notify Me
          </button>
        </form>
      </div>
    </div>
  );
};

export default Products;