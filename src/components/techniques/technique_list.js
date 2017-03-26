// Component to render filetered list of techniques. Filters techniques from 
// the store against the selectedBelt prop from BeltList and maps the matches
import React from 'react';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const TechniqueList = ({ techniques, selectedBelt }) => {
    return (
        <div className="techniquelist-flex">
            {techniques.filter(function(obj) {
                return obj.techBelt === selectedBelt;
            }).map(technique => {
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
//techniques, selectedBelt