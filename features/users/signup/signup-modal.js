
import SignupForm from './signup-form';


export default function SignupModal({}) {
    return (
        <div class="modal fade" id="signup-modal" tabindex="-1" aria-labelledby="signup-modal-label" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="signup-modal-label">Signup</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <SignupForm />
                    </div>
                </div>
            </div>
        </div>
    )
}