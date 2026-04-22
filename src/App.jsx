import { useState } from 'react';
import SectionTitle from './components/SectionTitle';
import StackChips from './components/StackChips';
import ProjectCard from './components/ProjectCard';
import ExperienceSection from './components/ExperienceSection';
import AboutMe from './components/AboutMe';
import WorkNowSection from './components/WorkNowSection';
import SocialLinks from './components/SocialLinks';
import ArchitectureModal from './components/ArchitectureModal';
import { projects, stackChips } from './data/projects';

export default function App() {
  const [isConsultaModalOpen, setIsConsultaModalOpen] = useState(false);
  const [isJurisModalOpen, setIsJurisModalOpen] = useState(false);

  return (
    <div className="page-shell">
      <div className="background-grid" aria-hidden="true" />
      <main className="portfolio">
        <section className="hero" id="top">
          <div className="hero-content">
            <p className="hero-kicker">Guilherme Henrique De Souza Villa Real</p>
            <h1>
              <span>Olá, sou o Guilherme.</span>
              <span>Desenvolvedor Full Stack.</span>
            </h1>
            <p className="hero-subtitle">
              Construindo sistemas críticos, produtos SaaS e soluções de alta performance.
            </p>
            <SocialLinks />
          </div>
        </section>

        <section className="stack-section" id="stack" aria-labelledby="stack-title">
          <SectionTitle
            eyebrow="Stack"
            title="Tecnologias de trabalho"
            subtitle="Base de construcao para APIs, infraestrutura e plataformas de alta disponibilidade."
          />
          <StackChips items={stackChips} />
        </section>

        <section className="projects-section" id="projetos" aria-labelledby="projects-title">
          <SectionTitle
            eyebrow="Projetos"
            title="Portifolio tecnico"
            subtitle="Cards compactos com stack e contexto tecnico. A arquitetura abre em modal expandido."
          />
          <div className="project-grid">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
            <article className="project-card" aria-label="Projeto em andamento">
              <header className="project-header">
                <div>
                  <h3>Sistema de Consulta Processual de 1ª Instância (TRF1)</h3>
                  <p className="project-tagline">Construção de um sistema moderno e otimizado para consulta de processos judiciais, focado em segurança, performance e modernização.</p>
                </div>
                <span className="state-pill state-pill-active">Em Desenvolvimento</span>
              </header>

              <ul className="chip-list project-stack">
                <li className="chip-item">Java</li>
                <li className="chip-item">Spring Boot</li>
                <li className="chip-item">Angular</li>
                <li className="chip-item">APIs REST</li>
              </ul>

              <section className="project-details">
                <p className="project-summary">
                  Atuando na construção de uma plataforma segura para modernização do acesso à informação processual, orquestrando consultas complexas em bancos de dados judiciais isolados.
                </p>
                <button
                  type="button"
                  className="architecture-cta"
                  onClick={() => setIsConsultaModalOpen(true)}
                  aria-label="Ver diagrama de arquitetura do Sistema de Consulta Processual de 1ª Instância"
                >
                  Ver Diagrama de Arquitetura
                </button>
              </section>
            </article>

            <article className="project-card project-card-trf1-api" aria-label="API de Jurisprudência (TRF1)">
              <header className="project-header">
                <div>
                  <h3>API de Jurisprudência (TRF1)</h3>
                  <p className="project-tagline">Projeto interno de comunicação da Justiça entre TRF1 e CNJ para integração e distribuição de bases de dados de jurisprudência.</p>
                </div>
                <span className="state-pill state-pill-active">Em Operação</span>
              </header>

              <ul className="chip-list project-stack">
                <li className="chip-item">Java</li>
                <li className="chip-item">Spring Boot</li>
                <li className="chip-item">PostgreSQL</li>
                <li className="chip-item">REST API</li>
                <li className="chip-item">Alta Disponibilidade</li>
              </ul>

              <section className="project-details">
                <p className="project-summary">
                  Evolução de um fluxo interno crítico que antes rodava sobre Oracle com alto tempo de processamento, reestruturado para Java + PostgreSQL com foco em redução de latência, estabilidade e integração institucional.
                </p>
                <button
                  type="button"
                  className="architecture-cta"
                  onClick={() => setIsJurisModalOpen(true)}
                  aria-label="Ver diagrama de arquitetura da API de Jurisprudência"
                >
                  Ver Diagrama de Arquitetura
                </button>
              </section>
            </article>
          </div>

          <ArchitectureModal
            isOpen={isConsultaModalOpen}
            onClose={() => setIsConsultaModalOpen(false)}
            title="Sistema de Consulta Processual de 1ª Instância (TRF1)"
            subtitle="Projeto corporativo com arquitetura restrita"
          >
            <div className="modal-context-text">
              <p>
                Por se tratar de um sistema interno do TRF1, o diagrama completo de arquitetura nao pode ser publicado.
              </p>
              <ul className="info-list">
                <li>Backend em Java com separacao forte de camadas para regras juridicas criticas.</li>
                <li>Frontend em Angular para consulta processual com navegacao fluida e responsiva.</li>
                <li>Integracoes seguras com bases judiciais internas sem exposicao da infraestrutura legada.</li>
              </ul>
            </div>
          </ArchitectureModal>

          <ArchitectureModal
            isOpen={isJurisModalOpen}
            onClose={() => setIsJurisModalOpen(false)}
            title="API de Jurisprudência (TRF1)"
            subtitle="Comunicacao institucional TRF1 e CNJ"
          >
            <div className="modal-context-text">
              <p>
                Projeto interno de comunicacao da Justica entre TRF1 e CNJ para integracao e distribuicao de bases de jurisprudencia.
              </p>
              <ul className="info-list">
                <li>Migracao do fluxo legado em Oracle para arquitetura moderna em Java + PostgreSQL.</li>
                <li>Reducao expressiva de tempo de processamento em consultas jurisprudenciais.</li>
                <li>Operacao estavel com requisitos governamentais de disponibilidade e seguranca.</li>
              </ul>
              <ul className="signals-list">
                <li className="signal-pill">TRF1 + CNJ</li>
                <li className="signal-pill">Oracle para PostgreSQL</li>
                <li className="signal-pill">Baixa Latencia</li>
              </ul>
            </div>
          </ArchitectureModal>
        </section>

        <ExperienceSection />

        <AboutMe />

        <WorkNowSection />
      </main>
    </div>
  );
}
