import React from 'react';


//take Name, id, and modified
//route to Note.js 

export default function Item(props){

    const {name, id, modified} = props;
    const day = new Date(modified).toDateString()
    
    return(
        <div className="item">
            <h3>{name}</h3>
            <p>Date modified on {day}</p>
        </div>
    )
}