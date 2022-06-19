const handleError = (error) => {
    const errorData = error.response.data; 

    if (errorData[0]?.includes("is not allowed to be empty")) {
        return alert("All fields are required ");
    }

    return alert(errorData);
};

export default handleError;