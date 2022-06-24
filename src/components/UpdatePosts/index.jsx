import * as S from "./style";
import { ImLoop2 } from "react-icons/im";
import { useContext } from "react";

import { LoadingContext } from "../../providers/LoadingProvider";
// import { TimelineContext } from "../../providers/TimelineProvider";

const UpdatePosts = ({ numberPosts }) => {
    const { update, setUpdate } = useContext(LoadingContext);
    // const { setNewPosts } = useContext(TimelineContext);
    if (numberPosts > 0) {
        return (
            <S.Button
                onClick={() => {
                    setUpdate(!update);
                }}
            >
                <S.Text>
                    <span>{numberPosts} new posts, load more!</span>
                    <S.Icon>
                        <ImLoop2 />
                    </S.Icon>
                </S.Text>
            </S.Button>
        );
    }
    return <></>;
};
export default UpdatePosts;
