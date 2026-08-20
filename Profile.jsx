import React, {useState} from 'react'
import Layout from '../components/Layout'
import Card from '../components/Card'

export default function Profile(){
  const [name,setName]=useState('')
  const [file,setFile]=useState(null)

  function upload(){
    // Placeholder: frontend accepts file then calls backend upload endpoint
    alert('Profile upload placeholder')
  }

  return (
    <Layout>
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-1">
          <Card title="Profile">
            <div className="mb-4">
              <div className="w-24 h-24 bg-gray-200 rounded-full mb-2" />
              <input type="file" onChange={e=>setFile(e.target.files?.[0]||null)} />
            </div>
            <input className="w-full p-2 mb-2 border" placeholder="Name" value={name} onChange={e=>setName(e.target.value)} />
            <button className="w-full bg-accent text-white py-2 rounded" onClick={upload}>Save</button>
          </Card>
        </div>

        <div className="col-span-2">
          <Card title="User Info">
            <p className="text-sm text-gray-600">Email: user@example.com</p>
            <p className="text-sm text-gray-600">Member since: 2024</p>
          </Card>
        </div>
      </div>
    </Layout>
  )
}
