import styled from "styled-components";

//background
import background from './../assets/favicon.png';

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
    `;

export const StyledSubTitle = styled.div`
        font-size: ${(props) => props.size}px;
        text-align: center;
        color: ${colors.primary};
        padding: 5px;
        margin-bottom: 25px;
    `;

export const Avatar = styled.div`
    width: 85px;
    height: 85px;
    border-radius: 50px;
    background-image: url(${props => props.image});
    background-position: center;
    margin: auto;
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
    
    &:hover {
        background-color: ${colors.primary};
        cursor: pointer;
    }
    `;

export const ButtonGroup = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    margin-top: 25px;
    `;

 //Input
 export const StyledTextInput = styled.input `
    width: 200px;
    padding: 15px;
    padding-left: 50px;
    font-size: 17px;
    letter-spacing: 1px;
    color: ${colors.dark1};
    background-color: ${colors.light2}
    border:0;
    outline:0;
    display: block;
    margin: 5px auto 10px auto;
    transition: ease-in-out 0.3s;

    ${(props) => props.invalid && `background-color:${colors.red}; color: ${colors.primary};`}

    &:focus {
        background-color: ${colors.dark2};
        color: ${colors.primary};
    }

    `;   

export const StyledLabel = styled.p`
    text-align: left;
    font-size: 13px;
    font-weight: bold;
    `;

export const StyledFormArea = styled.div`
    background-color: ${props => props.bg || colors.light1};
    text-align: center;
    padding: 45px 55px;
    `;

export const StyledFormButton = styled.p`
    padding: 10px;
    width: 150px;
    background-color: transparent;
    font-size: 16px;
    border: 2px solid black;
    border-radius: 25px;
    color: blue;
    transition: ease-in-out 0.3s;
    
    &:hover {
        background-color: ${colors.theme};
        color: ${colors.primary};
        cursor: pointer;

    }
    `;

export const ErrorMsg = styled.div`
    font-size: 11px;
    color:${colors.red};
    margin-top: 10px;
    text-align: left;
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
    color: ${colors.theme};
    transition: ease-in-out 0.3s;
    
    &:hover {
        text-decoration: underline;
        letter spacing: 2px;
        font-weight: bold;
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
    text:align: center;
    color: black
    `;