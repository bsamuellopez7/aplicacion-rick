import imagen1 from '../src/img/rick-morty.png'
import { Fragment, useState } from 'react';
import './App.css';
import Characters from './Components/Characters';

function App() {
  const [characters, setCharacters] = useState(null);
  const reqApi = async () =>{
    const api = await fetch ("https://rickandmortyapi.com/api/character")
    const characterApi = await api.json();
    setCharacters(characterApi.results);
    console.log(characters);
  };
  return (
   <div className="App">
    <header className="App-header">
      <h1 className='title'>Rick & Morty</h1>
      {characters ? (
      <Characters characters={characters}/>
      ):(
        <>
      <img src={imagen1} alt='Rick & Morty' className='img-home'/>
      <button onClick={reqApi} className='btn-search'>
        Buscar Personajes
      </button>
      </>
      )}
    </header>
   </div>
  );
}

export default App;
