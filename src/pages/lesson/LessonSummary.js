import React from 'react';
import { useFirestore } from '../../hooks/useFirestore';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../hooks/useAuthContext';
import Speech from 'react-speech'
import './Lesson.css';
import Input from '@mui/material/Input';
import Alert from '@mui/material/Alert';
import { useState } from 'react';

const ariaLabel = { 'aria-label': 'description' };

export default function LessonSummary({lesson}) {
    //const { Document} = useFirestore('lessons')
    //const { user} = useAuthContext() 
    const [anser1, setAnser1] = useState('')
    const [anser2, setAnser2] = useState('')
    const [anser3, setAnser3] = useState('')
    const [anser4, setAnser4] = useState('')
    const [anser5, setAnser5] = useState('')
    const [anser6, setAnser6] = useState('')
    const [anser7, setAnser7] = useState('')
    const [anser8, setAnser8] = useState('')
    const [anser9, setAnser9] = useState('')
    const [anser10, setAnser10] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(anser1, anser2)
    }

  return (
    <form onSubmit={handleSubmit}>
        <div className='words'>
        <div className='speechButton'>
            <Speech 
                textAsButton={true}    
                displayText="Play" 
                text={lesson.word1}
                />
                </div>
            <Input placeholder="Write it down" inputProps={ariaLabel} 
                required
                type="text"
                onChange={(e) => setAnser1(e.target.value)}
                value={anser1}
            />
            <Alert className='disabled' variant="filled" severity="error">
                This is an error
            </Alert>
        </div>
        <div>
            <Speech 
                textAsButton={true}    
                displayText="Play" 
                text={lesson.word2}
                />
            <Input placeholder="Write it down" inputProps={ariaLabel} 
                required
                type="text"
                onChange={(e) => setAnser2(e.target.value)}
                value={anser2}
            />
        </div>
        <div>
            <Speech 
                textAsButton={true}    
                displayText="Play" 
                text={lesson.word3}
                />
            <Input placeholder="Write it down" inputProps={ariaLabel} 
                required
                type="text"
                onChange={(e) => setAnser3(e.target.value)}
                value={anser3}
            />
        </div>
        <div>
            <Speech 
                textAsButton={true}    
                displayText="Play" 
                text={lesson.word4}
                />
            <Input placeholder="Write it down" inputProps={ariaLabel} 
                required
                type="text"
                onChange={(e) => setAnser4(e.target.value)}
                value={anser4}
            />
        </div>
        <div>
            <Speech 
                textAsButton={true}    
                displayText="Play" 
                text={lesson.word5}
                />
            <Input placeholder="Write it down" inputProps={ariaLabel} 
                required
                type="text"
                onChange={(e) => setAnser5(e.target.value)}
                value={anser5}
            />
        </div>
        <div>
            <Speech 
                textAsButton={true}    
                displayText="Play" 
                text={lesson.word6}
                />
            <Input placeholder="Write it down" inputProps={ariaLabel} 
                required
                type="text"
                onChange={(e) => setAnser6(e.target.value)}
                value={anser6}
            />
        </div>
        <div>
            <Speech 
                textAsButton={true}    
                displayText="Play" 
                text={lesson.word7}
                />
            <Input placeholder="Write it down" inputProps={ariaLabel} 
                required
                type="text"
                onChange={(e) => setAnser7(e.target.value)}
                value={anser7}
            />
        </div>
        <div>
            <Speech 
                textAsButton={true}    
                displayText="Play" 
                text={lesson.word8}
                />
            <Input placeholder="Write it down" inputProps={ariaLabel} 
                required
                type="text"
                onChange={(e) => setAnser8(e.target.value)}
                value={anser8}
            />
        </div>
        <div>
            <Speech 
                textAsButton={true}    
                displayText="Play" 
                text={lesson.word9}
                />
            <Input placeholder="Write it down" inputProps={ariaLabel} 
                required
                type="text"
                onChange={(e) => setAnser9(e.target.value)}
                value={anser9}
            />
        </div>
        <div>
            <Speech 
                textAsButton={true}    
                displayText="Play" 
                text={lesson.word10}
                />
            <Input placeholder="Write it down" inputProps={ariaLabel} 
                required
                type="text"
                onChange={(e) => setAnser10(e.target.value)}
                value={anser10}
            />
        </div>
        <button className="btn">Check</button>
        
       
    </form>
  )
}