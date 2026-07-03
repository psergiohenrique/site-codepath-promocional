import { whatsappLink } from "@/lib/whatsapp";

export default function Pricing() {
  return (
    <section className="oferta" id="oferta">
      <div className="price-card">
        <div className="price-eyebrow">SITE INSTITUCIONAL COMPLETO</div>
        <div className="price-main">R$ 499</div>
        <div className="price-note">à vista</div>

        <div className="price-divider" />

        <div className="price-alt">ou R$ 599 parcelado</div>
        <div className="price-alt-note">
          + 12x de R$ 129,90 por mês, como uma assinatura
        </div>

        <a
          href={whatsappLink(
            "Oi! Quero contratar o site institucional na promoção."
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-price"
        >
          Quero contratar
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
