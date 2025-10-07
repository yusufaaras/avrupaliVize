'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Icon } from '@iconify/react/dist/iconify.js'
import { plansData } from '@/app/types/plans'
import PlansSkeleton from '@/app/Skeleton/Plans'

const Pricing = () => {
  const [plans, setPlans] = useState<plansData[]>([])
  const [loading, setLoading] = useState(true)

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

  // Yıllık/Aylık toggle kısmı kaldırıldı
  // Tüm planlar tek seferde gösterilecek (varsayılanı plansData üzerinden)

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

        {/* Yıllık/Aylık toggle kaldırıldı */}

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
                  <button className='text-xl font-medium text-white w-full bg-primary hover:text-white group-hover:bg-deepSlate group-hover:border-deepSlate border-2 border-primary rounded-full py-4 px-12 mb-8 hover:cursor-pointer'>
                    Uygulamaya Git
                  </button>
                  <p className='text-4xl sm:text-5xl font-semibold text-midnight_text mb-3 group-hover:text-white text-center'>
                    <span className="line-through text-black/30 text-3xl mr-2">${item.oldPrice}</span>
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
      </div>
    </section>
  )
}

export default Pricing