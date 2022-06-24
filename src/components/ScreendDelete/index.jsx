import { useContext } from "react";

import { PublishContext } from "../../providers/UserPublishProvider";
import { LoadingContext } from "../../providers/LoadingProvider";

import LoadingLottie from "../../components/LottieComponents/LoadingLottie";

import * as S from "./style";

export const ScreenDelete = ({ setDeletePost, postId }) => {
    const { loading, setLoading } = useContext(LoadingContext);
    const { deletePost } = useContext(PublishContext);
    return (
        <S.Container>
            {loading ? (
                <LoadingLottie />
            ) : (
                <S.CenterBox>
                    <S.Text>
                        <h1>Are you sure you want to delete this post?</h1>
                    </S.Text>
                    <S.Buttons>
                        <button onClick={setDeletePost}>No, go back</button>
                        <button
                            className="blue"
                            onClick={() => {
                                setLoading(true);
                                deletePost(postId, () => {
                                    setDeletePost();
                                });
                            }}
                        >
                            Yes, delete it
                        </button>
                    </S.Buttons>
                </S.CenterBox>
            )}
        </S.Container>
    );
};
export default ScreenDelete;
