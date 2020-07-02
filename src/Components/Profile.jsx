import React, { Component } from "react";
import "../styles/global.sass";
import loadable from "@loadable/component";
import Avatar from "../assets/profile.svg";
import "./index.sass";
const ProfileLinks = loadable(() => import("./ProfileLinks"));
const ParticleComponent = loadable(() => import("./ParticleComponent"));

class Profile extends Component {
  render() {
    return (
      <>
        <div style={{ marginTop: 50 }}>
          <ParticleComponent />
          {/* <div>
              <ButtonMenu
                menuAlignment="right"
                menuSize="small"
                label="Menu"
                icon={<FontAwesomeIcon icon={faEllipsisV} />}
              >
                <MenuItem label="Game kit view" />
              </ButtonMenu>
              <br />
            </div> */}
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
  }
}

export default Profile;
