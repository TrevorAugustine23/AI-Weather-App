import { StyledTitle, StyledSubTitle, Avatar } from "../components/Styles";
import { styled } from 'styled-components';

//Logo
import Logo from "./../assets/favicon.png"

const Home = () => {
    return (

        <div>
            <div>
                <Avatar image={Logo}/>
            </div>
            <StyledTitle size={65}>
                Welcome to AI Weather App System
            </StyledTitle>
            <StyledSubTitle size={27}>
                Feel free to explore our System
            </StyledSubTitle>
        </div>
    );
}

export default Home;