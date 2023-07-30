import { styled } from "styled-components";

const form = ({...resProps}) => {
    return <form {...resProps}></form>;
};
export const FormUser = styled(form)`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
    margin: 10px auto;
`;