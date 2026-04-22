import { useMemo, useState } from 'react';
import StackChips from './StackChips';
import MermaidDiagram from './MermaidDiagram';
import ArchitectureModal from './ArchitectureModal';

export default function ProjectCard({ project }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const architectureState = useMemo(
    () => project.states.engineering || Object.values(project.states)[0],
    [project.states]
  );

  return (
    <>
      <article className="project-card" data-project-id={project.id} aria-label={`Projeto ${project.name}`}>
        <header className="project-header">
          <div>
            <h3>{project.name}</h3>
            <p className="project-tagline">{project.tagline}</p>
          </div>
          <span className={`state-pill ${project.statusTone === 'muted' ? 'state-pill-muted' : 'state-pill-active'}`}>
            {project.statusLabel}
          </span>
        </header>

        <StackChips items={project.stack} className="project-stack" />

        <section className="project-details" aria-live="polite">
          <p className="project-summary">{architectureState.summary}</p>
          <button
            type="button"
            className="architecture-cta"
            onClick={() => setIsModalOpen(true)}
            aria-label={`Ver diagrama de arquitetura de ${project.name}`}
          >
            Ver Diagrama de Arquitetura
          </button>
        </section>

        <footer className="project-footer">
          <div className="project-actions">
            {project.demoUrl ? (
              <a className="demo-cta" href={project.demoUrl} target="_blank" rel="noreferrer">
                Abrir demo
              </a>
            ) : null}
            <a className="inline-link" href={project.githubUrl} target="_blank" rel="noreferrer">
              Ver no GitHub
            </a>
          </div>
        </footer>
      </article>

      <ArchitectureModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={`${project.name} · Arquitetura`}
        subtitle="Visualizacao expandida para analise tecnica"
      >
        <div className="architecture-viewer" role="group" aria-label={`Preview da arquitetura de ${project.name}`}>
          {architectureState.diagram ? (
            <MermaidDiagram chart={architectureState.diagram} />
          ) : architectureState.media ? (
            <a
              className="preview-link"
              href={architectureState.media}
              target="_blank"
              rel="noreferrer"
              aria-label={`Abrir arquitetura de ${project.name} em nova guia`}
            >
              <img
                className="preview-image"
                src={architectureState.media}
                alt={architectureState.mediaAlt}
                loading="lazy"
                decoding="async"
              />
            </a>
          ) : (
            <p className="modal-muted">Este projeto nao possui diagrama publico disponivel.</p>
          )}
        </div>

        <div className="modal-detail-grid">
          <div>
            <h4>Informacoes</h4>
            <ul className="info-list">
              {architectureState.info.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Signals</h4>
            <ul className="signals-list">
              {architectureState.signals.map((signal) => (
                <li key={signal} className="signal-pill">
                  {signal}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </ArchitectureModal>
    </>
  );
}
