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
    const { name, type, checked, value } = e.target;
    setInvoiceForm({
      ...invoiceForm,
      [name]: type === "checkbox" ? checked : value
    });
  };

  return (
    <div style={{
      background: "#fff",
      padding: "24px",
      borderRadius: "18px",
      boxShadow: "0 2px 8px #f0f1f2",
      maxWidth: "1100px",
      margin: "32px auto",
      fontFamily: "Inter, Arial, sans-serif"
    }}>
      {/* Fiyat Tablosu - EN ÜSTTE */}
      <div style={{marginBottom:"38px"}}>
        <div style={{
          borderTop: "2px solid #f3b04b",
          borderBottom: "2px solid #f3b04b",
          marginBottom: "8px",
          textAlign: "center",
          fontWeight: 600,
          color: "#7d7d7d",
          fontSize: "18px"
        }}>
          Fiyat Tablosu
        </div>
        <table style={{
          width: "100%",
          borderCollapse: "collapse",
          background: "#f8f9fb",
          borderRadius: "12px",
          overflow: "hidden",
          fontSize: "16px",
        }}>
          <thead>
            <tr style={{background: "#fff", color: "#7d7d7d"}}>
              <th style={thStyle}>Ülke</th>
              <th style={thStyle}>Kategori</th>
              <th style={thStyle}>Alt Kategori</th>
              <th style={thStyle}>Randevu Alımı</th>
              <th style={thStyle}>Ücret</th>
              <th style={thStyle}>(VFS, AS VISA...) Hizmet Bedeli</th>
            </tr>
          </thead>
          <tbody>
            {PRICING.map((row, i) => (
              <tr key={row.ulke} style={{background: i % 2 ? "#f4f6f8" : "#fff"}}>
                <td style={tdStyle}>{row.ulke}</td>
                <td style={tdStyle}>{row.kategori}</td>
                <td style={tdStyle}>{row.altKategori}</td>
                <td style={tdStyle}>{row.randevu}</td>
                <td style={{...tdStyle, fontWeight:600}}>{row.ucret}</td>
                <td style={tdStyle}>
                  {row.hizmetBedeli ? (
                    <span style={{color:"#27ae60", fontWeight:600}}>Dahil <span style={{fontSize:"18px"}}>✅</span></span>
                  ) : (
                    <span style={{color:"#e53e3e", fontWeight:600}}>Hariç <span style={{fontSize:"18px"}}>❌</span></span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Schengen Başvuru Formu */}
      <h2 style={{fontWeight: 600, fontSize: "20px", marginBottom: "18px"}}>Schengen Randevu Alma Detayları</h2>
      <form>
        <div style={{display: "flex", gap: "24px", marginBottom: "18px"}}>
          <div style={{flex:1}}>
            <label>İSİM</label>
            <input name="isim" value={form.isim} onChange={handleChange} style={inputStyle} />
          </div>
          <div style={{flex:1}}>
            <label>SOYİSİM</label>
            <input name="soyisim" value={form.soyisim} onChange={handleChange} style={inputStyle} />
          </div>
          <div style={{flex:1}}>
            <label>CİNSİYET</label>
            <select name="cinsiyet" value={form.cinsiyet} onChange={handleChange} style={inputStyle}>
              {GENDERS.map(g => <option key={g} value={g}>{g}</option>)}
            </select>
          </div>
        </div>
        <div style={{
          borderTop: "2px solid #f3b04b", 
          borderBottom: "2px solid #f3b04b", 
          margin: "18px 0", 
          textAlign: "center", 
          fontWeight: 600, 
          color: "#7d7d7d"
        }}>
          Randevu Detayları
        </div>
        <div style={{display: "flex", gap: "24px", marginBottom: "18px"}}>
          <div style={{flex:1}}>
            <label>BAŞVURU YAPILAN ÜLKE</label>
            <select name="ulke" value={form.ulke} onChange={handleChange} style={inputStyle}>
              {COUNTRIES.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
          <div style={{flex:1}}>
            <label>VİZE TİPİ</label>
            <select name="vizeTipi" value={form.vizeTipi} onChange={handleChange} style={inputStyle}>
              {VISA_TYPES.map(v => <option key={v} value={v}>{v}</option>)}
            </select>
          </div>
          <div style={{flex:1}}>
            <label>GİDİŞ AMACI</label>
            <select name="gidisAmaci" value={form.gidisAmaci} onChange={handleChange} style={inputStyle}>
              {PURPOSES.map(p => <option key={p} value={p}>{p}</option>)}
            </select>
          </div>
        </div>
        <div style={{marginBottom: "18px"}}>
          <label>TERCİH EDİLEN ŞEHİR(LER)</label>
          <input name="sehirler" value={form.sehirler} onChange={handleChange} style={inputStyle} />
        </div>
        <div style={{
          borderTop: "2px solid #d9d9d9", 
          margin: "18px 0 0 0", 
          textAlign: "left",
          fontWeight: 600, 
          color: "#7d7d7d"
        }}>
          Pasaport Bilgileri
        </div>
        <div style={{display: "flex", gap: "24px", marginBottom: "18px"}}>
          <div style={{flex:1}}>
            <label>MİLLİYET</label>
            <select name="milliyet" value={form.milliyet} onChange={handleChange} style={inputStyle}>
              {NATIONALITIES.map(n => <option key={n} value={n}>{n}</option>)}
            </select>
          </div>
          <div style={{flex:1}}>
            <label>PASAPORT NO</label>
            <input name="pasaportNo" value={form.pasaportNo} onChange={handleChange} style={inputStyle} />
          </div>
          <div style={{flex:1}}>
            <label>PASAPORTUN VERİLDİĞİ YER</label>
            <input name="pasaportVerildigiYer" value={form.pasaportVerildigiYer} onChange={handleChange} style={inputStyle} />
          </div>
        </div>
        <div style={{display: "flex", gap: "24px", marginBottom: "18px"}}>
          <div style={{flex:1}}>
            <label>PASAPORT VERİLİŞ TARİHİ (DD/MM/YYYY)</label>
            <input name="pasaportVerilis" value={form.pasaportVerilis} onChange={handleChange} style={inputStyle} />
          </div>
          <div style={{flex:1}}>
            <label>PASAPORT SON GEÇERLİLİK TARİHİ (DD/MM/YYYY)</label>
            <input name="pasaportSonGecerlilik" value={form.pasaportSonGecerlilik} onChange={handleChange} style={inputStyle} />
          </div>
          <div style={{flex:1}}>
            <label>DOĞUM TARİHİ (DD/MM/YYYY)</label>
            <input name="dogumTarihi" value={form.dogumTarihi} onChange={handleChange} style={inputStyle} />
          </div>
        </div>
        <div style={{marginBottom: "18px"}}>
          <label>DOĞUM YERİ</label>
          <input name="dogumYeri" value={form.dogumYeri} onChange={handleChange} style={inputStyle} />
        </div>
        <div style={{
          borderTop: "2px solid #d9d9d9", 
          margin: "18px 0 0 0", 
          textAlign: "left", 
          fontWeight: 600, 
          color: "#7d7d7d"
        }}>
          Ödeme Yöntemi
        </div>
        <div style={{marginTop:"24px", marginBottom:"12px", textAlign:"center"}}>
          <img src="https://cdn-icons-png.flaticon.com/512/196/196561.png" alt="secure checkout" style={{height:"24px",marginRight:"8px"}} />
          <span style={{fontWeight:500}}>Guaranteed safe & secure checkout</span>
          <img src="https://cdn.worldvectorlogo.com/logos/stripe-3.svg" alt="stripe" style={{height:"24px",marginLeft:"8px"}} />
        </div>
        <div style={{display:"flex",justifyContent:"center",gap:"12px",margin:"10px 0"}}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" alt="visa" style={paymentIconStyle} />
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png" alt="mastercard" style={paymentIconStyle} />
          <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/American_Express_logo_%282018%29.svg" alt="amex" style={paymentIconStyle} />
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/40/Discover_Card_logo.svg" alt="discover" style={paymentIconStyle} />
          <img src="https://upload.wikimedia.org/wikipedia/commons/c/cb/Maestro_logo.svg" alt="maestro" style={paymentIconStyle} />
          <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/JCB_logo.svg" alt="jcb" style={paymentIconStyle} />
        </div>
        <div style={{
          border: "2px solid #ececec",
          borderRadius: "8px",
          background: "#fafafa",
          padding: "18px",
          marginTop: "18px",
          textAlign: "center"
        }}>
          <img src="https://cdn-icons-png.flaticon.com/512/126/126486.png" alt="credit card" style={{height:"32px",marginBottom:"8px"}} />
          <div style={{fontWeight:600, fontSize:"18px", marginBottom:"8px"}}>Kredi Kartı ile Ödeme</div>
          <div style={{color:"#e53e3e", fontWeight:500, marginBottom:"8px"}}>
            Stripe güvenli ödeme linki için WhatsApp üzerinden destek alabilirsiniz.<br/>
            <span style={{color:"#e53e3e", fontWeight:700}}>+90 850 308 0876</span>
          </div>
        </div>
      </form>

      {/* Fatura Detayları Bölümü */}
      <div style={{
        marginTop: "40px",
        background: "#fff",
        borderRadius: "18px",
        boxShadow: "0 2px 8px #f0f1f2",
        padding: "32px"
      }}>
        <div style={{
          background: "#6366f1",
          color: "#fff",
          fontWeight: 600,
          fontSize: "20px",
          borderRadius: "8px",
          padding: "12px 0",
          textAlign: "center",
          marginBottom: "24px"
        }}>
          Fatura Detayları
        </div>
        <div style={{display:"flex", justifyContent:"center", marginBottom:"20px"}}>
          <button
            type="button"
            style={{
              background: invoiceType === "bireysel" ? "#6366f1" : "#fff",
              color: invoiceType === "bireysel" ? "#fff" : "#6366f1",
              fontWeight: 600,
              border: "1px solid #6366f1",
              borderRadius: "8px 0 0 8px",
              padding: "8px 32px",
              cursor: "pointer"
            }}
            onClick={() => setInvoiceType("bireysel")}
          >
            Bireysel
          </button>
          <button
            type="button"
            style={{
              background: invoiceType === "kurumsal" ? "#6366f1" : "#fff",
              color: invoiceType === "kurumsal" ? "#fff" : "#6366f1",
              fontWeight: 600,
              border: "1px solid #6366f1",
              borderRadius: "0 8px 8px 0",
              padding: "8px 32px",
              cursor: "pointer"
            }}
            onClick={() => setInvoiceType("kurumsal")}
          >
            Kurumsal
          </button>
        </div>
        {/* Bireysel/Kurumsal Fatura Alanları */}
        {invoiceType === "bireysel" ? (
          <div style={{marginBottom:"24px"}}>
            <div style={{display: "flex", gap:"24px", marginBottom:"18px"}}>
              <div style={{flex:1}}>
                <label>İsim</label>
                <input name="isim" value={invoiceForm.isim} onChange={handleInvoiceChange} style={inputStyle} />
              </div>
              <div style={{flex:1}}>
                <label>Soyisim</label>
                <input name="soyisim" value={invoiceForm.soyisim} onChange={handleInvoiceChange} style={inputStyle} />
              </div>
              <div style={{flex:1}}>
                <label>TC Kimlik No (Zorunlu Değil)</label>
                <input name="tcKimlik" value={invoiceForm.tcKimlik} onChange={handleInvoiceChange} style={inputStyle} />
              </div>
            </div>
            <div style={{marginBottom:"10px"}}>
              <label>
                <input type="checkbox" name="efatura" checked={invoiceForm.efatura} onChange={handleInvoiceChange} />
                {" "}E-fatura mükellefiyim
              </label>
            </div>
            <div style={{display: "flex", gap:"24px", marginBottom:"18px"}}>
              <div style={{flex:1}}>
                <label>Ülke</label>
                <select name="ulke" value={invoiceForm.ulke} onChange={handleInvoiceChange} style={inputStyle}>
                  <option value="">Seç</option>
                  {COUNTRIES.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
              <div style={{flex:2}}>
                <label>Adres</label>
                <input name="adres" value={invoiceForm.adres} onChange={handleInvoiceChange} style={inputStyle} />
              </div>
              <div style={{flex:1}}>
                <label>Posta Kodu</label>
                <input name="postaKodu" value={invoiceForm.postaKodu} onChange={handleInvoiceChange} style={inputStyle} />
              </div>
            </div>
          </div>
        ) : (
          <div style={{marginBottom:"24px"}}>
            <div style={{display: "flex", gap:"24px", marginBottom:"18px"}}>
              <div style={{flex:1}}>
                <label>Şirket Adı</label>
                <input name="sirketAdi" value={invoiceForm.sirketAdi} onChange={handleInvoiceChange} style={inputStyle} />
              </div>
              <div style={{flex:1}}>
                <label>Vergi No</label>
                <input name="vergiNo" value={invoiceForm.vergiNo} onChange={handleInvoiceChange} style={inputStyle} />
              </div>
              <div style={{flex:1}}>
                <label>Vergi Dairesi</label>
                <input name="vergiDairesi" value={invoiceForm.vergiDairesi} onChange={handleInvoiceChange} style={inputStyle} />
              </div>
            </div>
            <div style={{display: "flex", gap:"24px", marginBottom:"18px"}}>
              <div style={{flex:1}}>
                <label>Ülke</label>
                <select name="ulke" value={invoiceForm.ulke} onChange={handleInvoiceChange} style={inputStyle}>
                  <option value="">Seç</option>
                  {COUNTRIES.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
              <div style={{flex:2}}>
                <label>Adres</label>
                <input name="adres" value={invoiceForm.adres} onChange={handleInvoiceChange} style={inputStyle} />
              </div>
              <div style={{flex:1}}>
                <label>Posta Kodu</label>
                <input name="postaKodu" value={invoiceForm.postaKodu} onChange={handleInvoiceChange} style={inputStyle} />
              </div>
            </div>
          </div>
        )}

        {/* Sipariş Bilgileri */}
        <div style={{
          borderTop: "2px solid #f3b04b", 
          margin: "18px 0", 
          textAlign: "center", 
          fontWeight: 600, 
          color: "#7d7d7d"
        }}>
          Sipariş Bilgileri
        </div>
        <div style={{display:"flex", gap:"48px", alignItems:"flex-start", marginTop:"24px"}}>
          <div style={{flex:1}}>
            <div style={{marginBottom:"14px", fontWeight:600}}>RANDEVU ALIMI</div>
            <div style={{marginBottom:"10px"}}>
              <label style={{display:"flex", alignItems:"center", gap:"8px", fontWeight:500}}>
                <input type="radio" name="randevuTipi" checked={true} disabled style={{accentColor: "#6366f1"}} />
                BOT İLE
              </label>
            </div>
            <div style={{marginBottom:"14px"}}>
              <label style={{display:"flex", alignItems:"center", gap:"8px", color:"#e53e3e", fontWeight:400}}>
                <input type="radio" name="randevuTipi" checked={false} disabled />
                MANUEL <span style={{fontSize:"13px"}}>(Bu ülke için geçerli değil)</span>
              </label>
            </div>
            <div style={{marginBottom:"18px"}}>
              <div style={{
                background:"#e0e7ff",
                color:"#6366f1",
                padding:"8px 16px",
                borderRadius:"5px",
                fontWeight:600,
                display:"inline-block"
              }}>
                BULGARİSTAN - TURISTIK - KISA SÜRELİ VIZE (C)
              </div>
            </div>
          </div>
          <div style={{flex:2}}>
            <div style={{marginBottom:"10px", fontWeight:600}}>Özet:</div>
            <div style={{fontSize:"22px", fontWeight:600, marginBottom:"8px"}}>€200.00</div>
            <div style={{marginBottom:"8px", color:"#575757"}}>
              (VFS, As Visa...) hizmet bedeli dahil <span style={{color:"#27ae60", fontSize:"18px"}}>✅</span>
            </div>
            <div style={{
              background:"#e53e3e",
              color:"#fff",
              fontWeight:600,
              padding:"6px 12px",
              borderRadius:"5px",
              marginBottom:"8px",
              fontSize:"15px"
            }}>
              Prime Time randevu gelmesi durumunda 30 EUR ek ücret VFS şubesinden tahsil edilecektir. (Sadece FR ve BG için)
            </div>
            <div style={{marginBottom:"10px"}}>
              <label style={{
                fontWeight:500,
                fontSize:"17px",
                display:"flex",
                alignItems:"center",
                gap:"8px"
              }}>
                <input 
                  type="checkbox" 
                  checked={mesafeliSozlesme} 
                  onChange={e => setMesafeliSozlesme(e.target.checked)} 
                  style={{accentColor:"#6366f1"}} 
                />
                <span>
                  <a 
                    href="#" 
                    style={{color:"#6366f1", textDecoration:"underline"}}
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
              style={{
                background:"#6366f1",
                color:"#fff",
                fontWeight:600,
                fontSize:"18px",
                borderRadius:"8px",
                padding:"12px 32px",
                border:"none",
                cursor:"pointer",
                marginTop:"12px"
              }}
              //onClick={...} // Siparişi başlatma fonksiyonu burada eklenmeli
            >
              Taramayı Başlat
            </button>
          </div>
        </div>
      </div>
      {/* Fatura Detayları Sonu */}
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "10px 12px",
  borderRadius: "8px",
  border: "1px solid #e0e0e0",
  marginTop: "4px",
  marginBottom: "8px",
  fontSize: "16px",
  background: "#fafbfc"
};

const paymentIconStyle: React.CSSProperties = {
  height: "32px",
  background: "#fff",
  borderRadius: "4px",
  padding: "2px 6px",
  boxShadow: "0 1px 4px #ececec"
};

const thStyle: React.CSSProperties = {
  padding: "14px 8px",
  textAlign: "left",
  fontWeight: 600,
  background: "#fff",
  borderBottom: "1px solid #ececec",
  fontSize: "15px"
};

const tdStyle: React.CSSProperties = {
  padding: "14px 8px",
  textAlign: "left",
  borderBottom: "1px solid #ececec",
  fontSize: "15px"
};