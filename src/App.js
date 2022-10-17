import { useEffect } from 'react';
import Home from './pages/home/Home';

const App = () => {
  useEffect(() => {
    document.title = 'Chinmaya Garg';
  }, []);
  return (
    <div>
      <Home />
    </div>
  );
};

export default App;
