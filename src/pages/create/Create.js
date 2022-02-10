import './Create.css'
import { useEffect, useState } from 'react';
import { useCollection } from '../../hooks/useCollection';
import { projectFirestore } from '../../firebase/config';
import { timestamp } from '../../firebase/config';
import { useAuthContext } from '../../hooks/useAuthContext';
import { useFirestore } from '../../hooks/useFirestore';
import { useNavigate } from 'react-router-dom';

export default function Create({uid}) {
  // form field values
  const [word1, setWord1] = useState('')
  const [word2, setWord2] = useState('')
  const [word3, setWord3] = useState('')
  const [word4, setWord4] = useState('')
  const [word5, setWord5] = useState('')
  const [word6, setWord6] = useState('')
  const [word7, setWord7] = useState('')
  const [word8, setWord8] = useState('')
  const [word9, setWord9] = useState('')
  const [word10, setWord10] = useState('')
  
  const [formError, setFormError] = useState(null)

  const { documents } = useCollection('users')
  const [users, setUsers] = useState([])
  const { user} = useAuthContext()
  const { addDocument, response} = useFirestore('lessons')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormError(null)

    const lesson = {
      uid:user.uid,
      word1,
      word2,
      word3,
      word4,
      word5,
      word6,
      word7,
      word8,
      word9,
      word10
      }
    await addDocument(lesson)
    if (!response.error) {
      navigate('/')
    }
  }

  useEffect(() => {
    if (documents) {
      const options = documents.map(user => {
        return { value: user, label: user.displayName}
      })
      setUsers(options)
    } 
    
  },[documents])

  return (
    <div>
      <div className="create-form">
        <h2 className="page-title">Create a list of words</h2>
      
      <form onSubmit={handleSubmit}>
        <label>
          <span>Word 1:</span>
          <input 
          required
          type="text"
          onChange={(e) => setWord1(e.target.value)}
          value={word1}
           />
        </label>
        <label>
          Word 2:
          <input 
          required
          type="text"
          onChange={(e) => setWord2(e.target.value)}
          value={word2}
           />
           </label>
        
        <label>
          <span>Word 3:</span>
          <input 
          required
          type="text"
          onChange={(e) => setWord3(e.target.value)}
          value={word3}
           />
        </label>
        <label>
          <span>Word 4:</span>
          <input 
          required
          type="text"
          onChange={(e) => setWord4(e.target.value)}
          value={word4}
           />
        </label>
        <label>
          <span>Word 5:</span>
          <input 
          required
          type="text"
          onChange={(e) => setWord5(e.target.value)}
          value={word5}
           />
        </label>
        <label>
          <span>Word 6:</span>
          <input 
          required
          type="text"
          onChange={(e) => setWord6(e.target.value)}
          value={word6}
           />
        </label>
        <label>
          <span>Word 7:</span>
          <input 
          required
          type="text"
          onChange={(e) => setWord7(e.target.value)}
          value={word7}
           />
        </label>
        <label>
          <span>Word 8:</span>
          <input 
          required
          type="text"
          onChange={(e) => setWord8(e.target.value)}
          value={word8}
           />
        </label>
        <label>
          <span>Word 9:</span>
          <input 
          required
          type="text"
          onChange={(e) => setWord9(e.target.value)}
          value={word9}
           />
        </label>
        <label>
          <span>Word 10:</span>
          <input 
          required
          type="text"
          onChange={(e) => setWord10(e.target.value)}
          value={word10}
           />
        </label>
        <button className="btn">Add all words</button>

        {formError && <p className='error'>{formError}</p>}

      </form>
    </div>
    </div>
  )
}