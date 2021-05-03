import "./App.css";
import ControlPanel from "./components/ControlPanel";
import MasterControl from "./components/MasterControl";
import PadsPanel from "./components/PadsPanel";
import PerformancePanel from "./components/PerformancePanel";
import ProgrammingPanel from "./components/ProgrammingPanel";

function App() {

  return (
    <div className="App">
      <section className="machine">
        <section className="top-panel">
          <span className="logo">SP-1200</span>
          <span className="sub-logo">SAMPLING PERCUSSION</span>
        </section>
        <ControlPanel />
        <MasterControl />
        <ProgrammingPanel />
        <PerformancePanel />
        <PadsPanel />
        <section className="bottom-panel">
          <span className="emu-logo">E-mu Systems, Inc.</span>
        </section>
      </section>
    </div>
  );

}

export default App;
