import React, { useState } from 'react';
import { Card, CardMedia, CardContent, Typography, Grid, Container, TextField, Button } from '@mui/material';
import { ClassPage } from '../../pages/StartClass';
import { ClassroomDetail } from './ClassRoomDetails';
import ClassImage from '../Assets/images/classroom.jpeg';


const classrooms = [
    { id: 1, name: 'Classroom A', dimensions: '20x30', image: '../Assets/images/classroom.jpeg' },
    { id: 2, name: 'Classroom B', dimensions: '25x35', image: 'image_url_2' },
    { id: 3, name: 'Classroom C', dimensions: '30x40', image: 'image_url_3' },
];

export const ClassroomSelection = () => {
    const [selectedClassroom, setSelectedClassroom] = useState(0);
    const [moduleName, setModuleName] = useState(''); // State to store the value of the TextField
    const [error, setError] = useState(''); // State to store error message

    function handleClassroomClick(classroom) {
        if (moduleName.trim() === '') {
            setError('Please fill this'); // Show error message if the field is empty
        } else {
            setError('');
            console.log('Module Name:', moduleName); // Store the value in a variable (in this case, just log it)
            setSelectedClassroom(1);
        }
    }

    function gobackfunc() {
        console.log('Going back');
        setSelectedClassroom(0);
    }

    return (
        <div>
            {selectedClassroom !== 0 ? (
                <ClassroomDetail gobackfunc={gobackfunc} moduleName={moduleName}/>
                // <ClassPage prevpage={gobackfunc} Modulename={moduleName} className={classrooms[selectedClassroom - 1].name} />
            ) : (
                <div className='flex flex-col gap-3'>
                    <div className='flex justify-center items-center flex-row'>
                        <div className='text-3xl font-bold mr-5'>
                            Enter the name of the module:
                        </div>
                        <TextField
                            required
                            value={moduleName}
                            onChange={(e) => setModuleName(e.target.value)}
                            style={{ fontSize: '50px', fontWeight: 'bold' }}
                            sx={{
                                '& .MuiInputBase-input': {
                                    fontSize: '20px', // Increase font size
                                },
                            }}
                            placeholder='Module Index'
                            error={!!error}
                            helperText={error}
                        />
                    </div>

                    <Container className=''>
                        <Typography variant="h4" gutterBottom>
                            Select a Classroom
                        </Typography>
                        <Grid container spacing={4}>
                            {classrooms.map((classroom) => (
                                <Grid item key={classroom.id} xs={12} sm={6} md={4}>
                                    <Card onClick={() => handleClassroomClick(classroom)} style={{ cursor: 'pointer' }}>
                                        <CardMedia
                                            component="img"
                                            height="140"
                                            image={ClassImage}
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
                </div>
            )}
        </div>
    );
}
