import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProtectedRoute from './pages/login/protected-route';
import { Home } from './pages/home/home';
import { FormPlayer } from './pages/form/form';
import { Login } from './pages/login/login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<ProtectedRoute component={FormPlayer} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
