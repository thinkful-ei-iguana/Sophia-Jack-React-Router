import React from 'react';
import Item from './Item';


//store, folder thats optional
//pass key to Item
export default function Board(props){
    const folderid = props.folderId; //array of folders
    const notes= props.notes;   //array of notes
    let itemList = [];
    if(folderid === undefined){
        itemList = notes.map(function(item){
            return(<Item name={item.name} modified={item.modified} />)
        })
    } else {
        itemList = notes.map(function(item){
            //console.log(item.folderId);
            if(item.folderId === folderid){
                return(<Item name={item.name} modified={item.modified} />)
            }
            return null;
        })
    }

        return (
        <div className="board">
            {itemList}
        </div>
    );
}