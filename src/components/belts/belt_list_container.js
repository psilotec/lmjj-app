import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';
import { fetchBelts } from '../../actions/index';

import BeltList from './belt_list';

class BeltListContainer extends Component {
    componentWillMount() {
        this.props.fetchBelts();
    }

    renderBeltList(belts) {
        return belts.map(belt => {
            return (
                <div className="item" key={belt.beltId}>
                    <Button color={belt.beltDisplay} key={belt.beltId} >
                        {belt.beltName}
                    </Button>
                </div>
            )
        })
    }

    render() {
        const {belts} = this.props;
        console.log(belts);

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

export default connect(mapStateToProps, { fetchBelts })(BeltListContainer);