import React from "react";

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat h-[80vh] sm:h-[90vh] lg:h-screen flex items-center "
      style={{ backgroundImage: "url('/Banner.jpg')", backgroundAttachment: "fixed" }} // put your banner in /public
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="w-11/12 relative z-10 mx-auto px-4 text-center md:text-left">
        <div className="max-w-2xl md:max-w-3xl">
          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight drop-shadow-lg">
            Bid on Unique Items from <br className="hidden sm:block" /> Around the World
          </h1>

          {/* Paragraph */}
          <p className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 opacity-90">
            Discover rare collectibles, luxury goods, and vintage treasures in our curated auctions
          </p>

          {/* Single Button */}
          <div className="mt-6 flex justify-center md:justify-start">
            <a
              href="/auctions"
              className="px-8 py-3 bg-white text-red-600 font-semibold rounded-lg shadow-lg hover:bg-[#FFD337] hover:text-[#003EA4] transition"
            >
              Explore Auctions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
