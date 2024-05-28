import React from 'react'

const dummy_tags = ['arts', 'science', 'politics', 'weather', 'culture']

const Tags = () => {
    return (
        <div className='px-4 w-full py-4 flex gap-2'>
            {dummy_tags.map(item => {
                return <div className=' text-sm px-2  rounded-r-full rounded-l-full border-[1px] border-gray-500 border-opacity-40'>
                <p>{item}</p>
                </div>
            })}
        </div>
    )
}

export default Tags