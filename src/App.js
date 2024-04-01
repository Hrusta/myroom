import "./App.css";
import TaskSection from "./components/taskSection/TaskSection.js";
import PictureCom from "./components/pictureSection/PictureCom.js";
import SoundCom from "./components/soundSection/SoundCom.js";

function App() {
  return (
    <div>
      <div className="container">
        <div className="box">
          <TaskSection />
        </div>
        <div className="box" id="box2">
          <PictureCom />
        </div>
        <div className="box" id="box3">
          <SoundCom />
        </div>
      </div>
    </div>
  );
}

export default App;
