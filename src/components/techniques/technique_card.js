import React from 'react';
import { Card, Image, Grid, Header, Label } from 'semantic-ui-react';
import ReactMarkdown from 'react-markdown';

import EditTechniqueModal from'../techniques/edit_technique_modal';

const TechniqueCard = ({ selectedTechnique, editTechnique, techniques, techId}) => {
    return (
        <Grid>
            <Grid.Row centered columns={1}>
                <Grid.Column>
                    <Card className='techniquecard' centered color={selectedTechnique.techDisplayColor}>
                        <Card.Content className='technique-header'>
                            <Header size='medium'>{selectedTechnique.techName}</Header>
                        </Card.Content>
                        <Label attached='top right'>
                            <EditTechniqueModal selectedTechnique={selectedTechnique} editTechnique={editTechnique} techniques={techniques} techId={techId} />
                        </Label>
                        <Card.Content>
                            <Image className='technique-image' src={selectedTechnique.imgUrl} centered />
                        </Card.Content>
                        <Card.Content>
                            <Card.Description className={"reactMarkdownContainer"}>
                                <ReactMarkdown source={selectedTechnique.techDesc} escapeHtml={true} />
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