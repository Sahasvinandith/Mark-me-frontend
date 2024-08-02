import React from 'react';
import { Card, CardMedia, CardContent, Typography, Grid, Container } from '@mui/material';
import { ClassPage } from '../../pages/StartClass';
import { useState } from 'react';

const classrooms = [
    { id: 1, name: 'Classroom A', dimensions: '20x30', image: '../Assets/images/classroom.jpeg' },
    { id: 2, name: 'Classroom B', dimensions: '25x35', image: 'image_url_2' },
    { id: 3, name: 'Classroom C', dimensions: '30x40', image: 'image_url_3' },
];

export const ClassroomSelection = () => {

    
    const [selectedClassroom, setSelectedClassroom] = useState(0);

    function handleClassroomClick(classroom) {
        setSelectedClassroom(1);
    }

    function gobackfunc(){
        console.log('Going back');
        setSelectedClassroom(0);
    }

    return (
        <div>
            {selectedClassroom != 0 ? <ClassPage prevpage={gobackfunc}/> :
                <Container>
                    <Typography variant="h4" gutterBottom>
                        Select a Classroom
                    </Typography>
                    <Grid container spacing={4} >
                        {classrooms.map((classroom) => (
                            <Grid item key={classroom.id} xs={12} sm={6} md={4}>
                                <Card onClick={() => handleClassroomClick(classroom)} style={{ cursor: 'pointer' }}>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={classroom.image}
                                        alt={classroom.name}
                                    />
                                    <CardContent>
                                        <Typography variant="h5" component="div">
                                            {classroom.name}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Dimensions: {classroom.dimensions}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>

            }

        </div>

    );
}

