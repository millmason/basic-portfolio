import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/projects" element={<Projects />}/>

      </Routes>
    </div>
  );
}

export default App;
