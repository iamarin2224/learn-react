import React from 'react'
import { useParams } from 'react-router'

function User() {
    const {userId} = useParams()
  return (
    <div className='bg-gray-700 text-center text-white text-2xl py-2 mx-24 my-4 rounded-lg'>User: {userId}</div>
  )
}

export default User