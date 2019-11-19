import React from 'react';
import Sidebar from './Sidebar';
import Board from './Board';
import STORE from './dummy-store';

class FolderRoute extends React.Component {
    
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