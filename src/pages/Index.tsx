import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { Tag } from "@/components/Tag";

const WHATSAPP_URL = "https://wa.me/5575982327817";
const EMAIL = "contato@nevestech.com.br";

function AnchorLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="text-sm font-medium text-zinc-200/90 hover:text-zinc-50 transition-colors"
    >
      {children}
    </a>
  );
}

function Card({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon?: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl bg-zinc-900/50 ring-1 ring-white/10 p-6">
      <div className="flex items-start gap-4">
        {icon ? (
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-500 text-zinc-950">
            {icon}
          </div>
        ) : null}
        <div>
          <h3 className="text-lg font-semibold text-zinc-50">{title}</h3>
          <p className="mt-2 text-sm leading-6 text-zinc-200/80">{description}</p>
        </div>
      </div>
    </div>
  );
}

function Stat({ value, label, description }: { value: string; label: string; description: string }) {
  return (
    <div className="rounded-2xl bg-zinc-950/40 ring-1 ring-white/10 p-6 text-center">
      <div className="text-4xl font-bold text-zinc-50">{value}</div>
      <div className="mt-3 text-sm font-semibold text-zinc-50">{label}</div>
      <p className="mt-2 text-sm leading-6 text-zinc-200/80">{description}</p>
    </div>
  );
}

export default function Index() {
  return (
    <div className="min-h-screen bg-[#22242A] text-zinc-50">
      <header className="sticky top-0 z-20 border-b border-white/10 bg-[#22242A]/80 backdrop-blur">
        <Container>
          <div className="flex h-16 items-center justify-between gap-6">
            <a href="#top" className="font-semibold tracking-tight">
              NevesTech
            </a>
            <nav className="hidden items-center gap-6 md:flex">
              <AnchorLink href="#servicos">Serviços</AnchorLink>
              <AnchorLink href="#infra">Infraestrutura</AnchorLink>
              <AnchorLink href="#digital">Presença digital</AnchorLink>
              <AnchorLink href="#contato">Contato</AnchorLink>
            </nav>
            <a href={WHATSAPP_URL} className="hidden sm:block">
              <Button>Fale Conosco</Button>
            </a>
          </div>
        </Container>
      </header>

      <main id="top">
        {/* HERO */}
        <Section>
          <Container>
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <div>
                <div className="flex flex-wrap gap-2">
                  <Tag>Tecnologia</Tag>
                  <Tag variant="outline">Automação</Tag>
                </div>

                <h1 className="mt-6 text-3xl font-semibold leading-tight sm:text-5xl">
                  Transforme seu Negócio com Tecnologia Inteligente
                </h1>

                <p className="mt-5 text-base leading-7 text-zinc-200/85">
                  Somos especialistas em automação comercial e infraestrutura de TI para restaurantes,
                  lojas, hotéis e empresas que buscam eficiência operacional e crescimento sustentável
                  no mercado brasileiro.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a href={WHATSAPP_URL}>
                    <Button>Fale Conosco</Button>
                  </a>
                  <a href="#servicos">
                    <Button variant="outline">Nossos Serviços</Button>
                  </a>
                </div>
              </div>

              <div className="overflow-hidden rounded-2xl ring-1 ring-white/10">
                <img
                  className="h-full w-full object-cover"
                  src="/resize/quality80/resizing_typefit/width1200/https/cdn.gamma.app/x6w8oknb863n1n9/generated-images/in378fTTB0KRwtFSf2Mth.png"
                  alt="Tecnologia e automação para negócios"
                />
              </div>
            </div>
          </Container>
        </Section>

        {/* AUTOMAÇÃO */}
        <div id="servicos" className="bg-[#1F1F1E]">
          <Section>
            <Container>
              <h2 className="text-2xl font-semibold sm:text-3xl">Automação Comercial para Cada Segmento</h2>
              <p className="mt-4 max-w-3xl text-zinc-200/80">
                Implementamos e oferecemos suporte especializado em sistemas de gestão (ERP/PDV)
                personalizados para as necessidades específicas do seu negócio.
              </p>

              <div className="mt-10 grid gap-4 md:grid-cols-3">
                <Card
                  title="Restaurantes"
                  description="Controle completo de mesas, comandas eletrônicas e gestão de delivery para otimizar atendimento e aumentar faturamento."
                />
                <Card
                  title="Lojas e Varejo"
                  description="Gestão inteligente de estoque, frente de caixa moderna e integração com múltiplos meios de pagamento."
                />
                <Card
                  title="Hotelaria"
                  description="Sistemas de reserva, check-in/out automatizado e gestão de governança para melhorar a experiência do hóspede."
                />
              </div>
            </Container>
          </Section>
        </div>

        {/* INFRA */}
        <Section>
          <Container>
            <div id="infra" className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="text-2xl font-semibold sm:text-3xl">Infraestrutura de TI Robusta e Confiável</h2>
                <p className="mt-4 text-zinc-200/80">
                  Projetamos e mantemos a “espinha dorsal” tecnológica da sua empresa com soluções
                  profissionais que garantem estabilidade, segurança e performance.
                </p>

                <ul className="mt-6 space-y-2 text-sm text-zinc-200/85">
                  <li>• Redes de alta disponibilidade</li>
                  <li>• Segurança corporativa avançada</li>
                  <li>• Escalabilidade garantida</li>
                  <li>• Monitoramento 24/7</li>
                </ul>
              </div>

              <div className="overflow-hidden rounded-2xl ring-1 ring-white/10">
                <img
                  className="h-full w-full object-cover"
                  src="/resize/quality80/resizing_typefit/width2000/https/cdn.gamma.app/x6w8oknb863n1n9/generated-images/vyJYJFNXFpnrPpRV_pfnv.png"
                  alt="Infraestrutura e redes"
                />
              </div>
            </div>
          </Container>
        </Section>

        {/* CONECTIVIDADE */}
        <div className="bg-[#1F1F1E]">
          <Section>
            <Container>
              <h2 className="text-2xl font-semibold sm:text-3xl">Soluções Completas de Conectividade</h2>

              <div className="mt-10 grid gap-4 md:grid-cols-2">
                <Card
                  title="Cabeamento Estruturado"
                  description="Redes organizadas e certificadas seguindo padrões internacionais, garantindo performance e facilitando manutenção."
                />
                <Card
                  title="Wi-Fi Corporativo"
                  description="Cobertura total com alta performance, gerenciamento centralizado e segurança para clientes e colaboradores."
                />
                <Card
                  title="Telefonia IP (VoIP)"
                  description="Modernize seu atendimento com redução de custos, recursos avançados e integração com sistemas de gestão."
                />
                <Card
                  title="Segurança e Backup"
                  description="Proteção completa dos seus dados com backups automatizados, criptografia e planos de recuperação."
                />
              </div>
            </Container>
          </Section>
        </div>

        {/* SUPORTE */}
        <Section>
          <Container>
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div className="order-2 overflow-hidden rounded-2xl ring-1 ring-white/10 lg:order-1">
                <img
                  className="h-full w-full object-cover"
                  src="/resize/quality80/resizing_typefit/width1200/https/cdn.gamma.app/x6w8oknb863n1n9/generated-images/s4S3PqzsZnbtCYTPpT1XW.png"
                  alt="Suporte de TI"
                />
              </div>

              <div className="order-1 lg:order-2">
                <h2 className="text-2xl font-semibold sm:text-3xl">
                  Suporte de TI que Mantém seu Negócio Funcionando
                </h2>
                <p className="mt-4 text-zinc-200/80">
                  Nossa equipe atua preventivamente para evitar paradas críticas. Atendimento ágil e
                  soluções eficazes para qualquer desafio tecnológico.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <Card
                    title="Suporte Remoto Imediato"
                    description="Resolução rápida de problemas sem deslocamento, reduzindo tempo de inatividade."
                  />
                  <Card
                    title="Manutenção Preventiva"
                    description="Cronogramas planejados para evitar falhas inesperadas em PCs, servidores e periféricos."
                  />
                  <div className="sm:col-span-2">
                    <Card
                      title="Ferramentas Corporativas"
                      description="Implementação e gestão de soluções de produtividade que facilitam o trabalho da sua equipe."
                    />
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* DIGITAL */}
        <div id="digital" className="bg-[#1F1F1E]">
          <Section>
            <Container>
              <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
                <div>
                  <h2 className="text-2xl font-semibold sm:text-3xl">Presença Digital que Gera Resultados</h2>
                  <p className="mt-4 text-zinc-200/80">
                    Colocamos sua marca no mapa digital e cuidamos da sua imagem online com
                    estratégias profissionais.
                  </p>

                  <div className="mt-8 grid gap-4">
                    <Card
                      title="Sites Profissionais"
                      description="Sites institucionais e landing pages otimizadas para conversão e experiência do usuário."
                    />
                    <Card
                      title="Redes Sociais"
                      description="Estratégia de conteúdo, postagens regulares e engajamento que gera resultados mensuráveis."
                    />
                  </div>
                </div>

                <div className="overflow-hidden rounded-2xl ring-1 ring-white/10">
                  <img
                    className="h-full w-full object-cover"
                    src="/resize/quality80/resizing_typefit/width2000/https/cdn.gamma.app/x6w8oknb863n1n9/generated-images/3oBaKCmY5Nnk1qQ33t0K-.png"
                    alt="Presença digital"
                  />
                </div>
              </div>
            </Container>
          </Section>
        </div>

        {/* POR QUE */}
        <div className="bg-brand-500 text-zinc-950">
          <Section>
            <Container>
              <h2 className="text-2xl font-semibold sm:text-3xl">Por que Escolher a Nevestech?</h2>
              <p className="mt-4 max-w-3xl text-zinc-950/80">
                Somos mais que fornecedores de tecnologia — somos parceiros estratégicos do seu
                crescimento.
              </p>

              <div className="mt-10 grid gap-4 md:grid-cols-3">
                <div className="rounded-2xl bg-white/10 p-6 ring-1 ring-black/10">
                  <h3 className="font-semibold">Atendimento Especializado</h3>
                  <p className="mt-2 text-sm text-zinc-950/80">
                    Entendemos a urgência e necessidades de hotelaria, gastronomia e varejo.
                  </p>
                </div>
                <div className="rounded-2xl bg-white/10 p-6 ring-1 ring-black/10">
                  <h3 className="font-semibold">Suporte Híbrido</h3>
                  <p className="mt-2 text-sm text-zinc-950/80">
                    Agilidade do remoto com eficiência do presencial quando você mais precisa.
                  </p>
                </div>
                <div className="rounded-2xl bg-white/10 p-6 ring-1 ring-black/10">
                  <h3 className="font-semibold">Foco no Resultado</h3>
                  <p className="mt-2 text-sm text-zinc-950/80">
                    Reduzimos custos e aumentamos eficiência com a tecnologia correta.
                  </p>
                </div>
              </div>
            </Container>
          </Section>
        </div>

        {/* STATS */}
        <Section>
          <Container>
            <h2 className="text-2xl font-semibold sm:text-3xl">Nossos Diferenciais em Números</h2>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <Stat
                value="98%"
                label="Satisfação dos Clientes"
                description="Baseada em avaliações e renovações de contrato com nossos parceiros."
              />
              <Stat
                value="2h"
                label="Tempo Médio de Resposta"
                description="Atendimento ágil que minimiza impactos operacionais."
              />
              <Stat
                value="40%"
                label="Redução de Custos"
                description="Economia média com otimização tecnológica e automação de processos."
              />
              <Stat
                value="7+"
                label="Anos de Experiência"
                description="Expertise consolidada em automação comercial e infraestrutura."
              />
            </div>
          </Container>
        </Section>

        {/* DEPOIMENTO */}
        <div className="bg-[#1F1F1E]">
          <Section>
            <Container>
              <h2 className="text-2xl font-semibold sm:text-3xl">Empresas que Confiam na Nevestech</h2>
              <p className="mt-4 max-w-3xl text-zinc-200/80">
                Atendemos com excelência restaurantes, hotéis, lojas e empresas de diversos portes.
              </p>

              <div className="mt-10 rounded-2xl bg-zinc-900/50 p-8 ring-1 ring-white/10">
                <p className="text-base leading-7 text-zinc-100">
                  “A Nevestech transformou completamente nossa operação. O sistema de gestão
                  implementado reduziu erros, acelerou o atendimento e nos deu controle total do
                  negócio.”
                </p>
                <p className="mt-6 text-sm font-semibold text-zinc-50">
                  Maria Silva, Proprietária — Restaurante Sabor Brasil
                </p>
              </div>
            </Container>
          </Section>
        </div>

        {/* CONTATO */}
        <Section>
          <Container>
            <div id="contato" className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="text-3xl font-semibold sm:text-4xl">Entre em Contato Hoje Mesmo</h2>
                <p className="mt-4 text-zinc-200/80">
                  Estamos prontos para levar sua empresa ao próximo nível com soluções tecnológicas
                  profissionais e suporte dedicado.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl bg-zinc-900/50 p-6 ring-1 ring-white/10">
                    <div className="text-sm font-semibold">WhatsApp</div>
                    <div className="mt-2 text-lg font-bold">(75) 98232-7817</div>
                    <div className="mt-1 text-sm text-zinc-200/70">Atendimento rápido e direto</div>
                  </div>
                  <div className="rounded-2xl bg-zinc-900/50 p-6 ring-1 ring-white/10">
                    <div className="text-sm font-semibold">E-mail</div>
                    <div className="mt-2 text-lg font-bold break-all">{EMAIL}</div>
                    <div className="mt-1 text-sm text-zinc-200/70">Orçamentos e informações</div>
                  </div>
                  <div className="rounded-2xl bg-zinc-900/50 p-6 ring-1 ring-white/10 sm:col-span-2">
                    <div className="text-sm font-semibold">Instagram</div>
                    <div className="mt-2 text-lg font-bold">@nevestech</div>
                    <div className="mt-1 text-sm text-zinc-200/70">Novidades e conteúdo</div>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a href={WHATSAPP_URL}>
                    <Button>Solicitar Orçamento</Button>
                  </a>
                  <a href={`mailto:${EMAIL}`}>
                    <Button variant="outline">Enviar E-mail</Button>
                  </a>
                </div>
              </div>

              <div className="overflow-hidden rounded-2xl ring-1 ring-white/10">
                <img
                  className="h-full w-full object-cover"
                  src="/resize/quality80/resizing_typefit/width2000/https/cdn.gamma.app/x6w8oknb863n1n9/generated-images/eVn0nmByjtJUkoA5hNcNi.png"
                  alt="Equipe pronta para ajudar"
                />
              </div>
            </div>
          </Container>
        </Section>
      </main>

      <footer className="border-t border-white/10 py-10">
        <Container>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="text-sm text-zinc-200/70">© {new Date().getFullYear()} NevesTech</div>
            <div className="text-sm text-zinc-200/70">Automação comercial • Infraestrutura de TI • Presença digital</div>
          </div>
        </Container>
      </footer>
    </div>
  );
}
