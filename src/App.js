import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css';
import Dashboard from './component/Dashboard';
import Login from './component/Login';
import PrivateRoute from './component/PrivateRoute';
import { AuthProvider } from './Utils';

function App() {
  
  return (
    <>
      <Router>
          <AuthProvider>
            <Routes>
              <Route exact path='/' element={<PrivateRoute/>}>
                <Route exact path='/' element={<Dashboard/>}/>
              </Route>
              <Route exact path="/login" exact element={<Login/>} />
            </Routes>
          </AuthProvider>
      </Router>
    </>
  );
}

export default App;
