import { whatsappLink } from "@/lib/whatsapp";

export default function CtaFinal() {
  return (
    <section className="cta-final">
      <h2>Vagas limitadas nesse valor. Bora colocar seu negócio no Google?</h2>
      <a
        href={whatsappLink(
          "Oi! Quero falar sobre o site institucional na promoção."
        )}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-cta"
      >
        Falar com a CodePath
      </a>
    </section>
  );
}
