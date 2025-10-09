'use client';
import React, { useState } from "react";
import { useRouter } from "next/navigation";

// Randevu tipinde bir obje
type Randevu = {
  id: number;
  ulke: string;
  kategori: string;
  altKategori: string;
  randevuAlimi: string;
  ucret: string;
  vfs: string;
};

type UsaRandevu = {
  id: number;
  sehir: string;
  kategori: string;
  altKategori: string;
  randevuAlimi: string;
  ucret: string;
  konsolosluk: string;
};

export default function UserDashboard() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"usa" | "schengen">("usa");
  // örnek schengen randevu listesi
  const [randevuList, setRandevuList] = useState<Randevu[]>([
    {
      id: 1,
      ulke: "Bulgaristan",
      kategori: "Kısa Süreli Vize (C)",
      altKategori: "Turistik",
      randevuAlimi: "Bot",
      ucret: "€200.00",
      vfs: "Dahil ✅"
    },
  ]);
  // örnek usa randevu listesi
  const [usaRandevuList, setUsaRandevuList] = useState<UsaRandevu[]>([
    {
      id: 1,
      sehir: "İstanbul",
      kategori: "Turistik Vize",
      altKategori: "B1/B2",
      randevuAlimi: "Online",
      ucret: "$160.00",
      konsolosluk: "ABD İstanbul Başkonsolosluğu",
    },
  ]);

  // Randevu alma sayfasına yönlendir
  const goToSchengenCreate = () => {
    router.push("/user/schengen");
  };

  // Schengen randevuyu iptal et
  const handleCancel = (id: number) => {
    setRandevuList(list => list.filter(r => r.id !== id));
  };

  // Schengen randevuyu düzenle
  const handleEdit = (id: number) => {
    router.push(`/user/schengen/edit/${id}`);
  };

  // USA randevuyu iptal et
  const handleUsaCancel = (id: number) => {
    setUsaRandevuList(list => list.filter(r => r.id !== id));
  };

  // USA randevuyu düzenle
  const handleUsaEdit = (id: number) => {
    router.push(`/user/usa/edit/${id}`);
  };

  return (
    <div className="w-full min-h-screen bg-[#f7f7fb] pt-12">
      {/* Tab Bar */}
      <div className="flex justify-end px-12">
        <div className="flex border border-gray-300 rounded-lg overflow-hidden">
          <button
            onClick={() => setActiveTab("usa")}
            className={`px-8 py-2 text-lg font-medium border-r border-gray-300 transition ${
              activeTab === "usa" ? "bg-white text-[#414d5e] border-b-2 border-indigo-500" : "bg-transparent text-[#414d5e]"
            }`}
            style={{ cursor: "pointer" }}
          >
            USA Randevuları
          </button>
          <button
            onClick={() => setActiveTab("schengen")}
            className={`px-8 py-2 text-lg font-medium transition ${
              activeTab === "schengen" ? "bg-white text-[#414d5e] border-b-2 border-indigo-500" : "bg-transparent text-[#414d5e]"
            }`}
            style={{ cursor: "pointer" }}
          >
            Schengen Randevuları
          </button>
        </div>
      </div>

      {/* Page Heading */}
      <h2 className="text-3xl font-semibold text-center text-[#6b7688] mt-8 mb-2">
        {activeTab === "usa" ? "USA Randevuları" : "Schengen Randevuları"}
      </h2>
      <hr className="mb-6" />

      {/* Button & Filter Bar */}
      {(activeTab === "usa" || activeTab === "schengen") && (
        <div className="flex items-center gap-4 px-12 mb-6">
          <div className="flex gap-3">
            <button className="px-5 py-3 bg-indigo-500 text-white rounded-lg shadow hover:bg-indigo-600 transition cursor-pointer font-medium">
              10 <span className="ml-1">▼</span>
            </button>
            <button className="px-5 py-3 bg-indigo-500 text-white rounded-lg shadow hover:bg-indigo-600 transition cursor-pointer font-medium flex items-center gap-2">
              <span className="material-symbols-outlined text-lg">filter_alt</span>
              Filtrele
            </button>
          </div>
          <div className="flex-1"></div>
          {/* YÖNLENDİRME BUTONU */}
          <button
            onClick={goToSchengenCreate}
            className="px-6 py-3 bg-indigo-500 text-white rounded-lg shadow hover:bg-indigo-600 transition cursor-pointer font-medium"
          >
            + Randevu Al
          </button>
        </div>
      )}

      {/* Main Card USA */}
      {activeTab === "usa" && (
        <div className="mx-12 bg-white rounded-2xl shadow p-10 min-h-[180px]">
          <h3 className="font-medium mb-4 text-lg">Alınan USA Randevuları</h3>
          {usaRandevuList.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-8">
              <p className="text-xl text-gray-400 mb-2">Şu anda mevcut randevunuz bulunmamaktadır.</p>
              <p className="text-lg text-gray-400">
                Yeni bir randevu oluşturmak için <button onClick={goToSchengenCreate} className="text-indigo-500 font-semibold underline cursor-pointer bg-transparent border-none">Randevu Al</button> butonuna tıklayınız.
              </p>
            </div>
          ) : (
            <table className="w-full border rounded-lg bg-white shadow text-left">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-2 font-medium">Şehir</th>
                  <th className="p-2 font-medium">Kategori</th>
                  <th className="p-2 font-medium">Alt Kategori</th>
                  <th className="p-2 font-medium">Randevu Alımı</th>
                  <th className="p-2 font-medium">Ücret</th>
                  <th className="p-2 font-medium">Konsolosluk</th>
                  <th className="p-2 font-medium"></th>
                </tr>
              </thead>
              <tbody>
                {usaRandevuList.map(r => (
                  <tr key={r.id} className="border-b">
                    <td className="p-2">{r.sehir}</td>
                    <td className="p-2">{r.kategori}</td>
                    <td className="p-2">{r.altKategori}</td>
                    <td className="p-2">{r.randevuAlimi}</td>
                    <td className="p-2">{r.ucret}</td>
                    <td className="p-2">{r.konsolosluk}</td>
                    <td className="p-2">
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleUsaEdit(r.id)}
                          className="px-3 py-1 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition text-sm font-medium"
                          style={{ cursor: "pointer" }}
                        >
                          Randevuyu Düzenle
                        </button>
                        <button
                          onClick={() => handleUsaCancel(r.id)}
                          className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition text-sm font-medium"
                          style={{ cursor: "pointer" }}
                        >
                          İptal Et
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}

      {/* Schengen tabı (randevu listesi) */}
      {activeTab === "schengen" && (
        <div className="mx-12 bg-white rounded-2xl shadow p-10 min-h-[180px]">
          <h3 className="font-medium mb-4 text-lg">Alınan Randevular</h3>
          {randevuList.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-8">
              <p className="text-xl text-gray-400 mb-2">Henüz bir Schengen randevunuz yok.</p>
              <p className="text-lg text-gray-400">
                Yeni bir randevu oluşturmak için <button onClick={goToSchengenCreate} className="text-indigo-500 font-semibold underline cursor-pointer bg-transparent border-none">Randevu Al</button> butonuna tıklayınız.
              </p>
            </div>
          ) : (
            <table className="w-full border rounded-lg bg-white shadow text-left">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-2 font-medium">Ülke</th>
                  <th className="p-2 font-medium">Kategori</th>
                  <th className="p-2 font-medium">Alt Kategori</th>
                  <th className="p-2 font-medium">Randevu Alımı</th>
                  <th className="p-2 font-medium">Ücret</th>
                  <th className="p-2 font-medium">VFS Hizmet</th>
                  <th className="p-2 font-medium"></th>
                </tr>
              </thead>
              <tbody>
                {randevuList.map(r => (
                  <tr key={r.id} className="border-b">
                    <td className="p-2">{r.ulke}</td>
                    <td className="p-2">{r.kategori}</td>
                    <td className="p-2">{r.altKategori}</td>
                    <td className="p-2">{r.randevuAlimi}</td>
                    <td className="p-2">{r.ucret}</td>
                    <td className="p-2">{r.vfs}</td>
                    <td className="p-2">
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleEdit(r.id)}
                          className="px-3 py-1 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition text-sm font-medium"
                          style={{ cursor: "pointer" }}
                        >
                          Randevuyu Düzenle
                        </button>
                        <button
                          onClick={() => handleCancel(r.id)}
                          className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition text-sm font-medium"
                          style={{ cursor: "pointer" }}
                        >
                          İptal Et
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}
    </div>
  );
}