//styled components
import {StyledTextInput, StyledFormArea, StyledFormButton, StyledLabel, Avatar, StyledTitle, colors, ButtonGroup, ExtraText, TextLink, CopyrightText} from "./../components/Styles"

import Logo from "./../assets/favicon2.jpg";

//formik
import { Formik, Form } from "formik";
import { TextInput } from "../components/FormLib";
import * as Yup from 'yup';

//icons
import { FiMail, FiLock} from 'react-icons/fi';

//Loader
import { Audio } from 'react-loader-spinner';

//auth & redux
import { connect } from "react-redux";
import { loginUser } from "../auth/actions/userActions";

import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


const Login = (loginUser) => {
    const history = useHistory();
    return (
        <div>
            <StyledFormArea>
                <Avatar image={Logo}></Avatar>
                <StyledTitle color={colors.theme} size={30}>Farmer Login</StyledTitle>
                <Formik
                    initialValues={{
                        email: "",
                        password:"",
                    }}
                    validationSchema={
                        Yup.object({
                            email: Yup.string().email("Invalid email address")
                            .required("Required"),
                            password: Yup.string().min(8, "Password is too short").max(30, "Password is too long")
                            .required("Required"),
                        })
                    }
                    onSubmit={(values, {setSubmitting, setFieldError}) => {
                        console.log(values);
                        loginUser(values, history, setFieldError, setSubmitting);
                    }}
                    >
                    {(isSubmitting) => (
                        <Form>
                            <TextInput
                                name="email"
                                type="text"
                                label="Email Address"
                                placeholder="enter@example.com"
                                icon={<FiMail/>}
                            />
                            <TextInput
                                name="password"
                                type="password"
                                label="Password"
                                placeholder="enter password"
                                icon={<FiLock/>}

                            />
                            <ButtonGroup>
                               {isSubmitting && (
                               <StyledFormButton type="submit"  onClick={() => {
                                console.log('Button clicked!');}}  
                                >Login
                                 </StyledFormButton>
                               )}
                                {isSubmitting && (
                                <Audio 
                                    type="ThreeDots"
                                    height={30} 
                                    width={30} 
                                    />
                               )}
                            </ButtonGroup>
                        </Form>
                    )}
                </Formik>
                <ExtraText>
                    New Here? <TextLink to="/signup">Signup</TextLink>
                </ExtraText>
            </StyledFormArea>
            <CopyrightText>
                134780 BBIT 4C &copy; 2023
            </CopyrightText>
        </div>
    )
}

export default connect(null, {loginUser}) (Login);

//50:36