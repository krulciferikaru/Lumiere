import { useReveal } from '../hooks/useReveal'

function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...props }) {
  const ref = useReveal()

  return (
    <Tag ref={ref} className={`reveal ${className}`} style={{ '--reveal-delay': `${delay}ms` }} {...props}>
      {children}
    </Tag>
  )
}

export default Reveal
