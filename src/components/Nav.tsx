import { whatsappLink } from "@/lib/whatsapp";

export default function Nav() {
  return (
    <header className="nav">
      <a href="#hero" className="nav-brand" aria-label="CodePath">
        <span className="mark mark-nav">C</span>
        <span>CodePath</span>
      </a>
      <a
        href={whatsappLink("Oi! Quero meu site institucional na promoção.")}
        target="_blank"
        rel="noopener noreferrer"
        className="nav-cta"
      >
        Quero meu site
      </a>
    </header>
  );
}
