import React from 'react';

const Technique = ({ selectedTechnique }) => {
    return (
        <div>
            <h2>{selectedTechnique.techName}</h2>
            <p>TechId: {selectedTechnique.techId}</p>
        </div>
    );
};

export default Technique;