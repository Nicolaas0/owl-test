import { ReactNode } from 'react'
import Navbar from '@/components/navbar'

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="h-screen mx-auto space-y-4">
      <Navbar />
      <div className='pb-4'>
        {children}
      </div>
    </div>
  )
}
