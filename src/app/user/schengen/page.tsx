'use client';
import React, { useState } from "react";
import { useRouter } from "next/navigation";

// Üstteki Fiyat Tablosu için veriler
const PRICING = [
  { ulke: "Hollanda", kategori: "Kısa Süreli Vize (C)", altKategori: "Turistik", randevu: "Bot", ucret: "€130.00", hizmetBedeli: true },
  { ulke: "Bulgaristan", kategori: "Kısa Süreli Vize (C)", altKategori: "Turistik", randevu: "Bot", ucret: "€200.00", hizmetBedeli: true },
  { ulke: "Fransa", kategori: "Kısa Süreli Vize (C)", altKategori: "Turistik", randevu: "Bot", ucret: "€250.00", hizmetBedeli: true },
  { ulke: "İtalya", kategori: "Kısa Süreli Vize (C)", altKategori: "Turistik", randevu: "Bot", ucret: "€250.00", hizmetBedeli: true },
  { ulke: "Macaristan", kategori: "Kısa Süreli Vize (C)", altKategori: "Turistik", randevu: "Bot", ucret: "€120.00", hizmetBedeli: false },
  { ulke: "Portekiz", kategori: "Kısa Süreli Vize (C)", altKategori: "Turistik", randevu: "Bot", ucret: "€120.00", hizmetBedeli: false },
  { ulke: "Slovenya", kategori: "Kısa Süreli Vize (C)", altKategori: "Turistik", randevu: "Bot", ucret: "€120.00", hizmetBedeli: false },
  { ulke: "İsviçre", kategori: "Kısa Süreli Vize (C)", altKategori: "Turistik", randevu: "Bot", ucret: "€130.00", hizmetBedeli: false },
];

const COUNTRIES = ["Bulgaristan", "Yunanistan", "Almanya", "Fransa"];
const VISA_TYPES = ["Kısa Süreli Vize (C)", "Uzun Süreli Vize (D)"];
const PURPOSES = ["Turistik", "Ticari", "Aile Ziyareti"];
const NATIONALITIES = ["Türkiye", "Almanya", "Fransa"];
const GENDERS = ["Erkek", "Kadın", "Diğer"];

export default function SchengenAppointmentForm() {
  const [form, setForm] = useState({
    isim: "",
    soyisim: "",
    cinsiyet: "Erkek",
    ulke: "Bulgaristan",
    vizeTipi: "Kısa Süreli Vize (C)",
    gidisAmaci: "Turistik",
    sehirler: "",
    milliyet: "Türkiye",
    pasaportNo: "",
    pasaportVerilis: "",
    pasaportSonGecerlilik: "",
    dogumYeri: "",
    dogumTarihi: "",
    pasaportVerildigiYer: ""
  });

  // Fatura Detayları için state
  const [invoiceType, setInvoiceType] = useState<'bireysel' | 'kurumsal'>('bireysel');
  const [invoiceForm, setInvoiceForm] = useState({
    isim: "",
    soyisim: "",
    tcKimlik: "",
    efatura: false,
    ulke: "",
    adres: "",
    postaKodu: "",
    sirketAdi: "",
    vergiNo: "",
    vergiDairesi: ""
  });
  const [mesafeliSozlesme, setMesafeliSozlesme] = useState(false);

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Fatura formu için değişiklik fonksiyonu
  const handleInvoiceChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const target = e.target;
    const name = target.name;
    let value: string | boolean;
    if (target.type === "checkbox" && 'checked' in target) {
      value = target.checked;
    } else {
      value = target.value;
    }
    setInvoiceForm({
      ...invoiceForm,
      [name]: value
    });
  };

  // Responsive form & tablo için Tailwind + overflow-x-auto
  return (
    <div className="bg-white rounded-2xl shadow-lg max-w-4xl mx-auto my-8 px-4 py-6 md:p-8 font-sans">
      

      {/* Schengen Başvuru Formu */}
      <h2 className="font-semibold text-xl mb-5">Schengen Randevu Alma Detayları</h2>
      <form>
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <div className="flex-1">
            <label>İSİM</label>
            <input name="isim" value={form.isim} onChange={handleChange} className={inputClass} />
          </div>
          <div className="flex-1">
            <label>SOYİSİM</label>
            <input name="soyisim" value={form.soyisim} onChange={handleChange} className={inputClass} />
          </div>
          <div className="flex-1">
            <label>CİNSİYET</label>
            <select name="cinsiyet" value={form.cinsiyet} onChange={handleChange} className={inputClass}>
              {GENDERS.map(g => <option key={g} value={g}>{g}</option>)}
            </select>
          </div>
        </div>
        <div className="border-t-2 border-b-2 border-yellow-400 my-4 text-center font-semibold text-gray-600">
          Randevu Detayları
        </div>
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <div className="flex-1">
            <label>BAŞVURU YAPILAN ÜLKE</label>
            <select name="ulke" value={form.ulke} onChange={handleChange} className={inputClass}>
              {COUNTRIES.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
          <div className="flex-1">
            <label>VİZE TİPİ</label>
            <select name="vizeTipi" value={form.vizeTipi} onChange={handleChange} className={inputClass}>
              {VISA_TYPES.map(v => <option key={v} value={v}>{v}</option>)}
            </select>
          </div>
          <div className="flex-1">
            <label>GİDİŞ AMACI</label>
            <select name="gidisAmaci" value={form.gidisAmaci} onChange={handleChange} className={inputClass}>
              {PURPOSES.map(p => <option key={p} value={p}>{p}</option>)}
            </select>
          </div>
        </div>
        <div className="mb-4">
          <label>TERCİH EDİLEN ŞEHİR(LER)</label>
          <input name="sehirler" value={form.sehirler} onChange={handleChange} className={inputClass} />
        </div>
        <div className="border-t-2 border-gray-200 mt-4 text-left font-semibold text-gray-600">
          Pasaport Bilgileri
        </div>
        <div className="flex flex-col md:flex-row gap-4 mb-4 mt-2">
          <div className="flex-1">
            <label>MİLLİYET</label>
            <select name="milliyet" value={form.milliyet} onChange={handleChange} className={inputClass}>
              {NATIONALITIES.map(n => <option key={n} value={n}>{n}</option>)}
            </select>
          </div>
          <div className="flex-1">
            <label>PASAPORT NO</label>
            <input name="pasaportNo" value={form.pasaportNo} onChange={handleChange} className={inputClass} />
          </div>
          <div className="flex-1">
            <label>PASAPORTUN VERİLDİĞİ YER</label>
            <input name="pasaportVerildigiYer" value={form.pasaportVerildigiYer} onChange={handleChange} className={inputClass} />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <div className="flex-1">
            <label>PASAPORT VERİLİŞ TARİHİ (DD/MM/YYYY)</label>
            <input name="pasaportVerilis" value={form.pasaportVerilis} onChange={handleChange} className={inputClass} />
          </div>
          <div className="flex-1">
            <label>PASAPORT SON GEÇERLİLİK TARİHİ (DD/MM/YYYY)</label>
            <input name="pasaportSonGecerlilik" value={form.pasaportSonGecerlilik} onChange={handleChange} className={inputClass} />
          </div>
          <div className="flex-1">
            <label>DOĞUM TARİHİ (DD/MM/YYYY)</label>
            <input name="dogumTarihi" value={form.dogumTarihi} onChange={handleChange} className={inputClass} />
          </div>
        </div>
        <div className="mb-4">
          <label>DOĞUM YERİ</label>
          <input name="dogumYeri" value={form.dogumYeri} onChange={handleChange} className={inputClass} />
        </div>
        <div className="border-t-2 border-gray-200 mt-4 text-left font-semibold text-gray-600">
          Ödeme Yöntemi
        </div>
        <div className="flex items-center justify-center gap-2 mt-4 mb-2 flex-wrap">
          <img src="https://cdn-icons-png.flaticon.com/512/196/196561.png" alt="secure checkout" className="h-6" />
          <span className="font-medium">Guaranteed safe & secure checkout</span>
          <img src="https://cdn.worldvectorlogo.com/logos/stripe-3.svg" alt="stripe" className="h-6" />
        </div>
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" alt="visa" className={iconClass} />
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png" alt="mastercard" className={iconClass} />
          <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/American_Express_logo_%282018%29.svg" alt="amex" className={iconClass} />
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/40/Discover_Card_logo.svg" alt="discover" className={iconClass} />
          <img src="https://upload.wikimedia.org/wikipedia/commons/c/cb/Maestro_logo.svg" alt="maestro" className={iconClass} />
          <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/JCB_logo.svg" alt="jcb" className={iconClass} />
        </div>
        <div className="border-2 border-gray-200 rounded-lg bg-gray-50 p-4 mt-4 text-center">
          <img src="https://cdn-icons-png.flaticon.com/512/126/126486.png" alt="credit card" className="h-8 mx-auto mb-2" />
          <div className="font-semibold text-lg mb-2">Kredi Kartı ile Ödeme</div>
          <div className="text-red-600 font-medium mb-2">
            Stripe güvenli ödeme linki için WhatsApp üzerinden destek alabilirsiniz.<br/>
            <span className="text-red-700 font-bold">+90 850 308 0876</span>
          </div>
        </div>
      </form>

      {/* Fatura Detayları Bölümü */}
      <div className="mt-10 bg-white rounded-2xl shadow-lg p-6 md:p-8">
        <div className="bg-indigo-500 text-white font-semibold text-lg rounded-lg py-3 text-center mb-6">
          Fatura Detayları
        </div>
        <div className="flex justify-center mb-6">
          <button
            type="button"
            className={`font-semibold border border-indigo-500 rounded-l-lg px-6 py-2 ${invoiceType === "bireysel" ? "bg-indigo-500 text-white" : "bg-white text-indigo-500"}`}
            onClick={() => setInvoiceType("bireysel")}
          >
            Bireysel
          </button>
          <button
            type="button"
            className={`font-semibold border border-indigo-500 rounded-r-lg px-6 py-2 ${invoiceType === "kurumsal" ? "bg-indigo-500 text-white" : "bg-white text-indigo-500"}`}
            onClick={() => setInvoiceType("kurumsal")}
          >
            Kurumsal
          </button>
        </div>
        {/* Bireysel/Kurumsal Fatura Alanları */}
        {invoiceType === "bireysel" ? (
          <div className="mb-6">
            <div className="flex flex-col md:flex-row gap-4 mb-4">
              <div className="flex-1">
                <label>İsim</label>
                <input name="isim" value={invoiceForm.isim} onChange={handleInvoiceChange} className={inputClass} />
              </div>
              <div className="flex-1">
                <label>Soyisim</label>
                <input name="soyisim" value={invoiceForm.soyisim} onChange={handleInvoiceChange} className={inputClass} />
              </div>
              <div className="flex-1">
                <label>TC Kimlik No (Zorunlu Değil)</label>
                <input name="tcKimlik" value={invoiceForm.tcKimlik} onChange={handleInvoiceChange} className={inputClass} />
              </div>
            </div>
            <div className="mb-2">
              <label>
                <input type="checkbox" name="efatura" checked={invoiceForm.efatura} onChange={handleInvoiceChange} className="mr-2" />
                E-fatura mükellefiyim
              </label>
            </div>
            <div className="flex flex-col md:flex-row gap-4 mb-4">
              <div className="flex-1">
                <label>Ülke</label>
                <select name="ulke" value={invoiceForm.ulke} onChange={handleInvoiceChange} className={inputClass}>
                  <option value="">Seç</option>
                  {COUNTRIES.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
              <div className="flex-[2]">
                <label>Adres</label>
                <input name="adres" value={invoiceForm.adres} onChange={handleInvoiceChange} className={inputClass} />
              </div>
              <div className="flex-1">
                <label>Posta Kodu</label>
                <input name="postaKodu" value={invoiceForm.postaKodu} onChange={handleInvoiceChange} className={inputClass} />
              </div>
            </div>
          </div>
        ) : (
          <div className="mb-6">
            <div className="flex flex-col md:flex-row gap-4 mb-4">
              <div className="flex-1">
                <label>Şirket Adı</label>
                <input name="sirketAdi" value={invoiceForm.sirketAdi} onChange={handleInvoiceChange} className={inputClass} />
              </div>
              <div className="flex-1">
                <label>Vergi No</label>
                <input name="vergiNo" value={invoiceForm.vergiNo} onChange={handleInvoiceChange} className={inputClass} />
              </div>
              <div className="flex-1">
                <label>Vergi Dairesi</label>
                <input name="vergiDairesi" value={invoiceForm.vergiDairesi} onChange={handleInvoiceChange} className={inputClass} />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4 mb-4">
              <div className="flex-1">
                <label>Ülke</label>
                <select name="ulke" value={invoiceForm.ulke} onChange={handleInvoiceChange} className={inputClass}>
                  <option value="">Seç</option>
                  {COUNTRIES.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
              <div className="flex-[2]">
                <label>Adres</label>
                <input name="adres" value={invoiceForm.adres} onChange={handleInvoiceChange} className={inputClass} />
              </div>
              <div className="flex-1">
                <label>Posta Kodu</label>
                <input name="postaKodu" value={invoiceForm.postaKodu} onChange={handleInvoiceChange} className={inputClass} />
              </div>
            </div>
          </div>
        )}

        {/* Sipariş Bilgileri */}
        <div className="border-t-2 border-yellow-400 my-4 text-center font-semibold text-gray-600">
          Sipariş Bilgileri
        </div>
        <div className="flex flex-col md:flex-row gap-8 items-start mt-6">
          <div className="flex-1">
            <div className="mb-3 font-semibold">RANDEVU ALIMI</div>
            <div className="mb-2">
              <label className="flex items-center gap-2 font-medium">
                <input type="radio" name="randevuTipi" checked={true} disabled className="accent-indigo-500" />
                BOT İLE
              </label>
            </div>
            <div className="mb-3">
              <label className="flex items-center gap-2 text-red-600 font-normal">
                <input type="radio" name="randevuTipi" checked={false} disabled />
                MANUEL <span className="text-xs">(Bu ülke için geçerli değil)</span>
              </label>
            </div>
            <div className="mb-3">
              <div className="bg-indigo-100 text-indigo-500 px-4 py-2 rounded font-semibold inline-block">
                BULGARİSTAN - TURISTIK - KISA SÜRELİ VIZE (C)
              </div>
            </div>
          </div>
          <div className="flex-[2]">
            <div className="mb-2 font-semibold">Özet:</div>
            <div className="text-2xl font-semibold mb-2">€200.00</div>
            <div className="mb-2 text-gray-600">
              (VFS, As Visa...) hizmet bedeli dahil <span className="text-green-600 text-lg">✅</span>
            </div>
            <div className="bg-red-600 text-white font-semibold px-3 py-2 rounded mb-2 text-base">
              Prime Time randevu gelmesi durumunda 30 EUR ek ücret VFS şubesinden tahsil edilecektir. (Sadece FR ve BG için)
            </div>
            <div className="mb-2">
              <label className="font-medium text-base flex items-center gap-2">
                <input 
                  type="checkbox" 
                  checked={mesafeliSozlesme} 
                  onChange={e => setMesafeliSozlesme(e.target.checked)} 
                  className="accent-indigo-500"
                />
                <span>
                  <a 
                    href="#" 
                    className="text-indigo-500 underline"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Mesafeli Satış Sözleşmesi
                  </a>
                  'ni okudum ve kabul ediyorum.
                </span>
              </label>
            </div>
            <button 
              type="button"
              className="bg-indigo-500 text-white font-semibold text-lg rounded-lg px-8 py-3 border-none mt-4 cursor-pointer hover:bg-indigo-600"
              //onClick={...} // Siparişi başlatma fonksiyonu burada eklenmeli
            >
              Taramayı Başlat
            </button>
          </div>
        </div>
      </div><br/><br/>
      {/* Fiyat Tablosu - EN ÜSTTE */}
      <div className="mb-10">
        <div className="border-t-2 border-b-2 border-yellow-400 mb-2 text-center font-semibold text-gray-600 text-lg">
          Fiyat Tablosu
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-gray-100 rounded-lg text-sm">
            <thead>
              <tr className="bg-white text-gray-600">
                <th className="p-3 font-semibold">Ülke</th>
                <th className="p-3 font-semibold">Kategori</th>
                <th className="p-3 font-semibold">Alt Kategori</th>
                <th className="p-3 font-semibold">Randevu Alımı</th>
                <th className="p-3 font-semibold">Ücret</th>
                <th className="p-3 font-semibold">(VFS, AS VISA...) Hizmet Bedeli</th>
              </tr>
            </thead>
            <tbody>
              {PRICING.map((row, i) => (
                <tr key={row.ulke} className={i % 2 ? "bg-gray-50" : "bg-white"}>
                  <td className="p-3">{row.ulke}</td>
                  <td className="p-3">{row.kategori}</td>
                  <td className="p-3">{row.altKategori}</td>
                  <td className="p-3">{row.randevu}</td>
                  <td className="p-3 font-semibold">{row.ucret}</td>
                  <td className="p-3">
                    {row.hizmetBedeli ? (
                      <span className="text-green-600 font-semibold">Dahil <span className="text-lg">✅</span></span>
                    ) : (
                      <span className="text-red-600 font-semibold">Hariç <span className="text-lg">❌</span></span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* Fatura Detayları Sonu */}
    </div>
  );
}

const inputClass = "w-full px-3 py-2 rounded-lg border border-gray-300 mt-1 mb-2 text-base bg-gray-50";
const iconClass = "h-8 bg-white rounded px-1 shadow";