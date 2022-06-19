import { useState, useContext } from "react";
import { PublishContext } from "../../providers/UserPublishProvider";

import * as S from "./styles";
const UserPublish = ({ imageUser, setReload }) => {
    const { publishSubmit, response } = useContext(PublishContext);
    const [disabled, setDisabled] = useState(false);
    const [boolean, setboolean] = useState(false);

    const [inputs, setInputs] = useState({
        url: "",
        article: "",
    });
    const formSubmit = (e) => {
        setDisabled(true);
        e.preventDefault();
        const data = {
            url: inputs.url,
            article: inputs.article.length === 0 ? " " : inputs.article,
        };
        // missing send Token
        publishSubmit(data);
        setReload(!boolean);
        setboolean(!boolean);
        // eslint-disable-next-line no-undef
        if (!response) {
            setInputs({ url: "", article: "" });
        }
        setDisabled(false);
    };
    return (
        <S.BoxPublish>
            <S.Container>
                <S.Data>
                    <S.ImageUser>
                        <img src={imageUser} alt="img" />
                    </S.ImageUser>
                    <S.Form onSubmit={formSubmit} className="Desk">
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
                                {disabled ? "Publishing..." : "Publish"}
                            </button>
                        </S.Button>
                    </S.Form>
                </S.Data>
            </S.Container>
        </S.BoxPublish>
    );
};

export default UserPublish;
