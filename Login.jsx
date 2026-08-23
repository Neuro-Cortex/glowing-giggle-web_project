import React, {useState} from 'react'
import api from '../api'
import toast, { Toaster } from 'react-hot-toast'
import {useNavigate, Link} from 'react-router-dom'
import { Mail, Lock, Eye, EyeOff, ArrowRight, CheckCircle2, Zap, BarChart3, Users } from 'lucide-react'

export default function Login(){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)
  const navigate = useNavigate()

  async function submit(e){
    e.preventDefault()
    
    // Validation
    if (!email.trim()) {
      toast.error('Email is required')
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error('Please enter a valid email')
      return
    }
    if (!password) {
      toast.error('Password is required')
      return
    }

    setLoading(true)
    try{
      const res = await api.post('/auth/login', {email, password})
      localStorage.setItem('token', res.data.token)
      
      if (rememberMe) {
        localStorage.setItem('rememberEmail', email)
      } else {
        localStorage.removeItem('rememberEmail')
      }
      
      toast.success('Welcome back!')
      setTimeout(() => navigate('/dashboard'), 1000)
    }catch(e){
      const errorMsg = e.response?.data?.message || 'Login failed. Please check your credentials.'
      toast.error(errorMsg)
    } finally {
      setLoading(false)
    }
  }

  React.useEffect(() => {
    const savedEmail = localStorage.getItem('rememberEmail')
    if (savedEmail) {
      setEmail(savedEmail)
      setRememberMe(true)
    }
  }, [])

  return (
    <div className="login-container">
      <Toaster position="top-right" />
      
      <div className="login-wrapper">
        {/* Left side - Features */}
        <div className="login-features-section">
          <div className="login-features-inner">
            <h2 className="login-features-title">Welcome Back to MoneyManager</h2>
            <p className="login-features-subtitle">Manage your finances with confidence</p>
            
            <div className="features-list">
              <div className="feature-item">
                <div className="feature-icon-circle">
                  <Zap size={24} />
                </div>
                <div>
                  <h3>Quick & Easy</h3>
                  <p>Access your dashboard in seconds with secure authentication</p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon-circle">
                  <BarChart3 size={24} />
                </div>
                <div>
                  <h3>Advanced Analytics</h3>
                  <p>Track spending patterns and financial goals in real-time</p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon-circle">
                  <Users size={24} />
                </div>
                <div>
                  <h3>Team Management</h3>
                  <p>Collaborate with team members and manage permissions</p>
                </div>
              </div>
            </div>

            <div className="login-testimonial">
              <div className="testimonial-text">
                "MoneyManager has completely transformed how we manage our company finances. Highly recommended!"
              </div>
              <div className="testimonial-author">
                <div className="avatar">JD</div>
                <div>
                  <div className="author-name">John Davis</div>
                  <div className="author-title">Finance Manager, TechCorp</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Form */}
        <div className="login-form-section">
          <div className="login-form-inner">
            <div className="login-header">
              <Link to="/" className="login-logo">
                MoneyManager
              </Link>
              <h1 className="login-title">Sign in to your account</h1>
              <p className="login-subtitle">Access your financial dashboard</p>
            </div>

            <form onSubmit={submit} className="login-form">
              {/* Email Field */}
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email Address</label>
                <div className="form-input-wrapper">
                  <Mail size={18} className="form-icon" />
                  <input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    className="form-input"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    disabled={loading}
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="form-group">
                <div className="form-label-row">
                  <label htmlFor="password" className="form-label">Password</label>
                  <Link to="#" className="form-forgot">Forgot password?</Link>
                </div>
                <div className="form-input-wrapper">
                  <Lock size={18} className="form-icon" />
                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter your password"
                    className="form-input"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    disabled={loading}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="form-icon-button"
                    disabled={loading}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {/* Remember Me */}
              <div className="form-checkbox">
                <input
                  id="remember"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={e => setRememberMe(e.target.checked)}
                  disabled={loading}
                />
                <label htmlFor="remember" className="checkbox-label">Remember me for 30 days</label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="btn btn-primary btn-login"
              >
                {loading ? (
                  <>
                    <div className="spinner"></div>
                    Signing in...
                  </>
                ) : (
                  <>
                    Sign In
                    <ArrowRight size={18} />
                  </>
                )}
              </button>
            </form>

            {/* Sign Up Link */}
            <div className="login-footer">
              <p className="login-footer-text">
                Don't have an account?{' '}
                <Link to="/register" className="login-link">
                  Create one now
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

