import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import isLogged from "../../../utils/isLogged";
import Header from "../components/Header";
import Main from "./Main";
import * as S from "./../styles";

const SignIn = () => {
    const navigate = useNavigate();
    useEffect(() => {
        if (isLogged()) {
            setTimeout(() => {
                navigate("/timeline");
            }, 1000);
        }
    }, []);
    return (
        <S.AuthContainer>
            <Header />
            <Main />
        </S.AuthContainer>
    );
};

export default SignIn;
