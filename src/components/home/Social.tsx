import React from 'react'

type Props = {}

const Social = (props: Props) => {
    return (
        <div className="home__social">
            <a href="https://www.instagram.com" className="home__social-icon" target={"_blank"}>
                <i className="uil uil-instagram"></i>
            </a>
            <a href="http://www.fb.com" className="home__social-icon" target={"_blank"}>
                <i className="uil uil-facebook-f"></i>
            </a>
            <a href="https://github.com/Enzophan" className="home__social-icon" target={"_blank"}>
                <i className="uil uil-github-alt"></i>
            </a>
        </div>

    )
}

export default Social