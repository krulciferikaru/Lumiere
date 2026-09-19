function SkillGroup({ title, skills }) {
  return (
    <div>
      <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-black/40">
        {title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span key={skill} className="skill-pill">
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}

export default SkillGroup
