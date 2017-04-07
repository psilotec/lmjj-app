import React from 'react';
import TechniqueCard from './technique_card';

const Technique = ({ selectedTechnique }) => {
    return (
        <div className="technique-flex">
            Pressure points
            <TechniqueCard selectedTechnique={selectedTechnique} />
            Advanced tips
        </div>
    );
};

export default Technique;