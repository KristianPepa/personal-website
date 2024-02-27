import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";

import Home from "./Pages/Home/Home";
import Projects from "./Pages/Projects/Projects";
import Experience from "./Pages/Experience/Experience";
import Achievements from "./Pages/Achievements/Achievements";
import Contact from "./Pages/Contact/Contact";
import LayoutContainer from "./Pages/Layout/LayoutContainer";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <LayoutContainer>
                <Outlet />
              </LayoutContainer>
            }
          >
            <Route index element={<Home />} />
            <Route path="projects" element={<Projects />} />
            <Route path="experience" element={<Experience />} />
            <Route path="achievements" element={<Achievements />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
