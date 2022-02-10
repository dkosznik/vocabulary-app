import './Dashboard.css'
import { useCollection } from '../../hooks/useCollection';
import { useAuthContext } from '../../hooks/useAuthContext';
import LessonList from '../../components/LessonList';


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
    </div>
  )
}
