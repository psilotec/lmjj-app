import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTechniques, getSelectedTechniqueData, directionalNavigate } from '../../actions/index';
import { Loader, Icon } from 'semantic-ui-react';

import Technique from './technique';

class TechniqueContainer extends Component {
    componentWillMount() {
        const { techniques, fetchTechniques, getSelectedTechniqueData, match } = this.props;

        // Fetch techniques if this component didn't already have them becase user accessed component directly via url
        if(techniques.length === 0) {
            fetchTechniques()
            .then((response)=>{
                return getSelectedTechniqueData(match.params.techId, this.props.techniques);
            })
            .catch(error => console.error(error));
        } else {
            getSelectedTechniqueData(match.params.techId, techniques);
        }
    }

    handleNavigationClick(direction) {
        const { directionalNavigate, selectedTechnique, techniques } = this.props;

        return directionalNavigate(selectedTechnique.techId, techniques, direction);
    }

    validateTechId(match) {
        if(match.params.techId >= 0 && match.params.techId <= this.props.techniques.length) {
            return true;
        }
    }

    render() {
        const { match, selectedTechnique } = this.props;

        return (
            <div>
                {(this.validateTechId(match) && selectedTechnique) 
                ? <div className="techniquecontainer-flex">
                    <Icon className="directionalnav-flex" link name='chevron left' size='huge' onClick={this.handleNavigationClick.bind(this, "previous")}/> 
                    <Technique selectedTechnique={selectedTechnique} handleNavigationClick={this.handleNavigationClick} />
                    <Icon className="directionalnav-flex" link name='chevron right' size='huge' onClick={this.handleNavigationClick.bind(this, "next")}/> 
                  </div>
                : <Loader active inline='centered' />}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        techniques: state.techniques,
        selectedTechnique: state.selectedTechnique,
    };
};

export default connect(mapStateToProps, { fetchTechniques, getSelectedTechniqueData, directionalNavigate })(TechniqueContainer);