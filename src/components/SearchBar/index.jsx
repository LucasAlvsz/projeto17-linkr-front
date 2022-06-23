/* eslint-disable no-undef */
import * as S from "./styles";
import { AiOutlineSearch } from "react-icons/ai";
import { DebounceInput } from "react-debounce-input";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { UserPageContext } from "../../providers/UserPageProvider";

// eslint-disable-next-line no-unused-vars
const SearchBar = () => {
    const navigate = useNavigate();
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
                    type="text"
                />
                <AiOutlineSearch className="search-icon" />
            </S.SearchBarContainerInput>
            <S.SearchBarDataResult>
                {usersSearchBar.map((user, key) => {
                    return (
                        <a
                            onClick={() => {
                                getUsersSearchBar("");
                                navigate(`/user/${user.id}`);
                            }}
                            key={key}
                        >
                            <S.UserImage src={user.userpic}></S.UserImage>
                            <p>{user.username}</p>
                            <span>{user.isFollower && "• following"}</span>
                        </a>
                    );
                })}
            </S.SearchBarDataResult>
        </S.SearchBarContainer>
    );
};

export default SearchBar;
