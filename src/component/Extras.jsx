const skills = ["React","Next.js","TypeScript","JavaScript","SCSS","Figma","UI/UX","REST API","Responsive Design","Git"];
export function Stats() {
  return (
    <div className="stats">
      <div><b>5+</b><span>Years of experience</span></div>
      <div><b>10+</b><span>Projects</span></div>
      <div><b>2</b><span>Degrees</span></div>
      <div><b>AR · EN</b><span>Languages</span></div>
    </div>
  );
}
export function Marquee() {
  const row = [...skills, ...skills];
  return <div className="marquee" aria-hidden="true"><div>{row.map((s, i) => <span key={i}>{s} ✦</span>)}</div></div>;
}
