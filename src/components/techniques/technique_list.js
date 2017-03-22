import React from 'react';
import { Button } from 'semantic-ui-react';

const TechniqueList = ({ techniques, selectTechnique }) => {
    return (
        <div className="techniquelist-flex">
            {techniques.map(technique => {
                return (
                    <div className="item" key={technique.techId} onClick={() => selectTechnique(technique.techId)}>
                        <Button key={technique.techId}>
                            {technique.techName}
                        </Button>
                    </div>
                )
            })}
        </div>
    );
};

export default TechniqueList;

//PropTypes
//techniques, selectTechnique