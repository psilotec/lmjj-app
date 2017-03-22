import React from 'react';

const Technique = ({ match }) => {
    return(
        <div>
            Technique
            <p>{match.params.techId}</p>
        </div>
    );
}

export default Technique;