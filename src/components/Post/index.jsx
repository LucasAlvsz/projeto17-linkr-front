import * as S from "./styles";

const Post = () => {
    return (
        <S.PostContainer>
            <S.PostSideContainer>
                <S.PostImage src="https://i.pinimg.com/originals/5a/39/3d/5a393d60dab143a9521500b29d5edad6.jpg" />
            </S.PostSideContainer>
            <S.PostContentContainer>
                <S.PostUserName>Akali</S.PostUserName>
                <S.PostText>
                    Muito maneiro esse tutorial de Material UI com React, deem
                    uma olhada! #react #material
                </S.PostText>
                <S.PostLinkPreviewContainer>
                    <S.PostLinkContent>
                        <span>
                            <S.PostLinkTitle>
                                Como aplicar o Material UI em um projeto React
                            </S.PostLinkTitle>
                            <S.PostLinkDescription>
                                Hey! I have moved this tutorial to my personal
                                blog. Same content, new location. Sorry about
                                making you click through to another page.
                            </S.PostLinkDescription>
                        </span>
                        <S.PostLinkUrl href="https://medium.com/@pshrmn/a-simple-react-router">
                            https://medium.com/@pshrmn/a-simple-react-router
                        </S.PostLinkUrl>
                    </S.PostLinkContent>
                    <S.PostLinkImage src="https://i.pinimg.com/originals/5a/39/3d/5a393d60dab143a9521500b29d5edad6.jpg" />
                </S.PostLinkPreviewContainer>
            </S.PostContentContainer>
        </S.PostContainer>
    );
};

export default Post;
