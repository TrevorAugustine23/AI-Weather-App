import React from 'react';
import { StyledTitle, Avatar, StyledButton, ButtonGroup, StyledFormArea } from '../components/Styles';
import { connect } from 'react-redux';
import { logoutUser } from '../auth/actions/userActions';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

// Logo
import Logo from './../assets/favicon2.jpg';

// Define a styled component for the buttons
const CustomStyledButton = styled(StyledButton)`
  margin: 10px; /* Adjust the margin for spacing */
  padding: 10px 20px; /* Adjust padding for desired button size */
  text-align: center;
`;

const Dashboard = () => {
  const navigate = useNavigate();

  const openWeatherApp = () => {
    // Change the port number and path accordingly
    window.location.href = 'http://localhost:3001';
  };

  const openRainfallForm = () => {
    // Change the PHP file path accordingly
    window.location.href = 'http://localhost/form.php';
  };

  return (
    <div>
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          backgroundColor: 'transparent',
          width: '100%',
          display: 'flex',
          justifyContent: 'flex-start',
        }}
      >
        <Avatar image={Logo} />
      </div>
      <StyledFormArea>
        <StyledTitle size={45}>Welcome</StyledTitle>
        <ButtonGroup>
          <CustomStyledButton to="#" onClick={() => logoutUser(navigate)}>
            Logout
          </CustomStyledButton>
          <CustomStyledButton onClick={openWeatherApp}>
            Weather application
          </CustomStyledButton>
          <CustomStyledButton onClick={openRainfallForm}>
            Rainfall Prediction Model
          </CustomStyledButton>
        </ButtonGroup>
      </StyledFormArea>
    </div>
  );
};

export default connect(null, logoutUser)(Dashboard);
