import styled from "styled-components";
import device from "../../utils/devicesSizes";

const SearchBarContainer = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
    width: 350px;
    @media ${device.desktop} {
        width: 563px;
    }

    .search-icon {
        width: 19.15px;
        height: 19.15px;
        color: #c6c6c6;
        margin-top: 12px;
        margin-right: 16px;
        position: absolute;
        right: 0;
        top: 0;
        @media ${device.desktop} {
            width: 21px;
            height: 21px;
            margin-top: 12px;
            margin-right: 24px;
        }
    }
`;

const SearchBarDataResult = styled.div``;
const SearchBarContainerInput = styled.div`
    .searchBar-input {
        width: 350px;
        height: 45px;
        border-radius: 8px;
        border: none;
        padding-left: 26px;
        background: var(--secondary-color);
        font-family: var(--primary-font);
        font-size: 17px;
        @media ${device.desktop} {
            width: 563px;
        }

        &:focus {
            outline: none;
        }
        &::placeholder {
            font-style: var(--primary-font);
            font-weight: 400;
            font-size: 17px;
            color: #c6c6c6;
            @media ${device.desktop} {
                font-size: 19px;
            }
        }

        :focus::placeholder {
            color: transparent;
        }
    }
`;

export { SearchBarContainer, SearchBarContainerInput, SearchBarDataResult };
