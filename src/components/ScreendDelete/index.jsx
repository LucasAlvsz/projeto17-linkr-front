import * as S from "./style";

export const ScreenDelete = () => {
    return (
        <S.Container>
            <S.CenterBox>
                <S.Text>
                    <h1>Are you sure you want to delete this post?</h1>
                </S.Text>
                <S.Buttons>
                    <button className="">No, go back</button>
                    <button className="blue">Yes, delete it</button>
                </S.Buttons>
            </S.CenterBox>
        </S.Container>
    );
};
export default ScreenDelete;
