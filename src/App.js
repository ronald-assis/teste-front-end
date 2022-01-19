import Home from './Home';
import { IconContext } from 'react-icons';
import './Global.scss';

const App = () => {
  return (
    <div className="App">
      <IconContext.Provider
        value={{ color: 'red', className: 'global-icons-name' }}
      >
        <Home />
      </IconContext.Provider>
    </div>
  );
};

export default App;
