import "./index.css"
import './App.css';
import Home from "./Routes/Home";
import About from "./Routes/About";
import Contact from "./Routes/Contact";
import Project from "./Routes/Project";
import {Routes,Route} from "react-router-dom";

function App() {
  return (
    <div >
    
   <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/about" element={<About/>}></Route>
    <Route path="/Contact" element={<Contact/>}></Route>
    <Route path="/Project" element={<Project/>}></Route>
   </Routes>
   
    </div>
  );
}

export default App;
