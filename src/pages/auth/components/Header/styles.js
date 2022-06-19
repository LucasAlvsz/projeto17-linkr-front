import styled from "styled-components"; 

export const Container = styled.div`
    height: 175px;

    display: flex;
    flex-direction: column;
    justify-content: center;

    padding: 0 69px;

    color: white;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    background-color: var(--color-header);

    >div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        font-weight: 700;

        >h1 {
            font-size: 76px; 
            letter-spacing: 0.05em;
            font-family: Passion One;
        }
    
        >h2 {
            font-size: 23px;
            line-height: 34px;
            text-align: center;
            font-family: var(--secondary-font);
        }
    }
`;