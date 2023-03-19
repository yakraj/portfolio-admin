// for state management

import Axios from "axios";
import React, { useState } from "react";

export const MainContext = React.createContext();
export const ContextContainer = ({ children }) => {
  const [projectTitle, setProjectTitle] = useState("");
  const [projectDesc, setProjectDesc] = useState("");
  const [projectImages, setprojectImages] = useState("");
  const [referenceURL, setreferenceURL] = useState("");
  const [usedTech, setusedTech] = useState("");
  const [webType, setwebType] = useState("");

  const UploadImages = (files) => {
    let ResData = [];
    let folder = files.length <= 1 ? "Small_Projects" : "Mega_Projects";
    var formData = new FormData();
    var url = "https://api.cloudinary.com/v1_1/wows/image/upload";
    // Add files to the FormData object

    for (let i = 0; i < files.length; i++) {
      let file = files[i];
      formData.append("file", file);
      formData.append("upload_preset", "portfolio");
      formData.append("folder", folder);

      fetch(url, {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          ResData = [...ResData, data.public_id];
          if (files.length === ResData.length) {
            window.alert("it is the correct last one");

            // after uploading all of these images the function will go on rest api

            return ResData;
          }

          return;
        })
        .catch((err) => console.error(err));
    }
  };

  const IploadImages = (files) => {
    let ResData = [];
    let folder = files.length <= 1 ? "Small_Projects" : "Mega_Projects";
    var formData = new FormData();
    var url = "https://api.cloudinary.com/v1_1/wows/image/upload";
    // Add files to the FormData object

    return new Promise((resolve, reject) => {
      for (let i = 0; i < files.length; i++) {
        let file = files[i];
        formData.append("file", file);
        formData.append("upload_preset", "portfolio");
        formData.append("folder", folder);

        fetch(url, {
          method: "POST",
          body: formData,
        })
          .then((response) => response.json())
          .then((data) => {
            ResData = [...ResData, data.public_id];
            if (files.length === ResData.length) {
              resolve(ResData);
            }
          })
          .catch((err) => reject(err));
      }
    });
  };

  const AddSmallProject = (files) => {
    var data = {
      title: projectTitle,
      description: projectDesc,
      url: referenceURL,
      thumbnail: null,
    };

    IploadImages(files)
      .then((ResData) => {
        console.log(ResData);
        // do something with ResData
      })
      .catch((err) => console.error(err));
  };
  const AddMegaProject = (files) => {
    var data = {
      title: projectTitle,
      description: projectDesc,
      url: referenceURL,
      tech: usedTech,
      images: null,
    };
    IploadImages(files)
      .then((ResData) => {
        console.log(ResData);
        // do something with ResData
      })
      .catch((err) => console.error(err));
  };

  return (
    <MainContext.Provider
      value={{
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
        UploadImages,
        AddSmallProject,
        AddMegaProject,webType
        ,setwebType
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
