'use client'
import React, { useState, useEffect } from 'react';
import PromptCard from './PromptCard';

const PromptCardList = ({ data, handelTagClick }) => {
  return (
    <div className='mt-16 prompt_layout'>
      {data.map((post) => {
        <PromptCard
          key={post._id}
          post={post}
          handelTagClick={handelTagClick}
        />

      })}
    </div>
  )
}

const Feed = () => {
  const [searchText, setSearchText] = useState('');
  const [posts, setPosts] = useState([])
  const handelSearchChange = (e) => {

  }

  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch('/api/prompt');
      const data = await response.json();

      setPosts(data);
    }


    fetchPost();
  }, [])

  // start 
  // from here 

  return (
    <section className='feed'>
      <form className='relative w-full flex-center'>
        <input
          type='text'
          placeholder='search for a tag or a username'
          value={searchText}
          onChange={handelSearchChange}
          required
          className='search_input peer'
        />

      </form>
      <PromptCardList
        data={[posts]}
        handelTagClick={() => { }}

      />

    </section>

  )
}

export default Feed