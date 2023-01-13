import React from 'react';
import './blog.css';
import {Article} from '../../components'
import { blog01,blog02,blog03,blog04,blog05 } from '../../components/article/imports';

const Blog = () => {
  return (
    <div className='gpt3__blog section__padding' id='blog'>
      <div className='gpt3__blog-heading'>
        <h1 className='gradient__text'>A lot is happening, We are blogging about it. </h1>
      </div>
      <div className='gpt3__blog-container'>
        <div className='gpt3__blog-container_groupA'> 
          <Article imgUrl={blog01} date="Sep 26, 2021" title="Revolutionizing Customer Service: How ChatGPT is Changing the Game"/>
        </div>
        <div className='gpt3__blog-container_groupB'> 
          <Article imgUrl={blog02} date="Sep 26, 2021" title="The Power of Language: How ChatGPT is Advancing NLP and Text Generation"/>
          <Article imgUrl={blog03} date="Sep 26, 2021" title="The Future of Education: Using ChatGPT for Personalized Tutoring and Content Creation"/>
          <Article imgUrl={blog04} date="Sep 26, 2021" title="How ChatGPT is Transforming the Business World: From Sales to Marketing"/>
          <Article imgUrl={blog05} date="Sep 26, 2021" title="ChatGPT and the Future of AI: The Capabilities and Potential of this Advanced Language Model"/>
        </div>

      </div>
    </div>
  )
}

export default Blog
