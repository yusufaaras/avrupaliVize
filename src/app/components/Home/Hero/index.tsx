import Image from 'next/image'
import Link from 'next/link'

const Banner = () => {
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
              {/* Responsive başlık */}
              <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-full sm:max-w-lg md:max-w-xl lg:max-w-2xl leading-tight break-words text-midnight_text text-center lg:text-start mx-auto lg:mx-0 pt-5'>
                Yurt Dışı Vize Danışmanlığında Güvenilir Adres
              </h1>
              <p className='text-black/75 text-lg font-normal text-center lg:text-start max-w-lg mx-auto lg:mx-0'>
                Vize başvurularınızda hızlı ve sorunsuz hizmet. Hedefinize kolayca ulaşın, işlemleri uzman ekibimize bırakın!
              </p>
              <div className='mx-auto lg:mx-0'>
                <Link href={'/#pricing'}>
                  <button className='text-white text-xl font-medium py-4 px-8 rounded-full transition duration-300 border border-primary bg-primary hover:bg-transparent hover:cursor-pointer hover:text-primary'>
                    Randevu Oluştur
                  </button>
                </Link>
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
    </section>
  )
}

export default Banner