import React from 'react'

const PostContent = ({text,expanded}) => {
  return (
    <div><p className="text-gray-700 mb-3">
        {expanded ? text : `${text.slice(0, 100)}...`}
      </p></div>
  )
}

export default PostContent