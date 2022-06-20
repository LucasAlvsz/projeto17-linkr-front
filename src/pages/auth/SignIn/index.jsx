import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import isLogged from "../../../utils/isLogged";
import Header from "../components/Header";
import Main from "./Main";

const SignIn = () => {
    const navigate = useNavigate();
    useEffect(() => {
        if (isLogged()) navigate("/timeline");
    }, []);
    return (
        <>
            <Header />
            <Main />
        </>
    );
};

export default SignIn;
