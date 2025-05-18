import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Register({ onRegister }) {
  const [form, setForm] = useState({ username: '', email: '', password: '' });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    const errs = {};
    if (!form.username) errs.username = "Username required";
    if (!form.email || !/\S+@\S+\.\S+/.test(form.email)) errs.email = "Valid email required";
    if (!form.password || form.password.length < 6) errs.password = "Password min 6 chars";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!validate()) return;
    // In real app, call API here
    onRegister({ username: form.username });
    navigate('/');
  };

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <div className="page-container form-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit} noValidate>
        <label>Username</label>
        <input name="username" value={form.username} onChange={handleChange} />
        {errors.username && <span className="error-msg">{errors.username}</span>}

        <label>Email</label>
        <input name="email" type="email" value={form.email} onChange={handleChange} />
        {errors.email && <span className="error-msg">{errors.email}</span>}

        <label>Password</label>
        <input name="password" type="password" value={form.password} onChange={handleChange} />
        {errors.password && <span className="error-msg">{errors.password}</span>}

        <button type="submit">Register</button>
      </form>
      <p className="switch-auth">
        Already have an account? <span onClick={() => navigate('/login')} className="auth-link">Login here</span>
      </p>
    </div>
  );
}
