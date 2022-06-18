import styled from "styled-components";
import device from "../../utils/devicesSizes";

const SearchBarContainer = styled.div`
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
        margin-top: 13.65px;
        margin-right: 16.65px;
        position: absolute;
        right: 0;
        top: 0;
        @media ${device.desktop} {
            width: 21px;
            height: 21px;
            margin-top: 12px;
            margin-right: 17px;
        }
    }
`;

const SearchBarDataResult = styled.div`
    background-color: #e7e7e7;
    display: flex;
    width: 100%;
    position: absolute;
    top: 0;
    z-index: -1;
    flex-direction: column;
    border-radius: 8px;

    a {
        margin-bottom: 16px;
        display: flex;
        align-items: center;
        color: inherit;
        a:visited {
            color: inherit;
        }

        p {
            margin-left: 12px;
            font-weight: 400;
            color: #515151;
            font-size: 19px;
            font-family: var(--primary-font);
        }
    }

    a:first-child {
        margin-top: calc(45px + 14px / 2);
    }
`;

const UserImage = styled.div`
    width: 39px;
    height: 39px;
    margin-left: 17px;
    border-radius: 85px;
    background-image: ${({ src }) => `url(${src})`};
    background-size: cover;
    background-position: center;
`;
const SearchBarContainerInput = styled.div`
    position: relative;
    background-color: #e7e7e7;
    border-radius: 8px;

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

export {
    SearchBarContainer,
    SearchBarContainerInput,
    SearchBarDataResult,
    UserImage,
};
