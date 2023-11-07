//styled components
import {StyledTextInput, StyledFormArea, StyledFormButton, StyledLabel, Avatar, StyledTitle, colors, ButtonGroup, ExtraText, TextLink, CopyrightText} from "./../components/Styles"

import Logo from "./../assets/favicon.png";

//formik
import { Formik, Form } from "formik";
import { TextInput } from "../components/FormLib";
import * as Yup from 'yup';

//icons
import { FiMail, FiLock} from 'react-icons/fi';

//Loader
import {Audio} from 'react-loader-spinner';



const SignUp = () => {
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
                    onSubmit={(values, {setSubmitting}) => {
                        console.log(values);
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
                               <StyledFormButton type="submit">Login
                               </StyledFormButton>
                               )}

                               {isSubmitting && (
                                <Audio 
                                    type="ThreeDots"
                                    color={colors.theme}
                                    height={49}
                                    width={50}
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

export default SignUp;

//50:36