import React from 'react'
import {styles} from '../styles';
import {motion} from 'framer-motion';
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
    <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex 
     row items-start gap-5`}>
      <div><h1 className={`${styles.heroHeadText} text-white`}>
        Hi , I'm <span className='text font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-500 to-blue-500'>Aqib</span></h1>
        <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          May Peace Be Upon You!<br/>
          A IT Student with Many aspirations!

        </p>
        </div>

    </div>
        <ComputersCanvas/>
        {/* <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'> */}
        <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-start items-center">
          <a href='#about'>
            <div className='w-[30px] h-[50px] mt-5 rounded-3xl border-4 border-secondary  flex justify-center items-start p-2'>
              <motion.div
              animate={{
                y:[0,20,0]
              }}
              transition={
                {
                  duration:.9,
                  repeat: Infinity,
                  repeatType:'loop'

                }
              }
              className='w-3 h-3 rounded-full
              bg-secondary mb-1'
              />

            </div>
            
            </a>
        </div>
    </section>
  )
}

export default Hero