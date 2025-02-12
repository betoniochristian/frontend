import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom'
import Header from "./pages/Header/Header"
import Dashboard from "./pages/Dashboard/Dashboard"
import AddEmployee from './pages/Employee/AddEmployee'
import UpdateEmployee from './pages/Employee/UpdateEmployee';

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" />} />
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/employee" element={<AddEmployee/>}/>
      <Route path="/employee/:id" element={<UpdateEmployee/>}/>
    </Routes>
    </>
  );
}

export default App;
