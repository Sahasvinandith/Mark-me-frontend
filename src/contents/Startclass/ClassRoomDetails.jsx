import React, { useState } from 'react';
import { Container, Typography, Box } from '@mui/material';
const classrooms = [
    { id: 1, name: 'Classroom A', dimensions: '20x30', floorPlan: 'https://via.placeholder.com/400x300?text=Floor+Plan+1' },
    { id: 2, name: 'Classroom B', dimensions: '25x35', floorPlan: 'https://via.placeholder.com/400x300?text=Floor+Plan+2' },
    { id: 3, name: 'Classroom C', dimensions: '30x40', floorPlan: 'https://via.placeholder.com/400x300?text=Floor+Plan+3' },
  ];

export function ClassroomDetail() {
    const  id  = 2;
    const classroom = classrooms.find((room) => room.id === parseInt(id));
    const [selectedPosition, setSelectedPosition] = useState(null);

    if (!classroom) {
        return <Typography variant="h6">Classroom not found</Typography>;
    }

    const handleFloorPlanClick = (event) => {
        const rect = event.target.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        setSelectedPosition({ x, y });
    };

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                {classroom.name} Floor Plan
            </Typography>
            <Box
                component="img"
                src={classroom.floorPlan}
                alt={`${classroom.name} Floor Plan`}
                style={{ width: '100%', cursor: 'crosshair' }}
                onClick={handleFloorPlanClick}
            />
            {selectedPosition && (
                <Typography variant="h6" gutterBottom>
                    Selected Position: ({selectedPosition.x.toFixed(0)}, {selectedPosition.y.toFixed(0)})
                </Typography>
            )}
        </Container>
    );
}

