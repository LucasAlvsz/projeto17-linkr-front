import Header from "../components/Header";
import Main from "./Main";
import * as S from "./../styles";

const SignIn = () => {
    return (
        <S.AuthContainer>
            <Header />
            <Main />
        </S.AuthContainer>
    );
};

export default SignIn;
