import styled from "styled-components"

export const AllPokemon = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit,
        minmax(250px, 1fr));
    grid-gap: 2rem;
    padding: 1rem;
    margin: 3rem 15rem;
  

`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.04);
    border-radius: 12px;
    cursor: pointer;
    transition: all 0.3s ease;
    
    &:hover {
      box-shadow: 1px 3px 5px (0, 0, 0, 0.1);
      border-radius: 12px;
      transform: translateY(-5px);
    }
   
    
`;

export const ImageCard = styled.div`
  height: 250px;
  border-top-right-radius: 12px;
  border-top-left-radius: 12px;
 
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-top-right-radius: 12px;
  border-top-left-radius: 12px;

`;

export const CardBody = styled.div`
  padding: 1rem;
  height: 200px;
  background-color: #fafafa;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
`;

export const Title = styled.h3`
  font-size: 1.3rem;
  color: #333;
  text-transform: capitalize;
`;

export const Text = styled.p``;

export const Button = styled.button`
  background-color: #ADD8E6;
  height: 8%;
  width: 100%;
  border: none;
  border-radius: 12px;
  font-weight: bold;
  font-family: "Inter", sans-serif;
  cursor: pointer;

  &:hover{
     opacity: 0.8;
  }
`