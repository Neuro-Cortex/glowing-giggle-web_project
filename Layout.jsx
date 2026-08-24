import React from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { Home, List, PieChart, User, LogOut } from 'lucide-react'

export default function Layout({children}){
  const navigate = useNavigate()
  const loc = useLocation()
  const logout = ()=>{ localStorage.removeItem('token'); navigate('/login') }
  return (
    <div className="layout-root">
      <aside className="sidebar">
        <div className="brand">MoneyManager</div>
        <nav>
          <div style={{display:'flex',flexDirection:'column'}}>
            <Link to="/dashboard" className={`nav-link ${loc.pathname === '/dashboard' ? 'active' : ''}`}>
              <div style={{display:'flex',alignItems:'center'}}>
                {loc.pathname === '/dashboard' && <div className="nav-indicator" />}
                <span className="nav-icon"><Home size={18} /></span>
                <span>Dashboard</span>
              </div>
            </Link>

            <Link to="/transactions" className={`nav-link ${loc.pathname.startsWith('/transactions') ? 'active' : ''}`}>
              <div style={{display:'flex',alignItems:'center'}}>
                {loc.pathname.startsWith('/transactions') && <div className="nav-indicator" />}
                <span className="nav-icon"><List size={18} /></span>
                <span>Transactions</span>
              </div>
            </Link>

            <Link to="/categories" className={`nav-link ${loc.pathname.startsWith('/categories') ? 'active' : ''}`}>
              <div style={{display:'flex',alignItems:'center'}}>
                {loc.pathname.startsWith('/categories') && <div className="nav-indicator" />}
                <span className="nav-icon"><PieChart size={18} /></span>
                <span>Categories</span>
              </div>
            </Link>

            <Link to="/profile" className={`nav-link ${loc.pathname.startsWith('/profile') ? 'active' : ''}`} style={{marginTop:12}}>
              <div style={{display:'flex',alignItems:'center'}}>
                {loc.pathname.startsWith('/profile') && <div className="nav-indicator" />}
                <span className="nav-icon"><User size={18} /></span>
                <span>Profile</span>
              </div>
            </Link>
          </div>
        </nav>

        <div style={{marginTop:20}}>
          <button className="btn btn-outline" onClick={logout}><span style={{display:'inline-flex',alignItems:'center',gap:8}}><LogOut size={16}/> Logout</span></button>
        </div>
      </aside>

      <div style={{flex:1,display:'flex',flexDirection:'column'}}>
        <div className="topbar">
          <div style={{display:'flex',alignItems:'center',gap:12}}>
            <div style={{fontWeight:800}}>MoneyManager</div>
            <div className="muted" style={{fontSize:13}}>Analytics Dashboard</div>
          </div>
          <div style={{marginLeft:'auto',display:'flex',alignItems:'center',gap:12}}>
            <div className="muted">hello@example.com</div>
          </div>
        </div>

        <div className="content-area">
          {children}
        </div>
      </div>
    </div>
  )
}
