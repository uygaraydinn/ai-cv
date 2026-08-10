import { useState, useEffect } from "react";
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
  const [editEducationIndex, setEditEducationIndex] = useState(null);
  const [editDeneyimIndex, setEditDeneyimIndex] = useState(null);
  const [deneyimler, setDeneyimler] = useState([]);
  const [sirket, setSirket] = useState("");
  const [pozisyon, setPozisyon] = useState("");
  const [deneyimBaslangic, setDeneyimBaslangic] = useState("");
  const [deneyimBitis, setDeneyimBitis] = useState("");
  const [deneyimAciklama, setDeneyimAciklama] = useState("");
  const [skills, setSkills] = useState([]);
  const [profilFoto, setProfilFoto] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
     useEffect(() => {
      
      if (!isLoaded) {
      return;
      }

     localStorage.setItem(
     "cvKisiselBilgiler",
     JSON.stringify({
      adSoyad,
      email,
      telefon,
      sehir,
      meslek,
      hakkimda,
     })
     );
     }, [
      adSoyad,
      email,
      telefon,
      sehir,
      meslek,
      hakkimda,
      ]);

      useEffect(() => {
      const kayitliBilgiler = localStorage.getItem("cvKisiselBilgiler");

      if (kayitliBilgiler) {
      const bilgiler = JSON.parse(kayitliBilgiler);

      setAdSoyad(bilgiler.adSoyad || "");
      setEmail(bilgiler.email || "");
      setTelefon(bilgiler.telefon || "");
      setSehir(bilgiler.sehir || "");
      setMeslek(bilgiler.meslek || "");
      setHakkimda(bilgiler.hakkimda || "");
      }
     setIsLoaded(true);
     }, []);

     useEffect(() => {
     if (!isLoaded) {
     return;
     }

     localStorage.setItem(
     "cvEgitimler",
     JSON.stringify(egitimler)
     );
     }, [isLoaded, egitimler]);


     useEffect(() => {
     if (!isLoaded) {
     return;
     }

     localStorage.setItem(
     "cvDeneyimler",
     JSON.stringify(deneyimler)
     );
     }, [isLoaded, deneyimler]);

     useEffect(() => {
     if (!isLoaded) {
     return;
     }

     localStorage.setItem(
     "cvSkills",
     JSON.stringify(skills)
     );
     }, [isLoaded, skills]);

     useEffect(() => {
     if (!isLoaded) {
     return;
     }

     localStorage.setItem(
     "cvProfilFoto",
     profilFoto
     );
     }, [isLoaded, profilFoto]);

     useEffect(() => {
     const kayitliProfilFoto = localStorage.getItem("cvProfilFoto");

     if (kayitliProfilFoto) {
     setProfilFoto(kayitliProfilFoto);
     }
     }, []);

     useEffect(() => {
     const kayitliSkills = localStorage.getItem("cvSkills");

     if (kayitliSkills) {
     setSkills(JSON.parse(kayitliSkills));
     }
     }, []);

     useEffect(() => {
     const kayitliDeneyimler = localStorage.getItem("cvDeneyimler");

     if (kayitliDeneyimler) {
     setDeneyimler(JSON.parse(kayitliDeneyimler));
     }
     }, []);

     useEffect(() => {
     const kayitliEgitimler = localStorage.getItem("cvEgitimler");

     if (kayitliEgitimler) {
     setEgitimler(JSON.parse(kayitliEgitimler));
     }
     }, []);



     const deleteSkill = (indexToDelete) => {
     setSkills(
     skills.filter((skill, index) => index !== indexToDelete)
     );
     };

     const deleteEducation = (indexToDelete) => {
     setEgitimler(
     egitimler.filter((egitim, index) => index !== indexToDelete)
     );
     };

    const editEducation = (index) => {
    const egitim = egitimler[index];

    setOkul(egitim.okul);
    setBolum(egitim.bolum);
    setBaslangicYili(egitim.baslangic);
    setBitisYili(egitim.bitis);

    setEditEducationIndex(index);
   };

   const editDeneyim = (index) => {
   const deneyim = deneyimler[index];

   setSirket(deneyim.sirket);
   setPozisyon(deneyim.pozisyon);
   setDeneyimBaslangic(deneyim.baslangic);
   setDeneyimBitis(deneyim.bitis);
   setDeneyimAciklama(deneyim.aciklama);

   setEditDeneyimIndex(index);
  };

    const deleteDeneyim = (indexToDelete) => {
    setDeneyimler(
    deneyimler.filter((deneyim, index) => index !== indexToDelete)
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
        editEducationIndex={editEducationIndex}
        setEditEducationIndex={setEditEducationIndex}
        editEducation={editEducation}
        editDeneyimIndex={editDeneyimIndex}
        setEditDeneyimIndex={setEditDeneyimIndex}
        skills={skills}
        setSkills={setSkills}
        profilFoto={profilFoto}
        setProfilFoto={setProfilFoto}
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
        deleteEducation={deleteEducation}
        editEducation={editEducation}
        deleteDeneyim={deleteDeneyim}
        editDeneyim={editDeneyim}
        profilFoto={profilFoto}

      />
    </div>

  </div>
);
}

export default CvSection;