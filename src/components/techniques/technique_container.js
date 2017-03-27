import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTechniques } from '../../actions/index';

import Technique from './technique';

class TechniqueContainer extends Component {
    componentWillMount() {
        // Fetch techniques so they will be available if this component 
        // is navigated to directly instead of from BeltList
        if(this.props.techniques.length === 0) {
            this.props.fetchTechniques();
        }
    }

    validateTechId (match) {
        if(match.params.techId > 0 && match.params.techId < this.props.techniques.length) {
            return true;
        }
    }

    render() {
        const { match, techniques } = this.props;

        return (
            <div>
                {(this.validateTechId(match)) 
                ? <Technique techId={match.params.techId} techniques={techniques} /> 
                : "Show spinner: please ensure you have selected an existing technique"}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        techniques: state.techniques,
    };
};

export default connect(mapStateToProps, { fetchTechniques })(TechniqueContainer);