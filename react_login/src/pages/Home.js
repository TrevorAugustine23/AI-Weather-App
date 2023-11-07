import { StyledTitle, StyledSubTitle, Avatar, StyledButton, ButtonGroup } from "../components/Styles";
import { styled } from 'styled-components';

//Logo
import Logo from "./../assets/favicon.png"

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
                Unlock the possibilities with WeatherGenius, your personalized weather assistant.
            </StyledTitle>
            <StyledSubTitle size={27}>
                Feel free to explore our System
            </StyledSubTitle>
            <ButtonGroup><StyledButton to="/login">Login</StyledButton>
            <StyledButton to="/signup">SignUp</StyledButton>
            </ButtonGroup>

        </div>
    );
}

export default Home;