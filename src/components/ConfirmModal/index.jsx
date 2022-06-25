import { useContext } from "react";

import { LoadingContext } from "../../providers/LoadingProvider";

import LoadingLottie from "../LottieComponents/LoadingLottie";

import * as S from "./style";

const ScreenDelete = ({
    closeModal,
    tittle,
    cancelButton,
    confirmButton,
    modalFunction,
}) => {
    const { loading } = useContext(LoadingContext);
    return (
        <S.Container>
            {loading ? (
                <LoadingLottie />
            ) : (
                <S.CenterBox>
                    <S.Text>
                        <h1>{tittle}</h1>
                    </S.Text>
                    <S.Buttons>
                        <button onClick={closeModal}>{cancelButton}</button>
                        <button className="blue" onClick={modalFunction}>
                            {confirmButton}
                        </button>
                    </S.Buttons>
                </S.CenterBox>
            )}
        </S.Container>
    );
};
export default ScreenDelete;
