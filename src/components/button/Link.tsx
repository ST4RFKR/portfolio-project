import styled, { keyframes } from "styled-components";
import { Theme } from "../styles/Theme";

const moveInBottom = keyframes`
    0% {
        opacity: 0;
        transform: translateY(30px);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
`;

export const Link = styled.a.attrs({
    className: 'btn-gradient btn-animated',
})`
    display: inline-block;
    background: ${Theme.colors.gradient};
    border-radius: 83px;
    padding: 15px 50px;
    color: ${Theme.colors.mainText};
    transition: all .3s;
    position: relative; 

    :link,
    :visited {
        text-transform: uppercase;
        text-decoration: none;
        padding: 15px 40px;
        display: inline-block;
        border-radius: 100px;
        transition: all .2s;
    }

    :hover {
        transform: translateY(-3px);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    }

    :active {
        transform: translateY(-1px);
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    }

    .btn-gradient {
        background:${Theme.colors.gradient};
        color: ${Theme.colors.mainText};
    }

    ::after {
        content: "";
        display: inline-block;
        height: 100%;
        width: 100%;
        border-radius: 100px;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        transition: all .4s;
        background:${Theme.colors.gradient};
    }

    :hover::after {
        transform: scaleX(1.4) scaleY(1.6);
        opacity: 0;
    }

    .btn-animated {
        animation: ${moveInBottom} 5s ease-out;
        animation-fill-mode: backwards;
    }
`;
