import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import CommentBox from '..//Components/CommentBox';
import StatusPanel from './StatusPanel';
import { CSSTransition } from 'react-transition-group';
import { fetchComments, fetchUser } from '../Utils/helper';


const PostCard = ({ dataItem, id, commentCount, expanded, setExpanded }) => {
    const [user, setUser] = useState(null);
    const [comments, setComments] = useState(null);
    const toggleButtonRef = useRef(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (dataItem?.id && dataItem?.userId) {
                    const fetchedUser = await fetchUser(dataItem.userId);
                    setUser(fetchedUser);
                }

                if (dataItem?.id) {
                    const fetchedComments = await fetchComments(dataItem.id);
                    setComments(fetchedComments);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
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

            className='shadow-light_ dark:shadow-dark_ h-fit bg-plain dark:bg-dark rounded-lg px-2 text-start w-full  py-8 text-black dark:text-light text-lg space-y-2  last:border-none !z-20'>
            <h2 className='text-dark dark:text-light capitalize font-barlow text-xl font-semibold '>{dataItem?.title}</h2>
            <p className='text-dark dark:text-light text-sm font-light font-sans pt-2'><span className='uppercase text-3xl pl-3 font-normal'>{dataItem?.body[0]}</span>{dataItem?.body.slice(1)}</p>
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
