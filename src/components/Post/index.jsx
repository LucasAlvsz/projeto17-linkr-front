import { useNavigate } from "react-router-dom";
import ReactHashtag from "react-hashtag";

import * as S from "./styles";

const Post = ({ username, userpic, userid, article, link, urlMetadata }) => {
    const navigate = useNavigate();
    // garbiel vai usar depois
    // window.scrollTo({
    //     top: 0,
    //     behavior: "smooth",
    // });
    return (
        <S.PostContainer>
            <S.PostSideContainer>
                <S.PostUserImage
                    src={userpic}
                    onClick={() => navigate(`/user/${userid}`)}
                />
            </S.PostSideContainer>
            <S.PostContentContainer>
                <S.PostUserName onClick={() => navigate(`/user/${userid}`)}>
                    {username}
                </S.PostUserName>
                <S.PostText>
                    <ReactHashtag
                        onHashtagClick={(hashtagValue) =>
                            navigate(
                                `/hashtag/${hashtagValue
                                    .replace("#", "")
                                    .toLowerCase()}`,
                            )
                        }
                    >
                        {article}
                    </ReactHashtag>
                </S.PostText>
                <S.PostLinkPreviewContainer href={link} target="_blank">
                    <S.PostLinkContent>
                        <span>
                            <S.PostLinkTitle>
                                {urlMetadata.title}
                            </S.PostLinkTitle>
                            <S.PostLinkDescription>
                                {urlMetadata.description}
                            </S.PostLinkDescription>
                        </span>
                        <S.PostLinkUrl>{link}</S.PostLinkUrl>
                    </S.PostLinkContent>
                    <S.PostLinkImage src={urlMetadata.image} />
                </S.PostLinkPreviewContainer>
            </S.PostContentContainer>
        </S.PostContainer>
    );
};

export default Post;
