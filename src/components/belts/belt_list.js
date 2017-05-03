import React from 'react';
import { Button } from 'semantic-ui-react';

const BeltList = ({ belts, selectBelt }) => {
    return (
        <div className="beltlist-flex">
            {belts.map(belt => {
                return (
                    <div className="item" key={belt.beltId} onClick={() => selectBelt(belt.beltColor)}>
                        <Button color={belt.beltDisplay} key={belt.beltId} className='list-button'>
                            {belt.beltName}
                        </Button>
                    </div>
                )
            })}
        </div>
    );
};

export default BeltList;

//PropTypes
//belts, onBeltClick, renderBeltList, selectBelt