import React, { useState } from 'react'
import "./post.css"
import { VscSettings } from "react-icons/vsc";
import { AiFillLike } from "react-icons/ai";
import { IoIosHeart } from "react-icons/io";
import { Users } from '../../../../dummyData';

function Posts({post}) {
    const [like, setLike] = useState(post.like)
    const [isLiked, setIsLiked] = useState(false)

    const likeHandler = () => {
        setLike(like + (isLiked ?  -1 : 1))
        setIsLiked(!isLiked);
    }
   // console.log(post.date)
  return (
    <div className="postContainer">
        <div className="profile-name">
            <div>
            <img src={Users.filter((u) => u.id === post?.userId)[0].profilePicture} alt="profileImg" className='profileImg' />
            <h5>{Users.filter((u) => u.id === post?.userId)[0].username}</h5>
            <p> {post.date} </p>
            </div>
            <VscSettings className='setting-post-icon' />
        </div>
        <div>
            <p> {post?.desc} </p>
        </div>
        <div>
        <img src={post.photo} alt="sharedImg" className='sharedImage' width={530} />
        </div>
        <div className="likeDislike">
            <div>
                <div>
                <AiFillLike color='blue' onClick = {likeHandler} />
                <p>{like}</p>
                </div>
                <div>
                <IoIosHeart color='red'   />
                {/* <p>Love</p> */}
                </div>
            

            </div>
            <p>
                {post.comment}
            </p>
        </div>
       

    </div>
  )
}

export default Posts