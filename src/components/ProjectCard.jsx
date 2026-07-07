function ProjectVisual({ project }) {
  const imageSrc = project.image
    ? `${import.meta.env.BASE_URL}${project.image}`
    : null;

  return (
    <div className="noise-img project-visual" aria-hidden="true">
      {imageSrc ? (
        <img
          className="project-visual__image"
          src={imageSrc}
          alt=""
          loading="lazy"
        />
      ) : null}

      {!imageSrc && project.visual === 'kadr' ? (
        <div className="mock-window mock-kadr">
          <div className="mock-kadr__sidebar">
            <span />
            <i />
            <i className="active" />
            <i />
          </div>
          <div className="mock-kadr__player">
            <b />
          </div>
        </div>
      ) : null}

      {!imageSrc && project.visual === 'skyquest' ? (
        <div className="mock-window mock-skyquest">
          <div className="star-grid">
            <span />
            <span />
            <span className="accent" />
            <span />
            <span className="accent" />
            <span />
          </div>
        </div>
      ) : null}

      {!imageSrc && project.visual === 'bissapmaker' ? (
        <div className="mock-window mock-form">
          <span className="short" />
          <span />
          <span className="tiny" />
          <span className="active" />
        </div>
      ) : null}
    </div>
  );
}

export default function ProjectCard({ project, featured = false }) {
  return (
    <article className={`card project-card ${featured ? 'project-card--featured' : ''}`}>
      <ProjectVisual project={project} />

      <div className="project-card__body">
        <div className="project-card__meta">
          <span className="mono project-tag">{project.tag}</span>
          <span className="mono project-muted">{project.meta}</span>
        </div>

        <h3>{project.name}</h3>
        <p>{project.description}</p>

        <div className="chip-list">
          {project.stack.map((item) => (
            <span className="mono" key={item}>{item}</span>
          ))}
        </div>

        {project.links.length > 0 ? (
          <div className="project-links">
            {project.links.map((link) => (
              <a href={link.href} key={link.href} target="_blank" rel="noreferrer">
                <span className="tiny-dot" />
                {link.label}
              </a>
            ))}
          </div>
        ) : null}
      </div>
    </article>
  );
}
