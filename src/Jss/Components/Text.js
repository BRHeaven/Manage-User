/* eslint-disable jsx-a11y/heading-has-content */

import { styled } from "styled-components";

const H2= ({...resProps}) => {
    return <h2 {...resProps}></h2>;
};
export const Title = styled(H2)`
    text-align: start;
    text-transform: capitalize;
    letter-spacing: .5px;
    color: ${props => props.theme.title};
    background-color: ${props => props.theme.background};
    padding : 10px 15px ;
    margin : 0;
`;