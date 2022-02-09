import './Dashboard.css'
import { useCollection } from '../../hooks/useCollection';
import { useState} from 'react'
import { useAuthContext } from '../../hooks/useAuthContext';
import LessonList from '../../components/LessonList';


export default function Dashboard() {
  const { documents, error} = useCollection('lessons')
  const { user} = useAuthContext()

  const lessons = documents

  return (
    <div>
      <h2 className="page-title">Dashboard</h2>
      {error && <p className='errpr'>{error}</p>}
      {documents && <LessonList lessons={lessons}/>}
    </div>
  )
}
