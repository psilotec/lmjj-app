import React, { Component } from 'react';

import BeltList from './belt_list';

class BeltListDashboard extends Component {
    renderBeltList() {
        return "BeltList";
    }

    render() {
        return(
            <div className="beltlist-flexwrap">
                <BeltList renderBeltList={this.renderBeltList} />
                TechniqueList
            </div>
        );
    }
}

export default BeltListDashboard;