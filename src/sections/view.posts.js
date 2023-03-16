import React, { useState } from "react";
import "../styles/new.posts.css";
import "../styles/view.post.css";
export const ViewPosts = () => {
  const multiple = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 123, 14, 415];

  const [ActiveType, setActiveType] = useState("small");

  const PostTypes = [
    { text: "Small Projects", set: "small" },
    { text: "Mega Projects", set: "mega" }
  ];

  const SmallPosts = () => {
    return (
      <div className="post-archive-container">
        {multiple.map((x, i) => {
          return (
            <div key={x} className="single-post-archive">
              <div className="single-post-leftside">
                <div className="archive-thumbnail" />
                <div className="archive-meta-section">
                  <h1>Css castle</h1>
                  <p>
                    this is a pure css castle which been only created by using
                    html and css
                  </p>
                </div>
              </div>
              <div className="single-post-rightside">
                <div className="delete-button" />
                <div className="edit-button" />
              </div>
            </div>
          );
        })}
      </div>
    );
  };
  const MegaPosts = () => {
    return (
      // https://static-cse.canva.com/blob/651263/youtube.b1db6241.jpg
      <div className="post-archive-container">
        {multiple.map((x, i) => {
          return (
            <div key={x} className="single-post-archive">
              <div className="single-post-leftside">
                <div
                  style={{
                    backgroundImage: `url('https://static-cse.canva.com/blob/651263/youtube.b1db6241.jpg')`
                  }}
                  className="archive-thumbnail"
                />
                <div className="archive-meta-section">
                  <h1>Css castle</h1>
                  <p>
                    this is a pure css castle which been only created by using
                    html and css
                  </p>
                </div>
              </div>
              <div className="single-post-rightside">
                <div className="delete-button" />
                <div className="edit-button" />
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="new-posts-container">
      <div className="post-type">
        {PostTypes.map((x) => {
          return (
            <div
              style={{
                boxShadow:
                  ActiveType === x.set ? "0 0 5px grey, 0 0 10px grey" : "none"
              }}
              onClick={() => setActiveType(x.set)}
              key={x}
            >
              {x.text}
            </div>
          );
        })}
      </div>
      {/* on this bottom section we are going to create ads view archives */}
      {ActiveType === "small" ? <SmallPosts /> : <MegaPosts />}
    </div>
  );
};
