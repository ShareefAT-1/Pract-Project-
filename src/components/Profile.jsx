import React from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {

 const navigate=useNavigate();

  const handlelogout=()=>{
    navigate("/login")
    localStorage.removeItem("user")
  }
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
      <div className="max-w-lg w-full bg-white shadow-lg rounded-2xl p-6">

        <div className="flex flex-col items-center gap-4">
          <img
            className="w-32 h-32 rounded-full shadow-md object-cover"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDpWYsLSeY1sLvwgFNwBeJGjszUfEofDpwJw&s"
            alt="Profile"
          />
          <h2 className="text-xl font-semibold text-gray-800">Jon Doe</h2>
          <p className="text-gray-500">jon.doe.not@example.gmail.com</p>
        </div>

        <div className="mt-6 text-center">
          <h4 className="text-lg font-medium text-gray-800">Bio</h4>
          <p className="text-gray-600 mt-2">
            A software developer with a passion for learning new technologies
            and improving coding skills. Always striving to enhance knowledge
            and contribute to the community.
          </p>
        </div>

        <div className="mt-6 flex justify-center gap-3.5">
          <button className="flex items-center gap-2 px-6 py-2 rounded-full bg-blue-500 text-white hover:bg-blue-700 transition-all">
            ✏️ Edit Profile
          </button>
          <button className="flex items-center px-5 py-2 rounded-full bg-red-500 text-white hover:bg-red-700 transition-all" onClick={handlelogout}>
            🚶‍➡️ Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
