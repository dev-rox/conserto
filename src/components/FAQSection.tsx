import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import FadeIn from "./FadeIn";

const faqs = [
  {
    question: "É seguro dar acesso remoto ao meu computador?",
    answer:
      "Sim! Utilizo ferramentas profissionais como AnyDesk e TeamViewer, que são criptografadas. Você acompanha tudo em tempo real na tela e pode desconectar a qualquer momento.",
  },
  {
    question: "E se o problema não for resolvido?",
    answer:
      "Se eu não conseguir resolver o problema remotamente, você não paga. Simples assim. Meu compromisso é com a solução real do seu problema.",
  },
  {
    question: "Quais são as formas de pagamento?",
    answer:
      "Aceito PIX, cartão de crédito e transferência bancária. O pagamento é feito somente após a conclusão do serviço.",
  },
  {
    question: "Quanto tempo demora o atendimento?",
    answer:
      "Depende do problema. A maioria dos atendimentos é resolvida entre 30 minutos e 2 horas. Problemas mais complexos podem levar mais tempo, mas você sempre será informado antes.",
  },
  {
    question: "Vocês atendem fins de semana?",
    answer:
      "Sim! Atendo de segunda a sábado, e em casos urgentes, também aos domingos. Basta me chamar no WhatsApp.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="border-t border-border bg-card/50 py-20 md:py-28">
      <div className="container">
        <FadeIn>
          <div className="text-center">
            <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">
              Perguntas <span className="text-gradient">Frequentes</span>
            </h2>
          </div>
        </FadeIn>

        <FadeIn delay={100}>
          <div className="mx-auto mt-12 max-w-2xl">
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="rounded-xl border border-border bg-card px-5"
                >
                  <AccordionTrigger className="text-left text-sm font-semibold hover:no-underline sm:text-base">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default FAQSection;
