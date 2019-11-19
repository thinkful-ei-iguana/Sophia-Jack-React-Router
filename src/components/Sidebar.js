import React from 'react';
import FolderItem from './FolderItem';

export default function Sidebar(props){
    const folders = props.folders;

    let folderList = folders.map(function(folder){
        return(<FolderItem name={folder.name} />)
    })

    


    return (
        <div className="sideBar">
            {folderList}
        </div>
    );
}