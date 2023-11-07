//pages
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/Signup';

//styled components
import { StyledContainer } from "./components/Styles";

//Loader CSS
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import {
  BrowserRouter as Router,
  Switch, 
  Route
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <StyledContainer>
      <SignUp/> 
    </StyledContainer>
    </Router>
    
   
  );
}

export default App;

//1:06:55