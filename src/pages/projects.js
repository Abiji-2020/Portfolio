import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import Image from 'next/image'
import { GithubIcon } from '@/components/Icons'
import Learnative from "../../public/images/projects/Learnative.png"
import golangmicro  from "../../public/images/projects/Golang.jpg"
import blockchain from "../../public/images/projects/Blockchain.jpg"
import threads from "../../public/images/projects/Threads.jpg"

const FeatuedProjct = ({type,title,summary,img,link,github}) =>{
    return(
        <article className='w-full
        flex items-center
        justify-between 
        p-6
        dark:bg-dark dark:border-light
        rounded-3xl border border-solid border-dark
        bg-light shadow-2xl '>
          
            <Link href={link} target='_blank'
            className='w-1/2 cursor-pointer overflow-hidden rounded-lg
            '>
                <Image src={img} alt={title} className='w-full  h-auto
                '
                priority = {true}
                sizes= '(max-width:768px) 100vw, (max-width:1200px) 50vw, 50vw'/>

            </Link>
            
            <div className='w-1/2 flex flex-col
            items-start justify-between pl-6 '>
                <span className='text-primary font-medium text-xl dark:text-primaryDark'>
                    {type}
                </span>
                <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left
                    text-4xl font-bold dark:text-light'>{title}</h2>
                </Link>
                <p className= " my-2 font-medium text-dark dark:text-light ">{summary}</p>
                <div className='mt-2 flex items-center'>
                <Link href={github} target='_blank' className='w-10 dark:text-dark dark:bg-light dark:rounded-full'> <GithubIcon /> </Link>
                <Link href={link} target='_blank' className='
                ml-4 rounded-lg bg-dark text-light  dark:bg-light dark:text-dark p-2 px-6 text-lg
                font-semibold'> Visit Project</Link>
                </div>
            </div>
        
        </article>
    )
}

const Project = ({type, title,img,link,github}) =>{
    return(
        <article className='w-full  flex-col flex items-center justify-center
        rounded-2xl border border-solid border-dark bg-light p-6 relative shadow-2xl 
        dark:bg-dark dark:border-light  '>
            <Link href={link} target='_blank'
            className='w-full cursor-pointer overflow-hidden rounded-lg
            '>
                <Image src={img} alt={title} className='w-full  h-auto'
                priority = {true}
                sizes= '(max-width:768px) 100vw, (max-width:1200px) 50vw, 50vw'/>

            </Link>
            <div className='w-full flex flex-col
            items-start justify-between mt-4 '>
                <span className='text-primary font-medium text-xl dark:text-primaryDark'>
                    {type}
                </span>
                <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left dark:text-light 
                    text-4xl font-bold '>{title}</h2>
                </Link>
              
                <div className='mt-2 flex items-center'>
                <Link href={github} target='_blank' className='w-10 dark:text-dark dark:bg-light dark:rounded-full'> <GithubIcon /> </Link>
                <Link href={link} target='_blank' className='
                ml-4 rounded-lg bg-dark text-light dark:bg-light dark:text-dark p-2 px-6 text-lg
                font-semibold'> Visit</Link>
                </div>
            </div>
        </article>
    )
}

const projects = () => {
  return (
    <>
    <Head>
      <title> Abinand | Projects</title>
      <meta
        name="description"
        content="Consists of the projects done by Abinand P. Github Link: www.github.com/Abiji-2020"
      ></meta>
    </Head>

    <main className='w-full flex flex-col items-center justify-center'>
        <Layout className='pt-16'> 
            <AnimatedText text = "Imagination Trumps Knowledge!" className='mb-16'/>
            <div className="grid gird-cols-12 gap-24 items-center">
                <div className = 'col-span-12 items center '>
                    <FeatuedProjct
                    title="Learnative"
                    summary="Learnative combines cutting-edge AI technologies with interactive learning experiences, providing students with personalized and efficient study support. Whether you're tackling complex subjects, preparing for exams, or exploring new interests, Learnative is here to enhance your learning journey."
                    link = "https://learnative.vercel.app/"
                    type="Featured Project"
                    img={Learnative}
                    github="https://github.com/Abiji-2020/DuHacks3.0-Learnative"
                    />
                </div>
                <div className='col-span-6'>
                    <Project
                    title="Golang Mircoservices"
                   
                    link = "https://github.com/Abiji-2020/go-microservice"
                    type="Project"
                    img={golangmicro}
                    github="https://github.com/Abiji-2020/go-microservice"
                    />
                </div>
                <div className='col-span-6'>
                <Project
                title="Blockchain Projects"
                link = "https://github.com/Abiji-2020/Blockchain-Mini-projects"
                type = "Mini Project"
                img = {blockchain}
                github="https://github.com/Abiji-2020/Blockchain-Mini-projects"
                />
                </div>
                <div className = 'col-span-12 items center '>
                    <FeatuedProjct
                    title="Threads clone"
                    summary="Threads is a social media platform that allows users to share their thoughts, ideas, and opinions. 
                    Similar to  that to showcase my knowledge of the Next.js framwork, I have created a clone of the threads website."
                    link = "https://github.com/Abiji-2020/threads_clone"
                    type="Featured Project"
                    img={threads}
                    github="https://github.com/Abiji-2020/threads_clone"
                    />
                </div>

            </div>


        </Layout>
    </main>
    </>
  )
}

export default projects
