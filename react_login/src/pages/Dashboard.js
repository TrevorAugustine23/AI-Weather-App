import { StyledTitle, StyledSubTitle, Avatar, StyledButton, ButtonGroup, StyledFormArea, colors } from "../components/Styles";
import { styled } from 'styled-components';

//Logo
import Logo from "./../assets/favicon2.jpg"

//auth & redux
import { connect } from 'react-redux';

import { logoutUser } from "./../auth/actions/userActions";

//React router
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const navigate = useNavigate();
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
            <StyledFormArea>
                <StyledTitle size={65}>
                    Welcome User
                </StyledTitle>
                <ButtonGroup>
                    <StyledButton to="#" onClick={()=> logoutUser(navigate)}>Logout</StyledButton>
                
                </ButtonGroup>
            </StyledFormArea>
            

        </div>
    );
}

export default connect(null, logoutUser)(Dashboard);