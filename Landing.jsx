import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CreditCard, TrendingUp, Users, Shield, Play, ChevronRight, BarChart3, Lock, Zap, FileText, Bell, RotateCcw, Globe } from 'lucide-react'
import Modal from '../components/Modal'

export default function Landing(){
  const [isDemoOpen, setIsDemoOpen] = React.useState(false)
  const navigate = useNavigate()

  React.useEffect(() => {
    if (localStorage.getItem('token')) navigate('/dashboard')
  }, [navigate])

  return (
    <div className="landing-root">
      <header className="lp-nav">
        <div className="container-landing">
          <div className="lp-nav-inner">
            <div className="lp-logo">MoneyManager</div>

            <nav className="lp-links">
              <a href="#features">Features</a>
              <Link to="/pricing">Pricing</Link>
              <Link to="/partners">Partners</Link>
              <Link to="/about">About</Link>
              <a href="#contact">Contact</a>
            </nav>

            <div className="lp-actions">
              <Link to="/login" className="btn btn-outline-dark">Login</Link>
              <Link to="/register" className="btn btn-primary">Get Started</Link>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container-landing">
            <div className="hero-inner">
              <div className="hero-left">
                <div className="eyebrow">Trusted Finance • Premium Insights</div>
                <h1 className="hero-head">THE BEST SOLUTION FOR YOUR BUSINESS FINANCE</h1>
                <p className="hero-sub">Manage income, expenses and budgets with ease — beautiful analytics, simple automation, and real-time reporting for teams and founders.</p>

                <div className="hero-cta">
                  <Link to="/register" className="btn btn-primary btn-lg">Create Account</Link>
                  <button onClick={()=>setIsDemoOpen(true)} className="btn btn-outline-light btn-lg" style={{display:'inline-flex',alignItems:'center',gap:8}}>
                    <Play size={16}/> Watch Demo
                  </button>
                </div>

                <div className="partners" id="partners">
                  <div className="muted">Trusted by leading companies</div>
                  <div className="partner-logos">
                    <div className="partner">Acme</div>
                    <div className="partner">FinCo</div>
                    <div className="partner">Ledger</div>
                    <div className="partner">Orbit</div>
                  </div>
                </div>
              </div>

              <aside className="hero-right" aria-hidden={true}>
                <div className="preview-card">
                  <div className="preview-header">
                    <div>
                      <div className="preview-muted">Overview</div>
                      <div className="preview-title">Business Dashboard</div>
                    </div>
                    <div className="preview-muted">Month</div>
                  </div>

                  <div className="preview-body">
                    <div className="mini-cards">
                      <div className="mini card">
                        <div className="preview-muted">Income</div>
                        <div className="mini-metric income">$12,450</div>
                      </div>

                      <div className="mini card">
                        <div className="preview-muted">Expense</div>
                        <div className="mini-metric expense">$4,210</div>
                      </div>

                      <div className="mini card">
                        <div className="preview-muted">Balance</div>
                        <div className="mini-metric">$8,240</div>
                      </div>
                    </div>

                    <div className="preview-chart">
                      <div style={{height:140,display:'flex',alignItems:'center',justifyContent:'center',color:'#93C5FD',fontSize:12}}>Chart preview</div>
                    </div>

                    <div className="preview-features">
                      <div><Shield size={14}/> Secure data</div>
                      <div><Users size={14}/> Team-ready</div>
                      <div><TrendingUp size={14}/> Real-time reports</div>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className="features" id="features">
          <div className="container-landing">
            <div className="section-header">
              <h2>Powerful Features for Modern Finance</h2>
              <p>Everything you need to manage your finances effectively, built for teams and enterprises</p>
            </div>
            <div className="features-grid">
              <div className="feature-card card">
                <div className="feature-icon">
                  <CreditCard size={24}/>
                </div>
                <h3 className="feature-title">Intuitive Ledger</h3>
                <p className="feature-desc">Track income & expenses with intelligent categorization, automatic receipt capture, and multi-currency support for global operations.</p>
                <ul className="feature-list">
                  <li>Smart categorization</li>
                  <li>Receipt digitization</li>
                  <li>Multi-currency support</li>
                </ul>
              </div>

              <div className="feature-card card">
                <div className="feature-icon">
                  <BarChart3 size={24}/>
                </div>
                <h3 className="feature-title">Advanced Analytics</h3>
                <p className="feature-desc">Beautiful charts and real-time dashboards providing deep insights into spending patterns, cash flow, and financial health.</p>
                <ul className="feature-list">
                  <li>Real-time dashboards</li>
                  <li>Spending analytics</li>
                  <li>Cash flow forecasting</li>
                </ul>
              </div>

              <div className="feature-card card">
                <div className="feature-icon">
                  <Users size={24}/>
                </div>
                <h3 className="feature-title">Team Collaboration</h3>
                <p className="feature-desc">Invite team members, manage roles and permissions, and collaborate seamlessly with granular access controls.</p>
                <ul className="feature-list">
                  <li>Role-based access</li>
                  <li>Audit trails</li>
                  <li>Team workflows</li>
                </ul>
              </div>

              <div className="feature-card card">
                <div className="feature-icon">
                  <FileText size={24}/>
                </div>
                <h3 className="feature-title">Automated Reports</h3>
                <p className="feature-desc">Generate professional financial reports instantly. Export to PDF, Excel, or share directly with stakeholders and accountants.</p>
                <ul className="feature-list">
                  <li>Instant report generation</li>
                  <li>Multiple export formats</li>
                  <li>Scheduled reports</li>
                </ul>
              </div>

              <div className="feature-card card">
                <div className="feature-icon">
                  <Lock size={24}/>
                </div>
                <h3 className="feature-title">Enterprise Security</h3>
                <p className="feature-desc">Bank-grade encryption, SOC 2 Type II certification, and compliance with GDPR, CCPA, and PCI-DSS standards.</p>
                <ul className="feature-list">
                  <li>AES-256 encryption</li>
                  <li>SOC 2 Type II certified</li>
                  <li>Full audit trails</li>
                </ul>
              </div>

              <div className="feature-card card">
                <div className="feature-icon">
                  <Zap size={24}/>
                </div>
                <h3 className="feature-title">Automations</h3>
                <p className="feature-desc">Automate recurring transactions, billing cycles, and financial workflows to save time and reduce manual errors.</p>
                <ul className="feature-list">
                  <li>Recurring transactions</li>
                  <li>Automatic reconciliation</li>
                  <li>Smart alerts</li>
                </ul>
              </div>
            </div>

            <div className="features-cta-section">
              <div className="features-cta">
                <h3 className="cta-heading">Want to explore all features?</h3>
                <p className="cta-description">Unlock the full potential of MoneyManager with our comprehensive feature set.</p>
                <Link to="/register" className="btn btn-primary btn-lg">Start Free Trial</Link>
              </div>
            </div>

            <div className="features-comparison">
              <h3 className="comparison-title">Key Capabilities at a Glance</h3>
              <p className="comparison-subtitle">Everything you need to manage finances with confidence</p>
              <div className="comparison-grid">
                <div className="comparison-item">
                  <div className="comparison-icon-box">
                    <CreditCard size={24} className="comparison-icon" />
                  </div>
                  <h4>Smart Expense Tracking</h4>
                  <p>Track income and expenses with real-time categorization and intelligent insights.</p>
                </div>
                <div className="comparison-item">
                  <div className="comparison-icon-box">
                    <BarChart3 size={24} className="comparison-icon" />
                  </div>
                  <h4>Advanced Financial Reports</h4>
                  <p>Generate detailed reports with clear visual insights for better decision making.</p>
                </div>
                <div className="comparison-item">
                  <div className="comparison-icon-box">
                    <Users size={24} className="comparison-icon" />
                  </div>
                  <h4>Secure Team Collaboration</h4>
                  <p>Manage roles and permissions across teams with granular access controls.</p>
                </div>
                <div className="comparison-item">
                  <div className="comparison-icon-box">
                    <Globe size={24} className="comparison-icon" />
                  </div>
                  <h4>Cloud-Based & Reliable</h4>
                  <p>Access your financial data anytime, anywhere with 99.99% uptime guarantee.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-dark" id="pricing">
          <div className="container-landing">
            <div className="cta-inner">
              <div className="cta-content">
                <h2 className="cta-title">Ready to simplify your finances?</h2>
                <p className="cta-subtitle">Start a free trial — no credit card required. Get instant access to all features.</p>
              </div>
              <div className="cta-action">
                <Link to="/register" className="btn btn-primary btn-lg" style={{display:'inline-flex',alignItems:'center',gap:8}}>
                  Start Free
                  <ChevronRight size={18}/>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <Modal isOpen={isDemoOpen} onClose={()=>setIsDemoOpen(false)} title="Watch demo">
          <div style={{width:'100%',height:300,display:'flex',alignItems:'center',justifyContent:'center',background:'#0f172a',color:'#fff',borderRadius:8}}>
            <div>
              <div style={{fontWeight:800,fontSize:20,marginBottom:8}}>Live demo</div>
              <div className="muted" style={{color:'#d1fae5'}}>This is a short preview of the dashboard UI.</div>
            </div>
          </div>
        </Modal>
      </main>

      <footer className="lp-footer">
        <div className="container-landing">
          <div className="footer-content">
            <div className="muted">© {new Date().getFullYear()} MoneyManager. All rights reserved.</div>
            <div className="muted">Made with ♥ by the MoneyManager team</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
