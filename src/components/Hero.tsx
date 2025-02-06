import React from 'react';

function Hero() {
  return (
    <section className="min-h-screen relative flex items-center justify-center bg-white">
      <div className="max-w-7xl w-full mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Text Content */}
        <div className="relative z-10 flex flex-col items-center justify-center py-12 h-[400px]">
          {/* Large Background Letter */}
          <div className="absolute top-[35%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[20rem] font-bold opacity-70 select-none text-[#CBAA66]">
            IAS
          </div>

          {/* Container for Name, Title, and Department */}
          <div className="flex flex-col items-center relative z-10 mt-[-6rem]">
            <h1 className="text-6xl font-semibold tracking-wide text-black">
              Ashwani Kumar
            </h1>
            <div className="flex flex-col items-center space-y-2">
              <p className="text-lg text-black font-medium">Director</p>
              <p className="text-md text-black">
                Directorate of Information Technology
              </p>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="relative z-10">
          <img
            src="public/images/main_ap.jpeg"
            alt="Ashwani Kumar"
            className="w-[650px] h-[550px] object-cover rounded-lg shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
