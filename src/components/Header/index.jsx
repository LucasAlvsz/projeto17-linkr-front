import { useState } from "react";

import { IoChevronDownOutline as UserOptionsButton } from "react-icons/io5";
import HeaderOptions from "../HeaderOptions";

import * as S from "./styles";

const Header = () => {
    const [showOptions, setShowOptions] = useState(false);
    return (
        <S.Header>
            <S.Logo>linkr</S.Logo>
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
    );
};

export default Header;
