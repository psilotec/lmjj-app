import React, { Component } from 'react';
import TechniqueCard from './technique_card';
import { Loader, Icon } from 'semantic-ui-react';

export default class Technique extends Component {
    componentWillMount() {
        const { techniques, fetchTechniques, getSelectedTechniqueData, techId } = this.props;

        // Fetch techniques if this component didn't already have them because user accessed component directly via url
        if(techniques.length === 0) {
            fetchTechniques()
            .then((response)=> {
                return getSelectedTechniqueData(techId, this.props.techniques);
            })
            .catch(error => console.error(error));
        } else {
            getSelectedTechniqueData(techId, techniques);
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
        const { match, selectedTechnique, editTechnique, techniques } = this.props;
        return (
            <div>
                {(this.validateTechId(match) && selectedTechnique) 
                ? <div className="techniquecontainer-flex">
                    <Icon className="directionalnav-flex" link name='chevron left' size='huge' onClick={this.handleNavigationClick.bind(this, "previous")}/> 
                    <TechniqueCard selectedTechnique={selectedTechnique} editTechnique={editTechnique} techniques={techniques} techId={selectedTechnique.techId} />
                    <Icon className="directionalnav-flex" link name='chevron right' size='huge' onClick={this.handleNavigationClick.bind(this, "next")}/> 
                  </div>
                : <Loader active inline='centered' />}
            </div>
        );
    }
}