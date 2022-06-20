import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import getUserData from "../../utils/getUserData";
import isLogged from "../../utils/isLogged";
import { IoChevronDownOutline as UserOptionsButton } from "react-icons/io5";
import HeaderOptions from "./HeaderOptions";
import SearchBar from "../SearchBar";

import * as S from "./styles";

const Header = () => {
    const [showOptions, setShowOptions] = useState(false);
    const [pictureUrl, setPictureUrl] = useState("");
    const navigate = useNavigate();
    useEffect(() => {
        if (isLogged()) setPictureUrl(getUserData().pictureUrl);
        else navigate("/sign-in");
    }, []);

    return (
        <S.HeaderContainer>
            <S.Header>
                <S.Logo onClick={() => navigate("/timeline")}>linkr</S.Logo>
                <SearchBar />
                <S.UserContainer>
                    <S.UserOptionsContainer>
                        <UserOptionsButton
                            className="options-icon"
                            onClick={() => setShowOptions(!showOptions)}
                        />
                        <HeaderOptions open={showOptions} />
                    </S.UserOptionsContainer>
                    <S.UserIcon src={pictureUrl} />
                </S.UserContainer>
            </S.Header>
        </S.HeaderContainer>
    );
};

export default Header;
