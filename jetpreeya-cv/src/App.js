import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/navbar/navbar'
import About from './components/about/about'
import Contract from './components/contract/contract';
import AboutMe from './components/aboutMe/aboutMe';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <About/>
      <Routes>
      <Route path="/Contract" element={<Contract/>} />
      <Route path="/AboutMe" element={<AboutMe />} />
      </Routes>
    </div>
  );
}

export default App;
