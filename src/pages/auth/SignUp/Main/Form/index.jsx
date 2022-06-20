/* eslint-disable no-undef */
import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../../../../providers/AuthProvider";
import * as S from "./../../../styles";
import Inputs from "./Inputs";
import SubmitButton from "./SubmitButton";
import handleError from "./../../../../../utils/handleError";

const Form = () => {
    const navigate = useNavigate();

    const { signUpData } = useContext(AuthContext);

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
            <Inputs />
            <SubmitButton />
        </S.Form>
    );
};

export default Form;