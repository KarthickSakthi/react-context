
import { useState } from 'react';
import './App.css';
import MovieList from './MovieList';
import { MovieProvider } from './MovieContext';
import AddMovie from './AddMovie';
import Nav from './Nav';
function App() {
  return (
    <MovieProvider>
    <div className="App">
      <Nav/>
      <AddMovie/>
      <MovieList/>
    </div>
    </MovieProvider>
  );
}

export default App;
