/* eslint-disable no-console */
/* eslint-disable no-undef */
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import handleError from "../../../../../utils/handleError";
import * as S from "./../../../styles";
import Inputs from "./Inputs";
import SubmitButton from "./SubmitButton";

const Form = () => {
    const navigate = useNavigate();

    const [ signUpData, setSignUpData ] = useState({
        email: "",
        password: "",
        username: "",
        pictureUrl: ""
    });

    const signUp = (e) => {
        e.preventDefault();
        const url = `${process.env.REACT_APP_URI}/sign-up`;
        
        axios
            .post(url, signUpData)
            .then(() => navigate("/sign-in"))
            .catch(handleError);
    };

    return (
        <S.Form onSubmit={signUp}>
            <Inputs {...{signUpData, setSignUpData}}/>
            <SubmitButton />
        </S.Form>
    );
};

export default Form;