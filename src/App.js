import "./common/reset.css";

import PageWrapper from "./components/PageWrapper";
import NavBar from "./view/NavBar";
import Header from "./view/Header";
import MainView from "./view/MainView";
import Footer from "./view/Footer";
function App() {
  return (
    <div className="App">
      <NavBar />
      <PageWrapper>
        <Header />
        <MainView />
        <Footer />
      </PageWrapper>
    </div>
  );
}

export default App;
