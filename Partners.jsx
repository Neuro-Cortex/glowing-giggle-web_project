import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Building2, Users, Zap, TrendingUp, Award, Handshake, ChevronRight, Heart, Globe, Target, Rocket, Shield, Mail, Phone } from 'lucide-react'

export default function Partners() {
  const [selectedPartner, setSelectedPartner] = useState(null)

  const partners = [
    {
      id: 1,
      name: 'Acme Corp',
      category: 'Financial Services',
      logo: '🏦',
      description: 'Leading financial services provider trusted by thousands of businesses worldwide.',
      stats: { users: '500K+', countries: '25+', satisfaction: '98%' },
      features: ['API Integration', 'Enterprise Support', 'Custom Pricing'],
      website: '#'
    },
    {
      id: 2,
      name: 'FinCo Solutions',
      category: 'Enterprise Software',
      logo: '💼',
      description: 'Enterprise software partner enabling seamless integrations and enterprise-grade solutions.',
      stats: { users: '250K+', countries: '15+', satisfaction: '96%' },
      features: ['White Label', 'API Access', 'Dedicated Team'],
      website: '#'
    },
    {
      id: 3,
      name: 'Ledger Systems',
      category: 'Accounting',
      logo: '📊',
      description: 'Accounting software partner providing comprehensive financial management tools.',
      stats: { users: '180K+', countries: '12+', satisfaction: '97%' },
      features: ['Two-Way Sync', 'Report Integration', 'Automation'],
      website: '#'
    },
    {
      id: 4,
      name: 'Orbit Finance',
      category: 'Payment Processing',
      logo: '💳',
      description: 'Payment processing partner enabling secure and reliable transaction handling.',
      stats: { users: '300K+', countries: '30+', satisfaction: '99%' },
      features: ['Payment Gateway', 'Multi-Currency', 'PCI Compliance'],
      website: '#'
    },
    {
      id: 5,
      name: 'DataVault Analytics',
      category: 'Business Intelligence',
      logo: '📈',
      description: 'BI partner providing advanced analytics and business intelligence capabilities.',
      stats: { users: '150K+', countries: '20+', satisfaction: '95%' },
      features: ['Custom Reports', 'Dashboards', 'Data Export'],
      website: '#'
    },
    {
      id: 6,
      name: 'CloudNine Infrastructure',
      category: 'Cloud Services',
      logo: '☁️',
      description: 'Cloud infrastructure partner ensuring reliability, security, and scalability.',
      stats: { users: '400K+', countries: '40+', satisfaction: '98%' },
      features: ['99.99% Uptime', 'Global CDN', 'Auto Scaling'],
      website: '#'
    }
  ]

  const partnerPrograms = [
    {
      id: 1,
      name: 'Reseller',
      icon: Rocket,
      description: 'Sell MoneyManager to your customers',
      benefits: ['50% margin', 'Marketing support', 'Technical training'],
      color: 'blue'
    },
    {
      id: 2,
      name: 'Technology',
      icon: Zap,
      description: 'Integrate MoneyManager with your platform',
      benefits: ['API access', 'SDK support', 'Sandbox environment'],
      color: 'purple'
    },
    {
      id: 3,
      name: 'Strategic',
      icon: Handshake,
      description: 'Collaborate on joint initiatives',
      benefits: ['Co-marketing', 'Revenue sharing', 'Executive support'],
      color: 'green'
    },
    {
      id: 4,
      name: 'Consulting',
      icon: Users,
      description: 'Offer implementation services',
      benefits: ['Certification', 'Deal registration', 'Co-branded materials'],
      color: 'orange'
    }
  ]

  const testimonials = [
    {
      quote: 'Partnering with MoneyManager has transformed our service offerings. Our clients love the seamless integration.',
      author: 'Sarah Johnson',
      title: 'CEO, Acme Financial',
      avatar: '👩‍💼'
    },
    {
      quote: 'Outstanding support and technical collaboration. The partnership has been incredibly rewarding.',
      author: 'Mike Chen',
      title: 'CTO, FinCo Solutions',
      avatar: '👨‍💼'
    },
    {
      quote: 'The partner program offers incredible value. We\'ve doubled our revenue within the first year.',
      author: 'Emma Davis',
      title: 'Founder, Ledger Systems',
      avatar: '👩‍🔬'
    }
  ]

  const stats = [
    { label: 'Active Partners', value: '150+', icon: Building2 },
    { label: 'Combined Users', value: '2.5M+', icon: Users },
    { label: 'Partner Revenue', value: '$50M+', icon: TrendingUp },
    { label: 'Countries', value: '85+', icon: Globe }
  ]

  return (
    <div className="partners-root">
      {/* Header */}
      <header className="partners-header">
        <div className="container-landing">
          <nav className="partners-nav">
            <Link to="/" className="partners-logo">MoneyManager</Link>
            <div className="partners-nav-links">
              <Link to="/">Home</Link>
              <Link to="/pricing">Pricing</Link>
              <Link to="/about">About</Link>
              <Link to="/login" className="btn btn-outline-dark">Login</Link>
              <Link to="/register" className="btn btn-primary">Get Started</Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="partners-hero">
        <div className="container-landing">
          <div className="partners-hero-content">
            <div className="partners-eyebrow">Partnership Opportunities</div>
            <h1 className="partners-title">Grow Your Business With MoneyManager</h1>
            <p className="partners-subtitle">Join our thriving partner ecosystem and unlock new revenue streams with industry-leading financial management solutions.</p>

            <div className="partners-hero-buttons">
              <button onClick={() => document.getElementById('programs').scrollIntoView({ behavior: 'smooth' })} className="btn btn-primary btn-lg">
                Explore Programs
              </button>
              <a href="#contact" className="btn btn-outline-light btn-lg" style={{display:'inline-flex',alignItems:'center',gap:8}}>
                Get in Touch <ChevronRight size={16}/>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="partners-stats">
        <div className="container-landing">
          <div className="stats-grid">
            {stats.map((stat, idx) => {
              const Icon = stat.icon
              return (
                <div key={idx} className="stat-card">
                  <Icon size={32} className="stat-icon" />
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Partner Programs */}
      <section className="partner-programs" id="programs">
        <div className="container-landing">
          <div className="section-header">
            <h2>Partnership Programs</h2>
            <p>Choose the program that best fits your business model and goals</p>
          </div>

          <div className="programs-grid">
            {partnerPrograms.map((program, idx) => {
              const Icon = program.icon
              return (
                <div key={idx} className={`program-card program-${program.color}`}>
                  <div className="program-icon">
                    <Icon size={32} />
                  </div>
                  <h3 className="program-name">{program.name}</h3>
                  <p className="program-desc">{program.description}</p>
                  <div className="program-benefits">
                    {program.benefits.map((benefit, bidx) => (
                      <div key={bidx} className="benefit-item">
                        <ChevronRight size={16} />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                  <button className="program-cta">Learn More</button>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Current Partners */}
      <section className="current-partners">
        <div className="container-landing">
          <div className="section-header">
            <h2>Our Trusted Partners</h2>
            <p>Industry leaders choosing MoneyManager for their integration needs</p>
          </div>

          <div className="partners-showcase">
            {partners.map((partner) => (
              <div key={partner.id} className="partner-showcase-card">
                <div className="partner-logo">{partner.logo}</div>
                <h3 className="partner-name">{partner.name}</h3>
                <p className="partner-category">{partner.category}</p>
                <p className="partner-desc">{partner.description}</p>
                
                <div className="partner-stats">
                  {Object.entries(partner.stats).map(([key, value]) => (
                    <div key={key} className="partner-stat">
                      <span className="stat-val">{value}</span>
                      <span className="stat-lbl">{key}</span>
                    </div>
                  ))}
                </div>

                <div className="partner-features">
                  {partner.features.map((feature, idx) => (
                    <span key={idx} className="feature-tag">{feature}</span>
                  ))}
                </div>

                <a href={partner.website} className="partner-link">
                  Visit Partner <ChevronRight size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Benefits */}
      <section className="partner-benefits">
        <div className="container-landing">
          <div className="section-header">
            <h2>Why Partner With MoneyManager?</h2>
            <p>Unlock unique advantages and accelerate your growth</p>
          </div>

          <div className="benefits-showcase">
            {[
              { icon: Award, title: 'Market Leadership', desc: 'Join the fastest-growing fintech partner ecosystem' },
              { icon: TrendingUp, title: 'Revenue Growth', desc: 'Proven models generating significant partner revenue' },
              { icon: Shield, title: 'Reliability', desc: '99.99% uptime SLA with enterprise-grade infrastructure' },
              { icon: Users, title: 'Dedicated Support', desc: 'Dedicated partner success manager and technical team' },
              { icon: Zap, title: 'Fast Integration', desc: 'RESTful APIs and comprehensive documentation' },
              { icon: Handshake, title: 'Co-Marketing', desc: 'Joint marketing initiatives and co-branded materials' }
            ].map((benefit, idx) => {
              const Icon = benefit.icon
              return (
                <div key={idx} className="benefit-showcase">
                  <div className="benefit-icon-box">
                    <Icon size={28} />
                  </div>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="partner-testimonials">
        <div className="container-landing">
          <div className="section-header">
            <h2>What Our Partners Say</h2>
            <p>Hear from industry leaders about their partnership experience</p>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="testimonial-showcase">
                <div className="testimonial-stars">
                  {[...Array(5)].map((_, i) => <span key={i}>⭐</span>)}
                </div>
                <p className="testimonial-quote">"{testimonial.quote}"</p>
                <div className="testimonial-author">
                  <div className="author-avatar">{testimonial.avatar}</div>
                  <div>
                    <div className="author-name">{testimonial.author}</div>
                    <div className="author-title">{testimonial.title}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works">
        <div className="container-landing">
          <div className="section-header">
            <h2>Getting Started is Easy</h2>
            <p>Join our partner program in just 4 simple steps</p>
          </div>

          <div className="steps-container">
            {[
              { step: 1, title: 'Apply', desc: 'Submit your application through our partner portal' },
              { step: 2, title: 'Onboard', desc: 'Get assigned a dedicated partner success manager' },
              { step: 3, title: 'Integrate', desc: 'Access our APIs and integrate MoneyManager' },
              { step: 4, title: 'Grow', desc: 'Launch and scale your monetization strategy' }
            ].map((item) => (
              <div key={item.step} className="step-card">
                <div className="step-number">{item.step}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                {item.step < 4 && <div className="step-arrow">→</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resource Center */}
      <section className="resources-section">
        <div className="container-landing">
          <div className="section-header">
            <h2>Partner Resources</h2>
            <p>Everything you need to succeed</p>
          </div>

          <div className="resources-grid">
            {[
              { icon: '📚', title: 'API Documentation', desc: 'Complete technical documentation and code examples' },
              { icon: '🎓', title: 'Training Programs', desc: 'Certification and professional development courses' },
              { icon: '📱', title: 'Marketing Toolkit', desc: 'Co-branded materials, logos, and templates' },
              { icon: '📊', title: 'Analytics Dashboard', desc: 'Real-time insights into integration performance' },
              { icon: '🎯', title: 'Go-to-Market', desc: 'Proven strategies for successful launches' },
              { icon: '🤝', title: 'Community Forum', desc: 'Connect with other partners and share best practices' }
            ].map((resource, idx) => (
              <div key={idx} className="resource-card">
                <div className="resource-emoji">{resource.icon}</div>
                <h3>{resource.title}</h3>
                <p>{resource.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="partners-cta">
        <div className="container-landing">
          <div className="cta-inner">
            <div className="cta-left">
              <Heart size={40} />
              <h2>Ready to Partner?</h2>
              <p>Let's build something amazing together and create value for your customers.</p>
            </div>
            <div className="cta-right">
              <a href="#contact" className="btn btn-primary btn-lg">Apply Now</a>
              <a href="#" className="btn btn-outline-dark btn-lg">Request Demo</a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section" id="contact">
        <div className="container-landing">
          <div className="section-header">
            <h2>Get in Touch</h2>
            <p>Our partner team is ready to help you succeed</p>
          </div>

          <div className="contact-grid">
            <div className="contact-info">
              <div className="contact-method">
                <Mail size={28} />
                <div>
                  <h3>Email Us</h3>
                  <p>partners@moneymanager.com</p>
                </div>
              </div>
              <div className="contact-method">
                <Phone size={28} />
                <div>
                  <h3>Call Us</h3>
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="contact-method">
                <Globe size={28} />
                <div>
                  <h3>Office Hours</h3>
                  <p>Mon-Fri, 9AM-6PM EST</p>
                </div>
              </div>
            </div>

            <form className="contact-form">
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <select required>
                  <option value="">Select Partnership Type</option>
                  <option value="reseller">Reseller</option>
                  <option value="technology">Technology</option>
                  <option value="strategic">Strategic</option>
                  <option value="consulting">Consulting</option>
                </select>
              </div>
              <div className="form-group">
                <textarea placeholder="Tell us about your business..." rows="5" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-lg">Send Inquiry</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="partners-footer">
        <div className="container-landing">
          <div className="footer-links">
            <div className="footer-col">
              <h4>Company</h4>
              <a href="#about">About</a>
              <a href="#blog">Blog</a>
              <a href="#careers">Careers</a>
            </div>
            <div className="footer-col">
              <h4>Resources</h4>
              <a href="#docs">Documentation</a>
              <a href="#api">API Reference</a>
              <a href="#support">Support</a>
            </div>
            <div className="footer-col">
              <h4>Legal</h4>
              <a href="#privacy">Privacy</a>
              <a href="#terms">Terms</a>
              <a href="#cookies">Cookies</a>
            </div>
            <div className="footer-col">
              <h4>Connect</h4>
              <a href="#twitter">Twitter</a>
              <a href="#linkedin">LinkedIn</a>
              <a href="#github">GitHub</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 MoneyManager. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
