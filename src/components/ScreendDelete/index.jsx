import { useContext } from "react";

import { PublishContext } from "../../providers/UserPublishProvider";

import * as S from "./style";

export const ScreenDelete = ({ setDeletePost, postId }) => {
    const { deletePost } = useContext(PublishContext);
    return (
        <S.Container>
            <S.CenterBox>
                <S.Text>
                    <h1>Are you sure you want to delete this post?</h1>
                </S.Text>
                <S.Buttons>
                    <button
                        className=""
                        onClick={(deletePost) => setDeletePost(!deletePost)}
                    >
                        No, go back
                    </button>
                    <button
                        className="blue"
                        onClick={() => {
                            deletePost(postId);
                            setDeletePost(!deletePost);
                        }}
                    >
                        Yes, delete it
                    </button>
                </S.Buttons>
            </S.CenterBox>
        </S.Container>
    );
};
export default ScreenDelete;
