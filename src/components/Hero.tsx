import Image from "next/image";
import { whatsappLink } from "@/lib/whatsapp";

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-glow" aria-hidden="true" />
      <Image
        src="/assets/logo-icon.png"
        alt=""
        width={220}
        height={220}
        className="hero-mark hero-mark--tl"
        aria-hidden="true"
      />
      <Image
        src="/assets/logo-icon.png"
        alt=""
        width={300}
        height={300}
        className="hero-mark hero-mark--br"
        aria-hidden="true"
      />

      <div className="hero-badge">
        <span className="hero-badge-dot" aria-hidden="true" />
        OFERTA POR TEMPO LIMITADO
      </div>

      <h1>
        Seu site institucional no ar, e no{" "}
        <span className="highlight">Google</span>.
      </h1>
      <p>
        Site profissional, feito pela CodePath, pronto para aparecer nas
        buscas e passar credibilidade pro seu negócio.
      </p>

      <div className="hero-actions">
        <a
          href={whatsappLink("Oi! Quero meu site institucional na promoção.")}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-hero"
        >
          Garantir minha vaga
          <span aria-hidden="true">→</span>
        </a>
        <div className="hero-subnote">Resposta no WhatsApp em minutos</div>
      </div>
    </section>
  );
}
