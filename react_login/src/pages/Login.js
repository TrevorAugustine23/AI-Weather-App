//styled components
import {StyledTextInput, StyledFormArea, StyledFormButton, StyledLabel, Avatar, StyledTitle, colors, ButtonGroup} from "./../components/Styles"

import Logo from "./../assets/favicon.png";

//formik
import { Formik, Form } from "formik";
import { TextInput } from "../components/FormLib";


const Login = () => {
    return (
        <div>
            <StyledFormArea>
                <Avatar image={Logo}></Avatar>
                <StyledTitle color={colors.theme} size={30}>Farmer Login</StyledTitle>
                <Formik>
                    {() => (
                        <Form>
                            <TextInput
                                name="email"
                                type="text"
                                label="Email Address"
                                placeholder="enter@example.com"
                            />
                            <TextInput
                                name="password"
                                type="password"
                                label="Password"
                                placeholder="enter password"
                            />
                            <ButtonGroup>
                               <StyledFormButton type="submit">Login</StyledFormButton> 
                            </ButtonGroup>
                        </Form>
                    )}
                </Formik>
            </StyledFormArea>
        </div>
    )
}

export default Login;