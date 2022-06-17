import * as S from "./styles";
import { AiOutlineSearch } from "react-icons/ai";
import { DebounceInput } from "react-debounce-input";
import { useContext } from "react";

import { UserPageContext } from "../../providers/UserPageProvider";

// eslint-disable-next-line no-unused-vars
const SearchBar = ({ data }) => {
    const { getUsersSearchBar, usersSearchBar } = useContext(UserPageContext);

    return (
        <S.SearchBarContainer>
            <S.SearchBarContainerInput>
                <DebounceInput
                    minLength={3}
                    debounceTimeout={300}
                    onChange={(event) => getUsersSearchBar(event.target.value)}
                    placeholder="Search for people"
                    className="searchBar-input"
                />
                <p>Value: {usersSearchBar}</p>
                <AiOutlineSearch className="search-icon" />
            </S.SearchBarContainerInput>
            <S.SearchBarDataResult></S.SearchBarDataResult>
        </S.SearchBarContainer>
    );
};

export default SearchBar;
