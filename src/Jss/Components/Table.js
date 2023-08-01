import { styled } from "styled-components";

const table = ({...resProps}) => {
    return <table {...resProps}></table>;
};
export const Table = styled(table)`
    width : 100%;
`;