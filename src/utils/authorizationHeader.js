const authorizationHeader = (token) => {
    return {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
};

export default authorizationHeader;
