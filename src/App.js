import React from 'react';
import NavBar from './components/NavBar/NavBar';
import './App.css'
import Banner from './components/Banner/Banner';
import RowPost from './components/RowPost/RowPost';


function App() {
  return (
    <div className="App">
     <NavBar/>
     <Banner/>
     <RowPost title='Originals'/>
     <RowPost title='Action' isSmall/>
     <RowPost title='Comedy' isSmall/>
     <RowPost title='Horror' isSmall/>
     <RowPost title='Documentary' isSmall/>
    </div>
  )
}

export default App;
