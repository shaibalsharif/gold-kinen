import { Avatar } from '@mui/material'
import React from 'react'

const CommentBox = ({ comments, expanded }) => {
    return (
        <div className='font-light text-xs space-y-1 pb-3 w-full py-4'>
            {comments?.map(item => {

                return <div className='pl-[10%] py-1 px-4  '>
                    <div className='flex items-end gap-2'>
                        <Avatar variant='rounded' sx={{ height: '25px', width: '25px' }} className='text-xs w-4 h-4' />
                        <p className=' !text-[17px] font-[400] capitalize pb-1'>{item?.name?.split(" ")[0]}</p>
                    </div>

                    <p>{item?.body}</p></div>
            })}
        </div>
    )
}

export default CommentBox