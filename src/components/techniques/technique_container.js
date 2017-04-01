import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTechniques, getSelectedTechniqueData } from '../../actions/index';

import Technique from './technique';

class TechniqueContainer extends Component {
    componentWillMount() {
        // Fetch techniques if this component didn't already have them becase user accessed component directly via url
        if(this.props.techniques.length === 0) {
            this.props.fetchTechniques()
            .then((response)=>{
                return this.props.getSelectedTechniqueData(this.props.match.params.techId, this.props.techniques);
            })
            .catch(error => console.error(error));
        } else {
            this.props.getSelectedTechniqueData(this.props.match.params.techId, this.props.techniques);
        }
    }

    validateTechId (match) {
        if(match.params.techId >= 0 && match.params.techId <= this.props.techniques.length) {
            return true;
        }
    }

    render() {
        const { match, selectedTechnique } = this.props;

        return (
            <div>
                {(this.validateTechId(match) && selectedTechnique) 
                ? <Technique selectedTechnique={selectedTechnique} /> 
                : "Spinner"}
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

export default connect(mapStateToProps, { fetchTechniques, getSelectedTechniqueData })(TechniqueContainer);