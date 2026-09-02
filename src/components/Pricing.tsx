import { whatsappLink } from "@/lib/whatsapp";

export default function Pricing() {
  return (
    <section className="oferta" id="oferta">
      <div className="oferta-glow" aria-hidden="true" />
      <div className="price-card">
        <div className="price-eyebrow">SITE INSTITUCIONAL COMPLETO</div>

        <div className="price-row">
          <span className="price-currency">R$</span>
          <span className="price-main">499</span>
        </div>
        <div className="price-note">à vista</div>

        <div className="price-divider" />

        <div className="price-alt">+ R$ 129,90 por mês</div>
        <div className="price-alt-note">como uma assinatura</div>

        <a
          href={whatsappLink(
            "Oi! Quero contratar o site institucional na promoção."
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-price"
        >
          Quero contratar
          <span aria-hidden="true">→</span>
        </a>
      </div>

      <p className="price-disclaimer">
        * Aparecer na primeira página do Google depende também de um
        investimento em Google Ads, a partir de cerca de R$ 100/mês,
        contratado à parte.
      </p>
    </section>
  );
}
