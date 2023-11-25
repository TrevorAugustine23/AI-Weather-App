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
  Routes,
  Route,
 
} from "react-router-dom";

function App() {
  return (
    <Router>
      <StyledContainer>
        <Routes>
          <Route path="/signup" element={<SignUp/>}>
          </Route>
          <Route path="/login" element={<Login/>}>
          </Route>
          <Route path="/dashboard" element={<Dashboard/>}>
            
          </Route>
          <Route path="/" element={<Home/>}>
          
          </Route>
        </Routes>
    </StyledContainer>
    </Router>
    
   
  );
}

export default App;
