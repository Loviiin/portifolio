import argusEngineeringDiagram from './diagrams/argus-engineering.md?raw';
import pontoEngineeringDiagram from './diagrams/ponto-engineering.md?raw';
import voidEngineEngineeringDiagram from './diagrams/voidengine-engineering.md?raw';

export const stackChips = ['Go', 'Java', 'TypeScript', 'Docker', 'Nginx', 'Redis', 'NATS'];

export const projects = [
  {
    id: 'argus',
    name: 'Project Argus',
    tagline: 'Plataforma distribuida de OSINT para extracao, processamento e indexacao em larga escala.',
    githubUrl: 'https://github.com/loviiin/Project-Argus',
    statusLabel: 'Em Desenvolvimento',
    statusTone: 'active',
    stack: ['Go', 'Python', 'NATS JetStream', 'Redis', 'PostgreSQL', 'Docker', 'PyTorch'],
    states: {
      impact: {
        label: 'Impact',
        media: '/media/argus-impact.svg',
        mediaAlt: 'Preview do impacto do Project Argus',
        summary:
          'Uma plataforma distribuida de OSINT focada na extracao, processamento e indexacao de dados do TikTok em larga escala.',
        info: [
          'Arquitetura baseada em microsservicos para Discovery, Scraper e Parser.',
          'Mensageria assíncrona via NATS JetStream para resiliência e alta disponibilidade.',
          'Pipeline preparado para lidar com extração e indexação em grande volume.'
        ],
        signals: ['OSINT em escala', 'Async pipeline', 'High availability']
      },
      engineering: {
        label: 'Engineering',
        media: '/media/arquitetura-argus.png',
        mediaAlt: 'Diagrama de engenharia do Project Argus',
        diagram: argusEngineeringDiagram,
        summary:
          'Idealizacao, desenho da arquitetura e desenvolvimento ponta a ponta com microsservicos em Go, pipeline assíncrono e serviço dedicado de visão computacional em Python.',
        info: [
          'Microsserviços Discovery, Scraper e Parser em Go.',
          'Scraping com go-rod e automacao de navegador.',
          'Modelos em PyTorch para resolver captchas de rotação.'
        ],
        signals: ['Go + Python', 'NATS JetStream', 'PyTorch CV']
      },
      validation: {
        label: 'Validation',
        summary:
          'Pipeline desenhado para lidar com gargalos reais de engenharia de dados, com deduplicacao, cache e persistencia confiavel.',
        info: [
          'Redis e PostgreSQL para cache, deduplicacao e armazenamento estruturado.',
          'Docker para empacotamento e reproducao do ambiente.',
          'Modelo de Visão Computacional treinado para captchas de rotação.'
        ],
        signals: ['Dedup', 'Cache', 'Bot mitigation'],
        codeSnippet: `func RunDiscovery(ctx context.Context, bus nats.JetStreamContext) error {
  subject := "argus.discovery.events"
  for _, source := range sources {
    payload := buildPayload(source)
    if _, err := bus.Publish(subject, payload); err != nil {
      return fmt.Errorf("publish discovery event: %w", err)
    }
  }
  return nil
}`
      }
    }
  },
  {
    id: 'ponto',
    name: 'Meu Ponto (Nexora)',
    tagline: 'Plataforma SaaS para ponto eletronico e RH com multi-inquilino, geolocalizacao e automacao operacional.',
    githubUrl: 'https://github.com/loviiin/ponto-api-go',
    demoUrl: 'https://nexora-app.vercel.app/demo',
    statusLabel: 'Em Pausa',
    statusTone: 'muted',
    stack: ['Go', 'GORM', 'JWT RBAC', 'Vue 3', 'Vite', 'Bootstrap', 'Cypress', 'Redis', 'PostgreSQL', 'Docker'],
    states: {
      impact: {
        label: 'Impact',
        media: '/media/ponto-impact.svg',
        mediaAlt: 'Preview de impacto do Meu Ponto (Nexora)',
        summary:
          'Uma plataforma SaaS completa para gestao de ponto eletronico e recursos humanos, com fluxo de jornada, banco de horas, justificativas e operacao multi-inquilino.',
        info: [
          'Registro de jornada com validacao de geolocalizacao e cercas virtuais.',
          'Gestao automatizada de banco de horas e aprovacao de justificativas.',
          'Administracao por empresas, localidades e contratos com isolamento por tenant.'
        ],
        signals: ['SaaS RH', 'Multi-tenant', 'Geo fencing']
      },
      engineering: {
        label: 'Engineering',
        media: '/media/arquitetura-ponto.png',
        mediaAlt: 'Diagrama de engenharia do Meu Ponto (Nexora)',
        diagram: pontoEngineeringDiagram,
        summary:
          'Arquitetura desenhada com principios de DDD no backend em Go, com camadas de cache, middlewares de seguranca por roles/permissoes e rotinas agendadas para operacao continua.',
        info: [
          'Backend Go com GORM, JWT e RBAC para controle de acesso.',
          'Frontend Vue 3 + Vite + Bootstrap com dashboards, calendarios e mapas.',
          'Integracoes com Cloudinary, ViaCEP/BrasilAPI, geolocalizacao e SMTP.'
        ],
        signals: ['DDD', 'JWT RBAC', 'Redis cache']
      },
      validation: {
        label: 'Validation',
        summary:
          'Desenvolvimento full-stack ponta a ponta com foco em performance, estabilidade e confiabilidade operacional para fluxos criticos de RH.',
        info: [
          'Algoritmos de calculo de carga horaria e distancia geografica no backend.',
          'Testes automatizados E2E com Cypress para estabilidade do fluxo do usuario.',
          'Estrategia de performance com Redis e testes de carga com k6.'
        ],
        signals: ['k6', 'Cypress E2E', 'Performance tuning'],
        codeSnippet: `router.GET("/api/v1/pontos", authMiddleware.Require("ponto:read"), func(c *gin.Context) {
  filtros := parseFiltros(c)
  resposta, err := service.ListarRegistros(c.Request.Context(), filtros)
  if err != nil {
    c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
    return
  }
  c.JSON(http.StatusOK, resposta)
})`
      }
    }
  },
  {
    id: 'voidengine',
    name: 'VoidEngine',
    tagline: 'Framework TUI para jogos multiplayer via SSH com arquitetura modular, concorrencia nativa e renderizacao 3D ASCII.',
    githubUrl: 'https://github.com/loviiin/voidengine',
    statusLabel: 'Em Desenvolvimento',
    statusTone: 'active',
    stack: ['Go', 'Goroutines', 'Channels', 'Bubble Tea', 'Wish SSH', 'WebSocket Ready', 'OpenSimplex 3D', 'ASCII 3D'],
    states: {
      impact: {
        label: 'Impact',
        media: '/media/voidengine-impact.svg',
        mediaAlt: 'Preview de impacto do VoidEngine',
        summary:
          'Um framework TUI inovador em Go para jogos multiplayer operados inteiramente por terminais remotos via SSH, com foco em modularidade e contratos de interface rigidos entre engine e modulos plugaveis.',
        info: [
          'Estado bifurcado: separacao entre camera local do jogador e estado global absoluto do mundo.',
          'Concorrencia nativa com goroutines e channels para suportar dezenas de jogadores sem travamentos.',
          'Renderizacao procedural de mundos 3D em ASCII com projecao de perspectiva por sessao.'
        ],
        signals: ['SSH multiplayer', 'State bifurcado', 'ASCII 3D procedural']
      },
      engineering: {
        label: 'Engineering',
        media: '/media/arquitetura-void.png',
        mediaAlt: 'Diagrama de engenharia do VoidEngine',
        diagram: voidEngineEngineeringDiagram,
        summary:
          'Engenharia completa da arquitetura v2.0 em Go, com contratos rigidos de GameModule, transporte abstrato desacoplado de SSH e fluxo assincrono governado por um Arbitro Central para broadcast seletivo.',
        info: [
          'Bubble Tea seguindo The Elm Architecture para organizacao previsivel do estado e eventos.',
          'Rasterizacao esferica em coordenadas cartesianas para evitar compressao nos polos do terreno procedural.',
          'Projecao de perspectiva e Z Buffer individual por sessao para renderizacao eficiente no terminal.'
        ],
        signals: ['GameModule contracts', 'Central arbiter', 'Transport abstraction']
      },
      validation: {
        label: 'Validation',
        summary:
          'Atuacao backend e arquitetura com foco em performance concorrente, estabilidade do loop global e atualizacao seletiva de telas para eliminar redesenho desnecessario.',
        info: [
          'Modelagem de interfaces estritas para impedir chamadas indevidas de modulos ao core.',
          'Calculo de deltas de estado no Arbitro Central para broadcast apenas aos jogadores afetados.',
          'Logica matematica do modulo 3D para converter ruido procedural em terreno esferico sem distorcao polar.'
        ],
        signals: ['Delta broadcast', 'No full redraw', 'Concurrency safe'],
        codeSnippet: `func (w *World) ApplySnapshot(snapshot Snapshot) {
  for id, state := range snapshot.Entities {
    entity := w.entities[id]
    entity.Position = state.Position
    entity.Velocity = state.Velocity
    w.entities[id] = entity
  }
}`
      }
    }
  }
];
