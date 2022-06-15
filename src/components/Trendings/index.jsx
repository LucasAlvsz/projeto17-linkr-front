import { useContext } from "react";

import { TrendingContext } from "../../providers/TrendingProvider";

import * as S from "./styles";

const Trendings = () => {
    const { trending } = useContext(TrendingContext);
    return (
        <S.TrendingContainer>
            <S.TrendingHeader>trending</S.TrendingHeader>
            <S.TrendingHashtagsContainer>
                {trending.map(({ id, name }) => (
                    <S.TrendingHashtag key={id}># {name}</S.TrendingHashtag>
                ))}
            </S.TrendingHashtagsContainer>
        </S.TrendingContainer>
    );
};

export default Trendings;
