import { styled } from "styled-components";

const select = ({...resProps}) => {
    return <select {...resProps}></select>;
};
export const Select = styled(select)`
    display: block;
    width: 90%;
    padding: 5px 10px;
    margin: 0 auto;
    text-transform: capitalize;
    letter-spacing: .5px;
    border : 2px solid ${props => props.theme.input};
    &:hover {
        border : 2px solid ${props => props.theme.inputHover};
    };
    &:focus {
        outline : none;
        border : 2px solid ${props => props.theme.inputFocus};
    };
`;