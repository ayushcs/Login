import React, { useContext, useState, useEffect } from "react";
import {collection, query, where, getDocs} from 'firebase/firestore'
import {db} from "./firebase"
import { useNavigate } from "react-router-dom";
const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState([])
  const navigate = useNavigate();
  const usersCollection = collection(db, 'users')


  function login(email, password) {
    const getUsers = async () => {
        const useQuery = query(usersCollection, where("email","==", email))
        const querySnapshot = await getDocs(useQuery);
        let users = []
        querySnapshot.forEach((doc) => {
            users.push({...doc.data(), id: doc.id})
        });
        if (users.length == 1 && users[0].password == password) {
            setCurrentUser(users);
            sessionStorage.setItem('users', JSON.stringify(users));
            navigate('/')
        }
    };
    getUsers()    
  }

  function logout() {
    setCurrentUser([]);
    sessionStorage.removeItem('users');
    navigate('/login')
  }

  useEffect(()=> {
    let users = sessionStorage.getItem('users')
    if (users) {
      setCurrentUser(JSON.parse(users))
    }
  }, [])

  const value = {
    currentUser,
    login,
    logout,
  }

  return (
    <AuthContext.Provider value={value}>
      { children}
    </AuthContext.Provider>
  )
}