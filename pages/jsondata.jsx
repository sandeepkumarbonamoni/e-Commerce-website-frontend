import React from 'react'
import db from './db.json'

function jsondata() {
  return (
    <div>
        {
            db.map(post =>(
                <div key={post.id}>
                    <h2>{post.name}</h2>
                    </div>
            ))
        }

    </div>
  )
}

export default jsondata