import Styled from "styled-components";

const AppButton = Styled.button`
background: #000000;
border: 1px solid #A6A6A6;
border-radius: 0.5rem;
// box-shadow: 0px 4px 8px rgba(50, 50, 71, 0.06), 0px 4px 4px rgba(50, 50, 71, 0.08);
height:3rem;
width: 12rem;
color: #FFFFFF;
font-weight: 500;
font-size: 0.5rem;
line-height: 22px;
padding: 0.7rem;
cursor:pointer;
// display:flex;
// justify-content:space-between;
span {
    font-size: 0.8rem;
    font-weight: 700;
    position: relative;
    top: 1rem;
    right: 3rem;
}
img {
    height: 20px;
    width: 20px;
    padding-right:1rem; 
    position: relative;
    top: 0.7rem
}
`;

export default AppButton;