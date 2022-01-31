import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Utils';

export default function Login() {
    const {login, currentUser} = useAuth();
    const navigate = useNavigate();
    let [email, setEmail] = useState('')
    let [pass, setPass] = useState('') 


    useEffect(()=> {
        if (currentUser.length) {
            login(currentUser[0].email, currentUser[0].password)
        }
    },[currentUser]);

    const handleLogin = (e) => {
        e.preventDefault()
        login(email,pass)
    }
    return (
        <form onSubmit={handleLogin}>
            <input name="username" value={email} onChange={e => setEmail(e.target.value)}/>
            <input name="password" value={pass} onChange={e => setPass(e.target.value)}/>
            <button type="submit">Login</button>
        </form>
    );
}
