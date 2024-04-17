import React, { useState, useEffect } from 'react';
import classes from './Login.module.css';



export default function Log_In() {
    const [loginData, setLoginData] = useState({
        username: '',
        password: '',
    });
    const [redirectTo, setRedirectTo] = useState(null);
    const [jwtToken, setJwtToken] = useState('');

    useEffect(() => {
        if (redirectTo) {
            window.location.href = redirectTo;
        }
        const storedToken = localStorage.getItem('jwtToken');
        if (storedToken) {
            setJwtToken(storedToken);
        }
    }, [redirectTo]);

    const handleLogin = async (e) => {
        e.preventDefault(); 

        try {
            const response = await fetch('http://localhost:5151/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginData),
            });

            const data = await response.json();

            if (response.ok) {

                setJwtToken(data.token);
                localStorage.setItem('jwtToken', data.token);
                console.log(data.token);
                document.cookie = `cook=${data.token}; path=/`;
                console.log('Registration Success');
                setRedirectTo('/blog');
            } else {
                console.error('Login Failed');
            }
        } catch (error) {
            console.error('Login Error', error);
        }
    };

    return (
        <div className={classes.str1}>
            <div className={classes.main}>
                <div className={classes.login}>
                    <form className={classes.loginForm} onSubmit={handleLogin}>
                        <label>ВХОД</label>
                        <input
                            className={classes.input}
                            type="text"
                            placeholder="Имя пользователя"
                            value={loginData.username}
                            onChange={(e) => setLoginData({ ...loginData, username: e.target.value })}
                            required
                        />
                        <input
                        className={classes.input}
                            type="password"
                            placeholder="Пароль"
                            value={loginData.password}
                            onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                            required
                        />
                        <button  className={classes.but} type="submit">ВОЙТИ</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
