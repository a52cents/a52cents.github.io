export default function ContactPanel({ profile }) {
  return (
    <footer className="footer">
      <p className="mono">© 2026 {profile.name} — Portfolio System</p>
      <div className="footer__links mono">
        <a href={`mailto:${profile.email}`}>{profile.email}</a>
        <a href={profile.github} target="_blank" rel="noreferrer">github.com/{profile.handle}</a>
      </div>
    </footer>
  );
}
