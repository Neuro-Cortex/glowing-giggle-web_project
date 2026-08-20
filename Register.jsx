import React, {useState} from 'react'
import api from '../api'
import toast, { Toaster } from 'react-hot-toast'
import {useNavigate, Link} from 'react-router-dom'
import { Mail, Lock, User, Eye, EyeOff, ArrowRight, CheckCircle2 } from 'lucide-react'

export default function Register(){
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  async function submit(e){
    e.preventDefault()
    
    // Validation
    if (!name.trim()) {
      toast.error('Name is required')
      return
    }
    if (!email.trim()) {
      toast.error('Email is required')
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error('Please enter a valid email')
      return
    }
    if (password.length < 6) {
      toast.error('Password must be at least 6 characters')
      return
    }

    setLoading(true)
    try{
      await api.post('/auth/register', {name, email, password})
      toast.success('Account created! Redirecting to login...')
      setTimeout(() => navigate('/login'), 1500)
    }catch(e){
      const errorMsg = e.response?.data?.message || 'Registration failed. Please try again.'
      toast.error(errorMsg)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="register-container">
      <Toaster position="top-right" />
      
      <div className="register-wrapper">
        {/* Left side - Form */}
        <div className="register-form-section">
          <div className="register-form-inner">
            <div className="register-header">
              <Link to="/" className="register-logo">
                MoneyManager
              </Link>
              <h1 className="register-title">Create your account</h1>
              <p className="register-subtitle">Join thousands of users managing their finances</p>
            </div>

            <form onSubmit={submit} className="register-form">
              {/* Name Field */}
              <div className="form-group">
                <label htmlFor="name" className="form-label">Full Name</label>
                <div className="form-input-wrapper">
                  <User size={18} className="form-icon" />
                  <input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    className="form-input"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    disabled={loading}
                  />
                </div>
              </div>

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
                <label htmlFor="password" className="form-label">Password</label>
                <div className="form-input-wrapper">
                  <Lock size={18} className="form-icon" />
                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="At least 6 characters"
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

              {/* Password Requirements */}
              <div className="password-requirements">
                <div className="requirement-item">
                  <CheckCircle2 size={16} className={password.length >= 6 ? 'requirement-met' : 'requirement-unmet'} />
                  <span>At least 6 characters</span>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="btn btn-primary btn-register"
              >
                {loading ? (
                  <>
                    <div className="spinner"></div>
                    Creating account...
                  </>
                ) : (
                  <>
                    Create Account
                    <ArrowRight size={18} />
                  </>
                )}
              </button>
            </form>

            {/* Sign In Link */}
            <div className="register-footer">
              <p className="register-footer-text">
                Already have an account?{' '}
                <Link to="/login" className="register-link">
                  Sign in
                </Link>
              </p>
              <p className="register-footer-text terms">
                By signing up, you agree to our{' '}
                <a href="#" className="register-link">Terms of Service</a>
                {' '}and{' '}
                <a href="#" className="register-link">Privacy Policy</a>
              </p>
            </div>
          </div>
        </div>

        {/* Right side - Features */}
        <div className="register-features-section">
          <div className="register-features-inner">
            <h2 className="register-features-title">Why choose MoneyManager?</h2>
            
            <div className="features-list">
              <div className="feature-item">
                <div className="feature-icon-circle">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <h3>Secure & Encrypted</h3>
                  <p>Your financial data is protected with bank-grade encryption</p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon-circle">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <h3>Real-time Analytics</h3>
                  <p>Get instant insights into your spending and income patterns</p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon-circle">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <h3>Team Collaboration</h3>
                  <p>Invite team members and manage permissions effortlessly</p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon-circle">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <h3>Free Forever Plan</h3>
                  <p>Start for free and upgrade only when you need advanced features</p>
                </div>
              </div>
            </div>

            <div className="register-stats">
              <div className="stat">
                <div className="stat-number">10K+</div>
                <div className="stat-label">Active Users</div>
              </div>
              <div className="stat">
                <div className="stat-number">50M+</div>
                <div className="stat-label">Transactions</div>
              </div>
              <div className="stat">
                <div className="stat-number">99.9%</div>
                <div className="stat-label">Uptime</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

