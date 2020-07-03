import React from "react";
import "../styles/global.sass";
import loadable from "@loadable/component";
import Avatar from "../assets/profile.svg";
const ProfileLinks = loadable(() => import("./ProfileLinks"));
const ParticleComponent = loadable(() => import("./ParticleComponent"));

const Profile = () => {
  return (
    <>
      <div style={{ marginTop: 50 }}>
        <ParticleComponent />
        <br />
        <div>
          <img
            src={Avatar}
            className="img-thumbnail"
            style={{
              borderRadius: "50%",
              height: 230,
              width: 230,
            }}
            alt="Mitesh Tagadiya"
          />
        </div>
      </div>

      <ProfileLinks />
    </>
  );
};

export default Profile;
