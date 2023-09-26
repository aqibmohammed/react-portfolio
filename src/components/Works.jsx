import React from 'react'
import { Tilt } from 'react-tilt'
import {motion} from 'framer-motion'
import { github } from '../assets'
import{styles} from '../styles'
import { sectionWrapper } from '../hoc'
import { projects } from '../constants'
import { fadeIn,textVariant } from '../utils/motion'
const ProjectCard =({index,name,description,tags,image,source_code_link})=>{
  return(
    <motion.div variants={fadeIn("up","spring",index*0.5,0.75)}>
      <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450
      }}
      className="bg-gray-400 p-5 rounded-2xl
      sm:w-[360px] w-full"
      >
        
        <div className='relative w-full h-[230px]'>
          <img src={image} alt={name}
          className='w-full h-full object-cover
          rounded-2xl'
          />
           <div className='absoulte inset-0 flex justify-end 
           m-3 card-img_hover'>
          <div 
          onClick={()=>window.open(source_code_link,"_blank")}
          className='black-gradient w-10 h-10
          rounded-full flex justify-center 
          items-center cursor-pointer'
          >
            <img src={github}
            alt="github"
            className='w-1/2 h-1/2
            object-contain'/>
          </div>
          
          </div>

        


          
        </div>
        <div className="mt-5">
          <h3 className='text-white font-bold text-[24] hover:text-black '>{name}</h3>
          <p className='text-black hover:text-white text-[14px]'>{description}</p>
        </div>
        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag)=>(
            <p key={tag.name}  className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
       
      </Tilt>
    </motion.div>
  )

}
const Works = () => {
  return (
<>
<motion.div variants={textVariant()}> 
<p className={styles.sectionSubText}>My Work</p>
      <h2 className={styles.sectionHeadText}>projects</h2>
</motion.div>
<div className='w-full flex'>
  <motion.p variants={fadeIn("","",0.1,1)}
  className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'>
    The Following Projects showcase my skills
    and Experience in certain technologies
    Each project is described with links to code repositories and live demos 
    It reflects my ability to solve complex problems and work with different technologies
    and manage projects effectively. 
  </motion.p>
  
</div>
<div className='mt-20 flex flex-wrap gap-7 justify-center'>
    {projects.map((projects,index)=>(
      <ProjectCard key={`project-${index}`}
      index={index}
      {...projects}
      />
    )
    )}
  </div>
</>
    )
}

export default sectionWrapper(Works,"" )