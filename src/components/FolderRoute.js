import React from 'react';
import Sidebar from './Sidebar';
import Board from './Board';
import STORE from './dummy-store';

class FolderRoute extends React.Component {
    /*constructor(props){
        super(props);
        this.state= props;
        //console.log(this.state.folder);
        //console.log(this.state.store.folders);
    }*/
    state= {
        state : null 
    }
    


    render(){
        const {folderNum} = this.props.match.params;
        return (
            <div className="Folder">
                <Sidebar folders={STORE.folders} />
                <Board 
                notes={STORE.notes} 
                folderId={STORE.folders[folderNum].id}
                />
            </div>
        )
    }
}

export default FolderRoute;