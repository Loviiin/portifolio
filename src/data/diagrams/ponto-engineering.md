%%{init: {'theme': 'dark', 'flowchart': {'nodeSpacing': 110, 'rankSpacing': 140}, 'themeVariables': {'fontSize': '18px'}}}%%
flowchart TD
  subgraph Client[Frontend]
    WEB[Web Frontend]
    MOBILE[Mobile Client]
  end

  subgraph Gateway[Nginx]
    NGINX[Nginx Edge]
  end

  subgraph Services[Go API Domains]
    AUTH[Auth and JWT]
    USUARIO[Usuario]
    PONTO[Ponto]
    EMPRESA[Empresa]
    REL[Relatorio]
    SCHED[Scheduler]
    AUDIT[Audit Log]
  end

  subgraph Data[Data Layer]
    DB[(PostgreSQL)]
    REDIS[(Redis)]
  end

  WEB --> NGINX
  MOBILE --> NGINX
  NGINX --> AUTH
  AUTH --> USUARIO
  AUTH --> PONTO
  AUTH --> EMPRESA
  AUTH --> REL
  PONTO --> DB
  REL --> DB
  PONTO --> REDIS
  SCHED --> AUDIT
  AUDIT --> DB
