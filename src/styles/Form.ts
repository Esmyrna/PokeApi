import styled from "styled-components";

export const Form = styled.form`
position: relative;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 2rem 0;
background-color: #fff;
box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.04);

@media (max-width: 700px) {
    margin: auto;
    width: 100%;
     
}
`;

export const InputControl = styled.div`
position: relative;
width: 37rem;
margin-bottom: 2rem;


@media (max-width: 700px) {
    margin: auto;
    width: 100%;
     
}
`;

export const Input = styled.input`
width: 100%;
padding: 1rem 2rem;
outline: none;
border-radius: 12px;
background-color: #fafafa;
font-family: inherit;
font-size: inherit;
font-weight: 500;
color: #333;
transition: all 0.3s ease;
border: 2px solid #fafafa;
box-shadow: 1px 5px 10px rgba(0, 0, 0, 0.1);

&:focus {
    border: 2px solid #7263f3;
}

`;

export const ButtonSearch = styled.button`
position: absolute;
top: 50%;
right: 1rem;
transform: translateY(-50%);
padding: 0.5rem 1rem;
border: none;
border-radius: 8px;
background-color: #7263f3;
cursor: pointer;
font-family: inherit;
font-size: inherit;
font-weight: 500;
color: #fff;
transition: all 0.3s ease;
`;

export const SearchResults = styled.div`
position: absolute;
height: 14rem;
width: 37rem;
top: 12%;
left: 50%;
overflow: auto;
transform: translateX(-50%);
z-index: 5;
padding: 1rem 1.2rem;
border-radius: 12px;
background-color: white;
box-shadow: 3px 4px 15px rgba(0, 0, 0, 0.2);
`;