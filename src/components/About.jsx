import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi, I'm Caroline Stadnicki. </p>
            </div>
            <div>
              <p>I  am a Full-Stack Software Developer with a background as a Nurse in Neonatal Intensive Care Units. I have a passion for solving puzzles, tackling challenges and learning, which led me to explore the field of programming. Through my curiosity and problem-solving skills, I discovered the endless possibilities of coding and the joy it brings. I enrolled at Dev Academy on January of 2023, and through the intense 17-weeks programe I learned important technical and human skills to succeed in this career. I am excited to embrace new challenges and collaborate with the fantastic people in this industry to continue to grow as a developer.</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;