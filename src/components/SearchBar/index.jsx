import * as S from "./styles";
import { AiOutlineSearch } from "react-icons/ai";
import { DebounceInput } from "react-debounce-input";
import { useState } from "react";

// eslint-disable-next-line no-unused-vars
const SearchBar = ({ data }) => {
    const [search, setSearch] = useState({});
    return (
        <S.SearchBarContainer>
            <S.SearchBarContainerInput>
                <DebounceInput
                    minLength={3}
                    debounceTimeout={300}
                    onChange={(event) =>
                        setSearch({ value: event.target.value })
                    }
                    placeholder="Search for people"
                    className="searchBar-input"
                />
                <p>Value: {search.value}</p>
                <AiOutlineSearch className="search-icon" />
            </S.SearchBarContainerInput>
            <S.SearchBarDataResult></S.SearchBarDataResult>
        </S.SearchBarContainer>
    );
};

export default SearchBar;
