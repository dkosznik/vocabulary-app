import React from 'react';
import { useFirestore } from '../../hooks/useFirestore';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../hooks/useAuthContext';
import Speech from 'react-speech'



export default function LessonSummary({lesson}) {
    //const { Document} = useFirestore('lessons')
    //const { user} = useAuthContext()
  return (
    <div>
        <div>
            <Speech text={lesson.word1}/>
            <input type="text" />
        </div>
        <h2>{lesson.word2}</h2>
        <h2>{lesson.word3}</h2>
        <h2>{lesson.word4}</h2>
        <h2>{lesson.word5}</h2>
        <h2>{lesson.word6}</h2>
        <h2>{lesson.word7}</h2>
        <h2>{lesson.word8}</h2>
        <h2>{lesson.word9}</h2>
        <h2>{lesson.word10}</h2>
       
    </div>
  )
}