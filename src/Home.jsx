import React, { useState } from "react";
import logo from "./assets/images/logo2.png";

const images = [
  "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQz-TxIcYUQ8mFZ5yRl0CXGRdz5g4JP1VRjboOvU06UcPqVwFk09sDFHNetVuIfAq-UcJczSHVrxRcwQ2-h8oOCnHuSdHSuKrxlJ-0cf_yY7Uyg-31xp476TA",
  "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTLMJgkFdofdXiasCVE-W_FiXgWieySlS5iNIDTukVDHSapkAv53TBTv5mXBS3Jqy8s5tYw8IFnk-BVMLUZOI8sDUtYFKBkAN0tiOuIVFK8BfQgNp4hfN1wcw",
  "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR6Gu1vuzqPGnl-g_h_3fja8jQfD41kMzYYMFkOixX4_4RiRx2ClbwEGdCkk4OVQ_MFk347WeWpZyaiHgMxJ6km_N-_ihOzLQiWhWwm_fs1lPcOHIyxabna",
  "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTLMJgkFdofdXiasCVE-W_FiXgWieySlS5iNIDTukVDHSapkAv53TBTv5mXBS3Jqy8s5tYw8IFnk-BVMLUZOI8sDUtYFKBkAN0tiOuIVFK8BfQgNp4hfN1wcw",
  "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR6Gu1vuzqPGnl-g_h_3fja8jQfD41kMzYYMFkOixX4_4RiRx2ClbwEGdCkk4OVQ_MFk347WeWpZyaiHgMxJ6km_N-_ihOzLQiWhWwm_fs1lPcOHIyxabna",
  "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTLMJgkFdofdXiasCVE-W_FiXgWieySlS5iNIDTukVDHSapkAv53TBTv5mXBS3Jqy8s5tYw8IFnk-BVMLUZOI8sDUtYFKBkAN0tiOuIVFK8BfQgNp4hfN1wcw",
  "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR6Gu1vuzqPGnl-g_h_3fja8jQfD41kMzYYMFkOixX4_4RiRx2ClbwEGdCkk4OVQ_MFk347WeWpZyaiHgMxJ6km_N-_ihOzLQiWhWwm_fs1lPcOHIyxabna",
  "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQLHys9z5Jw7lviwnySwY7FQmbidcDHTw8ucQZFnPMftg6cXbHfODhmFeoh1xuec9VwXmW_2fyTf6TzXYF3LxyZ3dmuYsg1Jg",
  "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSDghMyDAmX2GNHvZT_eXo4xPpA8N2AF9PVNwIhMDiRB26I8-FnO7voDl9V1K6vgRjXhTQfNndXtJwrEmhz-b2og6ho13DQQw",
];

const Navbar = () => (
  <nav className="flex justify-between items-center p-4 bg-gray-900 text-white">
    <div className="ml-8 p-3">
      <img src={logo} className="rounded-full" width={50} alt="Website Logo" />
    </div>
    <ul className="flex space-x-6">
      {["Home", "About", "Services", "Contact"].map((item) => (
        <li key={item}>
          <a href="#" className="hover:text-gray-400">
            {item}
          </a>
        </li>
      ))}
    </ul>
    <div className="mr-20">
      <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
        Login
      </button>
    </div>
  </nav>
);

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerSlide = 5; // Number of images visible at a time

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full max-w-2xl,h-56 mx-auto mt-6 overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * (100 / itemsPerSlide)}%)`,
        }}
      >
        {images.map((img, index) => (
          <div key={index} className="flex-1 px-2 h-56 bg-amber-300">
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full h-full bg-cover bg-center border rounded-lg transition-transform duration-300 ease-in-out hover:scale-110"
            />
          </div>
        ))}
      </div>

      {/* Previous Button */}
      <button
        onClick={prevSlide}
        aria-label="Previous slide"
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-full hover:bg-gray-700"
      >
        ❮
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        aria-label="Next slide"
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-full hover:bg-gray-700"
      >
        ❯
      </button>
    </div>
  );
};

const Home = () => (
  <div>
    <Navbar />
    <ImageSlider />
  </div>
);

export default Home;
