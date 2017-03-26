import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTechniques } from '../../actions/index';


class TechniqueContainer extends Component {
    componentWillMount() {
        // Fetch techniques so they will be available if this component 
        // is navigated to directly instead of from BeltList
        if(this.props.techniques.length === 0) {
            this.props.fetchTechniques();
        }
    }

    render() {
        const { match, techniques } = this.props;
        console.log(techniques);

        return (
            <div>
                {match.params.techId}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        techniques: state.techniques,
    };
};

export default connect(mapStateToProps, { fetchTechniques })(TechniqueContainer);