import './Signup.css'

import React, { useState } from 'react';

export default function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [displayName, setDisplayName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(email, password, displayName)
  }


  return (
    <form onSubmit={handleSubmit} className="login">
      <label>
        <span>email:</span>
        <input 
        type="email"
        required
        onChange={(e) => setEmail(e.target.value)}
        value={email}
         />
      </label>
      <label>
        <span>password:</span>
        <input 
        type="password"
        required
        onChange={(e) => setPassword(e.target.value)}
        value={password}
         />
      </label>
      <label>
        <span>display name:</span>
        <input 
        type="text"
        required
        onChange={(e) => setDisplayName(e.target.value)}
        value={displayName}
         />
      </label>
      <button className="btn">Signup</button>
    </form>
    )
}
