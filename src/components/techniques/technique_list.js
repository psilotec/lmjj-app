import React from 'react';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const TechniqueList = ({ techniques, selectedTechnique }) => {
    return (
        <div className="techniquelist-flex">
            {techniques.map(technique => {
                return (
                    <div className="item" key={technique.techId}>
                        <Link to={`/technique/${technique.techId}`}>   
                            <Button key={technique.techId}>
                                {technique.techName}
                            </Button>
                        </Link>
                    </div>
                )
            })}
        </div>
    );
};

export default TechniqueList;

//PropTypes
//techniques, selectedTechnique