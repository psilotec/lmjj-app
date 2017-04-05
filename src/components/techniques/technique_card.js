import React from 'react';
import { Card, Image } from 'semantic-ui-react'

const TechniqueCard = ({ selectedTechnique }) => {
    const src = 'https://s3.amazonaws.com/miscbucket444/lmjjshot.png';
    return (
        <div>
            <Card fluid color={selectedTechnique.techDisplayColor}>
                <Card.Content>
                    <Card.Header>{selectedTechnique.techName}</Card.Header>
                </Card.Content>
                <Card.Content>
                    <Image src={src} />
                </Card.Content>
                <Card.Content>
                    <Card.Description>
                        {selectedTechnique.techDesc}
                    </Card.Description>
                </Card.Content>
            </Card>
        </div>
    );
};

export default TechniqueCard;