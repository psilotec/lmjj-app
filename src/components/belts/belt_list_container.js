import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBelts, selectBelt, fetchTechniques } from '../../actions/index';

import BeltList from './belt_list';
import TechniqueList from '../techniques/technique_list';

class BeltListContainer extends Component {
    componentWillMount() {
        this.props.fetchBelts();
        this.props.fetchTechniques();
    }

    render() {
        const { belts, selectBelt, selectedBelt, techniques} = this.props;

        return (
            <div className="flexwrap">
                {(belts) ? <BeltList belts={belts} selectBelt={selectBelt} /> : ''}
                <div>{(selectedBelt) ? <TechniqueList techniques={techniques} selectTechnique={""} /> : ''}</div>
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