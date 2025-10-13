'use client'
import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import { Icon } from '@iconify/react/dist/iconify.js'
import { plansData } from '@/app/types/plans'
import PlansSkeleton from '@/app/Skeleton/Plans'
import Signin from '@/app/components/Auth/SignIn'

const Pricing = () => {
  const [plans, setPlans] = useState<plansData[]>([])
  const [loading, setLoading] = useState(true)
  const [isSignInOpen, setIsSignInOpen] = useState(false)
  const signInRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setPlans(data.PlansData)
      } catch (error) {
        console.error('Error fetching services:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  // Modal dışına tıklanınca kapansın
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
    <section id='pricing' className='bg-header relative py-20'>
      <Image
        src='/images/pricing/upperline.png'
        alt='upperline-image'
        width={280}
        height={219}
        className='absolute top-[160px] left-[90px] hidden sm:block opacity-5'
      />
      <Image
        src='/images/pricing/lowerline.png'
        alt='lowerline-image'
        width={180}
        height={100}
        className='absolute bottom-[0px] right-[90px] opacity-5'
      />
      <div className='container px-4'>
        <h2 className='text-center'>Vize Danışmanlığı Fiyatlandırma Planlarımız</h2>
        <p className='text-lg font-normal text-center text-black/60 pt-5 max-w-2xl mx-auto'>
          Sizin için en uygun vize danışmanlığı paketini seçin. Kolay, şeffaf ve hızlı başvuru!
        </p>

        {/* Planlar */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-16 mx-5 gap-6'>
          {loading
            ? Array.from({ length: 4 }).map((_, i) => <PlansSkeleton key={i} />)
            : plans.map((item, index) => (
              <div
                className='pt-10 pb-28 px-10 bg-white rounded-2xl shadow-lg relative hover:bg-primary group overflow-hidden'
                key={index}>
                <Image
                  src={item.imgSrc}
                  alt='star-image'
                  width={154}
                  height={154}
                  className='absolute bottom-[-4%] right-[-6%] opacity-10'
                />
                <h3 className='mb-8 text-midnight_text group-hover:text-white text-center'>
                  {item.heading}
                </h3>
                <button
                  className='text-xl font-medium text-white w-full bg-primary hover:text-white group-hover:bg-deepSlate group-hover:border-deepSlate border-2 border-primary rounded-full py-4 px-12 mb-8 hover:cursor-pointer'
                  onClick={() => setIsSignInOpen(true)}
                >
                  Randevu Oluştur
                </button>
                <p className='text-4xl sm:text-5xl font-semibold text-midnight_text mb-3 group-hover:text-white text-center'>
                  ${item.price.yearly}
                  <span className='text-lightgrey text-3xl sm:text-4xl'> / 1 Kişi</span>
                </p>
                <ul className='mb-6'>
                  {item.option.map((feature, idx) => (
                    <li key={idx} className='flex gap-2 items-center pt-2 text-black/60 group-hover:text-white/60'>
                      <Icon
                        icon='tabler:circle-check-filled'
                        className='text-2xl text-emerald-400'
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>

        {/* Schengen Vizesi Planı - Ortada, ayrı bir satırda */}
        <div className="flex justify-center mt-16 mb-6">
          <div className="
  pt-7 pb-7 px-7 
  bg-gradient-to-br from-blue-200 via-blue-400 to-blue-500
  rounded-2xl shadow-xl border border-blue-400 
  max-w-lg w-full flex flex-col items-center relative 
  group transition-all duration-300 min-h-[275px]
  hover:bg-gradient-to-br hover:from-blue-900 hover:via-blue-950 hover:to-blue-900
">
            <h3 className="
    mb-3 text-2xl font-bold 
    text-blue-900 group-hover:text-white text-center transition-all
  ">
              Schengen Randevu
            </h3>
            <Image
              src="/images/hero/schengen.jpeg"
              alt="Schengen Visa"
              width={130}
              height={130}
              className="mb-4"
            />
            <p className="
    text-base text-blue-800 group-hover:text-blue-200 text-center mb-4 max-w-xs transition-all
  ">
              26 Avrupa ülkesinde seyahat özgürlüğünüz için hızlı Schengen vizesi danışmanlığı!
            </p>
            <button
              className="
      text-white font-semibold bg-blue-700
      border-none rounded-full py-2 px-7 mb-3 cursor-pointer 
      transition-all duration-300 shadow-sm
      group-hover:bg-white group-hover:text-blue-900
    "
              onClick={() => setIsSignInOpen(true)}
            >
              Randevu Oluştur
            </button>
            <ul className="mb-0">
              <li className="
      flex gap-2 items-center pt-2 text-blue-800 group-hover:text-blue-200 text-base transition-all
    ">
                <Icon icon='tabler:circle-check-filled' className='text-lg text-emerald-400' />
                <span>26 Avrupa ülkesinde geçerli vize</span>
              </li>
              <li className="
      flex gap-2 items-center pt-2 text-blue-800 group-hover:text-blue-200 text-base transition-all
    ">
                <Icon icon='tabler:circle-check-filled' className='text-lg text-emerald-400' />
                <span>Uzman danışmanlık desteği</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Sign In Modal */}
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

export default Pricing