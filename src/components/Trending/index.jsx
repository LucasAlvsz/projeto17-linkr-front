import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { TrendingContext } from "../../providers/TrendingProvider";
import { TimelineContext } from "../../providers/TimelineProvider";
import isLogged from "../../utils/isLogged";

import * as S from "./styles";

const Trending = () => {
    const { trending, getTrending } = useContext(TrendingContext);
    const { DataPosts } = useContext(TimelineContext);
    const navigate = useNavigate();
    useEffect(() => {
        if (!isLogged()) navigate("/sign-in");
        else getTrending();
    }, [DataPosts]);

    return (
        <S.TrendingContainer>
            <S.TrendingHeader>trending</S.TrendingHeader>
            <S.TrendingHashtagsContainer>
                {trending.map(({ id, name }) => (
                    <S.TrendingHashtag
                        key={id}
                        onClick={async () => {
                            navigate(`/hashtag/${name}`);
                        }}
                    >
                        # {name}
                    </S.TrendingHashtag>
                ))}
            </S.TrendingHashtagsContainer>
        </S.TrendingContainer>
    );
};

export default Trending;
