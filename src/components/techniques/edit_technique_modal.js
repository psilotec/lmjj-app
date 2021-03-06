import React, { Component } from 'react';
import { connect } from 'react-redux';

import CodeMirror from 'react-codemirror';
import 'codemirror/mode/markdown/markdown';
import 'codemirror/lib/codemirror.css';
import { getSelectedTechniqueData } from '../../actions/index';
import { Button, Image, Modal, Form, Input } from 'semantic-ui-react';

class EditTechniqueModal extends Component {
    constructor(props) {
        super(props);

        // State to keep track of user input before submit
        this.state = {
            modalOpen: false,
            nameChanges: '',
            youtubeIdChanges: '',
            descriptionChanges: '',
        };
    }

    componentWillMount() {
        this.resetFields();
    }
    
    handleOpen = (event) => {
        this.resetFields();

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
        this.props.editTechnique(
            this.props.selectedTechnique.techId, 
            this.state.descriptionChanges,
            this.state.nameChanges,
            this.state.youtubeIdChanges,
        ).catch(function(error) {console.log(error)})
        .then(this.handleClose())
        .then(this.props.getSelectedTechniqueData(this.props.techId, this.props.techniques));

        // Error handling        
    }

    onInputChange = (event, inputId) => {
        let stateToChange = `${inputId}Changes`;
        
        // Store input value in this.state
        this.setState({
            [stateToChange]: event.target.value
        });
    }

    onEditorChange(content) {
        // Store content in this.state
        this.setState({
            descriptionChanges: content
        });
    }

    resetFields = () => {
        this.setState(prevState => ({
            nameChanges: this.props.selectedTechnique.techName,
            youtubeIdChanges: this.props.selectedTechnique.youtubeId,
            descriptionChanges: this.props.selectedTechnique.techDesc,
        }));
    }

    componentWillUnmount() {
        this.resetFields();
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
                                    defaultValue={selectedTechnique.techName}
                                    onChange={(event) => this.onInputChange(event, "name")} />
                            </Form.Field>
                            <Form.Field>
                                <label>YouTube ID:</label>
                                <Input 
                                    defaultValue={selectedTechnique.youtubeId}
                                    onChange={(event) => this.onInputChange(event, "youtubeId")} />                                
                            </Form.Field>
                            <Form.Field>
                                <label>Technique Description:</label>
                                <CodeMirror
                                    value={selectedTechnique.techDesc}
                                    options={{mode: 'markdown', lineNumbers: true}}
                                    onChange={this.onEditorChange.bind(this)}
                                    className={"codeMirrorTechDesc"} />
                            </Form.Field>
                        </Form>            
                    </Modal.Description>
                {(this.state.youtubeIdChanges !== '') ? 
                    <Image className={"techVidPreview"} wrapped size='medium' src={`https://i.ytimg.com/vi/${this.state.youtubeIdChanges}/hqdefault.jpg`} /> :
                    ''}
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


export default EditTechniqueModal = connect(null, { getSelectedTechniqueData })(EditTechniqueModal);