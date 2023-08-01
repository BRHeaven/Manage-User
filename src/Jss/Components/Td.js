import { styled } from "styled-components";

const td = ({...resProps}) => {
    return <td {...resProps}></td>;
};
export const Td = styled(td)`
    font-size: 1.1em;
    font-weight: 500;
    text-align: center;
    letter-spacing: .5px;
`;
export const TdText = styled(td)`
    font-size: 1.1em;
    font-weight: 500;
    text-align: center;
    text-transform: capitalize;
    letter-spacing: .5px;
`;