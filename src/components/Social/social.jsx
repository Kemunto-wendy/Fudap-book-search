import React from "react";
import {GrLinkedin} from "react-icons/gr"
import {FaGithubSquare} from "react-icons/fa"
import {GrInstagram} from "react-icons/gr"


const Social = ( ) => {
    return (
            <div className="social">
            <a href="https://www.linkedin.com/company/fudap-ng/" target= "_blank"><GrLinkedin/></a>
            <a href="https://github.com" target= "_blank"><FaGithubSquare/></a>
            <a href="https://instagram.com" target= "_blank"><GrInstagram/></a>
            </div>

    )
}

export default Social
