import React, { useState } from 'react'
import { useAuth } from '../app/context/AuthContext'

// ── Shared field component ──────────────────────
function Field({ id, label, type = 'text', placeholder, value, onChange, required = true }) {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <input
        id={id} type={type} placeholder={placeholder}
        value={value} onChange={e => onChange(e.target.value)}
        required={required}
      />
    </div>
  )
}

// ── LOGIN VIEW ──────────────────────────────────
function LoginView({ onSwitch }) {
  const { login } = useAuth()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError]       = useState('')
  const [loading, setLoading]   = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    setTimeout(() => {
      const result = login(username, password)
      if (!result.ok) setError(result.message)
      setLoading(false)
    }, 600)
  }

  return (
    <>
      <div className="logo">📚 CoursePlanner</div>
      <div className="subtitle">Welcome back! Sign in to continue</div>

      <form onSubmit={handleSubmit}>
        <Field id="username" label="Username" placeholder="Enter username" value={username} onChange={setUsername} />
        <Field id="password" label="Password" type="password" placeholder="Enter password" value={password} onChange={setPassword} />

        <div className="auth-forgot">
          <button type="button" className="link-btn" onClick={() => onSwitch('forgot')}>
            Forgot password?
          </button>
        </div>

        <button className="login-btn" type="submit" disabled={loading}>
          {loading ? <span className="btn-spinner" /> : null}
          {loading ? 'Signing in...' : 'Sign In'}
        </button>
        {error && <div className="login-error">⚠ {error}</div>}
      </form>

      <div className="auth-switch">
        New here?{' '}
        <button type="button" className="link-btn accent" onClick={() => onSwitch('register')}>
          Create an account
        </button>
      </div>
    </>
  )
}

// ── REGISTER VIEW ───────────────────────────────
function RegisterView({ onSwitch }) {
  const { register } = useAuth()
  const [name, setName]         = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail]       = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm]   = useState('')
  const [error, setError]       = useState('')
  const [loading, setLoading]   = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')

    if (password.length < 6)
      return setError('Password must be at least 6 characters.')
    if (password !== confirm)
      return setError('Passwords do not match.')

    setLoading(true)
    setTimeout(() => {
      const result = register({ name, username, email, password })
      if (!result.ok) setError(result.message)
      setLoading(false)
    }, 700)
  }

  return (
    <>
      <div className="logo">📚 CoursePlanner</div>
      <div className="subtitle">Create your account to get started</div>

      <form onSubmit={handleSubmit}>
        <Field id="reg-name"     label="Full Name"        placeholder="John Smith"          value={name}     onChange={setName} />
        <Field id="reg-username" label="Username"         placeholder="Choose a username"   value={username} onChange={setUsername} />
        <Field id="reg-email"    label="Email"  type="email" placeholder="you@email.com"   value={email}    onChange={setEmail} />
        <Field id="reg-pass"     label="Password" type="password" placeholder="Min 6 characters" value={password} onChange={setPassword} />
        <Field id="reg-confirm"  label="Confirm Password" type="password" placeholder="Repeat password" value={confirm} onChange={setConfirm} />

        <button className="login-btn" type="submit" disabled={loading}>
          {loading ? <span className="btn-spinner" /> : null}
          {loading ? 'Creating Account...' : 'Create Account'}
        </button>
        {error && <div className="login-error">⚠ {error}</div>}
      </form>

      <div className="auth-switch">
        Already have an account?{' '}
        <button type="button" className="link-btn accent" onClick={() => onSwitch('login')}>
          Sign in
        </button>
      </div>
    </>
  )
}

// ── FORGOT PASSWORD VIEW ────────────────────────
function ForgotView({ onSwitch }) {
  const { forgotPassword } = useAuth()
  const [email, setEmail]   = useState('')
  const [error, setError]   = useState('')
  const [success, setSuccess] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setError(''); setSuccess('')
    setLoading(true)
    setTimeout(() => {
      const result = forgotPassword(email)
      if (result.ok) setSuccess(result.message)
      else setError(result.message)
      setLoading(false)
    }, 700)
  }

  return (
    <>
      <div className="logo">🔑 Reset Password</div>
      <div className="subtitle">Enter your email and we'll send you a reset link</div>

      <form onSubmit={handleSubmit}>
        <Field id="forgot-email" label="Email Address" type="email" placeholder="you@email.com" value={email} onChange={setEmail} />

        <button className="login-btn" type="submit" disabled={loading || !!success}>
          {loading ? <span className="btn-spinner" /> : null}
          {loading ? 'Sending...' : success ? '✓ Link Sent!' : 'Send Reset Link'}
        </button>

        {error   && <div className="login-error">⚠ {error}</div>}
        {success && <div className="login-success">✅ {success}</div>}
      </form>

      <div className="auth-switch">
        <button type="button" className="link-btn accent" onClick={() => onSwitch('login')}>
          ← Back to Sign In
        </button>
      </div>

      <div className="demo-hint">
        Demo emails: <strong>student@example.com</strong> &nbsp;·&nbsp; <strong>admin@example.com</strong>
      </div>
    </>
  )
}

// ── MAIN COMPONENT ──────────────────────────────
function LoginPage() {
  const [view, setView] = useState('login') // 'login' | 'register' | 'forgot'

  return (
    <div className="login-wrapper">
      <div className="login-card-wrapper">
        <div className={`login-card ${view}`}>
          {/* Progress dots */}
          <div className="auth-dots">
            <span className={view === 'login'    ? 'dot active' : 'dot'} />
            <span className={view === 'register' ? 'dot active' : 'dot'} />
            <span className={view === 'forgot'   ? 'dot active' : 'dot'} />
          </div>

          {view === 'login'    && <LoginView    onSwitch={setView} />}
          {view === 'register' && <RegisterView onSwitch={setView} />}
          {view === 'forgot'   && <ForgotView   onSwitch={setView} />}
        </div>
      </div>
    </div>
  )
}

export default LoginPage
