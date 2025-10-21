'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Icon } from '@iconify/react/dist/iconify.js'
import { useEffect, useState } from 'react'
import { footerlLinksData } from '@/app/types/footerlinks'
import { socialLinksData } from '@/app/types/sociallinks'

const Footer = () => {
  const [footerLinks, setFooterLinks] = useState<footerlLinksData[]>([])
  const [socialLinks, setSocialLinks] = useState<socialLinksData[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setFooterLinks(data.FooterLinks)
        setSocialLinks(data.SocialLinks)
      } catch (error) {
        console.error('Error fetching services:', error)
      }
    }
    fetchData()
  }, [])

  return (
    <div className='bg-midnight_text w-full'>
      <div className='container p-4'>
        <div className='my-6 grid grid-cols-1 sm:grid-cols-6 lg:grid-cols-12 gap-y-4 gap-x-3'>
          {/* COLUMN-1 */}
          <div className='col-span-1 sm:col-span-6 lg:col-span-3 flex items-center justify-center sm:justify-start mb-5 sm:mb-0'>
            <Image
              src='/images/logo/vizelogo-white.png'
              alt='logo'
              width={180}
              height={45}
              className='max-w-full h-auto'
            />
          </div>
          {/* Links */}
          <div className='col-span-1 sm:col-span-6 lg:col-span-5 flex items-center justify-center sm:justify-start mb-5 sm:mb-0'>
            <div className='flex flex-wrap gap-2 sm:gap-4'>
              {footerLinks.map((items, i) => (
                <Link
                  key={i}
                  href={`${items.href}`}
                  className='text-base font-normal text-white/60 flex items-center justify-center hover:text-white hover:underline px-2'
                >
                  {items.label}
                </Link>
              ))}
            </div>
          </div>
          {/* Social */}
          <div className='col-span-1 sm:col-span-6 lg:col-span-4 flex items-center justify-center sm:justify-end'>
            <div className='flex gap-2 sm:gap-4 flex-wrap'>
              {socialLinks.map((items, i) => (
                <Link href={items.link} key={i}>
                  <div className='bg-white/20 h-10 w-10 shadow-xl text-base rounded-full flex items-center justify-center text-white hover:text-black hover:bg-white transition'>
                    <Icon icon={items.imgSrc} className='text-xl' />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <br />
        <div className='mt-4 flex flex-col sm:flex-row items-center sm:items-start gap-3 text-center lg:text-start'>
          <a
            href='tel:+905408111011'
            className='inline-flex items-center gap-3 text-gray-800 hover:text-primary transition'
            aria-label='Telefon ile ara'
          >
            <span className='w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center border border-blue-100'>
              <Icon icon='mdi:phone' className='text-blue-600 text-lg' />
            </span>
            <span className='text-base font-normal text-white/60 hover:text-white'>+90 540 811 10 11</span>
          </a>

          <a
            href='mailto:info@avrupalivize.com'
            className='inline-flex items-center gap-3 text-gray-800 hover:text-primary transition'
            aria-label='E-posta gönder'
          >
            <span className='w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center border border-blue-100'>
              <Icon icon='mdi:email-outline' className='text-blue-600 text-lg' />
            </span>
            <span className='text-base font-normal text-white/60 hover:text-white'>info@avrupalivize.com</span>
          </a>
        </div>

        <br/>
        <div className='pt-4 flex flex-col sm:flex-row gap-4 items-center justify-between border-t border-t-white/30'>
          <div className='flex flex-col md:flex-row gap-2 md:gap-5 justify-center items-center md:justify-start'>
            <h4 className='text-base font-normal text-white/60 hover:text-white'>
              <Link href='/' target='_blank'>
                Privacy policy
              </Link>
            </h4>
            <div className='h-4 md:h-5 bg-white opacity-60 w-0.5'></div>
            <h4 className='text-base font-normal text-white/60 hover:text-white'>
              <Link href='/' target='_blank'>
                Terms & conditions
              </Link>
            </h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer