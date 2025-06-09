import OnlineStatus from "../components/OnlineStatus.tsx";
import {useEffect} from "react";

const OnlineStatusPage = () => {

    useEffect(() => {
        document.title = "Online Status";
    }, []);

    return (
        <>
            <OnlineStatus/>
        </>
    )
}

export default OnlineStatusPage;