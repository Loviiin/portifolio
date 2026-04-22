export default function WorkNowSection() {
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

        <form action="https://formsubmit.co/contato@ghvillareal.com" method="POST" className="contact-form">
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
            <span>🐙</span>
            GitHub
          </a>
          <a href="https://linkedin.com/in/ghvillareal" target="_blank" rel="noopener noreferrer" className="cta-button cta-button-secondary">
            <span>💼</span>
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
