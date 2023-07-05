import React, { useState, useEffect } from 'react';
import city from '../assets/city.png';
import axios from 'axios';

const initialState = {
  email: '',
  password: '',
  passwordConfirm: '',
  valid: '',
};

const Login = () => {
  const [formState, setFormState] = useState(initialState);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchOneUser();
  }, []);

  const fetchOneUser = async () => {
    try {
      const response = await axios.get("https://walksafenyc-api-production.up.railway.app/api/users");
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormState(initialState);

    const { email, password } = formState;

    const selectedUser = users.find(
      (user) => user.email === email && user.password === password
    );

    if (selectedUser) {
      console.log('Logged in:', selectedUser);
      setFormState({ ...formState, valid: 'Credentials are correct' });
    } else {
      setFormState({ ...formState, valid: 'Invalid credentials' });
    }
  };

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };

  return (
    <div className="login-page">
      <div className="form-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <h4>Login to your account.</h4>
          <div className="login-question">
            <label htmlFor="email">Email:</label>
            <input
              value={formState.email}
              onChange={handleChange}
              name="email"
              id="email"
              type="email"
              placeholder="youremail@gmail.com"
            />
          </div>
          <div className="login-question">
            <label htmlFor="password">Password:</label>
            <input
              value={formState.password}
              onChange={handleChange}
              name="password"
              id="password"
              type="password"
              placeholder="*******"
           />
          </div>
          <button id="log-in-button" className="submit-button" type="submit">
            Log in
          </button>
          {formState.valid && <p>{formState.valid}</p>}
        </form>
        <img src={city} alt="City" />
      </div>
    </div>
  );
};

export default Login;
