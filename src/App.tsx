import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProtectedRoute from './pages/login/protected-route';
import { Home } from './pages/home/home';
import { FormPlayer } from './pages/form/form';
import { Login } from './pages/login/login';
import PlayerProfile from './pages/players/profile/player-profile';
import PlayerList from './pages/players/list/players';
import AppLayout from './components/layout';

function App() {
  return (
    <BrowserRouter basename="/frontend-salgar-dorada-fc">
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/players" element={<PlayerList />} />
          <Route path="/players/:id" element={<PlayerProfile />} />
          <Route path="/form" element={<ProtectedRoute component={FormPlayer} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
