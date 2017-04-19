import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Header, Icon, Image, Modal, Form, Input } from 'semantic-ui-react';

class EditTechniqueModal extends Component {
    render() {
        console.log(this.props.selectedTechnique);
        return (    
            <Modal trigger={<div>Edit</div>}>
            <Modal.Header>Profile Picture</Modal.Header>
            <Modal.Content image>
            <Image wrapped size='medium' src='/assets/images/wireframe/image.png' />
            <Modal.Description>
                <Header>Modal Header</Header>
                <Form>
                    <Form.Field>
                    <label>Technique Name:</label>
                    <Input placeholder={this.props.selectedTechnique} />
                    </Form.Field>
                    <Form.Field>
                    <label>Technique Description:</label>
                    <Input placeholder='Last Name' />
                    </Form.Field>
                    <Button type='submit'>Submit</Button>
                </Form>            
            </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
            <Button primary>
                Proceed <Icon name='right chevron' />
            </Button>
            </Modal.Actions>
        </Modal>
        );
    }
}

const mapStateToProps = state => {
    return {
        selectedTechnique: state.selectedTechnique,
    };
};

export default connect(mapStateToProps)(EditTechniqueModal);