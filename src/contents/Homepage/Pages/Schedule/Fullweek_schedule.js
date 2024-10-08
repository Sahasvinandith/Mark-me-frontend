import { useEffect, useState } from "react"
import axios from 'axios';
import {Scheduleclickmodel} from "./contents/scheduleclickmodel"
import { RefreshCw } from 'lucide-react';

export const Fullweek_schedule=()=>{
    
    const[usershcedule,setschedule]=useState([])
    const[mon_work,set_mon_work]=useState(["-"]);
    const[tue_work,set_tue_work]=useState(['-']);
    const[wen_work,set_wen_work]=useState(['-']);
    const[thu_work,set_thu_work]=useState(['-']);
    const[fri_work,set_fri_work]=useState(['-']);
    const[sat_work,set_sat_work]=useState(['-']);
    const[sun_work,set_sun_work]=useState(['-']);
    const[refreshed,setrefresh]=useState(false);

    const [clicked,setclick]=useState(false)
    const [day_pass,set_d_pass]=useState();
    const [time_pass,set_t_pass]=useState();


    const getcalender_data=async ()=>{
        try {
            const response= await axios.get("http://localhost:8000/data");
            const Schedule_data=response.data
            // console.log(Schedule_data)
            setschedule(Schedule_data)
            
            
        } catch (error) {
            console.log("Error connecting with database: ",error)
        }
    }

    function settingwork(){
        usershcedule.forEach((day)=>{
            

            if(day.id=="Monday"){
                let temp_mon_work=[day.eightten,day.tentwel,day.onethree,day.threefive]
                set_mon_work(temp_mon_work);
            }
            else if(day.id=="Tue"){
                let temp_tue_work=[day.eightten,day.tentwel,day.onethree,day.threefive]
                set_tue_work(temp_tue_work);
            }
            else if(day.id=="Wen"){
                let temp_wen_work=[day.eightten,day.tentwel,day.onethree,day.threefive]
                set_wen_work(temp_wen_work);
            }
            else if(day.id=="Thu"){
                let temp_thu_work=[day.eightten,day.tentwel,day.onethree,day.threefive]
                set_thu_work(temp_thu_work);
            }
            else if(day.id=="Fri"){
                let temp_fri_work=[day.eightten,day.tentwel,day.onethree,day.threefive]
                set_fri_work(temp_fri_work);
            }
            else if(day.id=="Sat"){
                console.log("Day: ",day.id,day)
                let temp_sat_work=[day.eightten,day.tentwel,day.onethree,day.threefive]
                set_sat_work(temp_sat_work);
            }
            else if(day.id=="Sun"){
                console.log("Day: ",day.id,day)
                let temp_sun_work=[day.eightten,day.tentwel,day.onethree,day.threefive]
                set_sun_work(temp_sun_work);
            }
        })
    } 

    useEffect(()=> {
        getcalender_data();
        
    },[refreshed,clicked])

    useEffect(()=>{
        settingwork()
    },[usershcedule])

    
    const handleClick = (event) => {
        // Access the value stored in the passday attribute
        const day = event.target.getAttribute('passday');
        const time=event.target.getAttribute("passtime");

        set_d_pass(day);
        set_t_pass(time);
        setclick(true);
    };

    return(
        
 
        <div className={1 && "dark"}>
            
                
            <div className="flex flex-col pt-1" style={{ width: '80vw' }}>
                
                
                
                
                <table className=" border-gray-500 mx-4  h-2/3" style={{ width: '80vw' }} >
                    <thead>
                        <tr className="flex">
                            <th className=" rounded-lg  bg-yellow-400 flex-1 p-2 mx-1">Time</th>
                            <th className=" rounded-lg  bg-indigo-400 flex-1 p-2 mx-1">Mon</th>
                            <th className=" rounded-lg  bg-red-400 flex-1 p-2 mx-1">Tue</th>
                            <th className=" rounded-lg  bg-blue-400 flex-1 p-2 mx-1">Wed</th>
                            <th className=" rounded-lg  bg-orange-400 flex-1 p-2 mx-1">Thu</th>
                            <th className=" rounded-lg  bg-green-400 flex-1 p-2 mx-1">Fri</th>
                            <th className=" rounded-lg  bg-purple-400 flex-1 p-2 mx-1">Sat</th>
                            <th className=" rounded-lg  bg-pink-400 flex-1 p-2 mx-1">Sun</th>
                        </tr>
                    </thead>
                    <tbody className="flex-row">
                        <tr className="flex flex-1 my-2  font-semibold  text-lg  ">
                            <td style={{height:"14vh"}} className=" rounded-lg   h-36  flex justify-center  cursor-default  items-center  bg-yellow-200 flex-1 text-center  p-0 mx-1">8.00-10.00</td>
                            <td style={{height:"14vh"}} passday="1" passtime="8" className=" rounded-lg   h-36  flex justify-center cursor-pointer   items-center bg-indigo-200  text-center flex-1 p-0 mx-1 shadow-md border-r-2 border-b-4 border-indigo-400 hover:shadow-xl hover:border-x-2 hover:border-b-4 hover:border-indigo-500" onClick={handleClick}>{mon_work[0]}</td>
                            <td style={{height:"14vh"}} passday="2" passtime="8" className=" rounded-lg  h-36   flex justify-center  cursor-pointer items-center  bg-red-200 flex-1 text-center  p-0 mx-1 shadow-md border-r-2 border-b-4 border-red-400 hover:shadow-xl hover:border-x-2 hover:border-b-4 hover:border-red-500" onClick={handleClick}>{tue_work[0]}</td>
                            <td style={{height:"14vh"}} passday="3" passtime="8" className=" rounded-lg   h-36  flex justify-center cursor-pointer   items-center bg-blue-200 flex-1 text-center  p-0 mx-1 shadow-md border-r-2 border-b-4 border-blue-400 hover:shadow-xl hover:border-x-2 hover:border-b-4 hover:border-blue-500"  onClick={handleClick} >{wen_work[0]}</td>
                            <td style={{height:"14vh"}} passday="4" passtime="8" className=" rounded-lg   h-36  flex justify-center  cursor-pointer items-center bg-orange-200 flex-1 text-center  p-0 mx-1 shadow-md border-r-2 border-b-4 border-orange-400 hover:shadow-xl hover:border-x-2 hover:border-b-4 hover:border-orange-500" onClick={handleClick} >{thu_work[0]}</td>
                            <td style={{height:"14vh"}} passday="5" passtime="8" className=" rounded-lg   h-36  flex justify-center  cursor-pointer  items-center bg-green-200 flex-1 text-center  p-0 mx-1 shadow-md border-r-2 border-b-4 border-green-400 hover:shadow-xl hover:border-x-2 hover:border-b-4 hover:border-green-500" onClick={handleClick} >{fri_work[0]}</td>
                            <td style={{height:"14vh"}} passday="6" passtime="8" className=" rounded-lg   h-36  flex justify-center  cursor-pointer items-center bg-purple-200 flex-1 text-center  p-0 mx-1 shadow-md border-r-2 border-b-4 border-purple-400 hover:shadow-xl hover:border-x-2 hover:border-b-4 hover:border-purple-500" onClick={handleClick} >{sat_work[0]}</td>
                            <td style={{height:"14vh"}} passday="0" passtime="8" className=" rounded-lg   h-36  flex justify-center  cursor-pointer  items-center bg-pink-200 flex-1 text-center  p-0 mx-1 shadow-md border-r-2 border-b-4 border-pink-400 hover:shadow-xl hover:border-x-2 hover:border-b-4 hover:border-pink-500" onClick={handleClick} >{sun_work[0]}</td>
                        </tr>
                        <tr className="flex flex-1 my-2  font-semibold  text-lg ">
                            <td style={{height:"14vh"}}  className=" rounded-lg   h-36  flex justify-center cursor-default   items-center  bg-yellow-200 flex-1  text-center p-0 mx-1">10.00-12.00</td>
                            <td style={{height:"14vh"}} passday="1" passtime="10" className=" rounded-lg   h-36  flex justify-center  cursor-pointer  items-center bg-indigo-200  text-center flex-1 p-0 mx-1 shadow-md border-r-2 border-b-4 border-indigo-400 hover:shadow-xl hover:border-x-2 hover:border-b-4 hover:border-indigo-500" onClick={handleClick} >{mon_work[1]}</td>
                            <td style={{height:"14vh"}} passday="2" passtime="10" className=" rounded-lg  h-36   flex justify-center  cursor-pointer items-center  bg-red-200 flex-1 text-center  p-0 mx-1 shadow-md border-r-2 border-b-4 border-red-400 hover:shadow-xl hover:border-x-2 hover:border-b-4 hover:border-red-400" onClick={handleClick} >{tue_work[1]}</td>
                            <td style={{height:"14vh"}} passday="3" passtime="10" className=" rounded-lg   h-36  flex justify-center  cursor-pointer  items-center bg-blue-200 flex-1 text-center  p-0 mx-1 shadow-md border-r-2 border-b-4 border-blue-400  hover:shadow-xl hover:border-x-2 hover:border-b-4 hover:border-blue-400" onClick={handleClick} >{wen_work[1]}</td>
                            <td style={{height:"14vh"}} passday="4" passtime="10" className=" rounded-lg   h-36  flex justify-center   cursor-pointer items-center bg-orange-200 flex-1 text-center  p-0 mx-1 shadow-md border-r-2 border-b-4 border-orange-400 hover:shadow-xl hover:border-x-2 hover:border-b-4 hover:border-orange-400" onClick={handleClick} >{thu_work[1]}</td>
                            <td style={{height:"14vh"}} passday="5" passtime="10" className=" rounded-lg   h-36  flex justify-center   cursor-pointer items-center bg-green-200 flex-1 text-center  p-0 mx-1 border-r-2 border-b-4 border-green-400 shadow-md hover:shadow-xl hover:border-x-2 hover:border-b-4 hover:border-green-400" onClick={handleClick} >{fri_work[1]}</td>
                            <td style={{height:"14vh"}} passday="6" passtime="10" className=" rounded-lg   h-36  flex justify-center  cursor-pointer items-center bg-purple-200 flex-1 text-center  p-0 mx-1 shadow-md  border-r-2 border-b-4 border-purple-400 hover:shadow-xl hover:border-x-2 hover:border-b-4 hover:border-purple-400" onClick={handleClick} >{sat_work[1]}</td>
                            <td style={{height:"14vh"}} passday="0" passtime="10" className=" rounded-lg   h-36  flex justify-center  cursor-pointer  items-center bg-pink-200 flex-1 text-center  p-0 mx-1  shadow-md border-r-2 border-b-4 border-pink-400 hover:shadow-xl hover:border-x-2 hover:border-b-4 hover:border-pink-400" onClick={handleClick} >{sun_work[1]}</td>
                        </tr>

                        <tr className="flex flex-1 my-2  font-semibold  text-lg ">
                        <td style={{height:"14vh"}} className=" rounded-lg  col-span-6  h-36  flex justify-center  items-center bg-indigo-400 flex-1 text-center  p-0 mx-1 text-3xl text-white font-bold font-serif">Interval</td>
                        </tr>

                        <tr className="flex flex-1 my-2  font-semibold  text-lg ">
                            <td style={{height:"14vh"}}  className=" rounded-lg   h-36  flex justify-center  cursor-default  items-center  bg-yellow-200 flex-1 text-center  p-0 mx-1">12.00-13.00</td>
                            <td style={{height:"14vh"}} passday="1" passtime="13"className=" rounded-lg   h-36  flex justify-center  cursor-pointer  items-center bg-indigo-200  text-center flex-1 p-0 mx-1 shadow-md border-r-2 border-b-4 border-indigo-400   hover:shadow-xl hover:border-x-2 hover:border-b-4 hover:border-indigo-400" onClick={handleClick} >{mon_work[2]}</td>
                            <td style={{height:"14vh"}} passday="2" passtime="13"  className=" rounded-lg  h-36   flex justify-center  cursor-pointer items-center  bg-red-200 flex-1 text-center  p-0 mx-1 shadow-md border-r-2 border-b-4 border-red-400 hover:shadow-xl border-x-2 hover:border-b-4 hover:border-red-400" onClick={handleClick} >{tue_work[2]}</td>
                            <td style={{height:"14vh"}} passday="3" passtime="13" className=" rounded-lg   h-36  flex justify-center  cursor-pointer  items-center bg-blue-200 flex-1 text-center  p-0 mx-1 shadow-md border-r-2 border-b-4 border-blue-400  hover:shadow-xl hover:border-x-2 hover:border-b-4 hover:border-blue-400" onClick={handleClick} >{wen_work[2]}</td>
                            <td style={{height:"14vh"}} passday="4" passtime="13" className=" rounded-lg   h-36  flex justify-center  cursor-pointer  items-center bg-orange-200 flex-1 text-center  p-0 mx-1 shadow-md border-r-2 border-b-4 border-orange-400 hover:shadow-xl hover:border-x-2 hover:border-b-4 hover:border-orange-400" onClick={handleClick} >{thu_work[2]}</td>
                            <td style={{height:"14vh"}} passday="5" passtime="13" className=" rounded-lg   h-36  flex justify-center  cursor-pointer  items-center bg-green-200 flex-1 text-center  p-0 mx-1 shadow-md border-r-2 border-b-4 border-green-400 hover:shadow-xl hover:border-x-2 hover:border-b-4 hover:border-green-400" onClick={handleClick} >{fri_work[2]}</td>
                            <td style={{height:"14vh"}} passday="6" passtime="13" className=" rounded-lg   h-36  flex justify-center  cursor-pointer items-center bg-purple-200 flex-1 text-center  p-0 mx-1 shadow-md  border-r-2 border-b-4 border-purple-400 hover:shadow-xl hover:border-x-2 hover:border-b-4 hover:border-purple-400" onClick={handleClick}> {sat_work[2]}</td>
                            <td style={{height:"14vh"}} passday="0" passtime="13" className=" rounded-lg   h-36  flex justify-center  cursor-pointer  items-center bg-pink-200 flex-1 text-center  p-0 mx-1  shadow-md border-r-2 border-b-4 border-pink-400 hover:shadow-xl hover:border-x-2 hover:border-b-4 hover:border-pink-400" onClick={handleClick} >{sun_work[2]}</td>
                        </tr>
                        <tr className="flex flex-1 my-2  font-semibold  text-lg ">
                            <td style={{height:"14vh"}}  className=" rounded-lg   h-36  flex justify-center  cursor-default  items-center  bg-yellow-200 text-center  flex-1 p-0 mx-1">13.00-15.00</td>
                            <td style={{height:"14vh"}} passday="1" passtime="15" className=" rounded-lg   h-36  flex justify-center  cursor-pointer  items-center bg-indigo-200  text-center flex-1 p-0 mx-1 shadow-md border-r-2 border-b-4 border-indigo-400  hover:shadow-xl hover:border-x-2 hover:border-b-4 hover:border-indigo-400" onClick={handleClick} >{mon_work[3]}</td>
                            <td style={{height:"14vh"}} passday="2" passtime="15" className=" rounded-lg  h-36   flex justify-center  cursor-pointer items-center  bg-red-200 flex-1 text-center  p-0 mx-1 shadow-md border-r-2 border-b-4 border-red-400 hover:shadow-xl hover:border-x-2 hover:border-b-4 hover:border-red-400" onClick={handleClick} >{tue_work[3]}</td>
                            <td style={{height:"14vh"}} passday="3" passtime="15" className=" rounded-lg   h-36  flex justify-center  cursor-pointer  items-center bg-blue-200 flex-1 text-center  p-0 mx-1 shadow-md border-r-2 border-b-4 border-blue-400  hover:shadow-xl hover:border-x-2 hover:border-b-4 hover:border-blue-400" onClick={handleClick} >{wen_work[3]}</td>
                            <td style={{height:"14vh"}} passday="4" passtime="15" className=" rounded-lg   h-36  flex justify-center  cursor-pointer  items-center bg-orange-200 flex-1 text-center  p-0 mx-1 shadow-md border-r-2 border-b-4 border-orange-400 hover:shadow-xl hover:border-x-2 hover:border-b-4 hover:border-orange-400" onClick={handleClick} >{thu_work[3]}</td>
                            <td style={{height:"14vh"}} passday="5" passtime="15" className=" rounded-lg   h-36  flex justify-center  cursor-pointer  items-center bg-green-200 flex-1 text-center  p-0 mx-1 shadow-md border-r-2 border-b-4 border-green-400 hover:shadow-xl hover:border-x-2 hover:border-b-4 hover:border-green-400" onClick={handleClick} >{fri_work[3]}</td>
                            <td style={{height:"14vh"}} passday="6" passtime="15" className=" rounded-lg   h-36  flex justify-center  cursor-pointer items-center bg-purple-200 flex-1 text-center  p-0 mx-1 shadow-md  border-r-2 border-b-4 border-purple-400 hover:shadow-xl hover:border-x-2 hover:border-b-4 hover:border-purple-400" onClick={handleClick} >{sat_work[3]}</td>
                            <td style={{height:"14vh"}} passday="0" passtime="15" className=" rounded-lg   h-36  flex justify-center  cursor-pointer  items-center bg-pink-200 flex-1 text-center  p-0 mx-1  shadow-md border-r-2 border-b-4 border-pink-400 hover:shadow-xl hover:border-x-2 hover:border-b-4 hover:border-pink-400" onClick={handleClick} >{sun_work[3]}</td>
                        </tr>
                        
                        
                    </tbody>

                </table>
            </div>
            {clicked && <Scheduleclickmodel day={day_pass} time={time_pass} onClose={()=>{setclick(false)}}/>}
            

            

            
           
            
        </div>
    )
}