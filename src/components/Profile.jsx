import React from "react";
// import profile from "../images/profile.webp";

const Profile = () => {
  return (
    <div>
        ghmfhkjfhkjfg
      <div className="p-4">
        <h1><b>Profile</b></h1>
        <div className="mt-4">
          <div className="d-flex gap-4" style={{alignItems:"center"}}>
            <img
              style={{ borderRadius: "100px", height: "180px" }}
            //   src={profile}
              alt="Error"
            />
            <div>
              <h1>Jon Doe</h1>
              <p>jon.Doe.not@example.gmail.com</p>
            </div>
          </div>

          <div className="mt-4 mb-3" style={{width:"400px"}}>
            <h1>Bio</h1>
            <p className="mt-3">A software developer with a passion of learning new technologies and improving coding skills . </p>

          </div>
          <button type="button" class="btn btn-primary">Edit Profile</button>

          

        </div>
      </div>
    </div>
  );
};

export default Profile;
