import { useNavigate, useParams } from 'react-router-dom';
import './styles.css';
import { teachers } from '../../data'
import { useEffect, useState } from 'react';

function TeacherDetail() {
  const { id } = useParams()
  const [teacher, setTeacher] = useState({})
  const navigate = useNavigate()

  useEffect(() => {
    const teacher = teachers.find((teacher) => teacher.id === parseInt(id))
    setTeacher(teacher)
  }, [id])

  return (
    <div className='container'>
      <div className='btnBack' onClick={() => navigate(-1)}>
        Back
      </div>
      <h1>Cubos Academy</h1>
      <div className='modal'>
        <img src={teacher.avatar} alt='Profile' />
        <h1>{teacher.name}</h1>
        <span>{teacher.stack}</span>
        <div className='horizontal-line'></div>
        <h2>Bio</h2>
        <p>{teacher.bio}</p>
      </div>
    </div>
  );
}

export default TeacherDetail;