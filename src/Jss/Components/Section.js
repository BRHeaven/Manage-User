import { styled } from "styled-components";

const section = ({...resProps}) => {
    return <section {...resProps}></section>;
};
export const Section = styled(section)`
    border: 2px solid ${props => props.theme.background};
    display: block;
    width : 99.8%;
    margin : 0 auto;
    padding: 0 0 20px 0;
`;