const Inputs = ({ signUpData, setSignUpData }) => {
    const { email, password, username, pictureUrl } = signUpData;

    const handleData = (e) => {
        const { name, value } = e.target;

        const newData = {...signUpData};
        newData[name] = value;
        setSignUpData(newData);
    };

    return (
        <>
            <input 
                placeholder="e-mail"
                value={email}
                name="email"
                onChange={handleData}
            />
            <input 
                placeholder="password"
                type="password"
                value={password}
                name="password"
                onChange={handleData}
            />
            <input 
                placeholder="username"
                value={username}
                name="username"
                onChange={handleData}
            />
            <input 
                placeholder="picture url"
                value={pictureUrl}
                name="pictureUrl"
                onChange={handleData}
            />
        </>
    );
};

export default Inputs;