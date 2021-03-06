import './Create.css'
import { useEffect, useState } from 'react';
import { useCollection } from '../../hooks/useCollection';
import { projectFirestore } from '../../firebase/config';
import { timestamp } from '../../firebase/config';
import { useAuthContext } from '../../hooks/useAuthContext';
import { useFirestore } from '../../hooks/useFirestore';
import { useNavigate } from 'react-router-dom';
import Input from '@mui/material/Input';

const ariaLabel = { 'aria-label': 'description' };


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

  // useEffect(() => {
  //   if (documents) {
  //     const options = documents.map(user => {
  //       return { value: user, label: user.displayName}
  //     })
  //     setUsers(options)
  //   } 
    
  // },[documents])

  return (
    <div>
      <div >
        <h2 className="page-title">Create a list of words</h2>
      
      <form onSubmit={handleSubmit} >

      <div className="create-form">
      
      <Input placeholder="First word" inputProps={ariaLabel} 
                required
                type="text"
                onChange={(e) => setWord1(e.target.value)}
                value={word1}
      />
      <Input placeholder="Second word" inputProps={ariaLabel} 
                required
                type="text"
                onChange={(e) => setWord2(e.target.value)}
                value={word2}
      />
      <Input placeholder="Third word" inputProps={ariaLabel} 
                required
                type="text"
                onChange={(e) => setWord3(e.target.value)}
                value={word3}
      />
      <Input placeholder="Fourth word" inputProps={ariaLabel} 
                required
                type="text"
                onChange={(e) => setWord4(e.target.value)}
                value={word4}
      />
      <Input placeholder="Fifth word" inputProps={ariaLabel} 
                required
                type="text"
                onChange={(e) => setWord5(e.target.value)}
                value={word5}
      />
      <Input placeholder="Sixth word" inputProps={ariaLabel} 
                required
                type="text"
                onChange={(e) => setWord6(e.target.value)}
                value={word6}
      />
      <Input placeholder="Seventh word" inputProps={ariaLabel} 
                required
                type="text"
                onChange={(e) => setWord7(e.target.value)}
                value={word7}
      />
      <Input placeholder="Eighth word" inputProps={ariaLabel} 
                required
                type="text"
                onChange={(e) => setWord8(e.target.value)}
                value={word8}
      />
      <Input placeholder="Ninth word" inputProps={ariaLabel} 
                required
                type="text"
                onChange={(e) => setWord9(e.target.value)}
                value={word9}
      />
      <Input placeholder="Tenth word" inputProps={ariaLabel} 
                required
                type="text"
                onChange={(e) => setWord10(e.target.value)}
                value={word10}
      />
      </div>
       
        <button className="btn">Add all words</button>

        {formError && <p className='error'>{formError}</p>}

      </form>
    </div>
    </div>
  )
}