import React, { Component } from 'react';
import Youtube from 'react-youtube';

import { Modal } from 'semantic-ui-react';

export default class TechniqueVideoModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            modalOpen: false,
        };
    }
    
    handleOpen = (event) => {
        this.setState({
            modalOpen: true,
        })
    }

    handleClose = (event) => {
        this.setState({
            modalOpen: false,
        })
    }

    render() {
        const { selectedTechnique } = this.props;
        return (    
            <Modal 
                trigger={<div onClick={this.handleOpen}>Video</div> }
                open={this.state.modalOpen}
                onClose={this.handleClose}
                closeIcon='close'
            >
                <Modal.Header>{selectedTechnique.techName}</Modal.Header>
                <Modal.Content image>
                    <Youtube videoId={selectedTechnique.youtubeId} />
                </Modal.Content>
            </Modal>
        );
    }
}