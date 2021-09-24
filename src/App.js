import React from 'react';
import Routes from './routes';
import CookieConsent from "react-cookie-consent";

function App() {
    return (
        <>
            <Routes/>
            
            <CookieConsent
                location="bottom"
                buttonText="Accept"
                cookieName="myAwesomeCookieName2"
                style={{ background: "#2B373B",fontSize: "13px" }}
                buttonStyle={{ color: "#fff", fontSize: "13px",background:'#33658a' }}
                enableDeclineButton >This site uses cookies. By continuing to use this website, you agree to their use.</CookieConsent>
        </>
    )
}

export default App;