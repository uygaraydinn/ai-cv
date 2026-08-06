function Preview(props) {
  return (
    <div>
      <h2>CV Önizleme</h2>

      <h1>{props.adSoyad || "Ad Soyad"}</h1>

      <h3>{props.meslek || "Meslek"}</h3>

      <hr />

      <p>📧 {props.email || "Henüz e-posta girilmedi."}</p>

      <p>📞 {props.telefon || "Henüz telefon girilmedi."}</p>

      <p>📍 {props.sehir || "Henüz şehir girilmedi."}</p>

      <hr />

       <h3>Hakkımda</h3>
       <p>
       {props.hakkimda || "Henüz hakkımda bilgisi girilmedi."}
       </p>

       <hr />

       <h3>Eğitim</h3>
       <p>{props.okul}</p>
       <p>{props.bolum}</p>
       <p>
       {props.baslangicYili} - {props.bitisYili}
       </p>

       <hr />

       <h3>Deneyim</h3>

       <p><strong>{props.sirket}</strong></p>

       <p>{props.pozisyon}</p>
       <p>
       {props.deneyimBaslangic} - {props.deneyimBitis}
       </p>

       <p>{props.deneyimAciklama}</p>

       <hr />

       <h3>Yetenekler</h3>
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