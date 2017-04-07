import React from 'react';
import { Card, Image, Container, Divider, Header } from 'semantic-ui-react'

const TechniqueCard = ({ selectedTechnique }) => {
    const src = 'https://s3.amazonaws.com/miscbucket444/lmjjshot.png';
    return (
        <Container>
            <Card fluid centered color={selectedTechnique.techDisplayColor}>
                <Card.Content>
                    <Header size='medium'>{selectedTechnique.techName}</Header>
                </Card.Content>
                <Divider />
                <Image src={src} centered />
                <Card.Content>
                    <Card.Description>
                        {selectedTechnique.techDesc}
                    </Card.Description>
                </Card.Content>
            </Card>
        </Container>
    );
};

export default TechniqueCard;