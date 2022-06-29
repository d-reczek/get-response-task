import "./common/reset.css";

import PageWrapper from "./components/PageWrapper";
import NavBar from "./view/NavBar";
import Header from "./view/Header";
import MainView from "./view/MainView";
import Footer from "./view/Footer";
import WeekContexProvider from "./components/WeekContext";
function App() {
  return (
    <WeekContexProvider>
      <div className="App">
        <NavBar />
        <PageWrapper>
          <Header />
          <MainView />
          <Footer />
        </PageWrapper>
      </div>
    </WeekContexProvider>
  );
}

export default App;
