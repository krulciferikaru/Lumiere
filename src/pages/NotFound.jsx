import { Link } from 'react-router'
import RansomText from '../components/RansomText'

function NotFound() {
  return (
    <main className="on-dark flex min-h-svh flex-col items-start justify-center bg-ink px-4 sm:px-6">
      <div className="mx-auto w-full max-w-6xl">
        <h1 className="text-5xl sm:text-7xl">
          <RansomText text="Page not found" />
        </h1>
        <p className="mt-6 max-w-md text-white/70">This page doesn't exist or has moved.</p>
        <Link to="/" className="btn-slab btn-primary mt-10">
          <span>Back to home</span>
        </Link>
      </div>
    </main>
  )
}

export default NotFound
