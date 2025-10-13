'use client'
import Image from 'next/image'
import { useRef, useState, useEffect } from 'react'
import Signin from '@/app/components/Auth/SignIn'
import { Icon } from '@iconify/react'

const Banner = () => {
  const [isSignInOpen, setIsSignInOpen] = useState(false)
  const signInRef = useRef<HTMLDivElement>(null)

  // Modal dışına tıklayınca kapat
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        signInRef.current &&
        !signInRef.current.contains(event.target as Node)
      ) {
        setIsSignInOpen(false)
      }
    }
    if (isSignInOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.body.style.overflow = ''
    }
  }, [isSignInOpen])

  return (
    <section className='bg-header pt-28 lg:pb-14 overflow-hidden'>
      <div className='container'>
        <div className='grid gap-5 grid-cols-1 lg:grid-cols-12 content-center'>
          <div className='lg:col-span-7 flex flex-col justify-center relative'>
            <Image
              src='/images/hero/star.svg'
              alt='star-image'
              width={95}
              height={97}
              className='absolute top-[-74px] right-[51px] opacity-10'
            />
            <Image
              src='/images/hero/lineone.svg'
              alt='line-image'
              width={190}
              height={148}
              className='absolute top-[-74px] right-[51px] opacity-5'
            />
            <Image
              src='/images/hero/linetwo.svg'
              alt='line-image'
              width={190}
              height={148}
              className='hidden xl:block absolute bottom-[-74px] right-[-38rem] opacity-5'
            />
            <div className='flex flex-col gap-5'>
              <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-full sm:max-w-lg md:max-w-xl lg:max-w-2xl leading-tight break-words text-midnight_text text-center lg:text-start mx-auto lg:mx-0 pt-5'>
                Yurt Dışı Vize Danışmanlığında Güvenilir Adres
              </h1>
              <p className='text-black/75 text-lg font-normal text-center lg:text-start max-w-lg mx-auto lg:mx-0'>
                Vize başvurularınızda hızlı ve sorunsuz hizmet. Hedefinize kolayca ulaşın, işlemleri uzman ekibimize bırakın! <br />
                <span className="font-semibold text-primary">
                  ‘ABD, UK ve Schengen vize randevularınız için güvenilir adres!’ 
                </span>
              </p>
              <div className='mx-auto lg:mx-0'>
                <button
                  className='text-white text-xl font-medium py-4 px-8 rounded-full transition duration-300 border border-primary bg-primary hover:bg-transparent hover:cursor-pointer hover:text-primary'
                  onClick={() => setIsSignInOpen(true)}
                >
                  Randevu Oluştur
                </button>
              </div>
            </div>
          </div>
          <div className='mt-10 lg:mt-0 lg:col-span-5'>
            <div>
              <Image
                src='/images/hero/banner.svg'
                alt='Vize Danışmanlık Banner'
                width={698}
                height={652}
                className='w-full'
              />
            </div>
          </div>
        </div>
      </div>
      {isSignInOpen && (
        <div className='fixed top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center z-50'>
          <div
            ref={signInRef}
            className='relative mx-auto w-full bg-white max-w-md overflow-hidden rounded-lg px-8 pt-14 pb-8 text-center bg-dark_grey/90 backdrop-blur-md'
          >
            <button
              onClick={() => setIsSignInOpen(false)}
              className='absolute top-0 right-0 mr-8 mt-8 dark:invert hover:cursor-pointer'
              aria-label='Close Sign In Modal'
            >
              <Icon
                icon='tabler:currency-xrp'
                className='text-white hover:text-primary text-24 inline-block me-2'
              />
            </button>
            <Signin />
          </div>
        </div>
      )}
    </section>
  )
}

export default Banner