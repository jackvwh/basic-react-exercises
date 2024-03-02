import { useState } from "react";
import "./App.css";
import Propsdemo from "./exercises/PropsDemo";
import ListDemo from "./exercises/ListDemo";
import EventDemo1 from "./exercises/EventDemo";
import FormUncontrolled from "./exercises/FormUncontrolled";
import FormControlled from "./exercises/FormControlled";
import StateDemo1 from "./exercises/StateDemo1";
import StateDemo2 from "./exercises/StateDemo2";
import StateDemo3 from "./exercises/StateDemo3";
import UseEffectDemo from "./exercises/UseEffects";
import FetchDemo1 from "./exercises/FetchDemo";
import LiftingState from "./exercises/LiftingState";
import ContextDemoApp from "./exercises/ContextDemo";

export default function App() {
  const [selectedView, setSelectedView] = useState("info");

  function handleSelected(selected: string) {
    setSelectedView(selected);
  }

  return (
    <>
      <div className="outer-div-style">
        <div className="header-style">
          <h2>React Exercises</h2>
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ flex: 1, padding: 10 }}>
            <Buttons onSelected={handleSelected} />
          </div>
          <div className="exercise-style">
            {selectedView === "info" ? (
              <p>All exercises for React day-1</p>
            ) : null}
            {selectedView === "props1" ? (
              <div>
                <Propsdemo title="Props Demo1" />
              </div>
            ) : null}
            {selectedView === "props2" ? (
              <div>
                <ListDemo title="List Demo" />
              </div>
            ) : null}
            {selectedView === "props3" ? (
              <div>
                <EventDemo1 title="Event Demo1" />
              </div>
            ) : null}
            {selectedView === "props4" ? (
              <div>
                <FormUncontrolled title="Form Uncontrolled" />
              </div>
            ) : null}
            {selectedView === "propsExtra" ? (
              <div>
                <FormControlled title="Form Controlled" />
              </div>
            ) : null}
            {selectedView === "props5" ? (
              <div>
                <StateDemo1 title="State Demo1" />
              </div>
            ) : null}
            {selectedView === "props6" ? (
              <div>
                <StateDemo2 title="State Demo2" />
              </div>
            ) : null}
            {selectedView === "props7" ? (
              <div>
                <StateDemo3 title="State Demo3" />
              </div>
            ) : null}
            {selectedView === "props8" ? (
              <div>
                <UseEffectDemo title="UseEffects Demo" />
              </div>
            ) : null}
            {selectedView === "props9" ? (
              <div>
                <FetchDemo1 title="Fetch Demo1" />
              </div>
            ) : null}
            {selectedView === "props10" ? (
              <div>
                <LiftingState title="Lifting State" />
              </div>
            ) : null}
            {selectedView === "props11" ? (
              <div>
                <ContextDemoApp title="Context Demo" />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}
type ButtonProps = {
  onSelected: (selected: string) => void;
  btnStyle?: string;
};
const Buttons = (props: ButtonProps) => {
  const { onSelected: handleSelected, btnStyle } = props;
  return (
    <>
      <button className="btn-w100" onClick={() => handleSelected("info")}>
        Info
      </button>
      <button className="btn-w100" onClick={() => handleSelected("props1")}>
        Props demo
      </button>
      <button className="btn-w100" onClick={() => handleSelected("props2")}>
        List Demo
      </button>
      <button className="btn-w100" onClick={() => handleSelected("props3")}>
        Event Demo1 (ImageButton)
      </button>
      <button className="btn-w100" onClick={() => handleSelected("props4")}>
        Forms Uncontrolled
      </button>
      <button className="btn-w100" onClick={() => handleSelected("propsExtra")}>
        Forms Controlled (Extra)
      </button>
      <button className="btn-w100" onClick={() => handleSelected("props5")}>
        State Demo1
      </button>
      <button className="btn-w100" onClick={() => handleSelected("props6")}>
        State Demo2
      </button>
      <button className="btn-w100" onClick={() => handleSelected("props7")}>
        State Demo3
      </button>
      <button className="btn-w100" onClick={() => handleSelected("props8")}>
        UseEffects Demo
      </button>
      <button className="btn-w100" onClick={() => handleSelected("props9")}>
        Fetch Demo1
      </button>
      <button className="btn-w100" onClick={() => handleSelected("props10")}>
        Lifting State
      </button>
      <button className="btn-w100" onClick={() => handleSelected("props11")}>
        Context Demo - useContext
      </button>
    </>
  );
};
