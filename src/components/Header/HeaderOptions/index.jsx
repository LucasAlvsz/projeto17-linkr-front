import * as S from "./styles";

const HeaderOptions = ({ open }) => {
    return (
        open && (
            <S.OptionsList>
                <S.Option>Logout</S.Option>
            </S.OptionsList>
        )
    );
};

export default HeaderOptions;
