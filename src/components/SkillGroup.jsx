function SkillGroup({ title, skills }) {
  return (
    <div>
      <h3 className="mb-3 font-display text-lg uppercase tracking-wide text-crimson">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span key={skill} className="skill-chip">
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}

export default SkillGroup
