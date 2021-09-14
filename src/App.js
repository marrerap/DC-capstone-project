import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import ChatPage from "./pages/ChatPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProtectedRoute from "./components/ProtectedRoute";
import "./firebase";
import ChatPageChannel from "./pages/ChatPageChannel";
import HowItWorks from "./pages/HowItWorks"

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <LoginPage />
          </Route>

          <Route exact path="/register">
            <RegisterPage />
          </Route>
          <Route exact path="/howitworks">
            <HowItWorks />
          </Route>

          <ProtectedRoute exact path="/chat">
            <ChatPage />
          </ProtectedRoute>

          <Route exact path="/chat/:channelId">
            <ChatPageChannel />
          </Route>

          <Route exact path="*">
            <Redirect to="/">{/* Redirect to homepage like so */}</Redirect>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
