import React, { useContext, useEffect, useState } from "react";
import { MainContext } from "../components/main.context";
import { ImageServer } from "../components/server";
import "../styles/new.posts.css";
import "../styles/view.post.css";
export const ViewPosts = () => {
  const { SmallProjects, MegaProjects, GetSmallProjects, GetMegaProjects } =
    useContext(MainContext);
  const multiple = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 123, 14, 415];

  const [ActiveType, setActiveType] = useState("small");

  const PostTypes = [
    { text: "Small Projects", set: "small" },
    { text: "Mega Projects", set: "mega" },
  ];
  useEffect(() => {
    GetSmallProjects();
    GetMegaProjects();
  }, []);
  const SmallPosts = () => {
    return (
      <div className="post-archive-container">
        {SmallProjects.map((x, i) => {
          return (
            <div key={i} className="single-post-archive">
              <div className="single-post-leftside">
                <div
                  style={{
                    backgroundImage: `url(${ImageServer + x.thumbnail})`,
                  }}
                  className="archive-thumbnail"
                />
                <div className="archive-meta-section">
                  <h1>{x.title}</h1>
                  <p>{x.description}</p>
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
        {MegaProjects.map((x, i) => {
          return (
            <div key={i} className="single-post-archive">
              <div className="single-post-leftside">
                <div
                  style={{
                    backgroundImage: `url(${ImageServer + x.images[0]})`,
                  }}
                  className="archive-thumbnail"
                />
                <div className="archive-meta-section">
                  <h1>{x.title}</h1>
                  <p>{x.description.substring(0, 50)}</p>
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
        {PostTypes.map((x, i) => {
          return (
            <div
              style={{
                boxShadow:
                  ActiveType === x.set ? "0 0 5px grey, 0 0 10px grey" : "none",
              }}
              onClick={() => setActiveType(x.set)}
              key={x + i}
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
