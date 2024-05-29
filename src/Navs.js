import React, { useState } from 'react'
import NotesRoundedIcon from '@mui/icons-material/NotesRounded';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
const Navs = () => {
    const [isToggleOn, setIsToggleOn] = useState(false)
    const handleToggle = e => {
        setIsToggleOn(!isToggleOn)
        document.body.classList.toggle("dark");

    }
    return (
        <div className='sticky top-0 bg-opacity-70 bg-plain w-full h-14 shadow-lg bg-transparent py-2 px-4'>
            <div className='h-full w-full flex justify-between items-center'>
                <NotesRoundedIcon  fontSize='large'/>
                {isToggleOn ? <ToggleOnIcon fontSize='large' onClick={handleToggle} /> : <ToggleOffIcon fontSize='large' onClick={handleToggle} />}
            </div>
        </div>
    )
}

export default Navs