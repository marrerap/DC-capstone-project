import './App.css';
import Channels from './components/Channels';
import Main from './components/Main';
import TitleBar from './components/TitleBar';
import Users from './components/Users';

function App() {
  return (
    <div className="App">
      <TitleBar />
      <div className="Body">
        <Channels className="Channels" />
        <Main className="Main" />
        <Users className="Users" />
      </div>
    </div>
  );
}

export default App;
