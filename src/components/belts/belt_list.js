import React from 'react';

const BeltList = ({renderBeltList, belts}) => {
    return (
        <div className="beltlist-flex">
            {renderBeltList(belts)}
        </div>
    );
}

export default BeltList;

//PropTypes
//belts, onBeltClick, renderBeltList