import { Link } from 'react-router-dom';
import './styles.css';

function SignIn() {
  return (
    <div className='container signin'>
      <form>
        <h1>Cubos Academy</h1>
        <div className='inputs'>
          <input type='text' placeholder='E-mail' />
          <input type='password' placeholder='Password' />
          <p>Não tem cadastro? Clique aqui!</p>
        </div>
        <Link to='/teachers'>Login</Link>
      </form>
    </div>
  );
}

export default SignIn;