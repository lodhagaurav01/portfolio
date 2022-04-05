import Navbar from './components/Navbar';
// import './App.css';

import Me from './components/Me';
import Overview from './components/Overview';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Skills from './components/Skills';


function App() {
  return (

    <div className='container ' style={{backgroundColor:'#000033'}}>
   
    <Navbar/>
    <Me/>
    <Overview/> 
    <Skills/>
    <Projects/> 
    <Contact/> 
    </div>
   
  );
}

export default App;
