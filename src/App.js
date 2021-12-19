import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import SignIn from './routes/signin/SignIn';
import Home from './routes/home/Home';
import SignUp from './routes/signup/SignUp';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
