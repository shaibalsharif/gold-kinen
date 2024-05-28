import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CardComponent from './Card'
import PostCard from './PostCard.js'

import { Grid } from '@mui/material'

const TimeLine = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts`).then(res => {
            const inter_data = res.data?.sort((item_1, item_2) => item_2?.id - item_1?.id)
            setData(inter_data);
        })
    }, [])


    return (
        <div className='space-y-6 px-4' style={{  }}>
            {data?.map(item => {
                return <PostCard dataItem={item} />
            })}

        </div>

    )
}

export default TimeLine