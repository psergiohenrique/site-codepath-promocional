const STEPS = [
  {
    n: "1.",
    title: "Conversa rápida",
    text: "Você conta do negócio no WhatsApp. Sem formulário chato.",
  },
  {
    n: "2.",
    title: "A gente constrói",
    text: "Layout, textos e estrutura prontos para você aprovar.",
  },
  {
    n: "3.",
    title: "No ar",
    text: "Publicamos, indexamos no Google e seguimos dando suporte.",
  },
];

export default function Steps() {
  return (
    <section className="steps">
      <div className="steps-grid">
        {STEPS.map((step) => (
          <div key={step.title}>
            <p className="step-title">
              <span>{step.n}</span> {step.title}
            </p>
            <p className="step-text">{step.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
