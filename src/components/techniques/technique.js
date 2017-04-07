import React from 'react';
import TechniqueCard from './technique_card';

const Technique = ({ selectedTechnique }) => {
    return (
        <div className="technique-flex">
            <TechniqueCard selectedTechnique={selectedTechnique} />
        </div>
    );
};

export default Technique;