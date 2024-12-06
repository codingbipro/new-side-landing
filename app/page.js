import Services from "./(pages)/services/page";
import Eight from "./components/Eight";
import Eleven from "./components/Eleven";
import First from "./components/First";
import Five from "./components/Five";
import Four from "./components/Four";
import Nine from "./components/Nine";
import Seven from "./components/Seven";
import Six from "./components/Six";
import Three from "./components/Three";

export default function Home() {
  return (
    <div>
      <First />
      <Services />
      <Three />
      <Four />
      <Five />
      <Six />
      <Seven />
      <Eight />
      <Nine />
      <Eleven />
    </div>
  );
}
