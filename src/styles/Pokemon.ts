import styled from "styled-components"

const pkColors: string[] = ['#DDA0DD', '#FFB6C1', '#FFF5EE', '#FFFF00', '#EE82EE'];


export const ImgCard = styled.img`
    width: 96%;
    object-fit: contain;
    filter: drop-shadow(2px 4px 6px rgba (0,0,0, 0.5));
`;

export const PokeCard = styled.div`
    display: flex;
    justify-content: center;
    height: 380px;
`;
export const PokeBody = styled.div`
    padding: 2.5rem 3rem;
`;

export const PokeInfo = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.5rem;
`;

export const PokemonTitle = styled.h3`
    padding: 0.5rem 0;
    font-size: 2.5rem;
    font-weight: 600;
    text-transofrm: capitalize;
    color: #fff;
    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.1);
    margin-bottom: 1rem;
    text-shadow: px 3px 0px rgba(0, 0, 0, 0.1);
    text-align: center;

`;

export const Pokemon = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    
`;

export const PokemonText = styled.p`
    font-size: 1rem;
    font-weight: 500;
    color: #333;
    
`;

export const PokemonSubTitle = styled.h5`
    font-size: 1rem;
    font-weight: 600;
    color: #fff;
    text-shadow: 2px 2px 0px rgba(0,0,0, 0.1)
`;

export const AllComponentPokemon = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 90%;
  transition: all 0.3s ease-in-out;
  border-radius: 12px;
  box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.1);
  background-color: ${pkColors[Math.floor(Math.random() * pkColors.length)]};
`;



 