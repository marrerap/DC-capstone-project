import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import ChatPage from './pages/ChatPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProtectedRoute from './components/ProtectedRoute'
import './firebase'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch> 
          
          <Route exact path="/">
            <LoginPage />
          </Route>

          <Route path="/register">
            <RegisterPage />
          </Route>

          <ProtectedRoute path="/chat">
            <ChatPage/>
          </ProtectedRoute>

          <Route path="*">
            <Redirect to="/">
            {/* Redirect to homepage like so */}
            </Redirect>
          </Route>

        </Switch> 
      </Router>
    </div>
  );
}

export default App;
