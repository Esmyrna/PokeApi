import styled from "styled-components"

export const AllPokemon = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit,
        minmax(250px, 1fr));
    grid-gap: 2rem;
    padding: 1rem;
    margin: 3rem 15rem;

`;

export const Pokemon = styled.div`
    display: flex;
    flex-direction: column;
    box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.04;
    border-radius: 12px;
    cursor: pointer;
    transition: all 0.3s ease;
    
`;

export const CardImage = styled.div``;

export const Img = styled.img``;

export const CardBody = styled.div``;

export const Title = styled.h3``;

export const Text = styled.p``;