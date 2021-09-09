import styled from "styled-components";

export const TitleConversor = styled.h1`
    font-size: 30px;
    font-family: Roboto;
    margin: 10px;
`;

export const TitleConversor2 = styled.h1`
    font-size: 15px;
    font-family: Roboto;
    margin: 10px;
`;

export const InputConversor = styled.input`
    font-size: 25px;
    margin: 5px;

`;

export const ButtonConversor = styled.button`
    border-box: box-sizing;
    border-radius: 2px;
    border-width: 3px;
    border-color: gray;

    background-color: black;
    color: white;

    overflor: hidden;
    font-size: 15px;
    margin: 5px;
    padding: 5px;
    
`;

export const ContainerContainerConversor = styled.div`
    width: 50%;
    height: 130px;
    margin: 10px;
    padding: 10px;

    display: flex;
    justify-content: center;

    box-sizing: border-box;
    
`;

export const ContainerConversor = styled.div`
    display: flex;
    flex-direction: column;

    div{
        display:flex;
        align-items: center;
    }

    background-color: gray;
`;