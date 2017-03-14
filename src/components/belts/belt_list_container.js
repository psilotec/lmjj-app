import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';
import { fetchBelts, selectBelt } from '../../actions/index';
import { bindActionCreators } from 'redux';

import BeltList from './belt_list';

class BeltListContainer extends Component {
    componentWillMount() {
        this.props.fetchBelts();
    }

    renderBeltList(belts) {
        return belts.map(belt => {
            return (
                <div className="item" key={belt.beltId}>
                    <Button color={belt.beltDisplay} key={belt.beltId}>
                        {belt.beltName}
                    </Button>
                </div>
            )
        })
    }

    render() {
        const {belts} = this.props;

        return(
            <div className="flexwrap">
                {(belts) ? <BeltList renderBeltList={this.renderBeltList} belts={belts} /> : ''}
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

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ 
        fetchBelts: fetchBelts,
        selectBelt: selectBelt, 
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BeltListContainer);