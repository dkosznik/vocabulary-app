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
    const [correct, setCorrect] = useState('disabled')
    const [wrong, setWrong] =useState('disabled')
    const [displayStyles, setDisplayStyles] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        setDisplayStyles('active')

        if (anser1 === lesson.word1) {
            setCorrect('active')
        }
        if (anser1 !== lesson.word1) {
            setWrong('active')
        }
        if (anser2 === lesson.word2) {
            setCorrect('active')
        }
        if (anser2 !== lesson.word2) {
            setWrong('active')
        }
        if (anser3 === lesson.word3) {
            setCorrect('active')
        }
        if (anser3 !== lesson.word3) {
            setWrong('active')
        }
        if (anser4 === lesson.word4) {
            setCorrect('active')
        }
        if (anser4 !== lesson.word4) {
            setWrong('active')
        }
        if (anser5 === lesson.word5) {
            setCorrect('active')
        }
        if (anser5 !== lesson.word5) {
            setWrong('active')
        }
        if (anser6 === lesson.word6) {
            setCorrect('active')
        }
        if (anser6 !== lesson.word6) {
            setWrong('active')
        }
        if (anser7 === lesson.word7) {
            setCorrect('active')
        }
        if (anser7 !== lesson.word7) {
            setWrong('active')
        }
        if (anser8 === lesson.word8) {
            setCorrect('active')
        }
        if (anser8 !== lesson.word8) {
            setWrong('active')
        }
        if (anser9 === lesson.word9) {
            setCorrect('active')
        }
        if (anser9 !== lesson.word9) {
            setWrong('active')
        }
        if (anser10 === lesson.word10) {
            setCorrect('active')
        }
        if (anser10 !== lesson.word10) {
            setWrong('active')
        }
        
        
        
    }

  return (
    <form onSubmit={handleSubmit}>
            <div className={displayStyles}>
                    <Speech 
                        textAsButton={true}    
                        displayText="Play" 
                        text={lesson.word1}
                        />
                    <Input placeholder="Write it down" inputProps={ariaLabel} 
                        required
                        type="text"
                        onChange={(e) => setAnser1(e.target.value)}
                        value={anser1}
                    />
                    {lesson.word1 === anser1
                        ? 
                        <Alert className={correct} variant="filled" severity="success">
                            Correct
                        </Alert>
                        :
                        <>
                            <Alert className={wrong} variant="filled" severity="error">
                                Wrong
                            </Alert>
                            <Alert className={wrong} severity="info">
                                {lesson.word1}
                            </Alert>
                        </>
                        
                    }
                </div>
            <div className={displayStyles}>
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
                {lesson.word2 === anser2
                    ? 
                    <Alert className={correct} variant="filled" severity="success">
                        Correct
                    </Alert>
                    :
                    <>
                        <Alert className={wrong} variant="filled" severity="error">
                            Wrong
                        </Alert>
                        <Alert className={wrong} severity="info">
                            {lesson.word2}
                        </Alert>
                    </>
                    
                }
        </div>
        <div className={displayStyles}>
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
            {lesson.word3 === anser3
                ? 
                <Alert className={correct} variant="filled" severity="success">
                    Correct
                </Alert>
                :
                <>
                        <Alert className={wrong} variant="filled" severity="error">
                            Wrong
                        </Alert>
                        <Alert className={wrong} severity="info">
                            {lesson.word3}
                        </Alert>
                    </> 
            }
            
        </div>
        <div className={displayStyles}>
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
            {lesson.word4 === anser4
                ? 
                <Alert className={correct} variant="filled" severity="success">
                    Correct
                </Alert>
                :
                <>
                        <Alert className={wrong} variant="filled" severity="error">
                            Wrong
                        </Alert>
                        <Alert className={wrong} severity="info">
                            {lesson.word4}
                        </Alert>
                    </> 
            }
        </div>
        <div className={displayStyles}>
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
            {lesson.word5 === anser5
                ? 
                <Alert className={correct} variant="filled" severity="success">
                    Correct
                </Alert>
                :
                <>
                        <Alert className={wrong} variant="filled" severity="error">
                            Wrong
                        </Alert>
                        <Alert className={wrong} severity="info">
                            {lesson.word5}
                        </Alert>
                    </> 
            }
        </div>
        <div className={displayStyles}>
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
            {lesson.word6 === anser6
                ? 
                <Alert className={correct} variant="filled" severity="success">
                    Correct
                </Alert>
                :
                <>
                        <Alert className={wrong} variant="filled" severity="error">
                            Wrong
                        </Alert>
                        <Alert className={wrong} severity="info">
                            {lesson.word6}
                        </Alert>
                    </> 
            }
        </div>
        <div className={displayStyles}>
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
            {lesson.word7 === anser7
                ? 
                <Alert className={correct} variant="filled" severity="success">
                    Correct
                </Alert>
                :
                <>
                        <Alert className={wrong} variant="filled" severity="error">
                            Wrong
                        </Alert>
                        <Alert className={wrong} severity="info">
                            {lesson.word7}
                        </Alert>
                    </> 
            }
        </div>
        <div className={displayStyles}>
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
            {lesson.word8 === anser8
                ? 
                <Alert className={correct} variant="filled" severity="success">
                    Correct
                </Alert>
                :
                <>
                        <Alert className={wrong} variant="filled" severity="error">
                            Wrong
                        </Alert>
                        <Alert className={wrong} severity="info">
                            {lesson.word8}
                        </Alert>
                    </> 
            }
        </div>
        <div className={displayStyles}>
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
            {lesson.word9 === anser9
                ? 
                <Alert className={correct} variant="filled" severity="success">
                    Correct
                </Alert>
                :
                <>
                        <Alert className={wrong} variant="filled" severity="error">
                            Wrong
                        </Alert>
                        <Alert className={wrong} severity="info">
                            {lesson.word9}
                        </Alert>
                    </> 
            }
        </div>
        <div className={displayStyles}>
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
            {lesson.word10 === anser10
                ? 
                <Alert className={correct} variant="filled" severity="success">
                    Correct
                </Alert>
                :
                <>
                        <Alert className={wrong} variant="filled" severity="error">
                            Wrong
                        </Alert>
                        <Alert className={wrong} severity="info">
                            {lesson.word10}
                        </Alert>
                    </> 
            }
        </div>
        <button className="btn">Check</button>
        
       
    </form>
  )
}