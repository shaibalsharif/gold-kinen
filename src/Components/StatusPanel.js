import React, { useState } from 'react'
import LikeOutLine from '@mui/icons-material/ThumbUpOffAlt';
import LikeFilled from '@material-ui/icons/ThumbUp';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';

const generateRandomNumber = () => {
    const random = parseInt(Math.random(new Date().getTime()).toFixed(2) * 100)
    return random
}


const StatusPanel = ({ handleComment, commentCount, expanded, toggleButtonRef }) => {

    const [counts, setCounts] = useState({
        like: generateRandomNumber(),
        love: generateRandomNumber(),
        view: generateRandomNumber(),
    })
    const [filled, setFilled] = useState({
        like: generateRandomNumber() % 2 == 0,
        love: generateRandomNumber() % 2 == 0,

    })
    const handleFilling = (e, type) => {

        e.stopPropagation();
        switch (type) {
            case 'like':
                setCounts({ ...counts, like: filled.like ? counts.like - 1 : counts.like + 1 })
                setFilled({ ...filled, like: !filled.like })
                break;
            case 'love':
                setCounts({ ...counts, love: filled.love ? counts.love - 1 : counts.love + 1 })
                setFilled({ ...filled, love: !filled.love })
                break;
            case 'view':
                setCounts({ ...counts, view: filled.view ? counts.view - 1 : counts.view + 1 })
                setFilled({ ...filled, view: !filled.view })
                break;

            default:
                return
                break;
        }
    }

    return (
        <div ref={toggleButtonRef} className=' md:justify-start flex items-center  justify-center w-full h-6 gap-2 '>
            <div onClick={(e) => handleFilling(e, 'like')} className='text-xs px-2 flex items-center gap-1  rounded-l-full rounded-r-full /*border-2*/ -bg-gradient-to-r from-gray-600 via-gray-500 to-gray-400'>
                {filled.like ? <LikeFilled className='text-md cursor-pointer ' /> : <LikeOutLine className='text-md cursor-pointer ' /* fontSize='small' */ />}

                <p>Liked {counts.like}</p>
            </div>

            <div onClick={(e) => handleFilling(e, 'seen')} className='text-xs px-2  flex items-center gap-1  rounded-l-full rounded-r-full /*border-2*/ -bg-gradient-to-r from-gray-600 via-gray-500 to-gray-400'>

                <DoneAllIcon className='text-md cursor-pointer' /* fontSize='small' */ />
                <p>Viewed {counts.view}</p>
            </div>
            <div onClick={handleComment}
                className=' text-xs px-2  flex items-center gap-2  rounded-l-full rounded-r-full /*border-2*/ -bg-gradient-to-r from-gray-600 via-gray-500 to-gray-400'>

                {expanded ? <ChatBubbleIcon className='text-md cursor-pointer' /> : <ChatBubbleOutlineIcon className='text-md cursor-pointer' /* fontSize='small' */ />}

                <p>Comments {commentCount || 0}</p>
            </div>

        </div>

    )
}

export default StatusPanel