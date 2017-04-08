import React from 'react';
import TechniqueCard from './technique_card';

const Technique = ({ selectedTechnique }) => {
    return (
        <TechniqueCard selectedTechnique={selectedTechnique} />
    );
};

export default Technique;