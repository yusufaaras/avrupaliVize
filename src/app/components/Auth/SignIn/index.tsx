'use client'
import { signIn } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import toast from 'react-hot-toast'
import SocialSignIn from '../SocialSignIn'
import Logo from '@/app/components/Layout/Header/Logo'
import Loader from '@/app/components/Common/Loader'
import SignUp from '../SignUp'

const Signin = () => {
  const router = useRouter()

  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
    checkboxToggle: false,
  })
  const [loading, setLoading] = useState(false)
  const [showForgotPassword, setShowForgotPassword] = useState(false)
  const [forgotEmail, setForgotEmail] = useState('')
  const [forgotLoading, setForgotLoading] = useState(false)
  const [showSignUp, setShowSignUp] = useState(false)

  const loginUser = async (e: any) => {
    e.preventDefault()
    if (!loginData.email || !loginData.password) {
      toast.error('E-posta ve şifre zorunlu')
      return
    }
    setLoading(true)

    const API_BASE = process.env.NEXT_PUBLIC_API_BASE || 'http://localhost:4000'

    try {
      const res = await fetch(`${API_BASE}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: loginData.email,
          password: loginData.password,
        }),
      })

      if (!res.ok) {
        const errBody = await res.json().catch(() => ({}))
        const firstValidation =
          Array.isArray(errBody?.errors) && errBody.errors.length
            ? errBody.errors[0]?.msg || errBody.errors[0]?.param
            : undefined
        throw new Error(errBody?.message || firstValidation || 'Giriş başarısız')
      }

      const data = await res.json()
      // backend redirect alanı gönderiyor (admin/user)
      const redirect = data?.redirect || '/user'
      toast.success('Giriş başarılı')
      router.push(redirect)
    } catch (err: any) {
      toast.error(err?.message || 'Bir hata oluştu')
    } finally {
      setLoading(false)
    }
  }

  const handleForgotPassword = async (e: any) => {
    e.preventDefault()
    if (!forgotEmail) {
      toast.error('E-posta adresi zorunlu')
      return
    }
    setForgotLoading(true)

    const API_BASE = process.env.NEXT_PUBLIC_API_BASE || 'http://localhost:4000'

    try {
      // TODO: Backend'de forgot password endpoint'i yoksa eklenmeli
      const res = await fetch(`${API_BASE}/auth/forgot-password`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: forgotEmail.toLowerCase() }),
      })

      if (!res.ok) {
        const errBody = await res.json().catch(() => ({}))
        throw new Error(errBody?.message || 'Bir hata oluştu')
      }

      toast.success('Şifre sıfırlama bağlantısı e-posta adresinize gönderildi')
      setForgotEmail('')
      setShowForgotPassword(false)
    } catch (err: any) {
      toast.error(err?.message || 'Bir hata oluştu')
    } finally {
      setForgotLoading(false)
    }
  }

  if (showSignUp) {
    return (
      <SignUp onBackToSignIn={() => setShowSignUp(false)} />
    )
  }

  if (showForgotPassword) {
    return (
      <>
        <div className='mb-10 text-center mx-auto inline-block max-w-[160px]'>
          <Logo />
        </div>

        <form onSubmit={handleForgotPassword}>
          <div className='mb-[22px]'>
            <input
              type='email'
              placeholder='E-posta'
              value={forgotEmail}
              onChange={(e) => setForgotEmail(e.target.value)}
              required
              className='w-full rounded-md border border-solid bg-transparent px-5 py-3 text-base text-dark outline-hidden transition border-gray-200 placeholder:text-black/30 focus:border-primary focus-visible:shadow-none text-black'
            />
          </div>
          <div className='mb-9'>
            <button
              type='submit'
              className='bg-primary w-full py-3 rounded-lg text-18 font-medium transition duration-300 ease-in-out border text-white border-primary hover:text-primary hover:bg-transparent hover:cursor-pointer'>
              Şifre Sıfırlama Bağlantısı Gönder {forgotLoading && <Loader />}
            </button>
          </div>
        </form>

        <p className='text-body-secondary text-black text-base text-center'>
          <button
            type='button'
            onClick={() => setShowForgotPassword(false)}
            className='text-primary hover:underline'>
            Geri Dön
          </button>
        </p>
      </>
    )
  }

  return (
    <>
      <div className='mb-10 text-center mx-auto inline-block max-w-[160px]'>
        <Logo />
      </div>

      {/* Sosyal girişte de anında /user'a yönlendir */}
      <SocialSignIn onAnySignInClick={() => router.push('/user')} />

      <span
        className="relative my-8 block text-center z-1 
  before:content-[''] before:absolute before:left-0 before:top-3 before:h-px before:w-[40%] before:bg-black/20 
  after:content-[''] after:absolute after:right-0 after:top-3 after:h-px after:w-[40%] after:bg-black/20">
        <span className='relative z-10 inline-block px-3 text-base text-black text-body-secondary'>
          VEYA
        </span>
      </span>

      <form onSubmit={loginUser}>
        <div className='mb-[22px]'>
          <input
            type='email'
            placeholder='E-posta'
            required
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
            required
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

      <button
        type='button'
        onClick={() => setShowForgotPassword(true)}
        className='mb-2 inline-block text-base text-dark hover:text-primary text-primary dark:hover:text-primary'>
        Şifremi Unuttum?
      </button>
      <p className='text-body-secondary text-black text-base'>
        Henüz üye değil misiniz?{' '}
        <button
          type='button'
          onClick={() => setShowSignUp(true)}
          className='text-primary hover:underline'>
          Kayıt Ol
        </button>
      </p>
    </>
  )
}

export default Signin