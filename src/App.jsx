import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import BottomNav from './components/BottomNav';
import Onboarding from './screens/Onboarding';
import HomeFeed from './screens/HomeFeed';
import Profile from './screens/Profile';
import TrekDetail from './screens/TrekDetail';
import Discover from './screens/Discover';
import SquadStory from './screens/SquadStory';

export default function App() {
  return (
    <ThemeProvider>
      <HashRouter>
        <div className="app-container">
          <Routes>
            <Route path="/" element={<Onboarding />} />
            <Route path="/home" element={<HomeFeed />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/trek-detail" element={<TrekDetail />} />
            <Route path="/discover" element={<Discover />} />
            <Route path="/squad" element={<SquadStory />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          <BottomNav />
        </div>
      </HashRouter>
    </ThemeProvider>
  );
}
