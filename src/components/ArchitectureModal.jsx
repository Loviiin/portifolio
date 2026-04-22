import { useEffect } from 'react';
import { createPortal } from 'react-dom';

export default function ArchitectureModal({ isOpen, onClose, title, subtitle, children }) {
  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return createPortal(
    <div className="architecture-modal-overlay" role="dialog" aria-modal="true" aria-label={title} onClick={onClose}>
      <div className="architecture-modal" onClick={(event) => event.stopPropagation()}>
        <header className="architecture-modal-header">
          <div>
            <h3>{title}</h3>
            {subtitle ? <p>{subtitle}</p> : null}
          </div>
          <button type="button" className="architecture-modal-close" onClick={onClose} aria-label="Fechar modal">
            <span aria-hidden="true">×</span>
          </button>
        </header>
        <div className="architecture-modal-body">{children}</div>
      </div>
    </div>,
    document.body
  );
}
