import { useState } from "react";

import { IoChevronDownOutline as UserOptionsButton } from "react-icons/io5";
import HeaderOptions from "../HeaderOptions";
import SearchBar from "../SearchBar";

import * as S from "./styles";

const Header = () => {
    const [showOptions, setShowOptions] = useState(false);
    return (
        <S.HeaderContainer>
            <S.Header>
                <S.Logo>linkr</S.Logo>
                <SearchBar />
                <S.UserContainer>
                    <S.UserOptionsContainer>
                        <UserOptionsButton
                            className="options-icon"
                            onClick={() => setShowOptions(!showOptions)}
                        />
                        <HeaderOptions open={showOptions} />
                    </S.UserOptionsContainer>
                    <S.UserIcon src="https://i.pinimg.com/originals/5a/39/3d/5a393d60dab143a9521500b29d5edad6.jpg" />
                </S.UserContainer>
            </S.Header>
        </S.HeaderContainer>
    );
};

export default Header;
