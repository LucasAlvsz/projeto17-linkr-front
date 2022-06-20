import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../../../../providers/AuthProvider";

import * as S from "./../../../styles";
import Inputs from "./Inputs";
import SubmitButton from "./SubmitButton";
//import handleError from "./../../../../../utils/handleError";

const Form = () => {
    const navigate = useNavigate();
    const { signIn } = useContext(AuthContext);
    const [signInData, setSignInData] = useState({
        email: "",
        password: "",
    });
    const handleSignIn = async (e) => {
        e.preventDefault();
        signIn(signInData.email, signInData.password);
        setTimeout(() => {
            navigate("/timeline");
        }, 1000);
    };
    return (
        <S.Form onSubmit={handleSignIn}>
            <Inputs {...{ signInData, setSignInData }} />
            <SubmitButton />
        </S.Form>
    );
};

export default Form;
