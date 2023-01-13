import React from 'react';
import { Feature } from '../../components';
import './features.css';

const featuresData = [
  {
  title:"Multi-Modal capabilities",
  text: "ChatGPT-3 respond to various forms of input, including text, images, and speech."
},
{
  title:"Flexible",
  text: "ChatGPT can do anything from translation, question answering, and text generation"
},
{
  title:"Large sets of training",
  text: "Trained from massive amounts of data until 2021"
},
{
  title:"Fine tuning",
  text: "ChatGPT can be specialized to complete specific tasks such as customer service."
}

]

const Features = () => {
  return (
    <div className='gpt3__features section__padding' id="features">
      <div className='gpt3__features-heading'>
        <h1 className='gradient__text'>The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.</h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className='gpt3__features-container'>
        {featuresData.map((item,index) => (
          <Feature title={item.title} text={item.text} key={item.title + index}/> 

        ))}
      </div>
    </div>
  )
}

export default Features
