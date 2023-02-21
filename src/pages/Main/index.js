import { useEffect, useState } from 'react';
import './styles.css';

import { teachers as data } from '../../data'
import Card from '../../components/Card';

function Main() {

  const [teachers, setTeachers] = useState([])

  useEffect(() => {
    setTeachers(data)
  }, [])

  return (
    <div className='container'>
      <h1>Cubos Academy</h1>
      <div className='teachers'>
        {teachers.map((teacher) => <Card key={teacher.id} teacher={teacher} />)}
      </div>
    </div>
  );
}

export default Main;