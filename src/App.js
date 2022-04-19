import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Naviga from './Components/Naviga';
import { Data } from './Movie/Data';
import Description from './Movie/Description';
import Mlist from './Movie/Mlist';

function App() {
  const [movies,setMovies]=useState(Data);

  return (
    <div className="App">
      <Naviga />
      <Routes>
        <Route path="/Home" element={<Home/> } />
        <Route path="/Movies/Description/:id" element={<Description movies={movies}/> } />
        <Route path="/Movies" element={<Mlist movies={movies} /> } />

      </Routes>
    </div>
  );
}

export default App;
