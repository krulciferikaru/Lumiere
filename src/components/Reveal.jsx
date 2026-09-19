import { useReveal } from '../hooks/useReveal'

function Reveal({ as: Tag = 'div', delay = 0, className = '', children }) {
  const [ref, isVisible] = useReveal()

  return (
    <Tag
      ref={ref}
      className={`reveal ${isVisible ? 'reveal-visible' : ''} ${className}`}
      style={{ transitionDelay: isVisible ? `${delay}ms` : '0ms' }}
    >
      {children}
    </Tag>
  )
}

export default Reveal
