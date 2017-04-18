import { connect } from 'react-redux';
import { fetchTechniques, getSelectedTechniqueData, directionalNavigate } from '../actions/index';
import Technique from '../components/techniques/technique';

const mapStateToProps = (state, ownProps) => {
    return {
        techniques: state.techniques,
        selectedTechnique: state.selectedTechnique,
        techId: ownProps.match.params.techId,
    };
};

const mapDispatchToProps = {
    fetchTechniques,
    getSelectedTechniqueData,
    directionalNavigate,
};

const TechniqueContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Technique);

export default TechniqueContainer;