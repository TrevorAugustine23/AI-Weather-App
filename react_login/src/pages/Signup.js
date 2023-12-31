//styled components
import {StyledTextInput, StyledFormArea, StyledFormButton, StyledLabel, Avatar, StyledTitle, colors, ButtonGroup, ExtraText, TextLink, CopyrightText} from "./../components/Styles"

import Logo from "./../assets/favicon2.jpg";

//formik
import { Formik, Form } from "formik";
import { TextInput } from "../components/FormLib";
import * as Yup from 'yup';

//icons
import { FiMail, FiLock, FiUser, FiCalendar} from 'react-icons/fi';

//Loader
import {Audio} from 'react-loader-spinner';

//auth & redux
import { connect } from "react-redux";
import { signupUser } from "../auth/actions/userActions";

import { useNavigate } from 'react-router-dom';




const SignUp = (signupUser) => {
    const navigate = useNavigate();
    return (
        <div>
            <StyledFormArea>
                <Avatar image={Logo}></Avatar>
                <StyledTitle color={colors.theme} size={30}>Farmer SignUp</StyledTitle>
                <Formik
                    initialValues={{
                        email: "",
                        password:"",
                        repeatPassword:"",
                        dateOfBirth:"",
                        name:""
                    }}
                    validationSchema={
                        Yup.object({
                            email: Yup.string().email("Invalid email address")
                            .required("Required"),
                            password: Yup.string().min(8, "Password is too short").max(30, "Password is too long")
                            .required("Required"),
                            name: Yup.string().required("Required"),
                            dateOfBirth: Yup.date().required("Required"),
                            repeatPassword: Yup.string().required("Required").oneOf([Yup.ref("password")], "Passwords must match")
                        })
                    }
                    onSubmit={(values, {setSubmitting, setFieldError}) => {
                        signupUser(values, navigate, setFieldError, setSubmitting)
                    }}
                    >
                    {(isSubmitting) => (
                        <Form>
                            <TextInput
                                name="name"
                                type="text"
                                label="Full Name"
                                placeholder="Denis Mutunga"
                                icon={<FiUser/>}
                            />
                            <TextInput
                                name="email"
                                type="text"
                                label="Email Address"
                                placeholder="enter@example.com"
                                icon={<FiMail/>}
                            />
                            <TextInput
                                name="dateOfBirth"
                                type="date"
                                label="Date of Birth"
                                icon={<FiCalendar/>}
                            />
                            <TextInput
                                name="password"
                                type="password"
                                label="Password"
                                placeholder="enter password"
                                icon={<FiLock/>}

                            />
                            <TextInput
                                name="repeatPassword"
                                type="password"
                                label="Confirm Password"
                                placeholder="confirm password"
                                icon={<FiLock/>}

                            />
                            <ButtonGroup>
                               {isSubmitting && (
                               <StyledFormButton type="submit">SignUp
                               </StyledFormButton>
                               )}

                               {!isSubmitting && (
                                <Audio 
                                    type="ThreeDots"
                                    color={colors.theme}
                                    height={49}
                                    width={30}
                                />
                               )}
                            </ButtonGroup>
                        </Form>
                    )}
                </Formik>
                <ExtraText>
                    Already have an account? <TextLink to="/login">Login</TextLink>
                </ExtraText>
            </StyledFormArea>
            <CopyrightText>
                134780 BBIT 4C &copy; 2023
            </CopyrightText>
        </div>
    )
}

export default connect(null, {signupUser}) (SignUp);

