import { styled } from "styled-components";

const div = ({...resProps}) => {
    return <div {...resProps}></div>;
};
export const Div = styled(div)`
    display : block;
    width : 100%;
    margin : 0 auto;
`;
export const DivButton = styled(Div)`
    grid-column: 1 / span 2;
    display: flex;
    width: 95%;
    margin : 20px auto;
`;