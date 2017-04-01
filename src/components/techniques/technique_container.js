import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTechniques, getSelectedTechniqueData } from '../../actions/index';

import Technique from './technique';

class TechniqueContainer extends Component {
    componentWillMount() {
        // Fetch techniques so they will be available if this component 
        // is navigated to directly via url instead of from BeltList
        console.log('undefined?', this.props.techniques);
        if(this.props.techniques.length === 0) {
            this.props.fetchTechniques()
            .then((data) => {
                this.getCurrentTechnique();
            });
            //.then this.getCurrentTechnique(); ?????
        }else
            this.getCurrentTechnique();
    }

    /*

    fetchAllTechniques() {
        return new Promise((resolve, reject) => {
            
            resolve(this.props.fetchTechniques()))
           // .catch(error => console.error(error))
        }).then(() => getCurrentTechnique() )

      //  return promise;
    }
    */

    getCurrentTechnique() {
        // Fire off action to get currently selected technique
        console.log(this.props.match.params.techId, this.props.techniques);
        this.props.getSelectedTechniqueData(this.props.match.params.techId, this.props.techniques);
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