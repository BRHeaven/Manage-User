import { styled } from "styled-components";

const input = ({...resProps}) => {
    return <input {...resProps}/>;
};
export const Input = styled(input)`
    display : block;
    width : 90%;
    margin: 0 auto;
    padding: 3px 10px;
    font-size: 1.1em;
    border: 1px solid ${props => props.theme.input};
    border-radius: 5px;
    transition: .3s all;
    &:hover {
        border: 1px solid ${props => props.theme.inputHover};
    };
    &:focus {
        outline: none;
        border: 1px solid ${props => props.theme.inputFocus};
    };
`;