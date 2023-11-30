import axios from 'axios';


import { sessionService } from 'redux-react-session';
 
export const loginUser = (credentials, navigate, setFieldError, setSubmitting) => {

    axios.post("http://localhost:8000/user/signin", 
    credentials,
    {
        headers:{
            "Content-Type": "application/json"
        }
    }
    ).then((response )=> {
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
                        navigate.push('/dashboard');
                    }).catch(err => console.error(err))
                }).catch(err => console.error(err))
            }

            //complete submission
            setSubmitting(false);

}).catch(err => console.error(err))

}

export const signupUser = (credentials, history, setFieldError, setSubmitting) => {
    axios.post("http://localhost:8000/user/signin", 
    credentials,
    {
        headers:{
            "Content-Type": "application/json"
        }
    }
    ).then((response) => {
        const {data} = response;

        if(data.status == "FAILED"){
        //checking for specific error
            if(message.includes("name")) {
            setFieldError("name", message);
            } else if (message.includes("email")) {
            setFieldError("email", message);
            } else if (message.includes("date")){
            setFieldError("dateOfBirth", message);
            } else if (message.includes("password")){
            setFieldError("password", message);
            }
       
            // complete submission
            setSubmitting(false);

        } else if (data.status === "SUCCESS"){

        }
    }).catch(err => console.error(err))
}
export const logoutUser = () => {
     
}