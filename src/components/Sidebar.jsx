export default function Sidebar({ profile }) {
  return (
    <aside className="card system-card" aria-label="Informations rapides">
      <div className="system-card__header">
        <span className="mono">System Info</span>
        <span className="pulse-dot" />
      </div>

      <div className="system-card__rows">
        <div>
          <span>Localisation</span>
          <strong>{profile.location}</strong>
        </div>
        <div>
          <span>Langues</span>
          <strong>{profile.languagesLabel}</strong>
        </div>
        <div>
          <span>Mobilité</span>
          <strong>{profile.mobility}</strong>
        </div>
        <div>
          <span>Statut</span>
          <strong className="accent-text">{profile.status}</strong>
        </div>
      </div>

      <div className="system-card__skills">
        <p className="mono">Soft Skills</p>
        <div className="chip-list chip-list--tight">
          {profile.softSkills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </div>
    </aside>
  );
}
