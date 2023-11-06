//styled components
import {StyledTextInput, StyledFormArea, StyledFormButton, StyledLabel, Avatar, StyledTitle, colors} from "./../components/Styles"

import Logo from "./../assets/favicon.png";

//formik


const Login = () => {
    return (
        <div>
            <StyledFormArea>
                <Avatar image={Logo}></Avatar>
                <StyledTitle color={colors.theme} size={30}>Farmer Login</StyledTitle>

            </StyledFormArea>
        </div>
    )
}

export default Login;