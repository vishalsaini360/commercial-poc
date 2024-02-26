import React from 'react'
import styles from './Demo.module.css'
import { useState } from 'react';

export default function Demo() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleLogin = async () => {

    setEmailError('');
    setPasswordError('');

      if (!email) {
      setEmailError('Please enter your email.');
      return;
    }

    if (!password) {
      setPasswordError('Please enter your password.');
      return;
    }
    try {
      window.location.href = '/';
      // console.log('Login successful!');

    } catch (error) {

      setEmailError('');
      setPasswordError('Invalid credentials. Please try again.');
    }
  };

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.loginWrapper}>
          <h1 className={styles.loginHeading}>Login</h1>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className={styles.loginInput} placeholder='Email' /><br /><br />
          {emailError && <p className={styles.p}>{emailError}</p>}
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className={styles.loginInput} placeholder='Password' /><br /><br />
          {passwordError && <p className={styles.p}>{passwordError}</p>}
          <button onClick={handleLogin} className={styles.loginBtn}>Login</button>
        </div>
      </div>
    </>
  )
}
