import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

const SignUp = () => {
  const [userInfo, setUserInfo] = useState({
    email: '',
    username: '',
    password: '',
  });

  const history = useHistory();

  const handleInputChange = (event) => {
    const value = event.target.value;
    setUserInfo({
      ...userInfo,
      [event.target.name]: value,
    });
  };

  const canUserSignUp = (users = []) => {
    const { email, username } = userInfo;
    const isUserAlreadyExist =
      users.filter((user) => user.email === email || user.username === username).length > 0;
    return isUserAlreadyExist;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let users = await JSON.parse(localStorage.getItem('users') || '[]');
    const isUserExist = canUserSignUp(users);
    if (isUserExist) {
      alert('User is already registered!! please try with different username and email');
      return;
    }
    users.push(userInfo);
    localStorage.setItem('users', JSON.stringify(users));
    history.push('/');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            name="email"
            value={userInfo.email}
            placeholder="enter a email"
            onChange={handleInputChange}
            required
          />
        </div>
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          name="username"
          value={userInfo.username}
          placeholder="enter a username"
          onChange={handleInputChange}
          required
        />
        <div>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="password"
            value={userInfo.password}
            placeholder="enter a password"
            onChange={handleInputChange}
            required
          />
        </div>

        <button type="submit">SignUp</button>
      </form>
      <Link to="/login">Login</Link>
    </>
  );
};

export default SignUp;
