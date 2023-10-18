"use client";

import React, { useState } from 'react';
import Image from 'next/image';

const PromptCard = ({ post, handelTagClick, handelEdit, handelDelete }) => {
  const [copied, setCopied] = useState("");

  const handelCopy = (prompt) => {
    setCopied(prompt);
    navigator.clipboard.writeText(prompt);
    setTimeout(() => { setCopied(""); }, 4000);
  }

  return (
    <div className='prompt_card'>
      <div className="flex justify-between items-start gap-5">
        {post.creator ? (
          <div>
            <div className='flex-1 flex-justify-start items-center gap-3 cursor-pointer'>
              <Image
                src={post.creator.image}
                alt='user_image'
                width={40}
                height={40}
                className='rounded-full object-contain'
              />
              <div className='flex flex-col'>
                <h3 className='font-satoshi font-semibold text-gray-900'>{post.creator.username}</h3>
                <p className='font-inner text-sm text-gray-500'>{post.creator.email}</p>
              </div>
            </div>
          </div>
        ) : (
          <p className='font-inner text-sm text-gray-500'>No creator information available.</p>
        )}
        <div className='copy_btn' onClick={() => { handelCopy(post.prompt) }}>
          <Image
            src={copied === post.prompt
              ? '/assets/icons/tick.svg' :
              '/assets/icons/copy.svg'
            }
            width={12}
            height={12}
          />
        </div>
      </div>
      <div>
        <p className=' my-4 font-staoshi text-sm text-gray-400'>{post.prompt}</p>
        <p className=' font-inter text-sm blue_gradient '
          onClick={() => { handelTagClick && handelTagClick(post.tag) }}
        >{post.tag}</p>
      </div>
    </div>
  );
}

export default PromptCard;
