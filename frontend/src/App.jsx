
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./app/page/home/home"
import Head from './app/component/head/head';
import Bouton from './app/component/bouton/bouton';
import Footer from './app/component/footer/footer';

const App = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/" element={<Head />} /> */}
          {/* <Route path="/" element={<Footer />} /> */}
          {/* <Route path="/" element={<Bouton />} /> */}
        </Routes>
    </Router>
  );
}

export default App;