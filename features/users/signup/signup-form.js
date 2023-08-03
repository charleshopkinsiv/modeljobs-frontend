

export default function SignupForm({}) {
    return (
        <>
            <div class="mb-3">
                <label for="signup-email-imput" class="form-label">Name</label>
                <input type="text" class="form-control" id="signup-name-imput" placeholder="Model Name" />
            </div>
            <div class="mb-3">
                <label for="signup-email-imput" class="form-label">Email address</label>
                <input type="email" class="form-control" id="signup-email-imput" placeholder="name@example.com" />
            </div>
            <div class="mb-3">
                <label for="signup-password-imput" class="form-label">Password</label>
                <input type="password" class="form-control" id="signup-password-imput" placeholder="**********" />
            </div>
            <div>
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                <button type="button" class="btn btn-primary">Signup</button>
            </div>
        </>
    )
}