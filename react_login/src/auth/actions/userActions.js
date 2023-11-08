import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/api'; // Replace with your server's URL

export const loginUser = (credentials, history, setFieldError, setSubmitting) => {
    axios.post(`${API_BASE_URL}/login`, credentials)
        .then(response => {
            // Handle the successful login response
            console.log('Login successful:', response.data);
            // Redirect the user or perform further actions upon successful login
        })
        .catch(error => {
            // Handle login error
            console.error('Login error:', error);
            // Set error messages using setFieldError if needed
        });
}

export const signupUser = (credentials, history, setFieldError, setSubmitting) => {
    
}
export const logoutUser = () => {
    
}