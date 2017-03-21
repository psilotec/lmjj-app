import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBelts, selectBelt } from '../../actions/index';

import BeltList from './belt_list';

class BeltListContainer extends Component {
    componentWillMount() {
        this.props.fetchBelts();
    }

    render() {
        const { belts, selectBelt } = this.props;

        return (
            <div className="flexwrap">
                {(belts) ? <BeltList belts={belts} selectBelt={selectBelt} /> : ''}
                <div>TechniqueList</div>
                <div>{(this.props.selectedBelt) ? this.props.selectedBelt : "nothing"}</div>
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