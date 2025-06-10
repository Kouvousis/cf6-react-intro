import {useEffect} from "react";
import AutoRedirect from "../components/AutoRedirect.tsx";
import AdvancedRedirect from "../components/AdvancedRedirect.tsx";

const AutoRedirectPage = () => {

    useEffect(() => {
        document.title = 'Auto Redirect Example Page';
    }, [])

    return (
        <>
            <AutoRedirect/>
            <AdvancedRedirect />
        </>
    )
}

export default AutoRedirectPage