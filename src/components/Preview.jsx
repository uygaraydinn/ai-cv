function Preview(props) {
    const template = props.template || "modern";
    const themeColor = props.themeColor || "#2563eb";
  return (
    <div
     className={`cv-template ${template}`}
     style={{
     "--theme-color": themeColor,
     }}
     >
      <div className="preview-title">
        CV Önizleme
      </div>

      {/* CV HEADER */}
      <div className="cv-header">

        {props.profilFoto && (
          <img
            src={props.profilFoto}
            alt="Profil"
            className="cv-profile-photo"
          />
        )}

        <div className="cv-header-info">

          <h1 className="cv-name">
            {props.adSoyad || "Ad Soyad"}
          </h1>

          <h2 className="cv-title">
            {props.meslek || "Meslek"}
          </h2>

          <div className="contact-info">

            <p>
              📧 {props.email || "-"}
            </p>

            <p>
              📞 {props.telefon || "-"}
            </p>

            <p>
              📍 {props.sehir || "-"}
            </p>

          </div>

        </div>

      </div>

      <hr />

      {/* HAKKIMDA */}
      <h2>Hakkımda</h2>

      <p>
        {props.hakkimda || "Henüz hakkımda bilgisi girilmedi."}
      </p>

      <hr />

      {/* EĞİTİM */}
      <h2>Eğitim</h2>

      {props.egitimler.map((egitim, index) => (
        <div
          key={index}
          className="education-item"
        >
          <p className="education-school">
            {egitim.okul}
          </p>

          <p className="education-department">
            {egitim.bolum}
          </p>

          <p className="education-date">
            {egitim.baslangic} - {egitim.bitis}
          </p>

          <button
            className="cv-action-button"
            onClick={() => props.editEducation(index)}
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

      {/* DENEYİM */}
      <h2>Deneyim</h2>

      {props.deneyimler.map((deneyim, index) => (
        <div
          key={index}
          className="experience-item"
        >
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

      {/* YETENEKLER */}
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

<hr />

{/* SERTİFİKALAR */}
<h2>Sertifikalar</h2>

{props.sertifikalar.map((sertifika, index) => (
  <div
    key={index}
    className="certificate-item"
  >
    <p className="certificate-name">
      {sertifika.ad}
    </p>

    <p className="certificate-institution">
      {sertifika.kurum}
    </p>

    <p className="certificate-date">
      {sertifika.yil}
    </p>

    {sertifika.link && (
      <a
        href={sertifika.link}
        target="_blank"
        rel="noopener noreferrer"
        className="certificate-link"
      >
        Sertifikayı Görüntüle
      </a>
    )}

    <div>
      <button
        className="cv-action-button"
        onClick={() => props.editSertifika(index)}
      >
        Düzenle
      </button>

      <button
        className="cv-action-button"
        onClick={() => props.deleteSertifika(index)}
      >
        Sil
      </button>
    </div>
  </div>
))}

<hr />

{/* DİL BECERİLERİ */}
<h2>Dil Becerileri</h2>

{props.diller.map((dil, index) => (
  <div
    key={index}
    className="language-item"
  >
    <p className="language-name">
      🌐 {dil.ad}
    </p>

    <p className="language-level">
      {dil.seviye}
    </p>

    <button
      className="cv-action-button"
      onClick={() => props.editDil(index)}
    >
      Düzenle
    </button>

    <button
      className="cv-action-button"
      onClick={() => props.deleteDil(index)}
    >
      Sil
    </button>
  </div>
))}

    </div>
  );
}

export default Preview;