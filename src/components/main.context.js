// for state management

import React, { useState } from "react";

export const MainContext = React.createContext();
export const ContextContainer = ({ children }) => {
  const [projectTitle, setProjectTitle] = useState("");
  const [projectDesc, setProjectDesc] = useState("");
  const [projectImages, setprojectImages] = useState("");
  const [referenceURL, setreferenceURL] = useState("");
  const [usedTech, setusedTech] = useState("");
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
        setusedTech
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
