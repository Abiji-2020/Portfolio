import React from 'react'
import {motion} from 'framer-motion'


const Skill = ({name,x,y}) =>{

    return (
        <motion.div className='flex items-center justify-center rounded-full
        font-semibold bg-dark text-light
        py-3 px-6 shadow-dark
        cursor-pointer absolute'
        
        whileHover={{scale:1.15}}
        initial = {{x:0,y:0}}
        whileInView={{x:x,y:y}}
        transition={{duration:1.05}}
        
        >
            {name}
        </motion.div>
    )

}








const Skills = () => {
  return (
    <>
    <h2 className='font-bold
    text-8xl mt-38 
    w-full 
    text-center'>Skills</h2>

    <div className='w-full h-screen relative flex items-center justify-center rounded-full
    bg-circularLight'>

        <motion.div className='flex items-center justify-center rounded-full
        font-semibold bg-dark text-light
        p-8 shadow-dark
        cursor-pointer '
        
        whileHover={{scale:1.15}}>
            Web
        </motion.div>
        <Skill name="HTML" x='-20vw' y='-2vw'/>
        <Skill name="CSS" x='-5vw' y='-10vw'/>
        <Skill name="JavaScript" x='16vw' y='6vw'/>
        <Skill name="Next.js" x='0vw' y='12vw'/>
        <Skill name="Java" x='-20vw' y='-14vw'/>
        <Skill name="C++" x='14vw' y='-12vw'/>
        <Skill name="DSA" x='33.9vw' y='-5vw'/>
        <Skill name="SpringBoot" x='0vw' y='-20vw'/>
        <Skill name="GitHub" x='-27vw' y='15vw'/>
        <Skill name="GoLang" x='18vw' y='18vw'/>
    </div>
    </>
  )
}

export default Skills
