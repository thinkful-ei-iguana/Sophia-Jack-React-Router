import React from 'react';
import Main from './components/MainRoute';
import STORE from './components/dummy-store';
//import Item from './components/Item'

function App() {
  return (
    <div className="App">
      <header>
        <h1>Noteful</h1>{/*make this a route later*/}
      </header>
      <Main store={STORE}/>{/*make this a route later*/}
    </div>
  );
}

export default App;
