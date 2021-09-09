import styled, { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
    *{
        margin: 0px;
        padding: 0px;
        text-decoration: none;
    }
`;

export const ContainerParMoedas = styled.div`
    width: 100%;
    display: flex;
    margin-bottom: 25px;

`;

export const ImagemFundo = styled.img`
    width: 100%;
    height: 80%;
`;