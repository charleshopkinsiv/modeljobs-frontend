
import Link from 'next/link'
import Header from '../../../components/header';
import ModelFeed from '../../../features/models/model-feed';


export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function Page() {
  return (
    <>
    <Header />
    <div className="bg-dark">
      <div className="py-5 container-fluid d-flex justify-content-center align-items-center">
        
        <div>
          <p class="h2 text-center text-light">Models For Hire</p>
          <div class="text-center">
            <Link href="/job/create" class="btn btn-primary">Become a Model</Link>
          </div>
        </div>
      </div>
      <div className="container">
        {<ModelFeed />}
      </div>
    </div>
    </>
  )
}