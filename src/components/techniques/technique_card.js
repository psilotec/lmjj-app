import React from 'react';
import { Card, Image, Grid, Header, Label } from 'semantic-ui-react';

import EditTechniqueModal from'../techniques/edit_technique_modal';

const TechniqueCard = ({ selectedTechnique }) => {
    const src = 'https://s3.amazonaws.com/miscbucket444/lmjjshot.png';
    return (
        <Grid>
            <Grid.Row centered columns={1}>
                <Grid.Column>
                    <Card className='techniquecard' centered color={selectedTechnique.techDisplayColor}>
                        <Card.Content className='technique-header'>
                            <Header size='medium'>{selectedTechnique.techName}</Header>
                        </Card.Content>
                        <Label attached='top right'>
                            <EditTechniqueModal />
                        </Label>
                        <Card.Content>
                            <Image className='technique-image' src={src} centered />
                        </Card.Content>
                        <Card.Content>
                            <Card.Description>
                                {selectedTechnique.techDesc}
                            </Card.Description>
                        </Card.Content>
                    </Card>
                </Grid.Column>
            </Grid.Row>

            <Grid.Row centered columns={3} only='tablet computer'>
                <Grid.Column>
                    Previous technique
                </Grid.Column>
                <Grid.Column>
                    Current technique
                </Grid.Column>
                <Grid.Column>
                    Next technique
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
};

export default TechniqueCard;