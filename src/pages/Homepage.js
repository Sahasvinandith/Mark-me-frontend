import React, { useState } from 'react';
import { Homepage_navbar } from '../contents/Homepage/Homepage_navbar';
import { Homepage_menu } from '../contents/Homepage/Homepage_menu';
import { ClassPage } from './StartClass';
import { Scedule } from '../contents/Homepage/Pages/Schedule/Schedule_page';
import { MyClassPage } from './MyClasses';
import { ClassroomSelection } from '../contents/Startclass/ClassRoomSelection';
import { ClassroomDetail } from '../contents/Startclass/ClassRoomDetails';
export const Homepage=()=>{

    const [cur_index,setindex]=useState(1);

    useState(() => {
        console.log("Cuurent index is: ",cur_index)
      }, [cur_index]);

    const changePage2 = () => {
        console.log("Changing page to: ",2)
        setindex(2);
    };

    const changePage1 = () => {
        console.log("Changing page to: ",1)
        setindex(1);
    };

    const changePage3 = () => {
        console.log("Changing page to: ",3)
        setindex(3);
    };

    
    return(
        <div className='w-screen h-screen flex flex-col'>
            
            <Homepage_navbar />
            <div className='flex'>
                
                <div className='lg:w-72 sm:w-56 md:w-56 flex-grow-0' style={{height:'90vh'}}>
                    <Homepage_menu changepage2={changePage2} changepage1={changePage1} changepage3={changePage3}/>
                </div>
                <div className=' my-1 overflow-y-scroll' style={{height:'90vh',width:'85vw'}}>
                    {cur_index==1?<Scedule/>:cur_index==2?<ClassroomSelection/>:cur_index==3?<MyClassPage/>:null}
                </div>

            </div>
            
        </div>
    )
}