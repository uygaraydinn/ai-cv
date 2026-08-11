import { useState } from "react";

function CvForm(props) {
  
  const [skillInput, setSkillInput] = useState("");

  const [showPersonal, setShowPersonal] = useState(false);
  const [showEducation, setShowEducation] = useState(false);
  const [showExperience, setShowExperience] = useState(false);
  const [showSkills, setShowSkills] = useState(false);
  const [showCertificates, setShowCertificates] = useState(false);
  const [showLanguages, setShowLanguages] = useState(false);

  return ( 
    <div>

      <h2
       onClick={() => setShowPersonal(!showPersonal)}
       style={{ cursor: "pointer" }}
      >
      {showPersonal ? "▼" : "▶"} Kişisel Bilgiler
      </h2>

      {showPersonal && (
      <>
      <label>Ad Soyad</label>
      <input
        type="text"
        placeholder="Ad Soyad"
        value={props.adSoyad}
        onChange={(e) => props.setAdSoyad(e.target.value)}

      />
      <label>E-Posta</label>
      <input
        type="email"
        placeholder="E-posta"
        value={props.email}
        onChange={(e) => props.setEmail(e.target.value)}
      />
      <label>Telefon</label>
      <input
        type="tel"
        placeholder="Telefon"
        value={props.telefon}
        onChange={(e) => props.setTelefon(e.target.value)}
      />
      <label>Şehir</label>
      <input
        type="text"
        placeholder="Şehir"
        value={props.sehir}
        onChange={(e) => props.setSehir(e.target.value)}
      />
      <label>Meslek</label>
      <input
        type="text"
        placeholder="Meslek"
        value={props.meslek}
        onChange={(e) => props.setMeslek(e.target.value)}
      />
      <label>Hakkımda</label>
       <textarea
       placeholder="Kendinizden kısaca bahsedin..."
       value={props.hakkimda}
       onChange={(e) => props.setHakkimda(e.target.value)}
       ></textarea>

       <label>Profil Fotoğrafı</label>

       <input
       type="file"
       accept="image/*"
       onChange={(e) => {
       const file = e.target.files[0];

       if (file) {
       const reader = new FileReader();

       reader.onloadend = () => {
       props.setProfilFoto(reader.result);
       };

       reader.readAsDataURL(file);
       }
       }}
       />

       </>
       )}

       <hr />
        <h2
        onClick={() => setShowEducation(!showEducation)}
        style={{ cursor: "pointer" }}
        >
        {showEducation ? "▼" : "▶"} 🎓 Eğitim
        </h2>

        {showEducation && (
        <>

       <label>Okul</label>
       <input
        type="text"
        placeholder="Okul"
        value={props.okul}
        onChange={(e) => props.setOkul(e.target.value)}
       />

       <label>Bölüm</label>
       <input
        type="text"
        placeholder="Bölüm"
        value={props.bolum}
        onChange={(e) => props.setBolum(e.target.value)}
       />
       <label>Başlangıç Yılı</label>
       <input
        type="number"
        placeholder="Başlangıç Yılı"
        value={props.baslangicYili}
        onChange={(e) => props.setBaslangicYili(e.target.value)}
       />
       <label>Bitiş Yılı</label>
       <input
        type="number"
        placeholder="Bitiş Yılı"
        value={props.bitisYili}
        onChange={(e) => props.setBitisYili(e.target.value)}
       />

       <button
        onClick={() => {
        const yeniEgitim = {
        okul: props.okul,
        bolum: props.bolum,
        baslangic: props.baslangicYili,
       bitis: props.bitisYili,
       };

        if (props.editEducationIndex !== null) {
        const yeniListe = [...props.egitimler];
        yeniListe[props.editEducationIndex] = yeniEgitim;
        props.setEgitimler(yeniListe);

        props.setOkul("");
        props.setBolum("");
        props.setBaslangicYili("");
        props.setBitisYili("");

        props.setEditEducationIndex(null);

        return;
        }

        props.setEgitimler([
        ...props.egitimler,
        yeniEgitim,
        ]);

        props.setOkul("");
        props.setBolum("");
        props.setBaslangicYili("");
        props.setBitisYili("");
        }}

        >
        {props.editEducationIndex === null
        ? "Eğitim Ekle"
        : "Eğitimi Güncelle"}
        </button>

        </>
        )}

       <hr />

       <h2
       onClick={() => setShowExperience(!showExperience)}
       style={{ cursor: "pointer" }}
       >
       {showExperience ? "▼" : "▶"} 💼 Deneyim
       </h2>

       {showExperience && (
       <>

       <label>Şirket</label>
       <input
        type="text"
         placeholder="Şirket Adı"
        value={props.sirket}
        onChange={(e) => props.setSirket(e.target.value)}
        />
       <label>Pozisyon</label>
       <input
       type="text"
       placeholder="Pozisyon"
       value={props.pozisyon}
       onChange={(e) => props.setPozisyon(e.target.value)}
        />

        <label>Başlangıç Yılı</label>
        <input
        type="text"
        placeholder="2023"
        value={props.deneyimBaslangic}
        onChange={(e) => props.setDeneyimBaslangic(e.target.value)}
        />

        <label>Bitiş Yılı</label>
        <input
        type="text"
        placeholder="2024"
        value={props.deneyimBitis}
        onChange={(e) => props.setDeneyimBitis(e.target.value)}
        />

        <label>Deneyim Açıklaması</label>
        <textarea
        placeholder="Bu işte neler yaptınız?"
        value={props.deneyimAciklama}
        onChange={(e) => props.setDeneyimAciklama(e.target.value)}
        ></textarea>
        <button
        onClick={() => {
        const yeniDeneyim = {
        sirket: props.sirket,
        pozisyon: props.pozisyon,
        baslangic: props.deneyimBaslangic,
        bitis: props.deneyimBitis,
        aciklama: props.deneyimAciklama,
        };

        if (props.editDeneyimIndex !== null) {
        const yeniListe = [...props.deneyimler];
        yeniListe[props.editDeneyimIndex] = yeniDeneyim;
        props.setDeneyimler(yeniListe);
        props.setSirket("");
        props.setPozisyon("");
        props.setDeneyimBaslangic("");
        props.setDeneyimBitis("");
        props.setDeneyimAciklama("");
        props.setEditDeneyimIndex(null);

        return;
        }

        props.setDeneyimler([
        ...props.deneyimler,
        yeniDeneyim,
       ]);
       props.setSirket("");
       props.setPozisyon("");
       props.setDeneyimBaslangic("");
       props.setDeneyimBitis("");
       props.setDeneyimAciklama("");
        }}
        >
        {props.editDeneyimIndex === null
        ? "Deneyim Ekle"
        : "Deneyimi Güncelle"}
        </button>
        </>
        )}

        <hr />

        <h2
        onClick={() => setShowSkills(!showSkills)}
        style={{ cursor: "pointer" }}
        >
        {showSkills ? "▼" : "▶"} 🛠️ Yetenekler
        </h2>

        {showSkills && (
        <>

        <input
        type="text"
        placeholder="Bir yetenek yazın"
        value={skillInput}
        onChange={(e) => setSkillInput(e.target.value)}
        />
        <button
        onClick={() => {
        const yeniSkill = skillInput.trim().toLowerCase();

        // Boş giriş kontrolü
        if (yeniSkill === "") {
        return;
        }

        // Aynı yetenek var mı?
        const varMi = props.skills.some(
        (skill) => skill.toLowerCase() === yeniSkill
        );

        if (varMi) {
        alert("Bu yetenek zaten eklenmiş.");
        setSkillInput("");
        return;
        }

        // Listeye ekle
       props.setSkills([...props.skills, skillInput.trim()]);

        // Input'u temizle
        setSkillInput("");
        }}
       >
       Yetenek Ekle
       </button>

       <br />
       <br />

        </>
        )}

        <hr />

<h2
  onClick={() => setShowCertificates(!showCertificates)}
  style={{ cursor: "pointer" }}
>
  {showCertificates ? "▼" : "▶"} 📜 Sertifikalar
</h2>

{showCertificates && (
  <>
    <label>Sertifika Adı</label>
    <input
      type="text"
      placeholder="Örn: Python Programlama"
      value={props.sertifikaAdi}
      onChange={(e) => props.setSertifikaAdi(e.target.value)}
    />

    <label>Sertifika Kurumu</label>
    <input
      type="text"
      placeholder="Örn: BTK Akademi"
      value={props.sertifikaKurumu}
      onChange={(e) => props.setSertifikaKurumu(e.target.value)}
    />

    <label>Sertifika Yılı</label>
    <input
      type="text"
      placeholder="2025"
      value={props.sertifikaYili}
      onChange={(e) => props.setSertifikaYili(e.target.value)}
    />

    <label>Sertifika Linki</label>
    <input
      type="url"
      placeholder="https://..."
      value={props.sertifikaLinki}
      onChange={(e) => props.setSertifikaLinki(e.target.value)}
    />

    <button
      type="button"
      onClick={() => {
        if (!props.sertifikaAdi.trim()) {
          return;
        }

        const yeniSertifika = {
          ad: props.sertifikaAdi.trim(),
          kurum: props.sertifikaKurumu.trim(),
          yil: props.sertifikaYili.trim(),
          link: props.sertifikaLinki.trim(),
        };

        if (props.editSertifikaIndex !== null) {
          const yeniListe = [...props.sertifikalar];

          yeniListe[props.editSertifikaIndex] = yeniSertifika;

          props.setSertifikalar(yeniListe);
          props.setEditSertifikaIndex(null);
        } else {
          props.setSertifikalar([
            ...props.sertifikalar,
            yeniSertifika,
          ]);
        }

        props.setSertifikaAdi("");
        props.setSertifikaKurumu("");
        props.setSertifikaYili("");
        props.setSertifikaLinki("");
      }}
    >
      {props.editSertifikaIndex === null
        ? "Sertifika Ekle"
        : "Sertifikayı Güncelle"}
    </button>
  </>
)}

<hr />

<h2
  onClick={() => setShowLanguages(!showLanguages)}
  style={{ cursor: "pointer" }}
>
  {showLanguages ? "▼" : "▶"} 🌐 Dil Becerileri
</h2>

{showLanguages && (
  <>
    <label>Dil</label>

    <input
      type="text"
      placeholder="Örn: İngilizce"
      value={props.dilAdi}
      onChange={(e) => props.setDilAdi(e.target.value)}
    />

    <label>Seviye</label>

    <select
      value={props.dilSeviyesi}
      onChange={(e) => props.setDilSeviyesi(e.target.value)}
    >
      <option value="">Seviye seçin</option>
      <option value="Başlangıç">Başlangıç</option>
      <option value="Temel">Temel</option>
      <option value="Orta">Orta</option>
      <option value="İleri">İleri</option>
      <option value="Ana Dil">Ana Dil</option>
    </select>

    <button
      type="button"
      onClick={() => {
        if (!props.dilAdi.trim() || !props.dilSeviyesi) {
          return;
        }

        const yeniDil = {
          ad: props.dilAdi.trim(),
          seviye: props.dilSeviyesi,
        };

        if (props.editDilIndex !== null) {
          const yeniListe = [...props.diller];

          yeniListe[props.editDilIndex] = yeniDil;

          props.setDiller(yeniListe);
          props.setEditDilIndex(null);
        } else {
          props.setDiller([
            ...props.diller,
            yeniDil,
          ]);
        }

        props.setDilAdi("");
        props.setDilSeviyesi("");
      }}
    >
      {props.editDilIndex === null
        ? "Dil Ekle"
        : "Dili Güncelle"}
    </button>
  </>
)}

              <div className="template-selector">
        <h3>CV Şablonu</h3>

        <div className="template-options">
          <button
            type="button"
            className="template-button"
            onClick={() => props.setTemplate("modern")}
          >
            Modern
          </button>

          <button
            type="button"
            className="template-button"
            onClick={() => props.setTemplate("classic")}
          >
            Klasik
          </button>

          <button
            type="button"
            className="template-button"
            onClick={() => props.setTemplate("minimal")}
          >
            Minimal
          </button>
        </div>
      </div>

           <div className="color-selector">
  <h3>CV Rengi</h3>

  <div className="color-options">

    <button
      type="button"
      className={`color-button ${props.themeColor === "#2563eb" ? "selected" : ""}`}
      style={{ backgroundColor: "#2563eb" }}
      onClick={() => props.setThemeColor("#2563eb")}
      aria-label="Mavi"
      title="Mavi"
    >
      {props.themeColor === "#2563eb" && "✓"}
    </button>

    <button
      type="button"
      className={`color-button ${props.themeColor === "#7c3aed" ? "selected" : ""}`}
      style={{ backgroundColor: "#7c3aed" }}
      onClick={() => props.setThemeColor("#7c3aed")}
      aria-label="Mor"
      title="Mor"
    >
      {props.themeColor === "#7c3aed" && "✓"}
    </button>

    <button
      type="button"
      className={`color-button ${props.themeColor === "#16a34a" ? "selected" : ""}`}
      style={{ backgroundColor: "#16a34a" }}
      onClick={() => props.setThemeColor("#16a34a")}
      aria-label="Yeşil"
      title="Yeşil"
    >
      {props.themeColor === "#16a34a" && "✓"}
    </button>

    <button
      type="button"
      className={`color-button ${props.themeColor === "#dc2626" ? "selected" : ""}`}
      style={{ backgroundColor: "#dc2626" }}
      onClick={() => props.setThemeColor("#dc2626")}
      aria-label="Kırmızı"
      title="Kırmızı"
    >
      {props.themeColor === "#dc2626" && "✓"}
    </button>

    <button
      type="button"
      className={`color-button ${props.themeColor === "#111827" ? "selected" : ""}`}
      style={{ backgroundColor: "#111827" }}
      onClick={() => props.setThemeColor("#111827")}
      aria-label="Siyah"
      title="Siyah"
    >
      {props.themeColor === "#111827" && "✓"}
    </button>

    <button
      type="button"
      className={`color-button ${props.themeColor === "#eab308" ? "selected" : ""}`}
      style={{ backgroundColor: "#eab308" }}
      onClick={() => props.setThemeColor("#eab308")}
      aria-label="Sarı"
      title="Sarı"
    >
      {props.themeColor === "#eab308" && "✓"}
    </button>

    <button
      type="button"
      className={`color-button ${props.themeColor === "#ea580c" ? "selected" : ""}`}
      style={{ backgroundColor: "#ea580c" }}
      onClick={() => props.setThemeColor("#ea580c")}
      aria-label="Turuncu"
      title="Turuncu"
    >
      {props.themeColor === "#ea580c" && "✓"}
    </button>

    <button
      type="button"
      className={`color-button ${props.themeColor === "#ec4899" ? "selected" : ""}`}
      style={{ backgroundColor: "#ec4899" }}
      onClick={() => props.setThemeColor("#ec4899")}
      aria-label="Pembe"
      title="Pembe"
    >
      {props.themeColor === "#ec4899" && "✓"}
    </button>

    <button
      type="button"
      className={`color-button ${props.themeColor === "#92400e" ? "selected" : ""}`}
      style={{ backgroundColor: "#92400e" }}
      onClick={() => props.setThemeColor("#92400e")}
      aria-label="Kahverengi"
      title="Kahverengi"
    >
      {props.themeColor === "#92400e" && "✓"}
    </button>
     
     <button
     type="button"
     className="color-button"
     title="Petrol Mavisi"
     aria-label="Petrol Mavisi"
     onClick={() => props.setThemeColor("#0f766e")}
     >
     </button>

     <button
     type="button"
     className="color-button"
     title="Su Yeşili"
     aria-label="Su Yeşili"
     onClick={() => props.setThemeColor("#14b8a6")}
     >
     </button>

     <button
     type="button"
     className="color-button"
     title="Gri"
     aria-label="Gri"
     onClick={() => props.setThemeColor("#64748b")}
     >
     </button>

     <button
     type="button"
     className="color-button"
     title="Lacivert"
     aria-label="Lacivert"
     onClick={() => props.setThemeColor("#1e40af")}
     >
     </button>

  </div>
</div>

       <button onClick={() => props.onGeneratePDF()}>
       CV Oluştur
       </button>

       </div>
  );
}

export default CvForm;