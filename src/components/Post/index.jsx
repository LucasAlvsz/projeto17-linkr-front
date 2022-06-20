import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import ReactHashtag from "react-hashtag";
import { FaTrash } from "react-icons/fa";
import { TiPencil } from "react-icons/ti";
import { AiOutlineHeart } from "react-icons/ai";
import getUserData from "../../utils/getUserData";

import { PublishContext } from "../../providers/UserPublishProvider";
import ScreenDelete from "../ScreendDelete";

import * as S from "./styles";
import { LikeContext } from "../../providers/LikeProvider";

const Post = ({
    postId,
    username,
    userpic,
    userid,
    article,
    link,
    urlMetadata,
}) => {
    const navigate = useNavigate();
    const { likeMessage } = useContext(LikeContext);
    const { editPost } = useContext(PublishContext);
    const [deletePost, setDeletePost] = useState(false);
    const [editPostState, setEditPostState] = useState(false);
    const [articleLog, setArticleLog] = useState(article);
    const userIdStorage = getUserData().userId;
    return (
        <S.PostContainer>
            {deletePost && (
                <ScreenDelete
                    setDeletePost={(deletePost) => setDeletePost(!deletePost)}
                    postId={postId}
                />
            )}
            <S.PostSideContainer>
                <S.PostUserImage
                    src={userpic}
                    onClick={() => navigate(`/user/${userid}`)}
                />
                <AiOutlineHeart onClick={() => likeMessage(postId)} />
                <p>12 likes</p>
            </S.PostSideContainer>
            <S.PostContentContainer>
                <S.PostUserName onClick={() => navigate(`/user/${userid}`)}>
                    {username}
                    <S.IconsContainer
                        userId={userid}
                        userIdStorage={userIdStorage}
                    >
                        <TiPencil
                            onClick={() => setEditPostState(!editPostState)}
                            className="icon-post"
                        />
                        <FaTrash
                            onClick={() => setDeletePost(!deletePost)}
                            className="icon-post"
                        />
                    </S.IconsContainer>
                </S.PostUserName>
                {editPostState ? (
                    <S.PostForm
                        onSubmit={(e) => {
                            e.preventDefault();
                            setArticleLog(articleLog);
                            editPost(postId, {
                                article: articleLog,
                                url: link,
                            });
                        }}
                    >
                        <S.PostInput
                            type="text"
                            value={articleLog}
                            onChange={(e) => setArticleLog(e.target.value)}
                        />
                    </S.PostForm>
                ) : (
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
                            {articleLog}
                        </ReactHashtag>
                    </S.PostText>
                )}

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
