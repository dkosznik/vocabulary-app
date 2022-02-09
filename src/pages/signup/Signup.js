import './Signup.css'

import { useState } from 'react';
import { useSignup } from '../../hooks/useSignup'

export default function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [displayName, setDisplayName] = useState('')
  const { signup, isPending, error } = useSignup()

  const handleSubmit = (e) => {
    e.preventDefault()
    signup(email, password, displayName)
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
      { !isPending && <button className="btn">Sign up</button> }
      { isPending && <button className="btn" disabled>loading</button> }
      { error && <div className='error'>{error}</div> }
    </form>
    )
}
