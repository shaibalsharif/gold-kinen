import axios from 'axios'
import React, { useEffect, useState } from 'react'
import PostCard from './PostCard.js'
import Tags from './Tags.js'
import { fetchPosts } from '../Utils/helper.js';

const PAGE_SIZE = 10;

const TimeLine = () => {

    const [data, setData] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [expanded, setExpanded] = useState(false);

    const pageChange = (e) => {
        currentPage * PAGE_SIZE !== data?.length && setCurrentPage(currentPage + 1)
    }

    useEffect(() => {
        const loadPosts = async () => {
            try {
                const posts = await fetchPosts();
                setData(posts);
            } catch (error) {
                console.error('Error loading posts:', error);
            }
        };

        loadPosts();
    }, [currentPage])

    return (
        <div className='px-4 md:px-[10%] lg:px-[20%] xl:[25%] ' style={{}}>
            <div className='z-10 '>
                <div className='flex gap-2  '>
                    < Tags size='small' />
                    <div className='space-y-6'>
                        {data?.slice(0, currentPage * PAGE_SIZE)?.map(item => {
                            return <PostCard expanded={expanded} setExpanded={setExpanded} dataItem={item} />
                        })}
                    </div>

                </div>
            </div>


            <div onClick={pageChange} className=' bottom-0  right-[5%]  ml-auto w-[87.5%] font-barlow  px-8 py-4 rounded-t-lg '>
                <p>Showing {data?.length ? currentPage * PAGE_SIZE : 0} items of {data?.length}</p>
                {data?.length !== currentPage * PAGE_SIZE && <button >See More</button>}
            </div>

        </div>

    )
}

export default TimeLine