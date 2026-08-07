import { useState } from "react";
import CvForm from "./CvForm";
import Preview from "./Preview";

function CvSection() {
  const [adSoyad, setAdSoyad] = useState("");
  const [email, setEmail] = useState("");
  const [telefon, setTelefon] = useState("");
  const [sehir, setSehir] = useState("");
  const [meslek, setMeslek] = useState("");
  const [hakkimda, setHakkimda] = useState("");
  const [okul, setOkul] = useState("");
  const [bolum, setBolum] = useState("");
  const [baslangicYili, setBaslangicYili] = useState("");
  const [bitisYili, setBitisYili] = useState("");
  const [egitimler, setEgitimler] = useState([]);
  const [deneyimler, setDeneyimler] = useState([]);
  const [sirket, setSirket] = useState("");
  const [pozisyon, setPozisyon] = useState("");
  const [deneyimBaslangic, setDeneyimBaslangic] = useState("");
  const [deneyimBitis, setDeneyimBitis] = useState("");
  const [deneyimAciklama, setDeneyimAciklama] = useState("");
  const [skills, setSkills] = useState([]);
  const deleteSkill = (indexToDelete) => {
    setSkills(
    skills.filter((skill, index) => index !== indexToDelete)
    );
    };

  return (
  <div className="cv-section">

    <div className="left-panel">
      <CvForm
        adSoyad={adSoyad}
        setAdSoyad={setAdSoyad}
        email={email}
        setEmail={setEmail}
        telefon={telefon}
        setTelefon={setTelefon}
        sehir={sehir}
        setSehir={setSehir}
        meslek={meslek}
        setMeslek={setMeslek}
        hakkimda={hakkimda}
        setHakkimda={setHakkimda}
        okul={okul}
        setOkul={setOkul}
        bolum={bolum}
        setBolum={setBolum}
        baslangicYili={baslangicYili}
        setBaslangicYili={setBaslangicYili}
        bitisYili={bitisYili}
        setBitisYili={setBitisYili}
        sirket={sirket}
        setSirket={setSirket}
        pozisyon={pozisyon}
        setPozisyon={setPozisyon}
        deneyimBaslangic={deneyimBaslangic}
        setDeneyimBaslangic={setDeneyimBaslangic}
        deneyimBitis={deneyimBitis}
        setDeneyimBitis={setDeneyimBitis}
        deneyimAciklama={deneyimAciklama}
        setDeneyimAciklama={setDeneyimAciklama}
        deneyimler={deneyimler}
        setDeneyimler={setDeneyimler}
        egitimler={egitimler}
        setEgitimler={setEgitimler}
        skills={skills}
        setSkills={setSkills}
      />
    </div>

    <div className="right-panel">
      <Preview
        adSoyad={adSoyad}
        email={email}
        telefon={telefon}
        sehir={sehir}
        meslek={meslek}
        hakkimda={hakkimda}
        okul={okul}
        bolum={bolum}
        baslangicYili={baslangicYili}
        bitisYili={bitisYili}
        sirket={sirket}
        pozisyon={pozisyon}
        deneyimBaslangic={deneyimBaslangic}
        deneyimBitis={deneyimBitis}
        deneyimAciklama={deneyimAciklama}
        deneyimler={deneyimler}
        egitimler={egitimler}
        skills={skills}
        deleteSkill={deleteSkill}

      />
    </div>

  </div>
);
}

export default CvSection;