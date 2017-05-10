import React, { Component } from 'react';
import { Button, Image, Modal, Form, Input } from 'semantic-ui-react';

class EditTechniqueModal extends Component {
    constructor(props) {
        super(props);

        // State to keep track of user input before submit
        this.state = {
            modalOpen: false,
            nameChanges: '',
            imageUrlChanges: '',
            descriptionChanges: '',
        };
    }

    componentWillMount() {
        this.resetFields();
    }
    
    handleOpen = (event) => {
        this.setState({
            modalOpen: true,
        })
    }

    handleClose = (event) => {
        this.resetFields();

        this.setState({
            modalOpen: false,
        })
    }

    handleSave = (event) => {
        // Fire off change data in firebase action
        this.props.editTechnique(this.props.selectedTechnique.techId, this.state.descriptionChanges)
        .then(this.handleClose());

        // Error handling

        // Refetch data
        
    }

    onInputChange = (event, inputId) => {
        let stateToChange = `${inputId}Changes`;
        
        // Store input value in this.state
        this.setState({
            [stateToChange]: event.target.value
        });
    }

    resetFields = () => {
        this.setState({
            nameChanges: this.props.selectedTechnique.techName,
            imageUrlChanges: this.props.selectedTechnique.techImgUrl,
            descriptionChanges: this.props.selectedTechnique.techDesc,
        });
    }

    render() {
        const { selectedTechnique } = this.props;
        return (    
            <Modal 
                trigger={<div onClick={this.handleOpen}>Edit</div>}
                open={this.state.modalOpen}
                onClose={this.handleClose}
            >
                <Modal.Header>Edit Technique #{selectedTechnique.techId}</Modal.Header>
                <Modal.Content image>
                    <Modal.Description>
                        <Form>
                            <Form.Field>
                                <label>Technique Name:</label>
                                <Input 
                                    defaultValue={this.state.nameChanges}
                                    onChange={(event) => this.onInputChange(event, "name")} />
                            </Form.Field>
                            <Form.Field>
                                <label>Image URL:</label>
                                <Input 
                                    defaultValue={this.state.nameChanges}
                                    onChange={(event) => this.onInputChange(event, "imageUrl")} />                                
                            </Form.Field>
                            <Form.Field>
                                <label>Technique Description:</label>
                                <Input 
                                    defaultValue={selectedTechnique.techDesc}
                                    onChange={(event) => this.onInputChange(event, "description")} />                                
                            </Form.Field>
                        </Form>            
                    </Modal.Description>
                <Image wrapped size='small' src='/assets/images/wireframe/image.png' />
                </Modal.Content>
                <Modal.Actions>
                    <Button onClick={this.handleClose}>
                        Cancel
                    </Button>
                    <Button onClick={this.handleSave} primary>
                        Save
                    </Button>
                </Modal.Actions>
            </Modal>
        );
    }
}

export default EditTechniqueModal;