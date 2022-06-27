import "./common/reset.css";

import PageWrapper from "./components/PageWrapper";
import NavBar from "./view/NavBar";
import Header from "./view/Header";
function App() {
  return (
    <div className="App">
      <NavBar />
      <PageWrapper>
        <Header />
      </PageWrapper>
    </div>
  );
}

export default App;
