import { useState } from "react";

import * as S from "./styles";

const UserPublish = () => {
    // eslint-disable-next-line no-unused-vars
    const [disabled, setDisabled] = useState(false);
    const [inputs, setInputs] = useState({
        url: "",
        article: "",
    });
    const publishSubmit = (e) => {
        e.preventDefault();
        alert({ inputs });
    };
    return (
        <S.BoxPublish>
            <S.Container>
                <S.Data>
                    <S.Form onSubmit={publishSubmit}>
                        <p>What are you going to share today?</p>
                        <S.Inputs>
                            <input
                                type="url"
                                disabled={disabled}
                                className="inputUrl"
                                value={inputs.url}
                                onChange={(e) => {
                                    setInputs({
                                        ...inputs,
                                        url: e.target.value,
                                    });
                                }}
                                placeholder="  http://..."
                                required
                            ></input>
                            <input
                                type="text"
                                disabled={disabled}
                                className="inputArticle"
                                value={inputs.article}
                                onChange={(e) => {
                                    setInputs({
                                        ...inputs,
                                        article: e.target.value,
                                    });
                                }}
                                placeholder="  Awesome article about #javascript"
                            ></input>
                        </S.Inputs>
                        <S.Button>
                            <button
                                type="submit"
                                disabled={disabled}
                                className="PublishButton"
                            >
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
