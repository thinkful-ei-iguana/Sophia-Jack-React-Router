import React from 'react';
import Sidebar from './Sidebar';
import Board from './Board';

class FolderRoute extends React.Component {
    constructor(props){
        super(props);
        this.state= props;
        //console.log(this.state.folder);
        //console.log(this.state.store.folders);
    }


    render(){
        return (
            <div className="Folder">
                <Sidebar folders={this.state.store.folders} />
                <Board 
                notes={this.state.store.notes} 
                folderId={this.state.folder}
                />
            </div>
        )
    }
}

export default FolderRoute;