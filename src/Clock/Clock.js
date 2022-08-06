import { useState } from "react";
import Footer from "./Footer/Footer";
import "./Clock.css";
import WorldClock from "./WorldClock/WorldClock";
import Stopwatch from "./Stopwatch/Stopwatch";
function Clock() {
  const [selected, setSelected] = useState(1);
  return (
    <>
      <div className="clockContainer">
        <div className="displayArea">
          {selected === 0 && <Stopwatch />}
          {selected === 1 && <WorldClock />}
        </div>
        <Footer
          selected={selected}
          changeSelectedScreen={(screen) => {
            setSelected(screen);
          }}
        />
      </div>
    </>
  );
}
export default Clock;