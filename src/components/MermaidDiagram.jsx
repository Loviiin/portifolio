import { useEffect, useId, useState } from 'react';
import mermaid from 'mermaid';

let mermaidReady = false;

function initializeMermaid() {
  if (mermaidReady) {
    return;
  }

  mermaid.initialize({
    startOnLoad: false,
    theme: 'dark',
    securityLevel: 'loose',
    fontFamily: 'Manrope, Segoe UI, sans-serif',
    flowchart: {
      useMaxWidth: true,
      nodeSpacing: 72,
      rankSpacing: 92
    },
    themeVariables: {
      background: '#081522',
      primaryColor: '#11263b',
      primaryTextColor: '#eef8ff',
      primaryBorderColor: '#5dd3ff',
      lineColor: '#7ce9ff',
      secondaryColor: '#0f2235',
      tertiaryColor: '#0b1727',
      fontSize: '12px'
    }
  });

  mermaidReady = true;
}

export default function MermaidDiagram({ chart }) {
  const [svg, setSvg] = useState('');
  const uniqueId = useId().replace(/:/g, '');

  useEffect(() => {
    let cancelled = false;

    async function renderDiagram() {
      if (!chart) {
        return;
      }

      initializeMermaid();
      const renderId = `mermaid-${uniqueId}`;
      const result = await mermaid.render(renderId, chart);

      if (!cancelled) {
        setSvg(result.svg);
      }
    }

    renderDiagram();

    return () => {
      cancelled = true;
    };
  }, [chart, uniqueId]);

  if (!chart) {
    return null;
  }

  if (!svg) {
    return <div className="mermaid-loading">Carregando arquitetura...</div>;
  }

  return <div className="mermaid-diagram" dangerouslySetInnerHTML={{ __html: svg }} />;
}
