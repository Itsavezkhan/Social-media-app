import React from 'react'
import { useSelector } from 'react-redux'
import SinglePost from '../components/singlepost/SinglePost'

const Explore = () => {

  const {allposts} = useSelector((state) => state.post)

  return (
    <div className='pt-2 px-1'>
      {allposts?.map((post) => <SinglePost post={post} key={post._id}/>)}
    </div>
  )
}

export default Explore
