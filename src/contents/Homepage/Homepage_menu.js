import { useEffect, useState } from "react";

export const Homepage_menu = ({ changepage1, changepage2, changepage3 }) => {




    const [mode, setmode] = useState(false);
    useEffect(() => {
        console.log("Current mode: ", mode)
    }, [mode])

    return (

        <div style={{ height: '90vh', width: '15vw' }} className='font-extrabold flex flex-col text-gray-400 bg-gray-800'>
            <div className=" flex flex-1 border-8  border-gray-700 my-2 rounded-3xl hover:cursor-pointer mx-4 justify-center items-center text-3xl text-yellow-500" onClick={changepage1}>Schedule</div>
            <div className=" flex flex-1  border-8  border-gray-700 my-2 rounded-3xl hover:cursor-pointer mx-4 justify-center items-center text-3xl text-yellow-500" onClick={changepage2}>Start Class</div>
            <div className=" flex flex-1  border-8  border-gray-700 my-2 rounded-3xl hover:cursor-pointer mx-4 justify-center items-center text-3xl text-yellow-500" onClick={changepage3}>My Classrooms</div>
            <div className=" flex flex-1  border-8  border-gray-700 my-2 rounded-3xl hover:cursor-pointer mx-4 justify-center items-center text-3xl text-yellow-500" onClick={() => { setmode(!mode) }}>Settings</div>
            <div className=" flex flex-1  border-8  border-gray-700 my-2 rounded-3xl hover:cursor-pointer mx-4 justify-center items-center text-3xl text-yellow-500" onClick={() => { setmode(!mode) }}>Aboutus</div>



        </div>




    )
}