import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login({ onLogin }) {
  const [form, setForm] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    // Fake auth logic for demo
    if (form.username === 'user' && form.password === 'password') {
      onLogin({ username: form.username });
      navigate('/');
    } else {
      setError('Invalid username or password');
    }
  };

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  return (
    <div className="page-container form-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} noValidate>
        <label>Username</label>
        <input name="username" value={form.username} onChange={handleChange} />

        <label>Password</label>
        <input name="password" type="password" value={form.password} onChange={handleChange} />

        {error && <span className="error-msg">{error}</span>}
        <button type="submit">Login</button>
      </form>
      <p className="switch-auth">
        Don't have an account? <span onClick={() => navigate('/register')} className="auth-link">Register here</span>
      </p>
    </div>
  );
}
