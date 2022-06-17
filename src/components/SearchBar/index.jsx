import * as S from "./styles";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = () => {
    return (
        <S.SearchBarContainer>
            <AiOutlineSearch className="search-icon" />
            <S.SearchBarInput placeholder="Search for people" />
        </S.SearchBarContainer>
    );
};

export default SearchBar;
