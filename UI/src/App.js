import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Manager from './Manager';
import Login from './Login';

const App = () => {
  return (
    <div className='paths'>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Manager" element={<Manager />} />
        </Routes>
      </Router>
    </div>
  );
};


export default App;
