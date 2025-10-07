'use client'
import { SetStateAction, useEffect, useState } from 'react'
import Image from 'next/image'
import { Icon } from '@iconify/react/dist/iconify.js'

type PlansDataType = {
  heading: string
  price: { monthly: number; yearly: number }
  subscriber: number
  button: string
  option: string[]
  category: string[]
  imgSrc: string
  oldPrice?: number
}

const plans: PlansDataType[] = [
  {
    heading: '120 Günlük',
    price: { monthly: 150, yearly: 150 },
    subscriber: 1,
    button: 'UYGULAMAYA GİT',
    option: [
      '7/24 randevu takibi',
      'İstediğiniz tarihe randevu alma',
      'Randevu alındığı anda SMS',
      'Anında email',
    ],
    category: ['monthly', 'yearly'],
    imgSrc: '/images/pricing/starone.svg',
    oldPrice: 250,
  },
  {
    heading: '60 Günlük',
    price: { monthly: 200, yearly: 200 },
    subscriber: 1,
    button: 'UYGULAMAYA GİT',
    option: [
      '7/24 randevu takibi',
      'İstediğiniz tarihe randevu alma',
      'Randevu alındığı anda SMS',
      'Anında email',
    ],
    category: ['monthly', 'yearly'],
    imgSrc: '/images/pricing/startwo.svg',
    oldPrice: 300,
  },
  {
    heading: '30 Günlük',
    price: { monthly: 300, yearly: 300 },
    subscriber: 1,
    button: 'UYGULAMAYA GİT',
    option: [
      '7/24 randevu takibi',
      'İstediğiniz tarihe randevu alma',
      'Randevu alındığı anda SMS',
      'Anında email',
    ],
    category: ['monthly', 'yearly'],
    imgSrc: '/images/pricing/starthree.svg',
    oldPrice: 350,
  },
  {
    heading: '15 Günlük',
    price: { monthly: 400, yearly: 400 },
    subscriber: 1,
    button: 'UYGULAMAYA GİT',
    option: [
      '7/24 randevu takibi',
      'İstediğiniz tarihe randevu alma',
      'Randevu alındığı anda SMS',
      'Anında email',
    ],
    category: ['monthly', 'yearly'],
    imgSrc: '/images/pricing/starfour.svg',
    oldPrice: 450,
  },
]

const Pricing = () => {
  const [selectedCategory, setSelectedCategory] = useState<'monthly' | 'yearly'>('yearly')

  const handleCategoryChange = (category: SetStateAction<'monthly' | 'yearly'>) => {
    setSelectedCategory(category)
  }

  const filteredData = plans.filter((item) => item.category.includes(selectedCategory))

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
        <h2 className='text-center text-4xl sm:text-5xl font-black mb-2'>
          Fiyatlandırma Paketlerimiz
        </h2>
        <p className='text-lg font-normal text-center text-black/60 pt-5 max-w-2xl mx-auto'>
          İhtiyacınıza uygun randevu paketini seçin. Şeffaf, uygun fiyatlı ve hızlı hizmet!
        </p>
        {/* Yearly/Monthly Toggle Buttons */}
        <div className='mt-6 relative'>
          <div className='flex justify-center'>
            <div className='bg-deepSlate flex py-1 px-1 rounded-full'>
              <button
                className={`text-xl font-medium cursor-pointer ${
                  selectedCategory === 'yearly'
                    ? 'text-primary bg-white rounded-full py-2 px-4 sm:py-4 sm:px-16'
                    : 'text-white py-2 px-4 sm:py-4 sm:px-16'
                }`}
                onClick={() => handleCategoryChange('yearly')}>
                Yıllık
              </button>
              <button
                className={`text-xl font-medium cursor-pointer ${
                  selectedCategory === 'monthly'
                    ? 'text-primary bg-white rounded-full py-2 px-4 sm:py-4 sm:px-16'
                    : 'text-white py-2 px-4 sm:py-4 sm:px-16'
                }`}
                onClick={() => handleCategoryChange('monthly')}>
                Aylık
              </button>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-16 mx-5 gap-6'>
          {filteredData.map((item, index) => (
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
              <h3 className='mb-8 text-midnight_text group-hover:text-white text-2xl sm:text-3xl font-semibold text-center'>
                {item.heading}
              </h3>
              <div className='flex justify-center items-center mb-8'>
                <span className="line-through text-black/30 text-3xl mr-2">${item.oldPrice}</span>
                <span className='text-4xl sm:text-5xl font-bold text-primary group-hover:text-white'>${selectedCategory === 'monthly' ? item.price.monthly : item.price.yearly}</span>
                <span className='text-black/50 ml-2 text-lg'>/ 1 Kişi</span>
              </div>
              <ul className='mb-8'>
                {item.option.map((feature, idx) => (
                  <li key={idx} className='flex items-center gap-2 mb-2 text-black/70 group-hover:text-white'>
                    <Icon icon='tabler:circle-check-filled' className='text-emerald-400 text-xl' />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className='text-xl font-medium text-white w-full bg-primary hover:text-white group-hover:bg-deepSlate group-hover:border-deepSlate border-2 border-primary rounded-full py-4 px-12'>
                {item.button}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing