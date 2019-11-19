import React from 'react';
import Item from './Item';


//store, folder thats optional
//pass key to Item
export default function Board(props){
    const folders = props.folders; //array of folders
    const notes= props.notes;   //array of notes

    //map thru folders, check for each individual id and then filter the notes based off the Id you get
    /*const itemList = folders.map(function(folder){
        let list =  notes.filter(function(note){
             return note.folderId === folder.id;
        });
        return (<Item name={list.name} modified={list.modified} />)
    });*/

    console.log(folders);
    console.log(notes)
    const itemList = notes.filter(function(note){
        folders.forEach(function(folder){
            console.log(folder.id);
            console.log(note.folderId);
            if( note.folderId === folder.id){
                console.log('yes');
                return note;
            }
        });
    })

    console.log(itemList);


    //<Item noteName nodeModified>
        return (
        <div className="board">
            {itemList}
        </div>
    );
}