import { useState } from 'react';

const modalOverlayStyle = {
  position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
  background: 'rgba(0,0,0,0.5)', zIndex: 99999,
  display: 'flex', alignItems: 'center', justifyContent: 'center',
  padding: 20,
};

const modalBoxStyle = {
  background: '#fff', borderRadius: 20, padding: '36px 32px',
  maxWidth: 480, width: '100%', position: 'relative',
  boxShadow: '0 20px 60px rgba(0,0,0,0.15)', maxHeight: '90vh', overflowY: 'auto',
};

const inputStyle = {
  width: '100%', padding: '12px 16px', border: '1px solid #dee2e6',
  borderRadius: 8, fontSize: '0.95rem', fontFamily: 'inherit',
  outline: 'none', transition: 'border-color 0.2s',
};

const labelStyle = {
  display: 'block', fontSize: '0.9rem', fontWeight: 600,
  color: '#212529', marginBottom: 6,
};

const btnPrimary = {
  background: '#B91C1C', color: '#fff', border: 'none',
  padding: '12px 28px', borderRadius: 8, fontSize: '0.95rem',
  fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit',
  transition: 'all 0.2s',
};

const closeBtn = {
  position: 'absolute', top: 16, right: 16, background: 'none',
  border: 'none', fontSize: '1.5rem', cursor: 'pointer', color: '#6c757d',
  lineHeight: 1,
};

const linkBtnStyle = {
  background: 'none', border: 'none', color: '#B91C1C',
  fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit', fontSize: '0.88rem',
};

const backBtnStyle = {
  background: 'none', border: 'none', color: '#6c757d',
  cursor: 'pointer', fontFamily: 'inherit', fontSize: '0.88rem',
  display: 'flex', alignItems: 'center', gap: 4, marginBottom: 12,
  padding: 0,
};

const successBoxStyle = {
  background: '#F0FFF4', color: '#16A34A', padding: '14px 18px',
  borderRadius: 8, fontSize: '0.92rem', marginBottom: 16, fontWeight: 500,
};

export default function AuthModal({ isOpen, onClose, onAuth }) {
  // modes: 'login', 'signup', 'findId', 'findPassword'
  const [mode, setMode] = useState('login');
  const [form, setForm] = useState({
    username: '', password: '', name: '', birthdate: '', phone: '', email: '',
  });
  const [findForm, setFindForm] = useState({
    username: '', name: '', birthdate: '', phone: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState('');

  if (!isOpen) return null;

  const resetState = () => {
    setError('');
    setResult('');
    setForm({ username: '', password: '', name: '', birthdate: '', phone: '', email: '' });
    setFindForm({ username: '', name: '', birthdate: '', phone: '' });
  };

  const switchMode = (newMode) => {
    resetState();
    setMode(newMode);
  };

  const validateSignup = () => {
    if (!form.username.trim()) return 'Username is required';
    if (!form.password || form.password.length < 6) return 'Password must be at least 6 characters';
    if (!form.name.trim()) return 'Name is required';
    if (!form.birthdate) return 'Birthdate is required';
    if (!form.phone) return 'Phone is required';
    if (!/^\d{11}$/.test(form.phone)) return 'Phone number must be 11 digits';
    if (!form.email) return 'Email is required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return 'Invalid email format';
    return null;
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const loginField = form.username || form.email;
      if (!loginField) { setError('Username or email is required'); setLoading(false); return; }
      if (!form.password) { setError('Password is required'); setLoading(false); return; }

      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ identifier: loginField, password: form.password }),
      });
      const data = await res.json();
      if (!res.ok) { setError(data.error || 'Login failed'); setLoading(false); return; }
      localStorage.setItem('cij_token', data.token);
      localStorage.setItem('cij_user', JSON.stringify(data.user));
      if (onAuth) onAuth(data.user, data.token);
      onClose();
    } catch {
      setError('Network error. Please try again.');
    }
    setLoading(false);
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    setError('');
    const validationError = validateSignup();
    if (validationError) { setError(validationError); return; }

    setLoading(true);
    try {
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: form.username,
          password: form.password,
          name: form.name,
          birthdate: form.birthdate,
          phone: form.phone,
          email: form.email,
        }),
      });
      const data = await res.json();
      if (!res.ok) { setError(data.error || 'Signup failed'); setLoading(false); return; }

      // Auto-login after signup
      const loginRes = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ identifier: form.username, password: form.password }),
      });
      const loginData = await loginRes.json();
      if (loginRes.ok) {
        localStorage.setItem('cij_token', loginData.token);
        localStorage.setItem('cij_user', JSON.stringify(loginData.user));
        if (onAuth) onAuth(loginData.user, loginData.token);
        onClose();
      } else {
        setError('Account created. Please log in.');
        switchMode('login');
      }
    } catch {
      setError('Network error. Please try again.');
    }
    setLoading(false);
  };

  const handleFindId = async (e) => {
    e.preventDefault();
    setError('');
    setResult('');
    if (!findForm.name.trim() || !findForm.birthdate || !findForm.phone) {
      setError('All fields are required');
      return;
    }
    setLoading(true);
    try {
      const res = await fetch('/api/auth/find-id', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: findForm.name,
          birthdate: findForm.birthdate,
          phone: findForm.phone,
        }),
      });
      const data = await res.json();
      if (!res.ok) { setError(data.error || 'User not found'); setLoading(false); return; }
      setResult(`Your username is: ${data.username}`);
    } catch {
      setError('Network error. Please try again.');
    }
    setLoading(false);
  };

  const handleFindPassword = async (e) => {
    e.preventDefault();
    setError('');
    setResult('');
    if (!findForm.username.trim() || !findForm.name.trim() || !findForm.birthdate || !findForm.phone) {
      setError('All fields are required');
      return;
    }
    setLoading(true);
    try {
      const res = await fetch('/api/auth/find-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: findForm.username,
          name: findForm.name,
          birthdate: findForm.birthdate,
          phone: findForm.phone,
        }),
      });
      const data = await res.json();
      if (!res.ok) { setError(data.error || 'User not found'); setLoading(false); return; }
      setResult(`Your temporary password is: ${data.password}\nPlease log in and change it.`);
    } catch {
      setError('Network error. Please try again.');
    }
    setLoading(false);
  };

  const errorBox = error && (
    <div style={{
      background: '#FEF2F2', color: '#B91C1C', padding: '10px 14px',
      borderRadius: 8, fontSize: '0.88rem', marginBottom: 16,
    }}>{error}</div>
  );

  const resultBox = result && (
    <div style={successBoxStyle}>{result}</div>
  );

  // ---- LOGIN VIEW ----
  if (mode === 'login') {
    return (
      <div style={modalOverlayStyle} onClick={(e) => e.target === e.currentTarget && onClose()}>
        <div style={modalBoxStyle}>
          <button style={closeBtn} onClick={onClose}>&times;</button>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: 4, color: '#1A1A2E' }}>
            Log In
          </h2>
          <p style={{ color: '#6c757d', fontSize: '0.9rem', marginBottom: 24 }}>
            Log in with your username or email
          </p>

          {errorBox}

          <form onSubmit={handleLoginSubmit}>
            <div style={{ marginBottom: 16 }}>
              <label style={labelStyle}>Username or Email</label>
              <input
                style={inputStyle}
                type="text"
                value={form.username}
                onChange={(e) => setForm({ ...form, username: e.target.value })}
                required
              />
            </div>
            <div style={{ marginBottom: 24 }}>
              <label style={labelStyle}>Password</label>
              <input
                style={inputStyle}
                type="password"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                required
                minLength={6}
              />
            </div>
            <button type="submit" style={{ ...btnPrimary, width: '100%' }} disabled={loading}>
              {loading ? 'Please wait...' : 'Log In'}
            </button>
          </form>

          <div style={{ display: 'flex', justifyContent: 'center', gap: 16, marginTop: 16 }}>
            <button onClick={() => switchMode('findId')} style={linkBtnStyle}>Find ID</button>
            <span style={{ color: '#dee2e6' }}>|</span>
            <button onClick={() => switchMode('findPassword')} style={linkBtnStyle}>Find Password</button>
          </div>

          <p style={{ textAlign: 'center', marginTop: 16, fontSize: '0.88rem', color: '#6c757d' }}>
            {"Don't have an account? "}
            <button onClick={() => switchMode('signup')} style={linkBtnStyle}>
              Sign Up
            </button>
          </p>
        </div>
      </div>
    );
  }

  // ---- SIGNUP VIEW ----
  if (mode === 'signup') {
    return (
      <div style={modalOverlayStyle} onClick={(e) => e.target === e.currentTarget && onClose()}>
        <div style={modalBoxStyle}>
          <button style={closeBtn} onClick={onClose}>&times;</button>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: 4, color: '#1A1A2E' }}>
            Create Account
          </h2>
          <p style={{ color: '#6c757d', fontSize: '0.9rem', marginBottom: 24 }}>
            Sign up to access all features
          </p>

          {errorBox}

          <form onSubmit={handleSignupSubmit}>
            <div style={{ marginBottom: 16 }}>
              <label style={labelStyle}>Username</label>
              <input
                style={inputStyle}
                type="text"
                value={form.username}
                onChange={(e) => setForm({ ...form, username: e.target.value })}
                required
              />
            </div>
            <div style={{ marginBottom: 16 }}>
              <label style={labelStyle}>Password</label>
              <input
                style={inputStyle}
                type="password"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                required
                minLength={6}
              />
            </div>
            <div style={{ marginBottom: 16 }}>
              <label style={labelStyle}>Name</label>
              <input
                style={inputStyle}
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
            </div>
            <div style={{ marginBottom: 16 }}>
              <label style={labelStyle}>Birthdate</label>
              <input
                style={inputStyle}
                type="date"
                lang="en"
                value={form.birthdate}
                onChange={(e) => setForm({ ...form, birthdate: e.target.value })}
                required
              />
            </div>
            <div style={{ marginBottom: 16 }}>
              <label style={labelStyle}>Phone</label>
              <input
                style={inputStyle}
                type="text"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value.replace(/\D/g, '') })}
                required
                maxLength={11}
                placeholder="11 digits"
              />
            </div>
            <div style={{ marginBottom: 24 }}>
              <label style={labelStyle}>Email</label>
              <input
                style={inputStyle}
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
              />
            </div>
            <button type="submit" style={{ ...btnPrimary, width: '100%' }} disabled={loading}>
              {loading ? 'Please wait...' : 'Sign Up'}
            </button>
          </form>

          <p style={{ textAlign: 'center', marginTop: 20, fontSize: '0.88rem', color: '#6c757d' }}>
            {'Already have an account? '}
            <button onClick={() => switchMode('login')} style={linkBtnStyle}>
              Log In
            </button>
          </p>
        </div>
      </div>
    );
  }

  // ---- FIND ID VIEW ----
  if (mode === 'findId') {
    return (
      <div style={modalOverlayStyle} onClick={(e) => e.target === e.currentTarget && onClose()}>
        <div style={modalBoxStyle}>
          <button style={closeBtn} onClick={onClose}>&times;</button>
          <button style={backBtnStyle} onClick={() => switchMode('login')}>
            &larr; Back to Login
          </button>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: 4, color: '#1A1A2E' }}>
            Find ID
          </h2>
          <p style={{ color: '#6c757d', fontSize: '0.9rem', marginBottom: 24 }}>
            Enter your information to find your username
          </p>

          {errorBox}
          {resultBox}

          {!result && (
            <form onSubmit={handleFindId}>
              <div style={{ marginBottom: 16 }}>
                <label style={labelStyle}>Name</label>
                <input
                  style={inputStyle}
                  type="text"
                  value={findForm.name}
                  onChange={(e) => setFindForm({ ...findForm, name: e.target.value })}
                  required
                />
              </div>
              <div style={{ marginBottom: 16 }}>
                <label style={labelStyle}>Birthdate</label>
                <input
                  style={inputStyle}
                  type="date"
                  value={findForm.birthdate}
                  onChange={(e) => setFindForm({ ...findForm, birthdate: e.target.value })}
                  required
                />
              </div>
              <div style={{ marginBottom: 24 }}>
                <label style={labelStyle}>Phone</label>
                <input
                  style={inputStyle}
                  type="text"
                  value={findForm.phone}
                  onChange={(e) => setFindForm({ ...findForm, phone: e.target.value.replace(/\D/g, '') })}
                  required
                  maxLength={11}
                />
              </div>
              <button type="submit" style={{ ...btnPrimary, width: '100%' }} disabled={loading}>
                {loading ? 'Please wait...' : 'Find ID'}
              </button>
            </form>
          )}

          {result && (
            <button
              onClick={() => switchMode('login')}
              style={{ ...btnPrimary, width: '100%', marginTop: 8 }}
            >
              Go to Login
            </button>
          )}
        </div>
      </div>
    );
  }

  // ---- FIND PASSWORD VIEW ----
  if (mode === 'findPassword') {
    return (
      <div style={modalOverlayStyle} onClick={(e) => e.target === e.currentTarget && onClose()}>
        <div style={modalBoxStyle}>
          <button style={closeBtn} onClick={onClose}>&times;</button>
          <button style={backBtnStyle} onClick={() => switchMode('login')}>
            &larr; Back to Login
          </button>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: 4, color: '#1A1A2E' }}>
            Find Password
          </h2>
          <p style={{ color: '#6c757d', fontSize: '0.9rem', marginBottom: 24 }}>
            Enter your information to reset your password
          </p>

          {errorBox}
          {resultBox}

          {!result && (
            <form onSubmit={handleFindPassword}>
              <div style={{ marginBottom: 16 }}>
                <label style={labelStyle}>Username</label>
                <input
                  style={inputStyle}
                  type="text"
                  value={findForm.username}
                  onChange={(e) => setFindForm({ ...findForm, username: e.target.value })}
                  required
                />
              </div>
              <div style={{ marginBottom: 16 }}>
                <label style={labelStyle}>Name</label>
                <input
                  style={inputStyle}
                  type="text"
                  value={findForm.name}
                  onChange={(e) => setFindForm({ ...findForm, name: e.target.value })}
                  required
                />
              </div>
              <div style={{ marginBottom: 16 }}>
                <label style={labelStyle}>Birthdate</label>
                <input
                  style={inputStyle}
                  type="date"
                  value={findForm.birthdate}
                  onChange={(e) => setFindForm({ ...findForm, birthdate: e.target.value })}
                  required
                />
              </div>
              <div style={{ marginBottom: 24 }}>
                <label style={labelStyle}>Phone</label>
                <input
                  style={inputStyle}
                  type="text"
                  value={findForm.phone}
                  onChange={(e) => setFindForm({ ...findForm, phone: e.target.value.replace(/\D/g, '') })}
                  required
                  maxLength={11}
                />
              </div>
              <button type="submit" style={{ ...btnPrimary, width: '100%' }} disabled={loading}>
                {loading ? 'Please wait...' : 'Reset Password'}
              </button>
            </form>
          )}

          {result && (
            <button
              onClick={() => switchMode('login')}
              style={{ ...btnPrimary, width: '100%', marginTop: 8 }}
            >
              Go to Login
            </button>
          )}
        </div>
      </div>
    );
  }

  return null;
}
