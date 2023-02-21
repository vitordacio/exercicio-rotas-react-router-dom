import { Link } from 'react-router-dom'
import './styles.css'

const Card = ({ teacher }) => {

    return (
        <Link className="card" to={`/teachers/${teacher.id}`}>
            <img src={teacher.avatar} alt='Profile' />
            <p>{teacher.name}</p>
        </Link>
    )
}

export default Card