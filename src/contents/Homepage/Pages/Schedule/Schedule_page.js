import { useEffect, useState } from "react"
import { Weekday_scedule } from "./Weekday_schedule";
import { Fullweek_schedule } from "./Fullweek_schedule"

export const Scedule=()=>{
    const[weekday,setmode]=useState(false);
    function modeselector(){
        if(weekday){
            return(
                <div className="flex justify-center items-center" style={{height:'5vh'}}>
                    <button className="my-2 ml-10 bg-green-500 text-white p-4 flex items-center  rounded-3xl font-bold  " onClick={()=>{setmode(!weekday)}}>Weekday Mode:On</button>
                    <button className="my-2 ml-10 bg-red-500 text-white p-4   flex items-center rounded-3xl font-bold " onClick={()=>{setmode(!weekday)}}>Fullweek Mode:Off</button>
                </div>
                
            )
        }
        else{
            return(
                <div className="flex justify-center items-center" style={{height:'5vh'}}>
                    <button className="my-2 ml-10 bg-red-500 text-white p-4 flex items-center rounded-3xl font-bold  " onClick={()=>{setmode(!weekday)}}>Weekday Mode:Off</button>
                    <button className="my-2 ml-10 bg-green-500 text-white p-4  flex items-center rounded-3xl font-bold " onClick={()=>{setmode(!weekday)}}>Fullweek Mode:On</button>
                    
                </div>
                
            )
        }
    }

    function schedule_selector(){
        if (weekday){
            return <Weekday_scedule/>
        }else{
            return <Fullweek_schedule/>;
        }
    }

    

    return(
        <div style={{ height: '90vh' }} className="flex flex-col">
                {   
                    modeselector()
                }
            <div className="flex pt-2" style={{width:'85vw'}}>
                
               {
                schedule_selector()
               }
                
                
                
            </div>
            
           
            
        </div>
    )
}