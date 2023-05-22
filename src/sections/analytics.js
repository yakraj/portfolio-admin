import React, { useContext, useEffect } from "react";
import { PieChart } from "react-minimal-pie-chart";
import "../styles/analytics.css";
import { MainContext } from "../components/main.context";
import { ImageServer } from "../components/server";
export const Analytics = () => {
  const { SmallProjects, MegaProjects, Information,GetSmallProjects, GetMegaProjects } =
  useContext(MainContext);

  useEffect(()=>{console.log(Information)},[])

  return (
    <>
      <div class="simple-analytics-container">
        <div class="visitors-count">
          <h1>Site Views</h1>
          <h1>{Information.length}</h1>
        </div>

        <div style = {{height: '61vh',flexDirection: 'column-reverse'}} className="post-archive-container"> 
        {Information.map((x, i) => {
          const date = new Date(x.date)
          let data = JSON.parse(x.data)
          return (
            <div key={i} className="single-post-archive">
              <div className="single-post-leftside">
                <div
                  style={{
                    backgroundImage: "none",
                  }}
                  className="archive-thumbnail"
                >
                  <h1>{date.getHours()}:</h1>
                  <h1>{date.getMinutes()}</h1>
                </div>
                <div className="archive-meta-section">
                  <h1>{data.city}</h1>
                  <h3 style = {{margin: 0,fontSize:'1rem', textTransform: 'uppercase',color:'grey'}}>{data.region}</h3>
                  <p>{data.timezone}</p>
                  <p style = {{fontSize:'0.5rem'}}>{data.org}</p>
                </div>
              </div>
              <div style = {{flexDirection:'column',marginRight:'10px'}} className="single-post-rightside">
                  <h1 className="rightText">{data.country}</h1>
                  <h3 style ={{fontSize: '1rem'}} className="rightText">{date.toString().substring(4,16)}</h3>
                  <p style ={{fontSize: '0.7rem'}} className="rightText">{data.ip}</p>
              </div>
            </div>
          );
        })}
      </div>
      </div>
    </>
  );
};
