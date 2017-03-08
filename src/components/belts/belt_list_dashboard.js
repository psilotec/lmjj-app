import React, { Component } from 'react';

import BeltList from './belt_list';

class BeltListDashboard extends Component {
    renderBeltList() {
        return "BeltList";
    }

    render() {
        return(
            <div className="flexwrap">
                <BeltList renderBeltList={this.renderBeltList} />
                <div>TechniqueList</div>
            </div>
        );
    }
}

export default BeltListDashboard;