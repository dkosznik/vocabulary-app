import './LessonList.css'
import { Link } from 'react-router-dom';


export default function LessonList({lessons}) {

  return (
    <div className='project-list'>
        {lessons.length === 0 && <p>No lessons yet!</p>}
        {lessons.map(lesson => (
            <Link to={`/lessons/${lesson.id}`} key={lesson.id}>
                <h4>
                    {lesson.createdAt.toDate().toLocaleDateString() + ' '} 
                    {lesson.createdAt.toDate().toLocaleTimeString()}
                </h4>
            </Link>
        ))}
    </div>
  )
}