import styled from "styled-components";
import { Link } from "react-scroll";

export const Button = styled(Link)`
display: flex;
justify-content: center;
align-items: center;
padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
background: ${({primary}) => (primary ? '#01BF71' : '#010606')};
color: ${({dark}) => (dark ? '#010606' : '#fff')};
white-space: nowrap;
outline: none;
border: none;
border-radius: 50px;
cursor: pointer;
transition: all 0.2s ease-in-out;

&:hover {
    background: ${({primary}) => (primary ? '#fff' : '#01BF71')};
}
`