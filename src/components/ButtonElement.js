import styled from "styled-components";
import { Link } from "react-scroll";

export const Button = styled(Link)`
display: flex;
justify-content: center;
padding: 12px 30px;
font-size: 16px;
background: ${({primary}) => (primary ? '#E8AA42' : '#010606')};
color: ${({dark}) => (dark ? '#010606' : '#fff')};
white-space: nowrap;
outline: none;
border: none;
border-radius: 50px;
cursor: pointer;
transition: all 0.2s ease-in-out;

&.vibrate-1 {
	-webkit-animation: vibrate-1 1s linear infinite both;
	        animation: vibrate-1 1s linear infinite both;
}

&:hover {
    background: ${({primary}) => (primary ? '#fff' : '#E8AA42')};
    box-shadow: 1px 1px 10px #E8AA42;
    transition: all 0.2s ease-in-out;
    &.vibrate-1 {
        -webkit-animation: none;
        animation: none;
    }
}

@media screen and (max-width: 578px) {
		padding: 8px 24px;
	}
`