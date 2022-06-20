import getUserData from "./getUserData";

const isLogged = () => {
    const userData = getUserData();
    return userData || false;
};

export default isLogged;
