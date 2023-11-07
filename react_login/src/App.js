//pages
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/Signup';
import Dashboard from './pages/Dashboard';

//styled components
import { StyledContainer } from "./components/Styles";

//Loader CSS
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import {
  BrowserRouter as Router, 
  Switch,
  Route,
  Routes,
 
} from "react-router-dom";

function App() {
  return (
    <Router>
      <StyledContainer>
        <Routes>
          <Route path="/signup" element={<SignUp/>}>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/dashboard">
            <Dashboard/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Routes>
    </StyledContainer>
    </Router>
    
   
  );
}

export default App;
