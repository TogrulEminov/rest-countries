import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home';
import Detail from './Pages/Detail';
import Header from './Components/Header/Header';
function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/country/:cca3" element={<Detail />} />
      </Routes>
    </Router>
  );
}
export default App;
