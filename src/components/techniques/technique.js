import React from 'react';

const Technique = ({ selectedTechnique }) => {
    console.log(selectedTechnique);
    return (
        <div>
            <h2>{selectedTechnique.techName}</h2>
            <p>TechId: {selectedTechnique.techId}</p>
        </div>
    );
};

export default Technique;