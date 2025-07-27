import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
 import { ToastContainer, toast } from 'react-toastify';
function Admin() {

    const [name, setName] = useState('');
    const [password, setPassword] =useState('');
   const navigate = useNavigate();

 const handelsubmit = async (e)=>{
    console.log("yess")
     e.preventDefault()
    const userdata =  await axios.post(`http://localhost:8080/admin`,{name,password})
    if (userdata.data.length > 0) {
        toast("admin successfully logged in!");

  navigate('/adminlogin', { state: { users: userdata.data } });
}
}
  return (
    <div>
    <form onSubmit={handelsubmit} className="max-w-sm mx-auto ml-[600px] space-y-4 p-4 border rounded-md bg-white">
        <h1>Admin login </h1>
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
    <input
      type="text"
      placeholder="Enter name"
      value={name}
      onChange={(e) => setName(e.target.value)}
      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
    />
  </div>

  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
    <input
      type="password"
      placeholder="Enter password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
    />
  </div>

  <button
    type="submit"
    className="w-full bg-blue-600 text-black py-2 rounded-md hover:bg-blue-700 transition"
  >
    Submit
  </button>
</form>


    </div>
  )
}

export default Admin