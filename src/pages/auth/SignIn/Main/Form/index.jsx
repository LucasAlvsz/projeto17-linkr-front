/* eslint-disable no-undef */
import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import * as S from "./../../../styles";
import Inputs from "./Inputs";
import SubmitButton from "./SubmitButton";
import handleError from "./../../../../../utils/handleError";
import { AuthContext } from "../../../../../providers/AuthProvider";

const Form = () => {
    const navigate = useNavigate();
    const { signInData } = useContext(AuthContext);
    
    const signIn = (e) => {
        e.preventDefault();
        const url = `${process.env.REACT_APP_URI}/sign-in`;
        
        axios
            .post(url, signInData)
            .then(response => {
                navigate("/timeline");

                localStorage.setItem("user", JSON.stringify(response.data));
            })
            .catch(handleError);
    };

    return (
        <S.Form onSubmit={signIn}>
            <Inputs />
            <SubmitButton />
        </S.Form>
    );
};

export default Form;