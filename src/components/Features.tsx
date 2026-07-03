const FEATURES = [
  {
    title: "Site institucional",
    text: "Design profissional, responsivo, com a cara da sua marca.",
  },
  {
    title: "Aparece no Google",
    text: "Estrutura otimizada para busca, do jeito que o Google gosta.",
  },
  {
    title: "Suporte da CodePath",
    text: "Acompanhamento direto com quem constrói, sem intermediário.",
  },
];

export default function Features() {
  return (
    <section className="features">
      <div className="features-grid">
        {FEATURES.map((feature) => (
          <div className="feature-card" key={feature.title}>
            <h3>{feature.title}</h3>
            <p>{feature.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
