'use client'
import { signIn } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import toast from 'react-hot-toast'
import SocialSignIn from '../SocialSignIn'
import Logo from '@/app/components/Layout/Header/Logo'
import Loader from '@/app/components/Common/Loader'

const Signin = () => {
  const router = useRouter()

  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
    checkboxToggle: false,
  })
  const [loading, setLoading] = useState(false)

  const loginUser = (e: any) => {
    e.preventDefault()

    setLoading(true)
    signIn('credentials', { ...loginData, redirect: false })
      .then((callback) => {
        if (callback?.error) {
          toast.error(callback?.error)
          console.log(callback?.error)
          setLoading(false)
          return
        }

        if (callback?.ok && !callback?.error) {
          toast.success('Giriş başarılı')
          setLoading(false)
          router.push('/')
        }
      })
      .catch((err) => {
        setLoading(false)
        console.log(err.message)
        toast.error(err.message)
      })
  }

  return (
    <>
      <div className='mb-10 text-center mx-auto inline-block max-w-[160px]'>
        <Logo />
      </div>

      <SocialSignIn />

      <span
        className="relative my-8 block text-center z-1 
  before:content-[''] before:absolute before:left-0 before:top-3 before:h-px before:w-[40%] before:bg-black/20 
  after:content-[''] after:absolute after:right-0 after:top-3 after:h-px after:w-[40%] after:bg-black/20">
        <span className='relative z-10 inline-block px-3 text-base text-black text-body-secondary'>
          VEYA
        </span>
      </span>

      <form onSubmit={(e) => e.preventDefault()}>
        <div className='mb-[22px]'>
          <input
            type='email'
            placeholder='E-posta'
            onChange={(e) =>
              setLoginData({ ...loginData, email: e.target.value })
            }
            className='w-full rounded-md border border-solid bg-transparent px-5 py-3 text-base text-dark outline-hidden transition border-gray-200 placeholder:text-black/30 focus:border-primary focus-visible:shadow-none text-black'
          />
        </div>
        <div className='mb-[22px]'>
          <input
            type='password'
            placeholder='Şifre'
            onChange={(e) =>
              setLoginData({ ...loginData, password: e.target.value })
            }
            className='w-full rounded-md border border-solid bg-transparent px-5 py-3 text-base text-dark outline-hidden transition border-gray-200 placeholder:text-black/30 focus:border-primary text-black focus-visible:shadow-none'
          />
        </div>
        <div className='mb-9'>
          <button
            onClick={loginUser}
            type='submit'
            className='bg-primary w-full py-3 rounded-lg text-18 font-medium transition duration-300 ease-in-out border text-white border-primary hover:text-primary hover:bg-transparent hover:cursor-pointer'>
            Giriş Yap {loading && <Loader />}
          </button>
        </div>
      </form>

      <Link
        href='/'
        className='mb-2 inline-block text-base text-dark hover:text-primary text-primary dark:hover:text-primary'>
        Şifremi Unuttum?
      </Link>
      <p className='text-body-secondary text-black text-base'>
        Henüz üye değil misiniz?{' '}
        <Link href='/' className='text-primary hover:underline'>
          Kayıt Ol
        </Link>
      </p>
    </>
  )
}

export default Signin