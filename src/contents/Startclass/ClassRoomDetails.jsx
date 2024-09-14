import React, { useState } from 'react';
import { ClassPage } from '../../pages/StartClass';
import { Container, Typography, Box, Grid } from '@mui/material';

const classrooms = [
    { id: 1, name: 'Classroom A', dimensions: '20x30', floorPlan: '../Assets/images/lechall.png' },
    { id: 2, name: 'Classroom B', dimensions: '25x35', floorPlan: 'https://classrooms.uci.edu/files/2019/07/PCB1300-e1566843515434.png' },
    { id: 3, name: 'Classroom C', dimensions: '30x40', floorPlan: 'https://via.placeholder.com/400x300?text=Floor+Plan+3' },
];

export function ClassroomDetail({moduleName,gobackfunc}) {
    const id = 2;
    const classroom = classrooms.find((room) => room.id === parseInt(id));
    const [selectedPosition, setSelectedPosition] = useState(null);
    const [GotoClassroom, selectedClassroom] = useState(0);

    if (!classroom) {
        return <Typography variant="h6">Classroom not found</Typography>;
    }

    const [width, height] = classroom.dimensions.split('x'); // Extracting width and height from dimensions

    const handleFloorPlanClick = (event) => {
        const rect = event.target.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        setSelectedPosition({ x, y });
    };

    return (
        <Container>
            {console.log("Current classrm: ",GotoClassroom)}
            {GotoClassroom == 1? (<ClassPage prevpage={gobackfunc} Modulename={moduleName} className={classroom.name}/>):
            (<div>
                <Typography align='center' variant="h4" gutterBottom>
                    {classroom.name} Floor Plan
                </Typography>

                {/* Layout grid for classroom with height and width labels */}
                <Grid container spacing={2} justifyContent="center" alignItems="center">
                    {/* Height Label (Left side) */}
                    <Grid item>
                        <Typography variant="h6" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
                            {height} ft
                        </Typography>
                    </Grid>

                    <Grid item>
                        {/* Classroom floor plan */}
                        <Box
                            position="relative"
                            display="inline-block"
                            border="1px solid #000"
                        >
                            {/* Width label (Top side) */}
                            <Typography variant="h6" align="center">
                                {width} ft
                            </Typography>

                            {/* Floor plan image */}
                            <Box
                                component="img"
                                src={classroom.floorPlan}
                                alt={`${classroom.name} Floor Plan`}
                                style={{ width: '600px', height: '450px', cursor: 'crosshair' }}
                                onClick={handleFloorPlanClick}
                            />

                            {/* Blue box for selected position */}
                            {selectedPosition && (
                                <Box
                                    position="absolute"
                                    width="20px"
                                    height="20px"
                                    bgcolor="blue"
                                    style={{
                                        left: `${selectedPosition.x - 10}px`, // Center the blue box at click position
                                        top: `${selectedPosition.y - 10}px`,
                                    }}
                                />
                            )}
                        </Box>
                    </Grid>
                </Grid>

                {/* Display coordinates when clicked */}
                {selectedPosition && (
                    <div>
                        <div className='w-full h-max items-center text-center text-xl font-bold'>
                            Selected Position: ({selectedPosition.x.toFixed(0)}, {selectedPosition.y.toFixed(0)})
                        </div>

                        <div className='flex items-center h-max w-max justify-center' >
                            < button className='mt-20 bg-green-500 border-2 text-white font-bold text-lg' onClick={() => {

                                selectedClassroom(1);
                                console.log("Selecting class rooms");

                            }}>
                                Start Class
                            </button>


                        </div>
                    </div>


                )}
            </div>)}
        </Container>
    );
}
