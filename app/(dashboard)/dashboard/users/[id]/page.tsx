import React from 'react'

const userDetails = async ({ params }: { params: Promise<{ id: string }>}) => {
    const { id } = await params;
    return (
        <div>
             <h1 className='text-5xl mt-10'>Showing details for user #{id}</h1>
        </div>
    )
}
export default userDetails 