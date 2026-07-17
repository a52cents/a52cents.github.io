import { getProjectPrimaryLink } from '../utils/projectLinks';

function ProjectVisual({ project }) {
  const primaryLink = getProjectPrimaryLink(project);
  const imageSrc = project.image
    ? `${import.meta.env.BASE_URL}${project.image}`
    : null;

  const content = (
    <>
      {imageSrc ? (
        <img
          className="project-visual__image"
          src={imageSrc}
          alt={project.imageAlt}
          width={project.imageWidth}
          height={project.imageHeight}
          loading="lazy"
          decoding="async"
        />
      ) : (
        <span className="mono project-visual__placeholder">Aperçu indisponible</span>
      )}

      <span className="project-visual__overlay" aria-hidden="true">
        Visiter le projet <span>↗</span>
      </span>
    </>
  );

  if (!primaryLink) {
    return <div className="noise-img project-visual">{content}</div>;
  }

  return (
    <a
      className="noise-img project-visual project-visual__link"
      href={primaryLink.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visiter ${project.name} dans un nouvel onglet`}
    >
      {content}
    </a>
  );
}

export default function ProjectCard({ project }) {
  return (
    <article className="card project-card">
      <ProjectVisual project={project} />

      <div className="project-card__body">
        <div className="project-card__meta">
          <span className="mono project-tag">{project.tag}</span>
          <span className="mono project-muted">{project.meta}</span>
        </div>

        <h4>{project.name}</h4>
        <p>{project.description}</p>

        <ul className="project-highlights" aria-label={`Points forts de ${project.name}`}>
          {project.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>

        <div className="chip-list project-stack" aria-label={`Technologies de ${project.name}`}>
          {project.stack.map((item) => (
            <span className="mono" key={item}>{item}</span>
          ))}
        </div>

        {project.links.length > 0 ? (
          <nav className="project-links" aria-label={`Liens du projet ${project.name}`}>
            {project.links.map((link) => (
              <a
                className={link.type === 'site' ? 'project-link project-link--primary' : 'project-link'}
                href={link.href}
                key={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${link.label} de ${project.name} dans un nouvel onglet`}
              >
                <span className="tiny-dot" aria-hidden="true" />
                {link.label}
              </a>
            ))}
          </nav>
        ) : null}
      </div>
    </article>
  );
}
