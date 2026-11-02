import { createContext, useContext } from 'react'

export const TransitionContext = createContext(null)

// Returns go(to): navigate with the Persona-style page transition
export function useTransitionNavigate() {
  return useContext(TransitionContext)
}
