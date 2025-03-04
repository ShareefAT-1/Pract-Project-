import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-row p-16 gap-14">

      <div className="w-full md:w-[500px] flex justify-center">
        <img
          src="https://s.tmimgcdn.com/scr/800x500/48200/library-responsive-website-template_48292-original.jpg"
          alt="Storyline"
          className="rounded-lg shadow-lg"
        />
      </div>

      <div className="w-full md:w-[900px]">
        <h1 className="text-4xl text-blue-400 mb-3">The SAG-AFTRA Foundation’s</h1>
        <p className="text-lg leading-relaxed text-gray-200">
          Three-time Emmy®-nominated and award-winning children’s literacy website,  
          <span className="text-emerald-400"> Storyline Online®</span>, streams videos featuring  
          celebrated actors reading children’s books alongside creatively produced illustrations.
        </p>
        <p className="text-lg leading-relaxed text-gray-300 mt-3">
          Reading aloud to children has been shown to improve reading, writing, and communication skills,  
          <span className="text-emerald-600"> logical thinking, concentration,</span> and general academic aptitude.
        </p>
        <p className="text-lg leading-relaxed text-gray-200 mt-6">
          Teachers use Storyline Online in classrooms, and doctors play it in children's hospitals.  
          It’s available **24/7** for children, parents, and educators worldwide.
        </p>

        <h2 className="text-2xl text-blue-400 mt-8">Support Storyline Online</h2>
        <p className="text-lg leading-relaxed text-gray-300 mt-3">
          Help the <span className="text-blue-700">SAG-AFTRA Foundation</span> create more Storyline Online videos.  
          Your support makes a **huge difference** in children's literacy worldwide.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <button
          className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg shadow-lg transition-all"
          onClick={() => navigate("/login")}
        >
          Login
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg transition-all"
          onClick={() => navigate("/register")}
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default About;
