const getUserData = () => {
    return JSON.parse(localStorage.getItem("userData"));
};

export default getUserData;
