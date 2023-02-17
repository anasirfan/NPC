import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <div className='right-20'>
      <div>
        <title>NPC-Best for Streaming</title>
        <meta name='description'content='NPC-Best for Streaming' />
      </div>
      <Navbar/>
      <Sidebar/>
    </div>
    </>
  )
}
