import React from 'react';
import Sidebar from './Sidebar';
//import Board from './Board';
import Item from './Item';
import STORE from './dummy-store';
//this is a route
//name, id, folderName (maybe pass list of folders in), contents
class NoteRoute extends React.Component{
 
    render(){
        const {noteNum} = this.props.match.params;
        const note = STORE.notes[noteNum];
        return (
            <div className="Note">
                <Sidebar folders={[{"name" : "Go back"}]} /> 
                <div className="extendedNote" >
                    <Item name={note.name} modified={note.modified} noteNum={noteNum} />
                    <p>{note.content}</p>
                </div>
            </div>
        )
    }

}

export default NoteRoute;