import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import ReactHashtag from "react-hashtag";
import { FaTrash } from "react-icons/fa";
import { TiPencil } from "react-icons/ti";
import ReactTooltip from "react-tooltip";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import getUserData from "../../utils/getUserData";
import { motion } from "framer-motion";

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
    likes,
    urlMetadata,
    update,
    usersLikes,
}) => {
    const navigate = useNavigate();
    const userLikesLength = usersLikes.length;
    const { likeMessage, buildTooltipMessage } = useContext(LikeContext);
    const { editPost } = useContext(PublishContext);
    const [deletePost, setDeletePost] = useState(false);
    const [editPostState, setEditPostState] = useState(false);
    const [articleLog, setArticleLog] = useState(article);
    const userIdStorage = getUserData().userId;
    const userLiked = usersLikes.find((like) => like.userId === userIdStorage);
    const tooltipMessage = buildTooltipMessage(usersLikes);
    return (
        <motion.div animate={{ scale: [0, 1] }} transition={{ duration: 1 }}>
            <S.PostContainer>
                {deletePost && (
                    <ScreenDelete
                        update={update}
                        setDeletePost={() => setDeletePost(!deletePost)}
                        postId={postId}
                    />
                )}
                <S.PostSideContainer>
                    <S.PostUserImage
                        src={userpic}
                        onClick={() => navigate(`/user/${userid}`)}
                    />
                    {userLiked ? (
                        <AiFillHeart
                            onClick={() => {
                                likeMessage(postId);
                                update();
                            }}
                        />
                    ) : (
                        <AiOutlineHeart
                            onClick={() => {
                                likeMessage(postId);
                                update();
                            }}
                        />
                    )}
                    {userLikesLength ? (
                        <>
                            <p
                                data-tip={`${tooltipMessage}`}
                            >{`${likes} likes`}</p>
                            <ReactTooltip
                                place="bottom"
                                type="light"
                                effect="solid"
                            />
                        </>
                    ) : (
                        <p>{`${likes} likes`}</p>
                    )}
                </S.PostSideContainer>
                <S.PostContentContainer>
                    <S.PostUserName>
                        <p onClick={() => navigate(`/user/${userid}`)}>
                            {username}
                        </p>
                        <S.IconsContainer
                            userId={userid}
                            userIdStorage={userIdStorage}
                        >
                            <TiPencil
                                onClick={() => setEditPostState(!editPostState)}
                                className="icon-post"
                            />
                            <FaTrash
                                onClick={() => setDeletePost(true)}
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
                                setEditPostState(!editPostState);
                                update();
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
        </motion.div>
    );
};

export default Post;
