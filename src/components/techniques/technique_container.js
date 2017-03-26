import React, { Component } from 'react';


class TechniqueContainer extends Component {
    componentWillMount() {
        
    }

    render() {
        const { match } = this.props;

        return (
            <div>
                {match.params.techId}
            </div>
        );
    }
}

export default TechniqueContainer;