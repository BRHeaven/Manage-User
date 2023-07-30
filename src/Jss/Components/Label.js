import { styled } from "styled-components";

const label = ({forId, ...resProps}) => {
    return <label htmlFor={forId} {...resProps}></label>;
};
export const Label = styled(label)`
    display : block;
    margin : 10px auto 5px 15px;
    font-size: 1.2em;
    font-weight: bold;
    text-transform: capitalize;
    letter-spacing: .5px;
`;