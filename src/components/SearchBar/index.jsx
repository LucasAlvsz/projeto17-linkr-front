/* eslint-disable no-undef */
import * as S from "./styles";
import { AiOutlineSearch } from "react-icons/ai";
import { DebounceInput } from "react-debounce-input";
import { useContext } from "react";

import { UserPageContext } from "../../providers/UserPageProvider";

// eslint-disable-next-line no-unused-vars
const SearchBar = () => {
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
                <AiOutlineSearch className="search-icon" />
            </S.SearchBarContainerInput>
            <S.SearchBarDataResult>
                {usersSearchBar.map((user, key) => {
                    return (
                        <a
                            href={`${process.env.REACT_APP_URI}/user/${user.id}`}
                            key={key}
                        >
                            <S.UserImage src={user.userpic}></S.UserImage>
                            <p>{user.username}</p>
                        </a>
                    );
                })}
            </S.SearchBarDataResult>
        </S.SearchBarContainer>
    );
};

export default SearchBar;
