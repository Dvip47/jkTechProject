import { useRouter } from 'next/router'

const BackButton = ({ label = 'Back', className = '' }) => {
  const router = useRouter()

  const backToHome = () => {
    router.push('/dashboard')
  }

  return (
    <h3 
    onClick={() => backToHome(router)}
    className="inline-flex items-center gap-2 px-4 py-2 bg-pink-100 text-pink-700 rounded-full shadow-md hover:bg-pink-200 hover:shadow-lg transition duration-300 cursor-pointer font-medium"
  >
    ⬅️ <span className="tracking-wide">Back</span>
  </h3>  
  )
}

export default BackButton
