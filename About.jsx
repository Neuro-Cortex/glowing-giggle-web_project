import React from 'react'
import { Link } from 'react-router-dom'
import { Briefcase, Users, Target, Heart, ArrowRight, Globe, TrendingUp, Shield, Star, Lock, Award, CheckCircle2 } from 'lucide-react'

export default function About(){
  const testimonials = [
    {
      name: "Emily Rodriguez",
      role: "Founder, TechStart Inc",
      image: "ER",
      rating: 5,
      text: "MoneyManager has been instrumental in managing our company's finances as we scaled from 0 to 50 employees. The real-time insights and team collaboration features are exactly what we needed.",
      color: "bg-blue-500"
    },
    {
      name: "Michael Chen",
      role: "CFO, Digital Solutions",
      image: "MC",
      rating: 5,
      text: "After evaluating multiple financial management platforms, MoneyManager stood out for its security, user-friendly interface, and powerful reporting capabilities. Highly recommended.",
      color: "bg-purple-500"
    },
    {
      name: "Sarah Thompson",
      role: "Operations Manager, Creative Agency",
      image: "ST",
      rating: 5,
      text: "The transparency and ease of use have transformed how our team tracks expenses. Integration with our existing tools was seamless and their support team is exceptional.",
      color: "bg-green-500"
    },
    {
      name: "David Park",
      role: "Accountant, Prime Consulting",
      image: "DP",
      rating: 5,
      text: "As a professional accountant, I appreciate the compliance features and detailed audit trails. MoneyManager meets the highest standards for financial record-keeping.",
      color: "bg-orange-500"
    }
  ]

  const renderStars = (rating) => {
    return (
      <div className="stars">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={16} fill={i < rating ? "currentColor" : "none"} />
        ))}
      </div>
    )
  }

  return (
    <div className="about-container">
      {/* Navigation */}
      <header className="lp-nav">
        <div className="container-landing">
          <div className="lp-nav-inner">
            <Link to="/" className="lp-logo">MoneyManager</Link>
            <nav className="lp-links">
              <a href="#mission">Mission</a>
              <a href="#team">Team</a>
              <a href="#testimonials">Testimonials</a>
              <a href="#trust">Security</a>
            </nav>
            <div className="lp-actions">
              <Link to="/login" className="btn btn-outline-dark">Login</Link>
              <Link to="/register" className="btn btn-primary">Get Started</Link>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="about-hero">
          <div className="container-landing">
            <div className="about-hero-content">
              <h1 className="about-hero-title">Financial Intelligence, Made Simple</h1>
              <p className="about-hero-subtitle">Empowering businesses to make smarter financial decisions with real-time insights and enterprise-grade security</p>
              <div className="about-stats">
                <div className="stat-box">
                  <div className="stat-number">10K+</div>
                  <p>Active Users</p>
                </div>
                <div className="stat-box">
                  <div className="stat-number">$2B+</div>
                  <p>Under Management</p>
                </div>
                <div className="stat-box">
                  <div className="stat-number">50M+</div>
                  <p>Transactions</p>
                </div>
                <div className="stat-box">
                  <div className="stat-number">99.99%</div>
                  <p>SLA Uptime</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="about-section" id="mission">
          <div className="container-landing">
            <div className="section-layout">
              <div className="section-content">
                <div className="section-label">Our Mission</div>
                <h2>Democratizing Financial Intelligence for Every Business</h2>
                <p>
                  At MoneyManager, we believe financial management should be accessible, transparent, and empowering. Founded in 2020, we've built a platform that combines institutional-grade financial tools with an intuitive interface designed for modern businesses.
                </p>
                <p>
                  Whether you're a solopreneur tracking personal finances or a 500-person organization managing complex budgets, MoneyManager provides the visibility and control you need to make confident financial decisions.
                </p>
                <p className="highlight-text">
                  Our platform is trusted by startups, SMEs, and growing enterprises across 15 countries, managing over $2 billion in transactions monthly.
                </p>
                <div className="key-points">
                  <div className="key-point">
                    <CheckCircle2 size={20} />
                    <div>
                      <h4>Real-Time Financial Visibility</h4>
                      <p>Monitor cash flow, expenses, and income as they happen</p>
                    </div>
                  </div>
                  <div className="key-point">
                    <CheckCircle2 size={20} />
                    <div>
                      <h4>Enterprise Security Standards</h4>
                      <p>SOC 2 Type II certified with AES-256 encryption</p>
                    </div>
                  </div>
                  <div className="key-point">
                    <CheckCircle2 size={20} />
                    <div>
                      <h4>Designed for Teams</h4>
                      <p>Role-based access control and granular permissions</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="section-visual">
                <div className="visual-box">
                  <Target size={56} className="visual-icon" />
                  <p>Strategic Financial Control</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust & Credibility Section */}
        <section className="about-section bg-light" id="trust">
          <div className="container-landing">
            <div className="section-header">
              <h2>Built to Be Trusted</h2>
              <p>Security, compliance, and reliability at every level</p>
            </div>
            <div className="trust-grid">
              <div className="trust-card">
                <div className="trust-icon">
                  <Lock size={32} />
                </div>
                <h3>Bank-Grade Security</h3>
                <p>AES-256 encryption, PCI-DSS compliance, and regular security audits ensure your data is protected with the highest standards.</p>
              </div>
              <div className="trust-card">
                <div className="trust-icon">
                  <Award size={32} />
                </div>
                <h3>SOC 2 Type II Certified</h3>
                <p>Independently audited for security, availability, and confidentiality. Your data is handled with institutional-grade care.</p>
              </div>
              <div className="trust-card">
                <div className="trust-icon">
                  <Globe size={32} />
                </div>
                <h3>GDPR & Compliance Ready</h3>
                <p>Full compliance with GDPR, CCPA, and local data protection regulations across all operating jurisdictions.</p>
              </div>
              <div className="trust-card">
                <div className="trust-icon">
                  <Shield size={32} />
                </div>
                <h3>24/7 Monitoring</h3>
                <p>Continuous security monitoring, threat detection, and incident response ensures maximum uptime and protection.</p>
              </div>
            </div>

            <div className="credibility-section">
              <h3>Trusted by Leading Organizations</h3>
              <div className="trust-logos">
                <div className="trust-logo">
                  <Award size={20} />
                  ISO 27001 Certified
                </div>
                <div className="trust-logo">
                  <Award size={20} />
                  SOC 2 Type II
                </div>
                <div className="trust-logo">
                  <CheckCircle2 size={20} />
                  GDPR Compliant
                </div>
                <div className="trust-logo">
                  <CheckCircle2 size={20} />
                  PCI-DSS Level 1
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="about-section" id="team">
          <div className="container-landing">
            <div className="section-header">
              <h2>Leadership Team</h2>
              <p>Experienced professionals dedicated to financial innovation</p>
            </div>
            <div className="team-grid">
              <div className="team-member">
                <div className="member-avatar founder">AK</div>
                <h3>Aisha Khan</h3>
                <p className="member-role">Founder & CEO</p>
                <p className="member-expertise">FinTech | Strategy | Operations</p>
                <p className="member-bio">Former Director of Product at OpenBank with 12+ years in digital financial services. Led the product vision for platforms managing $500M+ in assets.</p>
              </div>

              <div className="team-member">
                <div className="member-avatar">JM</div>
                <h3>James Mitchell</h3>
                <p className="member-role">Chief Technology Officer</p>
                <p className="member-expertise">Cloud Architecture | Security | Scalability</p>
                <p className="member-bio">Former VP Engineering at FinanceX. Built and scaled systems processing 100M+ transactions daily. Expert in distributed systems and security architecture.</p>
              </div>

              <div className="team-member">
                <div className="member-avatar">SC</div>
                <h3>Sarah Chen</h3>
                <p className="member-role">Chief Financial Officer</p>
                <p className="member-expertise">Finance | Compliance | Auditing</p>
                <p className="member-bio">CPA with 15 years in enterprise finance. Previously Senior Finance Manager at Global Banking Corp, managing $10B+ portfolios and compliance frameworks.</p>
              </div>

              <div className="team-member">
                <div className="member-avatar">RP</div>
                <h3>Raj Patel</h3>
                <p className="member-role">Head of Security & Compliance</p>
                <p className="member-expertise">Information Security | Compliance | Risk</p>
                <p className="member-bio">CISSP certified security architect with 18 years in cybersecurity. Led security programs at Fortune 500 financial institutions and achieved SOC 2 Type II certifications.</p>
              </div>

              <div className="team-member">
                <div className="member-avatar">MW</div>
                <h3>Monica Williams</h3>
                <p className="member-role">Senior Product Manager</p>
                <p className="member-expertise">Product Strategy | UX | Analytics</p>
                <p className="member-bio">Product strategist with 10 years building financial products. Managed products used by 2M+ users. Expert in user research and data-driven product development.</p>
              </div>

              <div className="team-member">
                <div className="member-avatar">DL</div>
                <h3>David Liu</h3>
                <p className="member-role">Lead Data Analyst</p>
                <p className="member-expertise">Data Science | Analytics | ML</p>
                <p className="member-bio">Data scientist PhD with expertise in financial analytics and machine learning. Previously developed predictive models for fraud detection and risk assessment.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="about-section bg-light" id="testimonials">
          <div className="container-landing">
            <div className="section-header">
              <h2>Trusted by Industry Professionals</h2>
              <p>See what our users have to say about MoneyManager</p>
            </div>
            <div className="testimonials-grid">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="testimonial-card">
                  <div className="testimonial-header">
                    <div className="testimonial-avatar" style={{background: testimonial.color === 'bg-blue-500' ? 'linear-gradient(135deg, #2563eb, #1e40af)' : testimonial.color === 'bg-purple-500' ? 'linear-gradient(135deg, #a855f7, #7e22ce)' : testimonial.color === 'bg-green-500' ? 'linear-gradient(135deg, #10b981, #059669)' : 'linear-gradient(135deg, #f59e0b, #d97706)'}}>
                      {testimonial.image}
                    </div>
                    <div>
                      <h4 className="testimonial-name">{testimonial.name}</h4>
                      <p className="testimonial-role">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="testimonial-rating">
                    {renderStars(testimonial.rating)}
                  </div>
                  <p className="testimonial-text">"{testimonial.text}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats & Achievements Section */}
        <section className="about-section">
          <div className="container-landing">
            <div className="section-header">
              <h2>Achievements & Milestones</h2>
              <p>Our growth journey and industry recognition</p>
            </div>
            <div className="achievements-grid">
              <div className="achievement-card">
                <div className="achievement-badge">2020</div>
                <h4>Company Founded</h4>
                <p>Launched with a mission to democratize financial management for SMEs.</p>
              </div>

              <div className="achievement-card">
                <div className="achievement-badge">2021</div>
                <h4>Series Seed Funding</h4>
                <p>Raised $2M from leading fintech investors and accelerators.</p>
              </div>

              <div className="achievement-card">
                <div className="achievement-badge">2022</div>
                <h4>Series A Funding</h4>
                <p>Secured $8M Series A to expand team and launch enterprise features.</p>
              </div>

              <div className="achievement-card">
                <div className="achievement-badge">2023</div>
                <h4>10K Active Users</h4>
                <p>Reached 10,000+ active users across 8 countries.</p>
              </div>

              <div className="achievement-card">
                <div className="achievement-badge">2024</div>
                <h4>Global Expansion</h4>
                <p>Expanded to 15 countries with multi-currency and localization support.</p>
              </div>

              <div className="achievement-card">
                <div className="achievement-badge">2026</div>
                <h4>Industry Leader</h4>
                <p>Managing $2B+ in transactions with 99.99% uptime SLA.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-dark">
          <div className="container-landing">
            <div className="cta-inner">
              <div className="cta-content">
                <h2 className="cta-title">Ready to Transform Your Financial Management?</h2>
                <p className="cta-subtitle">Join thousands of businesses already using MoneyManager to make smarter financial decisions.</p>
              </div>
              <div className="cta-action">
                <Link to="/register" className="btn btn-primary btn-lg" style={{display:'inline-flex',alignItems:'center',gap:8}}>
                  Start Your Free Trial
                  <ArrowRight size={18}/>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="lp-footer">
        <div className="container-landing">
          <div className="footer-content">
            <div className="muted">© {new Date().getFullYear()} MoneyManager. All rights reserved.</div>
            <div className="muted">Designed for professionals. Built for scale.</div>
          </div>
        </div>
      </footer>
    </div>
  )
}

