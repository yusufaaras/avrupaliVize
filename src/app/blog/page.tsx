'use client'
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

// Örnek blog verileri
const blogPosts = [
  {
    id: 1,
    category: "Amerika Vize Başvurusu",
    title: "Amerika Vize Randevusu Bekleme Süresi Hakkında Bilmeniz Gerekenler",
    views: 758,
    image: "/images/blog/blog3.jpeg",
    summary:
      "Amerika Birleşik Devletleri’ne seyahat etmek isteyen birçok kişinin karşılaştığı ilk zorluklardan biri, Amerika vize randevusu bekleme süresidir. Bu süreç, başvuru sahipleri için planlamayı zorlaştıran en kritik aşamalardan biridir. Randevu tarihinin ne zaman verileceği, vize türü, başvurulan şehir ve dönemsel yoğunluk gibi birçok faktöre bağlı olarak değişiklik gösterebilir. Bu yazımızda, Amerika vize randevusu bekleme süresinin neye göre şekillendiğini, süreci etkileyen faktörleri ve bu süreci...",
  },
  {
    id: 2,
    category: "Amerika Vize Başvurusu",
    title: "Amerika Vize Randevusu Alırken En Sık Yapılan 8 Hata ve Çözümleri",
    views: 625,
    image: "/images/blog/blog2.jpeg",
    summary:
      "Amerika vizesi başvuru süreci birçok kişi için karmaşık ve stresli olabiliyor. Özellikle Amerika vize randevusu alma aşaması, sürecin en kritik adımlarından biri. Doğru adımları atmamak ya da küçük bir hata yapmak, vize sürecinin uzamasına hatta başvurunun reddedilmesine bile neden olabiliyor. Bu yazımızda, başvuru sahiplerinin en sık yaptığı randevu hatalarını ve bu hataların nasıl önlenebileceğini detaylı şekilde ele alacağız...",
  },
  {
    id: 3,
    category: "Amerika'da Eğitim",
    title: "Amerika Öğrenci Vizesi Almak: Adım Adım Rehber",
    views: 496,
    image: "/images/blog/blog1.jpeg",
    summary:
      "Amerika’da eğitim almak, dünya genelinde birçok öğrencinin hayalini süslüyor. Gelişmiş eğitim sistemi, uluslararası geçerliliğe sahip diplomaları ve kültürel çeşitliliğiyle ABD, öğrenciler için cazip bir eğitim destinasyonu. Ancak bu sürece adım atmanın ilk ve en önemli aşaması, Amerika öğrenci vizesi almaktan geçiyor. Bu yazımızda, Amerika’da eğitim almak isteyenler için öğrenci vizesi nedir, nasıl alınır, hangi belgeler gereklidir ve başvuru süreci nasıl işler gibi soruların detaylı yanıtlarını...",
  },
];

// Kategori listesi örneği
const categories = [
  "Tümü",
  "Amerika Vize Başvurusu",
  "Amerika'da Eğitim",
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("Tümü");
  const [postCount, setPostCount] = useState(10);

  const filteredPosts =
    selectedCategory === "Tümü"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  return (
    <main className="container mx-auto pt-24 px-2">
      <div className="flex gap-4 mb-4">
        <select
          value={postCount}
          onChange={(e) => setPostCount(Number(e.target.value))}
          className="px-4 py-2 bg-indigo-500 text-white rounded-md"
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
        </select>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="px-4 py-2 bg-indigo-500 text-white rounded-md"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {filteredPosts.slice(0, postCount).map((post) => (
        <div
          key={post.id}
          className="bg-white rounded-xl shadow-sm p-5 mb-6 flex flex-col sm:flex-row gap-4 border"
        >
          <div className="flex-shrink-0">
            <span className="text-indigo-700 text-sm mb-2 block">
              {post.category}
            </span>
            <Image
              src={post.image}
              alt={post.title}
              width={160}
              height={110}
              className="rounded-md object-cover"
            />
          </div>
          <div className="flex flex-col justify-center flex-1 pl-2">
            <div className="flex items-center justify-between mb-1">
              <Link
                href={`/blog/${post.id}`}
                className="text-blue-700 font-semibold text-lg sm:text-xl hover:underline"
              >
                {post.title}
              </Link>
              <span className="text-gray-400 text-sm">
                {post.views} kez okundu.
              </span>
            </div>
            <p className="text-gray-700 text-base">{post.summary}</p>
          </div>
        </div>
      ))}
    </main>
  );
}