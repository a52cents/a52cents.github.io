export default function ExperienceTimeline({ items }) {
  return (
    <section className="experience-section" id="experience">
      <h2>Expérience Professionnelle</h2>
      <div className="card timeline-card">
        <div className="timeline">
          {items.map((item) => (
            <article className="timeline-item" key={`${item.company}-${item.period}`}>
              <span className={`timeline-dot ${item.active ? 'active' : ''}`} />
              <p className={`mono ${item.active ? 'accent-text' : ''}`}>{item.period}</p>
              <h3>{item.role}</h3>
              <strong>{item.company}</strong>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
