import StackChips from './StackChips';

export default function AboutMe() {
  const skills = [
    'Go',
    'Java',
    'Spring Boot',
    'TypeScript',
    'React',
    'Angular',
    'Vue 3',
    'Python',
    'PyTorch',
    'PostgreSQL',
    'Redis',
    'Docker',
    'Linux',
    'Git'
  ];

  const highlights = [
    {
      icon: '📚',
      label: 'Educação',
      content: 'Último semestre de Bacharelado em Ciência da Computação @ CEUB'
    },
    {
      icon: '⚙️',
      label: 'Especialização',
      content: 'Full Stack com foco em backend resiliente, infraestrutura e DevOps'
    },
    {
      icon: '🐧',
      label: 'Ambiente',
      content: 'Trabalho em Linux. Configuro ambientes de desenvolvimento, servidores e utilizo ferramentas open source.'
    },
    {
      icon: '🤖',
      label: 'Interesses',
      content: 'DevOps, DevSecOps, Machine Learning e arquitetura de sistemas distribuídos'
    }
  ];

  return (
    <section className="about-section" id="sobre" aria-labelledby="about-title">
      <div className="about-header">
        <p className="section-eyebrow">Sobre</p>
        <h2 id="about-title">Quem é Guilherme?</h2>
        <p className="section-subtitle">
          Desenvolvedor Full Stack com foco em soluções de alta performance, sistemas distribuídos e produtos que importam.
        </p>
      </div>

      <div className="about-content">
        <div className="about-highlights">
          {highlights.map((item) => (
            <article key={item.label} className="highlight-card">
              <span className="highlight-icon">{item.icon}</span>
              <div>
                <h3>{item.label}</h3>
                <p>{item.content}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="about-stack">
          <h3>Arsenal Técnico</h3>
          <p className="stack-description">
            Stack principal que uso para construir produtos, APIs, infraestrutura e automação:
          </p>
          <StackChips items={skills} className="about-stack-chips" />
        </div>

        <div className="about-cta">
          <p>
            Procuro trabalhar em projetos que façam diferença: desde sistemas críticos governamentais até produtos SaaS inovadores.
            <br />
            <strong>Vamos construir algo incrível?</strong>
          </p>
        </div>
      </div>
    </section>
  );
}
