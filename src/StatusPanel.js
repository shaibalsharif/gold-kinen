import React from 'react'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

const generateRandomNumber = () => {
    const random = parseInt(Math.random(new Date().getTime()).toFixed(2) * 100)
    return random
}
const StatusPanel = ({handleComment,commentCount}) => {

    return (
        <div className=' flex items-center  justify-centerw-full h-6 gap-4 '>
            <div className='text-xs  px-2 flex items-center gap-2  rounded-l-full rounded-r-full border-2 -bg-gradient-to-r from-gray-600 via-gray-500 to-gray-400'>
                <ThumbUpOffAltIcon className='text-xs' /* fontSize='small' */ />
                <p>{generateRandomNumber()}</p>
            </div>
            <div className='text-xs px-2  flex items-center gap-2  rounded-l-full rounded-r-full border-2 -bg-gradient-to-r from-gray-600 via-gray-500 to-gray-400'>

                <FavoriteBorderIcon fontSize='small' />
                <p>{generateRandomNumber()}</p>
            </div>
            <div className='text-xs px-2  flex items-center gap-2  rounded-l-full rounded-r-full border-2 -bg-gradient-to-r from-gray-600 via-gray-500 to-gray-400'>

                <DoneAllIcon className='text-xs' /* fontSize='small' */ />
                <p>{generateRandomNumber()}</p>
            </div>
            <div onClick={ handleComment}
                className='text-xs px-2  flex items-center gap-2  rounded-l-full rounded-r-full border-2 -bg-gradient-to-r from-gray-600 via-gray-500 to-gray-400'>

                <ChatBubbleOutlineIcon className='text-xs' /* fontSize='small' */ />
                <p>{commentCount||0}</p>
            </div>

        </div>

    )
}

export default StatusPanel