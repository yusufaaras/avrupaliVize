import { NextResponse } from 'next/server'

import { headerItem } from '@/app/types/menu'
import { featureData } from '@/app/types/featuredata'
import { socialLinksData } from '@/app/types/sociallinks'
import { plansData } from '@/app/types/plans'
import { footerlLinksData } from '@/app/types/footerlinks'

const HeaderData: headerItem[] = [
  { label: 'Ana Sayfa', href: '/#' },
  { label: 'Hakkımızda', href: '/#product' },
  { label: 'Hizmetler', href: '/#features' },
  { label: 'Blog', href: '/blog' },       
  { label: 'Fiyatlandırma', href: '/#pricing' },
  { label: 'İletişim', href: '/#contact' },
]

const FeatureData: featureData[] = [
  {
    imgSrc: '/images/features/time.svg',
    heading: 'Hızlı Randevu',
    paragraph:
      'Vize başvurunuz için en uygun tarihte hızlıca randevu alın. Sürecinizi vakit kaybetmeden başlatın.',
  },
  {
    imgSrc: '/images/features/signal.svg',
    heading: 'Uzman Danışmanlık',
    paragraph:
      'Vize işlemlerinin her aşamasında uzman ekibimizin desteğiyle başvurunuzu sorunsuz tamamlayın.',
  },
  {
    imgSrc: '/images/features/dollar.svg',
    heading: 'Uygun Fiyatlı Belge Takibi',
    paragraph:
      'Vize başvurunuz için gerekli tüm belgeleri uygun fiyatlarla eksiksiz hazırlayın, başvuru sürecinizi kolayca takip edin.',
  },
]

const PlansData: plansData[] = [
  {
    heading: 'ABD 120 Gün içinde randevu',
    price: {
      monthly: 150,
      yearly: 150,
    },
    subscriber: 1,
    button: 'UYGULAMAYA GİT',
    option: [
      '7/24 randevu takibi',
      'İstediğiniz tarihe randevu alma',
      'Randevu alındığı anda SMS',
      'Anında email',
    ],
    category: ['monthly', 'yearly'],
    imgSrc: '/images/pricing/starone.svg'
  },
  {
    heading: 'ABD 60 Gün içinde randevu',
    price: {
      monthly: 200,
      yearly: 200,
    },
    subscriber: 1,
    button: 'UYGULAMAYA GİT',
    option: [
      '7/24 randevu takibi',
      'İstediğiniz tarihe randevu alma',
      'Randevu alındığı anda SMS',
      'Anında email',
    ],
    category: ['monthly', 'yearly'],
    imgSrc: '/images/pricing/startwo.svg' 
  },
  {
    heading: 'ABD 30 Gün içinde randevu',
    price: {
      monthly: 300,
      yearly: 300,
    },
    subscriber: 1,
    button: 'UYGULAMAYA GİT',
    option: [
      '7/24 randevu takibi',
      'İstediğiniz tarihe randevu alma',
      'Randevu alındığı anda SMS',
      'Anında email',
    ],
    category: ['monthly', 'yearly'],
    imgSrc: '/images/pricing/starthree.svg' 
  },
  {
    heading: 'ABD 15 Gün içinde randevu',
    price: {
      monthly: 400,
      yearly: 400,
    },
    subscriber: 1,
    button: 'UYGULAMAYA GİT',
    option: [
      '7/24 randevu takibi',
      'İstediğiniz tarihe randevu alma',
      'Randevu alındığı anda SMS',
      'Anında email',
    ],
    category: ['monthly', 'yearly'],
    imgSrc: '/images/pricing/starone.svg' 
  },
]

const FooterLinks: footerlLinksData[] = [
  { label: 'Hakkımızda', href: '/#product' },
  { label: 'Fiyatlandırma', href: '/#pricing' },
  { label: 'Hizmetler', href: '/#features ' },
  { label: 'İletişim', href: '/#contact ' },
]

const SocialLinks: socialLinksData[] = [
  {
    imgSrc: 'fa-brands:facebook-f',
    link: 'https://www.facebook.com',
    width: 10,
  },
  {
    imgSrc: 'fa6-brands:instagram',
    link: 'https://www.instagram.com',
    width: 14,
  },
  {
    imgSrc: 'fa6-brands:twitter',
    link: 'https://www.twitter.com',
    width: 14,
  },
]

export const GET = () => {
  return NextResponse.json({
    HeaderData,
    FeatureData,
    PlansData,
    FooterLinks,
    SocialLinks,
  })
}