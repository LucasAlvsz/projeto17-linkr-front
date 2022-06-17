import { useState, useContext } from "react";
import { PublishContext } from "../../providers/UserPublishProvider";

import * as S from "./styles";

const UserPublish = () => {
    const { publishSubmit } = useContext(PublishContext);
    const [disabled, setDisabled] = useState(false);
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
        const sendPublish = publishSubmit(data);
        console.log(sendPublish);
        // eslint-disable-next-line no-undef
        setInputs({ url: "", article: "" });
        setDisabled(false);
    };
    return (
        <S.BoxPublish>
            <S.Container>
                <S.Data>
                    <S.Form onSubmit={formSubmit}>
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
