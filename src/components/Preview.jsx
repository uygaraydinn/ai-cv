function Preview(props) {
  return (
    <div>
      <h2>CV Önizleme</h2>

      <h1>{props.adSoyad || "Ad Soyad"}</h1>

      <hr />

      <h2>{props.meslek || "Meslek"}</h2>

      <hr />

      <p><strong>📧 E-posta:</strong> {props.email || "-"}</p>

      <p><strong>📞 Telefon:</strong> {props.telefon || "-"}</p>

      <p><strong>📍 Şehir:</strong> {props.sehir || "-"}</p>

      <hr />

       <h2>Hakkımda</h2>
       <p>
       {props.hakkimda || "Henüz hakkımda bilgisi girilmedi."}
       </p>

       <hr />

       <h2>Eğitim</h2>

       {props.egitimler.map((egitim, index) => (
       <div key={index}>
       <p>{egitim.okul}</p>
       <p>{egitim.bolum}</p>
       <p>
       {egitim.baslangic} - {egitim.bitis}
       </p>
       <button
        onClick={() => {
        props.editEducation(index);
        }}
        >
        Düzenle
       </button>

       <button
       onClick={() => props.deleteEducation(index)}
       >
       Sil
       </button>
       <hr />
       </div>
       ))}

       <hr />

       <h2>Deneyim</h2>

       {props.deneyimler.map((deneyim, index) => (
       <div key={index}>
       <p><strong>{deneyim.sirket}</strong></p>

       <p>{deneyim.pozisyon}</p>

       <p>
       {deneyim.baslangic} - {deneyim.bitis}
       </p>

       <p>{deneyim.aciklama}</p>

        <button
        onClick={() => props.deleteDeneyim(index)}
        >
        Sil
       </button>

       <hr />
       </div>
       ))}

       <hr />

       <h2>Yetenekler</h2>
       {props.skills.map((skill, index) => (
       <div
       key={index}
       style={{
       display: "flex",
       justifyContent: "space-between",
       alignItems: "center",
       }}
       >
       <p>✔ {skill}</p>
       <button onClick={() => props.deleteSkill(index)}>
       ❌
       </button>
       </div>
       ))}

       </div>
       );
       }

export default Preview;