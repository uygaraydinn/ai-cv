import { useState, useEffect } from "react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import CvForm from "./CvForm";
import Preview from "./Preview";

function CvSection() {
  
  const [adSoyad, setAdSoyad] = useState(() => {
  const kayitliBilgiler = localStorage.getItem("cvKisiselBilgiler");

  if (kayitliBilgiler) {
  const bilgiler = JSON.parse(kayitliBilgiler);
  return bilgiler.adSoyad || "";
  }

  return "";
  });

  const [email, setEmail] = useState(() => {
  const kayitliBilgiler = localStorage.getItem("cvKisiselBilgiler");

  if (kayitliBilgiler) {
  const bilgiler = JSON.parse(kayitliBilgiler);
  return bilgiler.email || "";
  }

  return "";
  });

  const [telefon, setTelefon] = useState(() => {
  const kayitliBilgiler = localStorage.getItem("cvKisiselBilgiler");

  if (kayitliBilgiler) {
  const bilgiler = JSON.parse(kayitliBilgiler);
  return bilgiler.telefon || "";
  }

  return "";
  });

  const [sehir, setSehir] = useState(() => {
  const kayitliBilgiler = localStorage.getItem("cvKisiselBilgiler");

  if (kayitliBilgiler) {
  const bilgiler = JSON.parse(kayitliBilgiler);
  return bilgiler.sehir || "";
  }

  return "";
  });

  const [meslek, setMeslek] = useState(() => {
  const kayitliBilgiler = localStorage.getItem("cvKisiselBilgiler");

  if (kayitliBilgiler) {
  const bilgiler = JSON.parse(kayitliBilgiler);
  return bilgiler.meslek || "";
  }

  return "";
  });

  const [hakkimda, setHakkimda] = useState(() => {
  const kayitliBilgiler = localStorage.getItem("cvKisiselBilgiler");

  if (kayitliBilgiler) {
  const bilgiler = JSON.parse(kayitliBilgiler);
  return bilgiler.hakkimda || "";
  }

  return "";
  });

  const [okul, setOkul] = useState("");
  const [bolum, setBolum] = useState("");
  const [baslangicYili, setBaslangicYili] = useState("");
  const [bitisYili, setBitisYili] = useState("");

  const [egitimler, setEgitimler] = useState(() => {
  const kayitliEgitimler = localStorage.getItem("cvEgitimler");

  if (kayitliEgitimler) {
  return JSON.parse(kayitliEgitimler);
  }

  return [];
  });

  const [editEducationIndex, setEditEducationIndex] = useState(null);
  const [editDeneyimIndex, setEditDeneyimIndex] = useState(null);

  const [deneyimler, setDeneyimler] = useState(() => {
  const kayitliDeneyimler = localStorage.getItem("cvDeneyimler");

  if (kayitliDeneyimler) {
  return JSON.parse(kayitliDeneyimler);
  }

  return [];
  });

  const [sirket, setSirket] = useState("");
  const [pozisyon, setPozisyon] = useState("");
  const [deneyimBaslangic, setDeneyimBaslangic] = useState("");
  const [deneyimBitis, setDeneyimBitis] = useState("");
  const [deneyimAciklama, setDeneyimAciklama] = useState("");

  const [skills, setSkills] = useState(() => {
  const kayitliSkills = localStorage.getItem("cvSkills");

  if (kayitliSkills) {
  return JSON.parse(kayitliSkills);
  }

  return [];
  });

  const [profilFoto, setProfilFoto] = useState(() => {
  const kayitliProfilFoto = localStorage.getItem("cvProfilFoto");

  return kayitliProfilFoto || "";
  });

  const isLoaded = true;

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
      isLoaded,
      adSoyad,
      email,
      telefon,
      sehir,
      meslek,
      hakkimda,
      ]);

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

   const generatePDF = async () => {
  const originalElement = document.querySelector(".right-panel");

  const pdfElement = originalElement.cloneNode(true);

  pdfElement.style.backgroundColor = "#ffffff";
  pdfElement.style.color = "#0f172a";
  pdfElement.style.boxShadow = "none";
  pdfElement.style.width = "794px";
  pdfElement.style.margin = "0";
  pdfElement.style.padding = "20px";
  pdfElement.style.borderRadius = "0";
  pdfElement.style.boxSizing = "border-box";
  

  const buttons = pdfElement.querySelectorAll("button");

  buttons.forEach((button) => {
    button.style.display = "none";
  });

  const previewTitle = pdfElement.querySelector(".preview-title");

  if (previewTitle) {
    previewTitle.style.display = "none";
  }

  const container = document.createElement("div");

  container.style.position = "fixed";
  container.style.left = "-10000px";
  container.style.top = "0";
  container.style.width = "794px";
  container.style.backgroundColor = "#ffffff";
  

  container.appendChild(pdfElement);
  document.body.appendChild(container);

  try {
    const canvas = await html2canvas(pdfElement, {
      scale: 2,
      useCORS: true,
      backgroundColor: "#ffffff",
    });

    const imageData = canvas.toDataURL("image/jpeg", 0.98);

    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
    });

    const pageWidth = 210;
    const pageHeight = 297;

    const margin = 5;

    const imageWidth = pageWidth - margin * 2;
    const imageHeight = pageHeight - margin * 2;

    const x = margin;
    const y = margin;

    pdf.addImage(
    imageData,
    "JPEG",
    x,
    y,
    imageWidth,
    imageHeight
    );

    pdf.save(`${adSoyad || "CV"}_CV.pdf`);
  } finally {
    document.body.removeChild(container);
  }
};

  return (
  <div className="cv-section">

    <div className="left-panel">
      <CvForm
        adSoyad={adSoyad}
        onGeneratePDF={generatePDF}
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