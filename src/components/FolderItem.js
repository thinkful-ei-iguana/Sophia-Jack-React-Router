import React from 'react';
import { Link } from 'react-router-dom';

export default function FolderItem(props){
    const name = props.name;
    const link = '/folder/' + props.folderNum;
    //console.log('link is ' + link);
    //has to be a route to FolderRoute
    return(
        <Link to={link} >
            <div className='folder-item'>
                <h3>{name}</h3>
            </div>
        </Link>
    )
}