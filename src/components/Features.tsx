const FEATURES = [
  {
    index: "01",
    title: "Site institucional",
    text: "Design profissional, responsivo, com a cara da sua marca.",
  },
  {
    index: "02",
    title: "Aparece no Google",
    text: "Estrutura otimizada para busca, do jeito que o Google gosta.",
  },
  {
    index: "03",
    title: "Suporte da CodePath",
    text: "Acompanhamento direto com quem constrói, sem intermediário.",
  },
];

export default function Features() {
  return (
    <section className="features">
      <h2>O que você leva</h2>
      <div className="features-grid">
        {FEATURES.map((feature) => (
          <div className="feature-card" key={feature.title}>
            <div className="feature-index">{feature.index}</div>
            <h3>{feature.title}</h3>
            <p>{feature.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
