import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import PracticalExperience from "./components/PracticalExperience";
import "./styles/App.css";

function App() {
    return (
        <div className="app">
            <h1>CV Application</h1>
            <GeneralInfo />
            <Education />
            <PracticalExperience />
        </div>
    );
}

export default App;
