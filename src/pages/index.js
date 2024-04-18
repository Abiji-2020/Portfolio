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
      dark:text-light ">
        <Layout className=" ">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 md:w-full md:!-mt-12 -mt-12">
              <Image
                src={profilePic}
                alt="Abinand P"
                className="w-[80%] h-auto lg:hidden md:inline-block md:w-full "
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
                text="Turning Vision Into Reality With Code And Design"
                className="!text-6xl xl:!text-5xl lg:!text-center lg:!text-6xl  md:!text-5xl sm:!text-3xl lg:w-full
              !text-left"
              />
              <p className="my-4 text-base font-medium md:text-small sm:text-xs">
                As a skilled full-stack developer, I am dedicated to turning
                ideas into innovative web applications. Explore my latest
                projects and articles, showcasing my expertise in web
                development and mircroservices.
              </p>

              <div
                className="flex
              items-center
              self-start lg:self-center
              mt-2"
              >
                <Link
                  href="/dummy.pdf"
                  target={"_blank"}
                  className="flex items-center text-light
                bg-dark p-2.5 px-6 rounded-lg text-lg font-semibold
                hover:bg-light hover:text-dark
                border-2 border-solid border-transparent
                dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light  hover:dark:border-light hover:border-dark
                "
                  download={true}
                >
                  Resume
                  <LinkArrow className="ml-1 w-6" />
                </Link>
                <Link
                  href='mailto:abinand0911@gmail.com target={"_blank'
                  className="ml-4 text-lg
                font-medium capitalize
                text-dark underline  dark:text-light"
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
