'use client';
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

// Kullanıcı adı ve rolünü gerçek veriden almak istersen prop olarak verebilirsin.
const USER = {
  initials: "YA",
  name: "Yusuf Aras",
  role: "Bireysel Kullanıcı",
  job: "Freelancer",
};

export default function UserHeader() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Dropdown dışında tıklanınca menüyü kapat
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    }
    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [dropdownOpen]);

  return (
    <header className="w-full bg-white py-4 px-8 flex justify-between items-center shadow-sm">
      {/* Sol: Logo */}
      <div className="flex items-center gap-3">
        <Link href="/">
          <Image
            src='/images/logo/vizelogo.svg'
            alt="Vize Logo"
            width={85} // Daha büyük logo!
            height={48}
            priority
            className="rounded cursor-pointer"
          />
        </Link>
      </div>

      {/* Orta: Arama kutusu */}
      <div className="flex-1 px-16">
        <form className="flex w-full max-w-xl mx-auto">
          <input
            type="text"
            placeholder="Ara..."
            className="w-full rounded border border-gray-300 px-4 py-2 focus:outline-none"
          />
          <button
            type="submit"
            className="bg-gray-100 hover:bg-gray-200 text-gray-600 px-5 ml-2 rounded border border-gray-300 font-medium"
          >
            Ara
          </button>
        </form>
      </div>

      {/* Sağ: Avatar ve menü */}
      <div className="relative flex items-center gap-4" ref={dropdownRef}>
        {/* Avatar */}
        <button
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => setDropdownOpen((v) => !v)}
        >
          <div className="w-12 h-12 rounded-full bg-purple-300 flex items-center justify-center text-lg font-bold text-white border-2 border-white shadow">
            {USER.initials}
          </div>
          <span className="inline-block w-3 h-3 bg-green-400 rounded-full border-2 border-white -ml-4"></span>
        </button>

        {/* Dropdown */}
        {dropdownOpen && (
          <div className="absolute right-0 top-[54px] w-64 bg-white rounded shadow-lg border z-20 py-4 px-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-purple-300 flex items-center justify-center text-base font-bold text-white">
                {USER.initials}
              </div>
              <div>
                <div className="font-semibold">{USER.name}</div>
                <div className="text-xs text-gray-500">{USER.role}</div>
                <div className="text-xs text-gray-400">{USER.job}</div>
              </div>
            </div>
            <hr className="mb-3" />
            <div className="flex flex-col gap-1">
              <Link href="/user" className="py-2 px-2 hover:bg-gray-100 rounded flex items-center gap-2 text-gray-700">
                <span>🗂️</span>
                <span>USA Randevuları</span>
              </Link>
              <Link href="/user" className="py-2 px-2 hover:bg-gray-100 rounded flex items-center gap-2 text-gray-700">
                <span>🗂️</span>
                <span>Schengen Randevuları</span>
              </Link>
              <Link href="/user/profile" className="py-2 px-2 hover:bg-gray-100 rounded flex items-center gap-2 text-gray-700">
                <span>👤</span>
                <span>Hesabım</span>
              </Link>
              <Link href="/logout" className="py-2 px-2 hover:bg-gray-100 rounded flex items-center gap-2 text-gray-700">
                <span>⏻</span>
                <span>Çıkış</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}