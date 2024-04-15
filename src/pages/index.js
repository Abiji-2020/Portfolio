import Head from 'next/head'
import Layout from '@/components/Layout'
import Image from 'next/image'
import profilePic from "../../public/images/profile/developer-pic-1.png";

export default function Home() {
  return (
    <>
      <Head>
        <title>Abinand P</title>
      </Head>
      <main className='flex items-center text-dark w-full min-h-screen '>
        <Layout>
          <div className="flex items-center justify-between w-full">
            <div >
              <Image src={profilePic} alt="Abinand P"  className="w-full h-auto" />
            </div>
          </div>
        </Layout>
      </main>
    </>
  )
}
