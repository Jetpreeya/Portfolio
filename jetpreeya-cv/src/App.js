import './App.css';
import Navbar from './components/navbar/navbar'
import About from './components/about/about'
import Contract from './components/contract/contract';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <About/>
      <Contract/>
    </div>
  );
}

export default App;
