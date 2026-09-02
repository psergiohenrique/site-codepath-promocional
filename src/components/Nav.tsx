import Image from "next/image";
import { whatsappLink } from "@/lib/whatsapp";

export default function Nav() {
  return (
    <header className="nav">
      <a href="#hero" className="nav-brand" aria-label="CodePath">
        <Image
          src="/assets/logo-icon.png"
          alt=""
          width={30}
          height={30}
          className="mark-nav"
          priority
        />
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
