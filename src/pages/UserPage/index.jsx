import { useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { UserPageContext } from "../../providers/UserPageProvider";
import isLogged from "../../utils/isLogged";

import Header from "../../components/Header";
import Post from "../../components/Post";
import Trending from "../../components/Trending";
import UserPublish from "../../components/UserPublish";

import * as S from "./styles";

const UserPage = () => {
    const navigate = useNavigate();
    const { userPosts, getUserPosts } = useContext(UserPageContext);
    const { id } = useParams();

    useEffect(() => {
        if (!isLogged()) navigate("/sign-in");
        else getUserPosts(id);
    }, [id]);

    return (
        <>
            <Header />
            <S.Main>
                <S.TimelineContainer>{"timeline"}</S.TimelineContainer>
                <S.UserPublishContainer>
                    <UserPublish />
                </S.UserPublishContainer>
                <S.ContentContainer>
                    <S.PostsContainer>
                        <S.UserData>
                            <S.UserImage src={userPosts.userpic} />
                            {`${userPosts.username}'s Posts`}
                        </S.UserData>
                        {userPosts.posts?.map(
                            ({
                                id,
                                username,
                                userpic,
                                userId,
                                article,
                                link,
                                urlMetadata,
                            }) => (
                                <Post
                                    key={id}
                                    postId={id}
                                    username={username}
                                    userpic={userpic}
                                    userid={userId}
                                    article={article}
                                    link={link}
                                    urlMetadata={urlMetadata}
                                />
                            ),
                        )}
                    </S.PostsContainer>
                    <S.SidebarContainer>
                        <Trending />
                    </S.SidebarContainer>
                </S.ContentContainer>
            </S.Main>
        </>
    );
};

export default UserPage;
