import ReactHashtag from "react-hashtag";

import * as S from "./styles";

const Post = ({ username, userpic, article, link, urlMetadata }) => {
    return (
        <S.PostContainer>
            <S.PostSideContainer>
                <S.PostUserImage src={userpic} />
            </S.PostSideContainer>
            <S.PostContentContainer>
                <S.PostUserName>{username}</S.PostUserName>
                <S.PostText>
                    <ReactHashtag>{article}</ReactHashtag>
                </S.PostText>
                <S.PostLinkPreviewContainer>
                    <S.PostLinkContent>
                        <span>
                            <S.PostLinkTitle>
                                {urlMetadata.title}
                            </S.PostLinkTitle>
                            <S.PostLinkDescription>
                                {urlMetadata.description}
                            </S.PostLinkDescription>
                        </span>
                        <S.PostLinkUrl href={link}>{link}</S.PostLinkUrl>
                    </S.PostLinkContent>
                    <S.PostLinkImage src={urlMetadata.image} />
                </S.PostLinkPreviewContainer>
            </S.PostContentContainer>
        </S.PostContainer>
    );
};

export default Post;
