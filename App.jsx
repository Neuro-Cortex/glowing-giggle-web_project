import React, {useState} from 'react'
import axios from 'axios'

export default function App(){
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [token,setToken]=useState('')

  async function login(){
    const res = await axios.post('http://localhost:8080/api/auth/login',{email,password})
    setToken(res.data.token)
  }

  return (
    <div style={{padding:20}}>
      <h1>Money Manager (minimal)</h1>
      <div>
        <input placeholder="email" value={email} onChange={e=>setEmail(e.target.value)} />
        <input placeholder="password" type="password" value={password} onChange={e=>setPassword(e.target.value)} />
        <button onClick={login}>Login</button>
      </div>
      {token && <div><strong>Token:</strong> {token}</div>}
    </div>
  )
}
