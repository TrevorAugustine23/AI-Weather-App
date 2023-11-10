import axios from 'axios';
import { ErrorMessage } from 'formik';

import { sessionService } from 'redux-react-session';

const API_BASE_URL = 'http://localhost:8000/api'; // Replace with your server's URL

export const loginUser = (credentials, history, setFieldError, setSubmitting) => {
    axios.post(`${API_BASE_URL}/login`, 
    credentials,
    {
        headers:{
            "Content-Type": "application.json"
        }
    }
    ).then(response => {
            const {data} = response;

            if(data.status === "FAILED") {
                const {message} = data;

                //check for specific error
                if( message.includes ("credentials")) {
                    setFieldError("email", message);
                    setFieldError("password", message);
                } else if( message.includes ("password")) {
                    setFieldError("password", message);
                }
            } else if (data.status === "SUCCESS") {
                const userData = data.data[0];

                const token = userData._id;

                sessionService.saveSession(token).then(() => {
                    sessionService.saveUser(userData).then(() => {

                    }).catch(err => console.error(err))
                }).catch(err => console.error(err))
            }
    }).catch(err => console.error(err))
}

export const signupUser = (credentials, history, setFieldError, setSubmitting) => {
    
}
export const logoutUser = () => {
     
}