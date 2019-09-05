import React from "react";
import insta from "../Images/instagram.svg";

const Logo = () => {
    return (
        <>
            <img
                src={insta}
                className="logo-img"
                alt="instagram"
                width="100"
                height="100"
            />

            <h3 className="logo-name">Instagraber</h3>
        </>
    );
};

export default Logo;
