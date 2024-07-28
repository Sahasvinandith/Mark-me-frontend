import React, { useState } from 'react';
import { AppBar, Tabs, Tab, Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Container, CssBaseline } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import QRCode from 'qrcode.react';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
            style={{ padding: '24px', backgroundColor: '#f5f5f5' }}
        >
            {value === index && (
                <Box>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

export const ClassPage = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    // Sample data for the chart and table
    const data = [
        { name: 'Student 1', attendance: 90, arrivalTime: '08:00 AM' },
        { name: 'Student 2', attendance: 80, arrivalTime: '08:05 AM' },
        { name: 'Student 3', attendance: 85, arrivalTime: '08:02 AM' },
        { name: 'Student 4', attendance: 75, arrivalTime: '08:10 AM' },
        { name: 'Student 5', attendance: 95, arrivalTime: '07:55 AM' },
    ];

    return (
        <div>
            <CssBaseline />
            <AppBar position="static" style={{ backgroundColor: '#3f51b5',height: '60px' }}>
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" indicatorColor="secondary" textColor="inherit">
                    <Tab
                        label="My Class"
                        style={{ fontWeight: 'bold', fontSize: '20px',height: '60px' }}
                        sx={{
                            '&.Mui-selected': {
                                color: 'white',
                            },
                        }}
                    />
                    <Tab
                        label="Chats"
                        style={{ fontWeight: 'bold', fontSize: '20px' }}
                        sx={{
                            '&.Mui-selected': {
                                color: 'white',
                            },
                        }}
                    />
                </Tabs>
            </AppBar>
            <Container>
                <TabPanel value={value} index={0}>
                    <Box style={{ marginTop: '24px' }}>
                        <ResponsiveContainer width="100%" height={400}>
                            <LineChart
                                data={data}
                                margin={{
                                    top: 5, right: 30, left: 20, bottom: 5,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="attendance" stroke="#8884d8" activeDot={{ r: 8 }} />
                            </LineChart>
                        </ResponsiveContainer>
                    </Box>
                    <TableContainer component={Paper} style={{ marginTop: '24px' }}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Index</TableCell>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Arrival Time</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data.map((row, index) => (
                                    <TableRow key={row.name}>
                                        <TableCell component="th" scope="row">{index + 1}</TableCell>
                                        <TableCell>{row.name}</TableCell>
                                        <TableCell>{row.arrivalTime}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </TabPanel>
                <TabPanel value={value} index={1} className="flex justify-center" >
                            <QRCode value="http://172.20.10.2:3000" size={500} />
                   
                </TabPanel>
            </Container>
        </div>
    );
}