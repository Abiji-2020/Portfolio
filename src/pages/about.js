import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import ProfilePic from "../../public/images/profile/developer-pic-2.jpg";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills";

const AnimatedNumber = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const about = () => {
  return (
    <>
      <Head>
        <title> Abinand | About</title>
        <meta
          name="description"
          content="This a webpage about myself, Abinand P. Which consists of my projects and all other detials of me "
        ></meta>
      </Head>
      <main
        className="
      flex w-full flex-col
      items-center justify-center
      dark:text-light"
      >
        <Layout className="pt-0">
          <AnimatedText text="Passion Fuels Purpose!" className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8 md:mb-10" />
          <div className="grid w-full grid-cols-8 gap-16  sm:gap-8 ">
            <div
              className="col-span-3 flex flex-col xl:col-span-4
        items-start justify-center md:order-2
        "
            >
              <h2
                className="mb-4 text-lg font-bold
            uppercase text-dark/75 dark:text-light/75 "
              >
                About Me
              </h2>
              <p className="font-medium text-justify  ">
                🌟 Hi, I'm Abinand P, aspiring computer science engineering
                student with an unwavering passion for technology, an aspiring
                interest in Backend development along with DevOps, and a commitment to open source
                contributions in repositories such as Daytona, Permit.io and Cyclops. Also in solving bounties in Algora. 
              </p>

              <p className="font-medium my-4 text-justify  ">
                <span className="font-bold text-dark/80">
                  🌐 Tech Enthusiast:
                </span>{" "}
                Currently navigating my pre-final year in computer science and
                engineering, I'm building a solid foundation in programming and
                exploring the vast landscape of technology. As the computer
                Science is a vast domain, I am currently selecting myself the
                best domain as I am capable of and my keen interest resides on
                the adapting world. The most adaptive being the computer and the
                cloud works and the fast paced devlopment and delivery thought
                me of thinking to improve more of the tech.
              </p>

              <p className="font-medium text-justify ">
                <span className="font-bold text-dark/80">
                  {" "}
                  🚀 Aspiring DevOps Learner:
                </span>{" "}
                While my journey into DevOps is yet to begin, I'm eagerly
                anticipating the challenges and learning opportunities it
                promises. I am enthusiastic about bridging the gap between
                development and operations, optimizing processes, and
                contributing to the evolution of software development practices.
                The culture where each development is in fast pace action and
                continuously evloving and continuiously improving day by day,
                the adatation to the upcoming this fast paced development is
                backed by the DevOps culture, which made my curious mind to
                devlve into the learning path of DevOps culture as it requires
                fast adapting nature and improving and detailing in each and
                every detail as it delivers the end proudct the user obtains.
              </p>
            </div>

            <div
              className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark md:order-1
bg-light p-4  dark:bg-dark dark:border-light xl:col-span-4"
            >
              <div
                className="absolute
    top-0 -right-3 
    -z-10 w-[102%] h-[103%]
   rounded-[2rem] bg-dark 
   dark:bg-light 
   "
              />
              <Image
                src={ProfilePic}
                alt="Abinand P"
                className="w-full h-auto rounded-2xl sm:w-0"
                priority = {true}
                sizes= '(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw'
              />
            </div>

            <div className="col-span-2 flex flex-col  justify-between xl:col-span-8 xl:flex-row xl:items-center 
            md:order-3 md:-ml-4 md:px-0 md:mr-4 md:flex-row">
              <div className="flex flex-col items-center justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumber value={3} />+
                </span>
                <h2 className="text-2xl font-medium capitalize text-dark/75 dark:text-light/75 md:mx-3">
                  Projects Completed
                </h2>
              </div>

              <div className="flex flex-col items-center justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumber value={4} />+
                </span>
                <h2 className="text-2xl font-medium capitalize text-dark/75 dark:text-light/75">
                  Languages Known
                </h2>
              </div>

              <div className="flex flex-col items-center justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumber value={10} />+
                </span>
                <h2 className="text-2xl font-medium capitalize text-dark/75  dark:text-light/75">
                  Certifications
                </h2>
              </div>
              <div className="flex flex-col items-center justify-center">
                <span className="inline-block text-7xl font-bold ">
                  <AnimatedNumber value={1400} />+
                </span>
                <h2 className="text-2xl font-medium capitalize text-dark/75 dark:text-light/75">
                  Rating in LeetCode
                </h2>
              </div>
            </div>
          </div>
          <Skills />
        </Layout>
      </main>
    </>
  );
};

export default about;
