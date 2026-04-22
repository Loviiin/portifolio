export default function SocialLinks() {
  const links = [
    {
      label: 'contato@ghvillareal.com',
      url: '#contato',
      icon: '✉️'
    },
    {
      label: 'GitHub',
      url: 'https://github.com/loviiin',
      icon: '🐙'
    },
    {
      label: 'LinkedIn',
      url: 'https://linkedin.com/in/ghvillareal',
      icon: '💼'
    }
  ];

  return (
    <div className="social-links">
      {links.map((link) => {
        const isAnchor = link.url.startsWith('#');
        return (
          <a
            key={link.label}
            href={link.url}
            target={isAnchor ? undefined : '_blank'}
            rel={isAnchor ? undefined : 'noopener noreferrer'}
            title={link.label}
            className="social-link"
            aria-label={link.label}
          >
            <span className="social-icon">{link.icon}</span>
            <span className="social-label">{link.label}</span>
          </a>
        );
      })}
    </div>
  );
}
