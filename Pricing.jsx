import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Check, X, ArrowRight, Zap, Shield, BarChart3, Users, Headphones, Settings, CreditCard } from 'lucide-react'

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false)

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for individuals',
      icon: Zap,
      price: isAnnual ? 9.99 : 12.99,
      period: 'month',
      cta: 'Get Started',
      popular: false,
      features: [
        { name: 'Up to 500 transactions', included: true },
        { name: 'Basic categorization', included: true },
        { name: 'Monthly reports', included: true },
        { name: '1 user account', included: true },
        { name: 'Mobile app access', included: false },
        { name: 'Advanced analytics', included: false },
        { name: 'Team collaboration', included: false },
        { name: 'API access', included: false },
      ]
    },
    {
      name: 'Professional',
      description: 'For growing businesses',
      icon: BarChart3,
      price: isAnnual ? 29.99 : 39.99,
      period: 'month',
      cta: 'Start Free Trial',
      popular: true,
      features: [
        { name: 'Unlimited transactions', included: true },
        { name: 'Smart categorization', included: true },
        { name: 'Weekly & monthly reports', included: true },
        { name: 'Up to 5 users', included: true },
        { name: 'Mobile app access', included: true },
        { name: 'Advanced analytics', included: true },
        { name: 'Team collaboration', included: false },
        { name: 'API access', included: false },
      ]
    },
    {
      name: 'Enterprise',
      description: 'For large teams',
      icon: Shield,
      price: isAnnual ? 99.99 : 129.99,
      period: 'month',
      cta: 'Contact Sales',
      popular: false,
      features: [
        { name: 'Unlimited transactions', included: true },
        { name: 'Smart categorization', included: true },
        { name: 'Real-time reports', included: true },
        { name: 'Unlimited users', included: true },
        { name: 'Mobile app access', included: true },
        { name: 'Advanced analytics', included: true },
        { name: 'Team collaboration', included: true },
        { name: 'API access', included: true },
      ]
    }
  ]

  const allFeatures = [
    { category: 'Core Features', features: ['Transaction Management', 'Category Management', 'Budget Tracking', 'Report Generation'] },
    { category: 'Analytics', features: ['Basic Charts', 'Trend Analysis', 'Spending Insights', 'Custom Reports'] },
    { category: 'Integrations', features: ['Bank Sync', 'Invoice Import', 'Expense Receipt OCR', 'Tax Export'] },
    { category: 'Support', features: ['Email Support', 'Knowledge Base', 'Priority Support', 'Dedicated Manager'] }
  ]

  return (
    <div className="pricing-root">
      {/* Header */}
      <header className="pricing-header">
        <div className="container-landing">
          <nav className="pricing-nav">
            <Link to="/" className="pricing-logo">MoneyManager</Link>
            <div className="pricing-nav-links">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/login" className="btn btn-outline-dark">Login</Link>
              <Link to="/register" className="btn btn-primary">Get Started</Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pricing-hero">
        <div className="container-landing">
          <div className="pricing-hero-content">
            <div className="pricing-eyebrow">Simple, Transparent Pricing</div>
            <h1 className="pricing-title">Choose the Perfect Plan for Your Needs</h1>
            <p className="pricing-subtitle">Start free and scale with us. Upgrade or downgrade at any time.</p>

            {/* Toggle */}
            <div className="pricing-toggle">
              <button 
                className={`toggle-option ${!isAnnual ? 'active' : ''}`}
                onClick={() => setIsAnnual(false)}
              >
                Monthly
              </button>
              <button 
                className={`toggle-option ${isAnnual ? 'active' : ''}`}
                onClick={() => setIsAnnual(true)}
              >
                Annual
                <span className="badge-save">Save 20%</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pricing-cards">
        <div className="container-landing">
          <div className="cards-grid">
            {plans.map((plan, idx) => {
              const Icon = plan.icon
              return (
                <div key={idx} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
                  {plan.popular && <div className="popular-badge">Most Popular</div>}
                  
                  <div className="card-header-top">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Icon size={20} className="text-blue-500" />
                        <h3 className="pricing-plan-name">{plan.name}</h3>
                      </div>
                      <p className="pricing-plan-desc">{plan.description}</p>
                    </div>
                  </div>

                  <div className="pricing-amount">
                    <span className="amount-symbol">$</span>
                    <span className="amount-value">{plan.price.toFixed(2)}</span>
                    <span className="amount-period">/{plan.period}</span>
                  </div>

                  <button className={`pricing-cta ${plan.popular ? 'btn-primary' : 'btn-secondary'}`}>
                    {plan.cta}
                    <ArrowRight size={16} />
                  </button>

                  <div className="features-list">
                    {plan.features.map((feature, fidx) => (
                      <div key={fidx} className="feature-item">
                        {feature.included ? (
                          <Check size={18} className="feature-icon included" />
                        ) : (
                          <X size={18} className="feature-icon excluded" />
                        )}
                        <span className={feature.included ? 'included' : 'excluded'}>
                          {feature.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="comparison-section">
        <div className="container-landing">
          <h2 className="comparison-title">Detailed Feature Comparison</h2>
          
          <div className="comparison-grid-container">
            {allFeatures.map((section, idx) => (
              <div key={idx} className="comparison-section-block">
                <h3 className="comparison-category">{section.category}</h3>
                <div className="comparison-features">
                  {section.features.map((feature, fidx) => (
                    <div key={fidx} className="comparison-feature-row">
                      <span className="feature-name">{feature}</span>
                      <div className="feature-support">
                        <div className="support-starter">
                          <Check size={16} className={idx === 0 ? 'text-green-500' : idx === 1 ? 'text-green-500' : 'text-gray-300'} />
                        </div>
                        <div className="support-pro">
                          <Check size={16} className="text-green-500" />
                        </div>
                        <div className="support-enterprise">
                          <Check size={16} className="text-green-500" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <div className="container-landing">
          <h2 className="benefits-title">What You Get With Every Plan</h2>
          
          <div className="benefits-grid">
            {[
              { icon: Shield, title: 'Enterprise Security', desc: 'Bank-level encryption and security' },
              { icon: Users, title: 'Team Ready', desc: 'Collaborate with your entire team' },
              { icon: Headphones, title: '24/7 Support', desc: 'Expert support when you need it' },
              { icon: CreditCard, title: 'Easy Payment', desc: 'Multiple payment methods accepted' },
              { icon: Settings, title: 'Customization', desc: 'Tailor the platform to your needs' },
              { icon: BarChart3, title: 'Smart Analytics', desc: 'Actionable insights from your data' }
            ].map((benefit, idx) => {
              const Icon = benefit.icon
              return (
                <div key={idx} className="benefit-card">
                  <div className="benefit-icon">
                    <Icon size={24} />
                  </div>
                  <h3 className="benefit-title">{benefit.title}</h3>
                  <p className="benefit-desc">{benefit.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container-landing">
          <h2 className="faq-title">Frequently Asked Questions</h2>
          
          <div className="faq-grid">
            {[
              { q: 'Can I change plans anytime?', a: 'Yes! You can upgrade or downgrade your plan at any time. Changes take effect on your next billing cycle.' },
              { q: 'Is there a free trial?', a: 'Absolutely! Start with our free 14-day trial. No credit card required.' },
              { q: 'What payment methods do you accept?', a: 'We accept all major credit cards, bank transfers, and PayPal for your convenience.' },
              { q: 'Can I export my data?', a: 'Yes, you can export all your financial data in multiple formats (CSV, Excel, PDF).' },
              { q: 'Is my data secure?', a: 'Your data is protected with military-grade encryption and regular security audits.' },
              { q: 'Do you offer discounts for annual plans?', a: 'Yes! Annual plans come with a 20% discount compared to monthly pricing.' }
            ].map((item, idx) => (
              <div key={idx} className="faq-item">
                <h4 className="faq-question">{item.q}</h4>
                <p className="faq-answer">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pricing-cta-section">
        <div className="container-landing">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Take Control of Your Finances?</h2>
            <p className="cta-subtitle">Join thousands of businesses managing their money smarter every day</p>
            <div className="cta-buttons">
              <Link to="/register" className="btn btn-primary btn-lg">Start Your Free Trial</Link>
              <Link to="/about" className="btn btn-outline-dark btn-lg">Learn More</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="pricing-footer">
        <div className="container-landing">
          <div className="footer-content">
            <div className="footer-section">
              <h4>MoneyManager</h4>
              <p>Your trusted financial management platform</p>
            </div>
            <div className="footer-section">
              <h5>Product</h5>
              <a href="#features">Features</a>
              <a href="#pricing">Pricing</a>
              <a href="#security">Security</a>
            </div>
            <div className="footer-section">
              <h5>Company</h5>
              <a href="#about">About</a>
              <a href="#blog">Blog</a>
              <a href="#careers">Careers</a>
            </div>
            <div className="footer-section">
              <h5>Legal</h5>
              <a href="#privacy">Privacy</a>
              <a href="#terms">Terms</a>
              <a href="#contact">Contact</a>
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
