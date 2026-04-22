flowchart TD
  CLI[Argus CLI] --> DISCOVERY[Discovery Service]
  DISCOVERY --> NATS[NATS JetStream]
  NATS --> SCRAPER[Scraper Service]
  SCRAPER --> VISION[Vision Service]
  SCRAPER --> PARSER[Parser Service]
  PARSER --> POSTGRES[(PostgreSQL)]
  PARSER --> REDIS[(Redis Cache)]
  PARSER --> SEARCH[(Meilisearch)]
  VISION --> POSTGRES
  DISCOVERY -.-> PROM[Prometheus]
  PROM --> ALERT[Alertmanager]
