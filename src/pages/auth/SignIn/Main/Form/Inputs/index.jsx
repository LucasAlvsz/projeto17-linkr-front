const Inputs = ({ signInData, setSignInData }) => {

    const { email, password } = signInData;

    const handleData = (e) => {
        const { name, value } = e.target;
        const newData = { ...signInData };
        newData[name] = value;
        setSignInData(newData);
    };
    return (
        <>
            <input
                placeholder="e-mail"
                type="email"
                name="email"
                value={email}
                required
                onChange={handleData}
            />
            <input
                placeholder="password"
                type="password"
                name="password"
                value={password}
                required
                onChange={handleData}
            />
        </>
    );
};

export default Inputs;
