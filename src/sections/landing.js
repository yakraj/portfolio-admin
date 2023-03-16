import React, { useState, useEffect } from "react";
import "../styles/landing.css";
import { Navigation } from "../sections/navigation";
import { NewPosts } from "../sections/new.posts";
import { ViewPosts } from "../sections/view.posts";
import { Analytics } from "../sections/analytics";
export const Landing = () => {
  const [activeTab, setActiveTab] = useState("newpost");

  return (
    <>
      <div id="landing">
        {/* --- it will have three boxex */}
        {/* for top search and branding and signed person */}
        <div className="top-branding">
          <h1>Yakraj Pariyar</h1>
          {/* <input type="search" /> */}
          <div className="userAvatar">
            {/* here will be signout popup */}
            <div className="user-sign-out-container">
              <div>Sign Out</div>
            </div>
          </div>
        </div>
        {/* it will be for more things of ui */}
        <div className="main-section">
          {/* first navigation side */}
          <div className="navigation-section">
            <Navigation activeTab={activeTab} setTab={setActiveTab} />
          </div>
          <div className="content-container">
            {(() => {
              switch (activeTab) {
                case "viewpost":
                  return <ViewPosts />;
                  break;
                case "analytics":
                  return <Analytics />;
                  break;

                default:
                  return <NewPosts />;
              }
            })()}
          </div>
        </div>
      </div>
    </>
  );
};
