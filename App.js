import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './contexts/AppContext'; 
import ProtectedRoute from './contexts/ProtectedRoute';
import Login from './components/Login';
import Home from './components/Home';
import Register from './components/Register';

function App() {
  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/' element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          } />
          <Route path='/register' element={
              <Register />
          } />
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;