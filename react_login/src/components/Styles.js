import styled from "styled-components";

//background
import background from './../assets/bg2.jpg';

//React router
import { Link } from "react-router-dom";
// import { StyledTitle } from './Styles';
import { TextInput } from './FormLib';

export const colors ={
        primary: "#333",
        theme: "#BE185D",
        light1: "#F3F4F6",
        light2: "#E5E7EB",
        dark1: "#1F2937",
        dark2: "#4B5563",
        dark3: "#9CA3AF",
        red: "#DC2626"
}

//Styled components
export const StyledContainer = styled.div`
        margin: 0;
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background: linear-gradient(0deg, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), url(${background});
        background-size: cover;
        background-attachment: fixed;
    `;

//Home
export const StyledTitle = styled.div`
    font-size: ${(props) => props.size}px;
    text-align: center;
    color: ${colors.primary};
    padding: 5px;
    margin-bottom: 20px;
    opacity: 0;
    transition: opacity 1s ease-in; /* Add the transition effect */

    /* Animation to make it appear */
    animation: fade-in 2s ease-in forwards;

    @keyframes fade-in {
        to {
            opacity: 1;
        }
    }
    `;

export const StyledSubTitle = styled.div`
    font-size: ${(props) => props.size}px;
    text-align: center;
    color: grey;
    padding: 5px;
    margin-bottom: 25px;
    overflow: hidden; /* Ensures the content is not revealed until the animation */
    border-right: .15em solid ${colors.theme}; /* The typewriter cursor */

    white-space: nowrap; /* Keeps the content on a single line */
    margin: 0 auto; /* Gives that scrolling effect as the typing happens */

    /* Typing animation */
    animation: typing 4s steps(40, end) infinite, blink-caret 750ms step-end infinite;

    @keyframes typing {
        from { width: 0 }
        to { width: 60% }
    }

    @keyframes blink-caret {
        from, to { border-color: transparent }
        50% { border-color: ${colors.theme}; }
    }
    `;

export const Avatar = styled.div`
    width: 85px;
    height: 85px;
    border-radius: 50px;
    background-image: url(${props => props.image});
    background-position: center;
    margin: auto;
    border: 2px solid transparent;
    transition: all 0.3s ease-in-out;
    cursor: pointer;

    &:hover {
        border: 2px solid ${colors.theme}; /* Change border color on hover */
        transform: scale(1.1); /* Enlarge the Avatar on hover */
    }
        `;

export const StyledButton = styled(Link)`
    padding: 10px 20px;
    width: 150px;
    background-color: ${colors.theme};
    font-size: 16px;
    border: none;
    border-radius: 25px;
    color: #fff;
    text-decoration: none;
    text-align: center;
    transition: 0.3s;
    position: relative;
    overflow: hidden;
    z-index: 1;

    &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 300px;
        height: 300px;
        background-color: ${colors.primary};
        border-radius: 50%;
        transform: translate(-50%, -50%) scale(0);
        transition: all 0.4s ease-in-out;
        z-index: -1;
    }

    &:hover::before {
        transform: translate(-50%, -50%) scale(1);
    }

    &:hover {
        color: ${colors.theme};
    }
    `;

export const ButtonGroup = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    margin-top: 25px;

    > *:hover {
        transform: scale(1.05);
    }
    `;

 //Input
 export const StyledTextInput = styled.input `
    width: 350px;
    padding: 15px;
    padding-left: 50px;
    font-size: 17px;
    letter-spacing: 1px;
    color: ${colors.dark1};
    background-color: ${colors.light2};
    border: 2px solid ${colors.light2};
    border-radius: 10px;
    outline: none;
    display: block;
    margin: 5px auto 10px auto;
    transition: border 0.3s, background-color 0.3s, color 0.3s;

    ${(props) => props.invalid && `border-color:${colors.red}; color: ${colors.red}; background-color: ${colors.light1};`}

    &:focus {
        border-color: ${colors.theme};
        color: ${colors.dark1};
        background-color: ${colors.light1};
    }

    `;   

export const StyledLabel = styled.p`
    text-align: left;
    font-size: 13px;
    font-weight: bold;
    color: ${colors.dark3};
    margin-bottom: 5px;
    `;

export const StyledFormArea = styled.div`
    background-color: ${props => props.bg || colors.light1};
    text-align: center;
    padding: 45px;
    border-radius: 15px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    `;

export const StyledFormButton = styled.p`
    padding: 15px;
    width: 200px;
    background-color: ${colors.primary};
    font-size: 16px;
    border: none;
    border-radius: 25px;
    color: #fff;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 300px;
        height: 300px;
        background-color: ${colors.primary};
        border-radius: 50%;
        transform: translate(-50%, -50%) scale(0);
        transition: all 0.4s ease-in-out;
        z-index: -1;
    }

    &:hover::before {
        transform: translate(-50%, -50%) scale(1);
    }

    &:hover {
        color: ${colors.theme};
        cursor: pointer;
    }
    `;

export const ErrorMsg = styled.div`
    font-size: 13px;
    color: ${colors.red};
    margin-top: 10px;
    text-align: center;
    padding: 5px;
    border: 1px solid ${colors.red};
    border-radius: 5px;
    background-color: #ffebee;
    `;


export const ExtraText = styled.p`
    font-size: ${(props) => props.size}px;
    text-align: center;
    color: blue;
    padding: 2px;
    margin-top: 10px;
    `;


export const TextLink = styled(Link)`
    text-decoration: none;
    color: ${colors.primary};
    transition: background-color 0.3s, color 0.3s;
    position: relative;

    &:after {
        content: '';
        position: absolute;
        width: 100%;
        height: 2px;
        bottom: -5px;
        left: 0;
        background-color: ${colors.primary};
        visibility: hidden;
        transform: scaleX(0);
        transition: all 0.3s ease-in-out 0s;
    }

    &:hover:after {
        visibility: visible;
        transform: scaleX(1);
    }
    `;

//Icons
export const StyledIcon = styled.p`
        color: ${colors.dark1};
        position: absolute;
        font-size: 21px;
        top: 35px;
        ${(props) => props.right && `right: 15px;`}
        ${(props) => !props.right && `left: 15px;`}
        `;

//Copyright
export const CopyrightText = styled.p`
    padding: 5px;
    margin: 20px;
    text-align: center;
    color: ${colors.dark1}
    `;