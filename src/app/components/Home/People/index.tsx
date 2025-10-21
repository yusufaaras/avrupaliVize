'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@iconify/react/dist/iconify.js'

const steps = [
  {
    id: '01',
    icon: 'mdi:file-document-outline',
    title: 'DS-160 formunuzu doldurun',
    // Açıklamanın link kısmını render esnasında ekliyoruz, bu yüzden burada sade metin bıraktım.
    desc: 'DS-160 formunuzu doldurun ve sayfasından önce mevcut randevunuzu alın.',
  },
  {
    id: '02',
    icon: 'mdi:web',
    title: 'Tarih aralığını seçin',
    desc: 'Vize Randevu Bulucu’ya giriş yapın ve istediğiniz tarih aralığını seçin.',
  },
  {
    id: '03',
    icon: 'mdi:credit-card-outline',
    title: 'Güvenli ödeme yapın',
    desc:
      'Stripe ile güvenli ödeme yapın. Ödemeniz randevu alına kadar havuzda beklesin.',
  },
  {
    id: '04',
    icon: 'mdi:calendar-check',
    title: 'Randevunuzu güncelleyin',
    desc: 'Randevunuz erkene çekilsin ve vize tarihinizi güncelleyin!',
  },
]

const People = () => {
  // client side olduğumuz için event dispatch edebiliriz
  const openSignInModal = () => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('openSignInModal'))
    }
  }

  return (
    <section className="pt-20 pb-20 bg-white" id="hakkimizda">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-midnight_text text-center mb-10">
          ABD Vize Nasıl Çalışır?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((step) => (
            <div
              key={step.id}
              className="relative border border-gray-200 rounded-2xl p-6 lg:p-8 bg-white shadow-sm overflow-hidden"
            >
              <span className="absolute right-6 bottom-3 text-[110px] lg:text-[140px] font-extrabold text-gray-200 opacity-10 pointer-events-none select-none leading-none">
                {step.id}
              </span>

              <span className="absolute right-6 top-6 text-3xl text-gray-300">
                <Icon icon="tabler:arrow-up-right" />
              </span>

              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-blue-50 flex items-center justify-center border border-blue-100">
                  <Icon icon={step.icon} className="text-blue-600 text-2xl" />
                </div>

                <div>
                  {/* Eğer bu adım 04 ise başlığı tıklanabilir yap ve hover'ta mavi olsun */}
                  {step.id === '04' ? (
                    <button
                      type="button"
                      onClick={openSignInModal}
                      aria-label="Randevunuzu güncelleyin - giriş yap"
                      className="text-lg font-semibold text-midnight_text mb-2 text-left transition-colors hover:text-blue-600 focus:text-blue-600 cursor-pointer"
                    >
                      {step.title}
                    </button>
                  ) : (
                    <h3 className="text-lg font-semibold text-midnight_text mb-2">
                      {step.title}
                    </h3>
                  )}

                  {/* Eğer bu adım 01 ise URL kısmını bağlantı olarak renderla */}
                  {step.id === '01' ? (
                    <p className="text-gray-700 text-base max-w-xl">
                      DS-160 formunuzu doldurun ve{' '}
                      <a
                        href="https://www.usvisascheduling.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-700 hover:underline cursor-pointer"
                        aria-label="www.usvisascheduling.com sitesine git"
                      >
                        www.usvisascheduling.com
                      </a>{' '}
                      sayfasından önce mevcut randevunuzu alın.
                    </p>
                  ) : (
                    <p className="text-gray-700 text-base max-w-xl">{step.desc}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-center gap-3">
          <Icon icon="mdi:lightbulb-on-outline" className="text-2xl text-amber-400" />
          <br />
          <p className="text-gray-800 font-medium text-lg text-center max-w-2xl">
            Tüm süreç şeffaf ve kolaydır. Siz sadece başvurunuzu yapın, biz randevunuzu hızlandıralım!
          </p>
        </div>

        <div className="mt-8 flex items-center justify-center gap-3">
          <Icon icon="mdi:lightbulb-on-outline" className="text-2xl text-amber-400" />
          <br />
          {/* mavi yazı ve tıklanınca modal açacak; ayrıca pointer imleci için cursor-pointer */}
          <button
            onClick={openSignInModal}
            className="text-blue-600 font-medium text-lg text-center max-w-2xl hover:underline cursor-pointer"
            aria-label="Schengen ülke bilgisi - giriş modalı aç"
            type="button"
          >
            “Schengen vize süreçlerinde ülkelere göre ayrıntılı bilgi için tıklayın”
          </button>
        </div>

      </div>
    </section>
  )
}

export default People