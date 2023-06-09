import React, { useContext, useState } from "react";
import { MainContext } from "../components/main.context";
import "../styles/new.posts.css";
export const NewPosts = () => {
  const [ActiveType, setActiveType] = useState("small");
  const [title, settitle] = useState("");

  const PostTypes = [
    { text: "Small Projects", set: "small" },
    { text: "Mega Projects", set: "mega" },
  ];

  const Loading = () => {
    return (
      <div style={{ width: "100%", justifyContent: "center", display: "flex" }}>
        <img
          alt="loading"
          src={require("../loading.webp")}
          style={{ width: "100px" }}
        />
      </div>
    );
  };
  const SmallProjects = () => {
    const {
      projectTitle,
      setProjectTitle,
      projectDesc,
      setProjectDesc,
      projectImages,
      setprojectImages,
      referenceURL,
      setreferenceURL,
      usedTech,
      setusedTech,
      AddSmallProject,
      creatingStatus,
    } = useContext(MainContext);

    return (
      <div className="post-form">
        <input
          maxLength={12}
          value={projectTitle}
          onChange={(e) => setProjectTitle(e.target.value)}
          placeholder="post-title"
          type="text"
        />
        <textarea
          maxLength={50}
          value={projectDesc}
          onChange={(e) => setProjectDesc(e.target.value)}
          type="text"
          placeholder="Project description"
        />
        <input onChange={(e) => setprojectImages(e.target.files)} type="file" />
        <input
          value={referenceURL}
          onChange={(e) => setreferenceURL(e.target.value)}
          placeholder="Reference URL"
          type="url"
        />
        {creatingStatus ? (
          <Loading />
        ) : (
          <button
            style={{ opacity: creatingStatus ? 0.2 : 1 }}
            onClick={() => AddSmallProject(projectImages)}
          >
            Submit
          </button>
        )}
      </div>
    );
  };
  const MegaProjects = () => {
    const {
      projectTitle,
      setProjectTitle,
      projectDesc,
      setProjectDesc,
      projectImages,
      setprojectImages,
      referenceURL,
      setreferenceURL,
      usedTech,
      setusedTech,
      AddMegaProject,
      creatingStatus,
      webType,
      setwebType,
    } = useContext(MainContext);

    return (
      <div className="post-form">
        <input
          maxLength={12}
          value={projectTitle}
          onChange={(e) => setProjectTitle(e.target.value)}
          placeholder="post-title"
          type="text"
        />
        <textarea
          value={projectDesc}
          onChange={(e) => setProjectDesc(e.target.value)}
          type="text"
          placeholder="Project description"
        />
        <input
          value={usedTech}
          onChange={(e) => setusedTech(e.target.value)}
          type="text"
          placeholder="Technologies used (Saperated by comma)"
        />
        <input
          value={webType}
          onChange={(e) => setwebType(e.target.value)}
          type="text"
          placeholder="Website Type (eg. Industrial)"
        />
        <input
          onChange={(e) => setprojectImages(e.target.files)}
          multiple={true}
          type="file"
        />
        <input
          value={referenceURL}
          onChange={(e) => setreferenceURL(e.target.value)}
          placeholder="Reference URL"
          type="url"
        />
        {creatingStatus ? (
          <Loading />
        ) : (
          <button
            style={{ opacity: creatingStatus ? 0.2 : 1 }}
            onClick={() => AddMegaProject(projectImages)}
          >
            Submit
          </button>
        )}
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
                  ActiveType === x.set ? "0 0 5px grey, 0 0 10px grey" : "none",
              }}
              onClick={() => setActiveType(x.set)}
              key={x}
            >
              {x.text}
            </div>
          );
        })}
      </div>
      {/* instead of div you can use form */}
      {ActiveType === "small" ? <SmallProjects /> : <MegaProjects />}
    </div>
  );
};
