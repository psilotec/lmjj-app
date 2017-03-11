import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchBelts } from '../../actions/index';

import BeltList from './belt_list';

class BeltListContainer extends Component {
    componentWillMount() {
        this.props.fetchBelts();
    }

    renderBeltList() {
        return "Beltlist data loaded";
    }

    render() {
        const {belts} = this.props;
        console.log(belts);

        return(
            <div className="flexwrap">
                {(belts) ? <BeltList renderBeltList={this.renderBeltList} /> : ''}
                <div>TechniqueList</div>
            </div>
        );
    }
}

const mapStateToProps = state => {
  return { 
    belts: state.belts,
  };
};

export default connect(mapStateToProps, { fetchBelts })(BeltListContainer);