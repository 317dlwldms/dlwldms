import './App.css';
import Header from 'components/common/Header/Header';
import Footer from 'components/common/Footer/Footer';
import Home from 'pages/Home/Home';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className="background"></div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
