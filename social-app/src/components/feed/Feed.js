import React from 'react'
import "./feed.css"
import Share from '../share/Share'
import Post from '../post/Post'
import { Posts } from "../../dummymyData"

export default function feed() {
  return (
    <div className="feed">
    <div className="feedWrapper">
      <Share />
      {Posts.map((p) => (
        <Post key={p.id} post={p} />
      ))}
    </div>
  </div>
  )
}
