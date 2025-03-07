import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-row p-16 gap-14">

      <div className="w-full md:w-[500px] flex justify-center">
        <img
          src="https://market-resized.envatousercontent.com/themeforest.net/files/292405845/Preview-large-preview.__large_preview.jpg?auto=format&q=94&cf_fit=crop&gravity=top&h=8000&w=590&s=dd1159d9bb1583384770ad69f3910bb7045ff3ecc5b88b5d3f1f34a954381e64"
          alt="Storyline"
          className="rounded-lg shadow-lg"
        />
      </div>

      <div className="w-full md:w-[900px]">
        <h1 className="text-4xl text-fuchsia-700 mb-3">The SAG-AFTRA Foundation’s</h1>
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

        <h2 className="text-2xl text-red-700 mt-8">Support Storyline Online</h2>
        <p className="text-lg leading-relaxed text-gray-300 mt-3">
          Help the <span className="text-blue-700">SAG-AFTRA Foundation</span> create more Storyline Online videos.  
          Your support makes a **huge difference** in children's literacy worldwide.
        </p>
      </div>
    </div>
  );
};

export default About;
