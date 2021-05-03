import "./App.css";
import PadsPanel from "./components/PadsPanel";

function App() {

  return (
    <div className="App">
      <section className="panel">
        <section className="top-panel">
          <span className="logo">SP-1200</span>
          <span className="sub-logo">SAMPLING PERCUSSION</span>
        </section>
        <section className="control-panel">
          Set-up/Disk/Sync/Sample
        </section>
        <section className="master-panel">
          Master Control
        </section>
        <section className="programming-panel">
          Programming
        </section>
        <section className="performance-panel">
          Performance
        </section>
        <PadsPanel />
        <section className="bottom-panel">
          <span className="emu-logo">E-mu Systems, Inc.</span>
        </section>
      </section>
    </div>
  );

}

export default App;
