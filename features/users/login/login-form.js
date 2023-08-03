

export default function LoginForm({}) {
    return (
        <>
            <div class="mb-3">
                <label for="login-email-imput" class="form-label">Email address</label>
                <input type="email" class="form-control" id="login-email-imput" placeholder="name@example.com" />
            </div>
            <div class="mb-3">
                <label for="login-password-imput" class="form-label">Password</label>
                <input type="password" class="form-control" id="login-password-imput" placeholder="**********" />
            </div>
            <div>
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                <button type="button" class="btn btn-primary">Login</button>
            </div>
        </>
    )
}