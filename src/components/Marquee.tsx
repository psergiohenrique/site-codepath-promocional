const ITEMS = [
  "SITE RESPONSIVO",
  "OTIMIZADO PARA GOOGLE",
  "DOMÍNIO PRÓPRIO",
  "SUPORTE DIRETO",
  "ENTREGA RÁPIDA",
];

function MarqueeSet() {
  return (
    <div className="marquee-set" aria-hidden="true">
      {ITEMS.map((item) => (
        <span key={item}>
          {item} <span className="dot">•</span>
        </span>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <div className="marquee">
      <div className="marquee-track">
        <MarqueeSet />
        <MarqueeSet />
      </div>
    </div>
  );
}
