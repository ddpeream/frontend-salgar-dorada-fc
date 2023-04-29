import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProtectedRoute from './pages/login/protected-route';
import { Home } from './pages/home/home';
import { FormPlayer } from './pages/form/form';
import { Login } from './pages/login/login';
import PlayerProfile from './pages/players/profile/player-profile';
import PlayerList from './pages/players/list/players';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/players" element={<PlayerList />} />
        <Route path="/players/:id" element={<PlayerProfile />} />
        <Route path="/form" element={<ProtectedRoute component={FormPlayer} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
