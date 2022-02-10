import './Dashboard.css'
import { useCollection } from '../../hooks/useCollection';
import { useState} from 'react'
import { useAuthContext } from '../../hooks/useAuthContext';
import LessonList from '../../components/LessonList';
import Create from '../create/Create';


export default function Dashboard() {
  const { user} = useAuthContext()
  const { documents, error} = useCollection(
    'lessons',
    ['uid','==', user.uid],
    ['createdAt', 'desc']
    )

  const lessons = documents

  return (
    <div>
      <h2 className="page-title">Dashboard</h2>
      {error && <p className='errpr'>{error}</p>}
      {documents && <LessonList lessons={lessons}/>}
      <Create uid={user.uid}/>
    </div>
  )
}
