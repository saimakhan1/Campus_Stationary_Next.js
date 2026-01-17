const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-100 to-blue-50 py-32 text-center overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-200 rounded-full opacity-30 -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-blue-300 rounded-full opacity-30 -z-10 animate-pulse"></div>

      <h1 className="text-5xl md:text-6xl font-extrabold text-blue-600 mb-6">
        Campus Stationery Store
      </h1>

      <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
        All essential stationery items for students & staff. Affordable, high-quality, and conveniently delivered on campus.
      </p>

      {/* Call-to-Action Buttons */}
      <div className="flex justify-center gap-4">
        <a
          href="/products"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition transform hover:-translate-y-1"
        >
          Shop Now
        </a>
        <a
          href="/about"
          className="bg-white text-blue-600 px-6 py-3 rounded-lg shadow hover:bg-blue-100 transition transform hover:-translate-y-1"
        >
          Learn More
        </a>
      </div>

      {/* Optional Emoji / Illustration */}
      <div className="mt-12 text-6xl animate-bounce">
        🖊️📓🎒
      </div>
    </section>
  );
};

export default Hero;
