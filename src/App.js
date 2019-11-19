import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Main from './components/MainRoute';
import STORE from './components/dummy-store';
import Folder from './components/FolderRoute';
import Note from './components/NoteRoute';
//import Item from './components/Item'

function App() {
  return (
    <div className="App">
      <Link to='/main'>
        <header>
          <h1>Noteful</h1>
        </header>
      </Link>
      <Switch>
        <Route path='/main' render={() => <Main store={STORE} />} />
        <Route path='/folder' render={(folderNum) => <Folder store={STORE} folder={STORE.folders[folderNum]} />} />
        <Route path='/note' render={(noteNum) => <Note note={STORE.notes[noteNum]} />} />
      </Switch>
      {/*<header>
            <h1>Noteful</h1>
          </header>
          <Note note={STORE.notes[0]} />
        <Folder store={STORE} folder={STORE.folders[]} />
        */}
    </div>
  );
}

export default App;
