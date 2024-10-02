import logo from './logo.svg';
import './App.css';
import Nav from './Nav';
import Hero from './Hero';
import { useEffect ,useState} from 'react';
import Sub_Hero from './Sub_Hero';
function App() {
  return (
  <div>
    <center className='image'>
    <img  src='Eclipse.png'></img>
    </center>
    <Nav/>
    <Hero/>
    <Sub_Hero/>
  </div>


  );
}

export default App;
