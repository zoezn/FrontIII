import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import './App.css';
import Header from './components/Header';
import PersonalInformation from './components/PersonalInformation';
import {Info} from './components/Data';
import Institutos from './components/Institutos';
import About from "./pages/about/About";
import Home from "./pages/home/Home";
import Experience from "./pages/experience/Experience";

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience/>} />
        {/* <Route path="/movies" element={<Movies/>} />
        <Route path="*" element={<Error/>} /> */}
      </Routes>
    </BrowserRouter>
   /*  <div className="App">
      <Header/>
      <PersonalInformation
        name={Info.personalData.name}
        nationality={Info.personalData.nationality}
        age={Info.personalData.age}
        occupation={Info.personalData.occupation}
        avatar={Info.personalData.avatar}
        />
      <Institutos 
        institutos={Info.education}
        />
    </div> */
  );
}

export default App;
