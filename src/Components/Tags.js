import React from 'react'

const DUMMY_TAGS = ['arts', 'science', 'politics', 'weather', 'culture']

const Tags = ({ size }) => {
    return (
        <div className='py-4 capitalize'>
            {size == 'big' ? <div className='md:hidden px-6 w-full  flex  gap-2 ' >
                {DUMMY_TAGS.map(item => {
                    return <div className='bg-light dark:bg-dark dark:text-light bg-opacity-40 text-sm px-2  rounded-r-full rounded-l-full border-[1px] border-white border-opacity-40'>
                        <p>{item}</p>
                    </div>
                })}

            </div> :
                <div className='z-20 sticky top-20 -left-[70%] hidden md:block space-y-1  px-4 w-full ' >
                    {DUMMY_TAGS.map(item => {
                        return <div className='bg-light dark:bg-dark dark:text-light bg-opacity-40 ml-auto w-fit text-sm px-2  rounded-r-full rounded-l-full border-[1px] border-white border-opacity-40'>
                            <p>{item}</p>
                        </div>
                    })}

                </div>}
        </div>
    )
}

export default Tags