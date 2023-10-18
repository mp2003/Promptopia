import React from 'react'
import PromptCard from './PromptCard'
const Profile = ({ name, desc, data, handelEdit, handelDelete }) => {
  return (
    <section className='w-full'>
      <h1 className='head_text text-left'>
        <span className='blue_gradient'>{name} Profile</span>
      </h1>
      <p className='desc text-left'>{desc}</p>
      <div className='mt-10 prompt_layout'>
        {data.map((post) => (
          <PromptCard
            key={post._id}
            post={post}
            handelEdit={() => handelEdit && handelEdit(post)}
            handelDelete={() => handelDelete && handelDelete(post)}
          />

        ))}
      </div>

    </section>
  )
}

export default Profile