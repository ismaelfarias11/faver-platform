export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <p className="eyebrow">Hub Corporativo</p>
          <h1 className="title">faVer Tecnologías</h1>
          <p className="subtitle">
            Ecosistema de soluciones creativas y tecnológicas: impresión 3D, personalización y
            desarrollo. Un solo lugar para acceder a cada área.
          </p>

          <div className="actions">
            <a className="btn btn-accent" href="#areas">Ver áreas</a>
            <a className="btn btn-outline" href="http://localhost:3001">Ir a Kronos 3D</a>
          </div>

          <div className="heroPanel" />
        </div>
      </section>

      <section id="areas" className="section">
        <div className="container">
          <div className="sectionHead">
            <h2 className="h2">Áreas</h2>
            <span className="chip">Multi-área</span>
          </div>

          <div className="grid">
            <a className="card" href="http://localhost:3001">
              <div className="cardTop">
                <h3 className="h3" style={{ color: "var(--color-kronos)" }}>Kronos 3D</h3>
                <span className="tag" style={{ borderColor: "rgba(249,115,22,.35)" }}>
                  Impresión / Modelado
                </span>
              </div>
              <p className="cardText">
                Diseño e impresión 3D personalizada: prototipos, repuestos y piezas a medida.
              </p>
              <span className="cardLink">Visitar →</span>
            </a>

            <div className="card cardMuted">
              <div className="cardTop">
                <h3 className="h3">Próximamente</h3>
                <span className="tag">Nuevas áreas</span>
              </div>
              <p className="cardText">
                Agregaremos más servicios dentro del ecosistema faVer.
              </p>
              <span className="cardLink">En construcción</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
