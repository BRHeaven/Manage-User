import { styled } from "styled-components";

const button = ({...resProps}) => {
    return <button {...resProps}></button>
};
const Button = styled(button)`
    display : block;
    padding : 5px 10px;
    margin : 0 5px;
    font-size: 1em;
    font-weight: bold;
    letter-spacing: 1px;
    color: ${props => props.theme.title};
    border: 1px solid ${props => props.theme.title};
    border-radius : 7px;
    transition: .4s all;
`;

export const ButtonRegister = styled(Button)`
    background-color: ${props => props.theme.buttonDangKy};
    &:hover {
        color: ${props => props.theme.buttonDangKy};
        background-color: ${props => props.theme.title};
        border: 1px solid ${props => props.theme.buttonDangKy};
    }
`;
export const ButtonUpdate = styled(Button)`
    background-color: ${props => props.theme.buttonCapNhat};
    &:hover {
        color: ${props => props.theme.buttonCapNhat};
        background-color: ${props => props.theme.title};
        border: 1px solid ${props => props.theme.buttonCapNhat};
    }
`;