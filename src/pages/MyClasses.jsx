import { LectureHall } from '../contents/MyClassrooms/LectureHall'
import { useState } from 'react';
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
        <div style={{ padding: '20px', display: 'flex', flexDirection: 'column' }}>
            <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
                <button className='w-auto h-auto flex flex-row gap-2 text-lg font-semibold items-center justify-center rounded-lg' onClick={() => setShowForm(true)} style={{ marginRight: '10px',padding: '10px' }}><SquarePlus size={35}/>Add New Lecture Hall</button>
                
            </div>

            <div className='flex justify-center items-center w-full' style={{ display: 'flex', flexWrap: 'wrap' , height: '70vh' }}>
                {lectureHalls.map((hall, index) => (
                    <LectureHall key={index} name={hall.name} dimensions={hall.dimensions} />
                ))}
            </div>

            {showForm && (
                <div style={{ marginTop: '20px' }}>
                    <input
                        type="text"
                        placeholder="Lecture Hall Name"
                        value={newHallName}
                        onChange={(e) => setNewHallName(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Dimensions"
                        value={newHallDimensions}
                        onChange={(e) => setNewHallDimensions(e.target.value)}
                    />
                    <button onClick={handleAddLectureHall}>Add</button>
                    <button onClick={() => setShowForm(false)}>Cancel</button>
                </div>
            )}
        </div>
    );
}