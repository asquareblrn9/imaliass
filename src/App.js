
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Form from './components/Form';
import Loans from './components/Loans';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
toast.configure()

function App() {
  return (
    <>
    <Router>
     <Routes>
            <Route exact path="/" name="Home Page" element={<Form />} />
            <Route exact path="/loan" name="Register Page" element={<Loans />} />
      </Routes>
      </Router>
     </>
  );
}

export default App;
