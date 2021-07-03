import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let users = await JSON.parse(localStorage.getItem('users') || '[]');
    const isUserRegistered =
      users.filter((usr) => usr.username === username && usr.password === password).length > 0;

    if (isUserRegistered) {
      localStorage.setItem('userInfo', JSON.stringify({ username, password }));
      localStorage.setItem('isUserLoggedIn', true);
      history.push({
        pathname: '/',
        user: { username, password },
      });
    } else {
      alert('Incorrected credentials or User is not registered, please signup!!');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          value={username}
          placeholder="enter a username"
          onChange={({ target }) => setUsername(target.value)}
          required
        />
        <div>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            value={password}
            placeholder="enter a password"
            onChange={({ target }) => setPassword(target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <Link to="/signup">SignUp</Link>
    </>
  );
};

export default Login;
