import React from "react";
import {GrLinkedin} from "react-icons/gr"
import {FaGithubSquare} from "react-icons/fa"
import {GrInstagram} from "react-icons/gr"

const Social = ( ) => {
    return (
            <div className="social">
            <a href="https://www.linkedin.com/company/fudap-ng/" target= ""><GrLinkedin/></a>
            <a href="https://github.com" target=""><FaGithubSquare/></a>
            <a href="https://instagram.com" target= ""><GrInstagram/></a>
            </div>

    )
}

export default Social
