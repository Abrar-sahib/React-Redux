import { useDispatch } from 'react-redux';
import { setEmail, setPassword } from '../store/authSlice';

function LoginForm() {
  const dispatch = useDispatch();

  const handleEmailChange = (event) => {
    dispatch(setEmail(event.target.value));
  };

  const handlePasswordChange = (event) => {
    dispatch(setPassword(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submit here
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input type="email" onChange={handleEmailChange} />
      </label>
      <label>
        Password:
        <input type="password" onChange={handlePasswordChange} />
      </label>
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;
