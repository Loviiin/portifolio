# ghvillareal.com - Technical Portfolio

Landing page de portfolio tecnico com visual dark neon e foco em engenharia backend/infra.

## Stack
- React 18
- Vite 5

## Como rodar
1. Instale Node.js 20+ e npm.
2. Instale dependencias:
   - `npm install`
3. Ambiente de desenvolvimento:
   - `npm run dev`
4. Build de producao:
   - `npm run build`
5. Preview local do build:
   - `npm run preview`

## Estrutura
- `src/components/ProjectCard.jsx`: card principal com estados `Impact`, `Engineering`, `Validation`.
- `src/data/projects.js`: dados mockados dos projetos e conteudo por estado.
- `src/styles/theme.css`: tema, responsividade e interacoes (hover/focus/active).
- `public/media/*.svg`: previews visuais e diagramas.

## Acessibilidade
- Botões de navegacao com `aria-label`.
- Foco visivel com `:focus-visible`.
- Conteudo dinâmico com `aria-live="polite"`.

## Deploy recomendado
Cloudflare Pages com dominio `ghvillareal.com`.
