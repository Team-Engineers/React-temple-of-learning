import './App.css';
import Homepage from './pages/Homepage';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <div>
 <Router>
    <Routes>
    <Route path="/" element={<Homepage />} />

    </Routes>
    </Router>
    </div>
  );
}

export default App;
