import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


function NewUser() {
      const [name, setname]= useState('')
    const [email, setemail]= useState('')
    const [phone, setphone]= useState('')
    const [address, setaddress]= useState('')
    const navigate = useNavigate()

    const handelsubmit = (e)=>{
   e.preventDefault()
   axios.post('http://localhost:8080/register',{name,email,phone,address})
   setname('')
    setemail('')
    setphone('')
    setaddress('')
    navigate('/admin')
   
    }
  return (
  <>
 <form onSubmit={handelsubmit} className="border w-[400px] mx-auto ml-[600px] p-6 rounded-md space-y-4 bg-white">
  <div>
    <label className="block text-sm font-semibold mb-1">Name</label>
    <input
      type="text"
      placeholder="Enter name"
      className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
      value={name}
      onChange={(e) => setname(e.target.value)}
    />
  </div>

  <div>
    <label className="block text-sm font-semibold mb-1">Email</label>
    <input
      type="email"
      placeholder="Enter email"
      className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
      value={email}
      onChange={(e) => setemail(e.target.value)}
    />
  </div>

  <div>
    <label className="block text-sm font-semibold mb-1">Phone</label>
    <input
      type="text"
      placeholder="Enter phone"
      className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
      value={phone}
      onChange={(e) => setphone(e.target.value)}
    />
  </div>

  <div>
    <label className="block text-sm font-semibold mb-1">Address</label>
    <input
      type="text"
      placeholder="Enter address"
      className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
      value={address}
      onChange={(e) => setaddress(e.target.value)}
    />
  </div>

  <button
    type="submit"
    className="w-full bg-blue-600 text-black py-2 rounded-md hover:bg-blue-700 transition"
  >
    Submit
  </button>
</form>

  </>
  )
}

export default NewUser