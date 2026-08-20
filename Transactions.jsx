import React, {useEffect, useState} from 'react'
import Layout from '../components/Layout'
import api from '../api'
import Card from '../components/Card'

export default function Transactions(){
  const [list,setList]=useState([])
  const [form, setForm] = useState({amount:'',description:'',type:'EXPENSE'})

  useEffect(()=>{ load() },[])
  async function load(){ const r=await api.get('/transactions'); setList(r.data || []) }

  async function add(){ await api.post('/transactions', {...form, amount: parseFloat(form.amount), date: new Date().toISOString().slice(0,10) }); setForm({amount:'',description:'',type:'EXPENSE'}); load() }

  async function remove(id){ await api.delete(`/transactions/${id}`); load() }

  return (
    <Layout>
      <div className="flex gap-4">
        <div className="w-1/3">
          <Card title="Add Transaction">
            <select className="w-full p-2 mb-2 border" value={form.type} onChange={e=>setForm(s=>({...s,type:e.target.value}))}>
              <option value="EXPENSE">Expense</option>
              <option value="INCOME">Income</option>
            </select>
            <input className="w-full p-2 mb-2 border" placeholder="Amount" value={form.amount} onChange={e=>setForm(s=>({...s,amount:e.target.value}))} />
            <input className="w-full p-2 mb-2 border" placeholder="Description" value={form.description} onChange={e=>setForm(s=>({...s,description:e.target.value}))} />
            <button className="w-full bg-accent text-white py-2 rounded" onClick={add}>Add</button>
          </Card>
        </div>

        <div className="flex-1">
          <Card title="Transactions">
            <table className="w-full text-sm">
              <thead className="text-left text-gray-500"><tr><th>Desc</th><th>Amount</th><th>Type</th><th></th></tr></thead>
              <tbody>
                {list.map(t=> (
                  <tr key={t.id} className="border-t"><td>{t.description}</td><td>${t.amount}</td><td>{t.type}</td><td><button className="text-red-600" onClick={()=>remove(t.id)}>Delete</button></td></tr>
                ))}
              </tbody>
            </table>
          </Card>
        </div>
      </div>
    </Layout>
  )
}
