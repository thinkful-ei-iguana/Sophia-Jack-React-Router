import React from 'react';
import Item from './Item';


//store, folder thats optional
//pass key to Item
export default function Board(props) {
    const folderid = props.folderId; //array of folders
    const notes = props.notes;   //array of notes
    let itemList = [];
    let itemNum = -1;
    if (folderid === undefined) {
        itemList = notes.map(function (item) {
            itemNum++;
            return (<Item name={item.name} modified={item.modified} itemNum={itemNum} />);
        })
    } else {
        itemList = notes.map(function (item) {
            itemNum++;
            if (item.folderId === folderid) {
                return (<Item name={item.name} modified={item.modified} itemNum={itemNum} />);
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