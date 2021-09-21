import React from "react";
import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";
import Githlogo from "../components/Githlogo";
import Nav from "../components/Nav";
// import { selectUser } from "../features/counter/userSlice";
// import { auth } from "../firebase";
import "./css/profileScreen.css";
function ProfileScreen() {
  // const user = useSelector(selectUser);
  return (
    <div className="ProfileScreen">
      <Nav />
      <Githlogo />
      <div className="ProfileScreen__body">
        <h1>Edit Profile</h1>
        <div className="ProfileScreen__info">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt=""
          />
          <div className="ProfileScreen__details">
            <h2>abc@netflixclone.io</h2>
            <div className="ProfileScreen__Planes">
              <Link to="/">
                <button
                  className="ProfileScreen__singOut"
                  // onClick={() => auth.signOut()}
                >
                  Sing Out
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
