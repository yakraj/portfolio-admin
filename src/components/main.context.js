// for state management

import Axios from "axios";
import React, { useEffect, useState } from "react";
import { CreateMegaProject, CreateSmalProject } from "./main.services";
import { Server } from "./server";

export const MainContext = React.createContext();
export const ContextContainer = ({ children }) => {
  const [projectTitle, setProjectTitle] = useState();
  const [projectDesc, setProjectDesc] = useState();
  const [projectImages, setprojectImages] = useState();
  const [referenceURL, setreferenceURL] = useState();
  const [usedTech, setusedTech] = useState();
  const [webType, setwebType] = useState();
  const [creatingStatus, setCreatingStatus] = useState(false);
  const [createdStatus, setcreatedStatus] = useState(false);
  const [SmallProjects, setSmallProjects] = useState([]);
  const [MegaProjects, setMegaProjects] = useState([]);
  const [Information, setInformation]  = useState([])
  const clearAfterInput = () => {
    setProjectTitle("");
    setProjectDesc("");
    setprojectImages("");
    setreferenceURL("");
    setusedTech("");
    setwebType("");
    setcreatedStatus("");
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
          .catch((err) => {
            reject(err);
            setCreatingStatus(false);
          });
      }
    });
  };

  const AddSmallProject = (files) => {
    setCreatingStatus(true);
    IploadImages(files).then((ResData) => {
      var data = {
        title: projectTitle,
        description: projectDesc,
        url: referenceURL,
        thumbnail: ResData[0],
      };
      CreateSmalProject(
        data,
        setCreatingStatus,
        setcreatedStatus,
        clearAfterInput
      );
    });
  };
  const AddMegaProject = (files) => {
    setCreatingStatus(true);
    IploadImages(files)
      .then((ResData) => {
        var data = {
          title: projectTitle,
          description: projectDesc,
          url: referenceURL,
          tech: usedTech,
          images: ResData,
          web_type: webType,
        };
        CreateMegaProject(
          data,
          setCreatingStatus,
          setcreatedStatus,
          clearAfterInput
        );
      })
      .catch((err) => console.error(err));
  };

  const GetSmallProjects = () => {
    fetch(Server + "/smallproject")
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        setSmallProjects(response);
      });
  };
  const GetMegaProjects = () => {
    fetch(Server + "/megaproject")
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        setMegaProjects(response);
      });
  };
  const GetInformaton = () => {
    fetch(Server + "/information")
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        setInformation(response);
      });
  };

  useEffect(() => {
    GetSmallProjects();
    GetMegaProjects();
    GetInformaton();
  }, []);
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
        AddSmallProject,
        AddMegaProject,
        creatingStatus,
        SmallProjects,
        MegaProjects,
        GetSmallProjects,
        GetMegaProjects,
        webType,
        setwebType,
        Information
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
