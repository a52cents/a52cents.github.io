import Sidebar from './Sidebar';
import ProjectCard from './ProjectCard';
import StackMatrix from './StackMatrix';
import ExperienceTimeline from './ExperienceTimeline';
import ContactPanel from './ContactPanel';

function Header({ profile }) {
  return (
    <header className="topbar">
      <div className="topbar__inner">
        <a className="brand" href="#about" aria-label="Retour en haut de page">
          <span className="pulse-dot" />
          {profile.name}
        </a>

        <nav className="nav" aria-label="Navigation principale">
          <a className="nav-item active" href="#about">À propos</a>
          <a className="nav-item" href="#projects">Projets</a>
          <a className="nav-item" href="#experience">Expérience</a>
          <a className="nav-item" href="#stack">Stack</a>
        </nav>

        <a className="btn btn-secondary topbar__contact" href={`mailto:${profile.email}`}>Me contacter</a>
      </div>
    </header>
  );
}

function Hero({ profile }) {
  return (
    <section className="hero" id="about">
      <div className="hero__content">
        <div className="mono bootline">
          <span>{'// Portfolio.html'}</span>
          <span>— Initialized successfully</span>
        </div>

        <h1>
          {profile.title}<br />
          <span>{profile.subtitle}</span>
        </h1>

        <p>{profile.summary}</p>

        <div className="hero__actions">
          <a className="btn btn-primary" href="#projects">Voir les projets</a>
          <a className="btn btn-secondary btn-github" href={profile.github} target="_blank" rel="noreferrer">
            <svg aria-hidden="true" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.79-.26.79-.58v-2.23c-3.34.73-4.03-1.42-4.03-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.49 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.65 1.65.24 2.87.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.19.69.8.58A12.01 12.01 0 0 0 24 12c0-6.63-5.37-12-12-12Z" />
            </svg>
            GitHub
          </a>
        </div>
      </div>

      <Sidebar profile={profile} />
    </section>
  );
}

function ProjectsSection({ projects }) {
  const mainProjects = projects.filter((project) => project.group === 'main');
  const labs = projects.filter((project) => project.group === 'lab');

  return (
    <section className="section projects-section" id="projects" aria-labelledby="projects-title">
      <div className="section__heading">
        <div>
          <h2 id="projects-title">Projets</h2>
          <p>Sélection de réalisations et d’expériences interactives.</p>
        </div>
      </div>

      <section className="project-group" aria-labelledby="main-projects-title">
        <div className="project-group__heading">
          <h3 id="main-projects-title">Projets principaux</h3>
          <span className="mono">{String(mainProjects.length).padStart(2, '0')}</span>
        </div>

        <div className="project-grid">
          {mainProjects.map((project) => (
            <ProjectCard project={project} key={project.name} />
          ))}
        </div>
      </section>

      {labs.length > 0 ? (
        <section className="project-group" aria-labelledby="labs-title">
          <div className="project-group__heading">
            <h3 id="labs-title">Expériences / Labs</h3>
            <span className="mono">{String(labs.length).padStart(2, '0')}</span>
          </div>

          <div className="project-grid">
            {labs.map((project) => (
              <ProjectCard project={project} key={project.name} />
            ))}
          </div>
        </section>
      ) : null}
    </section>
  );
}

function EducationPanel({ education }) {
  return (
    <section className="side-section" id="education">
      <h2>Formation</h2>
      <div className="card education-card">
        {education.map((item) => (
          <article className="education-item" key={item.title}>
            <p className={`mono ${item.active ? 'accent-text' : ''}`}>{item.period}</p>
            <h3>{item.title}</h3>
            <span>{item.school}</span>
          </article>
        ))}
      </div>
    </section>
  );
}

export default function Layout({ profile, projects, stack, experience, education }) {
  return (
    <>
      <Header profile={profile} />

      <main className="page-shell">
        <Hero profile={profile} />
        <ProjectsSection projects={projects} />

        <div className="content-grid">
          <ExperienceTimeline items={experience} />

          <div className="right-column">
            <StackMatrix stack={stack} />
            <EducationPanel education={education} />
          </div>
        </div>

        <ContactPanel profile={profile} />
      </main>
    </>
  );
}
