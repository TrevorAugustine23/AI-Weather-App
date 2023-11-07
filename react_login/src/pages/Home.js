import { StyledTitle, StyledSubTitle, Avatar, StyledButton, ButtonGroup } from "../components/Styles";
import { styled } from 'styled-components';

//Logo
import Logo from "./../assets/favicon2.jpg"

const Home = () => {
    return (

        <div>
            <div style={{
                position: "absolute",
                top:0,
                left:0,
                backgroundColor: "transparent",
                width: "100%",
                display: "flex",
                justifyContent:"flex-start"
            }}>
                <Avatar image={Logo}/>
            </div>
            <StyledTitle size={45}>
                Unlock the possibilities with <b>WeatherGenius</b>, your personalized weather assistant.
            </StyledTitle>
            <StyledSubTitle size={27}>
               <i>"Explore the world of precise forecasts, tailored just for you!"</i> 
            </StyledSubTitle>
            <ButtonGroup><StyledButton to="/login">Login</StyledButton>
            <StyledButton to="/signup">SignUp</StyledButton>
            </ButtonGroup>

        </div>
    );
}

export default Home;