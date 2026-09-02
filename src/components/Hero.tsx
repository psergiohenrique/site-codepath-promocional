import { whatsappLink } from "@/lib/whatsapp";

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-badge">OFERTA POR TEMPO LIMITADO</div>
      <h1>
        Seu site institucional no ar e no{" "}
        <span className="highlight">Google</span>.
      </h1>
      <p>
        Site profissional, feito pela CodePath, pronto para aparecer nas
        buscas e passar credibilidade pro seu negócio.
      </p>
      <a
        href={whatsappLink("Oi! Quero meu site institucional na promoção.")}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-hero"
      >
        Garantir minha vaga
      </a>
    </section>
  );
}
