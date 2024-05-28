import axios from 'axios';
import React, { useEffect, useState } from 'react'
import CommentBox from './CommentBox.js'
import StatusPanel from './StatusPanel.js'


const PostCard = ({ dataItem, id, commentCount }) => {

    const [user, setuser] = useState(null)

    const [comments, setComments] = useState(null)

    useEffect(() => {
        dataItem?.userId && axios.get(`https://jsonplaceholder.typicode.com/users/${dataItem?.userId}`)
            .then(res => {
                setuser(res.data);
                console.log(res.data);
            })
            .catch(e => {
                console.log(e);
            })


        dataItem?.id && axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${dataItem?.id}`)
            .then(res => {
                setComments(res.data);
            })
            .catch(e => {
                console.log(e);
            })
        console.log(dataItem?.title);
    }, [dataItem])


    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <div
            style={{
                'box-shadow': 'rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px'
            }}
            className=' rounded-lg px-2 text-start w-full h-full py-8 text-black text-lg space-y-2 border-b-2 last:border-none' >

            <h2 className='capitalize font-serif font-semibold'>{dataItem?.title}</h2>
            <p className='text-sm font-light font-sans pt-2'>{dataItem?.body}</p>
            <div className='flex gap-2 p-0'>
                <div className='w-8 h-8 border-2 rounded-full bg-gray-400 bg-opacity-60'></div>
                <div className=''>
                    <p className='font-light text-sm'>{user?.name}</p>

                    <p className='font-thin text-xs'>{user?.username}</p>
                </div>

            </div>
            <div className='py-2'>
                <div className='h-[1px] mx-auto bg-gray-500 w-[70%] '></div>

            </div>
            <div className='flex flex-col justify-center items-center w-full gap-2'>
                <StatusPanel commentCount={comments?.length} handleComment={(e) => setExpanded(dataItem?.id)} />
                {expanded ? <CommentBox expanded comments={comments} /> : <></>}
            </div>

        </div>
    )
}

export default PostCard