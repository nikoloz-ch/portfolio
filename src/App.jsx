import { useState } from "react";
import Main from "./components/Main";
import AnimatedCursor from "react-animated-cursor";
import Load from "./components/Load";
import Cord from "./components/Cord";
function App() {
  const [count, setCount] = useState(0);
  const clickable = [
    "a",
    'input[type="text"]',
    'input[type="email"]',
    'input[type="number"]',
    'input[type="submit"]',
    'input[type="image"]',
    "label[for]",
    "select",
    "textarea",
    "button",
    ".link",
    ".banner",
    ".avto",
  ];

  return (
    <div className="">
      <div className="animate-loading opacity-0">
        <Main />
        <AnimatedCursor
          outerStyle={{
            display: window.screen.width >= 1280 ? "inner-block" : "none",
          }}
          clickables={clickable}
          outerSize={38}
          outerScale={2.7}
          showSystemCursor={true}
          innerSize={0}
          outerAlpha={0.4}
          trailingSpeed={6}
          color="107, 7, 94"
        />
      </div>
      <div className="absolute top-0 bottom-0 right-0 -z-50 left-0">
        <div className="relative w-full h-full">
          <Load className="top-[50%] bottom-[50%] left-[50%] right-[50%] absolute" />
        </div>
      </div>
    </div>
  );
}

export default App;
