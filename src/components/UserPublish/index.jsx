import * as S from "./styles";
const UserPublish = () => {
    const publishSubmit = () => {};
    return (
        <S.BoxPublish>
            <S.Container>
                <S.Data>
                    <S.Form onSubmit={publishSubmit}>
                        <p>What are you going to share today?</p>
                        <S.Inputs>
                            <input
                                type="url"
                                className="inputUrl"
                                placeholder="  http://..."
                                required
                            ></input>
                            <input
                                type="text"
                                className="inputArticle"
                                placeholder="  Awesome article about #javascript"
                            ></input>
                        </S.Inputs>
                        <S.Button>
                            <button type="submit" className="PublishButton">
                                Publish
                            </button>
                        </S.Button>
                    </S.Form>
                </S.Data>
            </S.Container>
        </S.BoxPublish>
    );
};

export default UserPublish;
