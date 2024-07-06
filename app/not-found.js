import Link from 'next/link'

export default function NotFound() {
  return <div className='bg-blue-500 flex justify-center item-center mx-auto my-auto py-80'>
      <h1>Not found – 404!</h1>
      <div className='my-10'>
        <Link href="/">Go back to Home</Link>
      </div>
  </div>
}