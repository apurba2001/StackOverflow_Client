import React from 'react'

import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import TagsList from './TagsList'
import './Tags.css'

const Tags = () => {
  const tagsList = [
    {
      id: 1,
      tagName: "Javascript",
      tagDesc: "Javascript is a famous scripting language"
    },
    {
      id: 2,
      tagName: "Python",
      tagDesc: "Python is a famous programming language"
    },
    {
      id: 3,
      tagName: "CSS",
      tagDesc: "CSS is used for styling web pages"
    }
  ]
  return (
    <div className='home-container-1'>
        <LeftSidebar />
        <div className='home-container-2'>
            <h1 className='tags-h1'>Tags</h1>
            <p className='tags-p'>A tag is a keyword or label that catagorizes your question with other, similer questions</p>
            <p>Using the right makes it easier for other to find and answer your question</p>
            <div className="tags-list-container">
              {
                tagsList.map((tag) => <TagsList key={tag.id} tag={tag} />)
              }
            </div>
        </div>
    </div>
  )
}

export default Tags