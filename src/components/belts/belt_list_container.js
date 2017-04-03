import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBelts, selectBelt, fetchTechniques } from '../../actions/index';
import { Icon, Loader } from 'semantic-ui-react';

import BeltList from './belt_list';
import TechniqueList from '../techniques/technique_list';

class BeltListContainer extends Component {
    componentWillMount() {
        if(this.props.belts.length === 0) {
            this.props.fetchBelts();
        }

        // Refetch techniques every time BeltListContainer is loaded to maintain updated techniques
        this.props.fetchTechniques();
    }

    render() {
        const { belts, selectBelt, selectedBelt, techniques} = this.props;

        return (
            <div className="flexwrap">
                {(belts) 
                ? <BeltList belts={belts} selectBelt={selectBelt} /> 
                : <Loader active inline='centered' />}
                <div>
                    {(selectedBelt) 
                    ? <TechniqueList techniques={techniques} selectedBelt={selectedBelt} /> 
                    : ''}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        belts: state.belts,
        selectedBelt: state.selectedBelt,
        techniques: state.techniques,
    };
};

export default connect(mapStateToProps, { fetchBelts, selectBelt, fetchTechniques })(BeltListContainer);