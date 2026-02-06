import Link from "next/link";
import "./home.css";
import PilotForm from "./_components/PilotForm";



export default function HomePage() {
  return (
    <main>
      <section className="heroWrap">
        <div className="container heroGrid">
          {/* TEXTO */}
          <div>
            <span className="badge">DEMO • QR + Cocina • Tiempo real</span>

            <h1 className="h1">Tu nuevo mesero digital por QR</h1>

            <p className="lead">
              Recibe pedidos desde la mesa directo a cocina, sin apps ni hardware extra.
              Una experiencia moderna para tus clientes y una operación más eficiente.
            </p>

            <ul className="bullets">
              <li className="bullet">
                <span className="dot" />
                <div>
                  <strong>Menos errores</strong>
                  <div className="kpi">Pedidos claros y centralizados por mesa</div>
                </div>
              </li>

              <li className="bullet">
                <span className="dot" />
                <div>
                  <strong>Más rotación</strong>
                  <div className="kpi">El cliente pide más rápido, cocina responde mejor</div>
                </div>
              </li>

              <li className="bullet">
                <span className="dot" />
                <div>
                  <strong>Listo para escalar</strong>
                  <div className="kpi">Integración futura con IA mesero, carta real y pagos</div>
                </div>
              </li>
            </ul>

            <div className="actions">
              <Link href="/demo/12" className="btnPrimaryLg">
                Probar demo (Mesa 12)
              </Link>

              <Link href="/panel" className="btnOutlineLg">
                Ver panel cocina
              </Link>

              <a href="#piloto" className="btnSecondaryLg">
                Solicitar piloto
              </a>
            </div>

            <div className="note">
              Demo local: simula un restaurante. Luego lo conectamos a tu carta real y QR por mesa.
            </div>
          </div>

          {/* PREVIEW */}
          <div className="preview">
            <div className="previewTop">
              <div className="previewTitle">Vista previa</div>
              <span className="pill">Waiter AI</span>
            </div>

            <div className="previewGrid">
              <div className="cardMini">
                <div className="row">
                  <strong>Mesa 12</strong>
                  <span className="kpi">QR escaneado</span>
                </div>
                <ul className="list">
                  <li>1× Hamburguesa clásica</li>
                  <li>1× Papas fritas</li>
                  <li>1× Bebida</li>
                </ul>
                <div className="row" style={{ marginTop: 10 }}>
                  <strong>Total</strong>
                  <strong>$10.470</strong>
                </div>
              </div>

              <div className="cardMini">
                <div className="row">
                  <strong>Cocina</strong>
                  <span className="kpi">Estados</span>
                </div>
                <div style={{ display: "flex", gap: 10, marginTop: 10, flexWrap: "wrap" }}>
                  <span className="badge">NEW</span>
                  <span className="pill">IN_PROGRESS</span>
                  <span
                    style={{
                      fontSize: 12,
                      fontWeight: 900,
                      padding: "6px 10px",
                      borderRadius: 999,
                      border: "1px solid rgba(34,197,94,0.35)",
                      background: "rgba(34,197,94,0.10)",
                      color: "#16a34a",
                    }}
                  >
                    DONE
                  </span>
                </div>
                <div className="note" style={{ marginTop: 10 }}>
                  El equipo acepta pedidos y marca cuando están listos.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
            {/* SECCIÓN 2: CÓMO FUNCIONA */}
      <section className="section">
        <div className="container">
          <h2 className="sectionTitle">Cómo funciona</h2>
          <p className="sectionLead">
            Un flujo simple para el cliente, y control total para el restaurante. 
            En minutos puedes tener un piloto funcionando.
          </p>

          <div className="stepsGrid">
            <div className="stepCard">
              <div className="stepTop">
                <div className="stepNum">1</div>
                <div className="stepIcon">QR</div>
              </div>
              <h3 className="stepTitle">El cliente escanea el QR</h3>
              <p className="stepDesc">
                Desde la mesa abre el menú y realiza el pedido en su celular, sin descargar nada.
              </p>
              <div className="stepFoot">Sin apps • Sin registro • Experiencia rápida</div>
            </div>

            <div className="stepCard">
              <div className="stepTop">
                <div className="stepNum">2</div>
                <div className="stepIcon">🧾</div>
              </div>
              <h3 className="stepTitle">Envía el pedido con un clic</h3>
              <p className="stepDesc">
                El pedido se valida y se envía de inmediato. Se puede agregar notas y preferencias.
              </p>
              <div className="stepFoot">Menos errores • Pedido estandarizado</div>
            </div>

            <div className="stepCard">
              <div className="stepTop">
                <div className="stepNum">3</div>
                <div className="stepIcon">🍳</div>
              </div>
              <h3 className="stepTitle">Cocina lo gestiona en tiempo real</h3>
              <p className="stepDesc">
                El panel muestra nuevos pedidos y estados. El equipo marca en progreso y listo.
              </p>
              <div className="stepFoot">Estados • Tiempos • Control operativo</div>
            </div>
          </div>
        </div>
      </section>
            {/* SECCIÓN 3: BENEFICIOS */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <h2 className="sectionTitle">Beneficios para el restaurante</h2>
          <p className="sectionLead">
            Menos fricción en el servicio, más control operativo y una experiencia moderna
            para el cliente. Este demo es la base: luego conectamos carta real, QR por mesa e IA mesero.
          </p>

          <div className="benefitsGrid">
            <div className="benefitCard">
              <div className="benefitTop">
                <div>
                  <div className="metric">↓ Errores</div>
                  <div className="metricHint">pedido estandarizado</div>
                </div>
                <div className="benefitIcon">✅</div>
              </div>
              <h3 className="benefitTitle">Menos confusión en cocina</h3>
              <p className="benefitDesc">
                El pedido llega claro y completo, con cantidades y detalles consistentes.
              </p>
            </div>

            <div className="benefitCard">
              <div className="benefitTop">
                <div>
                  <div className="metric">↑ Rotación</div>
                  <div className="metricHint">flujo más ágil</div>
                </div>
                <div className="benefitIcon">⚡</div>
              </div>
              <h3 className="benefitTitle">Atención más rápida</h3>
              <p className="benefitDesc">
                El cliente pide cuando está listo, sin esperar que lo atiendan para “tomar el pedido”.
              </p>
            </div>

            <div className="benefitCard">
              <div className="benefitTop">
                <div>
                  <div className="metric">↑ Ticket</div>
                  <div className="metricHint">upselling</div>
                </div>
                <div className="benefitIcon">🧠</div>
              </div>
              <h3 className="benefitTitle">Recomendaciones inteligentes</h3>
              <p className="benefitDesc">
                Luego activamos IA mesero: sugiere acompañamientos, postres y bebidas.
              </p>
            </div>

            <div className="benefitCard">
              <div className="benefitTop">
                <div>
                  <div className="metric">Control</div>
                  <div className="metricHint">en tiempo real</div>
                </div>
                <div className="benefitIcon">📊</div>
              </div>
              <h3 className="benefitTitle">Operación visible</h3>
              <p className="benefitDesc">
                Panel con estados: nuevo, en preparación y listo. Ideal para medir tiempos después.
              </p>
            </div>
          </div>

          <div className="kpisRow">
            <div className="kpiCard">
              <h4 className="kpiTitle">Lo que habilita esta base (y lo que viene)</h4>
              <ul className="kpiList">
                <li>Menú real administrable (productos, precios, disponibilidad)</li>
                <li>Notas de pedido: “sin cebolla”, “bien cocido”, alergias</li>
                <li>Roles: caja, cocina, garzón, admin</li>
                <li>Reportes: tiempos promedio, pedidos por mesa, productos top</li>
              </ul>
            </div>

            <div className="kpiCard">
              <h4 className="kpiTitle">Integraciones</h4>
              <ul className="kpiList">
                <li>QR por mesa</li>
                <li>Pagos (webpay / link)</li>
                <li>WhatsApp / notificaciones</li>
                <li>POS / sistemas internos</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section previewSection">
  <div className="container">
    <h2 className="sectionTitle">Vista previa</h2>
    <p className="sectionLead">
      Así interactúa un cliente real desde su mesa escaneando un QR.
    </p>

    {/* cards / mock / contenido */}
  </div>
      </section>

            {/* SECCIÓN 4: DEMO EN VIVO */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <h2 className="sectionTitle">Demo en vivo</h2>
          <p className="sectionLead">
            Prueba el flujo real en menos de un minuto. Simula una mesa con QR, envía un pedido y míralo aparecer
            en el panel de cocina.
          </p>

          <div className="demoBar">
            <div className="demoCard">
              <h3 className="demoTitle">Probar como cliente (mesa)</h3>
              <p className="demoDesc">
                Abre una mesa demo, crea un pedido y envíalo a cocina. Este enlace representa el QR de una mesa.
              </p>

              <div className="demoActions">
                <a className="btnPrimaryLg" href="/demo/12">
                  Abrir mesa demo (QR)
                </a>

                <a className="btnSecondaryLg" href="/panel">
                  Ver panel cocina
                </a>
              </div>

              <p className="note" style={{ marginTop: 12 }}>
                Tip: abre <strong>/demo/12</strong> en el celular y <strong>/panel</strong> en el PC para ver el flujo completo.
              </p>
            </div>

            <aside className="hintBox">
              <h4 className="hintTitle">Checklist del demo</h4>
              <ul className="hintList">
                <li>Entrar a una mesa demo</li>
                <li>Enviar el pedido</li>
                <li>Ver el pedido en cocina</li>
                <li>Cambiar estado (NEW → IN_PROGRESS → DONE)</li>
              </ul>
            </aside>
          </div>
        </div>
      </section>

            {/* SECCIÓN 5: PILOTO PARA RESTAURANTES */}
      <section className="section" id="piloto">
        <div className="container">
          <h2 className="sectionTitle">Piloto para restaurantes</h2>
          <p className="sectionLead">
            Si te interesa implementar un mesero IA con QR en tu local, podemos hacer un piloto corto para medir impacto
            (menos espera, menos errores y más rotación). Déjanos tus datos y te contactamos.
          </p>

          <div className="pilotGrid">
            <div className="pilotCard">
              <h3 className="pilotTitle">Qué incluye el piloto</h3>
              <p className="pilotLead">
                Configuración inicial + flujo de prueba + ajuste fino según tu carta y tu operación. En esta etapa
                nos enfocamos en velocidad, claridad y experiencia del cliente.
              </p>

              <ul className="pilotBullets">
                <li>QR por mesa y experiencia cliente</li>
                <li>Panel cocina (cola de pedidos + estados)</li>
                <li>Catálogo demo (adaptable a tu carta)</li>
                <li>Métricas básicas (volumen, tiempos, conversión)</li>
              </ul>

              <div className="demoActions" style={{ marginTop: 14 }}>
                <a className="btnSecondaryLg" href="/demo/12">
                  Ver demo cliente
                </a>
                <a className="btnSecondaryLg" href="/panel">
                  Ver demo cocina
                </a>
              </div>
            </div>

            <div className="pilotCard">
              <h3 className="pilotTitle">Solicitar contacto</h3>
              <PilotForm />
              
            </div>

            <aside className="trustBox" style={{ gridColumn: "1 / -1" }}>
              <h4 className="trustTitle">Lo que medimos en el piloto</h4>
              <ul className="trustList">
                <li>Tiempo desde QR → pedido enviado</li>
                <li>Pedidos por hora / rotación de mesas</li>
                <li>Errores de pedido (observables)</li>
                <li>Adopción (clientes que completan el flujo)</li>
              </ul>
            </aside>
          </div>
        </div>
      </section>

            {/* SECCIÓN 6: CIERRE / CTA FINAL */}
      <section className="finalWrap">
        <div className="finalCard">
          <div className="finalGrid">
            <div>
              <h2 className="finalTitle">Lleva el Mesero IA con QR a tu restaurante</h2>
              <p className="finalLead">
                Implementa un flujo rápido para pedidos por mesa, reduce fricción en atención y mejora tiempos en cocina.
                El piloto se adapta a tu carta y tu forma de trabajar.
              </p>

              <div className="finalActions">
                <a className="btnPrimaryLg" href="#piloto">
                  Solicitar piloto
                </a>
                <a className="btnSecondaryLg" href="/demo/12">
                  Probar demo
                </a>
                <a className="btnOutlineLg" href="/panel">
                  Ver cocina
                </a>
              </div>

              <div className="guarantee">
                <div className="gCard">
                  <p className="gTitle">Implementación guiada</p>
                  <p className="gText">Te acompañamos con setup, prueba y ajustes según tu operación real.</p>
                </div>
                <div className="gCard">
                  <p className="gTitle">Enfoque en métricas</p>
                  <p className="gText">Medimos adopción, tiempos y mejora operativa desde el primer día.</p>
                </div>
                <div className="gCard">
                  <p className="gTitle">Escalable</p>
                  <p className="gText">Partimos con demo y luego conectamos IA, catálogo real y pagos si aplica.</p>
                </div>
              </div>
            </div>

            <aside className="quickLinks">
              <p className="quickTitle">Acceso rápido</p>
              <ul className="quickList">
                <li>
                  <a href="/demo/12">Mesa demo (QR)</a>
                </li>
                <li>
                  <a href="/panel">Panel cocina</a>
                </li>
                <li>
                  <a href="#piloto">Formulario piloto</a>
                </li>
              </ul>
              <p className="smallNote" style={{ marginTop: 10 }}>
                FaVer Technologies — Waiter AI (demo). Próximo: IA de recomendaciones y asistente conversacional.
              </p>
            </aside>
          </div>
        </div>

        <div className="footerBar">
          <span>© {new Date().getFullYear()} FaVer Technologies</span>
          <span>Demo interna / prototipo — listo para integrar backend</span>
        </div>
      </section>

    </main>
  );
}
