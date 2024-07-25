import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Image from "./pages/Image";
import Saved from "./pages/Saved";
import Testing from "./components/Testing"
import Search from "./pages/Search";
import "./App.css";
import Container from "./layouts/Container";
import Profile from "./pages/Profile";

function App() {




  return (
    <section className="relative">
      <div className="text-base relative ">
        <Router>
          {" "}
          <Navbar />
          <Container>
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/image-page"  element={<Image />} />
              <Route path="/saved-page"  element={<Saved />} />
              <Route path="/search-page"  element={<Search/>} />
              <Route path="/upload-page"  element={<Testing/>} />
              <Route path="/profile-page" element={<Profile />} />
            </Routes>{" "}
          </Container>
        </Router>
      </div>
    </section>
  );
}
export default App;
