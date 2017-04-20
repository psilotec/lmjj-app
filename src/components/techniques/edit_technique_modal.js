import React, { Component } from 'react';
import { Button, Image, Modal, Form, Input } from 'semantic-ui-react';

class EditTechniqueModal extends Component {
    constructor(props) {
        super(props);

        // State to keep track of user input before submit
        this.state = {
            nameChanges: '',
            imageUrlChanges: '',
            descriptionChanges: '',
        };
    }

    componentWillMount() {
        this.setState({
            nameChanges: this.props.selectedTechnique.techName,
            imageUrlChanges: this.props.selectedTechnique.techImgUrl,
            descriptionChanges: this.props.selectedTechnique.techDesc,
        });
    }

    onInputChange = (event, inputId) => {
        let stateToChange = `${inputId}Changes`;
        
        // Store input value in this.state
        this.setState({
            [stateToChange]: event.target.value
        });
    }

    render() {
        const selectedTechnique = this.props.selectedTechnique;
        return (    
            <Modal trigger={<div>Edit</div>}>
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
                    <Button>
                        Cancel
                    </Button>
                    <Button primary>
                        Save
                    </Button>
                </Modal.Actions>
            </Modal>
        );
    }
}

export default EditTechniqueModal;