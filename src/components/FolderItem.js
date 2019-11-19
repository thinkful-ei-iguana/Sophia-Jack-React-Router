import React from 'react';
import { Link } from 'react-router-dom';

export default function FolderItem(props){
    const name = props.name;
    //has to be a route to FolderRoute
    return(
        <Link to='' >
            <div className='folder-item'>
                <h3>{name}</h3>
            </div>
        </Link>
    )
}