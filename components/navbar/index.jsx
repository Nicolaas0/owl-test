import Image from 'next/image'
import logo from '@/public/logo.png'
import { RxHamburgerMenu } from 'react-icons/rx'
import { useRouter } from 'next/navigation'

export default function Navbar() {
  const router = useRouter()
  return (
    <div className="flex justify-between text-center items-center bg-black px-6 py-3 text-[#D6B87C] text-lg">
      <div className='flex items-center gap-3 cursor-pointer' onClick={()=> { router.push('/') }}>
        <Image src={logo} alt="Black Owl Logo" width={50} height={50} />
        <div>BLACK OWL</div>
      </div>
      <RxHamburgerMenu color='#FFF' className='cursor-pointer' />
    </div>
  )
}
