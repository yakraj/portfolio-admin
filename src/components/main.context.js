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

  // const UploadImages = (files) => {
  //   const formData = new FormData();
  //   Array.from(files).forEach((element) => {
  //     formData.append("file", element);
  //   });
  //   formData.append("upload_preset", "portfolio");

  //   Axios.post(
  //     "https://api.cloudinary.com/v1_1/wows/image/upload",
  //     formData
  //   ).then((response) => console.log(response));
  // };

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
          console.log("filedata", files.length - 1, i);
          ResData = [...ResData, data];
          if (files.length === ResData.length) {
            window.alert("it is the correct last one");
            console.log(ResData);
          }
        })
        .catch((err) => console.error(err));
      // fetch(url, {
      //   method: "POST",
      //   body: formData,
      // })
      //   .then((response) => {
      //     response.json();
      //   })
      //   .then((data) => {
      //     console.log(data);
      //     ResData = [...ResData, data];
      //     if (files[files.length - 1] === files[i]) {
      //       window.alert("it is the correct last one");
      //       console.log(ResData);
      //     }
      //     // document.getElementById("data").innerHTML += data;
      //   });
    }
  };
  // const UploadImages = (files) => {
  //   const formData = new FormData();

  //   for (let i = 0; i < files.length; i++) {
  //     formData.append("file", files[i]);
  //   }

  //   formData.append("upload_preset", "portfolio");

  //   Axios.post("https://api.cloudinary.com/v1_1/wows/image/upload", formData, {
  //     headers: {
  //       "Content-Type": "multipart/form-data",
  //     },
  //   }).then((response) => console.log(response));
  // };

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
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
