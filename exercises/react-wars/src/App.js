import React from 'react';
import Timer from './Timer';
import CoinFlip from './CoinFlip';
import PokemonList from './PokemonList';

function App (){
    return (
      <div className="App">
        <Timer />
        <CoinFlip />
        <PokemonList />
      </div>
    );
}

export default App;
