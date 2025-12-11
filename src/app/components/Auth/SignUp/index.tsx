'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
import SocialSignUp from '../SocialSignUp'
import Logo from '@/app/components/Layout/Header/Logo'
import { useState } from 'react'
import Loader from '@/app/components/Common/Loader'
import SignIn from '../SignIn'

interface SignUpProps {
  onBackToSignIn?: () => void
}

const SignUp = ({ onBackToSignIn }: SignUpProps = {}) => {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [successMsg, setSuccessMsg] = useState('')
  const [errorMsg, setErrorMsg] = useState('')
  const [showSignIn, setShowSignIn] = useState(false)

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    setLoading(true)
    const data = new FormData(e.currentTarget)
    const value = Object.fromEntries(data.entries())

    // API adresi (.env.local içine NEXT_PUBLIC_API_BASE=http://localhost:4000 yazılabilir)
    const API_BASE = process.env.NEXT_PUBLIC_API_BASE || 'http://localhost:4000'

    try {
      const res = await fetch(`${API_BASE}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: value.firstName,
          lastName: value.lastName,
          email: value.email,
          password: value.password,
        }),
      })

      if (!res.ok) {
        const errBody = await res.json().catch(() => ({}))
        const firstValidation =
          Array.isArray(errBody?.errors) && errBody.errors.length
            ? errBody.errors[0]?.msg || errBody.errors[0]?.param
            : undefined
        const message = errBody?.message || firstValidation || 'Kayıt başarısız'
        throw new Error(message)
      }

      toast.success('Kayıt tamamlandı, giriş yapabilirsiniz!')
      setErrorMsg('')
      setSuccessMsg('Kayıt tamamlandı, giriş yapabilirsiniz!')
    } catch (err: any) {
      const message = err?.message || 'Bir sıkıntı oldu, tekrar deneyin!'
      setErrorMsg(message)
      toast.error(message)
    } finally {
      setLoading(false)
    }
  }

  if (showSignIn) {
    return <SignIn />
  }

  return (
    <>
      <div className='mb-10 text-center mx-auto inline-block max-w-[160px]'>
        <Logo />
      </div>

      <SocialSignUp />

      <span
        className="relative my-8 block text-center z-1 
  before:content-[''] before:absolute before:left-0 before:top-3 before:h-px before:w-[40%] before:bg-black/20 
  after:content-[''] after:absolute after:right-0 after:top-3 after:h-px after:w-[40%] after:bg-black/20">
        <span className='relative z-10 inline-block px-3 text-base text-black text-body-secondary'>
          VEYA
        </span>
      </span>

      <form onSubmit={handleSubmit}>
        <div className='mb-[22px] flex gap-4'>
          <input
            type='text'
            placeholder='Ad'
            name='firstName'
            required
            className='w-full rounded-md border border-solid bg-transparent px-5 py-3 text-base text-dark outline-hidden transition border-gray-200 placeholder:text-black/30 focus:border-primary text-black focus-visible:shadow-none'
          />
          <input
            type='text'
            placeholder='Soyad'
            name='lastName'
            required
            className='w-full rounded-md border border-solid bg-transparent px-5 py-3 text-base text-dark outline-hidden transition border-gray-200 placeholder:text-black/30 focus:border-primary text-black focus-visible:shadow-none'
          />
        </div>
        <div className='mb-[22px]'>
          <input
            type='email'
            placeholder='E-posta'
            name='email'
            required
            className='w-full rounded-md border border-solid bg-transparent px-5 py-3 text-base text-dark outline-hidden transition border-gray-200 placeholder:text-black/30 focus:border-primary text-black focus-visible:shadow-none'
          />
        </div>
        <div className='mb-[22px]'>
          <input
            type='password'
            placeholder='Şifre'
            name='password'
            required
            className='w-full rounded-md border border-solid bg-transparent px-5 py-3 text-base text-dark outline-hidden transition border-gray-200 placeholder:text-black/30 focus:border-primary text-black focus-visible:shadow-none'
          />
        </div>
        <div className='mb-9'>
          <button
            type='submit'
            className='flex w-full items-center text-18 font-medium justify-center text-white rounded-md bg-primary px-5 py-3 transition duration-300 ease-in-out hover:bg-transparent hover:text-primary border-primary border hover:cursor-pointer'>
            Kayıt Ol {loading && <Loader />}
          </button>
        </div>
        {successMsg && (
          <p className='text-green-600 text-center mb-2 text-sm'>{successMsg}</p>
        )}
        {errorMsg && (
          <p className='text-red-600 text-center mb-2 text-sm'>{errorMsg}</p>
        )}
      </form>

      <p className='text-body-secondary mb-4 text-black text-base'>
        Bir hesap oluşturarak{' '}
        <Link href='/#' className='text-primary hover:underline'>
          Gizlilik Sözleşmesi
        </Link>{' '}
        ve{' '}
        <Link href='/#' className='text-primary hover:underline'>
          Kullanım Şartları
        </Link>
        {' '}kabul etmiş olursunuz.
      </p>

      <p className='text-body-secondary text-black text-base'>
        Zaten bir hesabınız var mı?{' '}
        <button
          type='button'
          onClick={() => {
            if (onBackToSignIn) {
              onBackToSignIn()
            } else {
              setShowSignIn(true)
            }
          }}
          className='text-primary hover:underline'>
          Giriş Yap
        </button>
      </p>
    </>
  )
}

export default SignUp