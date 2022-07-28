import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Home from './pages/Home';
import Projects from './pages/Projects';
import Experience from './pages/Experience'; 
import Navbar from "./components/Navbar";
import ProjectDisplay from "./pages/ProjectDisplay";


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element ={<Home/>}/>
          <Route path="/projects" element ={<Projects/>}/>
          <Route path="/experience" element ={<Experience/>}/>
          <Route path="/project/:id" element={<ProjectDisplay/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
