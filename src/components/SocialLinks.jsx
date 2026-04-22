export default function SocialLinks() {
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

  const links = [
    {
      label: 'contato@ghvillareal.com',
      url: '#contato',
      icon: '✉️',
      iconClass: ''
    },
    {
      label: 'GitHub',
      url: 'https://github.com/loviiin',
      icon: <GithubIcon />,
      iconClass: 'social-icon--github'
    },
    {
      label: 'LinkedIn',
      url: 'https://linkedin.com/in/ghvillareal',
      icon: <LinkedInIcon />,
      iconClass: 'social-icon--linkedin'
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
            <span className={`social-icon ${link.iconClass}`.trim()}>{link.icon}</span>
            <span className="social-label">{link.label}</span>
          </a>
        );
      })}
    </div>
  );
}
