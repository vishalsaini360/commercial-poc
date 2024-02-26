import ErrorBoundary from '@/Components/Layouts/ErrorBoundary'
import dynamic from 'next/dynamic'
const Homepage = dynamic(() => import('../Components/Home/Index'))

export default function Home() {
  return (
    <>
      <ErrorBoundary>
        <Homepage /> 
      </ErrorBoundary>
    </>
  )
}
