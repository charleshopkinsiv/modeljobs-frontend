import Image from 'next/image'
import styles from './page.module.css'
import Head from 'next/head';
import Link from 'next/link'


export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function Page() {
  return (
    <div className="vh-100 container-fluid d-flex justify-content-center align-items-center">
      
      <div>
        <p class="h2 text-center">Model Jobs</p>
        <p class="text-center">The place for models to find hot jobs!</p>
        <div class="text-center">
          <Link className="btn btn-primary" href="/jobs">Find a Job</Link>
          <button class="btn btn-outline-primary">Find a Model</button>
        </div>
      </div>

    </div>
  )
}
