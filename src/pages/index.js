import Head from "next/head";
import Layout from "@/components/Layout";
import Image from "next/image";
import Link from "next/link";
import profilePic from "../../public/images/profile/developer-pic-1.png";
import AnimatedText from "@/components/AnimatedText";
import { LinkArrow } from "@/components/Icons";

export default function Home() {
  return (
    <>
      <Head>
        <title>Abinand P</title>
      </Head>
      <main className="flex items-center text-dark w-full min-h-screen
      dark:text-light dark:bg-dark ">
        <Layout className="xs:py-72 ">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 md:w-full md:!-mt-12 -mt-12">
              <Image
                src={profilePic}
                alt="Abinand P"
                className="w-[80%] h-auto lg:hidden md:inline-block md:w-full xs:hidden "
                priority={true}
                sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 50vw"
              />
            </div>

            <div
              className="w-1/2 lg:w-full lg:text-center
            flex flex-col 
            items-center self-center"
            >
              <AnimatedText
                text="Turning Vision Into Reality With Code And Problem Solving"
                className="!text-6xl xl:!text-5xl lg:!text-center lg:!text-6xl  md:!text-5xl sm:!text-3xl lg:w-full xs:!text-4xl
              !text-left"
              />
              <p className="my-4 text-base font-medium md:text-small sm:text-xs xs:text-sm">
                As a skilled full-stack developer, I am dedicated to turning
                ideas into innovative web applications. Trying to improve the knowledge and exploring the world of Web development and Software development best practices.
              </p>

              <div
                className="flex
              items-center 
              self-start lg:self-center xs:col-span-1 xs:flex-col lg:flex-row 
              mt-2"
              >
                <Link
                  href="/dummy.pdf"
                  target={"_blank"}
                  className="flex items-center text-light
                bg-dark p-2.5 px-6 rounded-lg text-lg font-semibold
                hover:bg-light hover:text-dark xs:inline-flex
                border-2 border-solid border-transparent md:mx-7 lg:md:mx-7
                dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light  hover:dark:border-light hover:border-dark
                "
                  download={true}
                >
                  Resume
                  <LinkArrow className="ml-1 w-6" />
                </Link>
                <br></br>
                <Link
                  href='mailto:abinand0911@gmail.com target={"_blank'
                  className="flex items-center text-light
                  bg-dark p-2.5 px-6 rounded-lg text-lg font-semibold
                  hover:bg-light hover:text-dark xs:inline-flex
                  border-2 border-solid border-transparent lg:mx-7
                  dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light  hover:dark:border-light hover:border-dark
                  "
                >
                  contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
