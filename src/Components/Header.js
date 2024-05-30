import React, { useState } from 'react'
import NotesRoundedIcon from '@mui/icons-material/NotesRounded';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
const Header = () => {
    const [isToggleOn, setIsToggleOn] = useState(false)
    const handleToggle = e => {
        setIsToggleOn(!isToggleOn)
        document.body.classList.toggle("dark");

    }
    return (
        <div className='sticky top-0 bg-opacity-85 bg-plain dark:bg-dark w-full h-14 shadow-lg py-2 px-4 z-30'>
            <div className='h-full w-full flex justify-between items-center'>
                <NotesRoundedIcon className='dark:text-[#fff]' fontSize='large' />
                <div className='cursor-pointer'>
                    {isToggleOn ? <ToggleOnIcon sx={{ color: '#fff' }} fontSize='large' onClick={handleToggle} /> : <ToggleOffIcon fontSize='large' onClick={handleToggle} />}

                </div>
            </div>
        </div>
    )
}

export default Header