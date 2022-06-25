import Lottie from "lottie-react";

import linkLoading from "./link-loading.json";
import style from "./style";

const LoadingLottie = () => {
    return <Lottie animationData={linkLoading} loop={true} style={style} />;
};

export default LoadingLottie;
