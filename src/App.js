import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Main from './components/MainRoute';
import STORE from './components/dummy-store';
import Folder from './components/FolderRoute';
import Note from './components/NoteRoute';
//import Item from './components/Item'
//<Route path='/folder/:folderNum' render={(folderNum) => <Folder store={STORE} folder={STORE.folders[folderNum]} />} />
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
        <Route path='/folder/:folderNum' component={Folder} />
        <Route path='/note' render={(noteNum) => <Note note={STORE.notes[noteNum]} />} />
      </Switch>
    </div>
  );
}

export default App;
