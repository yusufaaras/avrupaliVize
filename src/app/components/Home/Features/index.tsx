'use client'

import Image from 'next/image'
import { Icon } from '@iconify/react/dist/iconify.js'
import { useEffect, useState, useRef } from 'react'
import { featureData } from '@/app/types/featuredata'
import FeatureSkeleton from '@/app/Skeleton/Features'
import Signin from '@/app/components/Auth/SignIn'

const Features = () => {
  const [features, setFeatures] = useState<featureData[]>([])
  const [loading, setLoading] = useState(true)
  const [isSignInOpen, setIsSignInOpen] = useState(false)
  const signInRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setFeatures(data.FeatureData)
      } catch (error) {
        console.error('Error fetching services:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  // Modal dışına tıklanınca kapat
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
    <section id='features'>
      <div className='container'>
        <h2 className='text-midnight_text text-center mb-5 max-w-xl mx-auto sm:leading-16'>
          Vize Danışmanlığında İhtiyacınız Olan Her Şey
        </h2>
        <p className='text-black/60 text-lg text-center md:max-w-[60%] mx-auto'>
          Yurt dışı vize başvurularınız, randevu işlemleriniz ve danışmanlık hizmetlerimiz ile tüm süreci sizin için kolaylaştırıyoruz. Tüm vize işlemlerinizi güvenle ve hızlıca tamamlayın.
        </p>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10'>
          {loading
            ? Array.from({ length: 3 }).map((_, i) => (
                <FeatureSkeleton key={i} />
              ))
            : features.map((item, i) => (
                <div key={i} className='bg-white rounded-2xl p-5 shadow-lg'>
                  <Image
                    src={item.imgSrc}
                    alt={item.imgSrc}
                    width={55}
                    height={55}
                    className='mb-2'
                  />
                  <h3 className='text-2xl font-semibold text-black mt-5'>
                    {item.heading}
                  </h3>
                  <p className='text-lg text-black/50 my-2 leading-6'>
                    {item.paragraph}
                  </p>
                  <button
  className='text-primary hover:text-blue-700 text-xl font-medium flex items-center gap-2 mt-6 pb-2 cursor-pointer'
  onClick={() => setIsSignInOpen(true)}
>
  Detaylı Bilgi
  <Icon icon='tabler:arrow-right' className='text-2xl' />
</button>
                </div>
              ))}
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

export default Features