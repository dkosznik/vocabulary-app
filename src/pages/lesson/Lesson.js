import './Lesson.css'
import { useParams } from 'react-router-dom';
import { useDocument } from '../../hooks/useDocument';
import LessonSummary from './LessonSummary'

export default function Lesson() {
  const { id } = useParams()
  const { error, document} = useDocument('lessons', id)

  if (error) {
    return <div className='error'>{error}</div>
  }
  if (!document) {
    return <div className='loading'>loading...</div>
  }

    return (
      <div className='project-details'> 
        <LessonSummary lesson={document}/>
      </div>
    )
}