import React, { useState, useEffect, useContext } from 'react';
import city from '../assets/city.png';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthProvider'

const initialState = {
  email: '',
  password: '',
  passwordConfirm: '',
  valid: '',
};



const Login = () => {

  const { login } = useContext(AuthContext)
  const navigate = useNavigate()

  const [formState, setFormState] = useState(initialState);
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null)

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

    const user = users.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      console.log('Logged in:', user);
      setFormState({ ...formState, valid: 'Credentials are correct' });
      login(user)
      setSelectedUser(user)
    } else {
      setFormState({ ...formState, valid: 'Invalid credentials' });
    }
  };

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };

  const showProfile = () => {
    if (selectedUser) {
      navigate(`${selectedUser._id}/`)
    }
  }




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
          <div className='loginbuttons'>
          <button className='profbutton' onClick={showProfile}>Go to profile page</button>
          <Link id="linktocreate" to="/createAnAccount"><button className="createAccount">Create an account.</button></Link>
          </div>
        </form>
        <img src={city} alt="City" />
      </div>
    </div>
  );
};

export default Login;
