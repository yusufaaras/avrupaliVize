'use client';
import React, { useState } from "react";
import { useRouter } from "next/navigation";

// Fiyat Tablosu verileri
const PRICING = [
  { ulke: "Hollanda", kategori: "Kısa Süreli Vize (C)", altKategori: "Turistik", randevu: "Bot", eskiUcret: "€130.00", yeniUcret: "€110.00", hizmetBedeli: true },
  { ulke: "Bulgaristan", kategori: "Kısa Süreli Vize (C)", altKategori: "Turistik", randevu: "Bot", eskiUcret: "€200.00", yeniUcret: "€150.00", hizmetBedeli: true },
  { ulke: "Fransa", kategori: "Kısa Süreli Vize (C)", altKategori: "Turistik", randevu: "Bot", eskiUcret: "€250.00", yeniUcret: "€175.00", hizmetBedeli: true },
  { ulke: "İtalya", kategori: "Kısa Süreli Vize (C)", altKategori: "Turistik", randevu: "Bot", eskiUcret: "€250.00", yeniUcret: "€220.00", hizmetBedeli: true },
  { ulke: "Macaristan", kategori: "Kısa Süreli Vize (C)", altKategori: "Turistik", randevu: "Bot", eskiUcret: "€120.00", yeniUcret: "€100.00", hizmetBedeli: false },
  { ulke: "Portekiz", kategori: "Kısa Süreli Vize (C)", altKategori: "Turistik", randevu: "Bot", eskiUcret: "€120.00", yeniUcret: "€100.00", hizmetBedeli: false },
  { ulke: "Slovenya", kategori: "Kısa Süreli Vize (C)", altKategori: "Turistik", randevu: "Bot", eskiUcret: "€120.00", yeniUcret: "€100.00", hizmetBedeli: false },
  { ulke: "İsviçre", kategori: "Kısa Süreli Vize (C)", altKategori: "Turistik", randevu: "Bot", eskiUcret: "€130.00", yeniUcret: "€100.00", hizmetBedeli: false },
];

const ALL_COUNTRIES = [ 
  "Afghanistan",
  "Åland Islands",
  "Albania",
  "Algeria",
  "American Samoa",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antarctica",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bermuda",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Bouvet Island",
  "Brazil",
  "British Indian Ocean Territory",
  "Brunei Darussalam",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Cape Verde",
  "Cayman Islands",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Christmas Island",
  "Cocos (Keeling) Islands",
  "Colombia",
  "Comoros",
  "Congo",
  "Congo, The Democratic Republic of The",
  "Cook Islands",
  "Costa Rica",
  "Cote D'ivoire",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Ethiopia",
  "Falkland Islands (Malvinas)",
  "Faroe Islands",
  "Fiji",
  "Finland",
  "France",
  "French Guiana",
  "French Polynesia",
  "French Southern Territories",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Gibraltar",
  "Greece",
  "Greenland",
  "Grenada",
  "Guadeloupe",
  "Guam",
  "Guatemala",
  "Guernsey",
  "Guinea",
  "Guinea-bissau",
  "Guyana",
  "Haiti",
  "Heard Island and Mcdonald Islands",
  "Holy See (Vatican City State)",
  "Honduras",
  "Hong Kong",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran, Islamic Republic of",
  "Iraq",
  "Ireland",
  "Isle of Man",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jersey",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Korea, Democratic People's Republic of",
  "Korea, Republic of",
  "Kuwait",
  "Kyrgyzstan",
  "Lao People's Democratic Republic",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libyan Arab Jamahiriya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macao",
  "Macedonia, The Former Yugoslav Republic of",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Martinique",
  "Mauritania",
  "Mauritius",
  "Mayotte",
  "Mexico",
  "Micronesia, Federated States of",
  "Moldova, Republic of",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Montserrat",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Caledonia",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "Niue",
  "Norfolk Island",
  "Northern Mariana Islands",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Palestinian Territory, Occupied",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Pitcairn",
  "Poland",
  "Portugal",
  "Puerto Rico",
  "Qatar",
  "Reunion",
  "Romania",
  "Russian Federation",
  "Rwanda",
  "Saint Helena",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Pierre and Miquelon",
  "Saint Vincent and The Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Georgia and The South Sandwich Islands",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Svalbard and Jan Mayen",
  "Swaziland",
  "Sweden",
  "Switzerland",
  "Syrian Arab Republic",
  "Taiwan, Province of China",
  "Tajikistan",
  "Tanzania, United Republic of",
  "Thailand",
  "Timor-leste",
  "Togo",
  "Tokelau",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Turks and Caicos Islands",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "United States Minor Outlying Islands",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Venezuela",
  "Viet Nam",
  "Virgin Islands, British",
  "Virgin Islands, U.S.",
  "Wallis and Futuna",
  "Western Sahara",
  "Yemen",
  "Zambia",
  "Zimbabwe"
];

type PasaportBilgileriProps = {
  form: any;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
};
const COUNTRIES = ["Bulgaristan", "Fransa", "Hollanda", "İsviçre", "İtalya", "Macaristan", "Portekiz", "Slovenya"];
const VISA_TYPES = ["Kısa Süreli Vize (C)", "Uzun Süreli Vize (D)"];
const PURPOSES = ["Turistik", "Ticari", "Aile Ziyareti"];
const NATIONALITIES = ["Türkiye", "Almanya", "Fransa"];
const GENDERS = ["Erkek", "Kadın", "Diğer"];

// Pasaport Bilgileri - Macaristan (Görsel 1)
function PasaportBilgileriMacaristan({ form, handleChange }: PasaportBilgileriProps) {
  return (
    <>
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
          <label>KİŞİ EMAİLİ (AS VISA ÖZEL)</label>
          <input name="kisiEmaili" value={form.kisiEmaili || ""} onChange={handleChange} className={inputClass} />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <div className="flex-1">
          <label>KİŞİ TELEFONU (AS VISA ÖZEL)</label>
          <input name="kisiTelefonu" value={form.kisiTelefonu || ""} onChange={handleChange} className={inputClass} />
        </div>
        <div className="flex-1">
          <label>TC KİMLİK NO (AS VISA ÖZEL)</label>
          <input name="tcKimlikNo" value={form.tcKimlikNo || ""} onChange={handleChange} className={inputClass} />
        </div>
        <div className="flex-1">
          <label>DOĞUM TARİHİ (DD/MM/YYYY)</label>
          <input name="dogumTarihi" value={form.dogumTarihi} onChange={handleChange} className={inputClass} />
        </div>
      </div>
    </>
  );
}

function PasaportBilgileriPortekiz({ form, handleChange }: PasaportBilgileriProps) {
  return (
    <>
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
          <label>KİŞİ EMAİLİ (AS VISA ÖZEL)</label>
          <input name="kisiEmaili" value={form.kisiEmaili || ""} onChange={handleChange} className={inputClass} />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <div className="flex-1">
          <label>KİŞİ TELEFONU (AS VISA ÖZEL)</label>
          <input name="kisiTelefonu" value={form.kisiTelefonu || ""} onChange={handleChange} className={inputClass} />
        </div>
        <div className="flex-1">
          <label>TC KİMLİK NO (AS VISA ÖZEL)</label>
          <input name="tcKimlikNo" value={form.tcKimlikNo || ""} onChange={handleChange} className={inputClass} />
        </div>
        <div className="flex-1">
          <label>DOĞUM TARİHİ (DD/MM/YYYY)</label>
          <input name="dogumTarihi" value={form.dogumTarihi} onChange={handleChange} className={inputClass} />
        </div>
      </div>
    </>
  );
}

// Pasaport Bilgileri - Slovenya (Görsel 3)
function PasaportBilgileriSlovenya({ form, handleChange }: PasaportBilgileriProps) {
  return (
    <>
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
          <label>KİŞİ EMAİLİ (AS VISA ÖZEL)</label>
          <input name="kisiEmaili" value={form.kisiEmaili || ""} onChange={handleChange} className={inputClass} />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <div className="flex-1">
          <label>KİŞİ TELEFONU (AS VISA ÖZEL)</label>
          <input name="kisiTelefonu" value={form.kisiTelefonu || ""} onChange={handleChange} className={inputClass} />
        </div>
        <div className="flex-1">
          <label>TC KİMLİK NO (AS VISA ÖZEL)</label>
          <input name="tcKimlikNo" value={form.tcKimlikNo || ""} onChange={handleChange} className={inputClass} />
        </div>
        <div className="flex-1">
          <label>DOĞUM TARİHİ (DD/MM/YYYY)</label>
          <input name="dogumTarihi" value={form.dogumTarihi} onChange={handleChange} className={inputClass} />
        </div>
      </div>
    </>
  );
}
function PasaportBilgileriItaly({ form, handleChange }: PasaportBilgileriProps) {
  return (
    <>
      {/* İlk satır: milliyet, pasaport no, pasaport verildiği yer (korunmuş) */}
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

      {/* İtalya için dış konteyner beyaz yapıldı; iç alanlar aynı şekilde düzenlendi */}
      <div className="bg-white p-4 rounded mb-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <label>İKAMET ADRESİ (IDATA ÖZEL)</label>
            <input name="ikametAdresi" value={form.ikametAdresi || ""} onChange={handleChange} className={inputClass} />
          </div>
          <div className="flex-1">
            <label>KİŞİ EMAİLİ (IDATA ÖZEL)</label>
            <input name="kisiEmaili" value={form.kisiEmaili || ""} onChange={handleChange} className={inputClass} />
          </div>
          <div className="flex-1">
            <label>KİŞİ TELEFONU (IDATA ÖZEL)</label>
            <input name="kisiTelefonu" value={form.kisiTelefonu || ""} onChange={handleChange} className={inputClass} />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mt-4">
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

        {/* Yeni eklenen alan: DOĞUM YERİ */}
        <div className="mt-4">
          <label>DOĞUM YERİ</label>
          <input name="dogumYeri" value={form.dogumYeri || ""} onChange={handleChange} className={inputClass} />
        </div>
      </div>
    </>
  );
}

// Standart Pasaport Bilgileri
function PasaportBilgileriNormal({ form, handleChange }: PasaportBilgileriProps) {
  return (
    <>
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
    </>
  );
}

export default function SchengenAppointmentForm() {
  const [form, setForm] = useState({
    isim: "",
    soyisim: "",
    cinsiyet: "Erkek",
    ulke: "Bulgaristan",
    vizeTipi: "Kısa Süreli Vize (C)",
    gidisAmaci: "Turistik",
    sehirler: "",
    franceVisasRef: "",
    milliyet: "Türkiye",
    pasaportNo: "",
    pasaportVerilis: "",
    pasaportSonGecerlilik: "",
    dogumYeri: "",
    dogumTarihi: "",
    pasaportVerildigiYer: "",
    ikametAdresi: "",
    kisiEmaili: "",
    kisiTelefonu: "",
    tcKimlikNo: "",
  });

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

  // Seçilen ülkeye göre paket bilgisi ve fiyatı bul
  const selectedCountry = PRICING.find(p => p.ulke === form.ulke);
  const selectedPackageText = selectedCountry
    ? `${selectedCountry.ulke} - ${selectedCountry.altKategori} - ${selectedCountry.kategori}`
    : "";
  const selectedPrice = selectedCountry ? selectedCountry.yeniUcret : "";
  const hizmetBedeliText = selectedCountry
    ? (
      selectedCountry.hizmetBedeli
        ? <span className="text-green-600 text-lg">Dahil <span>✅</span></span>
        : <span className="text-red-600 text-lg">Hariç <span>❌</span></span>
    )
    : "";

  const isSwiss = form.ulke === "İsviçre";
  const isFrance = form.ulke === "Fransa";
  const isMacaristan = form.ulke === "Macaristan";
  const isPortekiz = form.ulke === "Portekiz";
  const isSlovenya = form.ulke === "Slovenya";
  const isItaly = form.ulke === "İtalya";

  const purposesOptions = isSwiss ? ["Turistik"] : PURPOSES;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

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

  // Pasaport bilgi formu seçimi
  let PasaportFormComponent = PasaportBilgileriNormal;
  if (isMacaristan) {
    PasaportFormComponent = PasaportBilgileriMacaristan;
  } else if (isPortekiz) {
    PasaportFormComponent = PasaportBilgileriPortekiz;
  } else if (isSlovenya) {
    PasaportFormComponent = PasaportBilgileriSlovenya;
  }if (isItaly) {
    PasaportFormComponent = PasaportBilgileriItaly;
  }

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
              {purposesOptions.map(p => <option key={p} value={p}>{p}</option>)}
            </select>
          </div>
        </div>
        <div className="mb-4 flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <label>TERCİH EDİLEN ŞEHİR(LER)</label>
            <input name="sehirler" value={form.sehirler} onChange={handleChange} className={inputClass} />
          </div>
          {isFrance && (
            <div className="flex-1">
              <label>FRANCE-VISAS REFERANS NUMARASI</label>
              <input name="franceVisasRef" value={form.franceVisasRef} onChange={handleChange} className={inputClass} />
            </div>
          )}
        </div>
        <div className="border-t-2 border-gray-200 mt-4 text-left font-semibold text-gray-600">
          Pasaport Bilgileri
        </div>
        <PasaportFormComponent form={form} handleChange={handleChange} />
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
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/American_Express_logo_%282018%29.svg/1202px-American_Express_logo_%282018%29.svg.png?20191022102801" alt="amex" className={iconClass} />
          <img src="data:image/png;base64,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" alt="discover" className={iconClass} />
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAz1BMVEX////MITE6m9kynt0xmNjNHy8AjNTPGynJJTe7PFZdi8K3QFvPGicsoOCAdKMlouPSEx91e63HAAClVHbWAAodk9eky+ueW4BEltLGKj33+v3JABju9fv9+PjT5fTm8PlRkcvIAA3CM0h5teL57O3uxMaTwudUpdzy1NXjm5/PNkOw0e3I3/L35OXhkpdrr+DnrbDZdXjWYWnRRU/cf4TZbXPUVl/ei4vRUVGvTGtpg7jruLuWZI3PQ0SBpdGwRGKMapWyqsTa0NzdwcrNa3UpDqnKAAANoklEQVR4nO1da5uauhYW5GKnTKelhU5BpFQFFRV0UNtxenbP5f//ppOQhIsEr2va/ewn74ddRXTysq5ZWcnudAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQKOH0MB+rnPG+E4HlQv3cenME8tsMwHBKgV/Z80L/+9xaT/XS5y7LVarNZrbLdbpmOJyO48baiPw+HSRTJimVZCgF6IctRkoTx4PLfm6TZZvs0kwzXdY0c6IUuzb6vN8v9qxLy4ySSZUxAPkR+MYrC+SW/N86+zyTd0HVVlWpQVd0w1N7P9XTxSlTsnEiDRp2RLIdnymeS9dQmjRojVVf17ym8EQ2G2nEiJSFLjk86BS/tmceIlIx011xPIJk480g7iwnlY2mhc4SPN8pM8wwiDIbZG0OJp38ZlRyIjt9Cx1sszeB8JpTODMQb9OeJdSmVnI5i+7zfW0z1S6lg6MH2djrz8DxT4dGJ4kbwGaVPwQUKVpOOm91mO307sq6kImNfMDzw1OOVrl9HBUENZtMbhHOlhlWFE1Ysx1s+uVeKhUB3N+NrudwkFiacpLCcxdq4XiwU7mx6FRV/eLW11OhEMfm9/c/bxEKFY6yuULVBBEEFs5Ft/HtL9Wax5FCN7xf7gbkMxAXBGjqdDEIsBIZ0oeHMQVSsYPOvTQBFRcJ+4CI28c2WX0X37i9ILkjVzP0FXDRgLp9AuWA26R/i8hWcywVsgHXsEVjHKJvgLE2DtX25+9cnncyHbw+ZNTbn+DSw+EJw/+vbmwLvIdnoTyfjjZ+AcpHlrxX8AjUeY32qQBACc6mi+/gDVDbu7vj8E9b4G2zuvoDajXvUpUEmMVw2HwywrAZB7x1xAv3hqwoGkZE/gypacCSFhlayxwbk5zegitYeO31YJXt89/FzE7BkVKnNo8EqWfdZCt43AcoFKVrG5zKAVbLHj6Dm0QaTHzphQ3/3+bdwQYkAj8scNFeW5be/h4xk8twzLJXuh08cg6EAJaP2OIKBtZjuy4+PrYBlw5lEw1qMLD8cAWyKpjasZg5L5Si6d6DZs6oeimb4uklZHQ/fQKONvqpz8aG17Ci670BFoz/V0wAbeLQn8FWHTJ5VqZ6hwWpZ9+vdCfxlAJKRjE11lgY88X/4/OYEvkFK5qAcEANbzLf3+nGAckGKVtWzkB8xcRsGA+9aS5ztPn+5ZLBGkMO9gYy7q/gyfklGGdol6MCVpHKtpfpx/yJdQEZfT3Msb2BTLdS0REytur5KFwRr11pmpvc/3qsnwcah9mhpcmFeT0atFANaBmVV1iMdMgtVkgoXh6+d3bu3Uu8kCsEw401vICMF6YlBKVGTjFZdPnb42tn9+u40fr2lztnYUg3JbjGaYMmcs8+PMlZYHXjuvGv8On3ytbxLi3RsUTb3DPkH902gm18+uQauOxkrMgxvZuS6V2qhahjM6+m4ccsNcPMWH8aGGU1LlLHiBpnapY6v5c4tSnD/XBgOE7m20m4pSRja6HpUvYzuz2//92q1WT+pkkEn8Z46m81UCf8XQ1KD3nqz7WE2bvC02uU+YvUU8KNtGWnmfKekVXutcpVS5FoHCTa1oR3PfdLa2PfncbnYrsjhnLTP9AdxwoSmKMN4gO53cBPjYpG6qsTWwsfjyc5FlpxjqRq78WKxmLqS4a7SyYiIbzRJ19wWojJzbpmXKdWR52Qsm2gZ1bUQPfuD5rIBq/BYybyikb5N/cdBBwoiM6vk79PAWJNRp728zcybBsG63jOzmHKXRorJM9+ZKQn5u33yT25X+dAdRjJCz/mwdcknbKxhvW3GsQmXA+4bQ61kvKPMdakhT4l3WszMrFEYS3scNmyV07G5ZCzaKTIgY0eDtMJ8hH1mOFrdRxAMiFwa/Vn5wzhseuyp+rbMERdrg45ptCBXx+au00TKKVgHU/KNPt8zU2Pv0zZSTIZcmVMy2P7jxl/qo7Sg7vTo3TijOLjm6aq+Lt9OZmq9CuZt1h0OPI4Xd3dEGft8z0zt37fJv8hAiOo4Q6orSDsj9Kj9QYxTmznTK3TZYorohwm7u4OcQCGYQRzH/xkvxsgHL9kIkRwCSa0p1UgqzWW0L21n/NQQjbs6SkYhoxgMCzJEDAOlsH85ChNLIzmnJtNRzy2moCgZtxRLs8kbW1EYXxl/57NpmiiesGRmu1ltdWNbjt7zvGnR9TPaobvNIjKuGg7a2JBv8tNM1o40jxgZ6rkSltHgyKMUcVPRYkZGYbRo/CLU5orC5ILLjd0XXKJRe0UygyOim7HhjvbZZlmUXbyNWXNZy4ZkjPVRMsTaOzF94rZGjL2vMaMnFVAUNeUIg1l3rFFP5oREaNTFDwoyfdzGdv8SYDIzr/qsA9b36y1RuDeZCnamJh0xfb+fHbJhWRG/mEFjihPSQdpU40OLDrpv5VQiHDYHCNRoHJuJqB+HBH1GpjAleygrRDLs4ZPRFY9+jN1vwAzIYzmoSy9M2slwJUPHjAyKkiHa5RRDwqHWiuzBgePqDy1+1zlSM7t448/DF1yh0Vkyk/snVaVK5+3w+4DdXSTUJiPT8ADHyVCB+Ex9YjIS5KvoD2IXPGw2yPrJYWSkQA4gqkTS/n9/GuUS6yTXMn07YYNFgtFn7N4n/TYyzP4HzIlRLYqU0v6VkNO6PJATbgswcs2yUssLJt+RxTP716v+tbMPcgfF7ixKBjr7alPN6FyT65rZ351rNFRSl4QcA/1BFBrLgfk+68keaBxxEfLlI6IMUGpMDX5HyFDfi8wfv2OLYh4jY2zpFY4D2ByJMzRWoFSnlvYnCnvryxZTpxi7tMIzF2T8QRUx9eEVaXrfdWbRRG3YcivKa7hkAhZ30kaRoQiavHSGyWOoVMmgmQ+L7mjewB65lc8OiGkh9pRMP9IsTiXH0krprF3qa72f+eBUGkGJBZVqxnIxk4XUZtBk6Qw/0aTODI2+9EHY6C32kl2nj5xRGFpJ8YrnV9CtRaTamfRRExsoZljj3HuVC3xr4utYMtkZrRtkis84UwCWrKNkkk1iOnlEKuSRsHJASL7AggsyDZYAlL1e+avyLSvx7FhcGUt4/wmb+6JZTM13dSamXmsCbppMMQXgTc7Ygx5oxVSgg71rkfQ7EZuIzvNkht3kF8l1x0ETTKphKLIiNxgpeaEATZzp722Y3izWeL7MkpnRhmTFQZFCL2eu8bRkXHhZcxFuOdNmNmbbqpDBnqKw/4jFRsdOkmGx/QezLxywT3IAG80ikAWhWXW+6S4MmdFsy2e/T9MtU7oRffBGucY/nk4nxcRnPGtMNstpM6egwcig4bMkjdQKNTqQuDIxG1S2AmKVVSopgEN3Bc2jXD+d6l7Iycwsb+yMegZzZjTgt7RfjDZBb32wK6osaPBKTVQAciXS5eU1jX4HT+p5fwnfo0TNSGM3ZmadTqaaldEuTFYOGLPsRV9xGsqQkj3tsrQum7LU1CwCMvt3tNJ8UGxXSgYVjSMgD5zUBa2osXEm1BqTUhQs3GX5dmKyZIbaP95wtmyw8Vaqm6XjLKs5tLII2HRnRTKjla9zD27R50sGXVEnmwZZ4rKUxnx6qB1kbKMdUiPVKEWTmqwcuCrsW9Wzgx6s8UxHj2CZZXUnUJZnm4VzphO5BbC4gS2rsH9SRiumlBGNHY7GfHEU10pNkVUrMg3+/T4P62XFe7QtihezUoVUozetCAeZvoq/lI73NcFUC+fNVFPRcliV12QTnUU/IF+wtAi5pwi/pR9UfIhm4VIn+ljOfwjdYEXI8aEL6OUvZuSmvtkts61pGpJhEtTMQXXNXjbd7/fpqlfsIXSDoHpPvfe0ZbHpDCgWbz9t8WG1BE1m1znkSuupisvIR5c4dTdAFIMj+zyqi03gy4C/ebm5vgwIvEArP55abQZuBNhWy20O8NL53dsTgF1tNuotGsBNDXLPOA5YJTtoagBuN3mA7fg9gcN2E+gWjUf4LTNHyBw0AkG3aD28Ae0nOQrO5hPgnSbPn9oBrILq7JALdFvj/Yd2vIOVGm9vICgXxKYVDx+Bm86bXMBbgdvQvYON/txWYPCW0zYyP2B7GrlN2tDt8y24f+atr16PlvZ54I0N1U6NCh5/gJp/28aGfF4MyeWO0zPz4fNFvWinoEoLbz/m1j3AtzRLXxrowVp/2knTlLv/FHibVvcdLlS2NZpBAG/TmqbTMXezFvAGuu4rb6HJN9BN9+Mljwv8vubXTdHIutukdSct7KbT+w9fjErPLDSXE5tOobcDP/z68q0EbAMwWyw7AuiN2uW8/+vL796oDb+FnuHhGXgDwFkHabzO/ub7Z9B9zWcebgB97ATjAurY/tghGpQLqFzO5wI+7ZQVaC4XHNUCf4jO/25pJz+Efq69FGwAExtl6HiQxxsdOwWAj3/SwVN/2yPB1GuOBOuAH9Y2+YOHtXX+WcfovcIBh5sbhHPjAYedv9PRk66b3SAWAuBDQb3F1Lhm149uAhwKiunEMuxxrZl5KR2o41oxoA/S9TLzEmWDPEg3xyDRztO2M484nqrnH3G8BT3imOD04dP5x8NzD5/eSH/q8Okcvg16LLhXHgve4PHax4Ln+E0Htj9tX/3AdopXPko/+21H6Vfxj/ifHAgICAgICAgICAgICAgICAgICAgICAgICAgICPyt8X+6CtHHLuflMgAAAABJRU5ErkJggg==" alt="maestro" className={iconClass} />
          <img src="data:image/jpeg;base64,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" alt="jcb" className={iconClass} />
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
                  {ALL_COUNTRIES.map(c => <option key={c} value={c}>{c}</option>)}
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
                <label>Ünvan</label>
                <input name="sirketAdi" value={invoiceForm.sirketAdi} onChange={handleInvoiceChange} className={inputClass} placeholder="Ünvan" />
              </div>
              <div className="flex-1">
                <label>Vergi K.N.</label>
                <input name="vergiNo" value={invoiceForm.vergiNo} onChange={handleInvoiceChange} className={inputClass} placeholder="Vergi K.N." />
              </div>
            </div>
            <div className="mb-2">
              <label>
                <input
                  type="checkbox"
                  name="efatura"
                  checked={invoiceForm.efatura}
                  onChange={handleInvoiceChange}
                  className="mr-2"
                />
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
                <input name="adres" value={invoiceForm.adres} onChange={handleInvoiceChange} className={inputClass} placeholder="Adres" />
              </div>
              <div className="flex-1">
                <label>Posta Kodu</label>
                <input name="postaKodu" value={invoiceForm.postaKodu} onChange={handleInvoiceChange} className={inputClass} placeholder="Posta Kodu" />
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
                {selectedPackageText}
              </div>
            </div>
          </div>
          <div className="flex-[2]">
            <div className="mb-2 font-semibold">Özet:</div>
            <div className="text-2xl font-semibold mb-2">{selectedPrice}</div>
            <div className="mb-2 text-gray-600">
              (VFS, As Visa...) hizmet bedeli {hizmetBedeliText}
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
               
            >
              Taramayı Başlat
            </button>
          </div>
        </div>
      </div><br/><br/>
       
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
                  <td className="p-3 font-semibold">
                    <div className="flex flex-col">
                      <span className="line-through text-gray-400 text-xs font-medium">{row.eskiUcret}</span>
                      <span className="text-lg font-bold text-gray-800">{row.yeniUcret}</span>
                    </div>
                  </td>
                  <td className="p-3 font-semibold">
                    {row.hizmetBedeli ? (
                      <span className="flex items-center text-green-600 font-semibold gap-1">
                        Dahil <span className="text-lg">✅</span>
                      </span>
                    ) : (
                      <span className="flex items-center text-red-600 font-semibold gap-1">
                        Hariç <span className="text-lg">❌</span>
                      </span>
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