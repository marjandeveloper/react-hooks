import React, { useState } from 'react'

function ResourceType() {
  const [ResourceType, setResourceType] = useState('posts')
  return (
    <>
      <div>
        <button onClick={() => setResourceType('posts')}>Posts</button>
        <button onClick={() => setResourceType('users')}>Users</button>
        <button onClick={() => setResourceType('comments')}>Comments</button>
      </div>
      <h1>{ResourceType}</h1>
    </>
  )
}

export default ResourceType
