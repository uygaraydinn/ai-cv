import { useState } from "react";

function CvForm(props) {
  
  const [skillInput, setSkillInput] = useState("");

  const [showPersonal, setShowPersonal] = useState(false);
  const [showEducation, setShowEducation] = useState(false);
  const [showExperience, setShowExperience] = useState(false);
  const [showSkills, setShowSkills] = useState(false);

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

       <button onClick={() => props.onGeneratePDF()}>
       CV Oluştur
       </button>

       </div>
  );
}

export default CvForm;