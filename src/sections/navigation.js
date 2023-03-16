import React from "react";
import "../styles/navigation.css";
export const Navigation = ({ activeTab, setTab }) => {
  const navitems = [
    { text: "New Posts", set: "newpost" },
    { text: "View posts", set: "viewpost" },
    { text: "Analytics", set: "analytics" }
  ];

  return (
    <div className="nav-items">
      {navitems.map((x) => {
        return (
          <div
            style={{
              boxShadow:
                activeTab === x.set ? "0 0 5px grey, 0 0 10px grey" : "none"
            }}
            key={x}
            onClick={() => {
              setTab(x.set);
            }}
          >
            {x.text}
          </div>
        );
      })}
    </div>
  );
};
