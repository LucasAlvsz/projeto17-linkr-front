import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import ReactHashtag from "react-hashtag";

import { AiOutlineComment as CommentsIcon } from "react-icons/ai";
import { FaTrash } from "react-icons/fa";
import { TiPencil } from "react-icons/ti";
import ReactTooltip from "react-tooltip";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import getUserData from "../../utils/getUserData";

import { PublishContext } from "../../providers/UserPublishProvider";
import { LikeContext } from "../../providers/LikeProvider";
import { CommentsContext } from "../../providers/CommentsProvider";

import ScreenDelete from "../ScreendDelete";
import Comments from "../Comments";

import * as S from "./styles";

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
    comments,
}) => {
    const navigate = useNavigate();
    const { addComment, newComment, setNewComment } =
        useContext(CommentsContext);
    const userLikesLength = usersLikes.length;
    const { likeMessage, buildTooltipMessage } = useContext(LikeContext);
    const { editPost } = useContext(PublishContext);
    const [deletePost, setDeletePost] = useState(false);
    const [editPostState, setEditPostState] = useState(false);
    const [openComments, setOpenComments] = useState(false);
    const [articleLog, setArticleLog] = useState(article);
    const userIdStorage = getUserData().userId;
    const currentUserPic = getUserData().pictureUrl;
    const userLiked = usersLikes.find((like) => like.userId === userIdStorage);
    const tooltipMessage = buildTooltipMessage(usersLikes);

    return (
        <S.Wrapper>
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
                    {comments && (
                        <>
                            <CommentsIcon
                                onClick={() => setOpenComments(!openComments)}
                            />
                            <p>{`${comments.length} comments`}</p>
                        </>
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
            {openComments && (
                <S.CommentsContainer>
                    {comments.map(
                        ({ id, userId, comment, username, pictureUrl }) => (
                            <Comments
                                key={id}
                                userId={userId}
                                currentUserId={userid}
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
                                addComment(postId, userIdStorage, newComment);
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
