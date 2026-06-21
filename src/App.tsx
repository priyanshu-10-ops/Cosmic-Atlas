import { useRouter } from './lib/router';
import Starfield from './components/Starfield';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import SolarSystemPage from './pages/SolarSystemPage';
import DeepSpacePage from './pages/DeepSpacePage';
import AstrophysicsPage from './pages/AstrophysicsPage';
import TimelinePage from './pages/TimelinePage';
import MissionsPage from './pages/MissionsPage';
import DiscoveriesPage from './pages/DiscoveriesPage';
import ToolsPage from './pages/ToolsPage';
import QuizPage from './pages/QuizPage';
import CommunityPage from './pages/CommunityPage';
import { useState } from 'react';

export default function App() {
  const { route, navigate } = useRouter();
  const [missionOverride, setMissionOverride] = useState<string | undefined>(undefined);

  const handleNavigate = (path: string) => {
    if (path.includes('/missions/')) {
      const id = path.split('/missions/')[1];
      setMissionOverride(id);
    } else if (missionOverride) {
      setMissionOverride(undefined);
    }
    navigate(path);
  };

  const renderRoute = () => {
    switch (route.path) {
      case '/':
        return <HomePage navigate={handleNavigate} />;
      case '/solar-system/:id?':
        return <SolarSystemPage navigate={handleNavigate} />;
      case '/deep-space/:category?':
        return <DeepSpacePage navigate={handleNavigate} />;
      case '/astrophysics':
        return <AstrophysicsPage navigate={handleNavigate} />;
      case '/timeline':
        return <TimelinePage navigate={handleNavigate} />;
      case '/missions':
        return (
          <MissionsPage
            missionId={missionOverride}
            onSelectMission={(id) => setMissionOverride(id)}
          />
        );
      case '/missions/:id':
        return (
          <MissionsPage
            missionId={route.params.id}
            onSelectMission={(id) => setMissionOverride(id)}
          />
        );
      case '/discoveries':
        return <DiscoveriesPage navigate={handleNavigate} />;
      case '/quiz':
        return <QuizPage navigate={handleNavigate} />;
      case '/tools':
        return <ToolsPage navigate={handleNavigate} />;
      case '/community':
        return <CommunityPage navigate={handleNavigate} />;
      default:
        return <HomePage navigate={handleNavigate} />;
    }
  };

  return (
    <div className="relative min-h-screen">
      <Starfield />
      <div className="relative z-10">
        <Navbar current={route.path} navigate={handleNavigate} />
        <main>{renderRoute()}</main>
        <Footer navigate={handleNavigate} />
      </div>
    </div>
  );
}
