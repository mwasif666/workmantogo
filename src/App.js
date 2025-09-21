import React, { Component, Suspense } from "react";
import routes from "../src/routes";
import { Route, Routes } from "react-router-dom";

// Import global CSS
import "./App.css";
import "./assets/css/pe-icon-7.css";
import "./assets/css/materialdesignicons.min.css";
import "./assets/scss/themes.scss";

import Footer from "./component/Footer/Footer";
import NavbarPage from "./component/Navbar/NavBar";
import ScrollToTop from "./Scroll";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <ScrollToTop />
        {/* Navbar sab pages par common */}
        <NavbarPage />

        <Routes>
          {routes.map((route, idx) => (
            <Route path={route.path} element={route.component} key={idx} />
          ))}
        </Routes>

        {/* Footer bhi sab pages par common (agar chahiye to) */}
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
