import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
const Header = () => {
  return (
    <div className='gpt3__header section__padding' id='home'>
      <div className='gpt3__header-content'>
        <h1 className='gradient__text-animated'>Let’s Build Something amazing with GPT-3 OpenAI</h1>
        <p>	ChatGPT is the ultimate language companion, an advanced language model that can understand and generate human-like text that will leave you amazed. Imagine having a conversation that feels like talking to a real person, or having a story written just for you, or even getting a summary of a long document in seconds. Give ChatGPT a try and experience the power of language like never before. </p>
        <div className='gpt3__header-content__input'>
          <input type='email' placeholder='Your Email Address' />
          <button type='button'>Get Started</button>
        </div>
        <div className='gpt3__header-content__people'>
          <img src={people} alt='People'/>
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className='gpt3__header-image'>
        <img src={ai} alt='ai'/>
      </div>
    </div>
  )
}

export default Header
