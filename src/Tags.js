import React from 'react'

const dummy_tags = ['arts', 'science', 'politics', 'weather', 'culture']

const Tags = ({ size }) => {
    return (
        <div className='py-4 capitalize'>
            {size == 'big' ? <div className='md:hidden px-4 w-full  flex  gap-2 ' >
                {dummy_tags.map(item => {
                    return <div className=' text-sm px-2  rounded-r-full rounded-l-full border-[1px] border-gray-500 border-opacity-40'>
                        <p>{item}</p>
                    </div>
                })}

            </div> :
                <div className='float-right hidden md:inline space-y-1  px-4 w-full ' >
                    {dummy_tags.map(item => {
                        return <div className='ml-auto w-fit text-sm px-2  rounded-r-full rounded-l-full border-[1px] border-gray-500 border-opacity-40'>
                            <p>{item}</p>
                        </div>
                    })}

                </div>}
        </div>
    )
}

export default Tags