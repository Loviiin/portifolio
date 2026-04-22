export default function WorkNowSection() {
  const GithubIcon = () => (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M12 2C6.48 2 2 6.59 2 12.25c0 4.53 2.87 8.37 6.85 9.73.5.09.68-.22.68-.49 0-.24-.01-1.04-.02-1.88-2.79.62-3.38-1.22-3.38-1.22-.46-1.2-1.11-1.52-1.11-1.52-.91-.64.07-.63.07-.63 1 .08 1.53 1.05 1.53 1.05.89 1.58 2.34 1.12 2.91.86.09-.66.35-1.12.63-1.37-2.23-.26-4.57-1.14-4.57-5.1 0-1.13.39-2.05 1.03-2.77-.1-.26-.45-1.31.1-2.73 0 0 .84-.28 2.75 1.06A9.34 9.34 0 0 1 12 6.85a9.3 9.3 0 0 1 2.5.35c1.9-1.34 2.75-1.06 2.75-1.06.54 1.42.2 2.47.1 2.73.64.72 1.03 1.64 1.03 2.77 0 3.97-2.35 4.83-4.59 5.08.36.32.67.95.67 1.92 0 1.39-.01 2.5-.01 2.84 0 .27.18.59.69.49A10.25 10.25 0 0 0 22 12.25C22 6.59 17.52 2 12 2z"
      />
    </svg>
  );

  const LinkedInIcon = () => (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M6.94 8.5A2.46 2.46 0 1 1 6.95 3.6a2.46 2.46 0 0 1-.01 4.91zM4.8 10.36h4.27V21H4.8V10.36zm6.68 0h4.1v1.45h.06c.57-1.03 1.97-2.12 4.05-2.12 4.34 0 5.14 2.93 5.14 6.73V21h-4.27v-4.53c0-1.08-.02-2.46-1.46-2.46-1.46 0-1.68 1.16-1.68 2.38V21h-4.27V10.36z"
      />
    </svg>
  );

  return (
    <section className="cta-section" id="contato" aria-labelledby="cta-title">
      <div className="cta-container">
        <div className="cta-content">
          <p className="section-eyebrow">Próximo Passo</p>
          <h2 id="cta-title">Vamos construir algo juntos?</h2>
          <p className="cta-subtitle">
            Estou aberto a oportunidades em backend resiliente, engenharia full stack, infraestrutura e DevOps.
            Se você tem um projeto desafiador ou quer conversar sobre tecnologia, me mande uma mensagem.
          </p>
        </div>

        <form action="https://formsubmit.co/a043ff81375d7d721b7e2a7ef74cb9a2" method="POST" className="contact-form">
          <input type="hidden" name="_subject" value="Novo contato do Portfólio!" />
          <input type="hidden" name="_captcha" value="false" />
          
          <div className="form-group">
            <input type="text" name="name" placeholder="Seu Nome" required className="form-input" />
          </div>
          <div className="form-group">
            <input type="email" name="email" placeholder="Seu Email" required className="form-input" />
          </div>
          <div className="form-group">
            <textarea name="message" placeholder="Sua Mensagem..." required rows="4" className="form-textarea"></textarea>
          </div>
          <button type="submit" className="cta-button cta-button-primary form-submit-btn">
            <span>✉️</span>
            Enviar Mensagem
          </button>
        </form>

        <div className="cta-actions">
          <a href="https://github.com/loviiin" target="_blank" rel="noopener noreferrer" className="cta-button cta-button-secondary">
            <span className="cta-icon cta-icon--github" aria-hidden="true"><GithubIcon /></span>
            GitHub
          </a>
          <a href="https://linkedin.com/in/ghvillareal" target="_blank" rel="noopener noreferrer" className="cta-button cta-button-secondary">
            <span className="cta-icon cta-icon--linkedin" aria-hidden="true"><LinkedInIcon /></span>
            LinkedIn
          </a>
        </div>

        <p className="cta-footer">
          Ou se preferir ligar/WhatsApp: <a href="tel:+5561996193663">+55 61 99619-3663</a>
        </p>
      </div>
    </section>
  );
}
