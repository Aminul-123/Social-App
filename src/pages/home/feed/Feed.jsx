import React from 'react'
import "./feed.css";
import Share from "./share/Share"
import Posts from './posts/Posts';
import { AllPosts } from '../../../dummyData';

function Feed() {
  return (
    <div className="feedContainer">
       <Share/>

       {AllPosts.map((p) => (
        <Posts key={p.id} post={p}/>
       ))}
       
    </div>
  )
}

export default Feed