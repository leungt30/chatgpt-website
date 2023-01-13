import React from 'react';
import { Feature } from '../../components';
import './whatGPT3.css';

const WhatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id='wgpt3'>
      <div className='gpt3__whatgpt3-feature'>
        <Feature title="What is GPT-3" text="ChatGPT is a cutting-edge language model that can help you with any task requiring natural language understanding or generation. It has been trained on a massive amount of data, allowing it to generate human-like text and to understand context. Use it for creative writing, customer service, language translation, and much more. Give ChatGPT a try and see the difference it can make."/>
      </div>
      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient__text'> The possibilities are beyond your imagination </h1>
        <p> Explore The Library </p>
      </div>
      <div className='gpt3__whatgpt3-container'>
        <Feature title="Chatbots" text="ChatGPT chatbots are particularly useful for their advanced language understanding and generation capabilities, which allows them to hold human-like conversations."/>
        <Feature title= "Education" text = "ChatGPT can be used for educational purposes by generating educational materials, providing personalized tutoring through human-like conversation."/>
        <Feature title= "Knowledgebase" text="ChatGPT has a vast knowledge base, having been trained on a large amount of text data. This allows it to understand and respond to a wide range of topics and queries, providing accurate and informative responses."></Feature>
      </div>
    </div>
  )
}

export default WhatGPT3
