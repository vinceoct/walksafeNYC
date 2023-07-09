
import city from '../assets/city.png';
import axios from 'axios';
import React, { useEffect, useContext, useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';

const initialState = {
  email: '',
  password: '',
  passwordConfirm: '',
  valid: '',
};

const Login = () => {
  const { login, logout, loggedIn, user} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const [formState, setFormState] = useState(initialState);
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    fetchOneUser();
  }, []);

  useEffect(() => {
    const loggedInUser = localStorage.getItem('user');
    if (loggedInUser) {
      const user = JSON.parse(loggedInUser);
      login(user);
      setSelectedUser(user);
    }
  }, [login]);

  useEffect(() => {
    const userId = new URLSearchParams(location.search).get('id');
    if (userId && selectedUser && userId === selectedUser._id) {
      setSelectedUser(null);
      localStorage.removeItem('user');
    }
  }, [location.search, selectedUser]);

  const fetchOneUser = async () => {
    try {
      const response = await axios.get(
        'https://walksafenyc-api-production.up.railway.app/api/users'
      );
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormState(initialState);

    const { email, password } = formState;

    const user = users.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      console.log('Logged in:', user);
      setFormState({ ...formState, valid: 'Credentials are correct' });
      localStorage.setItem('user', JSON.stringify(user)); // Store user in local storage
      login(user);
      setSelectedUser(user);
    } else {
      setFormState({ ...formState, valid: 'Invalid credentials' });
    }
  };

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };

  const handleLogout = () => {
    localStorage.removeItem('user'); // Clear user from local storage
    logout(user); // Clear user from context
    setSelectedUser(null);
    navigate(`/login`); // Navigate to login page with user ID as query parameter
  };

  

  const showProfile = () => {
      const id = user._id
      navigate(`${id}/`);
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
          {loggedIn ? (
            <>
              <button onClick={showProfile(user._id)}>Go to profile page</button>
              <button onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <Link to="/createAnAccount">
              <button
                id="create-account"
                className="createAccount submit-button"
              >
                Create an account.
              </button>
            </Link>
          )}
        </form>
        <img src={city} alt="City" />
      </div>
    </div>
  );
};

export default Login;
