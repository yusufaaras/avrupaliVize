'use client'
import Image from "next/image";
import React from "react";

// Detay içerikleri burada
const blogDetails = {
  1: {
    category: "Amerika Vize Başvurusu",
    title: "Amerika Vize Randevusu Bekleme Süresi Hakkında Bilmeniz Gerekenler",
    views: 758,
    image: "/images/blog/blog3.jpeg",
    content: (
      <>
        <p>
          Amerika Birleşik Devletleri’ne seyahat etmek isteyen birçok kişinin karşılaştığı ilk zorluklardan biri, Amerika vize randevusu bekleme süresidir. 
          Bu süreç, başvuru sahipleri için planlamayı zorlaştıran en kritik aşamalardan biridir. Randevu tarihinin ne zaman verileceği, vize türü, başvurulan şehir ve dönemsel yoğunluk gibi birçok faktöre bağlı olarak değişiklik gösterebilir.
        </p>
        <p>
          Amerika vize randevusu bekleme süresi, başvurulan şehre, döneme, vize türüne ve Amerika konsolosluğunun iş yoğunluğuna göre ciddi şekilde farklılaşabilir. Özellikle yaz aylarında ve tatil dönemlerinde randevu bulmak oldukça güçleşirken, bazı şehirlerdeki konsolosluklarda aylar sonrasına randevu verilebilmektedir. Başvuru sahipleri için bu belirsizlik, seyahat planlarının aksamasına ve hatta iptal olmasına yol açabilir.
        </p>
        <p>
          Vize randevusunun hızlı bir şekilde alınabilmesi için başvuru sürecine erken başlanmalı ve gerekli belgeler eksiksiz şekilde hazırlanmalıdır. Ayrıca Amerika konsolosluğunun web sitesinden güncel randevu durumları ve bekleme süreleri sık sık takip edilmelidir. Randevu alırken farklı şehirlerdeki konsolosluklar arasında karşılaştırma yapmak ve gerekirse alternatif şehirlere başvurmak, bekleme süresini kısaltabilir.
        </p>
        <p>
          Amerika vize randevusunun etkileyen faktörleri arasında başvurulan vize türü (turist, öğrenci, iş, transit vs.), başvuru yoğunluğu, konsolosluğun kapasitesi ve Amerika ile Türkiye arasındaki diplomatik ilişkiler de bulunur. Yoğun başvuru dönemlerinde (yaz tatili, yılbaşı, bayramlar gibi) randevu almak daha zorlaşabilir. Ayrıca bazı vize türlerinde ek güvenlik soruşturmaları veya evrak kontrolleri nedeniyle bekleme süresi uzayabilir.
        </p>
        <p>
          Sonuç olarak, Amerika vize randevusu almak isteyenlerin bu süreci iyi planlaması, randevu durumunu yakından takip etmesi ve gerekli belgeleri eksiksiz hazırlaması büyük önem taşır. Seyahat tarihinden en az 2-3 ay önce başvurmak, olası gecikmelere karşı önlem almak açısından faydalı olacaktır.
        </p>
        <p>
          Detaylı açıklama ve süreçle ilgili bilgilere bu sayfadan ulaşabilirsiniz. Amerika vize randevusunun etkileyen faktörleri ve sürecin işleyişi konusunda ipuçları burada!
        </p>
      </>
    )
  },
  2: {
    category: "Amerika Vize Başvurusu",
    title: "Amerika Vize Randevusu Alırken En Sık Yapılan 8 Hata ve Çözümleri",
    views: 625,
    image: "/images/blog/blog2.jpeg",
    content: (
      <>
        <p>
          Amerika vizesi başvuru süreci birçok kişi için karmaşık ve stresli olabiliyor. Özellikle Amerika vize randevusu alma aşaması, sürecin en kritik adımlarından biri.
        </p>
        <p>
          Doğru adımları atmamak ya da küçük bir hata yapmak, vize sürecinin uzamasına hatta başvurunun reddedilmesine bile neden olabiliyor. Başvuru sahiplerinin en sık yaptığı randevu hatalarını ve bu hataların nasıl önlenebileceğini detaylı şekilde burada bulabilirsiniz.
        </p>
        <p>
          1. <b>DS-160 Formunu Yanlış Doldurmak:</b> DS-160 formu Amerika vizesi başvurusunun en önemli aşamasıdır. Formda yapılan yazım hataları, eksik bilgiler veya yanlış beyanlar başvurunun reddedilmesine sebep olabilir. Formu doldururken tüm bilgilerin doğru ve eksiksiz olduğundan emin olun.
        </p>
        <p>
          2. <b>Belgeleri Eksik Sunmak:</b> Başvuru sırasında talep edilen belgelerin eksik veya hatalı olması, vize sürecinin uzamasına ya da doğrudan olumsuz sonuçlanmasına yol açar. Belgeleri eksiksiz ve güncel şekilde hazırlamak çok önemlidir.
        </p>
        <p>
          3. <b>Yanlış Randevu Tarihi Seçmek:</b> Seyahat planına uygun olmayan bir randevu tarihi seçmek, vize onayının yetişmemesine neden olabilir. Seyahatten önce yeterli zaman bırakacak şekilde randevu alınmalıdır.
        </p>
        <p>
          4. <b>Yanlış Vize Türünü Seçmek:</b> Amerika vizesi başvurularında doğru vize türünü seçmek çok önemlidir. Yanlış vize türü başvurunun reddine veya sürecin uzamasına neden olabilir.
        </p>
        <p>
          5. <b>Mülakat Sırasında Eksik Bilgi Vermek:</b> Konsolosluk mülakatında eksik veya yanlış bilgi vermek, güvenlik sebebiyle başvurunun reddedilmesine yol açar. Mülakat öncesi sorulabilecek sorulara hazırlıklı olunmalıdır.
        </p>
        <p>
          6. <b>Finansal Durumu Yetersiz Göstermek:</b> Amerika seyahati için yeterli finansal kaynağa sahip olduğunuzu belgelerle göstermeniz gerekir. Eksik finansal dokümanlar ret sebebidir.
        </p>
        <p>
          7. <b>Yanlış Bilgi veya Belgeler Sunmak:</b> Bilinçli şekilde yanlış belge sunmak veya gerçek dışı bilgi vermek, başvurunun kalıcı olarak reddedilmesine ve ilerideki başvuruların da olumsuz etkilenmesine yol açar.
        </p>
        <p>
          8. <b>Başvuru Sürecini Takip Etmemek:</b> Başvuru sonrası e-posta ve telefon yoluyla gelecek bildirimleri düzenli olarak takip edin. Ek belge talebi veya randevu değişikliği gibi durumları kaçırmamak önemlidir.
        </p>
        <ul>
          <li>DS-160 Formunu Yanlış Doldurmak</li>
          <li>Belgeleri Eksik Sunmak</li>
          <li>Yanlış Randevu Tarihi Seçmek</li>
          <li>Yanlış Vize Türünü Seçmek</li>
          <li>Mülakat Sırasında Eksik Bilgi Vermek</li>
          <li>Finansal Durumu Yetersiz Göstermek</li>
          <li>Yanlış Bilgi veya Belgeler Sunmak</li>
          <li>Başvuru Sürecini Takip Etmemek</li>
        </ul>
        <p>
          Tüm bu hatalardan kaçınmak için başvuru sürecini dikkatlice planlamak, belgeleri eksiksiz hazırlamak ve mülakat öncesi hazırlıklı olmak gerekir. Gerekirse profesyonel danışmanlık almak başvurunuzun olumlu sonuçlanmasına katkı sağlayabilir.
        </p>
      </>
    )
  },
  3: {
    category: "Amerika'da Eğitim",
    title: "Amerika Öğrenci Vizesi Almak: Adım Adım Rehber",
    views: 496,
    image: "/images/blog/blog1.jpeg",
    content: (
      <>
        <p>
          Amerika’da eğitim almak, dünya genelinde birçok öğrencinin hayalini süslüyor. Gelişmiş eğitim sistemi, uluslararası geçerliliğe sahip diplomaları ve kültürel çeşitliliğiyle ABD, öğrenciler için cazip bir eğitim destinasyonu.
        </p>
        <p>
          Amerika’ya öğrenci olarak gidebilmek için F-1 vizesi başvurusu yapılması gerekir. F-1 vizesi, tam zamanlı bir eğitim programına kabul edilmiş öğrenciler için verilen bir vize türüdür. Bu vizeye başvurmak için öncelikle Amerika’daki okuldan kabul mektubu alınmalı ve SEVIS kaydı yapılmalıdır.
        </p>
        <p>
          Öğrenci vizesi başvurusunda hazırlanması gereken temel belgeler; kabul mektubu, SEVIS ödeme dekontu, DS-160 formu, finansal belgeler, pasaport ve varsa eski Amerika vizeleri, diploma ve transkriptlerdir. Belgeler eksiksiz ve güncel olmalıdır.
        </p>
        <p>
          Vize mülakatında vize memuruna eğitim planlarınızı, Amerika’daki okulunuzun özelliklerini, finansal durumunuzu ve Türkiye’ye geri dönme niyetinizi açıkça göstermeniz gerekir. Eğitim bittikten sonra ülkenize döneceğinizi net şekilde ifade etmeniz vize onayı için kritiktir.
        </p>
        <ol>
          <li>Başvuru formunu doldurma: DS-160 formu doğru ve eksiksiz doldurulmalıdır.</li>
          <li>Belgeleri hazırlama: Kabul mektubu, finansal belgeler, pasaport, diploma vs.</li>
          <li>Randevu alma ve mülakat: Randevu tarihi seçildikten sonra konsoloslukta mülakata katılın.</li>
        </ol>
        <p>
          Vize başvurusu sürecinde doğru bilgi vermek, belgeleri eksiksiz sunmak ve mülakatta kendinizi iyi ifade etmek çok önemlidir. Amerika’da eğitim almak isteyenler için detaylı rehberimizde sürecin tüm adımlarını bulabilirsiniz.
        </p>
        <p>
          Unutmayın: Amerika öğrenci vizesi almak, iyi bir hazırlık ve eksiksiz belge sunmakla mümkündür. Süreci doğru yönetmek, eğitim hayalinizi gerçeğe dönüştürmenin anahtarıdır.
        </p>
      </>
    )
  },
};

export default function BlogDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = React.use(params);
  const detail = blogDetails[id as keyof typeof blogDetails];

  if (!detail) {
    return (
      <main className="container mx-auto pt-24 px-2">
        <h2>Blog yazısı bulunamadı.</h2>
      </main>
    );
  }

  return (
    <main className="container mx-auto pt-24 px-2">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm p-8 border">
        <span className="text-indigo-700 text-sm mb-4 block">{detail.category}</span>
        <h1 className="text-3xl font-bold mb-4">{detail.title}</h1>
        <div className="mb-6">
          <Image src={detail.image} alt={detail.title} width={600} height={300} className="rounded-md object-cover" />
        </div>
        <div className="text-gray-700 text-base">{detail.content}</div>
        <div className="mt-6 text-gray-400 text-sm">{detail.views} kez okundu.</div>
      </div>
    </main>
  );
}