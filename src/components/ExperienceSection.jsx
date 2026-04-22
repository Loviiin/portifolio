import StackChips from './StackChips';

const experienceItems = [
  {
    period: 'Mar 2025 - Atual',
    tone: 'active',
    role: 'Estagiário Full Stack',
    company: 'TRF1 - Tribunal Regional Federal',
    summary:
      'Desenvolvimento Full Stack com Spring Boot e Angular para ferramentas internas e modernização de projetos legados.',
    bullets: [
      'Backend com Spring Boot, APIs REST e integração com sistemas corporativos.',
      'Frontend com Angular, criação de interfaces responsivas e componentes reutilizáveis.',
      'Participação em projetos de modernização de aplicações antigas.',
      'Suporte e manutenção de sistemas em produção.'
    ],
    chips: ['Spring Boot', 'Angular', 'Java', 'TypeScript']
  },
  {
    period: 'Atual',
    tone: 'active',
    role: 'Engenheiro Full Stack',
    company: 'Meu Ponto / Nexora + Projetos Independentes',
    summary:
      'Desenvolvimento full stack em produção e projetos independentes com foco em alta performance, usabilidade e confiabilidade operacional.',
    bullets: [
      'Backend: Go com JWT, RBAC, Redis e PostgreSQL. Frontend: Vue 3, Vite, Angular, React com experiência em dashboards e interfaces responsivas.',
      'Produto SaaS completo com fluxos de jornada, banco de horas, justificativas e relatórios em produção.',
      'Desenvolvimento de sites e sistemas integrados: gestão completa de layout, funcionalidades, domínio, hospedagem e segurança.',
      'Integração com Cloudinary, APIs externas e soluções personalizadas conforme necessidade do cliente.'
    ],
    chips: ['Go', 'Vue 3', 'React', 'Angular', 'Spring Boot', 'Redis', 'PostgreSQL', 'TypeScript', 'JavaScript']
  },
  {
    period: 'Nov 2024 - Mar 2025',
    tone: 'muted',
    role: 'Contador / Operacional',
    company: 'Conceitos Contabilidade',
    summary:
      'Experiência em gestão contábil e operacional antes de transição para desenvolvimento full stack.',
    bullets: [
      'Confecção de balances e documentação contábil.',
      'Gestão de processos operacionais.',
      'Oportunidade que permitiu retomar foco no desenvolvimento Full Stack.'
    ],
    chips: ['Contabilidade', 'Operacional', 'Gestão']
  }
];

export default function ExperienceSection() {
  return (
    <section className="experience-section" id="experiencia" aria-labelledby="experience-title">
      <SectionHeader />
      <div className="experience-timeline" role="list" aria-label="Linha do tempo de experiencia profissional">
        {experienceItems.map((item, index) => {
          const sideClass = index % 2 === 0 ? 'experience-entry--left' : 'experience-entry--right';

          return (
            <article key={`${item.period}-${item.role}`} className={`experience-entry ${sideClass}`} role="listitem">
              <span className="experience-dot" aria-hidden="true" />
              <div className="experience-card">
                <header className="experience-card-header">
                  <div>
                    <p className="experience-period">{item.period}</p>
                    <h3>{item.role}</h3>
                    <p className="experience-company">{item.company}</p>
                  </div>
                  <span className={`state-pill ${item.tone === 'active' ? 'state-pill-active' : 'state-pill-muted'}`}>
                    {item.tone === 'active' ? 'Atual' : 'Historico'}
                  </span>
                </header>

                <p className="experience-summary">{item.summary}</p>

                <ul className="experience-bullets">
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>

                <StackChips items={item.chips} className="experience-chips" />
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function SectionHeader() {
  return (
    <div className="experience-header">
      <p className="section-eyebrow">Experiencia profissional</p>
      <h2 id="experience-title">Linha do tempo de entregas, produtos e sistemas</h2>
      <p className="section-subtitle">
        Uma secao em formato de timeline para destacar cargos, projetos e resultados com o mesmo tom visual
        do restante do portifolio.
      </p>
    </div>
  );
}