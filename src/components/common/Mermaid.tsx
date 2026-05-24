import { useEffect, useRef } from 'react';
import mermaid from 'mermaid';

mermaid.initialize({
  startOnLoad: true,
  theme: 'base',
  themeVariables: {
    primaryColor: '#0d6efd',
    primaryTextColor: '#fff',
    primaryBorderColor: '#0d6efd',
    lineColor: '#333',
    secondaryColor: '#6c757d',
    tertiaryColor: '#f8f9fa',
  }
});

interface MermaidProps {
  chart: string;
}

const Mermaid = ({ chart }: MermaidProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current && chart) {
      mermaid.contentLoaded();
      // Force render
      const renderDiagram = async () => {
        try {
          const { svg } = await mermaid.render(`mermaid-${Math.random().toString(36).substr(2, 9)}`, chart);
          if (ref.current) {
            ref.current.innerHTML = svg;
          }
        } catch (error) {
          console.error('Mermaid render error:', error);
        }
      };
      renderDiagram();
    }
  }, [chart]);

  return (
    <div className="mermaid-container d-flex justify-content-center bg-light p-4 rounded-4 overflow-auto border" ref={ref}>
      {/* Mermaid will inject SVG here */}
    </div>
  );
};

export default Mermaid;
