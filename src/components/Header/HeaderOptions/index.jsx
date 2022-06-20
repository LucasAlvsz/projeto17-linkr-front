import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../../providers/AuthProvider";

import * as S from "./styles";

const HeaderOptions = ({ open }) => {
    const { logout } = useContext(AuthContext);
    const navigate = useNavigate();
    return (
        open && (
            <S.OptionsList>
                <S.Option
                    onClick={() => {
                        logout();
                        navigate("/");
                    }}
                >
                    Logout
                </S.Option>
            </S.OptionsList>
        )
    );
};

export default HeaderOptions;
