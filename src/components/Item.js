import React from 'react';
import { Link } from 'react-router-dom';


//take Name, id, and modified
//route to Note.js 

export default function Item(props){

    const {name, modified, itemNum} = props;
    const day = new Date(modified).toDateString();
    const link = '/note/' + itemNum;
    
    return(
        <Link to={link}>
        <div className="item">
            <h3>{name}</h3>
            <p>Date modified on {day}</p>
        </div>
        </Link>
    )
}