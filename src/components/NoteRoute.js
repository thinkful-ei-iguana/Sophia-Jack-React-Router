import React from 'react';
import Sidebar from './Sidebar';
//import Board from './Board';
import Item from './Item';
//this is a route
//name, id, folderName (maybe pass list of folders in), contents
class NoteRoute extends React.Component{
    constructor(props){
        super(props);
        this.state = props.note;
    }

    

    render(){
        return (
            <div className="Note">
                <header>
                    <h1>Noteful</h1>
                </header>
                <Sidebar folders={[{"name" : "Go back"}]} /> 
                <div className="extendedNote" >
                    <Item name={this.state.name} modified={this.state.modified} />
                    <p>{this.state.content}</p>
                </div>
            </div>
        )
    }

}

export default NoteRoute;