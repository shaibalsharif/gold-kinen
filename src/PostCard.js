import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import CommentBox from './CommentBox';
import StatusPanel from './StatusPanel';
import { CSSTransition } from 'react-transition-group';
// import './animations.css'; // Import your CSS file for animations

const PostCard = ({ dataItem, id, commentCount, expanded, setExpanded }) => {
    const [user, setuser] = useState(null);
    const [comments, setComments] = useState(null);
    const toggleButtonRef = useRef(null);

    useEffect(() => {
        try {
            dataItem?.userId && axios.get(`https://jsonplaceholder.typicode.com/users/${dataItem?.userId}`)
                .then(res => {
                    setuser(res.data);
                })
                .catch(e => {
                    console.log(e);
                });

            dataItem?.id && axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${dataItem?.id}`)
                .then(res => {
                    setComments(res.data);
                })
                .catch(e => {
                    console.log(e);
                });
        } catch (error) {
            console.log(error);
        }
    }, [dataItem]);

    const handleCommentToggle = (e) => {
        if (!toggleButtonRef.current) {
            console.error('toggleButtonRef not assigned to an element in StatusPanel. Please assign it to the toggle button element.');
            return;
        }

        const clickedElement = toggleButtonRef.current;
        const { top, height } = clickedElement.getBoundingClientRect();
        const elementTop = top + window.scrollY;

        const adjustedScrollTop = Math.min(
            Math.max(0, elementTop - (window.innerHeight / 2)),
            document.documentElement.scrollHeight - window.innerHeight + height
        );

        window.scrollTo({ top: adjustedScrollTop, behavior: 'smooth' });

        setExpanded(dataItem?.id == expanded ? null : dataItem?.id);
    };

    return (
        <div
            style={{
                'box-shadow': 'rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px'
            }}
            className='h-fit bg-plain rounded-lg px-2 text-start w-full  py-8 text-black text-lg space-y-2 border-b-2 last:border-none !z-20'>
            <h2 className='text-dark capitalize font-barlow text-xl font-semibold '>{dataItem?.title}</h2>
            <p className='text-dark  text-sm font-light font-sans pt-2'><span className='uppercase text-3xl pl-3 font-normal'>{dataItem?.body[0]}</span>{dataItem?.body.slice(1)}</p>
            <div className='flex gap-2 p-0'>
                <div className='w-9 h-9 border-2 rounded-xl bg-gray-400 bg-opacity-60'></div>
                <div className=''>
                    <p className='font-thin text-sm'>{user?.name}</p>
                    <p className='font-thin text-xs font-caveat'>{user?.username}</p>
                </div>
            </div>
            <div className='py-2'>
                <div className='h-[1px] mx-auto bg-gray-500 w-[70%] '></div>
            </div>
            <div className='  flex flex-col justify-center items-center w-full gap-2'>
                <StatusPanel expanded={expanded == dataItem?.id} commentCount={comments?.length} handleComment={handleCommentToggle} toggleButtonRef={toggleButtonRef} />
                <CSSTransition
                    in={expanded == dataItem?.id}
                    timeout={400}
                    classNames="fade"
                    unmountOnExit
                >
                    <CommentBox expanded comments={comments} />
                </CSSTransition>
            </div>
        </div>
    );
}

export default PostCard;
