import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import ReactHashtag from "react-hashtag";

import { ReactComponent as RepostIcon } from "../../assets/icons/repost.svg";
import { AiOutlineComment as CommentsIcon } from "react-icons/ai";
import { FaTrash } from "react-icons/fa";
import { TiPencil } from "react-icons/ti";
import ReactTooltip from "react-tooltip";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import getUserData from "../../utils/getUserData";

import { PublishContext } from "../../providers/UserPublishProvider";
import { LikeContext } from "../../providers/LikeProvider";
import { CommentsContext } from "../../providers/CommentsProvider";
import { LoadingContext } from "../../providers/LoadingProvider";
import { RepostContext } from "../../providers/RepostProvider";

import ScreenDelete from "../ScreendDelete";
import Comments from "../Comments";

import * as S from "./styles";

const Post = ({
    postId,
    username,
    userPic,
    userId,
    article,
    link,
    urlMetadata,
    comments,
    isRepost,
    repostedBy,
    repostsCount,
    usersLikes,
    countLikes,
    hasLiked,
}) => {
    const navigate = useNavigate();
    const { addComment, newComment, setNewComment } =
        useContext(CommentsContext);
    const { likePost, buildTooltipMessage } = useContext(LikeContext);
    const { editPost } = useContext(PublishContext);
    const { newRepost } = useContext(RepostContext);
    const { update } = useContext(LoadingContext);
    const [deletePost, setDeletePost] = useState(false);
    const [editPostState, setEditPostState] = useState(false);
    const [openComments, setOpenComments] = useState(false);
    const [articleLog, setArticleLog] = useState(article);
    const userIdStorage = getUserData().userId;
    const currentUserPic = getUserData().pictureUrl;
    const tooltipMessage = buildTooltipMessage(
        hasLiked,
        countLikes,
        usersLikes,
    );
    const currentUserId = userId;
    return (
        <S.Wrapper isRepost={isRepost}>
            <span>
                {isRepost && (
                    <S.repostContainer>
                        <S.RepostedBy>
                            <RepostIcon />
                            <S.RepostedByText>
                                Re-posted by <span>{repostedBy}</span>
                            </S.RepostedByText>
                        </S.RepostedBy>
                    </S.repostContainer>
                )}

                <S.PostContainer openComments={openComments}>
                    {deletePost && (
                        <ScreenDelete
                            setDeletePost={(deletePost) =>
                                setDeletePost(!deletePost)
                            }
                            postId={postId}
                            update={update}
                        />
                    )}
                    <S.PostSideContainer>
                        <S.PostUserImage
                            src={userPic}
                            onClick={() => navigate(`/user/${userId}`)}
                        />
                        {hasLiked ? (
                            <AiFillHeart
                                onClick={() => {
                                    likePost(postId);
                                }}
                            />
                        ) : (
                            <AiOutlineHeart
                                onClick={() => {
                                    likePost(postId);
                                }}
                            />
                        )}
                        {parseInt(countLikes) ? (
                            <>
                                <p
                                    data-tip={`${tooltipMessage}`}
                                >{`${countLikes} likes`}</p>
                                <ReactTooltip
                                    place="bottom"
                                    type="light"
                                    effect="solid"
                                />
                            </>
                        ) : (
                            <p>{`${countLikes} likes`}</p>
                        )}

                        {comments && (
                            <>
                                <CommentsIcon
                                    onClick={() =>
                                        setOpenComments(!openComments)
                                    }
                                />
                                <p>{`${comments.length} comments`}</p>
                            </>
                        )}
                        {repostsCount && (
                            <>
                                <RepostIcon onClick={() => newRepost(postId)} />
                                <p>{`${repostsCount} reposts`}</p>
                            </>
                        )}
                    </S.PostSideContainer>
                    <S.PostContentContainer>
                        <S.PostUserName>
                            <p onClick={() => navigate(`/user/${userId}`)}>
                                {username}
                            </p>
                            <S.IconsContainer
                                userId={userId}
                                userIdStorage={userIdStorage}
                            >
                                <TiPencil
                                    onClick={() =>
                                        setEditPostState(!editPostState)
                                    }
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
                                    setEditPostState(!editPostState);
                                }}
                            >
                                <S.PostInput
                                    type="text"
                                    value={articleLog}
                                    onChange={(e) =>
                                        setArticleLog(e.target.value)
                                    }
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
            </span>
            {openComments && (
                <S.CommentsContainer>
                    {comments.map(
                        ({ id, userId, comment, username, pictureUrl }) => (
                            <Comments
                                key={id}
                                userId={userId}
                                currentUserId={currentUserId}
                                comment={comment}
                                username={username}
                                pictureUrl={pictureUrl}
                                postId={postId}
                            />
                        ),
                    )}
                    <S.WriteCommentContainer>
                        <img src={currentUserPic} />
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                addComment(newComment, postId);
                                setNewComment("");
                            }}
                        >
                            <input
                                placeholder="Write a comment..."
                                type="text"
                                value={newComment}
                                required
                                onChange={(e) => setNewComment(e.target.value)}
                            />
                        </form>
                    </S.WriteCommentContainer>
                </S.CommentsContainer>
            )}
        </S.Wrapper>
    );
};

export default Post;
