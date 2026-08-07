import { useState } from "react";

function CvForm(props) {
  
  const [skillInput, setSkillInput] = useState("");

  const [showPersonal, setShowPersonal] = useState(true);
  const [showEducation, setShowEducation] = useState(false);
  
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
        value={props.adSoyad + ""}
        onChange={(e) => {console.log(e.target.value);
        props.setAdSoyad(e.target.value);
}}
      />
      <label>E-Posta</label>
      <input
        type="email"
        placeholder="E-posta"
        value={props.email + ""}
        onChange={(e) => props.setEmail(e.target.value)}
      />
      <label>Telefon</label>
      <input
        type="tel"
        placeholder="Telefon"
        value={props.telefon + ""}
        onChange={(e) => props.setTelefon(e.target.value)}
      />
      <label>Şehir</label>
      <input
        type="text"
        placeholder="Şehir"
        value={props.sehir + ""}
        onChange={(e) => props.setSehir(e.target.value)}
      />
      <label>Meslek</label>
      <input
        type="text"
        placeholder="Meslek"
        value={props.meslek + ""}
        onChange={(e) => props.setMeslek(e.target.value)}
      />
      <label>Hakkımda</label>
       <textarea
       placeholder="Kendinizden kısaca bahsedin..."
       value={props.hakkimda}
       onChange={(e) => props.setHakkimda(e.target.value)}
       ></textarea>

       <hr />
        <h2
        onClick={() => setShowEducation(!showEducation)}
        style={{ cursor: "pointer" }}
        >
        {showEducation ? "▼" : "▶"} 🎓 Eğitim
        </h2>

      <label>Okul</label>
      <input
        type="text"
        placeholder="Okul"
        value={props.okul + ""}
        onChange={(e) => props.setOkul(e.target.value)}
      />

      <label>Bölüm</label>
      <input
        type="text"
        placeholder="Bölüm"
        value={props.bolum + ""}
        onChange={(e) => props.setBolum(e.target.value)}
      />
      <label>Başlangıç Yılı</label>
      <input
        type="number"
        placeholder="Başlangıç Yılı"
        value={props.baslangicYili + ""}
        onChange={(e) => props.setBaslangicYili(e.target.value)}
      />
      <label>Bitiş Yılı</label>
      <input
        type="number"
        placeholder="Bitiş Yılı"
        value={props.bitisYili + ""}
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
        console.log(yeniEgitim);
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
        Eğitim Ekle
        </button>

       <hr />
       <h2>💼 Deneyim</h2>

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
        console.log(yeniDeneyim);
        props.setDeneyimler([
        ...props.deneyimler,
        yeniDeneyim,
       ]);
        }}
        >
        Deneyim Ekle
        </button>
        </>
        )}
        <hr />

        <hr />
        <h2>🛠️ Yetenekler</h2>

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

      <button>CV Oluştur</button>
    </div>
  );
}

export default CvForm;