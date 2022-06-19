import { useState } from "react";

import * as S from "./../../../styles";
import Inputs from "./Inputs";
import SubmitButton from "./SubmitButton";

const Form = () => {
    const [ signUpData, setSignUpData ] = useState({
        email: "",
        password: "",
        username: "",
        pictureUrl: ""
    });

    const signUp = (e) => {
        e.preventDefault();

        alert();
    };

    return (
        <S.Form onSubmit={signUp}>
            <Inputs {...{signUpData, setSignUpData}}/>
            <SubmitButton />
        </S.Form>
    );
};

export default Form;