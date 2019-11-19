import React from 'react';
import FolderItem from './FolderItem';

export default function Sidebar(props){
    const folders = props.folders;

    let folderNum = -1;
    let folderList = folders.map(function(folder){
        folderNum++;
        return(<FolderItem name={folder.name} folderNum={folderNum} />)
    })

    


    return (
        <div className="sideBar">
            {folderList}
        </div>
    );
}