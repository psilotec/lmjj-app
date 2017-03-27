import React from 'react';

const Technique = ({ techId, techniques }) => {
    console.log(techniques);
    return (
        <div>
            Technique Component
            <p>TechId: {techId}</p>
        </div>
    );
};

export default Technique;