import { StyledTitle, StyledSubTitle, Avatar, StyledButton, ButtonGroup, StyledFormArea, colors } from "../components/Styles";
import { styled } from 'styled-components';

//Logo
import Logo from "./../assets/favicon.png"

const Dashboard = () => {
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
            <StyledFormArea bg={colors.dark2}>
                <StyledTitle size={65}>
                    Welcome User
                </StyledTitle>
                <StyledSubTitle size={27}>
                    Feel free to explore our System
                </StyledSubTitle>
                <ButtonGroup><StyledButton to="#">Logout</StyledButton>
                
                </ButtonGroup>
            </StyledFormArea>
            

        </div>
    );
}

export default Dashboard;