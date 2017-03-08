import React from 'react';

const BeltList = ({renderBeltList}) => {
    return (
        <div className="beltlist-flex">
            {renderBeltList()}
        </div>
    );
}

export default BeltList;

//PropTypes
//belts, onBeltClick, renderBeltList