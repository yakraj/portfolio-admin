import "./styles.css";
import { Landing } from "./sections/landing";
import { ContextContainer } from "./components/main.context";
export default function App() {
  return (
    <>
      <ContextContainer>
        <Landing />
      </ContextContainer>
    </>
  );
}
