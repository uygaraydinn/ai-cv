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
       <p>{props.okul}</p>
       <p>{props.bolum}</p>
       <p>
       {props.baslangicYili} - {props.bitisYili}
       </p>

       <hr />

       <h2>Deneyim</h2>

       <p><strong>{props.sirket}</strong></p>

       <p>{props.pozisyon}</p>
       <p>
       {props.deneyimBaslangic} - {props.deneyimBitis}
       </p>

       <p>{props.deneyimAciklama}</p>

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