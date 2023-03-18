import "./styles.css";
import { Landing } from "./sections/landing";
import { ContextContainer } from "./components/main.context";
import { Server } from "./components/server";
import { useEffect } from "react";
export default function App() {
  useEffect(() => {
    console.log("running");
    fetch(Server + "/")
      .then((Response) => {
        Response.json();
      })
      .then((data) => console.log(data));
  }, []);
  return (
    <>
      <ContextContainer>
        <Landing />
      </ContextContainer>
    </>
  );
}
