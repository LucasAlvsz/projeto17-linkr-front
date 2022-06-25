import { useContext, useLayoutEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { UserPageContext } from "../../providers/UserPageProvider";
import isLogged from "../../utils/isLogged";
import getUserData from "../../utils/getUserData";

import Header from "../../components/Header";
import Post from "../../components/Post";
import Trending from "../../components/Trending";
import UserPublish from "../../components/UserPublish";
import { LoadingContext } from "../../providers/LoadingProvider";
import { CommentsContext } from "../../providers/CommentsProvider";
import LoadingLottie from "../../components/LottieComponents/LoadingLottie";

import * as S from "./styles";

const UserPage = () => {
    const navigate = useNavigate();
    const {
        userPosts,
        getUserPosts,
        amIFollower,
        isFollower,
        followOrUnfollow,
    } = useContext(UserPageContext);
    const { update, setUpdate, loading, setLoading } =
        useContext(LoadingContext);
    const { comments } = useContext(CommentsContext);
    const { id } = useParams();
    const userIdStorage = getUserData().userId;

    useLayoutEffect(() => {
        setLoading(true);
        if (!isLogged()) navigate("/sign-in");
        else {
            getUserPosts(id);
            amIFollower(id);
        }
    }, [id, update, comments]);
    return (
        <>
            <Header />
            <S.Main>
                <S.ContentContainer>
                    <S.PostsContainer>
                        <S.UserData>
                            <div>
                                <S.UserImage src={userPosts?.userpic} />
                                {userPosts.username &&
                                    `${userPosts.username}'s Posts`}
                            </div>
                            <S.ButtonFollowMobile
                                userId={id}
                                userIdStorage={userIdStorage}
                                isFollower={isFollower}
                                onClick={async () => {
                                    await followOrUnfollow(id, isFollower);
                                    setUpdate(!update);
                                }}
                            >
                                {isFollower ? "Following" : "Follow"}
                            </S.ButtonFollowMobile>
                        </S.UserData>
                        {loading ? (
                            <LoadingLottie />
                        ) : (
                            userPosts.posts?.map(
                                ({
                                    id,
                                    username,
                                    userPic,
                                    userId,
                                    article,
                                    link,
                                    urlMetadata,
                                    comments,
                                    repostsCount,
                                    likes,
                                    countLikes,
                                    hasLiked,
                                }) => (
                                    <Post
                                        key={id}
                                        postId={id}
                                        username={username}
                                        userPic={userPic}
                                        userId={userId}
                                        article={article}
                                        link={link}
                                        urlMetadata={urlMetadata}
                                        comments={comments}
                                        repostsCount={repostsCount}
                                        usersLikes={likes}
                                        countLikes={countLikes}
                                        hasLiked={hasLiked}
                                        update={() => setUpdate(!update)}
                                    />
                                ),
                            )
                        )}
                    </S.PostsContainer>
                    <S.SidebarContainer>
                        <S.ButtonFollow
                            userId={id}
                            userIdStorage={userIdStorage}
                            isFollower={isFollower}
                            onClick={async () => {
                                await followOrUnfollow(id, isFollower);
                                setUpdate(!update);
                            }}
                        >
                            {isFollower ? "Following" : "Follow"}
                        </S.ButtonFollow>
                        <Trending />
                    </S.SidebarContainer>
                </S.ContentContainer>
            </S.Main>
        </>
    );
};

export default UserPage;
