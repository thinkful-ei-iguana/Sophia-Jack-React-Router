import React from 'react';
import Sidebar from './Sidebar';
import Board from './Board';

class Main extends React.Component{
    constructor(props){
        super(props);
        this.state = props.store;
        
    }

    

    render(){
        //console.log(this.state.folders, this.state.notes);
        return (
            <div className="Main">
                <Sidebar folders={this.state.folders} />
                <Board 
                notes={this.state.notes} 
                folderId={undefined}
                />
            </div>
        )
    }

}

export default Main;

