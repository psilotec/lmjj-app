import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBelts, selectBelt } from '../../actions/index';

import BeltList from './belt_list';
import TechniqueList from '../techniques/technique_list';

class BeltListContainer extends Component {
    componentWillMount() {
        this.props.fetchBelts();
    }

    render() {
        const { belts, selectBelt, selectedBelt } = this.props;
        const techniques =  [{
            "techId": "0000",
            "techName": "First White Belt Technique",
            "techBelt": "white",
            "techDesc": "This is the first technique in white belt."
        },
            {
            "techId": "0001",
            "techName": "Second White Belt Technique",
            "techBelt": "white",
            "techDesc": "This is the second technique in white belt."
        }];

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
    };
};

export default connect(mapStateToProps, { fetchBelts, selectBelt })(BeltListContainer);