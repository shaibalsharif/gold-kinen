import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CardComponent from './Card'
import { Grid } from '@mui/material'

const TimeLine = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts`).then(res => {
            console.log(res.data);
           
        const inter_data=res.data?.sort((item_1, item_2) =>  item_2?.id - item_1?.id)
        console.log(inter_data);
            setData(inter_data);
        })
    }, [])


    return (
        <div style={{ paddingLeft: '10%', paddingRight: '10%' }}>
            <Grid container spacing={2}>


                {data?.map(item => <CardComponent dataItem={item} />)}
            </Grid >
        </div>

    )
}

export default TimeLine