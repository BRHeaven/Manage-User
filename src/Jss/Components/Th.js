import { styled } from "styled-components";

const th = ({...resProps}) => {
    return <th {...resProps}></th>;
};
export const Th = styled(th)`
    padding : 10px 0;
    font-size: 1.1em;
    font-weight: 700;
    text-transform: capitalize;
    letter-spacing: .5px;
`;