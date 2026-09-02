import Image from "next/image";
import { whatsappLink } from "@/lib/whatsapp";

export default function CtaFinal() {
  return (
    <section className="cta-final">
      <Image
        src="/assets/logo-icon.png"
        alt=""
        width={240}
        height={240}
        className="cta-mark"
        aria-hidden="true"
      />
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
        <span aria-hidden="true">→</span>
      </a>
    </section>
  );
}
