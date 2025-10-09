'use client';
import React, { useState } from "react";

export default function ProfilePage() {
    const [invoiceType, setInvoiceType] = useState("bireysel");

    return (
        <div className="max-w-4xl mx-auto mt-8 bg-white p-8 rounded-xl shadow">
            <h2 className="text-lg font-semibold mb-6">Profil Detayları</h2>

            {/* Kullanıcı Bilgileri */}
            <div className="grid grid-cols-3 gap-4 mb-6">
                <div>
                    <label className="block font-medium mb-2">İsim</label>
                    <input className="w-full px-3 py-2 rounded border border-gray-300 focus:border-indigo-500 focus:outline-none" placeholder="İsim" />
                </div>
                <div>
                    <label className="block font-medium mb-2">Soyisim</label>
                    <input className="w-full px-3 py-2 rounded border border-gray-300 focus:border-indigo-500 focus:outline-none" placeholder="Soyisim" />
                </div>
                <div>
                    <label className="block font-medium mb-2">Şirket/Acente</label>
                    <input className="w-full px-3 py-2 rounded border border-gray-300 focus:border-indigo-500 focus:outline-none" placeholder="Şirket/Acente" />
                </div>
            </div>

            <hr className="border-yellow-300 my-4" />

            {/* İletişim */}
            <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                    <label className="block font-medium mb-2">E-Posta</label>
                    <input className="w-full px-3 py-2 rounded border border-gray-300 focus:border-indigo-500 focus:outline-none" placeholder="E-Posta" />
                    <div className="flex items-center mt-2">
                        <input type="checkbox" className="checkbox checkbox-primary mr-2" />
                        <span className="text-sm">Randevum alındığında e-posta ile bilgilendirilmek istiyorum.</span>
                    </div>
                </div>
                <div>
                    <label className="block font-medium mb-2">Telefon</label>
                    <div className="flex gap-2">
                        <input className="w-1/3 px-3 py-2 rounded border border-gray-300 focus:border-indigo-500 focus:outline-none" placeholder="TR (+90)" />
                        <input className="w-full px-3 py-2 rounded border border-gray-300 focus:border-indigo-500 focus:outline-none" placeholder="Telefon" />
                    </div>
                    <div className="flex items-center mt-2">
                        <input type="checkbox" className="checkbox checkbox-primary mr-2" />
                        <span className="text-sm">Randevum alındığında sms ile bilgilendirilmek istiyorum.</span>
                    </div>
                </div>
            </div>

            <hr className="border-yellow-300 my-4" />

            {/* Fatura Bilgileri */}
            <div className="mb-6">
                <label className="block font-medium mb-2">Fatura Bilgileri</label>
                <div className="flex w-1/2 mb-4 mx-auto">
                    <button
                        type="button"
                        className={`flex-1 py-2 rounded-l border ${invoiceType === "bireysel" ? "bg-indigo-500 text-white" : "bg-gray-100"}`}
                        onClick={() => setInvoiceType("bireysel")}
                    >
                        Bireysel
                    </button>
                    <button
                        type="button"
                        className={`flex-1 py-2 rounded-r border ${invoiceType === "kurumsal" ? "bg-indigo-500 text-white" : "bg-gray-100"}`}
                        onClick={() => setInvoiceType("kurumsal")}
                    >
                        Kurumsal
                    </button>
                </div>
                {/* Fatura Formu */}
                {invoiceType === "bireysel" ? (
                    <div className="grid grid-cols-3 gap-4 mb-4">
                        <div>
                            <label className="block font-medium mb-2">İsim</label>
                            <input className="w-full px-3 py-2 rounded border border-gray-300 focus:border-indigo-500 focus:outline-none" placeholder="İsim" />
                        </div>
                        <div>
                            <label className="block font-medium mb-2">Soyisim</label>
                            <input className="w-full px-3 py-2 rounded border border-gray-300 focus:border-indigo-500 focus:outline-none" placeholder="Soyisim" />
                        </div>
                        <div>
                            <label className="block font-medium mb-2">TC Kimlik No (Zorunlu Değil)</label>
                            <input className="w-full px-3 py-2 rounded border border-gray-300 focus:border-indigo-500 focus:outline-none" placeholder="TC Kimlik No" />
                        </div>
                    </div>
                ) : (
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                            <label className="block font-medium mb-2">Ünvan</label>
                            <input className="w-full px-3 py-2 rounded border border-gray-300 focus:border-indigo-500 focus:outline-none" placeholder="Ünvan" />
                        </div>
                        <div>
                            <label className="block font-medium mb-2">Vergi K.N.</label>
                            <input className="w-full px-3 py-2 rounded border border-gray-300 focus:border-indigo-500 focus:outline-none" placeholder="Vergi K.N." />
                        </div>
                    </div>
                )}
                <div className="flex items-center mb-4">
                    <input type="checkbox" className="checkbox mr-2" />
                    <span className="text-sm">E-fatura mükellefiyim</span>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                        <label className="block font-medium mb-2">Ülke</label>
                        <select className="w-full px-3 py-2 rounded border border-gray-300 focus:border-indigo-500 focus:outline-none">
                            <option>Seç</option>
                            <option>Türkiye</option>
                            <option>Diğer</option>
                        </select>
                    </div>
                    <div>
                        <label className="block font-medium mb-2">Posta Kodu</label>
                        <input className="w-full px-3 py-2 rounded border border-gray-300 focus:border-indigo-500 focus:outline-none" placeholder="Posta Kodu" />
                    </div>
                </div>
                <div>
                    <label className="block font-medium mb-2">Adres</label>
                    <input className="w-full px-3 py-2 rounded border border-gray-300 focus:border-indigo-500 focus:outline-none" placeholder="Adres" />
                </div>
            </div>

            {/* Butonlar */}
            <div className="flex gap-4 mt-6">
                <button
                    type="submit"
                    className="px-8 py-4 rounded-lg bg-indigo-500 text-white text-lg font-medium shadow-md hover:bg-indigo-600 transition cursor-pointer"
                >
                    Kaydet
                </button>
                <button
                    type="button"
                    className="px-8 py-4 rounded-lg border border-gray-400 text-gray-500 text-lg font-medium bg-white hover:bg-gray-50 transition cursor-pointer"
                >
                    İptal
                </button>
            </div>
        </div>
    );
}