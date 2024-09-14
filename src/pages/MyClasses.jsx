import React, { useState } from 'react';
import { LectureHall } from '../contents/MyClassrooms/LectureHall';
import { Box, Container, Grid, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import { SquarePlus } from 'lucide-react';

const initialLectureHallsData = [
    { name: 'Hall A', dimensions: '20x30' },
    { name: 'Hall B', dimensions: '25x35' },
    { name: 'Hall C', dimensions: '30x40' },
];

export const MyClassPage = () => {
    const [lectureHalls, setLectureHalls] = useState(initialLectureHallsData);
    const [showForm, setShowForm] = useState(false);
    const [newHallName, setNewHallName] = useState('');
    const [newHallDimensions, setNewHallDimensions] = useState('');

    const handleAddLectureHall = () => {
        setLectureHalls([...lectureHalls, { name: newHallName, dimensions: newHallDimensions }]);
        setNewHallName('');
        setNewHallDimensions('');
        setShowForm(false);
    };

    return (
        <Container maxWidth="md" sx={{ padding: '20px', display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
                <Button
                    variant="contained"
                    color="primary"
                    startIcon={<SquarePlus size={20} />}
                    onClick={() => setShowForm(true)}
                    sx={{ textTransform: 'none', fontSize: '16px' }}
                >
                    Add New Lecture Hall
                </Button>
            </Box>

            <Grid container spacing={4}>
                {lectureHalls.map((hall, index) => (
                    <Grid item key={index} xs={12} sm={6} md={4}>
                        <LectureHall name={hall.name} dimensions={hall.dimensions} />
                    </Grid>
                ))}
            </Grid>

            <Dialog open={showForm} onClose={() => setShowForm(false)}>
                <DialogTitle>Add New Lecture Hall</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Lecture Hall Name"
                        type="text"
                        fullWidth
                        value={newHallName}
                        onChange={(e) => setNewHallName(e.target.value)}
                    />
                    <TextField
                        margin="dense"
                        label="Dimensions"
                        type="text"
                        fullWidth
                        value={newHallDimensions}
                        onChange={(e) => setNewHallDimensions(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setShowForm(false)} color="secondary">
                        Cancel
                    </Button>
                    <Button onClick={handleAddLectureHall} color="primary">
                        Add
                    </Button>
                </DialogActions>
            </Dialog>
        </Container>
    );
};
