import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { TrendingContext } from "../../providers/TrendingProvider";

import * as S from "./styles";

const Trending = () => {
    const { trending } = useContext(TrendingContext);
    const navigate = useNavigate();

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
