import "./App.css";
import PageWrapper from "./components/PageWrapper";
import NavBar from "./view/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <PageWrapper>
        <div style={{ height: "100vh" }}>conte</div>
      </PageWrapper>
    </div>
  );
}

export default App;
