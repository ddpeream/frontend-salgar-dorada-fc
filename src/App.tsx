import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/home/home';
import { FormPlayer } from './pages/form/form';
import { Login } from './pages/login/login';
import PlayerProfile from './pages/players/profile/player-profile';
import PlayerList from './pages/players/list/players';
import { Matches } from './pages/matches';
import AppLayout from './components/layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/players" element={<PlayerList />} />
          <Route path="/players/:id" element={<PlayerProfile />} />
          <Route path="/matches" element={<Matches />} />
          <Route path="/form" element={<FormPlayer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
