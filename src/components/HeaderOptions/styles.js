import styled from "styled-components";

export const OptionsList = styled.ul`
    width: 150px;
    height: auto;
    min-height: 45px;
    position: absolute;
    top: 72px;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border-radius: 0px 0px 20px 20px;
    background-color: var(--primary-color);
`;

export const Option = styled.li`
    width: auto;
    height: auto;
    font-family: var(--primary-font);
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    letter-spacing: 0.05em;
    color: var(--secondary-color);
    margin-top: 10px;
    cursor: pointer;
`;
