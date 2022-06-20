import { useContext } from "react";

import { AuthContext } from "../../../../../../providers/AuthProvider";

const Inputs = () => {
    const { signInData, setSignInData } = useContext(AuthContext);

    const { email, password } = signInData;

    const handleData = (e) => {
        const { name, value } = e.target;

        const newData = {...signInData};
        newData[name] = value;
        setSignInData(newData);
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
        </>
    );
};

export default Inputs;