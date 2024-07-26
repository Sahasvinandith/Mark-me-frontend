import React, { useState } from 'react';
import { Homepage_navbar } from '../contents/Homepage/Homepage_navbar';
import { Homepage_menu } from '../contents/Homepage/Homepage_menu';
import { ClassPage } from './StartClass';
import { Scedule } from '../contents/Homepage/Pages/Schedule/Schedule_page';
import { Route, Routes } from "react-router-dom";


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

    
    return(
        <div>
            
            <Homepage_navbar />
            <div className='flex'>
                
                <div className='lg:w-72 sm:w-56 md:w-56 h-auto flex-grow-0'>
                    <Homepage_menu className="h-auto" changepage2={changePage2} changepage1={changePage1}/>
                </div>
                <div className=' my-2 w-screen overflow-y-scroll '>
                    {cur_index==1?<Scedule/>:cur_index==2?<ClassPage/>:null}
                </div>

            </div>
            
        </div>
    )
}