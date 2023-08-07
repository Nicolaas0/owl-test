import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { GrLocation } from 'react-icons/gr'
import pikImage from '@/public/image-1.png'
import kpImage from '@/public/image-2.png'
import gsImage from '@/public/image-3.png'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  const locations = [
    {
      name: 'Pantai Indah Kapuk',
      image: pikImage,
      url: 'pik'
    },
    {
      name: 'Kelapa Gading',
      image: kpImage,
      url: 'kelapa-gading'
    },
    {
      name: 'Gading Serpong',
      image: gsImage,
      url: 'gading-serpong'
    }
  ]

  const clickHandler = (name: string) => {
    router.push(`/booking/${name}`)
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='px-8 py-3 w-[430px] shadow-md'>
        <div className='w-full flex justify-between items-center mb-2'>
          <div className='font-extrabold text-3xl text-[#404040] w-4/6'>Choose Your <span className='text-[#D6B87C]'>Place</span></div>
          <GrLocation color='#757575' size={52} />
        </div>
        <div className='text-xs leading-5 mb-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna </div>
        <div className='space-y-2 mb-3'>
          {
            locations.map((item, i) => {
              return (
                <div key={i}>
                  <Image className='cursor-pointer' src={item.image} width={360} height={120} alt={item.name} onClick={() => { clickHandler(item.url) }} />
                </div>
              )
            })
          }
        </div>
        <div className='text-center py-6'>Read our <span className='text-[#3267E3] cursor-pointer'>Terms & Conditions, Privacy Policy</span></div>
      </div>
    </div>
  )
}
