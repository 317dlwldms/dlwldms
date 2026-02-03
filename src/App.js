import './App.css';
import Footer from 'components/common/Footer/Footer';
import Home from 'pages/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Project from 'pages/Project/Project';
import ScrollToTop from 'components/common/ScrollToTop';

function App() {
  return (
    <BrowserRouter basename="/">

    <div className="App">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:slug" element={<Project />} />
      </Routes>
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
