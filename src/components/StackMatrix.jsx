export default function StackMatrix({ stack }) {
  return (
    <section className="side-section" id="stack">
      <h2>Tech Stack</h2>
      <div className="card stack-card">
        {Object.entries(stack).map(([group, items]) => (
          <div className="stack-group" key={group}>
            <p className="mono">{group}</p>
            <div className="chip-list">
              {items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
