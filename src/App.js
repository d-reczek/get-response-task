import "./common/reset.css";
import PageWrapper from "./components/PageWrapper";
import NavBar from "./view/NavBar";
import ProgressBar from "./view/ProgressBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <PageWrapper>
        <div>
          <ProgressBar />
        </div>
      </PageWrapper>
    </div>
  );
}

export default App;
