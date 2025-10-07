'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa' // WhatsApp ikonu için ekledik

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  return (
    <div className='fixed bottom-8 right-8 z-999'>
      <div className='flex items-center gap-2.5'> 
        <Link
          href='https://wa.me/905xxxxxxxxx' // Telefon numaranızı güncelleyin
          target='_blank'
          aria-label='WhatsApp ile iletişime geç'
          className='flex items-center justify-center w-16 h-16 rounded-full bg-[#25D366] shadow-lg transition hover:scale-105'
        >
          <FaWhatsapp size={36} color="#fff" />
        </Link> 
        {isVisible && (
          <div
            onClick={scrollToTop}
            aria-label='scroll to top'
            className='back-to-top flex h-10 w-10 cursor-pointer items-center justify-center rounded-md bg-[#102C46] text-white shadow-md transition duration-300 ease-in-out hover:bg-dark'>
            <span className='mt-[6px] h-3 w-3 rotate-45 border-l border-t border-white'></span>
          </div>
        )} 
      </div>
    </div>
  )
}