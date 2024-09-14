import React, { useState, useEffect } from 'react';
import { AppBar, Tabs, Tab, Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Container, CssBaseline, IconButton } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import QRCode from 'qrcode.react';
import { collection, doc, getDocs, onSnapshot, query } from 'firebase/firestore';
import { db } from '../APIs/firestore';

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

export const ClassPage = ({ prevpage, Modulename, className }) => {
    const [value, setValue] = useState(0);
    const [location, setLocation] = useState(null);
    const [data, setData] = useState([]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleGetLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const { latitude, longitude } = position.coords;
                setLocation({ latitude, longitude });
                console.log("Latitude:", latitude.toString(), "Longitude:", longitude.toString());
                console.log("Location found");
            }, (error) => {
                console.error("Error retrieving location", error);
                alert("Error retrieving location", error);
            });
        } else {
            console.error("Geolocation is not supported by this browser");
        }
    };

    const getRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    useEffect(() => {
        handleGetLocation();
    }, []);

    async function getstudents() {
        const q = query(collection(db, 'Modules', 'Raveen', 'Modules', 'History', 'Attendance', '02-08-2024', 'Attendees'));
        const querySnapshot = await getDocs(q);
        const cities = [];
        querySnapshot.forEach((doc) => {
            cities.push({
                "name": doc.id,
                "attendance": doc.data().Attendence,
                "arrivalTime": doc.data().time
            });
        });

        setData(cities);
    }
    getstudents();
    useEffect(() => {

        const q = query(collection(db, 'Modules', 'Raveen', 'Modules', 'History', 'Attendance', '02-08-2024', 'Attendees'));

        console.log("RUnning");
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const cities = [];
            querySnapshot.forEach((doc) => {
                cities.push({
                    "name": doc.id,
                    "attendance": doc.data().Attendence
                    ,
                    "arrivalTime": doc.data().time
                });
            });

            setData(cities);
            console.log("Current cities in CA: ", cities.join(", "));
        });

        // Cleanup subscription on unmount
        return () => unsubscribe();
    }, []);

    return (
        <div>

            <CssBaseline />
            <div className='flex justify-center text-3xl gap-10 font-semibold'>
                <div>
                    Module: {Modulename}
                </div>
                <div className=''>
                    Class name: {className}
                </div>

            </div>
            <AppBar position="sticky" style={{ backgroundColor: '#3f51b5', height: '60px' }} className='flex flex-row'>

                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" indicatorColor="secondary" textColor="inherit">
                    <button className='bg-transparent' onClick={prevpage}>Back</button>
                    <Tab
                        label="My Class"
                        style={{ fontWeight: 'bold', fontSize: '20px', height: '60px' }}
                        sx={{
                            '&.Mui-selected': {
                                color: 'white',
                            },
                        }}
                    />
                    <Tab
                        label="QR Code"
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
                <TabPanel value={value} index={0} >
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
                <TabPanel value={value} index={1} >
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
                <TabPanel value={value} index={2} className="flex justify-center" >
                    {location ? (
                        // <QRCode value={`${location.latitude.toString()},${location.longitude.toString()}`} size={500} />
                        <QRCode value={`6.8527667,79.9035833`} size={500} />
                    ) : (
                        <Typography>Loading location...</Typography>
                    )}
                </TabPanel>
            </Container>
        </div>
    );
}