
import Link from 'next/link'
import LoginModal from '../features/users/login/login-modal';
import SignupModal from '../features/users/signup/signup-modal';


export default function Header({}) {
    return (
      <>
        <header class="container d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3">
          <div class="col-md-3 mb-2 mb-md-0">
            <h1>Model Jobs</h1>
          </div>
    
          <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li><Link href="/" className="nav-link px-2 link-secondary">Home</Link></li>
            <li><Link href="/models" className="nav-link px-2">Models</Link></li>
            <li><Link href="/jobs" className="nav-link px-2">Jobs</Link></li>
          </ul>
    
          <div class="col-md-3 text-end">
            <button type="button" className="btn btn-outline-primary me-2" data-bs-toggle="modal" data-bs-target="#login-modal">Login</button>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#signup-modal">Sign-up</button>
          </div>
        </header>
        <LoginModal />
        <SignupModal />
      </>
    );
}
