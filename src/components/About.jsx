import React from 'react';
import '../App.css';
import { services } from '../constants';
import ButtonLink from './ButtonLink';

const ServiceCard = ({ service }) => (
  <div className='sm:w-[250px] w-full'>
    <div
      className='w-full green-pink-gradient p-[1px] rounded-[20px]'>
      <div
        className='rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        style={{ background: '#151030' }}>
        <img
          src={service.icon}
          alt='some_icon'
          className='w-16 h-16 object-contain'
        />
        <h3 className='text-white text-[20px] font-bold text-center'>
          {service.title}
        </h3>
      </div>
    </div>
  </div>
);

const About = () => {
  return (
    <div className='bg-black p-4 h-full w-full text-white sm:flex sm:justify-around about' id='about'>
      <div className='flex flex-col justify-around'>
        <div className='sm:px-16 px-2'>
          <p className='font-light'>INTRODUCTION.</p>
          <h2 className='text-4xl sm:text-5xl font-extrabold mt-2'>Overview.</h2>
          <p className='mt-3 mb-6 text-[17px] max-w-3xl leading-[30px]'>Hello World, This is Balaji Yaswanth Vankala. I am a 2023 B.Tech CSE graduate 🎓. I have got an emotion for computers 💘. I am a Software Engineer (SDE-II) with good experience in building optimized backend systems and wonderful frontend web and mobile applications 🚀. I am an open-source enthusiast and a competitive programmer. Make sure to checkout my articles on <a className=' text-purple-300 hover:text-purple-400 duration-300' href="https://medium.com/@balajiyaswanth.v" target='_blank'>Medium</a> and answers on <a className=' text-green-200 hover:text-green-400 duration-300' href="https://stackoverflow.com/users/12291279/csgeek" target='_blank'>StackOverflow</a> 😉 . Apart from coding my hobbies are playing sudoku and swimming 🐳. Checkout my gaming clips on <a className='text-red-300 hover:text-red-400 duration-300' href="https://www.youtube.com/@240ping.24fps">Youtube</a>.</p>

          <ButtonLink
            url='https://drive.google.com/drive/u/0/folders/1N_cRa01DbAr25eBvJfM-wlky_W-Cx0Yh'
            text='View Resume →'
            padding={`p-3`}
          />

        </div>
        <div className='mt-20 flex justify-center flex-wrap gap-7'>
          {services.map((service) => (
            <ServiceCard service={service} />
          ))}
        </div>
      </div>
      <img src="me-og.jpg" alt="balaji-yaswanth" className='sm:w-1/3 mt-4 sm:mt-0' />
    </div>
  )
}

export default About;