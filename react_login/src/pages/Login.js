//styled components
import {StyledTextInput, StyledFormArea, StyledFormButton, StyledLabel, Avatar, StyledTitle, colors} from "./../components/Styles"

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
                        </Form>
                    )}
                </Formik>
            </StyledFormArea>
        </div>
    )
}

export default Login;