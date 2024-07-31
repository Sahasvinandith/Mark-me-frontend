import { useEffect, useState } from "react"

export const Homepage_navbar = () => {

    const [mode, setmode] = useState(false);



    useEffect(() => {
        console.log("Current mode: ", mode)
    }, [mode])
    return (
        <div className='  font-extrabold flex justify-center  w-screen  py-4 text-yellow-500 bg-gray-800' style={{ height: '10vh' }}>
            <div className=" flex-1 flex items-center pl-12 text-3xl text-yellow-500">MarkMe</div>
            <div className="flex flex-1 positon-right justify-end items-center">

                <div className="px-4 text-xl text-white">Userdata</div>
                <div className="px-4 text-xl text-white">Userphoto</div>
            </div>
        </div>




    )
}

