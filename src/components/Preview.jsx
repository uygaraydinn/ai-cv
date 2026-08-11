function Preview(props) {
  return (
    <div>
      <div className="preview-title">
      CV Önizleme
      </div>

      {props.profilFoto && (
      <img
      src={props.profilFoto}
      alt="Profil"
      style={{
      width: "140px",
      height: "140px",
      borderRadius: "50%",
      objectFit: "cover",
      display: "block",
      margin: "0 auto 20px",
      }}
      />
      )}

      <h1 className="cv-name">
      {props.adSoyad || "Ad Soyad"}
      </h1>

      <hr />

      <h2 className="cv-title">
      {props.meslek || "Meslek"}
      </h2>

      <hr />

      <div className="contact-info">

      <p><strong>📧 E-posta:</strong> {props.email || "-"}</p>

      <p><strong>📞 Telefon:</strong> {props.telefon || "-"}</p>

      <p><strong>📍 Şehir:</strong> {props.sehir || "-"}</p>

      </div>

      <hr />

       <h2>Hakkımda</h2>
       <p>
       {props.hakkimda || "Henüz hakkımda bilgisi girilmedi."}
       </p>

       <hr />

       <h2>Eğitim</h2>

       {props.egitimler.map((egitim, index) => (
       <div key={index} className="education-item">
       <p className="education-school">{egitim.okul}</p>
       <p className="education-department">
       {egitim.bolum}
       </p>
       <p className="education-date">
       {egitim.baslangic} - {egitim.bitis}
       </p>

       <button
        className="cv-action-button"
        onClick={() => {
        props.editEducation(index);
        }}
        >
        Düzenle
       </button>

       <button
       className="cv-action-button"
       onClick={() => props.deleteEducation(index)}
       >
       Sil
       </button>
       </div>
       ))}

       <hr />

       <h2>Deneyim</h2>

       {props.deneyimler.map((deneyim, index) => (
       <div key={index} className="experience-item">
       <p className="experience-company">
       {deneyim.sirket}
       </p>

       <p className="experience-position">
       {deneyim.pozisyon}
       </p>

       <p className="experience-date">
       {deneyim.baslangic} - {deneyim.bitis}
       </p>

       <p className="experience-description">
       {deneyim.aciklama}
       </p>

        <button
        className="cv-action-button"
        onClick={() => props.editDeneyim(index)}
        >
        Düzenle
        </button>

        <button
        className="cv-action-button"
        onClick={() => props.deleteDeneyim(index)}
        >
        Sil
       </button>
       </div>
       ))}

       <hr />

       <h2>Yetenekler</h2>
       {props.skills.map((skill, index) => (

       <div
       key={index}
       className="skill-item"
       >
       
       <p className="skill-badge">
       ✔ {skill}
       <button
       className="skill-delete-button"
       onClick={() => props.deleteSkill(index)}
       >
       ×
       </button>
       </p>


       </div>
       ))}

       </div>
       );
       }

export default Preview;